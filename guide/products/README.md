# Product brand sheets

One sheet per product: its name, where it came from, its mark, its colours, how it credits AntaraX and REKA, and what has to change in its app to match this kit. The rules that apply to every product are in [12 Brand architecture](../12-brand-architecture.md). Names, one-liners and statuses are in [02 Products and families](../02-products-and-families.md) and win over anything here.

Sheets were written on 11 October 2026 from an audit of each product's repository. File references point into those repositories.

| Product | Kind | Mark | Accent | Status | Sheet |
|---|---|---|---|---|---|
| Yara | A-mark | A + Ripple icon | Ripple `#08B0B3` | Main (lead) | [yara.md](yara.md) |
| Janka | Own-mark | The J that never closes (restyled) | Janka cyan `#0CC4FB` | Main | [janka.md](janka.md) |
| PLExyz Grid | Own-mark, REKA platform | Force field, shard and zone grid (kept) | Grid violet `#2C09B2` | Main | [plexyz.md](plexyz.md) |
| PLExyz Trace | Own-mark, REKA platform | To be drawn in the PLExyz system | PLExyz | Module inside Janka | [plexyz.md](plexyz.md) |
| PLExyz Crowd, Flow, Transit, Site, Ward, Yard | Own-mark, REKA platform | PLExyz system | PLExyz | Concepts (Crowd has a pilot app) | [plexyz.md](plexyz.md) |
| AX Frame | A-mark | A + Frame icon | Frame `#074AF8` | Closed pilot | [frame.md](frame.md) |
| Angka | Own-mark | The sheet stack (kept) | Angka plum `#6B3F6B` | Closed pilot | [angka.md](angka.md) |
| Tinara | Own-mark | Kerawang (new) | Tinara plum `#5B2B4A`, gold | Closed pilot | [tinara.md](tinara.md) |
| Loom | A-mark | A + Loom icon | Loom `#4904B3` | Closed pilot, no app yet | this page |
| Motion | A-mark | A + Motion icon | Motion `#FC5D04` | Closed pilot, no app yet | this page |

**Loom and Motion** have no app yet. They follow the A-mark rules in 12 as they are built: the family lockup from `assets/families/`, AntaraX blue for actions, the family colour as accent. Motion carries no claims of deployments, customers, pricing or certification (03).

**Lapisan** is the platform under every product (lapisan.antarax.ai), written "Lapisan by AntaraX". It uses the AntaraX A and the dark blueprint for developer material. It is not a product and gets no sheet.

## How a sheet is laid out

Copy this for a new product.

```
# <Product>
One-line summary: kind, family, status.

## Name           how to write it, taglines in use, names to stop using
## Where it came from   dated facts with sources; the customer-facing heritage line, if any
## Mark           files, what stays the product's own, any restyle, variants, minimum size
## Colour         accent, tint, dark, action colour; what changes from today
## Type           faces in use against the shared core
## The AntaraX layer   the eight touchpoints from 12, for this product
## Credit lines   exactly what the product says about AntaraX and REKA
## Gaps in the app today   audit findings with file references
## Shared standards (13)   the product's row of the audit in 13
## Steps to converge       ordered, smallest first
## Open           items waiting on the owner (also listed in 11)
```
