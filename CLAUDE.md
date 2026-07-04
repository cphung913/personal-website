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

**Routing** — file-based under `app/`. Current routes: `/` (person-first single-page home: hero + education, experience, startups, hackathons, joined by wave seams; closing contact CTA lives in the global footer) and `/projects`. `/about` permanently redirects to `/` via `redirects()` in `next.config.ts`. Unknown routes hit `not-found.tsx`.

**Design system** — documented in `DESIGN.md` ("Warm Editorial, Flowing Bands": Newsreader serif for headings, Manrope for prose/UI, JetBrains Mono for labels/tags; warm paper ground, ink navy, one sage accent in three values; full-width tonal bands joined by curved `<Wave>` seams). `PRODUCT.md` holds audience and voice. Read both before visual changes; named rules there (Band Rhythm, Serif/Sans Split, Accent Discipline) constrain where color, serif, and italic may appear. The prior "Daylight Poster"/cobalt/OKLCH system is retired — treat any cobalt, `oklch()` token, or `line` hairline as stale.

**Layout** — `app/layout.tsx` is the single root layout. It loads three Google Fonts as CSS variables (`--font-newsreader` variable-weight with italic + the `opsz` axis, `--font-manrope` variable-weight, `--font-jetbrains-mono`) and renders `Header` and `Footer` from `components/shell/`. `<main>` is full-width so bands can bleed edge to edge; each band re-applies a `max-w-[1080px]` container with responsive padding.

**Styling** — Tailwind v4 with `@import "tailwindcss"` in `globals.css`. The `@theme inline` block defines hex color tokens (`paper`, `ink`, `sage`, `sage-deep`, `sage-light`, `sage-band`) used as Tailwind utilities (`bg-paper`, `text-sage-deep`, `bg-sage-band`, etc.), with opacity via the slash syntax (`text-ink/75`), plus `font-serif` (Newsreader), `font-sans` (Manrope, the body default), and `font-mono` (JetBrains Mono, labels/tags). Measured text pairs pass WCAG AA: on light grounds use `ink`/`sage-deep`; on the ink band use `paper`/`sage-light`.

**Data** — All page content is hardcoded as `const` arrays/objects at the top of each `page.tsx`. There is no CMS, database, or API layer. To add or update content, edit the data constants directly in the relevant page file. Copy rules: facts only, no em dashes.

**Client components** — Pages use `"use client"`. Scroll/entry animation goes through the shared `Reveal` component (`components/reveal.tsx`: IntersectionObserver fade-up with stagger delays, `prefers-reduced-motion` safe). `components/wave.tsx` renders the curved band seams. The home page's `PhotoFrame` uses `useState`/`onError` to fall back to a captioned hatch frame when a `/public` photo is missing, so a missing image never renders a broken-image icon.

**Static assets** — `public/chase.jpg` (portrait, hero blob), `public/pelennor.jpg` (startups band), `public/downstream.jpg` (hackathons band), and `public/Tech_Resume.pdf` (linked from header and footer; opened in a new tab, never embedded). If you rename the résumé file, update the `/Tech_Resume.pdf` hrefs in `header.tsx` and `footer.tsx`.
