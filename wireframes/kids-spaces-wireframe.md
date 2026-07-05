# Frolik + Co — Kids Spaces hub wireframe

Sitemap: `/kids-spaces` 🟢 (P 0.9). **The strongest SEO + brand page** (research §5,
skill). This is where the studio's signature lives, so sun/sky accents get freer rein
than anywhere else — but it must still read grown-up and tasteful, never cartoonish
(research §1, §7). Balances parent-intent SEO with premium brand.

**Page `<title>`:** `Kids Room Interior Designer in Ahmedabad | Frolik + Co`
**Meta:** *Kids' room, playroom, study and shared-room interior design in Ahmedabad — designed for imagination, safety, storage, and calm.*
**H1:** Kids room and playroom interior design in Ahmedabad
**Structured data:** `FAQPage` + `BreadcrumbList` JSON-LD (sitemap checklist).

---

## Section order
```
0. Header (nav "Kids' spaces" .active)
1. Hero — project image + playful geometry overlay, emotional subhead
2. Marquee (sun/mint) — space types
3. What we design — grid of kids space types (links to Phase-2 landings)
4. Our design principles — grow-with-child list + collage
5. Featured kids projects — pinned rail or grid (the 3 real ones first)
6. Parent FAQs — accordion (FAQ schema)
7. CTA — "tell us your child's age, room size, and dream"
8. Footer
```

---

## 1. Hero (research §5.4)
- Cream, ~86svh. Project image / media well with a **playful geometry overlay** (motif
  stickers layered over a mint-tinted well — the one place they can be bolder). Parallax.
- Eyebrow (sun rule): *Our signature · Kids' spaces · Ahmedabad*
- H1 (display, tight): **Kids room and playroom interior design in Ahmedabad** — keep
  the full keyword phrase as the real H1 (SEO); accent "playroom" in coral.
- Emotional subhead below it (research §5.4): **Designed for imagination, independence,
  storage, safety, and calm.**
- Sub (research §13): *Rooms that bring together play, study, sleep, storage, safety
  and softness — so the room works beautifully today and still feels relevant as the
  child grows.*
- CTA: `Design a kids space` (coral pop) → contact.html?type=kids · `See kids projects`
  (ghost) → #kids-work.

## 2. Marquee (sun or mint band)
- `data-marquee`. Words: Bedrooms ✳ Playrooms ✳ Study corners ✳ Nurseries ✳ Shared
  rooms ✳ Reading nooks ✳ Activity zones.

## 3. What we design (research §5.4 list)
- Cream. Eyebrow (mint) *What we design*, H2 **Every kind of room a childhood needs.**
- Grid of outlined pop-shadow cards, motif chip each, slight resting tilt. Cards that
  have a Phase-2 SEO landing **link to it** (internal linking, sitemap):
  - **Kids bedrooms** → /kids-spaces/kids-bedrooms
  - **Playrooms** → /kids-spaces/playrooms
  - **Study rooms** → /kids-spaces/study-rooms
  - **Shared sibling rooms** → /kids-spaces/shared-sibling-rooms
  - Nurseries · Reading nooks · Activity zones · Schools / activity centres (no landing
    yet — cards present, not linked, for future expansion).

## 4. Our design principles (research §5.4)
- Sand or mint band, two columns. Left: eyebrow (sun) *How we design for children*, H2
  **Rooms that grow with the child.**, motif-bullet list (staggered `.reveal`):
  - Spaces that grow with the child
  - Open floor space for movement
  - Rounded corners and safe detailing
  - Smart, child-height storage
  - Calm base palette with playful accents
  - Study + play + rest, zoned as one world
- Right: playful collage — tall sky tile + small sun/mint tiles, ink outlines + pop
  shadows, motif centerpieces, bounce reveals (mirrors home §5 kids collage).

## 5. Featured kids projects (research §5.4)
- Cream, `id="kids-work"`. Eyebrow (coral) *Selected kids' spaces*, H2 **Rooms we've
  loved making.** Reuse the WorkCard pattern; **real projects first**:
  1. **The Coral Joy** — Kids' room · Ahmedabad (REAL)
  2. **The Monochromatic Room** — Kids' room · Ahmedabad (REAL)
  3. **The Purple Play Room** — Playroom · Ahmedabad (REAL)
  - End card: *"See all work →"* → work/kids-spaces (filtered).
- Optional: pinned horizontal rail (reuse `#workPin/#workRail/#workProgress`) if ≥4
  projects; otherwise a static 3-up grid.

## 6. Parent FAQs (research §5.4 — FAQ schema)
- Sand band. Eyebrow *For parents*, H2 **The questions parents actually ask.**
  Accordion (details/summary or JS-toggled, guarded in main.js), each row 2px ink
  outline. Mirror in `FAQPage` JSON-LD. Questions (research §5.4):
  - How much does a kids' room cost?
  - How long does it take?
  - Can you design for two siblings?
  - Do you handle furniture and execution?
  - Can the room be designed to grow with the child?
  - Can you make it less cartoonish and more timeless?
  (Answers PLACEHOLDER — write from studio's real numbers/timelines. Note research §5.4:
  sensory calm — dimmable light, soft texture, calm colour, custom storage,
  personalization; avoid one-size-fits-all.)

## 7. CTA (research §5.4)
- Cream, centered, playful stickers. H2 **Tell us about your child's room.** Sub
  (research §5.4): *Your child's age, the room size, and the dream — we'll take it from
  there.* Button `Design a kids space` (ink pop) → contact.html?type=kids.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | headline mask-rise, geometry overlay parallax |
| Marquee | drift + scrub |
| Type grid / principles collage | `.reveal-pop` (bounce, tilt) |
| Featured work | grid `.reveal-pop` or pinned rail |
| FAQs | accordion expand (guarded), rows `.reveal` |

Reduced motion: reveals instant, overlay static, FAQs all open or native details, any
rail natively scrollable.

## Image assets (WebP — see `assets/IMAGES.md`)
- Hero: `kids-hero.webp` (new, ~16:9, sits under the geometry overlay).
- Featured kids projects: **reuse** `work-coral-joy.webp` ·
  `work-monochromatic-room.webp` · `work-purple-play-room.webp`.
- Principles collage: **reuse** `kids-little-explorers.webp` · `kids-collage-2.webp`
  · `kids-collage-3.webp` (already used on Home).
- Type cards ("What we design") stay motif-chip only — no photos.
- Social: `og-kids-spaces.webp`.

## Content still needed
- Real cost/timeline answers for the 6 FAQs.
- Photography for hero + featured projects; collage tiles.
- Confirm which Phase-2 landings exist before linking their cards.
</content>
