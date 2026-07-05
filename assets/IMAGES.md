# Image manifest — Frolik+Co

All site photography is **WebP**. Drop a file into `assets/` using the exact
filename below and it is picked up automatically — no code change needed.

## How auto-pickup works
- Every photo slot is an `<img class="media-img" data-media loading="lazy"
  src="assets/{name}.webp" alt="…">` sitting inside a flat-colour + motif well
  (`.work-media` / `.kids-tile` / etc.).
- While the file is **missing**, `scripts/main.js` hides the broken image and the
  coloured motif placeholder shows through. Add the file → it appears. Remove it →
  it falls back again. No markup change either way.
- **Filenames are canonical slugs.** Reuse a photo across pages by pointing at the
  same path — a `work-*.webp` used on Home also serves Work, Kids Spaces, and that
  project's detail page. Only list a *new* slug when the image is genuinely new.
- Export ~2× display size, compressed (target < ~300 KB each). Landscape ~3:2 for
  work cards, portrait ~3:4 for tall tiles, 16:9 for heroes, 1200×630 for OG.

## Naming conventions
| Prefix | Used for |
|---|---|
| `work-{project}.webp` | A project's primary/card/hero photo — reused everywhere the project appears |
| `project-{slug}-NN.webp` | That project's gallery + detail shots (`-01`…, `-detail-1`…) |
| `kids-*.webp` | Kids Spaces hub hero + collage |
| `kids-{type}-hero.webp` | Kids SEO landing heroes |
| `service-{slug}-hero.webp` | Service detail heroes |
| `journal-{article-slug}.webp` | Article cover (reused as the article hero) |
| `about-*.webp` | Founder / studio photos |
| `og-{page}.webp` | Open Graph / social share image per page |

---

## Shared across the site

### Branding
| File | Purpose | Status |
|---|---|---|
| `frolik-logo.jpeg` | Logo card (nav 48px, footer 80px) | ✅ present |

### Selected-work photos — landscape ~3:2 (the 6 launch projects)
These are the canonical project photos. Each serves the Home gallery, the Work hub,
the project's own detail-page hero, and (kids ones) the Kids Spaces page.

| File | Project | Type · Location | Appears on |
|---|---|---|---|
| `work-coral-joy.webp`          | The Coral Joy          | Kids' spaces · Ahmedabad | Home, Work, Kids Spaces, `work/the-coral-joy` |
| `work-monochromatic-room.webp` | The Monochromatic Room | Kids' spaces · Ahmedabad | Home, Work, Kids Spaces, `work/the-monochromatic-room` |
| `work-purple-play-room.webp`   | The Purple Play Room   | Playroom · Ahmedabad     | Home, Work, Kids Spaces, `work/the-purple-play-room` |
| `work-playhouse-loft.webp`     | The Playhouse Loft     | Residential · Ahmedabad  | Home, Work, `work/the-playhouse-loft` |
| `work-clay-cafe.webp`          | Clay & Co. Café        | Commercial · Ahmedabad   | Home, Work, `work/clay-co-cafe` |
| `work-studio-marigold.webp`    | Studio Marigold        | Workspace · Baroda       | Home, Work, `work/studio-marigold` |

---

## Home (`index.html`) — ✅ wired

### Kids-spaces collage
| File | Slot | Aspect |
|---|---|---|
| `kids-little-explorers.webp` | Tall left tile ("Little Explorers Room") | portrait ~3:4 |
| `kids-collage-2.webp`        | Top-right tile                            | landscape ~4:3 |
| `kids-collage-3.webp`        | Bottom-right tile                         | landscape ~5:4 |

### Social
| File | Purpose | Spec |
|---|---|---|
| `og-home.webp` | OG / Twitter share | 1200×630. Some scrapers (WhatsApp, LinkedIn) don't render WebP OG — also supply `og-home.jpg` if broad previews matter. |

---

## Work hub (`work.html`)
Reuses the six `work-*.webp` above (one per card, `data-cat` filter). No new photos.
- `og-work.webp` — social share (1200×630).

## Project detail pages (`work/{slug}.html`) — one set per project
Hero **reuses** the project's `work-{project}.webp`. New per project:
| File pattern | Slot | Aspect |
|---|---|---|
| `project-{slug}-01.webp` … `-08.webp` | Gallery (8–20 photos) | mixed |
| `project-{slug}-detail-1.webp` … `-3.webp` | Custom-detail shots | ~1:1 / ~3:2 |
| `project-{slug}-plan.webp` *(optional)* | Zoning / floor-plan scan | as drawn |
| `og-{slug}.webp` | Social share | 1200×630 |

Launch slugs: `the-coral-joy`, `the-monochromatic-room`, `the-purple-play-room`,
`the-playhouse-loft`, `clay-co-cafe`, `studio-marigold`.

---

## Kids Spaces hub (`kids-spaces.html`)
| File | Slot | Aspect | Note |
|---|---|---|---|
| `kids-hero.webp` | Hero image (geometry overlay) | landscape ~16:9 | new |
| `work-coral-joy.webp` · `work-monochromatic-room.webp` · `work-purple-play-room.webp` | Featured kids projects | ~3:2 | **reused** |
| `kids-little-explorers.webp` · `kids-collage-2.webp` · `kids-collage-3.webp` | Principles collage | — | **reused** from Home |
| `og-kids-spaces.webp` | Social share | 1200×630 | new |

## Kids Spaces SEO landings (`kids-spaces/{slug}.html`, Phase 2)
| File | Slot |
|---|---|
| `kids-bedrooms-hero.webp` | Hero — `/kids-spaces/kids-bedrooms` |
| `kids-playrooms-hero.webp` | Hero — `/kids-spaces/playrooms` |
| `kids-study-rooms-hero.webp` | Hero — `/kids-spaces/study-rooms` |
| `kids-shared-rooms-hero.webp` | Hero — `/kids-spaces/shared-sibling-rooms` |
Featured projects on each landing **reuse** the relevant `work-*.webp`. Add
`og-{slug}.webp` per landing.

---

## Services overview (`services.html`)
Service cards are **motif colour-chips, not photos** (skill) — no photography needed.
- `og-services.webp` — social share.

## Service detail pages (`services/{slug}.html`, Phase 2)
| File | Slot |
|---|---|
| `service-residential-interiors-hero.webp` | Hero |
| `service-kids-spaces-hero.webp` | Hero (may reuse `kids-hero.webp`) |
| `service-commercial-studio-interiors-hero.webp` | Hero |
| `service-design-consultation-hero.webp` | Hero |
| `service-turnkey-execution-hero.webp` | Hero |
| `service-styling-decor-hero.webp` | Hero |
"Related work" on each **reuses** `work-*.webp`. Add `og-{slug}.webp` per page.

---

## Process (`process.html`)
Illustration/motif-led. Optional:
| File | Slot |
|---|---|
| `process-hero.webp` *(optional)* | Hero photo (hero can stay illustration-only) |
| `og-process.webp` | Social share |

## About (`about.html`)
| File | Slot | Aspect |
|---|---|---|
| `about-founder.webp` | Hero founder / studio photo card | portrait ~3:4 |
| `about-studio.webp` *(optional)* | "Who we are" studio shot | landscape ~3:2 |
| `about-team-1.webp` … *(optional)* | Team / collaborator cards | ~1:1 |
| `work-coral-joy.webp` · `work-monochromatic-room.webp` · `work-purple-play-room.webp` | "Why kids' spaces" collage | **reused** |
| `og-about.webp` | Social share | 1200×630 |

---

## Journal hub (`journal.html`) + articles (`journal/{slug}.html`)
One cover per article, **reused** as that article's hero. Featured lead card on the
hub uses article #1's cover.
| File | Article |
|---|---|
| `journal-kids-room-that-grows-with-your-child.webp` | #1 (launch) |
| `journal-kids-room-interior-design-ahmedabad-cost-timeline.webp` | #2 (launch) |
| `journal-inside-a-frolik-project-brief-to-handover.webp` | #3 (launch) |
| `journal-{slug}.webp` | one per Phase-2 article (#4–#12) |
| `journal-{slug}-01.webp` … *(optional)* | in-article images |
| `og-journal.webp` | hub social share |

## Contact (`contact.html`)
Form-led — no photography required.
| File | Slot |
|---|---|
| `contact-studio.webp` *(optional)* | Small studio/location image beside the form |
| `og-contact.webp` | Social share |

---

> When a page is built, wire every media well to the filename above. Missing files
> degrade gracefully to the motif placeholder, so it's safe to ship pages before all
> photos exist — then drop WebPs in as they're ready.
</content>
