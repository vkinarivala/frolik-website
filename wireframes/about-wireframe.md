# Frolik + Co — About / Founder wireframe

Sitemap: `/about` 🟢 (P 0.7). Should feel **warm, founder-led and trustworthy**
(research §5 About). This is where premium clients decide the studio has taste and
parents decide the studio understands children (research §14).

**Page `<title>`:** `About Frolik + Co | Ahmedabad Interior Design Studio`
**Meta:** *Meet the founder-led Ahmedabad studio behind warm, playful, highly functional interiors for homes and children.*
**H1:** A room should feel personal before it feels perfect.
**Structured data:** `BreadcrumbList` JSON-LD (+ `LocalBusiness` reuse optional).

---

## Section order
```
0. Header (nav "About" .active)
1. Hero — founder/studio photo + philosophy H1
2. Studio story — who we are, short
3. Design philosophy — belief statements
4. Why kids' spaces — the special focus
5. Ahmedabad roots
6. Press / featured in — The Architects Diary
7. Team / collaborators (optional at launch)
8. CTA
9. Footer
```

---

## 1. Hero (research §5 About)
- Cream, ~80svh, two columns. Left: eyebrow (coral) *The studio · Ahmedabad*, H1
  (display, tight): **A room should feel personal before it feels perfect.** Sub
  (research §5 About copy): *Every space begins with how people live — how a child
  plays, how a family gathers, how a creative team works, how light moves through the
  day.* Right: **founder / studio photo** as a physical ink-outlined card + pop shadow,
  one plus sticker pinned, gentle parallax. (Photo PLACEHOLDER.)

## 2. Studio story (research §5 About)
- Sand band, two columns. Eyebrow *Who we are*, H2 **A small Ahmedabad studio that
  designs like it's listening.** Short founder-voiced story of Frolik + Co — a few warm
  paragraphs (research voice: "we" studio, "you/your" client). Real bio PLACEHOLDER.

## 3. Design philosophy (research §5 About)
- Cream. Eyebrow (mint) *What we believe*, H2 **How we think about a space.** 3–4
  belief statements as outlined pop-shadow cards, motif each, staggered `.reveal-pop`.
  Draw from research §14 filter words — playful, calm, warm, intelligent, soft,
  personal, practical, child-aware, design-led. e.g.:
  - *We design the life first, then the look.*
  - *Playful, but grown-up — never a catalogue interior.*
  - *Function is the kindest kind of beauty.*
  - *A space should still fit you in five years.*

## 4. Why kids' spaces (research §5 About — the special focus)
- Mint band (sun/sky accents allowed), two columns. Eyebrow (sun) *Our soft spot*, H2
  **Why children's rooms became a signature.** Prose on how the studio came to
  understand play, softness, storage, safety and grow-with-child design — reinforcing
  *all interiors, with a special understanding of children* (skill, never kids-only).
  Right: playful collage of real kids projects (tiles → The Coral Joy / Monochromatic
  Room / Purple Play Room).

## 5. Ahmedabad roots (research §5 About, local SEO)
- Sand band. Eyebrow *Where we work*, H2 **Rooted in Ahmedabad.** Short note on the
  city + service area; sets up LocalBusiness credibility. Optional simple map motif
  (inline SVG, decorative).

## 6. Press / featured in (research §5.7)
- Cream. Eyebrow (mint) *Featured in*, hairline strip: **The Architects Diary — The
  Coral Joy · The Monochromatic Room · The Purple Play Room.** Link when URLs exist.

## 7. Team / collaborators (optional — include only if content exists)
- Sand band. Eyebrow *The people*, small grid of ink-outlined photo cards (name + role)
  for team/collaborators. Omit cleanly at launch if solo (research: founder-led).

## 8. CTA (research §5 About + §8 "begin a conversation")
- Reuse home CTA. H2 **Let's design something that feels like you.** Button `Start a
  project` (ink pop) → contact.html.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | H1 mask-rise, photo card + sticker parallax |
| Story / roots | `.reveal` fade-rise |
| Philosophy cards | staggered `.reveal-pop` |
| Kids collage | `.reveal-pop` bounce tiles |

Reduced motion: reveals instant, photo/stickers static.

## Image assets (WebP — see `assets/IMAGES.md`)
- Hero photo card: `about-founder.webp` (portrait ~3:4, new).
- "Who we are": `about-studio.webp` (optional studio shot).
- "Why kids' spaces" collage: **reuse** `work-coral-joy.webp` ·
  `work-monochromatic-room.webp` · `work-purple-play-room.webp`.
- Team cards (optional): `about-team-1.webp`, `about-team-2.webp`, …
- Social: `og-about.webp`.

## Content still needed (research §9 trust assets)
- Founder photo + real bio; studio/team photo; design philosophy in the studio's words.
- Real founding year (home assumes Est. 2016 — verify).
- The Architects Diary article URLs; any Google review snippets.
</content>
