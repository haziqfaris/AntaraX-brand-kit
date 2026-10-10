# 08 Website, SEO and conversion

antarax.ai is built from `haziqfaris/antarax-ai` (`prototype/site`, `node build.mjs --prod ../../site --theme c`) and served by a Cloudflare Worker that also handles `POST /api/demo`.

## Architecture: multi-page, every page a landing page

antarax.ai is **multi-page with clean URLs**. Each page must stand on its own as a landing page for its search intent: its own problem, hero, proof, FAQ and CTA. (The old antarax.ai was a single-page hash app; legacy `#/x` links redirect.)

| Section | URLs |
|---|---|
| Home | `/` |
| Products | `/products`, `/products/yara`, `/products/janka`, `/products/plexyz` |
| Closed pilots | `/pilots`, `/pilots/frame`, `/pilots/plexyz-crowd`, `/pilots/tinara`, `/pilots/loom`, `/pilots/motion`, `/pilots/request`; Angka stays at `/angka` |
| Solutions | `/solutions`, problem pages (e.g. `/solutions/job-tracking-software-malaysia`), industry pages (manufacturing, logistics and 3PL, ports and terminals, facilities and property, retail and venues) |
| Technology | `/technology` (dark blueprint), `/families`, `/story` |
| Pricing | `/pricing` |
| Book a demo | `/contact` |

**Company pages live on reka.re:** About, careers, privacy and terms redirect there. The AntaraX story stays on antarax.ai (`/story`).

**Navigation:** Products ▾ · Solutions ▾ · Technology · Pricing · [Book a demo]. Footer: Products (incl. Closed pilots, Request pilot access) · Solutions (incl. Technology, Product families) · Company (Book a demo, Our story, About REKA ↗, Careers ↗, Lapisan for developers ↗) · "© 2026 AntaraX, a product line of REKA Inisiatif Sdn Bhd" · Privacy · Terms.

## Page templates

**Main product page:** problem → outcome → real product UI → how it works (screenshots) → core jobs → compared (with icons) → proof (slots) → FAQ → CTA matched to maturity.

**Closed-pilot landing page:**
1. Hero: badge "Closed pilot · Run as part of Managed AI", headline, sub, **Request pilot access** + "How the pilot works"; on the right, the family swatch with a product mock (example data) over it.
2. "The question [product] answers": the problem statement as a large quote, with one paragraph of context.
3. What you get: three value cards with icons.
4. How the pilot works: navy panel, "A closed pilot, run as part of Managed AI", four steps (we set it up with you · your team uses it · we watch it · we improve it together).
5. FAQ, then the shared closing band.

**Closed pilots overview:** picture cards (family swatch + family icon), name, the question in quotes, one line, two buttons (See [product] · Request access).

**Request pilot access:** Managed AI explanation, three next steps, the list of pilots with their questions, and the evaluation form preset to "Join a closed pilot".

## One form for everything

Demo, pilot and Managed AI requests go through **one evaluation form** (9 questions: intent, goal, industry, four scored questions, size, timing), which scores 0–100 and suggests the product to look at first, then emails **holla@reka.re** from demo@antarax.ai.

- CTAs preselect: `/contact?intent=demo&product=yara`, `/pilots/request?product=tinara` (the request page defaults the intent to pilot).
- The email records where the visitor came from (referring page, intent, product).
- Source of truth for questions and products: `worker/evaluation.mjs` in antarax-ai.

## SEO, AEO and GEO

- **Own problem + product-category intent**, Malaysia-qualified where it fits: "Job tracking software Malaysia | Yara by AntaraX". Keep four territories: OWN, STEAL, GAP, EMERGING.
- **Share cards:** every page has a 1200×630 card (AntaraX mark, page name and line, the family's BaTech cloth) made by `tools/og.mjs` in antarax-ai and linked as `og:image` and `twitter:image`. Re-run it when a page name, one-liner or art changes.
- Main product titles carry the category and "Malaysia": "Yara: job tracking and work order software in Malaysia".
- Every page: one H1, unique title and 120–160 character meta description answering the page's main question (`src/meta.json`), canonical URL, Open Graph and Twitter tags, breadcrumb.
- JSON-LD: Organization (with parentOrganization REKA), WebSite, BreadcrumbList on every page; SoftwareApplication on product pages (only real, published facts); FAQPage wherever there is an FAQ.
- `sitemap.xml` with lastmod, `robots.txt`, and **`llms.txt`** grouping products, closed pilots, solutions, technology and how to request a demo or pilot.
- Performance: static HTML, illustrations as cached SVG files (lazy below the fold, the first one high priority), fonts preconnected. Home under ~50KB of HTML.
- Shared blog (planned): **reka.re/blog** as a subfolder (not a subdomain), covering both brands, cross-linked from antarax.ai.

## Conversion patterns

Adopted from benchmarking reka.re/yara and synapsys-ai.com (10 October 2026):

1. **One named entry offer, same words everywhere:** "Book a demo" (main products) and "Request pilot access" (pilots). Repeat the identical label in the hero, mid-page and the closing band.
2. **Frame AI as a business problem.** Each product page opens with the operations problem in plain words, not the technology.
3. **The question block.** Every pilot page states the one question it answers; main product pages should do the same.
4. **Name the buyer** (role, operation size, department) on solutions and industry pages.
5. **HTML product mocks** with example data as the main hero visual, alongside BaTech.
6. **Fixed section skeleton:** eyebrow → H2 → one sentence → 3–4 cards → CTA; every page ends with the same closing band.
7. **Numbered "how it runs" path** (4 steps) for pilots and Managed AI.
8. **Risk reversal beside CTAs** when true ("about two minutes", "the demo starts from your answers").
9. **Local purchase triggers** in a trust strip, but only real ones (e.g. a grant or claimable scheme that actually applies; none is confirmed yet).
10. **FAQ with FAQPage schema** on home and every product and pilot page.

Not adopted: typewriter heroes; jargon walls (ISO lists, weighting tables) on selling pages; off-market or self-attributed proof; a sprawling services menu; third-party iframe forms. Open: a WhatsApp click-to-chat button (see 11).
