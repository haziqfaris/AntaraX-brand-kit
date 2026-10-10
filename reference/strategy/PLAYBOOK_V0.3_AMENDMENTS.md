# Playbook v0.3 Amendments

**Status:** Applied as v0.3 on 7 October 2026 (see the playbook header). Kept as the record of what changed.
**Why a separate file:** The v0.2 playbooks live on branch `strategy/website-playbook-v0.2`, which is not merged, and the playbooks say not to edit them merely to fit an implementation. This file is the exact change list. When the branch is merged, apply it as v0.3 in both repos in one commit, then keep this file as the record.
**Mirrored** in `haziqfaris/antarax-ai` and `haziqfaris/reka.re`. Edit both together.

---

## A. AntaraX playbook (`antarax-ai/docs/strategy/WEBSITE_PLAYBOOK.md`)

| Section | v0.2 says | v0.3 says |
|---|---|---|
| Title | v0.2, Management-Aligned Canon | v0.3. Add a changelog line: "Yara leads; Angka and Tinara quieter; Motion moved to REKA; Developers added." |
| §6 table, **Act** row | Motion | Remove Motion. Act is covered by Yara's Flow and, later, Loom. |
| §6 table, **Optimize** row | Janka, Angka | Janka. (Angka is in the quieter tier.) |
| §6 "Simpler public grouping" | Understand: Frame, Janka, Angka. Run: Yara. Automate: Edge, Loom, Motion | **Run your business:** Yara (lead). **Understand your business:** Frame, Janka. **Automate your world:** Edge (PLExyz), Loom (waitlist). |
| §7 | Public communication prioritises the product the customer can use | Add: "Products appear in three tiers: Lead (Yara), Primary (Frame, Janka), Also from AntaraX (Angka, Tinara, PLExyz/Edge)." |
| §9 Yara | A customer-facing product | Add: "Yara is AntaraX's lead product and its first subscription success. It appears first in every product list." Keep "Powered by AntaraX Ripple". |
| §11 Angka | Primary product | Move to the quieter tier. Keep the capability lines. Add: "Closed pilot. CTA is Request an invite." |
| §12 **Edge** | Perceive: sensing, IoT, spatial | Add: "Edge is PLExyz Grid and PLExyz Crowd today." |
| §12 **Motion** | Act: autonomous vehicles, robotics | Replace with: "Motion is not an AntaraX family. Robotics and autonomy are REKA's Kinetik work. Motion returns only when a Kinetik capability has a repeatable deployment, a published starting price and a fast path to first value." |
| §12 **Loom** | Orchestrate | Add: "Loom is the single automation name. Not yet a product: waitlist only. If Lapisan Automations ships, it is Loom's API surface." |
| §16 Navigation | Products, Solutions, Customers/Work, Resources/Insights, About | Add a footer link **Developers** (to `lapisan.antarax.ai`). Promote it to the navigation once a second API besides Lapis is live. |
| §17 Homepage item 4 | Primary products: Frame, Yara, Janka, Angka | **Lead product: Yara, then Frame and Janka.** Add a smaller "Also from AntaraX" row: Angka, Tinara, PLExyz. |
| §19 Product discovery | Seven routes, including Motion → robotics | Remove the Motion route. Keep the finance route (Angka) and the sensing route (Edge). |
| §20, §21 | Examples per product | Angka examples stay but are not prioritised. Add Yara first. |
| §23 REKA relationship | One heritage section | Unchanged. |
| New §25 **Retired names** | n/a | "AX Loom = synthetic data", "AX Edge = fleet updates", "AX Motion = workflow automation", "AX Kinetics", "Yara Ripple" as a product name. Do not use them in new copy. |

## B. REKA playbook (`reka.re/docs/strategy/WEBSITE_PLAYBOOK.md`)

| Section | v0.2 says | v0.3 says |
|---|---|---|
| §15 Technology pages | Autonomous Systems, Robotics, etc. | Name **Kinetik** as REKA's autonomy and robotics division and the home of AX Kinetics-style bespoke work. |
| §19 AntaraX boundary | Explore, prove, productise | Add the graduation rule from R2 (repeatable deployment, published starting price, fast path to first value). Add one example that reka.re already states: EXP-04 became PLExyz (now AntaraX's Edge). Add a Yara example only once Haziq confirms its origin story. |
| §14 Homepage item 12, "AntaraX bridge" | When research becomes repeatable | Point first to **Yara** (lead product), then to AntaraX generally. Remove the "three products" framing of PLExyz, Tinara and AntaraX from reka.re. |
| New note | n/a | reka.re no longer sells PLExyz, Tinara or AntaraX products. They are linked as products that came from REKA's research. |

## C. Other repos these decisions touch (not edited here)

| Where | Change | Note |
|---|---|---|
| `antarax-ai/design-system/` (on branch `claude/product-design-standardization-y6yp3s`) | Rename "Yara Ripple" to "Yara"; record Edge as the PLExyz family; add Angka as an eighth product with an unassigned accent colour | The design system owns naming rulings, so change it first |
| `reka.re` branch `codex/product-feed-pilot` | Set Angka's `links.canonical` to `https://antarax.ai/angka`; the page becomes a pointer, not a REKA product | Before that branch merges |
| `antarax-api` registry / docs | Decide whether to keep "Lapisan Automations (planned)" as a name, since Loom is now the single automation name | Docs 09, section 9.2 |

## Open inputs needed from Haziq

These stay as placeholders in copy until supplied. The playbooks forbid inventing them.

1. **Yara proof:** how many paying customers or subscriptions, since when, and which figures can be public (for example retention, or a named customer who agrees to a quote).
2. **Yara product screens:** which real screens may be shown on the homepage.
3. **Tinara:** its one-line description now that it is a quieter standalone product.
4. **Angka:** whether `antarax.ai/angka` already serves pages (the API docs path suggests something does).
5. **reka.re placeholders:** whether the `[Client]` and `[ XX ]` text in the page source is visible on production.
