'use client';

import { useState } from 'react';
import type { TocHeading } from '@/lib/notion-renderer';

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [open, setOpen] = useState(true);

  return (
    <nav className="toc" aria-label="Table of contents">
      <button className="toc-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="toc-title">Contents</span>
        <svg
          className="toc-chevron"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s ease' }}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ol className="toc-list">
          {headings.map((heading) => (
            <li key={heading.id} className="toc-item">
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
