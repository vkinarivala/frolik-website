# Frolik + Co - Service detail wireframe (TEMPLATE, Phase 2)

Sitemap: `/services/{slug}` 🔵 (P 0.6–0.8). One template for all six service detail
pages. A focused, SEO-targeted page per service that still leans on the portfolio for
proof (research §5 - don't overload with text; let work carry weight).

**Instances (sitemap):**
| Slug | `<title>` | Primary keyword |
|---|---|---|
| `residential-interiors` | Residential Interior Designer in Ahmedabad \| Frolik + Co | residential interior designer Ahmedabad |
| `kids-spaces` | Kids Space Interior Design Services \| Frolik + Co | kids interior design services Ahmedabad |
| `commercial-studio-interiors` | Commercial & Studio Interior Designer in Ahmedabad \| Frolik + Co | commercial interior designer Ahmedabad |
| `design-consultation` | Interior Design Consultation in Ahmedabad \| Frolik + Co | interior design consultation Ahmedabad |
| `turnkey-execution` | Turnkey Interior Execution in Ahmedabad \| Frolik + Co | turnkey interior designer Ahmedabad |
| `styling-decor` | Interior Styling & Decor in Ahmedabad \| Frolik + Co | interior styling Ahmedabad |

**Structured data:** `BreadcrumbList` (Home › Services › {service}). Canonical to self;
`/services/kids-spaces` cross-links to `/kids-spaces` (the brand hub).

---

## Section order
```
0. Header (nav "Services" .active)
1. Hero - service-specific, keyword H1
2. What's included - scoped deliverables list
3. How it works - this service's slice of the process
4. Related work - 2–3 WorkCards of this service type
5. FAQ (optional) - 3–4 questions, FAQ schema if present
6. Related services - cross-links
7. CTA
8. Footer
```

---

## 1. Hero
- Cream, ~60svh, 2 stickers. Eyebrow (coral): *Services · {Service} · Ahmedabad*. H1 =
  keyword-led phrase (e.g. **Residential interior designer in Ahmedabad**), display,
  tight, coral accent. Sub = one warm sentence on what this service is for. CTA
  `Start a project` (coral pop) → contact.html?type={slug}.

## 2. What's included (research §5 Process "what you receive", scoped per service)
- Sand band. Eyebrow *What's included*, H2 **What you get.** Motif-bullet checklist,
  scoped to the service - e.g.:
  - Residential → space plan · mood board · material palette · furniture drawings ·
    lighting plan · 3D direction · budget estimate · execution plan.
  - Design consultation → layout, colour, furniture and material guidance (design-only,
    no execution).
  - Turnkey execution → everything built: custom furniture, vendor coordination, site
    work, styling, handover.
  - Styling & decor → styling, final-mile details, finishing setup.
- Keep it to real, scannable items; short prose intro (indexable, keyword-natural).

## 3. How it works (this service's slice)
- Cream. The relevant steps of the studio process (subset of the five) as a compact
  numbered row - links out to `/process` for the full timeline, doesn't reproduce the
  scroll-drawn line.

## 4. Related work (research §5 - proof)
- Sand band. 2–3 WorkCards of this service type (real where available, else
  PLACEHOLDER), end card → filtered `/work/{category}`.

## 5. FAQ (optional, sitemap FAQ schema)
- Include for high-intent services (residential, kids, turnkey). Accordion + `FAQPage`
  JSON-LD; 3–4 questions on cost, timeline, design-vs-execution.

## 6. Related services (internal linking)
- Cream. Pill/cards linking sibling services + back to `/services`.

## 7. CTA
- Reuse home CTA. H2 **Have a {service-context} in mind?** Button `Start a project`
  (ink pop) → contact.html?type={slug}.

---

## Motion map
Same as the Services overview: hero `.reveal` + sticker parallax, `.reveal` lists,
`.reveal-pop` work cards, optional accordion. Reduced motion identical.

## Image assets (WebP - see `assets/IMAGES.md`)
- Hero (one per service, new): `service-residential-interiors-hero.webp` ·
  `service-kids-spaces-hero.webp` (may reuse `kids-hero.webp`) ·
  `service-commercial-studio-interiors-hero.webp` ·
  `service-design-consultation-hero.webp` · `service-turnkey-execution-hero.webp` ·
  `service-styling-decor-hero.webp`.
- Related-work cards: **reuse** the relevant `work-*.webp`.
- Social: `og-{slug}.webp` per page.

## Content still needed (per service)
- Scoped deliverables list confirmed against real offering.
- 2–3 real project examples per service; FAQ answers where used.
- Build only in Phase 2, once supporting work exists (sitemap legend).
</content>
