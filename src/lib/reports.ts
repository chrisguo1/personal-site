export interface Report {
  /** ISO date the report was generated. */
  date: string;
  /** Path under public/, served as a static file. */
  href: string;
  /** Optional note shown beneath the report link. */
  commentary?: string;
}

/**
 * To publish a new report: copy the generated HTML to
 * public/the-diagram/macro-<YYYY-MM-DD>.html and add an entry at the top here.
 */
export const reports: Report[] = [
  {
    date: '2026-08-01',
    href: '/the-diagram/macro-2026-08-01.html',
    commentary:
      'I pulled this data from a bunch of sources — FRED, NY Fed, CDC, LBMA, ' +
      'Yahoo Finance, etc. The goal for this report was to show all the ' +
      'different measurements of the US economic and societal state in one place.',
  },
];
