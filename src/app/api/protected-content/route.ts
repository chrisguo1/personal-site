import { NextResponse } from 'next/server';
import { getPostBySlug, getPostBlocks } from '@/lib/notion';
import { renderBlocks } from '@/lib/notion-renderer';

export async function POST(request: Request) {
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
