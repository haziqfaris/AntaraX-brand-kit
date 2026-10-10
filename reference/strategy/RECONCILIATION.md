# AntaraX × REKA Reconciliation

**Status:** Decided by Haziq on 7 October 2026 (see "Decisions" below). The playbook changes that follow from them are in `PLAYBOOK_V0.3_AMENDMENTS.md`.
**Purpose:** The v0.2 website playbooks (branch `strategy/website-playbook-v0.2`, `docs/strategy/WEBSITE_PLAYBOOK.md` in both repos) disagree with what the live sites, the design system and the Lapisan registry say today. This file lists each disagreement, the facts behind it, a recommendation, and what it changes.
**Mirrored:** The same file lives in `haziqfaris/antarax-ai` and `haziqfaris/reka.re` so agents in either repo see it. Edit both together.
**Rule:** The playbooks stay canonical. If a decision below changes strategy, amend the playbook as v0.3 on purpose; do not edit it quietly to fit an implementation.

## Decisions (7 October 2026)

| # | Decision |
|---|---|
| R1 | Accepted as recommended, with one change: **Tinara is no longer a main product.** It stays a standalone AntaraX product in a quieter tier (see "Product tiers"). |
| R2 | **Accepted.** Robotics and autonomy stay at REKA under Kinetik. Motion is not an AntaraX category until it meets the graduation rule. |
| R3 | **Accepted.** Playbook meanings for Edge, Loom and Motion; old teaser meanings retired; Loom is the single automation name. |
| R4 | **Changed.** Angka stays a standalone AntaraX product but is **not emphasised**, treated like Tinara. It is removed from the primary four. |
| R5 | **Accepted.** "Developers" footer link now, navigation item once a second API is live. |
| R6 | **Accepted, plus:** Yara is promoted as AntaraX's lead product, because it is the first subscription success. |

### Product tiers (result of R1, R4 and R6)

| Tier | Products | How they appear |
|---|---|---|
| **Lead** | **Yara** | First in every product list, featured on the homepage, the proof story |
| **Primary** | Frame, Janka | Full homepage cards, own product pages, product CTAs |
| **Also from AntaraX** (standalone, quieter) | Angka, Tinara, PLExyz Grid and Crowd (the Edge family) | A smaller row or footer-level listing and own pages; no homepage hero space; CTA matched to maturity (Angka: "Request an invite") |
| **Not yet products** | Loom | Waitlist only, no navigation slot |
| **Not on AntaraX** | Motion, robotics, AX Kinetics | REKA (Kinetik) |

Two assumptions to confirm: that PLExyz belongs in the quieter tier (I put it there because the live site gives it a lot of space but the playbook gives it none), and that "Tinara is not main" means quieter tier rather than parked.

### Yara as the lead: guardrails

"First subscription success" is a claim, so the playbook's rule applies: **no numbers, customers or quotes appear on any site until Haziq supplies them.** Until then Yara's promotion is about position (first, largest, featured) and real product screens, not unsupported statistics. A short list of what to supply is in `PLAYBOOK_V0.3_AMENDMENTS.md` under "Open inputs".

---

## Summary (original recommendations)

| # | Topic | Decision needed from Haziq? | Recommendation in one line |
|---|---|---|---|
| R1 | Portfolio of record, Yara/Ripple naming, PLExyz, Tinara | Tinara only | Four primary products; PLExyz becomes Edge; "Yara" is the product, "Ripple" the endorsement |
| R2 | Kinetik / AX Kinetics vs playbook "Motion" | **Yes** | Robotics stays at REKA (Kinetik); Motion is removed from AntaraX's public categories until a repeatable product exists |
| R3 | Edge / Loom / Motion names and maturity | Partly | Adopt the playbook meanings, retire the old teaser meanings, label Loom and Motion as not yet products |
| R4 | Angka's home | No | `antarax.ai/angka` is canonical; it joins the design system; CTA is "request an invite" |
| R5 | Lapisan (developer platform) | **Yes** | A "Developers" link, not a product tile; needs a playbook v0.3 line |
| R6 | Yara's public home and REKA's product sections | No | Product pages move to AntaraX; REKA keeps one heritage bridge |

---

## R1. Portfolio of record

### Where each product appears today

| Product | Playbook | Design system (7 repos) | antarax.ai site | reka.re site | Registry |
|---|---|---|---|---|---|
| Frame | Primary | Yes | Yes | No | Yes |
| Yara (Ripple) | Primary ("Yara", Ripple as endorsement) | Yes, as "Yara Ripple" | Yes, as "Yara Ripple" (47 mentions) | `/yara/` landing | Yes |
| Janka | Primary | Yes | Yes | No | Yes |
| Angka | Primary | **No** | **No** | Product feed on an unmerged branch | Yes |
| PLExyz Grid, Crowd | **Not mentioned** | Yes | Yes (77 mentions of PLExyz) | PLExyz is called a REKA product | No |
| Tinara | **Not mentioned** | Yes | No | Called a REKA product ("business intelligence") | No |

### Recommendation

1. **~~Primary four~~ Superseded by the decisions above:** Yara leads, Frame and Janka are primary, and Angka and Tinara sit in the quieter tier.
2. **PLExyz Grid and Crowd become the Edge family (Perceive).** The playbook defines Edge as "sensing, IoT, spatial/location data, physical-world intelligence". That is what PLExyz already is, so Edge has two real products today and no new build is needed. PLExyz stays as the product name, with Edge as the family.
3. **PLExyz leaves REKA's product list.** By the playbook's own rule, work that is proven and repeatable moves to AntaraX. reka.re's EXP-04 story ("became PLExyz after proving edge-computed spatial tracking") is exactly the heritage bridge, so reka.re tells that story and links out instead of selling it.
4. **"Yara" is the public product name; "Ripple" is the endorsement** ("Powered by AntaraX Ripple"). The design system is the source of truth for naming rulings, so change it there first: its README family list says "Yara Ripple". Then update the AntaraX site, which uses "Yara Ripple" 47 times and a `--ripple` colour variable.
5. **Tinara:** decided as "not main anymore". It stays a standalone AntaraX product in the quieter tier. reka.re stops listing it as one of REKA's products. The reka.re site currently describes it as REKA's "business intelligence" product, so that wording changes at the same time.

---

## R2. Kinetik, AX Kinetics and "Motion"

### Facts
- reka.re: Kinetik is a REKA division (autonomous driving, robotics, human-machine interfaces). EXP-01 "became Kinetik".
- antarax.ai has a whole section for **AX Kinetics**, described as "REKA's automation and robotics control layer... Independent from the AntaraX family, built under REKA's Kinetik pillar". Its pricing is "Scoped to the deployment" with "Talk to us".
- The AntaraX playbook defines **Motion** as an AntaraX category: "autonomous vehicles, robotics, fleets, missions/routes, control, safety". That is the same territory, and it contradicts what the live site says about independence.
- The REKA playbook lists Autonomous Systems and Robotics as REKA technology pages.
- The playbook's own product test (section 5) requires "a fast path to value" and "repeatable value". A deployment that is scoped each time and sold by "Talk to us" does not meet it yet.

### Recommendation
- **Keep robotics and autonomy at REKA, under Kinetik.** Remove Motion from AntaraX's public categories for now. "Act" stays covered by software automation (Yara's Flow, later Loom).
- **Move the AX Kinetics section off antarax.ai** and give it one link to REKA's Kinetik page. It is a bespoke offer, which the AntaraX playbook says AntaraX is not.
- **Write down a graduation rule** so Motion can return honestly: a Kinetik capability becomes AntaraX Motion when it has a repeatable deployment, a published starting price and a fast path to first value.

### Alternative (not recommended now)
Make Motion an AntaraX family from today, with Kinetik as the REKA R&D that feeds it. This conflicts with the product test, and with the live site's own statement of independence.

### Decision needed
Haziq: confirm "robotics stays at REKA for now", or choose the alternative.

---

## R3. Edge, Loom and Motion: names and maturity

### Facts
The antarax.ai site already uses these names, with **different meanings**, as "More from AntaraX" teasers:

| Name | Live site meaning today | Playbook meaning |
|---|---|---|
| AX Ripple | Monitors automations and AI usage once the floor is digital | Underlying capability behind Yara |
| AX Loom | Synthetic data generation | Orchestrate: AI agents, knowledge, workflows |
| AX Edge | Fleet and device updates rolled out centrally | Perceive: sensing, IoT, spatial data |
| AX Motion | Workflow and process automation across the platform | Act: robotics and autonomous vehicles |

None of Edge, Loom or Motion exists in the Lapisan registry. A third name also exists for automation: the API docs say the automation product called "Lapis AN" becomes **Lapisan Automations (planned)**.

### Recommendation
- **Use the playbook meanings.** They form a coherent Understand → Operate → Optimize → Perceive → Act → Orchestrate story. Retire the old teaser meanings: old "Edge" device updates fold into Edge's device management, old "Motion" workflow automation folds into Yara Flow and Loom, and old "Loom" synthetic data is dropped from public copy until a real use for it appears.
- **Maturity labels, always visible:**

  | Family | Public status | CTA |
  |---|---|---|
  | Edge | Live: PLExyz Grid and Crowd | As each product's maturity allows |
  | Loom | Not yet a product | Join waitlist only |
  | Motion | Not on AntaraX (see R2) | None |

- **One name for automation.** Loom is the product family. If Lapisan Automations ships, it is Loom's API surface, not a second product. Haziq should confirm, because the name appears in the API docs.

---

## R4. Angka's home

### Facts
- Angka is a primary product in the playbook, but it is missing from the design-system family and from antarax.ai.
- It has its own host, `angka.antarax.ai`, and its API docs are registered at `antarax.ai/angka/lapis-api/docs`. How `antarax.ai/angka/...` is routed is not visible from this repo (the site is a single-page app with `not_found_handling: single-page-application`), so check it before building on it.
- The unmerged REKA feed (`codex/product-feed-pilot`) sets `links.canonical` to `https://reka.re/angka`, `company` to REKA Inisiatif, `market` to Malaysia, and `status` to `closed-pilot` ("by invitation and free while the closed pilot runs").

### Decision
Angka stays a standalone AntaraX product but is not emphasised, like Tinara. It moves out of the playbook's primary four.

### What follows
- **Canonical page: `antarax.ai/angka`**, listed in the "Also from AntaraX" tier. The playbook says REKA should not explain AntaraX products, so change the feed's canonical link before that branch merges, and let `reka.re/angka` redirect.
- **CTA: "Request an invite"**, matching the closed pilot. Not "Start free".
- **Add Angka to the design system** as an eighth product (its accent colour is unassigned), so it follows the family rules like the others.
- **The playbook's "Understand your business" group** loses Angka (it becomes Frame and Janka), and the finance route in product discovery stays available but is no longer a headline.
- **Do not claim more than the feed does:** Malaysian small businesses, English only for now, Malay planned.

---

## R5. Lapisan (developer platform)

### Facts
`lapisan.antarax.ai` (console) and `api.antarax.ai` (gateway) are both live, with Lapis API as the first conforming API. The playbook's homepage, navigation and categories never mention developers.

### Recommendation
- **Not a product tile, and not a customer category.** Customers should still see products first ("Product clarity first").
- **Add a "Developers" link** in the footer, and in the primary navigation only once a second API besides Lapis is live. One sentence in the "connected intelligence" section can mention it.
- **This needs a playbook v0.3 edit** (a "Developers" line in section 16), so make it deliberately rather than in code.

### Decision needed
Haziq: a footer link now and navigation later, as above? Or a navigation item today?

---

## R6. Yara's public home, and what REKA sells

### Facts
- reka.re hosts the public YARA landing page (`reka.re/yara/`), its "How YARA works" film, `llms.txt`, and the assessment endpoint (the `reka-yara` Worker, which emails `holla@reka.re`). The product itself runs at `yara.antarax.ai`.
- reka.re's current copy calls PLExyz, Tinara and AntaraX "three products" and says REKA offers "three products ... and four services".
- The REKA playbook says REKA does not sell products and describes AntaraX only through one bridge.
- The page source of `reka-site-full.html` still contains placeholder case-study text ("[Client] spaces & occupancy", "[ XX ] Sites live"). Check whether it is visible on production; the playbooks forbid invented customers and numbers.

### Recommendation
- **Canonical home for Yara: `antarax.ai/yara`.** Keep `reka.re/yara/` working, redirect when the AntaraX page exists, and keep the assessment worker as it is until then.
- **Replace reka.re's "three products" section with the heritage bridge** from the playbook: "When research becomes repeatable... That's why we created AntaraX", linking to AntaraX.
- **Remove or fill the placeholders** before any new traffic goes to reka.re.
- **Promote Yara** (decision added): make it the lead product across AntaraX, and use reka.re's heritage bridge to point to it first. See "Yara as the lead: guardrails" above.

---

## Order of work once decisions are made

1. Mark R2, R5 and the Tinara question in R1. Everything else can proceed on the recommendations.
2. If any decision changes strategy, publish playbook v0.3 in both repos (R5 certainly does).
3. Update the design system first for naming (Yara, Edge family, Angka), then the sites.
4. Copy passes: reka.re homepage, then antarax.ai homepage.
