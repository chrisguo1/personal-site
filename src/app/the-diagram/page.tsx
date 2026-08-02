import type { Metadata } from 'next';
import { reports } from '@/lib/reports';

export const metadata: Metadata = {
  title: 'The Diagram',
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function TheDiagramPage() {
  return (
    <div className="prose">
      <h1 style={{ marginTop: 0, marginBottom: '2rem' }}>The Diagram</h1>

      <section className="mb-12">
        <p>
          I have always wanted to make sense of the world, but nobody was good
          enough at explaining how each individual piece connected to each
          other. This is my attempt to do so.
        </p>
        <p>
          First, I try to understand the US economic and societal state via a
          bunch of time series graphs.
        </p>
      </section>

      <section>
        <h2 id="reports" style={{ marginTop: 0 }}>
          Reports
        </h2>
        {reports.length === 0 ? (
          <p style={{ color: 'var(--color-text-muted)' }}>No reports yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            {reports.map((report) => (
              <li key={report.date} style={{ marginBottom: '2rem' }}>
                <div className="flex justify-between items-baseline">
                  {/* Plain anchor: these are static files in public/, not routes. */}
                  <a href={report.href}>Macro Analysis Report</a>
                  <span
                    className="text-sm ml-4 shrink-0"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {formatDate(report.date)}
                  </span>
                </div>
                {report.commentary && (
                  <p
                    className="text-sm"
                    style={{
                      color: 'var(--color-text)',
                      marginTop: '0.5rem',
                      marginBottom: 0,
                    }}
                  >
                    {report.commentary}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
