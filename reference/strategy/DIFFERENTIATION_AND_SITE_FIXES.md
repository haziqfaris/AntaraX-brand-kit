# Differentiation from Tines, and live-site fixes

**Date:** 9 October 2026. **Status:** proposed, nothing changed yet. Visual version with screenshots: `docs/design/differentiation.html`.

## 1. Where the prototype reads as Tines (homepage, section by section)

| # | Section | Why it reads as Tines | Change to |
|---|---|---|---|
| 1 | Hero: giant word filled with pattern, flag ribbons on top | Tines fills “100×” with flowers and pins flags to it. We fill “AX” with batik and pin ribbons (Understand, Run everyday work) to it: same device, same placement under the logo strip. | A hero built from our own objects: the AntaraX device mark’s “A” as a window onto a kain lukis being drawn, with the product UI in front. No ribbons, no filled giant word. |
| 2 | Product film card with a timeline bar | Identical layout: rounded UI card under the hero with a play bar and “0:01 / 0:12”. | Keep a product demo, but framed as a phone and a board side by side (the worker taps, the board updates), with chapter dots instead of a scrub bar. |
| 3 | Centred problem statement with object illustrations either side | Tines: centred serif paragraph between antenna-towers. Ours: centred paragraph between monitors on stands. | Problem told through a Malaysian scene (the 3pm call to the floor, the WhatsApp chain), as a left-aligned story with one real photo, not centred object art. |
| 4 | Big purple panel, four short copy blocks, flower bed along the bottom | Ours is the same panel in indigo with the batik bed along the bottom edge. | A pucuk rebung kepala band across the top of a white section; the four points become a numbered row tied to products. |
| 5 | Coloured department tabs (IT, Security, Finance…) over a product shot | Ours: coloured tabs (Operations, Procurement, Warehouses) over a product shot. | Industry “cloths”: pick Manufacturing, Logistics, Ports… and the section restyles to that family’s colour and motif, with that industry’s real workflow. |
| 6 | Four tall purple cards, illustration at the bottom | Ours: four tall indigo cards, illustration at the bottom. | Proof points as a horizontal kain strip with family motifs as markers; no four-card grid. |
| 7 | Giant filled lettering sign-off with CTA pills | Tines “Start today”, ours “Put it to work.” filled with pattern: same idea, same scale. | Sign-off as a hanging cloth (the kain) with the headline woven into its kepala band, and the AntaraX sparkle as the closing mark. |
| 8 | Mega-footer in five columns on cream | Ours: five columns on near-white, same rhythm. | Footer sits on a deep-blue tepi (edge) band of the corak, with the six family marks, Bahasa Malaysia toggle and REKA endorsement. |

## 2. System-level tells

| Element | Now (matches Tines) | Change to |
|---|---|---|
| Buttons | Monospace, UPPERCASE, full pill (990 px radius): identical to Tines | Poppins semibold, sentence case, a softer 14 px radius (from the “A” mark’s curves); the primary button carries the AntaraX blue and a small sparkle on hover |
| Headline type | Poppins 300 at 64 px with −1.92 px tracking: Tines’ exact size and tracking, two-line headings | Poppins 600 for headlines, tighter scale (56/40/28), one-line headlines where possible; no serif pairing (Tines pairs Roobert with Reckless) |
| Eyebrows and labels | Mono UPPERCASE eyebrows on every section (Tines’ signature) | Sentence-case labels in the family colour, with a small motif bullet; mono only for data (IDs, times, prices in calculators) |
| Ground and palette | Cream background, indigo/purple panels, lavender washes: Tines’ palette | White and a cool grey-blue ground; AntaraX blue (#0459F7) for brand panels; the six family colours for product moments; batik lukis colour inside motifs only |
| Illustration subjects | Monitors on stands, satellites and telescopes carrying ribbons, a flower bed: the same object vocabulary as Tines | Only BaTech: cloths, kepala bands, motifs, Seth cameos. Retire the monitor, satellite-ribbon, telescope and comet scenes |
| Section rhythm | Hero → logo strip → film → problem → purple panel → tabs → cards → filled sign-off → mega-footer: Tines’ order | Playbook §17 order told as a kain: kepala (hero and promise), badan (products, proof), tepi (sign-off and footer) |
| Small tells | NEW pill above the H1, “Book a demo” pill in the nav, mono timestamp on the film | Drop the pill above the H1; nav keeps one primary CTA (Find the right product); film shows chapters, not a mono clock |
| Internal name | The prototype folder is called tines-style | Rename to prototype/site (no reference to another brand in code, docs or artifact titles) |

**What makes it ours instead:**
- the kain structure (kepala, badan, tepi) as the page rhythm
- the AntaraX device mark and its sparkle as the hero object
- the six family colours on a cool white ground
- BaTech as the only illustration language
- Seth and the REKA mark as hidden cameos
- Malaysian scenes, ringgit in calculators and a Bahasa Malaysia toggle

## 3. Live site (`site/`) fixes

Audit done locally at 1440 px and 390 px. File references are to `site/`.

### Critical

1. **"Book a demo" is a dead end.** 26 links go to `#/contact`, which is a "not built yet" placeholder (`index.html:3494`). Build a working contact form (Cloudflare Pages Function) with an email fallback.
2. **Retired names and old meanings are live** (`index.html:524-540`, `2574`, `3387`; `product-pages.js:97-103`):
   - "AX Loom: synthetic data"
   - "AX Edge: fleet updates"
   - "AX Motion: workflow automation"
   - an "AX Kinetics" page
   - "Yara Ripple"
   - the Soul/Mind/Motion tiers

   Replace them with the playbook v0.5 names and meanings.
3. **Unconfirmed claims** (`index.html:648`, `672`, `1392`, `2067`, `2089-2091`, `2200`, `3016`). Remove each, or confirm it with evidence:
   - "real organizations… today" and "2 organizations"
   - "tenant isolation verified"
   - "one flagship port customer"
   - REKA in five countries
   - "Is our data secure? Yes"
   - "built to satisfy privacy review"
   - Janka–Grid RFID integration
   - "works offline"
4. **Not indexable page by page.** The site has:
   - hash routes, with one title and one description for everything
   - no canonical, Open Graph, JSON-LD or favicon
   - no `robots.txt` or sitemap
   - soft 404s from SPA fallback (every unknown path returns the homepage with a 200)

### High

5. **The navigation and product line-up don't match the playbook.**
   - Resources, Pricing and About are missing, and "Find the right product" appears 0 times.
   - Angka, Tinara, Loom, Motion, Tide and the Families page are missing.
   - Frame leads instead of Yara.
6. **Poppins never loads.** The `@import` sits after other rules (`styles.css:268`), so the browser ignores it.
7. **The menus can't be used from the keyboard.** The triggers open on hover only, and the mobile toggle has no `aria-expanded`.
8. **Phone overflow.** Grid's cards run to 548 px on a 390 px screen, and the Kinetics tabs are clipped.
9. **Positioning drift.**
   - Yara is called "shop-floor digitization" and Frame "the spend layer".
   - The family colours are wrong.
   - No real product UI is shown.

### Medium

10. **Accessibility:**
    - there is no `<main>`
    - the nav and footer are duplicated across the DOM
    - calculator labels aren't linked to their inputs, and results aren't announced
    - 243 of 248 SVGs are unlabelled
    - heading levels skip
11. **No reduced-motion support:** 7 infinite animations, 0 reduced-motion rules.
12. **Low-contrast text:** Janka orange 2.2:1, Yara teal 2.7:1, and text under 11 px.
13. **Calculators and prices not to spec (§27):**
    - the Frame calculator is USD only
    - RM49 leads instead of USD
    - Grid shows a priced tier table
14. **Performance:**
    - the CSS is 86% unused on the homepage
    - one 259 KB HTML file holds every page
    - there are no `_headers`

### Low

15. **Code health:**
    - the nav and footer are duplicated 8 times
    - there are 437 inline styles
    - there's dead code and a leftover "BUILD MARKER" comment
    - the internal jargon is visible to visitors
16. **ROADMAP:** phases 3–6 haven't started.

## Status (9 October 2026)

Steps 1 and 2 of the order of work are done in the prototype. Nothing in `site/` has changed.
- **Mocks:** `IDENTITY=kain` with hero A or B and sign-off A or B, compared against the old shell on the real pages.
- **Chosen and now the default:** hero A (the A mark as a window onto the kain) and sign-off A (a hanging cloth).
- **The identity layer:** `theme-k.css`, `src/variants/home-k.html` and `src/variants/footer-k.html`, plus the `KAIN` block in `src/illustrations.mjs`.
- **What changed across all 34 pages:**
  - cool white ground and blue panels
  - semibold headlines
  - sentence-case buttons, labels and tags
  - kain bands and swatches instead of the monitor, satellite, telescope and doodle scenes
  - a kepala band on section beds
  - motif medallions for small icons
  - a tepi band over a navy footer
- **Uppercase mono stays only on:** data, mock product UI and the prototype's own placeholder notes.
- **Old shell, for comparison only:** `IDENTITY=tines node build.mjs`.
- **Folder:** renamed to `prototype/site`.

## 4. Order of work

1. **Mock the new identity.** Make comparison mocks on real pages for the hero, the buttons and type, the labels, the kain sign-off and the footer band.
2. **Roll the identity through the prototype.**
   - Switch to the new tokens.
   - Retire the Tines-style object illustrations.
   - Re-sequence the homepage as kepala, badan, tepi.
   - Rename the prototype folder.
3. **Fix the live site's critical items now, in `site/`:**
   - the names
   - the claims
   - the contact destination
   - the font
   - the phone overflow
4. **Replace the live site with the prototype's multi-page build.** Include a sitemap, robots, `llms.txt`, `_headers`, redirects from the old hash routes, a real 404 and a working contact form.
5. **After launch:**
   - analytics
   - approved customer proof
   - Bahasa Malaysia
   - revisit the CMS question

## 5. Owner decisions (answered 10 October 2026)

1. **Claims:** the replacement site does not carry the old site's unconfirmed claims (section 3, Critical item 3). A claim comes back only with evidence.
2. **"Book a demo":** goes to an evaluation form, modelled on reka.re/yara, sent to `holla@reka.re`.
   - The form has eight questions, four of them scored out of 100. It ends with the product to look at first, then the visitor's contact details and consent.
   - Questions and scoring: `worker/evaluation.mjs`. Endpoint: `POST /api/demo` in `worker/index.mjs`.
3. **Interim fixes:** approved. They are covered by the replacement.
4. **Approach:** replace the live site with the prototype's multi-page build.
   - Keep the current landing pages, such as `antarax.ai/angka`, as they are until they are adapted.
   - Those paths belong to other Workers on the zone, and the build never writes a page there.
   - `site/` is now generated: `npm run build`.

### Still to confirm before or soon after launch
- The "building with AI since 2016" line and the spin-out wording on About. The prototype's check note is removed from the live build, but the line stays.
- Company registration number, registered address and privacy contact on Legal. These rows are hidden on the live build until confirmed.
- An AntaraX privacy notice. The form's consent points to REKA's Privacy Notice for now.
- Any other landing pages on their own routes besides `/angka`.
