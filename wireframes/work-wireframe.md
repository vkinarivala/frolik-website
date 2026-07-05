# Frolik + Co - Work / Portfolio hub wireframe

Sitemap: `/work` 🟢 (P 0.9). The portfolio hub + the five filtered category views
(`/work/kids-spaces`, `/work/homes`, `/work/workspaces-studios`,
`/work/commercial-retail`, `/work/styling-details`) are **one page** - the filtered
URLs load the hub with a filter pre-applied and canonical to `/work` (sitemap
technical checklist). Reads as a sibling of `index.html`; leads with curated work,
never a Pinterest wall (research §5 Work).

**Page `<title>`:** `Interior Design Portfolio Ahmedabad | Frolik + Co`
**Meta:** *Explore Frolik + Co's interior design projects across Ahmedabad - kids' rooms, homes, studios, and commercial spaces.*
**H1:** Selected work · **Structured data:** `BreadcrumbList` JSON-LD.

---

## Section order
```
0. Header (shared partial) - nav "Work" .active
1. Hero - compact, cream, 2 parallax stickers
2. Filter bar - sticky pills (All / Kids' spaces / Homes / Workspaces / Commercial / Styling)
3. Project grid - outlined WorkCards, masked image reveals
4. Marquee (coral) - rhythm divider
5. Approach strip - "why our portfolio is curated, not a gallery"
6. Final CTA - start a project
7. Footer (shared partial)
```

---

## 1. Hero (compact - this is a browse page, not the home hero)
- Cream, ~52svh. 2 parallax stickers (plus + striped circle), scattered, `aria-hidden`.
- Eyebrow (coral rule): *Portfolio · Ahmedabad*
- H1 (display, tight, sentence case): **Selected work.**
- Sub (research §5): *A curated set of spaces - homes, kids' rooms, workspaces and
  commercial interiors - documented for the thinking, not just the photos.*
- No CTA buttons here; the filter bar is the interaction.

## 2. Filter bar (research §5 filters)
- `position:sticky` under the header; cream @82% + blur, 2px ink bottom border.
- Pills, 2px ink outline; selected pill **fills with its tone colour** (skill: Work
  page rule) - All=ink, Kids' spaces=mint, Homes=sand/clay, Workspaces=sky,
  Commercial=coral, Styling=sun. One active at a time.
- Filtering is client-side (vanilla JS, add a small must-exist-guarded behaviour to
  `main.js`: toggle `[hidden]` on cards by `data-cat`, animate the reveal). Filtered
  category URLs set the matching pill active on load.
- Reduced motion / no-JS: all cards visible, pills act as anchors - never hide work
  behind JS.

## 3. Project grid (research §5 - card fields)
- Cream. Responsive grid (1 / 2 / 3 col). Each card = **WorkCard** pattern from
  `index.html`: outlined media well (flat brand colour + centered motif, ready for
  photography) → image mask-reveals on scroll → title → *type · location* → one-line
  idea → year pill. `data-cat` drives the filter. Whole card links to the project.
- Stagger reveals with `transition-delay`; tilted cards straighten on hover, media
  gently zooms, coral line appears (skill hover states).
- **Launch set - kids first for credibility (research §2, §5.3), then range:**
  1. **The Coral Joy** - Kids' spaces · Ahmedabad - *pastel room with bunk, slide,
     study zone and grow-with-me storage.* (REAL - The Architects Diary) `data-cat="kids"`
  2. **The Monochromatic Room** - Kids' spaces · Ahmedabad - *neutral, natural-material
     kids' room that stays calm as it grows.* (REAL) `data-cat="kids"`
  3. **The Purple Play Room** - Playroom · Ahmedabad - *a playroom planned to feel
     playful without tipping into chaos.* (REAL) `data-cat="kids"`
  4. **Project 4** - Home · Ahmedabad - one-liner (PLACEHOLDER project) `data-cat="homes"`
  5. **Project 5** - Studio · Ahmedabad - one-liner (PLACEHOLDER) `data-cat="workspaces"`
  6. **Project 6** - Commercial · Ahmedabad - one-liner (PLACEHOLDER) `data-cat="commercial"`
- Empty-filter state (e.g. Styling before content exists): a dashed-outline card -
  *"New {category} projects are being photographed - say hello to see work in progress."*

## 4. Marquee (coral)
- Full-bleed coral band, 2px ink borders, `data-marquee data-dir="1"`. Words:
  Residential ✳ Kids' spaces ✳ Workspace ✳ Commercial ✳ Styling ✳ Ahmedabad.

## 5. Approach strip (research §5 - "not a gallery")
- Sand band. Eyebrow (mint) *How we choose what to show*, H2 **We'd rather show six
  spaces well than sixty in passing.**, lede: *Each project here carries the brief,
  the challenge, the moves and the details - so you see how we think, not just how it
  photographs.* Right-aligned, one plus sticker.

## 6. Final CTA
- Reuse the home CTA pattern (cream, centered, 2 stickers). H2: **Have a space in
  mind?** Sub (research §13): *Tell us what you're planning - a home, a child's room,
  a playroom, a studio, or something completely new.* Button: `Start a project` (ink
  pop) → contact.html.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | `.reveal` lines + sticker pop-in → parallax |
| Filter bar | sticky; pill fill transition; JS card filter (guarded) |
| Grid | staggered `.reveal-pop`, media mask-zoom on hover |
| Marquee | drift + scroll scrub |
| Approach / CTA | `.reveal` fade-rise |

Reduced motion: reveals instant, stickers static, marquee static, all cards shown.

## Image assets (WebP - see `assets/IMAGES.md`)
Reuses the six canonical project photos, one per card - no new photos. Each is an
`<img class="media-img" data-media>` over its coloured motif well (auto-pickup):
- `work-coral-joy.webp` · `work-monochromatic-room.webp` · `work-purple-play-room.webp`
  (kids, `data-cat="kids"`)
- `work-playhouse-loft.webp` (homes) · `work-clay-cafe.webp` (commercial) ·
  `work-studio-marigold.webp` (workspaces)
- Social: `og-work.webp` (1200×630).

## Content still needed
- Real photography for all 6 media wells; one-line idea per project confirmed.
- Real project names + slugs for Projects 4–6 (replace placeholders).
- The Architects Diary article URLs (link the 3 real kids projects).
</content>
