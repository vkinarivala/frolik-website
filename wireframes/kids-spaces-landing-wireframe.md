# Frolik + Co - Kids Spaces SEO landing wireframe (TEMPLATE, Phase 2)

Sitemap: `/kids-spaces/{slug}` 🔵 (P 0.7–0.8). One template for all four kids landing
pages. Each targets one *"{type} design Ahmedabad"* query with a **unique H1,
400–800 words, 2–3 project examples, and an FAQ block** (sitemap §"Kids Spaces - SEO
landing pages"). Lighter than the hub - a focused, indexable, conversion-minded page -
but visibly the same family as `kids-spaces.html`.

**Instances (sitemap):**
| Slug | `<title>` | H1 direction | Primary keyword |
|---|---|---|---|
| `kids-bedrooms` | Kids Bedroom Interior Design in Ahmedabad \| Frolik + Co | Kids bedroom interior design in Ahmedabad | kids bedroom design Ahmedabad |
| `playrooms` | Playroom Designer in Ahmedabad \| Frolik + Co | Playroom design in Ahmedabad | playroom designer Ahmedabad |
| `study-rooms` | Kids Study Room Design in Ahmedabad \| Frolik + Co | Kids study room design in Ahmedabad | kids study room design Ahmedabad |
| `shared-sibling-rooms` | Shared Kids Room Design in Ahmedabad \| Frolik + Co | Shared sibling room design in Ahmedabad | shared sibling room design Ahmedabad |

**Structured data:** `FAQPage` + `BreadcrumbList` (Home › Kids Spaces › {type}).
Canonical to self; internal links up to `/kids-spaces` and across to related landings.

---

## Section order
```
0. Header (nav "Kids' spaces" .active)
1. Hero - type-specific, one project image + keyword H1
2. Intro prose - 400–800 words total across §1–§4 (indexable HTML)
3. What makes a good {type} - principle list
4. Featured {type} projects - 2–3 WorkCards
5. FAQ block - accordion (FAQ schema)
6. Related kids spaces - cross-links to sibling landings
7. CTA
8. Footer
```

---

## 1. Hero
- Cream, ~64svh, 2 stickers. Eyebrow (sun): *Kids' spaces · {Type} · Ahmedabad*.
  H1 = the unique keyword phrase (table above), display/tight, coral accent word.
  Sub = one warm sentence specific to the type (e.g. bedrooms → *A room to sleep, read
  and grow up in - calm at its base, playful in its details.*). CTA `Design a {type}`
  (coral pop) → contact.html?type=kids.

## 2–3. Intro + "What makes a good {type}" (400–800 words, unique per page)
- Alternating cream/sand text blocks, real indexable prose (never baked into images).
  Weave the primary keyword naturally, Ahmedabad once or twice - **no keyword spam**
  (research §6). Principle list uses the hub's motif bullets, filtered to the type:
  - Bedrooms → grow-with-child, storage, calm palette, safe detailing, reading nook.
  - Playrooms → open floor, zoning, "playful without chaos", wipeable/soft materials,
    display at child height (research §5.4, Reggio cues).
  - Study rooms → ergonomics, light, focus, storage for books/supplies, grows with age.
  - Shared rooms → two identities in one room, zoning, storage parity, sound/sleep.

## 4. Featured {type} projects (2–3, sitemap)
- WorkCards filtered to the type. Reuse real projects where they fit (The Coral Joy /
  Monochromatic Room for bedrooms; The Purple Play Room for playrooms); PLACEHOLDER
  cards otherwise. End card → `/work/kids-spaces` filtered view.

## 5. FAQ block (sitemap - FAQ schema, required on every landing)
- Sand band accordion, mirrored in `FAQPage` JSON-LD. 3–5 type-specific questions,
  e.g. bedrooms: *How much does a kids' bedroom cost in Ahmedabad? · How do you make it
  grow with the child? · Can it stay timeless rather than cartoonish?* (Answers
  PLACEHOLDER - real numbers.)

## 6. Related kids spaces (internal linking, sitemap)
- Cream. Small row of pill/cards linking the other three landings + back to
  `/kids-spaces`. Keeps the cluster interlinked for SEO.

## 7. CTA
- Reuse hub CTA. H2 **Ready to plan the {type}?** Button `Start a project` (ink pop) →
  contact.html?type=kids.

---

## Motion map
Same vocabulary as the hub, lighter: hero mask-rise + sticker parallax, `.reveal` text
blocks, `.reveal-pop` project cards, accordion FAQ. Reduced motion identical to hub.

## Image assets (WebP - see `assets/IMAGES.md`)
- Hero (one per landing, new): `kids-bedrooms-hero.webp` · `kids-playrooms-hero.webp`
  · `kids-study-rooms-hero.webp` · `kids-shared-rooms-hero.webp`.
- Featured 2–3 projects: **reuse** the relevant `work-*.webp` (coral-joy /
  monochromatic-room for bedrooms; purple-play-room for playrooms).
- Social: `og-{slug}.webp` per landing.

## Content still needed (per landing)
- 400–800 words of unique copy; 2–3 real project examples; 3–5 FAQ answers.
- Type-specific hero photography.
- Confirm this page is only built once photos/content exist (Phase 2, sitemap legend).
</content>
