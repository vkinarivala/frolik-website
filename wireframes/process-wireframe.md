# Frolik + Co — Process wireframe

Sitemap: `/process` 🟢 (P 0.6). This page **reduces client anxiety** (research §5
Process) — it makes an unknown feel planned. Reuses the home page's scroll-drawn
timeline as its centrepiece, then expands with "what you receive".

**Page `<title>`:** `Our Interior Design Process | Frolik + Co`
**Meta:** *Discovery to handover — how Frolik + Co plans, designs, builds, and styles every space.*
**H1:** Thoughtful from the first sketch to the final cushion
**Structured data:** `BreadcrumbList` JSON-LD.

---

## Section order
```
0. Header (nav "Process" .active)
1. Hero — compact, cream, 2 stickers
2. Intro — how we think before we design
3. The five steps — ink band, scroll-drawn coral line (reuse #steps/#lineFill)
4. What you receive — deliverables grid
5. Marquee (coral) — rhythm divider
6. Timeline & involvement — what to expect week-to-week (light)
7. CTA
8. Footer
```

---

## 1. Hero
- Cream, ~52svh, 2 stickers. Eyebrow (coral): *How it works · Ahmedabad*. H1 (display,
  tight): **Thoughtful from the first sketch to the final cushion.** Sub (research §13):
  *Every project begins with how the space will be used — we study routines, light,
  storage, movement, materials and mood before we design the look.*

## 2. Intro (research §5 Process)
- Sand band, two columns. Eyebrow *Before the look*, H2 **We design the life first,
  then the room.** Short prose: usage → routines → light → storage → movement → mood.

## 3. The five steps — the centrepiece (research §5.6)
- **Ink band** (full-bleed, on-brand). Reuse the home process pattern exactly:
  `#steps` / `#lineFill` / `[data-step]` — coral line draws down as it crosses ~65%
  viewport, numbered dots light coral with a bounce. Eyebrow (on ink) *The process*,
  H2 **Discovery to handover, in five steps.** Steps (research §5.6):
  1. **Discovery** — site visit, lifestyle, child/family needs, budget, timeline.
  2. **Concept** — mood board, references, colour story, zoning, rough direction.
  3. **Design** — layouts, furniture, materials, lighting, storage, 3D views if offered.
  4. **Build** — custom furniture, vendor coordination, site work.
  5. **Style & handover** — styling, photos, final walkthrough.
- Each step gets a sentence more detail here than on the home page (this is the
  dedicated page). Reduced motion: line pre-drawn, all dots lit.

## 4. What you receive (research §5 Process — belongs here, not on home)
- Cream. Eyebrow (mint) *What you receive*, H2 **Everything you'll hold at the end.**
  Grid of outlined pop-shadow chips/cards, motif each, staggered `.reveal-pop`:
  - Space plan · Mood board · Material palette · Furniture drawings · 3D / visual
    direction · Lighting plan · Budget estimate · Execution plan.

## 5. Marquee (coral)
- `data-marquee`. Words: Discover ✳ Concept ✳ Design ✳ Build ✳ Style ✳ Handover.

## 6. Timeline & involvement (light — set expectations, research §5 "reduce anxiety")
- Sand band, two columns. Eyebrow *What to expect*, H2 **How involved you'll be.**
  Short honest notes: how often we meet, where you make choices, how execution is
  coordinated. Keep it human, not a Gantt chart. (Real timelines PLACEHOLDER.)

## 7. CTA
- Reuse home CTA. H2 **Ready to start at step one?** Sub: *Book a discovery call — we'll
  visit the space and talk through routines, budget and timeline.* Button `Start a
  project` (ink pop) → contact.html.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero / intro | `.reveal` + sticker parallax |
| Five steps | scroll-drawn coral line + dot light-up (`#lineFill`/`[data-step]`) |
| What you receive | staggered `.reveal-pop` |
| Marquee | drift + scrub |

Reduced motion: reveals instant, process line fully drawn + dots lit, marquee static.

## Image assets (WebP — see `assets/IMAGES.md`)
- Illustration/motif-led; the five-step timeline is inline SVG, not photos.
- `process-hero.webp` (optional — hero can stay illustration-only).
- Social: `og-process.webp`.

## Content still needed
- Real typical timeline ranges + involvement cadence.
- Confirm which deliverables are standard vs optional (e.g. 3D views).
</content>
