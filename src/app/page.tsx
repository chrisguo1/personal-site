import Link from 'next/link';
import { getPublishedPosts } from '@/lib/notion';

export const revalidate = 60;

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function HomePage() {
  const posts = await getPublishedPosts();

  return (
    <div className="prose">
      <section className="mb-12">
        <p>
          Working at <strong>Chicago Trading Company</strong> as a Quantitative
          Trader. Building smart execution systems and designing quant research
          frameworks.
        </p>
        <p>
          Graduated from <strong>Northwestern University</strong> where I
          studied Math, Economics, and Computer Science.
        </p>
      </section>

      <section className="mb-12">
        <h2 id="experience" style={{ marginTop: 0 }}>
          Experience
        </h2>
        <ul>
          <li>Python</li>
          <li>Batch Data Processing &mdash; PySpark SQL, tick data</li>
          <li>Stream Processing &mdash; PySpark Structured Streaming</li>
          <li>Databases &mdash; Snowflake, Redis, Mongo</li>
          <li>Data Science &mdash; Numpy, Pandas</li>
          <li>Dashboarding &mdash; Plotly Dash, Sigma Computing</li>
        </ul>
      </section>

      <section>
        <h2 id="writing" style={{ marginTop: 0 }}>
          Writing
        </h2>
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
      </section>
    </div>
  );
}
