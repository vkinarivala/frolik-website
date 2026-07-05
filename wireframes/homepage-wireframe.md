# Frolik+Co — Home page wireframe (v2, Memphis design system)

Supersedes `archive/v1/homepage-wireframe.md`. Matches the shipped design system
(`references/frolik-co-design-system/`) and pulls real copy from
`references/frolik+co-research.md`. The live implementation is `index.html`;
shared components live in `styles/main.css`, `scripts/partials.js`, `scripts/main.js`.

**Goal (research §5):** a visitor understands the studio in 10 seconds — all interiors,
special understanding of kids — and is pushed to view work or start a project.

**Page `<title>`:** `Frolik + Co | Interior Designer in Ahmedabad for Homes & Kids Spaces`
**Structured data:** `LocalBusiness` JSON-LD in `<head>`.

---

## Section order

```
0. Header (shared partial)
1. Hero — full viewport, parallax stickers
2. Marquee A (coral, scroll-scrubbed)
3. Services — 4 cards
4. Featured work — pinned horizontal gallery (real kids projects first)
5. Signature: Kids' spaces — split feature block
6. Proof — stats + testimonial + press strip
7. Marquee B (mint, opposite direction)
8. Process — 5 steps, ink band, scroll-drawn line
9. Final CTA
10. Footer (shared partial)
```

---

## 0. Header — `scripts/partials.js`
- Fixed; cream @82% + 10px blur; 2px ink bottom border fades in after 24px scroll.
- Left: actual logo image (`assets/frolik-logo.jpeg`, 48px card w/ ink border).
- Center links: Work · Kids' spaces · Services · Process · About. Active page gets a
  persistent coral underline. Hidden below 820px (mobile menu is a later task).
- Right: `Let's talk` coral pop button → `contact.html`.

## 1. Hero
- Full viewport (`100svh`), cream. 5 parallax motif stickers (striped circle, plus,
  dot-sun, arc-sky, slash) pop in staggered, then drift at per-sticker `data-speed`.
- Eyebrow: `INTERIOR DESIGN STUDIO · AHMEDABAD · EST. 2016` (coral rule).
- H1 (display, 3 masked lines rising in): **"Rooms that work hard & frolik harder."**
  — "frolik harder" in coral with the hand-drawn mint underline (stroke-dash draw).
  This is the page's single use of the "frolik" wink.
- Sub (research §13 supporting line): *"Frolik + Co is an Ahmedabad-based interior
  design studio creating warm, functional, personality-filled spaces — from refined
  homes and workspaces to joyful rooms designed especially for children."*
- CTAs: `Start a project` (coral pop, → contact) · `See our work` (ghost, → #work).
- Bottom-left scroll cue (pulsing coral dot + label).

## 2. Marquee A
- Coral band, 2px ink borders. Items: Residential ✳ Commercial ✳ Workspace ✳
  Kids' spaces ✳ Ahmedabad ✳ (repeated). Drifts continuously + scrubs with scroll.

## 3. Services (home overview per research §5.5)
- Header row: eyebrow (mint) `WHAT WE DO`, H2 "One studio, every kind of room.",
  right-aligned muted lede.
- 4 outlined pop-shadow cards, slight resting tilt, straighten on hover; staggered
  bounce reveal. Colour-chip icons: coral / mint / sand / sky.
  1. **Homes** — "Full homes, apartments and renovations that hold your story."
  2. **Kids' spaces** — "Our first love — bedrooms, playrooms and study corners that grow with the child."
  3. **Workspaces & studios** — "Offices designed for focus and warmth, not fluorescent fatigue."
  4. **Styling & renovation** — "Custom furniture, styling and final-mile details that finish a space."
- (Full 6-service breakdown lives on services.html; the home page stays light.)

## 4. Featured work — pinned horizontal gallery
- Sand band, ink borders. Section pins; vertical scroll walks the rail sideways;
  coral progress bar. Reduced motion → native horizontal scroll, no pin.
- Header: eyebrow (coral) `SELECTED WORK`, H2 "Recent spaces we love — keep
  scrolling to walk through."
- Card = outlined media well (flat colour + centered motif, ready for photography)
  + title + type · location + type pill.
- **Order per research: kids first (credibility), then range.**
  1. The Coral Joy — Kids' spaces · Ahmedabad (REAL — The Architects Diary)
  2. The Monochromatic Room — Kids' spaces · Ahmedabad (REAL)
  3. The Purple Play Room — Kids' spaces · Ahmedabad (REAL)
  4. The Playhouse Loft — Residential · Ahmedabad (PLACEHOLDER — replace with real project)
  5. Clay & Co. Café — Commercial · Ahmedabad (PLACEHOLDER)
  6. Studio Marigold — Workspace · Baroda (PLACEHOLDER)
- End card (dashed outline): "See all projects →" → work.html.

## 5. Signature: Kids' spaces (research §5.4 — NEW section)
- Cream, two columns. Left: eyebrow (sun) `OUR SIGNATURE`, H2 **"Rooms made for
  little people with big imaginations."**, sub: *"We design kids' spaces that bring
  together play, study, sleep, storage, safety and softness — so the room works
  beautifully today and still feels relevant as the child grows."* (research §13)
- Principle list (motif bullets, staggered reveal):
  - Rooms that grow with the child
  - Play, study, sleep, storage — planned as one world
  - Soft palettes, safe details, custom furniture, playful forms
- CTA: `Explore kids' spaces` (ink pop button) → kids-spaces.html.
- Right: playful collage — one tall sky tile + two small (sun, mint) tiles, ink
  outlines + pop shadows, motif centerpieces; bounce reveals. Sun/sky accents are
  allowed to dominate ONLY here (kids context).

## 6. Proof — stats + quote + press
- Left: eyebrow `WHY PEOPLE STAY`, H2 "Numbers we're quietly proud of.",
  3 count-up stats: 120+ spaces · 9 years · 4 cities (PLACEHOLDER numbers — confirm).
- Right: mint quote card, pop shadow, plus-sticker pinned at top:
  Rhea & Aakash testimonial (PLACEHOLDER — replace with a real client note).
- Below, full-width press strip (research §5.7): hairline top border, eyebrow
  `FEATURED IN`, "The Architects Diary — The Coral Joy · The Monochromatic Room ·
  The Purple Play Room". Real credibility; link when URLs are collected.

## 7. Marquee B — mint band, opposite scrub direction.

## 8. Process (research §5.6 — five steps)
- Ink band. Eyebrow `HOW IT WORKS`, H2 **"Thoughtful from the first sketch to the
  final cushion."**, lede: *"Every project begins with how the space will be used —
  routines, light, storage, movement, materials and mood before the look."*
- Vertical timeline, coral line draws with scroll; numbered dots light coral:
  1. **Discovery** — site visit, lifestyle, family needs, budget, timeline.
  2. **Concept** — mood board, colour story, zoning, rough direction.
  3. **Design** — layouts, furniture, materials, lighting, storage, 3D views.
  4. **Build** — custom furniture, vendor coordination, site work.
  5. **Style & handover** — styling, photos, final walkthrough.
- ("What you receive" checklist belongs on process.html, not here.)

## 9. Final CTA (research §13)
- Cream, centered, 2 parallax stickers. H2: **"Have a space in mind?"** (accent
  colour on "space"). Sub: *"Tell us what you're planning — a home, a child's room,
  a playroom, a studio, or something completely new."*
- Button: `Let's talk` (ink pop) → contact.html (mailto until the form exists).

## 10. Footer — `scripts/partials.js`
- Ink band. Logo card (80px) + one-liner; Studio links column; Say-hello column
  (email, Instagram @frolikncodesigns, Ahmedabad). Bottom row: © + brand line
  "Made with grown-up craft and a child's sense of play."
- TODO when available: WhatsApp `wa.me` + `tel:` links (local SEO must-haves).

---

## Motion map (all vanilla JS, one rAF loop — see `scripts/main.js`)
| Section | Pattern |
|---|---|
| Hero | line-mask rise, stroke-draw underline, sticker pop-in → parallax |
| Marquees | continuous drift + scroll scrub (opposite directions) |
| Services / kids collage | staggered `.reveal-pop` (tilt + bounce) |
| Work | pin + horizontal rail scrub + progress bar |
| Stats | count-up on first intersection |
| Process | scroll-drawn coral line + dot light-up |
| Everything else | `.reveal` fade-rise via IntersectionObserver |

Reduced motion: reveals instant, marquees static, work rail natively scrollable,
process line pre-drawn, counters at final values.

## Content still needed (research §9)
- Real photography for all six work tiles (media wells are ready).
- Real stats, real testimonial, Architects Diary article URLs.
- WhatsApp number + phone for footer/local SEO.
- Confirmed Est. year (2016 is assumed from the old placeholder — verify).
