---
name: Chase Phung Portfolio
description: Personal portfolio for a CS/ML researcher — precise, functional, direct.
colors:
  warm-ash: "oklch(96.5% 0.006 89)"
  ink: "oklch(10.5% 0.003 89)"
  slate: "oklch(28.5% 0.038 243)"
  forest: "oklch(43% 0.099 155)"
  forest-deep: "oklch(37% 0.090 155)"
  pencil: "oklch(49% 0.008 89)"
  fog: "oklch(93.5% 0.010 150)"
typography:
  display:
    fontFamily: "var(--font-spectral), Georgia, serif"
    fontSize: "clamp(2.375rem, 10vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "var(--font-spectral), Georgia, serif"
    fontSize: "clamp(1.375rem, 3vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "var(--font-spectral), Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
  mono:
    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.02em"
rounded:
  none: "0"
  sm: "2px"
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
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.warm-ash}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.warm-ash}"
    rounded: "{rounded.none}"
    padding: "10px 20px"
  link-accent:
    textColor: "{colors.forest}"
    backgroundColor: "transparent"
    rounded: "{rounded.none}"
    padding: "0"
  focus-card:
    backgroundColor: "{colors.fog}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "20px 24px"
---

# Design System: Chase Phung Portfolio

## 1. Overview

**Creative North Star: "The Lab Notebook"**

A research notebook is both precise and personal. It has structure: numbered entries, dates, references, rigorous notation. It also has character: annotations in the margins, a sketch of something half-understood, the ink weight of an idea that mattered. This design system holds that tension. The vocabulary comes from the work — technical reports, engineering documentation, the kind of thing someone reads when they want to understand how something actually works — not from design trends or portfolio templates.

Every element earns its presence through function. Spacing does the work that borders and dividers usually fake. Typography hierarchy replaces decoration. The warm ash ground (#F7F5F0) is the only concession to softness; everything built on top of it is deliberate, direct, and slightly uncomfortable with ornamentation. The accent green appears only at moments of genuine action: a link to follow, a file to download, a status worth tracking.

This system explicitly rejects the editorial-typographic lane (display serif, small-caps metadata, ruled separators, warm paper) that has flooded personal portfolios since 2024. It also rejects SaaS AI slop (glassmorphism, gradient text, hero metrics, identical card grids, neon accents) and the "creative developer" aesthetic (brutalist-for-shock, neon-on-black, excessive motion). The reference is closer to a well-typeset technical document than to a magazine or a startup landing page.

**Key Characteristics:**
- Flat, ink-on-paper surfaces — no shadows, no elevation, no decorative layering
- Spectral at display scale reads like a typeface chosen for legibility, not performance
- Geist carries all UI text: precise, slightly technical, not trying to be warm
- The forest green accent is rare; its rarity is what makes it mean something
- Spacing creates rhythm; no ruled separators needed
- Sharp corners throughout — `border-radius: 0` is the default

## 2. Colors: The Warm Ash Palette

A warm neutral ground with a single committed accent. The palette has two modes: the page (ash, ink, slate) and the action (forest green).

### Primary
- **Forest** (`oklch(43% 0.099 155)`): The accent. Used for links, the primary CTA button, the focus-card surface tint, and the active nav indicator. Appears on less than 10% of any given page. Its restraint is the point.
- **Forest Deep** (`oklch(37% 0.090 155)`): Hover/active state for Forest. Slightly darker, same hue. No other color shift on interaction.

### Neutral
- **Warm Ash** (`oklch(96.5% 0.006 89)`): Page background. The slight warm-yellow tint avoids clinical white without performing coziness. Never pure white (#fff is prohibited).
- **Ink** (`oklch(10.5% 0.003 89)`): Primary body text. Near-black with a hair of warmth. Never pure black (#000 is prohibited).
- **Slate** (`oklch(28.5% 0.038 243)`): Heading text. The slight blue component separates headings from body without needing size alone to carry the distinction. Use for all display, headline, and title type.
- **Pencil** (`oklch(49% 0.008 89)`): Muted metadata: dates, labels, secondary links. Passes WCAG AA 4.5:1 contrast on Warm Ash. The old muted value (`#888880`, approximately `oklch(59% 0.006 89)`) fails AA and is prohibited.
- **Fog** (`oklch(93.5% 0.010 150)`): Muted surface — used only for the FocusCard background. The slight green lean toward Forest makes the tint intentional without being loud.

### Named Rules
**The Rarity Rule.** Forest green appears on less than 10% of any screen surface. When everything is green, nothing is. If you are considering a green border, green dot, green badge, or green background that isn't the FocusCard tint or a button — reconsider. The default for "important" is whitespace and scale, not color.

**The AA Floor.** No text, label, or metadata color may fall below 4.5:1 contrast on Warm Ash. Pencil (`oklch(49% 0.008 89)`) is the lightest permissible muted tone. Do not use a lighter muted color to chase a "softer" aesthetic.

## 3. Typography: Spectral + Geist

**Display Font:** Spectral (Google Fonts, loaded via `next/font/google`)
**Body / UI Font:** Geist Sans (Vercel, loaded via `geist` package)
**Mono Font:** JetBrains Mono (functional use only — code blocks and inline code)

**Character:** Spectral at display weight reads like a typeface chosen for a technical report that needed to last — humanist construction, text-optimized optical quality, more document than performance. Geist handles everything else: neutral, precise, slightly technical without costuming. The two families share a respect for negative space. Neither gestures at editorial or magazine traditions.

### Hierarchy
- **Display** (Spectral 700, `clamp(38px, 10vw, 64px)`, lh 1.05): Hero name only. One instance per page.
- **Headline** (Spectral 600, `clamp(22px, 3vw, 26px)`, lh 1.25): Page section headers (Recent Writing, Featured Projects, Resume). The section heading is the navigational anchor.
- **Title** (Spectral 400, `18px`, lh 1.3): Individual project titles, post titles, subsection names within a section.
- **Body** (Geist 400, `15px`, lh 1.7): All prose. Maximum line length: 65ch. Ink color for primary content.
- **Label** (Geist 500, `11px`, tracking 0.1em, uppercase): Dates, categories, stack entries, metadata. Pencil color. Uppercase labels are for short strings only — never body copy.
- **Mono** (JetBrains Mono 400, `13px`, lh 1.6): Code blocks, inline code, terminal output. Never used for stack tags or decorative "technical" labeling — that is the monospace-as-costume anti-pattern.

### Named Rules
**The Single Display Rule.** Spectral at display scale (clamp 38–64px) appears exactly once per page — the hero name. Every other Spectral instance is headline (22–26px) or title (18px). Mixing display-scale Spectral across multiple elements cheapens it.

**The Mono Discipline Rule.** JetBrains Mono is for code. Stack technology names (React, Python, FastAPI) are rendered in Geist label style, separated by `·`, not in JetBrains Mono at 10px all-caps. Monospace is a functional choice, not an aesthetic signal.

## 4. Elevation

This system is flat. No box shadows anywhere in the default state. Depth is conveyed through spacing, background differentiation (Fog vs. Warm Ash), and border weight — never through blur or lift.

The FocusCard uses a Fog background and a 1px full border at `oklch(43% 0.099 155 / 0.15)` (Forest at 15% opacity) to create structural separation. This replaces the banned side-stripe border pattern. No other card or container uses a background tint.

Interactive state for the primary button uses a background color shift (Forest to Forest Deep) with a 150ms ease-out transition — no shadow, no scale transform, no lift effect.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. The only depth signal is tonal: Fog (93.5% lightness) against Warm Ash (96.5% lightness). If you reach for `box-shadow`, ask whether spacing and background differentiation can do the same job. They usually can.

**The No Stripe Rule.** `border-left` or `border-right` greater than 1px used as a colored accent on any card, callout, or list item is prohibited. This pattern borrows visual weight through decoration rather than earning it through structure. Rewrite with a full border, a background tint, or nothing.

## 5. Components

### Buttons
Sharp corners throughout — zero border-radius is the default. Buttons are intentional; they do not have rounded edges.

- **Primary:** Forest background, Warm Ash text, `padding: 10px 20px`. Geist 500, `11px`, tracking `0.15em`, uppercase. Used for the resume download CTA and any primary page action.
- **Hover:** Forest Deep background, 150ms `ease-out` color transition. No scale transform, no shadow.
- **No secondary/ghost button exists.** Text links with arrow glyphs (→) handle secondary actions throughout.

### Links
- **Accent links:** Forest color, no underline at rest, `text-decoration: underline` on hover. Used for all content links, project GitHub/Devpost links, and "View All" section links.
- **Icon links (social):** Slate at rest, Forest on hover, 150ms color transition. Must have visible text label or `aria-label`. Icon-only links without `aria-label` are prohibited.
- **Nav links:** Pencil at rest, Slate on hover, Forest on active route. Geist 400, `14px`. No underline, no background. Active state is color only — no underline, no background highlight.

### Navigation
Inline horizontal nav. Links spaced with `gap: 32px`. No background, no border, no separator. The header contains name (left, Geist 500 14px, Slate) and nav links (right, Geist 400 14px). Mobile: nav collapses below name. Blog link is removed until content exists — a 404 nav link is worse than no nav link.

### Focus Card
The above-the-fold "Current Technical Focus" panel. Structural differentiation through background, not border stripe.

- Background: Fog (`oklch(93.5% 0.010 150)`)
- Border: 1px solid `oklch(43% 0.099 155 / 0.15)` (Forest at 15% opacity), all sides
- Border-radius: 2px
- Padding: `20px 24px`
- No left-side accent stripe (prohibited)
- Contains: label (Geist Label, Pencil), title (Spectral Headline, Slate), description (Geist Body, Ink), status indicator (Forest dot + Geist Label, Pencil)

### Project Entries
Two-column layout: metadata left (`160px` fixed), content right. The column widths are not identical across all entries — featured or standout projects may use a different structural treatment (full-width title at Headline scale, metadata inline below). Stack technology names: Geist Label, Pencil, separated by `·` — not JetBrains Mono, not all-caps tokens.

Sections are separated by spacing (`margin-bottom: 56px` between entries) rather than ruled separators. No `border-bottom` between entries.

### Section Headers
Spectral Headline + "View All" Geist Label link in a flex row. No `border-bottom` separator — sections are divided by generous spacing above the header (`margin-top: 64px`), not by a horizontal rule. The ruled separator pattern is prohibited.

Touch targets for all clickable text (including "View All" links) must be a minimum 44px tall. `font-size: 11px` links need `padding` added to meet this, even if the visual size stays small.

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all color values. High chroma at extremes (near lightness 0 or 100) looks garish — keep chroma below 0.01 for near-white and near-black tones.
- **Do** use Spectral exclusively for display, headline, and title hierarchy. Geist for all body, label, and UI text.
- **Do** use Forest green only for functional moments: links, the primary button, the FocusCard border tint, the active nav state. ≤10% of any surface.
- **Do** cap body line length at 65ch. Long measure is the most common readability failure on unconstrained containers.
- **Do** use spacing variation (generous between sections, tighter within) to create page rhythm. Let whitespace separate sections before reaching for dividers.
- **Do** ensure all muted text uses Pencil (`oklch(49% 0.008 89)`) or darker. Never a lighter muted tone.
- **Do** gate all CSS transitions with `prefers-reduced-motion: reduce` — set `transition: none` in the reduced-motion media query.
- **Do** give all touch targets a minimum 44px height, regardless of the visual font size.
- **Do** use `aria-label` on all icon-only interactive elements.

### Don't:
- **Don't** use side-stripe borders (`border-left` or `border-right` greater than 1px as a colored accent). This pattern is prohibited on all cards, callouts, list items, and alerts.
- **Don't** use gradient text (`background-clip: text` with a gradient background). Prohibited.
- **Don't** use glassmorphism decoratively (blurs, frosted glass effects). Prohibited.
- **Don't** use JetBrains Mono for stack tags, technology labels, or decorative "technical" text. Mono is for code. This is the monospace-as-costume anti-pattern.
- **Don't** use `hover:scale-105` or any scale transform on text links or nav items. It reads as a beginner animation choice and conflicts with the precision of the system. Use color transitions instead.
- **Don't** use `#888880` or any lighter muted tone for text. It fails WCAG AA contrast on Warm Ash and is replaced by Pencil.
- **Don't** use `border-bottom` ruled separators between sections as decoration. Use spacing.
- **Don't** publish a nav link that returns a 404. Remove Blog from the nav until content exists.
- **Don't** land in the editorial-typographic lane: display serif italics, small-caps metadata with wide tracking, three-column ruled grids, broadsheet magazine composition. That aesthetic saturated personal portfolio surfaces in 2024–2026 and reads as template.
- **Don't** use pastel gradients, floating icon-above-heading cards, or hero metric layouts. These are generic developer portfolio patterns and SaaS AI slop signals.
- **Don't** place important CTAs in the header or navigation when the home page has no resume link. The resume is the primary conversion artifact for a recruiter; it belongs on the home page.
- **Don't** nest a `<main>` element inside the root layout's `<main>`. The about page currently does this — it breaks screen reader document semantics.
