import { NextResponse } from 'next/server';
import { getPostBySlug, getPostBlocks } from '@/lib/notion';
import { renderBlocks } from '@/lib/notion-renderer';

// In-memory rate limiter. Resets when the serverless function cold-starts,
// which is fine — persistent brute-force across cold starts is impractical.
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again later.' },
      { status: 429 },
    );
  }

  const { password, slug } = await request.json();

  const validPassword = process.env.PROTECTED_CONTENT_PASSWORD;
  if (!validPassword || password !== validPassword) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  // Sanitize slug
  const safeSlug = slug?.replace(/[^a-zA-Z0-9-_]/g, '');
  if (!safeSlug) {
    return NextResponse.json({ error: 'Invalid slug' }, { status: 400 });
  }

  const post = await getPostBySlug(safeSlug);
  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const blocks = await getPostBlocks(post.id);
  const html = await renderBlocks(blocks);

  return NextResponse.json({ html });
}
