# 09 Product app alignment

Each AntaraX product is its own app with its own codebase. They should read as one family: **a shared AntaraX core and one accent of the product's own**. This page records where each app stands (surveyed from the repositories on 10 and 11 October 2026) and what to converge on. The full rules are in [12 Brand architecture](12-brand-architecture.md); each product's gaps and steps are in its [product sheet](products/README.md). Changes to a product's UI happen in that product's repo, on the owner's go-ahead.

## Shared rules for every product UI

- **Type:** Poppins for UI, JetBrains Mono for every number (tabular figures).
- **Primary action:** AntaraX blue `#0459F7` in A-mark products (Yara, Frame, Loom, Motion); the product's own accent, or its dark shade, in own-mark products (12).
- **Product accent:** one per product (the family colour for A-mark products, the product's own colour for own-mark products), with its tint and dark, for selection, charts, badges and identity moments. Values in `tokens/` under `color.product`.
- **Status colours** only for real signal: ok `#12B76A`, warn `#F79009`, fault `#F04438`.
- **Logo:** the product's own mark (own-mark products) or the AntaraX A with the family icon (A-mark products), with the AntaraX credit (12).
- **The AntaraX layer:** every product adds the eight touchpoints in 12 (credit line, product motif, AI sparkle, thinking motion, shared core, intan eyebrow, app tile, footer) while keeping its own style. A-mark products use the family splash animation on sign-in and splash screens (04 Logo) and the "thinking" animation for long AI work; own-mark products use their own equivalents (Janka has both).
- **Copy:** the voice and claims rules in 03 apply inside products too (errors say what failed; no "Oops").
- **Characters:** Seth Linton may appear in products only per the REKA character guide (dark grounds, real states, never decoration).

## Where each app stands

Audited from each repository on 11 October 2026. Details and file references are in the product sheets.

| Product | Kind | Accent (target) | What the app uses today | Biggest gaps |
|---|---|---|---|---|
| **Yara** | A-mark | Ripple `#08B0B3` | A + Ripple mark, blue actions, teal accent, Poppins + mono, "powered by AntaraX Ripple" | Aligned; byline becomes "Yara · by AntaraX". Em dash in the byline; local product registry out of date. Reference implementation. |
| **AX Frame** | A-mark | Frame `#074AF8` | A + Frame mark; primary `#0062FB`, REKA orange accent; Poppins + mono; named "AntaraX Frame" | Converge primary to `#0459F7`, drop the orange; rename to AX Frame. |
| **Janka** | Own-mark | Janka cyan `#0CC4FB` | Own J mark (restyle approved); primary REKA orange `#FB9800`; Poppins + mono; credited only to REKA | No AntaraX credit; orange primary; tagline uses "unlock" in uppercase mono. |
| **PLExyz Grid** | Own-mark (REKA platform) | Grid violet `#2C09B2` | Own mark, kept as it is; violet primary; zone colours for data; Poppins + mono; credited to REKA | No AntaraX credit; uppercase eyebrow; top-bordered stat cards. |
| **PLExyz Crowd** | Own-mark | PLExyz violet `#2C09B2` | Branded "AXLE · REKA Operations Console", AXLE icon, orange on green-black | Shows the internal codename AXLE to customers. Most urgent fix in the portfolio. |
| **Angka** | Own-mark | Angka plum `#6B3F6B` | Own sheet-stack mark, plum, paper ground; Poppins, Caveat, Geist Mono; "by REKA" credits | Credits; extra faces. The mark already meets 12. Replaces the earlier recommendation to move Angka to Tide pink. |
| **Tinara** | Own-mark | Tinara plum `#5B2B4A`, gold | Placeholder "T" tile, plum and gold, Inter + Poppins, "Tinara by REKA" | No logo (kerawang mark drawn); "by REKA" throughout; second typeface. |

## Admin console

**AXLE** is REKA's internal operations console across products. It is never named or shown to customers.
