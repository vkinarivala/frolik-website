---
name: frolik-co-design
description: Use this skill to generate well-branded interfaces and assets for Frolik+Co, an Ahmedabad interior design studio (kids' spaces niche, all interiors), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`styles.css` + `tokens/`, `components/`, `ui_kits/`, `foundations/`, `assets/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key brand notes:
- Playful Memphis-geometric identity: coral + mint-sage on warm cream, 2px ink outlines, hard "pop" offset shadows, and the six shape motifs (plus, striped circle, slash, split circle, arc, dot).
- Type: Space Grotesk (display) + Sora (body), both Google Fonts. Tight tracking on headlines, wide-tracked uppercase eyebrows.
- Voice: warm, playful, plainspoken; "we/you"; sentence case; lean on the word "frolic" sparingly. No emoji in-UI.
- Load `styles.css` for tokens; mount components from the compiled bundle via `window.<Namespace>`.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
