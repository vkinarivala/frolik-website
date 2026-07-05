---
name: frolik-website-design
description: Build pages and components for the Frolik+Co interior-design website (frolik.co.in) - a playful Memphis-geometric, scroll-animated static site for an Ahmedabad studio whose signature strength is kids' spaces. Use whenever creating, extending, or restyling any page (Home, Work, Kids Spaces, Services, Process, About, Journal, Contact) or any brand component. Captures the design tokens, motif system, motion language, component inventory, content voice, and build rules so every page matches the shipped home page.
user-invocable: true
---

# Frolik+Co - Website Build Skill

Encodes how **this** website is built so every page and component matches the brand. When building, follow these decisions unless the user overrides them.

**Brand idea:** *Grown-up craft with a child's sense of play.* A confident Ahmedabad interior-design studio that does homes, workspaces and commercial interiors - with a soft spot for **kids' spaces**. The identity is **Memphis-geometric**, lifted straight from the logo: coral + mint-sage on warm cream, bold 2px ink outlines, hard offset "pop" shadows, and six signature shape motifs. Cheerful and confident without being childish; never generic luxury, never a catalogue interior.

**Canonical implementation:** `index.html` (repo root) is the shipped home page and the reference for how every pattern below looks and moves in practice. **Read it before building any new page** - new pages must feel like siblings of it.

## Project location & source files
Repo root: `/Users/vanditkinarivala/Sites/frolik.co.in`

```
index.html                                ← LIVE home page - canonical design + animation reference
homepage-wireframe.md                     ← home page wireframe (section order, copy sources, motion map)
styles/main.css                           ← SHARED stylesheet - all tokens + components; every page links it
scripts/partials.js                       ← injects the common header + footer (see "Shared architecture")
scripts/main.js                           ← shared behaviours - binds only to markup that exists on the page
assets/frolik-logo.jpeg                   ← the actual logo (use this image, not a redrawn mark)
assets/*.webp                             ← all site photography (WebP only); wired ahead of the files
assets/IMAGES.md                          ← image manifest - canonical filenames + which pages reuse each
sitemap.md / sitemap.xml · robots.txt     ← sitemap + crawl config
references/
  frolik-co-design-system/project/        ← SOURCE OF TRUTH design system (from Claude Design)
    readme.md                             ← brand rationale, voice, foundations - read it
    tokens/ (colors|typography|spacing|effects|fonts).css   ← the token values
    components/ · ui_kits/ · foundations/ ← component specs + HTML/JSX prototypes
  frolik+co-research.md                   ← positioning, real copy, project names, SEO plan, FAQ set
archive/v1/                               ← the previous (editorial/3D) site - DO NOT reuse or extend
```

`references/frolik+co-research.md` remains the authoritative source for real copy, project names, SEO targets, FAQs and inquiry-form fields. The design-system UI kit's project names/testimonials are placeholders - swap in real ones from research when available.

## Stack - raw static HTML / CSS / JS (locked by the user)
**No framework, no build step, no CDN animation libraries.** One `.html` per page.
- **Fonts:** Google Fonts `<link>` - Space Grotesk (400–700) + Sora (300–700), with `preconnect`.
- **Scroll animation:** vanilla JS only - `IntersectionObserver` for reveals, and **one shared `requestAnimationFrame` loop** driving all scroll-coupled effects (marquee scrub, parallax stickers, pinned rail, progress line). Never one scroll listener per effect.
- **Graphics:** inline SVG for all motifs and icons. No WebGL/Three.js - the old 3D concept is retired.
- Real copy stays as semantic, indexable HTML text; decorative SVG gets `aria-hidden="true"`.

### Shared architecture (every new page follows this skeleton)
```html
<link rel="stylesheet" href="styles/main.css">     <!-- in <head>, after the fonts <link> -->
<body>
  <div id="site-header"></div>                     <!-- replaced by the common header -->
  ...page sections...
  <div id="site-footer"></div>                     <!-- replaced by the common footer -->
  <script src="scripts/partials.js" defer></script> <!-- MUST come before main.js -->
  <script src="scripts/main.js" defer></script>
</body>
```
- `scripts/partials.js` owns the header + footer markup and nav links (Work · Kids' spaces · Services · Process · About + `Let's talk` → contact.html). It marks the current page's nav link `.active` by filename. **Edit header/footer there only - never inline them in a page.**
- `scripts/main.js` is safe on every page: each behaviour binds only if its markup exists (`.reveal`/`.reveal-pop`, `[data-count]`, `[data-marquee]` - optional `data-words="A|✳|B"` override, `img[data-media]` photo fallback, `#workPin`/`#workRail`/`#workProgress`, `#steps`/`#lineFill`/`[data-step]`, `.sticker[data-speed]`). Reuse these hooks instead of writing new animation code; add new shared behaviours to main.js with the same must-exist guard pattern.
- Page-specific styles: prefer extending `styles/main.css` with a clearly-commented page section; a small inline `<style>` block is acceptable for true one-offs.
- Each page keeps its own `<title>`, meta description, canonical, OG tags, and JSON-LD (`LocalBusiness` on Home - see `index.html`; `FAQPage` where FAQs exist).

## Design tokens (source of truth: `references/frolik-co-design-system/project/tokens/`)

```css
:root{
  /* Brand hues - coral primary, mint secondary, on warm cream paper */
  --coral-100:#FBE7DC; --coral-200:#F5CBB4; --coral-300:#EFAE8C; --coral-400:#E8926B; --coral-500:#DC744C; --coral-600:#C25B36;
  --mint-100:#E7F3F0; --mint-200:#CDE7E1; --mint-300:#AED9CF; --mint-400:#8AC5B8; --mint-500:#63A99A; --mint-600:#4A857A;
  --cream-50:#FDFAF5; --cream-100:#FBF6EF;   /* page background */
  --sand-200:#F1E8DC; --sand-300:#E4D6C4; --clay-400:#C9B7A5; --taupe-500:#8C7B6B;
  --ink-800:#3A342F;  --ink-900:#2A2622;     /* body / headings - warm near-black */
  --sun-400:#F2C14E;  --sky-400:#8FC6E0;     /* playful accents - sparing, mostly kids work */

  --font-display:'Space Grotesk','Sora',system-ui,sans-serif;
  --font-body:'Sora',system-ui,sans-serif;

  --radius-sm:6px; --radius-md:12px; --radius-lg:20px; --radius-xl:28px; --radius-pill:999px;
  --border-ink:2px solid var(--ink-900);          /* THE structural signature */
  --shadow-pop:6px 6px 0 var(--ink-900);          /* Memphis hard offset shadow */
  --shadow-pop-coral:6px 6px 0 var(--coral-400);
  --shadow-pop-mint:6px 6px 0 var(--mint-400);

  --ease-out:cubic-bezier(0.22,1,0.36,1);
  --ease-bounce:cubic-bezier(0.34,1.56,0.64,1);   /* playful accents only */
  --dur-fast:140ms; --dur-base:240ms; --dur-slow:420ms;

  --container-max:1200px;
  --container-pad:clamp(20px,5vw,72px);
  --section-y:clamp(64px,9vw,128px);
}
```

**Colour rules:** flat warm colour fields, **never gradients**. Section rhythm alternates cream ↔ sand ↔ ink (full-bleed ink sections like Process/Footer are on-brand here). Coral is primary (CTAs, marquee, progress fills, stat numbers); mint is secondary (panels, quote cards, underlines); sun/sky accents sparingly. Placeholder media tiles = flat brand colour + one centered motif, which is the graceful fallback the photo layer covers once a file lands (see **Media & photography**).

**Type rules:** Space Grotesk for display/headings - headlines huge, tight (`letter-spacing:-.02 to -.03em`, `line-height` ~0.98–1.06). Sora for body/UI. Eyebrows: 13px uppercase Sora semibold, `letter-spacing:.16em`, preceded by a 28×3px coloured rule (see `.eyebrow` in `index.html`). **Sentence case everywhere** - uppercase only in eyebrows/badges; never title-case headlines.

## Logo
Use the actual logo image `assets/frolik-logo.jpeg` (white card with coral frame) - do not redraw or approximate it. Present it as a physical "card": 2px ink border, small radius, white background; nav at ~60px tall (the mark is near-square, so it reads small - don't go below this), footer at ~80px. Hover: tiny lift + rotate (−1.5°) with a small coral pop shadow. Since the image is the full wordmark, don't repeat "frolik+co" as text beside it.

## Media & photography (the placeholder-first pattern - use on EVERY media well)
All site photography is **WebP** in `assets/`. Never block a page on missing files: wire the
image URL ahead of the photo, and it is **picked up automatically** the moment the file lands -
until then the flat-colour + motif placeholder shows through (no broken-image icon). This is
already implemented in `styles/main.css` (`.media-img`) and `scripts/main.js` (`img[data-media]`),
so any page that links them inherits the behaviour for free.

**How to add a photo well** - build the placeholder tile as usual (flat brand colour + one
centered motif SVG, `position:relative;overflow:hidden`), then drop a photo layer in as the
**first child**:
```html
<div class="work-media" style="background:var(--coral-200)">
  <img class="media-img" data-media loading="lazy"
       src="assets/work-coral-joy.webp"
       alt="The Coral Joy - a children's bedroom in Ahmedabad by Frolik+Co">
  <svg ...motif placeholder...></svg>   <!-- stays until the photo loads -->
</div>
```
- `.media-img` fills the well (`object-fit:cover`); on load, JS adds `.has-photo` to the well
  (hiding the motif, adding a bottom scrim + white label on kids tiles) and on error/absence
  adds `.media-missing` (hiding the img so the placeholder shows). Race-safe - handles images
  that resolve before the deferred script runs.
- Always give real `alt` text (space type + location - it's part of the SEO plan). Keep decorative
  motifs `aria-hidden`. `loading="lazy"` on anything below the fold.
- **Filenames are canonical and reused across pages** - a photo shown on Home also serves Work,
  Kids Spaces and project pages via the same path. Register every slug in `assets/IMAGES.md`
  (filename · slot · aspect · which pages reuse it) and reuse existing slugs before minting new ones.
- **Social image:** per-page `og:image`/`twitter:image` point at a dedicated `assets/og-<page>.webp`
  (1200×630). Caveat: some scrapers (WhatsApp, LinkedIn) don't render WebP OG images - supply a
  `.jpg` twin for the OG tags if broad link previews matter; keep the on-page media WebP.

## Shape-motif system (the signature - decorative only, never functional UI)
Six Memphis motifs from the logo, drawn as inline SVG (specs in `components/data-display/Sticker.jsx` and live in `index.html`):
**plus · striped circle · coral slash · split circle · arc · dot.**
Use them as: floating parallax "stickers" behind hero/CTA content, media-tile centrepieces, card corner accents (e.g. the plus pinned to the quote card at a slight rotate). Scatter with restraint - a handful per screen, never a wallpaper. Functional icons are a Lucide-style 2px-stroke rounded set, hand-inlined. A single `✳` is allowed as the marquee separator only. No emoji anywhere in the UI.

## Motion language (all patterns implemented in `index.html` - copy them)
Restrained and springy; scroll-coupled, never hyperactive.
- **Entrance reveals:** `.reveal` (fade + 36px rise) and `.reveal-pop` (rise + scale + slight `--tilt` rotate, bounce ease) toggled by one IntersectionObserver; stagger siblings with inline `transition-delay`, and **clear the delay after reveal** so hover states stay snappy.
- **Hero:** headline lines rise in via `overflow:hidden` line masks; the accent word gets a hand-drawn SVG underline animated with `stroke-dashoffset`; motif stickers pop in (`--d` custom-property delays) then parallax at per-sticker `data-speed`.
- **Marquees:** full-bleed coral/mint strips with 2px ink top/bottom borders; content drifts continuously AND scrubs with scroll (`drift + scrollY * 0.5`, direction per strip).
- **Pinned horizontal gallery:** the "walk-through" work section - tall pin wrapper, `position:sticky` full-viewport inner, rail `translateX` driven by scroll progress, coral progress bar. Re-measure on resize/load/font-ready.
- **Scroll-drawn process line:** on ink sections, a coral line fills down a timeline as it crosses ~65% viewport height; each step's numbered dot "lights" coral with a small bounce-scale.
- **Count-up stats:** ease-out cubic count on first intersection.
- **Hover states:** buttons/cards translate −2px and the pop shadow grows and/or shifts ink → coral; tilted cards straighten on hover; arrows nudge +4px.
- **Press states:** settle back, shadow collapses (2px).
- **Performance:** one rAF loop for everything scroll-coupled; `will-change:transform` on moving layers only.

## Component inventory (patterns live in `index.html`; specs in the design system's `components/`)
`Nav` (fixed, cream at 82% + 10px blur, 2px ink bottom border fades in after 24px scroll) · `Button` (pill, 2px ink border; variants coral / ink / ghost, pop-shadow lift on hover) · `Eyebrow` (SectionLabel) · `Sticker` (six motifs) · `Marquee` · `ServiceCard` (white, ink outline, 4px pop shadow, 56px colour-chip icon, slight resting tilt) · `WorkCard` (outlined media well + meta row + year pill) · `StatBlock` · `QuoteCard` (mint panel, pop shadow, pinned plus sticker) · `ProcessStep` (numbered dot + drawn line) · `CTASection` · `Footer` (ink, three columns, coral hover links).

Cards pair a **2px ink outline with a hard offset shadow** - that combination is the brand's structural signature; use it on every raised surface.

## Page roles & patterns
Section order per page: **Hero → marquee/divider → main content → proof → process/detail → CTA → footer.** A contact CTA must be reachable from every page.
- **Home** - shipped (`index.html`, spec in `homepage-wireframe.md`): hero → coral marquee → services → pinned work gallery (real kids projects first) → kids-signature block → stats + quote + press strip → mint marquee → 5-step process (ink) → CTA → footer.
- **Work** - editorial gallery: filter pills (fill with tone colour when selected), outlined cards, masked image reveals. Lead with 8–12 curated projects.
- **Kids Spaces** - strongest SEO + brand page; freer use of sun/sky accents; parent FAQs; grow-with-child principles.
- **Services / Process / About / Journal / Contact** - same system; Contact keeps the form in an outlined cream card (Input spec in `components/forms/`).
- Every page should include: at least one marquee or full-bleed colour band for rhythm, a few parallax stickers, and reveals on section entry - but **vary the composition** so pages don't feel cloned.

## Voice & content rules (per `references/frolik-co-design-system/project/readme.md` + research)
Warm, playful, plainspoken - a small studio talking like a person. "We" for the studio, "you/your" for the client. Sentence case; light confident fragments welcome in headlines. **Never use em dashes (the — character) anywhere: not in copy, headlines, alt text, or code. Use a regular hyphen-minus (-) instead** (a spaced " - " reads as a warm pause). **The wink word is spelled "frolik" (brand spelling, not "frolic") and used at most once per page.** No corporate jargon, no "best interior designer" spam, no emoji. Always *all interiors, with a special understanding of children* - never a kids-only brand. Use real project names and copy from `frolik+co-research.md`.

## Accessibility (non-negotiable)
Full `prefers-reduced-motion` mode - implemented in `index.html`, replicate on every page: reveals render instantly, hero text/stickers static, marquees static, **pinned gallery becomes a natively scrollable horizontal row (no pin)**, process line renders fully drawn with all steps lit, counters show final values. Keyboard navigation and visible focus states everywhere; decorative SVG `aria-hidden`; real text never baked into images; watch contrast for coral/taupe text on cream (use `--coral-500`+ for small text).

## SEO (per research §6)
Ahmedabad in title tags. Unique `<title>` + meta description per page, canonical URLs, per-page OG/Twitter tags pointing at a dedicated `assets/og-<page>.webp`, `LocalBusiness` + `FAQPage` JSON-LD, descriptive alt text on every `.media-img`. Project pages carry real location, year, size, space type. WhatsApp (`wa.me`) + `tel:` click targets. Keep `sitemap.xml` in sync.

## Final checklist (before "done")
Tokens come from the design system, not invented · page background is warm cream, sections alternate cream/sand/ink · every raised surface has the 2px ink outline + pop shadow · motifs scattered with restraint · scroll animations run off one rAF loop and feel springy, not busy · reduced-motion mode fully works · actual logo image used (never a redrawn mark) · every photo well uses the `.media-img[data-media]` WebP pattern over a motif fallback, with real alt text, and its filename is registered/reused via `assets/IMAGES.md` · headlines sentence-case Space Grotesk, tight · "frolik" ≤ once per page · copy real (research file), no emoji · new page reads as a sibling of `index.html`, not a clone and not a stranger.
