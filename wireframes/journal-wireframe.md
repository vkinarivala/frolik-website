# Frolik + Co — Journal hub wireframe

Sitemap: `/journal` 🟢 (P 0.6, changefreq weekly). SEO + trust, **not random posting**
(research §5 Journal). Launch with 3 articles, built to grow to 12. An editorial index
that still feels like the rest of the site.

**Page `<title>`:** `Interior Design Journal | Frolik + Co Ahmedabad`
**Meta:** *Guides and stories on kids' rooms, Ahmedabad homes, colour, storage, and life behind our projects.*
**H1:** Journal · **Structured data:** `BreadcrumbList` (+ `Blog` optional).

---

## Section order
```
0. Header (nav — Journal isn't a top-nav item; no link .active, that's fine)
1. Hero — compact, cream, 2 stickers
2. Featured article — one large lead card
3. Topic filter — pill row (content pillars)
4. Article grid — outlined cards
5. Marquee (mint) — topic words
6. Newsletter / lead-magnet strip — Kids Room Planning Checklist
7. CTA
8. Footer
```

---

## 1. Hero
- Cream, ~50svh, 2 stickers. Eyebrow (coral): *Journal · Ahmedabad*. H1 **Journal.**
  Sub (research §5 Journal): *Guides and stories on kids' rooms, Ahmedabad homes,
  colour, storage and the life behind our projects.*

## 2. Featured article (lead card)
- Cream. One wide outlined pop-shadow card, mask-reveal image well (motif placeholder),
  category tag, title, dek, read-time, → article. Feature article #1 at launch.

## 3. Topic filter (research §5 — content pillars)
- Sticky pill row, same fill-on-select behaviour as Work (reuse the guarded JS filter
  on `data-topic`). Pills: All · Kids' spaces · Ahmedabad homes · Colour & material ·
  Storage · Behind the scenes · Parent guides.

## 4. Article grid (sitemap — 3 at launch → 12)
- Cream, responsive grid. Article card = outlined media well + category tag + title +
  one-line dek + read-time; staggered `.reveal-pop`, gentle image zoom on hover.
- **Launch set (🟢, sitemap Journal table):**
  1. **How to design a kids room that grows with your child** → /journal/kids-room-that-grows-with-your-child (Kids' spaces)
  2. **Kids room interior design in Ahmedabad: cost, timeline & planning** → /journal/kids-room-interior-design-ahmedabad-cost-timeline (Parent guides)
  3. **Inside a Frolik + Co project: from brief to handover** → /journal/inside-a-frolik-project-brief-to-handover (Behind the scenes)
- Phase-2 pipeline (🔵, sitemap #4–#12) appears as cards are published — same template.

## 5. Marquee (mint)
- `data-marquee data-dir="-1"`. Words: Kids' spaces ✳ Colour ✳ Storage ✳ Ahmedabad ✳
  Behind the scenes ✳ Parent guides.

## 6. Newsletter / lead-magnet strip (research §11)
- Sand band, outlined card. Eyebrow *Free guide*, H2 **Kids Room Planning Checklist.**
  Sub: *Plan sleep, play, study, storage, safety, lighting and future growth before you
  start your child's room.* Email input (Input component spec) + `Send me the checklist`
  (coral pop). (Delivery mechanism PLACEHOLDER — mailto/form until wired.)

## 7. CTA
- Reuse home CTA. H2 **Have a space in mind?** Button `Start a project` (ink pop) →
  contact.html.

---

## Motion map
| Section | Pattern |
|---|---|
| Hero / featured | `.reveal` + sticker parallax |
| Topic filter | sticky pills, guarded JS filter on `data-topic` |
| Article grid | staggered `.reveal-pop`, image zoom hover |
| Marquee | drift + scrub |

Reduced motion: reveals instant, all cards shown, marquee/stickers static.

## Image assets (WebP — see `assets/IMAGES.md`)
One cover per article (also the article-page hero). Featured lead card = article #1.
- `journal-kids-room-that-grows-with-your-child.webp` (#1)
- `journal-kids-room-interior-design-ahmedabad-cost-timeline.webp` (#2)
- `journal-inside-a-frolik-project-brief-to-handover.webp` (#3)
- `journal-{slug}.webp` — one per Phase-2 article as published (#4–#12).
- Social: `og-journal.webp`.

## Content still needed
- Cover imagery + deks + read-times for the 3 launch articles.
- Lead-magnet PDF + delivery mechanism for the checklist.
</content>
