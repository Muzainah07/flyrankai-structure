# flyrankai

Scaffolded with Next.js (App Router), TypeScript, and Tailwind CSS.

## Routes

- `/` — Home
- `/dashboard` — Dashboard
- `/profile` — Profile
- `/settings` — Settings
- `/health` — Health check (fetches live data server-side to confirm the app can reach external APIs at runtime)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in real values. `.env.local` is gitignored and never committed.

## Deployment

Deployed on Vercel with preview deployments on every push. Live preview: _add your Vercel URL here_.

## Stack

- Next.js App Router — Server Components by default, Client Components only where interactivity is needed (e.g. `Nav.tsx`)
- Tailwind CSS with custom design tokens (see `src/app/globals.css`)
- TypeScript