import type { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedPosts } from '@/lib/notion';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Writing',
};

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function WritingPage() {
  const allPosts = await getPublishedPosts();
  const posts = allPosts.filter((p) => !p.isPrivate);

  return (
    <div className="prose">
      <h1 style={{ marginTop: 0, marginBottom: '2rem' }}>Writing</h1>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--color-text-muted)' }}>No posts yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {posts.map((post) => (
            <li
              key={post.slug}
              className="flex justify-between items-baseline"
              style={{ marginBottom: '0.75rem' }}
            >
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              <span
                className="text-sm ml-4 shrink-0"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {formatDate(post.date)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
