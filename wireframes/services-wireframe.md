# Frolik + Co - Services overview wireframe

Sitemap: `/services` 🟢 (P 0.8). Keep it **simple and premium - the portfolio carries
the weight, don't overload this page with text** (research §5 Services). Six service
cards, a light process teaser, one CTA.

**Page `<title>`:** `Interior Design Services in Ahmedabad | Frolik + Co`
**Meta:** *Residential, kids' spaces, workspace, and commercial interior design - from consultation to turnkey execution.*
**H1:** What we design · **Structured data:** `BreadcrumbList` JSON-LD.

---

## Section order
```
0. Header (nav "Services" .active)
1. Hero - compact, cream, 2 stickers
2. Service cards - 6, outlined pop-shadow (link to Phase-2 detail pages)
3. Marquee (mint) - capability words
4. How we can help - design-only vs execution split
5. Process teaser - condensed 5 steps → link to /process
6. CTA
7. Footer
```

---

## 1. Hero
- Cream, ~52svh. Eyebrow (coral): *Services · Ahmedabad*. H1 **What we design.** Sub
  (research §5): *One studio across homes, kids' spaces, workspaces and commercial
  interiors - from a first consultation to turnkey handover.* No hard sell.

## 2. Service cards (research §5 - six services)
- Cream. Eyebrow (mint) *How we help*, H2 **Six ways to work with us.** Grid of six
  outlined pop-shadow cards (ServiceCard pattern), 56px colour-chip icon, slight
  resting tilt → straighten on hover, staggered `.reveal-pop`. Each links to its
  Phase-2 detail page (sitemap) when built:
  1. **Residential interiors** - *Full homes, apartments, bungalows and renovations.*
     → /services/residential-interiors (coral chip)
  2. **Kids' spaces** - *Bedrooms, playrooms, study rooms, nurseries, sibling rooms.*
     → /services/kids-spaces (mint chip) - our first love.
  3. **Commercial & studio interiors** - *Offices, creative studios, retail, cafés and
     experience-led spaces.* → /services/commercial-studio-interiors (sky chip)
  4. **Design consultation** - *Layout, colour, furniture, styling and material
     palette.* → /services/design-consultation (sand chip)
  5. **Turnkey execution** - *Custom furniture, vendor coordination, site work,
     handover.* → /services/turnkey-execution (sun chip)
  6. **Styling & decor** - *Styling, final-mile details and the finishing setup.*
     → /services/styling-decor (clay chip)
- Cards without a live detail page stay non-linked until Phase 2 (sitemap legend).

## 3. Marquee (mint)
- `data-marquee data-dir="-1"`. Words: Consultation ✳ Design ✳ Custom furniture ✳
  Execution ✳ Styling ✳ Turnkey.

## 4. How we can help (research §10 form field - design vs execution)
- Sand band, two columns. Eyebrow *Ways to engage*, H2 **Design only, or design and
  build - your call.** Two outlined cards: **Design** (space plan, mood board, palette,
  furniture drawings, 3D direction, lighting plan - research §5 Process "what you
  receive") and **Design + execution** (all of that, plus custom furniture, vendor
  coordination, site work and styling to handover).

## 5. Process teaser (link, don't duplicate /process)
- Cream. Eyebrow *How it works*, H2 **Thoughtful from the first sketch to the final
  cushion.** (research §13). Condensed 5-dot row (Discovery · Concept · Design · Build ·
  Style & handover) - **not** the full scroll-drawn timeline; that lives on
  `process.html`. Button `See our full process` (ghost) → process.html.

## 6. CTA
- Reuse home CTA. H2 **Not sure which service you need?** Sub: *Tell us about the space
  - we'll suggest the right way to work together.* Button `Start a project` (coral pop)
  → contact.html.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | `.reveal` + sticker parallax |
| Service cards | staggered `.reveal-pop`, tilt→straighten hover |
| Marquee | drift + scrub |
| Engage cards / teaser | `.reveal` fade-rise |

Reduced motion: reveals instant, marquee + stickers static.

## Image assets (WebP - see `assets/IMAGES.md`)
- Service cards are **motif colour-chips, not photos** (skill) - no photography here.
- Social: `og-services.webp`. (Per-service hero photos live on the detail pages.)

## Content still needed
- Confirm the six service names/scope match the studio's real offering.
- Build Phase-2 detail pages before linking cards to them.
</content>
