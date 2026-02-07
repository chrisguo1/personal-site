# Personal Site

Next.js 15 + Tailwind CSS v4 + Notion CMS. Hosted on Vercel.

## Local Development

### Prerequisites

1. Create a Notion integration at https://www.notion.so/my-integrations and copy the API key
2. Share your "Personal Blog" database with the integration (click ··· in the database, then "Connections")
3. Get the database ID from the Notion database URL — it's the 32-character hex string before the `?v=`

### Setup

```bash
npm install
```

Create `.env.local`:

```
NOTION_API_KEY=secret_xxx
NOTION_DATABASE_ID=xxx
PROTECTED_CONTENT_PASSWORD=your-password-here
```

### Run

```bash
npm run dev
```

Opens at http://localhost:3000.

### Build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Connect the repo to Vercel
2. Add the three env vars above in Vercel project settings
3. Deploy — Vercel auto-detects Next.js

ISR is set to 60 seconds. Publish a post in Notion and it shows up on the site within a minute.
