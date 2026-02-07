# CLAUDE.md

## Project Overview

Personal portfolio and blog site built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. Uses Notion as a headless CMS for blog content.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.9.3 (strict mode)
- **Styling**: Tailwind CSS v4 (via PostCSS)
- **CMS**: Notion API (`@notionhq/client`)
- **Hosting**: Vercel

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server

There are no lint or test commands configured.

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Home page (bio + published posts list)
    layout.tsx            # Root layout with dark mode support
    blog/[slug]/page.tsx  # Dynamic blog post pages (SSG + ISR)
    api/protected-content/route.ts  # Password-protected content endpoint
  components/             # React components (Header, Footer, ThemeToggle, PasswordGate)
  lib/
    notion.ts             # Notion API client & data fetching
    notion-renderer.ts    # Converts Notion blocks to HTML
  styles/
    globals.css           # Global styles & CSS custom properties for theming
```

## Key Architecture Decisions

- **Static Site Generation with ISR**: Pages are statically generated at build time and revalidated every 60 seconds.
- **Notion as CMS**: Blog posts are authored in Notion and fetched via the Notion API. The renderer (`notion-renderer.ts`) converts Notion blocks to HTML server-side.
- **Dark mode**: Implemented with CSS custom properties, localStorage persistence, and system preference detection. An inline script in `<head>` prevents flash of wrong theme.
- **Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Environment Variables

Required in `.env.local`:

```
NOTION_API_KEY=secret_xxx
NOTION_DATABASE_ID=<database-id>
PROTECTED_CONTENT_PASSWORD=<password>
```

## Security Notes

- Server-side HTML escaping in `notion-renderer.ts`
- Client-side sanitization with DOMPurify for protected content
- Rate limiting (5 attempts / 15 min) on the protected content API route
- Slug validation to prevent injection
