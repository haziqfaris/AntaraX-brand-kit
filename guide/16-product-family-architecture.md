# 16 Product family architecture
**Decision date:** 27 October 2026  
**Decision status:** Approved family classification; visual identity migration and downstream websites remain follow-up work  
**Canonical summary:** [02 Products and families](02-products-and-families.md)  
**Related standards:** [12 Brand architecture](12-brand-architecture.md), [14 Product identity system](14-product-identity-system.md), [10 Decisions log](10-decisions-log.md), [11 Open questions](11-open-questions.md)

## Purpose and decision

AntaraX has **six product families**: **Ripple, Tide, Loom, Edge, Motion and Nalar**.

This supersedes the previous six-family roster only in family organisation:
- **Nalar** is the new AI family, containing AwanGan and BumiNyata.
- **AX Frame moves from the retired standalone AntaraX Frame family to Loom**, alongside Cebis Loom. AX Frame remains AX Frame, with its existing independent application, branding and roadmap.
- **Motion remains independent of Edge**. Vehicle fleets, autonomous machines, robots and drones are not simply sub-products of physical sensing.
- Ripple, Tide, Edge and their existing main products remain in their families.
- No family merger merges repositories, backends, deployment environments, contracts or entitlements.

The family classification is approved. Family **visuals**, a distinct Nalar colour and icon, product marks and the site rollout are *not* automatically approved by this decision. Implement them through the brand-identity process. Do not invent deliverable capabilities, customers or maturity.

## A. Family map: responsibility, products and boundaries

| Family | Primary verb | Customer-oriented purpose | Confirmed products | What it owns | What it does NOT own |
|---|---|---|---|---|---|
| **Ripple** | **Operate** | Run and automate work | **Yara** | Tasks, jobs, service requests, human/digital workflows, handoffs and workflow automation | AI model serving; robot navigation |
| **Tide** | **Decide** | Turn domain-specific business information into useful recommendations and decisions | **Janka, Angka, Tinara** | Inventory decisions, finance intelligence, B2B sales decisions, forecasting in each product's domain | Generic data integration/ETL; AI runtime |
| **Loom** | **Structure** | Make fragmented information and systems understandable | **Cebis Loom, AX Frame** | Cleaning and connecting data, context, asset relationships, digital estate knowledge, visibility | Generic model hosting; universal forecasting; movement control |
| **Edge** | **Perceive** | Sense and understand real-world spaces and environments | **PLExyz Grid, PLExyz Crowd** | Spatial models, physical sensing, occupancy, site and location context | Autonomous navigation; robot/fleet operations; chip fabrication |
| **Motion** | **Navigate** | Monitor, coordinate and control moving systems | **AX Motion** | Telematics, vehicle/fleet operations, remote control within verified scope; future autonomous-system products | General site sensing; physical-space management |
| **Nalar** | **Reason** | Provide model capabilities and AI execution in suitable deployment environments | **AwanGan, BumiNyata** | Inference/capability runtimes, model access/routing, AI policies and runtime deployment | General document ETL as a separate data offering; business domain decisions; operational task apps |

**Family versus product:** the family groups a customer problem/capability domain. The *product* is the independently identifiable offering. A product has **one primary family**, but can use technology from any other family; its family does not dictate technical dependencies.

**Status and sales channel are separate axes:** A product can be a featured offering and simultaneously a closed pilot (e.g. PLExyz Crowd). “By arrangement”, “managed service” and “closed pilot” do not create product families or change the product's functional ownership.

## B. The classification tree

```text
REKA Inisiatif Sdn Bhd                         company, R&D, Managed AI
└─ AntaraX                                     endorsed product ecosystem
   ├─ Ripple · Operate
   │  └─ Yara                                  main product
   ├─ Tide · Decide
   │  ├─ Janka                                 inventory
   │  ├─ Angka                                 finance
   │  │  └─ Lapis by Angka                     independently usable companion product
   │  └─ Tinara                                B2B sales intelligence
   ├─ Loom · Structure
   │  ├─ Cebis Loom                            data preparation / managed service
   │  └─ AX Frame                              digital estate and dependencies
   ├─ Edge · Perceive
   │  └─ PLExyz                                spatial product line
   │     ├─ PLExyz Grid
   │     └─ PLExyz Crowd
   ├─ Motion · Navigate
   │  └─ AX Motion                             vehicle/fleet product; expanded autonomy is future scope
   └─ Nalar · Reason
      ├─ AwanGan                               cloud AI
      └─ BumiNyata                             private/on-premises AI

Related, but not promoted to independent public family products:
- YaraOne: internal support/ticketing tool, aligned with Ripple; not currently a public product.
- Jentera: potential AI-staff/product concept, Ripple candidate only; needs product decision.
- HelAI: exploratory embedded AI/silicon/computing concept, Nalar candidate only; no approved public product or chip claim.
- Future robots/drones: Motion scope exploration, not announced AX Motion shipping features.
- PLExyz Trace: a product embedded in Janka, retaining PLExyz spatial identity and integration context.
```

## C. Why the boundaries matter

### Ripple versus Motion
Ripple coordinates work performed by people, applications and possibly AI agents. Motion coordinates movement and operational control of vehicles or autonomous machines. An automated warehouse might involve both; **a robot's navigation is Motion**, while **a job order assigned to that robot is Ripple**. REKA Kinetik retains frontier robotics and autonomous research; AntaraX Motion productises verified repeatable capabilities. Do not imply working autonomous drone/robot products where none are substantiated.

### Tide versus Loom
Loom organises information to make it useful; Tide performs domain-specific analysis and recommends business decisions. **Cebis Loom** processes fragmented business inputs into typed tables, data dictionaries and usable reports. **AX Frame** catalogues a digital estate, its assets, expenses, renewal dates and relationships. Their common family purpose is **structured understanding**, not identical product behaviour.

AX Frame may itself show renewal warnings, cost insights or AI-assisted blueprints. Those are part of **AX Frame**, not grounds for moving it into Tide. Similarly, Cebis Loom is not a workflow automation/agent product; that capability belongs to Ripple.

### Edge versus Motion versus Nalar
Edge senses and represents the physical world; Motion governs moving systems; Nalar supplies AI execution. A drone might **consume Edge-derived spatial context**, **use Nalar capabilities for inference where appropriate**, and **be operated by a Motion product**. The technology stacks need not be shared; no family implies a dependency on another.

**AI chips:** “Edge computing” does not mean every AI accelerator or chip is an Edge-family product. HelAI remains a **Nalar-family candidate** if it becomes a reusable AI compute/runtime offering; classification changes if its eventual customer purpose is different. The silicon/wafer concept is research/exploration, not a shipping product.

### Nalar versus Heuristiks versus Lapisan
- **Nalar** is an AntaraX customer-facing family.
- **AwanGan** is a cloud-deployed AI product that also has an internal AI control-plane role.
- **BumiNyata** is its private, on-premises counterpart. They are independently deployable; do not assert feature parity beyond tested contracts.
- **Heuristiks** is a **REKA-owned technical AI engineering framework**, not an AntaraX product or family.
- **Lapisan** is the shared API/service platform beneath products; it is not a Nalar sub-product.
- **RESAM** remains REKA's delivery/governance framework.
- **AXLE / R8**, the Dashboard Kit and email infrastructure remain internal/shared services, not family products.

## D. Product and packaging distinctions

| Item | Classification | Family | Commercial / maturity principle |
|---|---|---|---|
| Yara | Customer product | Ripple | Existing live lead product |
| YaraOne | Shared internal support platform | Ripple-aligned only | Not a public family-product launch |
| Janka | Customer product | Tide | Existing main product |
| Angka | Customer product | Tide | Existing closed pilot, standalone app |
| Lapis by Angka | Companion product embedded in Angka | Tide via Angka | Independently usable, including without Angka; separate entitlement and API as recorded in Angka sheet |
| Tinara | Customer product | Tide | Existing closed pilot |
| Cebis Loom | Customer-facing managed data product | Loom | By arrangement; not automation |
| AX Frame | Customer product | Loom | Existing closed pilot; own app and roadmap unchanged |
| PLExyz | Spatial product line/master brand | Edge | Umbrella identity, not a sixth replacement product |
| PLExyz Grid | Customer product | Edge | Existing main product |
| PLExyz Crowd | Customer product | Edge | Featured/main product while new app remains closed pilot |
| AX Motion | Customer product | Motion | Closed pilot; do not conflate with future full autonomy |
| AwanGan | Cloud AI product + internal platform responsibility | Nalar | By arrangement; no invented customer deployment |
| BumiNyata | On-premises/private AI product | Nalar | By arrangement; no invented customer deployment |
| Jentera | Candidate | Ripple, tentative | No automatic launch or inclusion in public catalog |
| HelAI | Exploratory technology / product candidate | Nalar, tentative | Not a shipping chip/platform; ownership/maturity to be decided |

The original product statuses, approved sales wording and claims in [02](02-products-and-families.md) and individual [product briefs](products/README.md) still apply unless an explicit owner decision changes them. **Family reclassification is not a release-status update.**

## E. Brand architecture and visual migration

Keep:
1. Products retain their own names, apps, repos, logos, colour identity, imagery and current commercial status.
2. Every public product keeps **“by AntaraX”**; family affiliation is secondary information, not part of the product name.
3. PLExyz remains a master spatial identity above Grid and Crowd.
4. Lapis remains “Lapis by Angka”; do not confuse Lapis with **Lapisan**.
5. AX Frame retains its recognisable cube/four-corner identity, current blue product palette and `intan` motif as product-specific legacy identity during transition.
6. Cebis Loom retains the Loom-specific violet family identity and `tenun` product motif.

Design follow-ups, **not decisions in this update**:
- Choose the Nalar family mark/icon, palette and BaTech motif/composition, test against existing six-family system and all consumers. The blue used during conversation was an illustration, not an approved palette.
- Define the Loom-family treatment for AX Frame's family badge/brand band while preserving AX Frame's distinct logo and product accent. Existing Frame colour/assets remain available as legacy values pending audited migration.
- Clarify the "one A-mark per family" rule where AX Frame and Cebis Loom were both A-mark products before the merger. **Do not apply one shared family icon in a way that produces identical logos.**
- Confirm whether new applications need new family tokens in `tokens/tokens.json`, Dashboard Kit, BaTech generators, email layouts, mockups and marketing exports. Any token change must follow `AGENTS.md` and synchronise its consumers.
- Keep all historical decisions/log entries; replace outdated *current* descriptions only, not earlier decision history.

## F. Classification decision test for every future product

Answer in this order:

1. **Primary customer outcome:** work executed (Ripple), business choice improved (Tide), data structured/understood (Loom), physical world perceived (Edge), moving systems controlled (Motion), AI model capability/runtime delivered (Nalar)?
2. **Independence:** is it an independently identifiable offering, companion product, a sub-product, a reusable shared service or a module within another app?
3. **Reality:** built, live, closed pilot, managed by arrangement, experimental, or only a concept?
4. **Ownership:** AntaraX product, REKA R&D/framework, or internal platform?
5. **Cross-family uses:** dependencies/integrations are recorded separately and **must not** determine the primary family.
6. **Branding:** preserve an existing product mark and product colour before considering a family icon update.

If no existing family fits the customer promise, raise a new family proposal for an owner decision; do not create a family merely because the software has a separate repo.

## G. Claude Code implementation / downstream reconciliation brief

### Now: apply this classification in the brand kit
- Update `guide/02-products-and-families.md`, `guide/12-brand-architecture.md`, `guide/14-product-identity-system.md`, `guide/10-decisions-log.md` and `guide/11-open-questions.md` together.
- Ensure all current product-to-family references agree: **AX Frame = Loom; AwanGan/BumiNyata = Nalar; no current standalone Frame family**.
- Ensure no accidentally promoted YaraOne, Jentera, HelAI or autonomy promises.
- Do not change a logo, colour token, product URL, repository, code or user-facing claims solely because membership changed.

### Next: proposals and visual sign-off
- Design three Nalar identity directions using the real AntaraX system; show the full six-family comparison.
- Show AX Frame and Cebis Loom together as separate products under Loom, with actual logos and sample app/email/header compositions. Provide a specific collision-free A-mark approach.
- Verify every existing brand-kit visual guideline and output touched by the retired Frame family, including generated artwork and exports.
- Validate the family naming/verbs/UK-English style and the website IA for the new six-family map.

### After approval: downstream applications
- Update `haziqfaris/antarax-ai` Families, Products and Technology pages, menus, metadata and content; do not invent new features or maturity.
- Update product repo `README` and family attribution (AX Frame, AwanGan, BumiNyata, Cebis Loom) without renaming the repos or product apps.
- Review AntaraX Dashboard Kit/email/shared UI package family labels and feature flags.
- Run existing build/check scripts and visual regression checks; seek deployment approval separately.

### Acceptance checks
- There are **exactly six families** in the *current* brand taxonomy: Ripple, Tide, Loom, Edge, Motion and Nalar.
- Every confirmed customer product has one primary family; no product is counted as a family unless explicitly a family.
- AX Frame remains independently branded but is clearly in Loom; Cebis Loom remains data preparation, not workflow automation.
- Motion remains separate from Edge.
- AwanGan and BumiNyata are Nalar products and retain their distinct deployment identities.
- Internal systems and speculative products are not falsely marketed as available.
- No claims, pricing, live-site deployment, icons or colours are fabricated.

**This chapter is the brand-kit migration brief and operating reference for the six-family classification.** Future design decisions should update it and [10](10-decisions-log.md) without changing history.
