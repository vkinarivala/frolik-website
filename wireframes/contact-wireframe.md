# Frolik + Co — Contact / Start a project wireframe

Sitemap: `/contact` 🟢 (P 0.8). The conversion page — every other page's CTA lands
here. Form in an **outlined cream card** (skill: Contact keeps the form in an outlined
cream card, Input spec in `components/forms/`). Short but useful (research §10).

**Page `<title>`:** `Start an Interior Design Project in Ahmedabad | Frolik + Co`
**Meta:** *Tell us about your home, kids' room, studio, or commercial space and book a discovery call with Frolik + Co.*
**H1:** Have a space in mind?
**Structured data:** `LocalBusiness` JSON-LD (name, Ahmedabad service area, phone, geo,
opening hours, sameAs → Instagram/Google Business) — Home + Contact carry it (sitemap).

---

## Section order
```
0. Header (nav — Contact reachable via "Let's talk" button)
1. Hero — warm invite, 2 stickers
2. Two-column body — inquiry form (left) + ways to reach us (right)
3. Marquee (coral) — reassurance words (optional)
4. FAQ mini — 3 quick pre-inquiry questions (optional)
5. Footer
```
Success state → `/thank-you` (robots.txt disallows it — sitemap checklist).

---

## 1. Hero (research §13)
- Cream, ~46svh, 2 stickers. Eyebrow (coral): *Start a project · Ahmedabad*. H1
  (display, tight): **Have a space in mind?** (accent "space"). Sub (research §13):
  *Tell us what you're planning — a home, a child's room, a playroom, a studio, or
  something completely new.*

## 2. Two-column body
### Left — inquiry form (research §10, in an outlined cream card + pop shadow)
- Ink-outlined cream card. Fields (Input spec), keep it short but useful:
  - Name · Phone · Email
  - **Project type** (select) — Home · Kids room · Playroom · Study room ·
    Commercial / studio · Other. (Pre-selects from `?type=` when arriving from a page CTA.)
  - Location · Approximate size · Timeline · Budget range
  - **Design only or execution too?** (radio)
  - Tell us about the space (textarea)
  - Upload photos / floor plan (file, optional)
  - Preferred contact method (radio: WhatsApp / Call / Email)
- Submit: `Send enquiry` (coral pop). Visible focus states, labels tied to inputs,
  required-field validation (research a11y). No build step — posts via the site's chosen
  handler (PLACEHOLDER: mailto or form endpoint until wired).
- **Success message** (research §10): *"Thank you for reaching out. We'll review your
  space, requirements and timeline, and get back to you shortly to schedule a discovery
  call."*

### Right — ways to reach us (local SEO must-haves, sitemap)
- Mint panel / stacked ink-outlined cards:
  - **WhatsApp** — `wa.me` click-to-chat (message template prefilled). PLACEHOLDER number.
  - **Call** — `tel:` click-to-call. PLACEHOLDER number.
  - **Email** — hello@frolik.co.in.
  - **Instagram** — @frolikncodesigns.
  - **Studio** — Ahmedabad service area / address.
  - Optional small map motif (decorative inline SVG) or Google Business link.

## 3. Marquee (coral, optional rhythm)
- `data-marquee`. Words: Homes ✳ Kids' spaces ✳ Workspaces ✳ Commercial ✳ Ahmedabad ✳
  Let's talk.

## 4. FAQ mini (optional — reduce pre-inquiry friction)
- Sand band, 3 short accordion rows: *What happens after I enquire? · Do you work
  outside Ahmedabad? · Design-only or full execution?* Keep light; the deep FAQs live on
  Kids Spaces. (Answers PLACEHOLDER.)

---

## Motion map
| Section | Pattern |
|---|---|
| Hero | H1 mask-rise + sticker parallax |
| Form / contact cards | `.reveal` fade-rise; button hover lift |
| Marquee | drift + scrub |
| FAQ mini | accordion (guarded) |

Reduced motion: reveals instant, stickers/marquee static. Form fully usable without JS.

## Image assets (WebP — see `assets/IMAGES.md`)
- Form-led — no photography required. Map is a decorative inline SVG motif.
- `contact-studio.webp` (optional small studio/location image beside the form).
- Social: `og-contact.webp`.

## Content still needed (research §9–§10)
- Real WhatsApp number + phone (`wa.me` / `tel:`), Google Business link, studio address.
- WhatsApp message template; form endpoint / handler + `/thank-you` page.
- Confirm budget-range and timeline options.
</content>
