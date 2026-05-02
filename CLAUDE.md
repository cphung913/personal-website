# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build (runs type-check)
npm run lint     # ESLint across the project
npm run start    # serve the production build
```

There are no tests in this project.

## Architecture

Next.js 16 App Router project (running React 19, Tailwind CSS v4). Hosted on Vercel with `@vercel/analytics` wired into the root layout.

**Routing** — file-based under `app/`. Each route is a `page.tsx`. Current routes: `/` (home), `/projects`, `/about`. A `/blog` route is linked in the nav but not yet implemented (`not-found.tsx` handles 404s).

**Layout** — `app/layout.tsx` is the single root layout. It sets up three Google Fonts as CSS variables (`--font-dm-sans`, `--font-dm-serif`, `--font-jetbrains-mono`), renders `Header` and `Footer` from `components/shell/`, and constrains page content to `max-w-180` with responsive padding. The `Analytics` component lives inside `<main>`.

**Styling** — Tailwind v4 with `@import "tailwindcss"` in `globals.css`. The `@theme inline` block maps the font CSS variables to `font-sans`, `font-serif`, and `font-mono` utility classes. Raw hex color values (`#F7F5F0`, `#0D0D0D`, `#2C3E50`, `#1A6B4A`, `#888880`) are used inline throughout — no Tailwind color aliases defined. The accent/brand green is `#1A6B4A`.

**Data** — All page content (projects, posts, focus card) is hardcoded as `const` arrays at the top of each `page.tsx`. There is no CMS, database, or API layer. To add or update content, edit the data constants directly in the relevant page file.

**Client components** — All pages use `"use client"` for entry-fade animations (driven by `requestAnimationFrame` + `useState`, or `IntersectionObserver` for scroll-in effects). The `Header` is also a client component for `usePathname`-based active link highlighting.

**Static assets** — `public/chase.jpg` (profile photo) and `public/resume.pdf` (embedded via `<iframe>` on `/about` with a download link).
