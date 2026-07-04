---
name: Chase Phung Portfolio
description: Person-first portfolio for a CS student at UC Irvine. Warm editorial serif, paper-and-ink palette with a sage accent, full-width tonal bands joined by curved wave seams.
colors:
  paper: "#f5f4ef"
  ink: "#1c2b45"
  sage: "#6f855f"
  sage-deep: "#4c5f3f"
  sage-light: "#a8bf9a"
  sage-band: "#e7ebdd"
typography:
  display:
    fontFamily: "var(--font-newsreader), Newsreader, serif"
    fontSize: "clamp(2.75rem, 6vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "normal"
  section-heading:
    fontFamily: "var(--font-newsreader), Newsreader, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "normal"
  serif-name:
    fontFamily: "var(--font-newsreader), Newsreader, serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  role:
    fontFamily: "var(--font-manrope), Manrope, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-manrope), Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  tag:
    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  pill: "999px"
  card: "26px"
spacing:
  3xs: "4px"
  2xs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
components:
  pill-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  pill-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    border: "1px solid rgba(28,43,69,.25)"
  link-accent:
    textColor: "{colors.sage-deep}"
    backgroundColor: "transparent"
    rounded: "0"
    padding: "0"
  band-sage:
    backgroundColor: "{colors.sage-band}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "56px 0"
  band-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "56px 0"
  card:
    backgroundColor: "rgba(255,255,255,.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "32px"
    border: "1px solid rgba(28,43,69,.1)"
---

# Design System: Chase Phung Portfolio

## 1. Overview

**Creative North Star: "Warm Editorial, Flowing Bands"**

A calm editorial sensibility executed as one continuous scroll. A single serif (Newsreader) carries every heading and the one italic accent; a clean grotesque (Manrope) carries all prose and UI; a monospace (JetBrains Mono) handles small technical labels and tags. The page is built from full-width tonal **bands** — warm paper, pale sage, deep ink navy — that flow into each other across curved **wave** seams rather than ruled lines. Voice words: **warm, candid, shipped**.

The site is person-first and single-page in spirit. The home page tells one story top to bottom (who, education, experience, startups, hackathons), and `/projects` is a supporting chapter. The largest type is the hero line and section headings; the accent color (sage) is used sparingly for the one italic hero word, links, tags, and the highlighted award.

This system replaces the previous "Daylight Poster" system (Bricolage Grotesque, cobalt accent, flat offset surfaces, ruled section rows). If an element still carries cobalt, `oklch()` tokens, the `line` hairline border, or the topographic contour motif, it is stale and should be reworked to this system.

**Key characteristics:**
- Three type roles: Newsreader serif (headings + italic accent), Manrope sans (prose/UI), JetBrains Mono (labels/tags)
- A paper-and-ink palette warmed by a single sage accent in three values
- Full-width tonal bands joined by curved SVG wave seams (`components/wave.tsx`)
- Generous rounding: 26px cards, pill buttons/tags, an organic-blob hero portrait
- Soft depth is allowed here (a light card shadow, a photo scrim), unlike the old flat-only rule

## 2. Colors: Paper, Ink, Sage

Tokens live in `app/globals.css` under `@theme inline` as hex and are used as Tailwind utilities (`bg-paper`, `text-ink`, `bg-sage-band`, `text-sage-deep`, …). Opacity variants use the slash syntax (`text-ink/75`, `border-ink/10`, `bg-white/60`).

### Roles
- **Paper** (`#f5f4ef`): The base page ground and the hero/education/hackathons bands.
- **Ink** (`#1c2b45`): Primary text on paper/sage; also a full band background and the education card, with paper text reversed out.
- **Sage** (`#6f855f`): The accent. The italic hero word, bullet markers, the highlighted award badge.
- **Sage Deep** (`#4c5f3f`): Accent text that must pass AA on paper — links, mono labels, tag text.
- **Sage Light** (`#a8bf9a`): Accent on the ink band (tags, small marks) where sage-deep would be too dark.
- **Sage Band** (`#e7ebdd`): The pale sage band background (Experience, footer CTA).

### Named Rules
**The Band Rhythm.** Backgrounds alternate paper → sage-band → ink → paper, with the footer closing on sage-band. Every band transition is a `<Wave>` seam, never a hard edge or a ruled border. Keep the count of ink bands low (one per page) so the navy stays a punctuation, not a theme.

**The AA Floor.** Measured text must clear 4.5:1 on its background. On paper use `ink` and `sage-deep` (not `sage`, which fails as small text). On the ink band use `paper` and `sage-light`. On sage-band use `ink` and `sage-deep`.

**Accent Discipline.** Sage is the only accent. It appears as: the single italic hero word, links (`sage-deep`), tags, bullet dots, and the one highlighted hackathon badge. Do not reintroduce cobalt or a second accent hue.

## 3. Typography: Newsreader + Manrope + JetBrains Mono

Loaded via `next/font/google` in `app/layout.tsx` as CSS variables: `--font-newsreader` (variable weight, `style: ["normal","italic"]`, `axes: ["opsz"]`), `--font-manrope` (variable weight), `--font-jetbrains-mono`. Body defaults to Manrope; `font-serif`/`font-mono` opt into the others.

### Hierarchy
- **Display / Hero** (Newsreader 500, `clamp(2.75rem, 6vw, 4rem)`, lh 1.05): The hero line. Exactly one italic sage word (`Software Engineer`) inside it.
- **Section Heading** (Newsreader 500, `clamp(2.25rem, 5vw, 3.25rem)`): "Education", "Experience", "Startups", "Hackathons".
- **Serif Name** (Newsreader 600, ~1.75–1.9rem): Project/startup/school names inside content.
- **Role** (Manrope 700, 1.25rem): Job title lines.
- **Body** (Manrope 400, 1rem, lh 1.65): All prose, capped ~52–62ch.
- **Label** (JetBrains Mono 500, 0.8125rem, uppercase, tracking 0.1em, `sage-deep`): Section markers like "Extracurriculars", project dates, the "See all projects →" link.
- **Tag** (JetBrains Mono, 0.6875rem, pill): Stack chips.

### Named Rules
**The Serif/Sans Split.** Newsreader is for headings and proper names only; Manrope is for everything a reader reads in sentences and every UI control. Do not set body copy in the serif or a heading in the sans.

**One Italic Accent.** Italic Newsreader in sage is reserved for a single emphasized phrase in the hero. Do not scatter italic sage words through the page.

**Mono Stays Small.** JetBrains Mono is for labels, dates, and tags only — never headings or body.

## 4. Surfaces, Depth, Motion

Unlike the retired flat-only system, gentle depth is part of this look:
- **Cards:** `rounded-[26px]`, translucent white (`bg-white/60`) with a hairline `border-ink/10` and a soft shadow (`0 2px 10px rgba(28,43,69,.05)`).
- **Bands:** full-bleed color blocks; the education block is an ink card, the startups/experience/footer are bands.
- **Waves:** `components/wave.tsx` renders a full-width `<svg>` seam; `from` is the outgoing band color, `to` the incoming one (pass theme vars, e.g. `var(--color-sage-band)`). Four path variants add variety.
- **Photo frames** (`PhotoFrame` in `app/page.tsx`): `next/image` fill inside a rounded frame with a bottom scrim for caption legibility. If the image is missing it falls back to a captioned diagonal-hatch frame (`onError`), so a missing `/public` photo never shows a broken-image icon.
- **Hero portrait:** organic blob via `border-radius: 58% 42% 55% 45% / 48% 55% 45% 52%`, full-color, `object-cover`.

Interactive feedback is quiet: opacity or border-color shifts on pills, `sage-deep → sage` on links, 150ms. Entry motion is the shared `Reveal` (IntersectionObserver fade-up 24px, 700ms, `prefers-reduced-motion` safe) — unchanged from before.

## 5. Components

### Shell
- **Header** (`components/shell/header.tsx`): sticky, `bg-paper/85` with `backdrop-blur`, hairline `border-ink/10`. Serif wordmark left; section anchors (Experience/Startups/Hackathons → `/#id`) + Projects + a sage `Résumé ↓` link right. Section anchors hide below `sm`; the wordmark and résumé always show.
- **Footer** (`components/shell/footer.tsx`): the closing CTA band, global on every route. A paper→sage `<Wave>` into a sage-band block: a serif italic line, an email pill plus outline pills (GitHub, LinkedIn, Résumé PDF).
- **Container:** `mx-auto w-full max-w-[1080px] px-6 sm:px-12`. `<main>` is full-width so bands bleed; each band re-applies the container inside.

### Home bands (in order)
1. **Hero + Education** (paper): serif hero line with the italic sage accent, Manrope blurb (~52ch), pill row (Email solid, GitHub/LinkedIn outline), blob portrait. Then the "Education" heading, an ink education card, and an "Extracurriculars" mono label over a sage-dotted bullet list.
2. **Experience** (sage band): heading, then a `[210px_1fr]` grid — company/meta in the label column, role + sage-dot bullets + tags in the content column.
3. **Startups** (ink band): heading, serif project name, description, sage-light tags, and a `PhotoFrame`.
4. **Hackathons** (paper): heading with a "See all projects →" mono link, two award cards (one highlighted sage badge, one neutral), and a full-width `PhotoFrame`.

### Projects page
Same container and type system. Each entry is a `[180px_1fr]` grid: mono date + event in the label column; serif title, body, mono tag pills, and sage-deep external links in the content column. No cards between entries, spacing only. The global footer supplies the contact CTA.

### Buttons and links
- **Pill (solid):** ink background, paper text, `rounded-full`, semibold 13px. Used for the primary email action.
- **Pill (outline):** `border-ink/25`, ink text; hover deepens the border. Secondary actions.
- **Content links:** `sage-deep`, hover `sage`. External links carry the small arrow glyph.
- All clickable text keeps vertical padding toward a 44px target.

## 6. Do's and Don'ts

### Do
- **Do** keep the three type roles distinct: Newsreader for headings/names, Manrope for prose/UI, JetBrains Mono for labels/tags.
- **Do** join bands with `<Wave>` seams and keep the paper→sage→ink→paper rhythm.
- **Do** use `sage-deep` (not `sage`) for small text on light grounds so it passes AA; use `sage-light` on the ink band.
- **Do** route résumé links to the real file in `/public` (currently `/Tech_Resume.pdf`), opened in a new tab. Never publish a nav or résumé link that 404s.
- **Do** keep copy in complete sentences, facts only. Personality comes from specifics.

### Don't
- **Don't** use em dashes in copy. Commas, colons, periods, parentheses.
- **Don't** reintroduce cobalt, `oklch()` tokens, the `line` hairline, ruled section rows, or the topographic motif — all belong to the retired system.
- **Don't** add a fourth typeface, set body copy in the serif, or use mono for anything but labels/tags.
- **Don't** add a second accent hue, or spread the italic sage accent beyond the one hero phrase.
- **Don't** embed the résumé as an iframe. It is a linked PDF, opened in a new tab.
- **Don't** hard-cut between two band colors; every tonal change is a wave seam.
