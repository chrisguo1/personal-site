'use client';

import { useState, useCallback, useEffect } from 'react';
import type { TocHeading } from '@/lib/notion-renderer';

/** Group flat headings into H1 sections with nested H2 children. */
function groupHeadings(headings: TocHeading[]) {
  const sections: { heading: TocHeading; children: TocHeading[] }[] = [];
  for (const h of headings) {
    if (h.level === 1) {
      sections.push({ heading: h, children: [] });
    } else if (sections.length > 0) {
      sections[sections.length - 1].children.push(h);
    } else {
      // H2 before any H1 — treat it as a top-level entry
      sections.push({ heading: h, children: [] });
    }
  }
  return sections;
}

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [open, setOpen] = useState(false);
  const sections = groupHeadings(headings);

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const tocList = (
    <ol className="toc-list">
      {sections.map((section, i) => (
        <li key={section.heading.id} className="toc-item">
          <a
            href={`#${section.heading.id}`}
            onClick={close}
          >
            {section.heading.level === 1 && `${i + 1}. `}
            {section.heading.text}
          </a>
          {section.children.length > 0 && (
            <ul className="toc-sublist">
              {section.children.map((child) => (
                <li key={child.id} className="toc-subitem">
                  <a href={`#${child.id}`} onClick={close}>
                    {child.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* Hamburger button */}
      <button
        className="toc-hamburger"
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Full-page overlay (mobile + desktop fallback) */}
      {open && (
        <div className="toc-overlay" role="dialog" aria-label="Table of contents">
          <div className="toc-overlay-header">
            <button className="toc-close" onClick={close} aria-label="Close table of contents">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="toc-overlay-body" aria-label="Table of contents">
            <h2 className="toc-overlay-title">Contents</h2>
            {tocList}
          </nav>
        </div>
      )}

      {/* Desktop sidebar (always visible, no overlay needed) */}
      <nav className="toc-sidebar" aria-label="Table of contents">
        <h2 className="toc-sidebar-title">Contents</h2>
        {tocList}
      </nav>
    </>
  );
}
