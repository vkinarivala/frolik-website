# Frolik + Co - Project detail wireframe (TEMPLATE)

Sitemap: `/work/{project-slug}` 🟢 (P 0.7). One consistent structure for all six
launch projects (research §5 "Individual project page template", sitemap line 92).
Kids projects add the **"Designed around"** block; non-kids projects skip it. This is
the page the whole portfolio funnels into - make it feel editorial and calm, a design
magazine with playful accents (skill).

**Title pattern:** `{Project Name} - {Space Type} in Ahmedabad | Frolik + Co`
e.g. *The Coral Joy - Kids' Room in Ahmedabad | Frolik + Co*
**Meta:** one-line project idea + Ahmedabad. **H1:** the project name.
**Structured data:** `BreadcrumbList` (Home › Work › {Project}). Real `location, year,
size, space type` in body + OG image = project hero (SEO checklist).

---

## Section order
```
0. Header (nav "Work" .active)
1. Hero - full-bleed project image + title overlay card
2. Fact bar - Type / Location / Year / Size / Scope / Photography
3. One-line idea - oversized pull statement
4. The brief
5. The challenge
6. Design response
7. Key design moves - 3–5 numbered cards
8. [KIDS ONLY] Designed around - mint feature panel
9. Material palette - colour/material swatches
10. Zoning / layout thinking - plan sketch + notes
11. Custom details - detail shots + captions
12. Gallery - masonry / masked reveals
13. Client note - mint QuoteCard, pinned plus sticker
14. Related projects - 3 WorkCards
15. CTA - start a similar project
16. Footer
```

---

## 1. Hero
- Full-bleed project photo (media well placeholder = flat brand tone + centered motif
  until photography lands), ~86svh. Ink-outlined title **card** floats bottom-left:
  eyebrow *{Space type} · {Location}*, H1 project name (display, tight), one plus
  sticker parallaxing behind. Reduced motion: static.

## 2. Fact bar (research §5 template header)
- Sand band, 2px ink borders. Inline definition row, hairline dividers:
  **Type · Location · Year · Size · Scope · Photography credit.** All real per project.

## 3. One-line idea
- Cream, generous whitespace. The project's single sentence, typeset large (display,
  coral accent word). e.g. **A pastel room with a bunk, slide, study zone and storage
  designed to grow with a 10-year-old.** (research §5 example)

## 4–6. Brief · Challenge · Design response
- Alternating cream/sand two-column text blocks: left eyebrow + H2, right body prose
  (Sora, indexable HTML text). Keep to a few tight paragraphs each. `.reveal` on entry.
  - **The brief** - what the family/client asked for.
  - **The challenge** - the real constraint (light, size, storage, two siblings…).
  - **Design response** - the idea that answered it.

## 7. Key design moves (research §5)
- Cream. Eyebrow *Key moves*, H2 **A few decisions that made the room.** 3–5 outlined
  pop-shadow cards, numbered dot + short title + one line. Staggered `.reveal-pop`.

## 8. Designed around - KIDS PROJECTS ONLY (research §5, Reggio-inspired)
- Mint panel, ink outline + pop shadow; this is where sun/sky accents are allowed to
  play. Eyebrow (sun) *Designed around the child*, then a labelled list:
  - **Age** - e.g. 10 · **Activities** - sleep / study / play / reading / storage
  - **Safety details** - rounded corners, secured furniture, soft edges
  - **Grow-with-child** - what adapts as they get older
  - **Sensory mood** - calm / active / imaginative
- Non-kids projects omit this section entirely.

## 9. Material palette (research §5)
- Sand band. Row of swatch chips (flat colour + material label) + short palette note.
  Real materials/tones per project (neutral tones, natural materials - research §1).

## 10. Zoning / layout thinking
- Cream, two columns: left a simple plan **sketch** (inline SVG line drawing / placeholder
  for a real plan), right the zoning logic - how sleep / study / play / storage were
  planned as one world (research §5.4).

## 11. Custom details
- Detail shots (media wells) in a 2–3 up row, each with a one-line caption naming the
  custom piece (bunk with slide, study unit, storage bench…). Masked reveals.

## 12. Gallery (research §5)
- Full-width. 8–20 final photos as a masonry / staggered grid, mask-reveal + gentle
  zoom on scroll. Every `alt` descriptive & local, e.g. *"Pastel kids room interior
  designed by Frolik + Co in Ahmedabad."* (SEO checklist).

## 13. Client note (research §5)
- Cream. Mint **QuoteCard**, pop shadow, plus sticker pinned top - real testimonial +
  attribution (PLACEHOLDER until collected).

## 14. Related projects (research §5, internal linking)
- Sand band. Eyebrow *More spaces*, 3 WorkCards (same pattern as Work hub). Kids
  project → related kids projects; SEO checklist: projects ↔ related projects.

## 15. CTA (research §5 - "Start a similar project")
- Reuse home CTA. H2 **Planning something like this?** Sub: *Tell us the space, the
  people who'll use it, and roughly when.* Button `Start a project` (coral pop) →
  contact.html (`?type=` prefill matching the space type if the form supports it).

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | title card fade-up, sticker parallax |
| Text blocks | `.reveal` fade-rise, staggered |
| Key moves / Designed around | `.reveal-pop` |
| Gallery / details | image mask-reveal + zoom |
| Quote | `.reveal-pop`, pinned sticker |

Reduced motion: reveals instant, hero static, gallery a plain scrollable grid.

## Image assets (WebP - see `assets/IMAGES.md`)
Hero **reuses** the project's card photo; gallery/details are new per project (drop
files in → auto-pickup, motif placeholder until then):
- Hero + fact-bar: `work-{project}.webp` (e.g. `work-coral-joy.webp`) - **reused**.
- Gallery: `project-{slug}-01.webp` … `-08.webp`.
- Custom-detail shots: `project-{slug}-detail-1.webp` … `-3.webp`.
- Zoning: `project-{slug}-plan.webp` (optional plan scan; else inline-SVG sketch).
- Related-projects cards: **reuse** the other `work-*.webp`.
- Social: `og-{slug}.webp` (project hero as OG).

Launch slugs: `the-coral-joy` · `the-monochromatic-room` · `the-purple-play-room` ·
`the-playhouse-loft` · `clay-co-cafe` · `studio-marigold`.

## Content still needed (per project, research §9)
- Real name/location/year/size/scope/photographer; 8–20 photos; plan sketch.
- 3–5 design highlights; material list; client testimonial.
- For kids: age, activities, safety details, grow-with-child, sensory mood.
- Confirmed slugs for Projects 4–6.
</content>
