# 09 Product app alignment

Each AntaraX product is its own app with its own codebase. They should read as one family: the same blue, the same type, the AntaraX A with the family icon, and the family colour as the product accent. This page records where each app stands (surveyed from the repositories on 10 October 2026) and what to converge on. Changes to a product's UI happen in that product's repo, on the owner's go-ahead.

## Shared rules for every product UI

- **Type:** Poppins for UI, JetBrains Mono for every number (tabular figures).
- **Primary action:** AntaraX blue `#0459F7`.
- **Product accent:** the family colour (and its tint and dark) for selection, charts, badges and the product's identity moments.
- **Status colours** only for real signal: ok `#12B76A`, warn `#F79009`, fault `#F04438`.
- **Logo:** the AntaraX A with the family icon, or "[Product] by AntaraX". Sign-in and splash screens use the family splash animation (04 Logo); long AI work uses the "thinking" animation.
- **Copy:** the voice and claims rules in 03 apply inside products too (errors say what failed; no "Oops").
- **Characters:** Seth Linton may appear in products only per the REKA character guide (dark grounds, real states, never decoration).

## Where each app stands

| Product | Family accent (target) | What the app uses today | Gap | Recommendation |
|---|---|---|---|---|
| **Yara** | Ripple `#08B0B3` | Teal `#08B0B3` (dark `#078F92`, tint `#E1F6F6`), blue `#0459F7` (strong `#0246C9`), success `#12B76A`, Poppins + mono | Aligned | Keep. Reference implementation for the others. |
| **Frame (AXF)** | Frame `#074AF8` | Primary `#0062FB`, accent orange `#FB9800` (sparingly), canvas `#FBFCFE`, Poppins + JetBrains Mono, status ok/warn/fault as above | Blue is a close but different shade; orange accent is REKA's orange | Converge primary to `#0459F7`, use `#074AF8` as the Frame accent; decide whether the orange accent stays (it is REKA's brand colour). See 11. |
| **Angka** | Tide `#E9579D` | Brand plum `#6b3f6b` (soft `#f3eaf7`), warm accent `#f4efe8`, chart series blue/orange, Geist + Poppins | Different accent and an extra typeface | Move the brand accent to Tide (`#E9579D`, dark `#803056`), keep Poppins only. Angka's landing page at antarax.ai/angka stays as is until then. |
| **Janka** | Tide `#E9579D` | Not surveyed (no token file found) | Unknown | Audit against this kit. |
| **PLExyz Grid** | Edge `#12B76A` | Not surveyed | Unknown | Audit. |
| **PLExyz Crowd** | Edge `#12B76A` | Not surveyed | Unknown | Audit. Its claims rules (03) apply in-product. |
| **Tinara** | Tide `#E9579D` | Not surveyed | Unknown | Audit. |

## Admin console

**AXLE** is REKA's internal operations console across products. It is never named or shown to customers.
