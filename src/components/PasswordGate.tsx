'use client';

import { useState } from 'react';
import DOMPurify from 'dompurify';

export default function PasswordGate({ slug }: { slug: string }) {
  const [password, setPassword] = useState('');
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await fetch('/api/protected-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, slug }),
      });

      if (!res.ok) {
        setError(true);
        return;
      }

      const data = await res.json();
      setHtml(DOMPurify.sanitize(data.html));
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className="my-8">
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
        This content is protected. Enter the password to view it.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="px-4 py-2 rounded text-sm"
          style={{
            border: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 rounded text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
          style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
          }}
        >
          {loading ? 'Loading...' : 'Unlock'}
        </button>
      </form>
      {error && (
        <p className="text-sm mt-2" style={{ color: '#ef4444' }}>
          Incorrect password.
        </p>
      )}
    </div>
  );
}
