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
| Tinara | Own-mark | The signal (new); kerawang is its motif | Tinara garnet `#7A1E3C`, gold | Closed pilot | [tinara.md](tinara.md) |
| Cebis Loom | A-mark | A + Loom icon | Loom `#4904B3` | Managed service, by arrangement (replaces AX Loom, 25 October 2026) | [loom.md](loom.md) |
| AX Motion | A-mark | A + Motion icon | Motion `#FC5D04` | Closed pilot, no app yet | [motion.md](motion.md) |

**AX Motion** has no app yet, and Cebis Loom's app is early. Their sheets set out what is decided and what has to happen before an app is built. Like every product, they act in their own colour, with AntaraX blue as the focus ring.

**Every sheet opens with a brief:** who the product is for, the problem, what it does in three sentences, what it is not, what it may and may never claim, how it is sold, its lines and areas, and where the facts live. The brief is the part to read before writing about a product. It changes rarely; features and prices change in the product's own repository, which the brief names.

**Lapisan** is the platform under every product (lapisan.antarax.ai), written "Lapisan by AntaraX". It uses the AntaraX A and the dark blueprint for developer material. It is not a product and gets no sheet.

## How a sheet is laid out

Copy this for a new product.

```
# <Product>
One-line summary: kind, family, status.

## Brief          for whom, the problem, what it does (three sentences), what it is not,
                 claims (may say / never say), how it is sold, lines and areas, source of truth

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
