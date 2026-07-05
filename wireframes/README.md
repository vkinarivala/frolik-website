# Frolik + Co — Page wireframes

Section-by-section wireframes for every page in `sitemap.md`, written to match the
shipped home page (`index.html`), the Memphis design system
(`references/frolik-co-design-system/`) and real copy from
`references/frolik+co-research.md`. Each doc is the plan a build task follows —
section order, real copy sources, components reused, motion map, SEO head, and
content-still-needed.

**Read `index.html` + `styles/main.css` before building any of these.** Every page
must read as a sibling of the home page: warm cream paper, 2px ink outlines + hard
pop shadows on raised surfaces, coral primary / mint secondary, motif stickers
scattered with restraint, one shared rAF loop for scroll motion, and a full
`prefers-reduced-motion` mode.

## The pages

| # | Page | File → wireframe | Sitemap status |
|---|---|---|---|
| — | Home | `../homepage-wireframe.md` (already shipped as `index.html`) | 🟢 MVP |
| 1 | Work / Portfolio hub (+ filtered category views) | `work-wireframe.md` → `work.html` | 🟢 MVP |
| 2 | Project detail **template** (×6 at launch) | `work-project-wireframe.md` → `work/{slug}.html` | 🟢 MVP |
| 3 | Kids Spaces hub | `kids-spaces-wireframe.md` → `kids-spaces.html` | 🟢 MVP |
| 4 | Kids Spaces SEO landing **template** (×4) | `kids-spaces-landing-wireframe.md` → `kids-spaces/{slug}.html` | 🔵 Phase 2 |
| 5 | Services overview | `services-wireframe.md` → `services.html` | 🟢 MVP |
| 6 | Service detail **template** (×6) | `service-detail-wireframe.md` → `services/{slug}.html` | 🔵 Phase 2 |
| 7 | Process | `process-wireframe.md` → `process.html` | 🟢 MVP |
| 8 | About / Founder | `about-wireframe.md` → `about.html` | 🟢 MVP |
| 9 | Journal hub | `journal-wireframe.md` → `journal.html` | 🟢 MVP |
| 10 | Journal article **template** (×3 at launch) | `journal-article-wireframe.md` → `journal/{slug}.html` | 🟢 MVP |
| 11 | Contact / Start a project | `contact-wireframe.md` → `contact.html` | 🟢 MVP |

"Template" wireframes cover every SEO landing / project / article listed in the
sitemap — one structure, unique copy per instance. Filtered `/work/{category}`
views are the same page as the Work hub with a filter pre-applied (see doc 1).

## Shared skeleton every page uses (from the skill)

```html
<link rel="stylesheet" href="styles/main.css">   <!-- after the Google Fonts link -->
<body>
  <div id="site-header"></div>
  ...sections...
  <div id="site-footer"></div>
  <script src="scripts/partials.js" defer></script>
  <script src="scripts/main.js" defer></script>
</body>
```

Header/footer come from `scripts/partials.js` (never inline them). `scripts/main.js`
binds every scroll behaviour by must-exist hook, so reuse the hooks instead of
writing new animation code:

| Effect | Markup hook |
|---|---|
| Fade-rise reveal | `.reveal` (+ inline `transition-delay` to stagger) |
| Pop reveal (tilt+bounce) | `.reveal-pop` |
| Marquee | `[data-marquee][data-dir]` (opt. `data-words="A\|✳\|B"`) |
| Count-up stat | `[data-count]` (`data-suffix`) |
| Pinned horizontal rail | `#workPin` / `#workRail` / `#workProgress` |
| Scroll-drawn process line | `#steps` / `#lineFill` / `[data-step]` |
| Parallax sticker | `.sticker[data-speed]` (`--d` pop-in delay) |

## Images (WebP, auto-pickup)
Every photo slot is an `<img class="media-img" data-media>` over a flat-colour + motif
well; `scripts/main.js` hides the image until its file exists, so pages ship with
placeholders and photos appear the moment you drop the WebP into `assets/`.
**`assets/IMAGES.md` is the master manifest** — canonical filenames, which photos are
reused where, and the new placeholder slugs per page. Each wireframe's *Image assets*
section lists exactly which files that page uses (reused vs new). The six launch
projects share one `work-{project}.webp` each across Home, Work, Kids Spaces and their
detail pages.

## Conventions used in these docs
- Section lists read top → bottom in DOM order.
- **Bold** = real copy or real project/person names from research; *italic* = the
  literal string to typeset. `PLACEHOLDER` = swap before launch (tracked per page).
- Every page ends with a contact CTA and the shared footer. Every page carries its
  own `<title>`, meta description, canonical, OG/Twitter tags. FAQ pages add
  `FAQPage` JSON-LD; project pages carry real location/year/size/type.
- "frolic" appears **at most once per page**, as a wink.
</content>
</invoke>
