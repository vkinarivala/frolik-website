# Frolik + Co - Journal article wireframe (TEMPLATE)

Sitemap: `/journal/{article-slug}` 🟢 (P 0.6). One readable long-form template for all
articles (3 at launch → 12). Optimised for reading + SEO; the design system stays quiet
so the prose leads - but header, footer, motifs and CTA keep it on-brand.

**Title pattern:** `{Article Title} | Frolik + Co`
**Structured data:** `BreadcrumbList` (Home › Journal › {Article}) + `Article` JSON-LD
(headline, author, datePublished, image). Canonical to self.

**Launch instances (sitemap):**
1. How to design a kids room that grows with your child - `kids-room-that-grows-with-your-child`
2. Kids room interior design in Ahmedabad: cost, timeline & planning - `kids-room-interior-design-ahmedabad-cost-timeline`
3. Inside a Frolik + Co project: from brief to handover - `inside-a-frolik-project-brief-to-handover`

---

## Section order
```
0. Header
1. Article header - category, title, meta (date · read-time · author)
2. Hero image - full-bleed media well
3. Article body - measured single column of real HTML prose
4. Inline CTA / lead-magnet - mid-article (optional)
5. Author / studio note - mini bio card
6. Related reading - 3 article cards
7. CTA - start a project
8. Footer
```

---

## 1. Article header
- Cream, centered, narrow column, 1–2 stickers. Category tag (pill, tone by pillar) →
  H1 = article title (display, tight, sentence case). Meta row: *Published {date} ·
  {n} min read · Frolik + Co*.

## 2. Hero image
- Full-bleed media well (flat brand tone + centered motif placeholder → real cover
  photo). Descriptive local `alt` (SEO checklist). Reduced motion: static.

## 3. Article body (the point of the page)
- **Single measured column (~68ch)** for readability, cream paper. Real semantic,
  indexable HTML: H2/H3 subheads (one H1 only), paragraphs, lists, blockquotes (mint
  QuoteCard style for pull-quotes), inline images in ink-outlined wells with captions.
  Warm plainspoken voice; keyword-natural, no stuffing (research §6). `.reveal` on
  block entry, kept subtle so reading isn't interrupted. 400–1200 words typical.

## 4. Inline CTA / lead-magnet (optional, research §11)
- Mid-article outlined card: e.g. **Kids Room Planning Checklist** download, or a soft
  link to `/kids-spaces`. One only - don't clutter the read.

## 5. Author / studio note
- Sand band. Small ink-outlined card: studio logo card + one-line studio bio + link to
  `/about`. Reinforces founder-led trust (research §5 About).

## 6. Related reading (internal linking, sitemap)
- Cream. Eyebrow *Keep reading*, 3 article cards (same as Journal grid). Link within
  the same pillar where possible.

## 7. CTA
- Reuse home CTA. Context-matched - a kids article → **Thinking about your child's
  room?** → contact.html?type=kids; general → `Start a project`.

---

## Motion map
Deliberately restrained (reading page): hero static/parallax-light, `.reveal` on body
blocks, `.reveal-pop` on related cards. Reduced motion: everything instant.

## Image assets (WebP - see `assets/IMAGES.md`)
- Hero cover: `journal-{slug}.webp` - **reuses** the hub card image.
- In-article images (optional): `journal-{slug}-01.webp`, `-02.webp`, …
- Related-reading cards: **reuse** other `journal-{slug}.webp` covers.
- Social: OG = the article's own `journal-{slug}.webp` (or `og-journal.webp`).

## Content still needed (per article)
- Full body copy, cover image, publish date, read-time, author.
- Lead-magnet asset if the inline CTA is used.
</content>
