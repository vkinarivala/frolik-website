# Frolik + Co - Home Page Wireframe (`/`)

**Goal:** In ~10 seconds, tell visitors what the studio is and push them to view work or inquire.
**Primary CTA:** *Start a Project* → `/contact` inquiry form (repeated at top, mid, and bottom).
**Secondary CTA:** *View Work* → `/work`.
**Utility:** click-to-call `tel:` + WhatsApp `wa.me` (real details available).
**Not included:** press/features strip - no coverage yet (add later as a credibility band).

Legend: `▓` = image/photo · `e` = editorial text · `[ Button ]` = CTA · `( pill )` = filter/tag

---

## Desktop wireframe (≥1024px)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  frolik + co        Work   Kids Spaces   Services   About   Journal        │  ← sticky header
│                                                          [ Start a Project ]│    logo left, CTA right
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  HERO - large soft editorial project image ▓▓▓▓▓▓ │  ◀ SECTION 1: HERO
│  ▓▓▓                                                                  ▓▓▓ │    full-bleed, ~85vh
│  ▓▓▓   H1  Interiors for homes, kids' spaces, and creative lives.     ▓▓▓ │    H1 overlaid (or split)
│  ▓▓▓   sub  Ahmedabad-based studio creating warm, functional,         ▓▓▓ │    "+" motif accent
│  ▓▓▓        personality-filled spaces.                                ▓▓▓ │
│  ▓▓▓   [ View Work ]   [ Start a Project ]                            ▓▓▓ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │  ◀ SECTION 2: STUDIO INTRO
│   ┌── mint panel ─────────────────────────────────────────────────────┐   │    short, editorial
│   │  e  Frolik + Co designs warm, playful, highly functional          │   │    3–4 lines, lots of
│   │     interiors for homes, kids' spaces, studios, and everyday       │   │    whitespace
│   │     life in Ahmedabad. →  About the studio                         │   │
│   └───────────────────────────────────────────────────────────────────┘   │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│   Selected work                                    See all projects →      │  ◀ SECTION 3: FEATURED WORK
│                                                                            │    curated, NOT every project
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                     │    Row 1 = KIDS (signature
│   │ ▓▓ photo ▓▓ │  │ ▓▓ photo ▓▓ │  │ ▓▓ photo ▓▓ │                     │    strength shown first)
│   │              │  │              │  │              │                     │
│   │ The Coral Joy│  │ The Mono-    │  │ The Purple   │                     │    card = photo + title +
│   │ Kids · A'bad │  │ chromatic Rm │  │ Play Room    │                     │    type · location
│   └──────────────┘  └──────────────┘  └──────────────┘                     │    hover: gentle zoom +
│                                                                            │    coral underline
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                     │    Row 2 = HOME / STUDIO /
│   │ ▓▓ photo ▓▓ │  │ ▓▓ photo ▓▓ │  │ ▓▓ photo ▓▓ │                     │    COMMERCIAL (range)
│   │ Project · A' │  │ Project · A' │  │ Project · A' │                     │
│   └──────────────┘  └──────────────┘  └──────────────┘                     │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│   ┌── coral-bordered band ────────────────────────────────────────────┐   │  ◀ SECTION 4: KIDS SIGNATURE
│   │                                    │                              │   │    the differentiator
│   │  Rooms made for little people      │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │   │    text left / image right
│   │  with big imaginations.            │   ▓▓  kids room photo  ▓▓ │   │
│   │                                    │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │   │    3 short proof lines:
│   │  • Rooms that grow with the child  │                              │   │    grow-with-child / play+
│   │  • Play, study, sleep, storage -   │                              │   │    study+sleep+storage /
│   │    planned as one world            │                              │   │    soft palettes + safe
│   │  • Soft palettes, safe details,    │                              │   │    detail
│   │    custom furniture, playful forms │                              │   │
│   │                                    │                              │   │
│   │  [ Explore Kids Spaces → ]         │                              │   │  → /kids-spaces
│   └───────────────────────────────────┴──────────────────────────────┘   │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│   What we design                                                           │  ◀ SECTION 5: SERVICES
│                                                                            │    4 cards, minimal text
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐                       │
│   │ + icon  │  │ + icon  │  │ + icon  │  │ + icon  │                       │    "+" motif as icon
│   │ Homes   │  │ Kids    │  │ Work-   │  │ Styling │                       │
│   │         │  │ Spaces  │  │ spaces  │  │ & Reno  │                       │    each → /services/…
│   │ 1 line  │  │ 1 line  │  │ 1 line  │  │ 1 line  │                       │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘                       │
│                                              All services →                │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│   ┌── ivory panel ────────────────────────────────────────────────────┐   │  ◀ SECTION 6: PROCESS
│   │  Thoughtful from the first sketch to the final cushion.           │   │    reduces client anxiety
│   │                                                                    │   │
│   │   ①───────②───────③───────④───────⑤                               │   │    5 steps on a line
│   │  Discover  Concept  Design   Build   Style &                       │   │    (connected by coral rule)
│   │                                       Handover                     │   │
│   │  1 line    1 line   1 line   1 line   1 line                       │   │
│   │                                              → See our process     │   │  → /process
│   └───────────────────────────────────────────────────────────────────┘   │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│   ┌── mint panel ─────────────────────────────────────────────────────┐   │  ◀ SECTION 7: TESTIMONIAL
│   │                                                                    │   │    single strong quote
│   │   " A short client quote about how the space feels and works. "    │   │    (1 to start; can rotate
│   │                                                                    │   │     into a slider later)
│   │     - Client name, project / area, Ahmedabad                       │   │
│   └───────────────────────────────────────────────────────────────────┘   │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  FINAL CTA - soft image or coral bg  ▓▓▓▓▓▓▓▓▓▓ │  ◀ SECTION 8: FINAL CTA
│  ▓▓▓                                                                  ▓▓▓ │    the conversion moment
│  ▓▓▓   Have a space in mind?                                          ▓▓▓ │
│  ▓▓▓   Tell us what you're planning - a home, a child's room,         ▓▓▓ │
│  ▓▓▓   a playroom, a studio, or something new.                        ▓▓▓ │
│  ▓▓▓   [ Start a Project ]     or  WhatsApp ›   Call ›                ▓▓▓ │  → /contact + wa.me + tel:
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
├──────────────────────────────────────────────────────────────────────────┤
│  frolik + co        Work · Kids Spaces · Services · Process · About        │  ◀ FOOTER
│  Ahmedabad, India   Journal · Contact                                      │    NAP for local SEO
│  ────────────────────────────────────────────────────────────────────     │
│  ✆ Phone   ▸ WhatsApp   ✉ Email   ◎ Instagram          © Frolik + Co       │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Mobile wireframe (≤640px) - stack order

```
┌───────────────────────┐
│ frolik+co        [≡]  │  sticky; hamburger; CTA in menu
├───────────────────────┤
│ ▓▓▓ HERO IMAGE ▓▓▓  │  image top or behind text
│ H1 (shorter wrap)     │
│ sub line              │
│ [ Start a Project ]   │  primary CTA full-width
│ [ View Work ]         │  secondary below
├───────────────────────┤
│ Studio intro (mint)   │
├───────────────────────┤
│ Selected work         │
│ [card]                │  1 col; kids cards first,
│ [card]                │  show ~4, "See all →"
│ [card]                │
│ [card]                │
├───────────────────────┤
│ Kids signature        │  image stacks above text
│ ▓▓ photo ▓▓          │
│ headline + 3 lines    │
│ [ Explore Kids → ]    │
├───────────────────────┤
│ What we design        │
│ [Homes] [Kids]        │  2×2 grid
│ [Work]  [Styling]     │
├───────────────────────┤
│ Process ①②③④⑤        │  vertical steps
├───────────────────────┤
│ Testimonial quote     │
├───────────────────────┤
│ FINAL CTA             │
│ [ Start a Project ]   │
│ WhatsApp · Call       │
├───────────────────────┤
│ Footer + NAP + social │
└───────────────────────┘

           ┌─────────────┐
Sticky ──▶ │ ▸ WhatsApp  │  floating mobile action (optional)
           └─────────────┘
```

---

## Section reference

| # | Section | Purpose | Key content | CTA / link |
|---|---|---|---|---|
| - | Header | Orient + always-available convert | Logo, 5 nav items, Start-a-Project button | `/contact` |
| 1 | Hero | 10-second understanding | H1 + support line + dual CTA over editorial image | `/work`, `/contact` |
| 2 | Studio intro | Context without limiting brand | 3–4 lines, Ahmedabad named | `/about` |
| 3 | Featured work | Let the work sell | 6 curated cards; **row 1 kids**, row 2 home/studio/commercial; title · type · location | `/work` + project pages |
| 4 | Kids signature | The differentiator | Headline + 3 proof lines + photo | `/kids-spaces` |
| 5 | Services | Show full capability | 4 cards, one line each, "+" icons | `/services/*` |
| 6 | Process | Reduce anxiety | 5 steps: Discover→Concept→Design→Build→Handover | `/process` |
| 7 | Testimonial | Trust | One client quote + attribution | - |
| 8 | Final CTA | Convert | "Have a space in mind?" + form CTA + WhatsApp/Call | `/contact`, `wa.me`, `tel:` |
| - | Footer | Local SEO + contact | NAP (name/address/Ahmedabad), full nav, phone/WhatsApp/email/Instagram | all |

## Copy (from research - drop-in ready)

- **H1:** Interiors for homes, kids' spaces, and creative lives.
- **Hero sub:** Frolik + Co is an Ahmedabad-based interior design studio creating warm, functional, personality-filled spaces - from refined homes and workspaces to joyful rooms designed especially for children.
- **Kids band:** *Rooms made for little people with big imaginations.* We design kids' spaces that bring together play, study, sleep, storage, safety, and softness - so the room works beautifully today and still feels relevant as the child grows.
- **Process band:** *Thoughtful from the first sketch to the final cushion.* Every project begins with how the space will be used.
- **Final CTA:** *Have a space in mind?* Tell us what you're planning - a home, a child's room, a playroom, a studio, or something completely new.

## Build / SEO notes

- One `<h1>` (the hero). Section titles are `<h2>`.
- Hero image `alt`: *"Warm, playful kids' room interior designed by Frolik + Co in Ahmedabad."*
- Featured-work cards link to real project pages (photos are ready) - lazy-load below the fold.
- LocalBusiness schema fed by the footer NAP; add here since Home is a schema host (see `sitemap.md`).
- Palette: mint `#BAE0DF`, coral `#EF9777`, ivory `#FAF7F2`, text `#2F3433`. Use the "+" motif as a recurring accent (icons, dividers).
- Add a press/credibility strip between §3 and §4 once coverage exists.
