# Frolik+Co - Design System

A design system for **Frolik+Co**, an interior design studio based in **Ahmedabad, India**. The studio's public niche is **kids' rooms and kids' spaces**, but the practice spans **all interiors - homes, offices, and commercial spaces**. The identity is playful, geometric, and Memphis-inspired: bold cut letterforms, a mint-sage + coral palette, and hard-edged shape motifs, balanced on warm cream paper.

The system's visual language is derived from the uploaded logo and the studio's public presence. It is intentionally cheerful and confident without being childish - a grown-up studio that happens to love designing for kids.

## Sources
- **Logo:** `uploads/frolik+co-logo.jpeg` (copied to `assets/frolik-logo.jpeg`) - the primary and only brand asset provided.
- **Instagram:** [@frolikncodesigns](https://www.instagram.com/frolikncodesigns/) - bio: "Kids Room Lifestyle Accessories • Designing Kid's Spaces • Ahmedabad".
- **Brand direction confirmed by the client:** Memphis-geometric, bold, geometric-sans typography; logo used throughout; the studio does all interior types, not only kids' spaces.

No codebase, Figma file, or additional brand assets were provided. Palette extensions, typography, tokens, components, sample copy, and project names in the UI kits are **original interpretations built to fit the brand**, not sourced from the studio - treat the project names and testimonials as placeholder/fictional.

---

## Content Fundamentals
How Frolik+Co writes.

- **Voice:** Warm, playful, and plainspoken - a small studio talking like a person, not a brochure. Confident but never precious.
- **Person:** "We" for the studio, "you/your" for the client. Collaborative, first-name energy. E.g. *"We design interiors for how people really live and work."*
- **The word "frolic":** The brand leans into its own name as a verb. Headlines like *"Spaces that let you frolic"* and *"ready to frolic?"* are on-brand. Use sparingly - once per page, as a wink.
- **Casing:** Sentence case everywhere for headlines and body. UPPERCASE reserved for small wide-tracked eyebrow labels and badges only. Never title-case headlines.
- **Punctuation:** Em-dashes for warmth and asides. Occasional playful contradiction ("simple and impossible"). Light, confident sentence fragments are welcome in headlines.
- **Tone examples:**
  - Hero: *"Spaces that let you frolic."*
  - Subhead: *"…with a soft spot for the rooms where kids grow up."*
  - CTA: *"Got a space that's ready to frolic?"* / *"Let's talk"* / *"Start a project"*
  - Service blurb: *"Offices designed for focus and warmth, not fluorescent fatigue."*
- **Emoji:** Not used in the interface. (A single 📍 pin appears in the Instagram bio, but the web/print system uses drawn icons and shape motifs instead.)
- **Vibe in one line:** Grown-up craft with a child's sense of play.

---

## Visual Foundations

- **Palette:** Two brand hues from the logo - **coral** (warm salmon `#E8926B`, primary) and **mint-sage** (`#AED9CF`, secondary) - on **warm cream** paper (`#FBF6EF`). Extended with warm neutrals (sand, clay, taupe) and a near-black warm **ink** (`#2A2622`). Two playful accents - **sunny yellow** (`#F2C14E`) and **sky blue** (`#8FC6E0`) - appear sparingly, mostly on kids-space work. Never let the accents dominate.
- **Typography:** **Space Grotesk** for display/headings (a geometric grotesque whose slightly quirky cuts echo the logo's playful letterforms) and **Sora** for body/UI (clean geometric sans). Headlines are tight (tracking −0.02 to −0.03em, line-height ~1.0). Eyebrows are wide-tracked uppercase (0.16em) with a short colored rule.
- **Shape / motif system:** The signature. Six Memphis motifs lifted straight from the logo - **plus, striped circle, coral slash, split circle, arc, dot** - provided as the `Sticker` component. Scatter them decoratively behind and beside content; never as functional UI.
- **Backgrounds:** Flat warm color fields, not gradients. Alternate cream ↔ sand ↔ ink for section rhythm. Photography (when present) sits inside outlined, rounded panels. Placeholder tiles use flat brand colors with a centered motif.
- **Borders:** A confident **2px ink outline** is the brand's structural signature (Memphis). Hairline `1px` sand dividers for quieter surfaces.
- **Radii:** Mixed - hard geometry softened by generous radii (cards 20px, panels 24px, pills 999px). Small radii (6–12px) for swatches and inputs.
- **Shadows:** Two systems. (1) Soft warm-tinted shadows (`--shadow-sm/md/lg`) for gentle depth. (2) The **Memphis "pop"** - a hard offset shadow (`6px 6px 0`) in ink, coral, or mint - for playful emphasis on cards, buttons, and hero tiles. Cards commonly pair a 2px ink outline with a hard offset shadow.
- **Motion:** Restrained and springy. Buttons lift 1–2px on hover; `pop` elements translate −2px and the offset shadow grows. Ease-out `cubic-bezier(0.22,1,0.36,1)` for most, a gentle bounce for playful accents. Durations 140–420ms. No infinite decorative loops.
- **Hover states:** Slight upward translate + (for pop elements) a growing/color-shifting hard shadow. Project cards shift their offset shadow from ink to coral on hover.
- **Press states:** Settle back to resting position (shadow collapses). Tags fill with their tone color when selected.
- **Transparency / blur:** Used only for sticky nav (cream at ~82% + 10px blur). Otherwise surfaces are opaque.
- **Imagery vibe:** Warm, sunlit, tactile - oak, bouclé, rattan, brass, lime plaster. Not cool, not clinical, not black-and-white.
- **Layout:** Max content width 1200px; fluid section padding; 4px spacing rhythm. Confident asymmetric collages over rigid grids for hero/mood-board moments.

---

## Iconography

- **Primary "icon" language is the shape-motif system** (`Sticker`), not a conventional icon set. These Memphis shapes carry most of the brand's visual personality.
- **Functional UI icons** (nav, contact, arrows) use a **Lucide-style 2px-stroke, rounded-linecap** set, hand-inlined as small SVGs in `ui_kits/website/Icons.jsx` (home, briefcase, building, blocks, arrow, mail, instagram, pin, star, etc.). **Substitution flag:** no icon set was provided by the studio, so this Lucide-style set is a chosen stand-in that matches the geometric, rounded feel - swap for the studio's real set if one exists. [Lucide](https://lucide.dev) can be linked from CDN if you prefer live icons.
- **Emoji:** not used in the interface. **Unicode:** a single decorative `✳` is used as a separator in the home marquee only.
- **No hand-drawn illustration** beyond the geometric motifs. Do not invent new logo-like marks.

---

## Fonts - substitution note
The studio's exact brand fonts are unknown. **Space Grotesk** and **Sora** (both Google Fonts) were chosen as the nearest geometric-sans match to the logo's letterforms, per the confirmed "geometric sans matching the logo" direction. They load via `@import` from Google Fonts in `tokens/fonts.css` (no local binaries shipped). **If Frolik+Co has licensed brand fonts, send the files and I'll swap them in.**

---

## Index / Manifest

**Global CSS**
- `styles.css` - root entry (import list only)
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**Components** (`window` namespace exposed by the compiled bundle)
- `components/actions/` - **Button**, **IconButton**
- `components/data-display/` - **Tag**, **Badge**, **SectionLabel**, **Sticker**
- `components/forms/` - **Input**
- `components/surfaces/` - **Card**, **ProjectCard**

**Intentional additions:** `Sticker` (decorative brand shape motifs) and `SectionLabel` (eyebrow kicker) are brand-specific primitives added because the identity depends on them. `ProjectCard` is included as the core unit of the portfolio work.

**UI kits**
- `ui_kits/website/` - Frolik+Co marketing site (Home, Work, Studio, Contact - interactive)
- `ui_kits/moodboard/` - Client-facing project layouts (mood board + case study, toggle)

**Foundations** (`foundations/*.html`) - specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**Assets** - `assets/frolik-logo.jpeg`

**Skill** - `SKILL.md` (Agent-Skills compatible)
