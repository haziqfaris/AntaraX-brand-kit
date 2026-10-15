# 10 Decisions log

Owner decisions that shape the brand, newest first. Add to the top; never rewrite history. Earlier strategy changes are in `reference/strategy/` (playbook amendments v0.3–v0.5, RECONCILIATION).

## 15 October 2026

- **Customer apps are each product's own; only the AntaraX shell is shared** (owner): AXLE stays the same in every product. A customer app has its own identity, shape, theme and UI. The exception is a small shell that stays the same everywhere: the names, the top bar, where Help and the account sit, the account menu, and the standard links and pages (settings, user guide, help). Draft in `haziqfaris/AntaraX-Dashboard-kit`, `app/SPEC.md` (0.1); the exact list is for the owner to confirm.
- **In every customer app, the account is at the far right of the top bar and Help is its own button** (owner): never at the foot of a sidebar, because a product may have no sidebar. The shared shell also covers getting in (sign-in, invitations, reset, two-step), banners in a fixed order, the notifications panel, Assist, Send feedback and what dialogs, toasts, errors and empty states say; how each looks stays the product's own. Draft 0.2 in the Dashboard kit, `app/SPEC.md`.
- **The AntaraX shell is the standard for every customer app** (owner; `haziqfaris/AntaraX-Dashboard-kit`, `app/`, v1.0):
  - **Navigation:** fully each product's own.
  - **Settings:** every setting under `/settings`, with shortcuts beside the work allowed.
  - **Sign-in:** Google and email in every product.
  - **What's new:** optional, under Help.
  - **Roles:** Owner, Admin, Member and Viewer mean the same everywhere.
  - **Your data:** download, and delete with 30 days to undo, at `/settings/data`.
  - **API keys:** at `/settings/api`, named Lapisan by AntaraX.
  - **Public share pages:** carry "Made with ‹Product› by AntaraX".
  - **Later:** the AntaraX A in the brand pill is reserved for switching between AntaraX products, and Help gains System status.
- **AntaraX shell 1.1** (owner):
  - **Every wait is the product's own animation,** never "Loading…" alone, a static placeholder or a spinner. With reduced motion, a loader holds its stylised still frame, and screen readers hear the wait in words.
  - **Admin area:** an organisation's Owners and Admins get their own, under `/settings`: Roles, Security, Activity log, Usage, Support access.
  - **The standards beneath the look,** the same in every product:
    - sign-in and passwords: Show password, password managers, 12 or more characters, no composition rules (NIST SP 800-63B);
    - forms;
    - PDPA data handling;
    - speed and caching (Core Web Vitals);
    - reliability;
    - security (OWASP ASVS level 2);
    - time and language;
    - devices.
  - **A Never list.**
- **AXLE: dark bars, light page** (owner): AXLE's sidebar and top bar are dark (ground `#071233`, raised `#0C1B47`, REKA orange as the accent); the page they frame is light (`#F5F7FC`, white cards, navy ink, AntaraX-blue links and focus). AXLE keeps the AntaraX top bar every product ships, in its dark variant, with an orange `AXLE` tag after the brand pill. Replaces "dark-only" in 13 §6 and §10. Standard and mock: `haziqfaris/AntaraX-Dashboard-kit`, `axle/`.
- **Every product's AXLE has R8** (owner): AXLE has two modes in every product, Dashboard (the business) and R8 (the machinery). **R8 Base** is in every product: Overview, Troubleshoot, Jobs, Providers, Services, Configuration and the operations audit. **R8 Full** adds Incidents and the machinery pages (probes, agents, screenshots) where a product runs machinery of its own. Health, Jobs and Configuration always live in R8. This departs from the REKA AXLE standard v0.2, which gave R8 only to products with machinery. Spec: `haziqfaris/AntaraX-Dashboard-kit`, `axle/SPEC.md` §2 and §7.
- **R8 levels per product** (owner): AX Frame, Janka, Angka and Tinara are R8 Full; Yara and PLExyz Grid are R8 Base. **Errors** stays in the Dashboard, linking to Troubleshoot. **R8 actions** follow the staff ladder: Support acknowledges, Operator runs Level 1, Admin runs Level 2, Level 3 never. **AI configuration**, including Live trace, stays in the Dashboard; provider health is R8.
- **AXLE's sidebar groups are folding cards** (owner): each group is a soft card whose title is a small icon tile tinted in the group's colour and the title in that colour (Watch blue, Organisations teal, AI violet, Money gold, Platform pink, Operations sky, Trail grey; R8 reuses blue, violet and grey). A folded card lists its pages in one grey line and keeps the orange total of what needs a person. Group colours mark an area, never a status. **No side stripe on the current page** (owner: "looks too AI"): it is an orange tint, orange text and the intan; selected rows in lists follow the same rule. Spec: `haziqfaris/AntaraX-Dashboard-kit`, `axle/SPEC.md` §6 and §7.2.
- **The AXLE standard is the template for all future development** (owner): every product's AXLE, whether new or changed, is built from `haziqfaris/AntaraX-Dashboard-kit` `axle/`: the spec (now v1.0), the final mock of every page, the tokens, and the step-by-step in `axle/README.md`. Anything the template does not cover is mocked and decided first, then added to the template, never invented inside a product.
- **AXLE's colours live in the brand kit** (tokens 1.9.0): the `axle` section of `tokens/tokens.json` and `.axle-root` in `tokens.css` hold every AXLE value. The Dashboard kit generates its `axle/tokens.css` from them and pins the version, and a check fails if a mock uses a colour that is not a brand token or the two kits drift apart.
- **Video plan** (owner): a long AntaraX film with real-world use cases, shot with actors at hired locations (no real customer sites or staff), plus a short promo for Janka, PLExyz Grid and AX Frame. Yara appears only in the long film. For the website, social media and events. English voice-over, with Bahasa Malaysia and Japanese subtitles later. The long film's animatic is in `marketing/video/antarax-film/`.
- **Each product promo has its own style, music, structure and mood** (owner: the first versions were "too similar to one another"): Janka warm and hand-made, PLExyz Grid a dark technical blueprint on the beat, AX Frame its own calm world of the breathing asset halo. In `marketing/video/product-promos/`.
- **The AX Frame promo shows the product in use, with its AI** (owner): a cursor adds an asset, sees its stack, hears about a renewal, plans with Blueprint and approves an Optimize proposal, with Price check flagging a change. Every AI step is shown as a proposal a person approves.

## 14 October 2026

- **BaTech on the website is restraint** (owner): borders, cameos, separators, faded strips and quiet backgrounds; never a kain closing every page, as product or industry hero art, or in share cards. **Story and Families are the exception** and keep fuller BaTech (06).
- **No section labels by default, and no diamond markers** (owner): a label stays only when it adds something the heading doesn't; the one eyebrow above an h1 uses the sparkle in the page's colour (07).
- **One menu entry for the closed pilots** (owner): "Six more in closed pilot" leads to the pilots page; pilots are not listed one by one (07).
- **Product pages lead with the money problem** (owner): the hero names what the problem costs, the calculator follows straight after, then one outcome line with no figure or timeframe; about eight blocks a page (07). Calculators work in ringgit with Malaysian defaults.
- **The Technology page says only what the code shows** (owner: "too vague and too much fluff"): where AI is used and where it isn't, Janka's real forecasting methods, what connects today, security facts from the code, and Lapisan for developers.
- **Claims corrected across the site** (site audit, passes 2 and 3): PLExyz Grid has no live AI placement and no live weighbridge, IoT or ERP feed; Janka has no link to PLExyz Grid; Yara does not work offline; PLExyz Crowd's pilot runs on simulated signals. Each is now a never-say line in its brief.
- **Share cards carry no kain** (owner): each shows the page's real product screen or logo on a light tint of the family colour, with the sparkle marker and the page's current address.

## 13 October 2026

- **Outcome lines are allowed, without figures** (owner): plain benefit statements tied to what a product does, such as "Free up cash stuck in stock that isn't moving" and "Take on more work with the space you have". Still never a figure, percentage, timeframe, guarantee or customer result (03, claims rule 3). Janka shows which stock isn't moving (owner), so its brief now carries the cash line. Paperwork is shown as REKA's Managed AI service, not as a product. First used in the intro video storyboard v3.
- **Intro video, 60 seconds** (owner): one question any business knows ("Can you take it on?"), our team connects the tools they have, AntaraX fills the gaps (Managed AI for paperwork, Yara, Janka, PLExyz Grid), and the outcome: "Free up cash. Make room. Say yes to more work." Animatic and storyboard in `marketing/video/intro-60s/`, built by `tools/build-intro-animatic.mjs`.
- **The repository is reorganised, with a marketing folder ready for print** (owner): `assets/` holds the masters for screens and code; `marketing/` holds what is handed over, each with a README. Print pieces get a folder each (`marketing/print/bunting-80x200cm/`, `marketing/print/poster-a3-qr-meet/`), and a new logo pack (`marketing/logo-pack/`, built by `tools/build-logo-pack.mjs`) gives the AntaraX logos as SVG, vector PDF and transparent PNG. Moves: `assets/logo/` and `assets/ai/` into `assets/antarax/`; `assets/logos/` to `assets/product-logos/`; `assets/print/` to `marketing/print/` (QR codes to `marketing/qr/`); `photography/` to `marketing/photography/`. Entries below this one keep the paths they were written with.
- **The kain A joins the kit** (owner): `assets/logo/antarax-a-kain.svg`, the antarax.ai hero, and `antarax-a-kain-open.svg`, the same A opened like the family A-marks with its eye left free (04). On dark grounds the eye shows the ground with a soft blue glow, never a white disc.
- **Event print** (owner): a navy roll-up bunting at 80 x 200 cm (headline, the kain A large, a QR card, "AntaraX is the AI product line of REKA") and an A3 QR poster ("Nice to meet you.", the open kain A with the QR code in its eye). Both QR codes lead to antarax.ai/meet. Files in `assets/print/`, built by `tools/build-print.mjs`.

## 11 October 2026 (sixteenth review)

The owner answered the questions raised by the product briefs (11, questions 8 to 15):

- **Every product is sold as part of REKA's Managed AI service, for now**, main products and closed pilots alike. Prices are quoted, not published: 02 now says "pricing on request" for the main products.
- **AX Frame and Angka stay closed pilots** though people can sign up in the product: REKA watches every account. Angka says "pilot", not "trial".
- **Yara is live with its first customer**, a Malaysian metal fabricator, since 30 September 2026, on a subscription. The customer is still named only with written permission.
- **Tinara:** before any partner uses real data, the key-people view and the contact export come out of the app and every data source's licence is reviewed.
- **PLExyz Crowd is not in active development.** Its pilot page stays; nothing new is claimed.
- **Janka keeps "AI inventory forecasting"** as its description.
- **Loom and Motion are AX Loom and AX Motion**, as products, like AX Frame: the full names keep them apart from other software called Loom and Motion. The families stay Loom and Motion. "AX Motion" no longer means workflow automation.

## 11 October 2026 (fifteenth review)

- **Product briefs** (owner): every product sheet opens with a short brief (who it is for, the problem, what it does, what it is not, what it may and may never claim, how it is sold, its lines and where the facts live). Briefs change rarely; features and prices stay in each product's repository. Loom and Motion get full sheets. Briefs were checked against each repository; what could not be confirmed is in 11 (questions 8 to 17).
- **Facts corrected from the briefs:** in 02, Yara's line Flow is Relay and its office screens are English only; Grid checks placements against the site's rules (it does not rank by retrieval distance) and its bookings and movements are paid; Crowd is designed to count from Wi-Fi and runs on simulated signals today; AX Frame's Ledger is every asset in one grid; Janka's and Angka's area lists are website working names; Tinara's brief names buyer roles, not people. In 14 and the visual guide, Loom's verb is Synthesize. In 09, every product acts in its own colour.
- **Role addresses move to `go.antarax.ai`** (owner): `support@go.antarax.ai`, `sales@go.antarax.ai` and `privacy@go.antarax.ai`, as Google Groups. `go.antarax.ai` already receives mail into Google (it is where `insta@go.antarax.ai` lands, and AX Frame's renewal emails come from `no-reply@go.antarax.ai`); `antarax.ai` only sends, through Resend. Product senders stay `<Product> <product@antarax.ai>`, with Reply-To set to support. This replaces the `@antarax.ai` role addresses agreed earlier the same day.

## 11 October 2026 (fourteenth review)

The owner accepted every recommendation in 11 except WhatsApp:

- **Seth:** the batik cameo is a motif and appears on any ground; the full Seth character stays dark-only.
- **AX Frame's colours:** the app's `#0062FB` becomes Frame blue `#074AF8`; the orange gives way to halo indigo `#524FE9`.
- **Sparkle colours** are final; the sparkle file is cut from the master A.
- **Edge sliver:** back to the source size before any Edge art is printed.
- **WhatsApp: not yet.**
- **Trust strip:** nothing stated until a scheme is confirmed in writing; until then, real facts only (made in Malaysia, by REKA).
- **Proof:** start with Yara's first customer (one named quote, one figure) with written permission; until then "a Malaysian metal fabricator".
- **Blog:** reka.re/blog, linked from antarax.ai.
- **Product pages** live on antarax.ai only; reka.re carries a short overview that links out.
- **Pilot pricing:** "terms set per pilot" until two or three pilots are priced.
- **REKA's guidelines** are updated to follow this kit.
- **Motion and OVERride:** Motion is the product name; OVERride is REKA Kinetik's research platform, used only as heritage.
- **Janka:** actions in `#077DA1`, cyan accent, tagline "Track. Forecast. Reorder."
- **"PLExyz Edge Gateway" becomes "PLExyz Gateway".**
- **Heritage in copy:** REKA's own history may be told; customer names, pricing and figures only once cleared.
- **One PLExyz purple:** Grid's violet `#2C09B2`; Crowd keeps `#6040CC` as its accent for now.
- **The PLExyz master mark** is the proposal (force field and shard on an empty floor, on a violet disc and bare).
- **PLExyz Crowd** is about occupancy and space use in buildings; event safety comes later through the safety module pack.
- **Grid's top-bordered stat cards** are replaced with zone-coloured icon tiles.
- **Where PLExyz is sold:** antarax.ai leads ("Book a demo" for Grid); REKA runs the consultative sale; reka.re links to antarax.ai.
- **The BaTech guidelines page** in antarax-ai is updated to this kit.
- **One set of family colours:** BaTech's family pairs; the computed tints and darks are retired (tokens 1.8.0).
- **First signature moment:** Yara's awan larat from Complete to the next stage, then Janka's padi while forecasting.
- **Elements and charts** are approved as proposed in 12.
- **Yara's Flow line is renamed Relay;** AX Frame's Lens stays.
- **antarax.ai uses each app's own section names;** the playbook's lines stay working names.

## 11 October 2026 (thirteenth review)

- **Yara's motif is awan larat** (owner). Sungai stays reserved for Yara's automation screens.
- **Tinara stays in garnet** with gold (owner).
- **Role mailboxes agreed** (owner): `support@`, `sales@` and `privacy@antarax.ai`, to be created before the apps point at them.
- **A PLExyz master mark proposed** (the owner asked what it was): the force field and shard on an empty floor, on a violet disc and bare. Recommendations written for every other open question (11).

## 11 October 2026 (twelfth review)

- **BaTech sets approved** (owner): AntaraX and the six families, each as panel, band and spot, in colour, quiet and white.
- **Loaders approved** (owner): seven states, nothing spins or flips, and AI thinking is the sparkle morphing into the product's logo.
- **PLExyz line marks approved** (owner): Crowd, Trace, Flow, Transit, Site, Ward and Yard.
- **Ask Angka stays** (owner): easier to understand than Assist, so Angka is the one exception to the shared name.

## 11 October 2026 (eleventh review)

- **Tinara's logo is the signal, C1** (owner): a garnet company, two gold arcs and a dot. Its small and light versions are drawn; the other five variations are withdrawn.
- **Plan names are ladder A, Rise** (owner): Seed · Terra · Nova · Galaxy · Quantum, always with who each is for. Angka keeps its own names. The other ladders (Earth, Cosmos, Quantum, Three steps, Malay, by family) are withdrawn.

## 11 October 2026 (tenth review)

- **Tinara's logo is the signal** (owner chose option C). Six variations drawn to choose from; options A and B withdrawn.
- **PLExyz Grid takes the AntaraX colours** (owner): the zones move to their AntaraX equivalents in the mark, wordmark, lockups and the rest of the PLExyz line. The owner's files are kept as `*-original.svg`.
- **Janka's logo stays as it is** (owner); the bolder option is withdrawn.
- **Tide's family icon, the crescent, is approved** (owner).
- **Every logo on the same square** (owner): `assets/logos/`, measured from each drawn shape with the same margin.
- **BaTech sets** (owner asked):
  - AntaraX gets a set of its own, the Constellation.
  - Every set comes in three variations (panel, band, spot) and three strengths (colour, quiet, white).
  - The colour strength is allowed on covers, splash and sign-in panels, never behind text or data.
- **PLExyz Grid's sign-in carries one Edge spot** in a corner: something there, but not a full-panel BaTech.
- **AI thinking is the AntaraX sparkle** in every product, morphing into the product's logo and back (owner).

## 11 October 2026 (ninth review)

- **Role addresses only** (owner): `support@antarax.ai`, `sales@antarax.ai` and `privacy@antarax.ai` replace every personal address in the products.
- **Yara's motif is flowing, not mechanical** (owner: "gears are overrated"). Awan larat for today's job, people's work carried into digital; sungai later, for digital to automation.
- **Yara acts in teal** `#098284`, not AntaraX blue (owner). Every product now acts in its own colour; AntaraX blue stays the focus ring.
- **A logo and a motif are always different** (owner). Tinara gets a new logo (three options drawn), and kerawang goes back to being its motif. Logos share one colour rule: product colour, navy ink, sparkle highlights. Reconciled options drawn for PLExyz Grid and Janka.
- **Missing logos drawn** (owner asked):
  - the PLExyz line: Crowd, Trace, Flow, Transit, Site, Ward and Yard;
  - the A-marks for Loom and Motion.
- **PLExyz Grid has no BaTech on its screens for now** (owner).
- **Loaders never spin or flip** (owner). They draw on, light in sequence, travel, grow, gather and breathe.
- **The AI sparkle is the one inside the A** (owner), taken from the master mark (`assets/ai/sparkle.svg`).
- **Seth must be findable** (owner). Cameos are drawn larger in every composition, and the guide shows where they are.
- **Palettes extended** (owner asked):
  - neutrals and a secondary scale;
  - surfaces, text, borders and status;
  - the dark set.
- **Plan names:** six ladders to choose from, plus a by-family option (owner asked for variations).

## 11 October 2026 (eighth review)

- **Support is `support@antarax.ai`** for every product (owner).
- **Plan names come from Earth, Cosmos and Quantum** (owner). The ladder proposed in 13 is Seed · Terra · Nova · Galaxy · Quantum, always shown with who it is for; the names wait on confirmation (11). **Angka keeps its current plan names.**
- **Bahasa Malaysia is parked** (owner): English only for now; existing Malay stays.
- **Times:** 24-hour on screens and in exports, 12-hour in sentences. Recommended by the kit at the owner's request, in the same pattern as dates (short on screen, long in prose).
- **Product identity system (14)**, asked for by the owner. It covers:
  - the chain from family to sub-product;
  - logo and motif kept different (Tinara the one exception);
  - three kinds of icon: family and product icons differ, interface icons are shared;
  - a BaTech shape per family;
  - seven loading states with each product's own loaders;
  - full product palettes with validated chart sets;
  - every product's built sub-products.
- **Proposed in 14, waiting on the owner (11):**
  - Yara's motif becomes gear (riak repeated its logo);
  - Tinara moves to garnet;
  - Tide's crescent icon;
  - the family compositions and loaders.
- **Found:** the playbook's lines and areas appear in no app. 14 lists each app's real areas.

## 11 October 2026 (seventh review)

- **Shared product standards (13)**, asked for in full by the owner: one set of words (organisation, member, Owner · Admin · Member · Viewer, Sign in), addresses (`<product>.antarax.ai`, `axle.antarax.ai`, `<product>@antarax.ai`, one support line), plans, money, dates and times, one email template (the Lapisan mailer), copy patterns, one AXLE, British English and Bahasa Malaysia, `/guide` and `/help`, report and export formats, and an accessibility baseline. Every app audited against them. Open choices: 35 to 39.

## 11 October 2026 (sixth review)

- **BaTech is never straight-cut.** Bands are drift bands (fade out with no edge) or edge bands cropped only by a container's own edge; no ruled lines, rows of dots or hard strips as decoration. Functional lines (progress, steppers, gridlines) stay plain and are not corak. The straight Quiet bands, dot-row divider and hatched tab thread are withdrawn.
- **Naming means lines and areas** (Atlas in AX Frame, Forecast in Janka). Rules in 12: one style per product, product first outside it, shared names (Assist, Forecast), no reused family or product names. Clashes found: Yara Flow vs PLExyz Flow; AX Frame Lens vs Assist.
- **Cameos:** single motifs carry none; bands carry BaTech's hidden cameos as the motif code places them.

## 11 October 2026 (fifth review)

- **Elements, charts, loading and naming proposed** from BaTech's construction (12): traces and pads, isen dots, intan markers, the thread, draw-on and turn loaders, and BaTech's words as the vocabulary for design and code.

- **Tinara's logo is the kerawang motif itself:** the official BaTech drawing in Tinara's plum and gold, with a small 3×3 version for 24px and below and light versions for dark grounds. The window, lattice and trellis options are withdrawn. Tinara's empty states use bunga raya, the Tide flower, so the logo is not repeated.
- **Signature moments proposed:** one functional moment per product where its motif does the product's job (12).

## 11 October 2026 (fourth review)

- **Product guidelines follow the BaTech guidelines.** Inside products, BaTech uses the official motif drawings, the family colour pairs (never the product's own colours), BaTech's Quiet ink `#C5CCF7`, its three strengths and its size limits (24px minimum; at least two motifs above about 120px). Places: the signature motif as the empty-state picture; a Quiet band of the family's corak on dividers, sign-in edges and email headers; avatar and image placeholders; loading. The single large sign-in motif and the product-coloured motif files are withdrawn. Motif meanings use BaTech's wording.

## 11 October 2026 (third review)

- **One credit line: "by AntaraX"** for every product, PLExyz and Yara included. "Powered by AntaraX" and "Powered by AntaraX [Family]" are retired as product credits; families show on antarax.ai only.
- **No batik cloths inside products.** The full BaTech pattern is too strong for product UIs. Each product has one signature motif from its family's set, drawn simply in the product's colour, used once per screen and faintly (sign-in panel, empty states, email header, splash). The motif map in 12 shows which motif belongs to which product and why. The product cloths are withdrawn.
- **Tinara's first mark options are withdrawn.** New options drawn: the kerawang window (recommended), lattice and trellis.
- **The guide states rules, not history.** Decision notes live in this log; 11 keeps only what is still open.

## 11 October 2026 (second review)

- **Keep each product's style; add the AntaraX layer.** Products keep their logos, palettes and signature details. AntaraX integrates through eight touchpoints in every product: the credit line, a product cloth (BaTech motifs in the product's own colours), the AI sparkle, thinking motion, the shared core, the intan eyebrow, the app tile and the footer (12). This narrows the morning's "own logos are restyled": a restyle is now chosen per product.
- **Credit lines approved** as proposed: "by AntaraX" in products, "from REKA" on sign-in, splash, first emails and reports, the legal line, review on 23 July 2027.
- **Janka's restyle approved** (navy ink, sparkle orange and cyan). The restyled files are now the official Janka mark.
- **PLExyz Grid keeps its mark as it is.** Its teal and pink already have AntaraX equivalents; the proposed restyle is withdrawn.
- **PLExyz is REKA's spatial intelligence platform, powered by AntaraX** (owner's PLExyz line brief and overview). Owned by Harmonik; products Grid (flagship), Flow, Transit, Crowd, Site, Ward, Yard (concepts); one visual system (force field, core entity shard, product-specific spatial context). PLExyz products credit "Powered by AntaraX".
- **PLExyz Trace is a PLExyz product**, currently built inside Janka (RFID tags, zones, last-seen locations).
- **Tinara gets a kerawang mark.** Options drawn (`assets/products/tinara/`); Tinara keeps its plum and gold (the Tide pink proposal is withdrawn, in line with keeping each product's style).
- **Frame is AX Frame.** The owner chose "Frame by AntaraX", or "AX Frame" if "Frame" is too common in software; it is (Nutanix Frame, Frame.io, Framer). The family stays AntaraX Frame.

## 11 October 2026

- **Endorsed products.** Most products are older than the AntaraX brand, and people know REKA better than AntaraX. Products keep their own logos and are endorsed "by AntaraX"; AntaraX does not replace them. Products with an identity of their own (PLExyz, Janka, Angka, Tinara) are **own-mark**; Yara, Frame, Loom, Motion and new products are **A-mark** (the A with the family icon). See 12.
- **Own logos are restyled, not replaced.** Each keeps its shape and idea and adopts the AntaraX finish (navy ink, flat fills, highlights from the sparkle palette, no REKA colours). The specific restyles for Janka and PLExyz Grid are proposals awaiting approval (11).
- **Shared core, own accent** in product apps: every app shares AntaraX type, text colours, status colours, focus ring and interface rules, and keeps one accent of its own. This supersedes the 10 October recommendation in 09 to move Angka to Tide pink.
- **Brand guidelines** for the architecture and each product live in this kit (12, `guide/products/`) with a visual reference (`guide/product-brands.html`).
- **Fact corrected:** Loom's verb in `tokens.json` was still "Orchestrate"; it is "Synthesize" (decided 10 October).
- **Photography presents a global company with Southeast Asian roots.** Workplace scenes include diverse people rather than exclusively Malaysian teams.
- **Natural, everyday workplaces.** The owner supplied REKA office references and approved the modest shared-office direction: practical desks, mesh chairs, striped blinds, warm walls and workshop equipment. Avoid glossy corporate-stock staging.
- **Generated photos illustrate work, not customer proof.** Publish the reviewed AntaraX photo set for live evaluation with a small blue diamond beside the caption (owner preference), accessible name and tooltip "Illustrative image", rather than a visible text label. Preserve real product screenshots separately.

## 10 October 2026

- **Automation runs on Ripple.** Yara is the SaaS that takes work from manual to digital; Ripple then takes it from digital to automated. REKA's Intelligent Automation service is built on AntaraX Ripple, not Loom. This replaces "Loom is the single automation name" (playbook v0.3).
- **Loom is data synthesis.** Its verb changes from Orchestrate to **Synthesize**, motto unchanged ("Weave it together."). It covers both bringing data from many sources into one picture and generating synthetic data. The v0.3 retirement of "AX Loom = synthetic data" is reversed. AI agents and workflows are no longer Loom's story.
- **Replace the live antarax.ai with the new site** (after the pre-launch fixes). One CTA label for main products: **Book a demo** ("Book a walkthrough" retired).
- **Technology page motifs glow in the dark** instead of showing their usual colours.
- **reka.re goes multi-page** after the AntaraX work is finished (plan to follow; see the REKA kit).
- **Brand kits split:** AntaraX and REKA each get their own brand kit repository; these are the reference for all development and marketing.
- **Benchmark:** synapsys-ai.com reviewed as a layman-friendly, cut-to-the-chase reference; patterns adopted and rejected are listed in 08.
- **Pilots run as part of Managed AI.** Every closed pilot is a REKA Managed AI engagement; say so on every pilot page.
- **Each page is a landing page on its own.** Every closed pilot gets its own page with pictures/illustrations specific to it and the problem statement it answers; a dedicated "Request pilot access" page exists.
- **Story stays on antarax.ai** at `/story` (AntaraX's own product story), linked from the footer. About, careers and legal stay on reka.re.
- **Technology page is dark,** with a subtle **dotted** blueprint (dots, not lines).
- **No coloured top-border card accents** anywhere ("looks AI generated").
- **No default-styled controls** anywhere; dropdowns become styled choice buttons.
- **"How it works" uses real screenshots** where they exist; "compared" sections use icons or graphics.
- **Families page:** selecting a family opens the A in the middle and morphs the sparkle into that family's logo, as in the master logo file's splash animation.
- **Mega-menu** keeps its earlier open style with the new content.
- **Tinara** is described as Malaysia-first B2B intelligence (which companies to sell to, why, how to open the conversation).
- **Every illustration includes REKA, AntaraX and Seth** cameos.
- **Product tiers:** main products Yara, Janka, PLExyz Grid; closed pilots Frame (while validated), PLExyz Crowd, Angka, Tinara, Loom, Motion. Request pilot access replaces waitlists.
- **Mole** is AntaraX's collaborator for event technology (mole.is, sense.mole.is).
- **One form** for demo, pilot and Managed AI, recording where the visitor came from; it emails holla@reka.re.
- **Illustrations:** mixed interlocking patterns, not straight lines; the pucuk rebung triangle row is retired.
- **Live site:** antarax.ai is replaced by the new multi-page build while existing landing pages such as /angka keep working.
- **Blog (recommendation, not yet decided):** a shared REKA and AntaraX blog at reka.re/blog.

## 9 October 2026

- **Six families:** Ripple, Edge, Frame, Loom, Motion, Tide. Janka, Angka and Tinara form Tide (Optimize). Motion means telematics and fleet management, built first for autonomous and remote-controlled vehicles.
- **BaTech** (Malaysian batik rebuilt from technology) is the AntaraX motif language; Malaysian motifs lead, Javanese kawung and parang are never a signature.
- **Family colours** follow the master logo file.

## 7 October 2026

- Yara leads the portfolio. Robotics stays with REKA's Kinetik. Retired teaser names (see 02).
