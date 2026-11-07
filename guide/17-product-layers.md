# 17 Product layers

**Decision date:** 3 November 2026 (owner)
**Related:** [02 Products and families](02-products-and-families.md), [16 Product family architecture](16-product-family-architecture.md), [10 Decisions log](10-decisions-log.md)

## What layers are for

AntaraX sorts everything it runs in two ways, and the two never replace each other:

- **A family** says which customer problem a product solves (Ripple, Tide, Loom, Edge, Motion, Nalar; see 16). Customers meet families on antarax.ai.
- **A layer** says where something sits in what AntaraX runs, from what customers see down to what REKA runs it with. Layers are for REKA's own planning: the AntaraX Product Register, AXLE R8 Shen (the staff console across every product), roadmaps and architecture documents. They are not a customer-facing grouping and never appear in product names or marketing copy.

Every product, service or tool sits in **one layer**. A layer is not a technical dependency: a product in one layer may use services from any other.

## The six layers

| Layer | Holds | What sits there today |
|---|---|---|
| **L1 Front door** | Where people first meet AntaraX | antarax.ai |
| **L2 Products** | The apps customers use for their business, grouped by family | Ripple: Yara · Tide: Janka, Angka (with Lapis by Angka), Tinara, Tiko (private pilot) · Loom: Cebis Loom, AX Frame · Edge: PLExyz Grid, PLExyz Crowd · Motion: AX Motion |
| **L3 Intelligence** | AI capability that products and clients run on: the Nalar family | Nalar: AwanGan, BumiNyata |
| **L4 Platform** | Shared services every product uses | Lapisan (developer platform), the API gateway (`api.antarax.ai`), AntaraX email (`email.antarax.ai`); the AntaraX Hub when it is built |
| **L5 Operations** | How REKA runs, supports, watches and measures it all | AXLE R8 Shen, each product's AXLE, YaraOne (internal support and tickets), Gauge |
| **L6 REKA's own** | Tools and frameworks for REKA itself, outside AntaraX's products | REKA Discovery, peREKA, Heuristiks, RESAM |

Notes on placement:

- **Nalar is the one family in L3.** Its products are sold by arrangement like any product, but their job is to supply AI to other products and to clients, so they sit under the business apps. AwanGan's second role, AntaraX's internal AI control plane, is recorded in antarax-api `docs/08-infrastructure.md` section 8.8; it does not move AwanGan to another layer.
- **YaraOne is in L5**, not L2: it is an internal, Ripple-aligned support system, not a public product (16).
- **Gauge and REKA Discovery** stay Ripple-aligned in colour and email (18 October 2026) and sit in L5 and L6 by what they are for.
- **Candidates** (AntaraX's own AI agents, HelAI, future robots and drones) are placed only when the owner approves them as products.

## Placing something new

Answer in order:

1. Is it the site people land on? **L1.**
2. Does a customer use it to run their business? **L2**, in its family.
3. Does it supply AI that other products or clients run on? **L3.**
4. Is it a service every product calls (keys, API, email, usage)? **L4.**
5. Is it for REKA's staff to run, support or measure AntaraX? **L5.**
6. Is it REKA's own, not an AntaraX product or service? **L6.**

If none fits, raise a new layer with the owner; do not add one silently.
