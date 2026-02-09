# TODO

## Setup
- [ ] Create Notion integration and get API key
- [ ] Share "Personal Blog" database with the integration
- [ ] Get database ID from Notion URL
- [ ] Create `.env.local` with NOTION_API_KEY, NOTION_DATABASE_ID, PROTECTED_CONTENT_PASSWORD
- [ ] Change "How I Made this Site" status from Draft to Published in Notion
- [ ] Test locally with `npm run dev`

## Deploy
- [ ] Create Vercel account / project
- [ ] Connect GitHub repo to Vercel
- [ ] Set env vars in Vercel dashboard
- [ ] Deploy and verify

## Table of Contents (like darioamodei.com/essay/the-adolescence-of-technology)
- [ ] Extract heading blocks (h1/h2/h3) from Notion content at render time
- [ ] Build a ToC data structure with id anchors and nesting levels
- [ ] Add id attributes to rendered heading elements in notion-renderer.ts
- [ ] Create a sidebar ToC component that displays on desktop (fixed/sticky position)
- [ ] Make the ToC foldable/collapsible (default open on desktop)
- [ ] Highlight the active section on scroll (Intersection Observer)
- [ ] On mobile: hide sidebar, show a collapsible ToC at the top of the post instead
- [ ] Only show ToC on posts with 3+ headings (skip for short posts)

## Mobile
- [ ] Test all pages on small screens (375px width)
- [ ] Ensure header doesn't overflow (name + nav + toggle)
- [ ] Ensure post list items wrap properly (title + date)
- [ ] Ensure code blocks scroll horizontally, not overflow the page
- [ ] Ensure images are constrained to viewport width
- [ ] Ensure password gate form is usable on mobile (input + button sizing)
- [ ] Test dark/light toggle tap target is large enough (44x44px minimum)
- [ ] Test with iOS Safari and Android Chrome

## Nice to have
- [ ] Add favicon
- [ ] Add OG image for social sharing
- [ ] Add RSS feed
- [ ] Add syntax highlighting for code blocks (e.g. Shiki)
- [ ] Add reading time estimate to posts
