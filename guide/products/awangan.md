# AwanGan

Nalar family (Reason). **By arrangement**; not live with any customer yet (version 0.3.0; cell `sg1` up for testing only since 26 October 2026). AntaraX's own AI service in the cloud: reads documents, finds and masks personal data, and pulls the fields out of invoices and receipts. Layer **L3 Intelligence** (17).

## Brief

*Facts from `haziqfaris/AntaraX-AwanGan` (README, `docs/ARCHITECTURE.md`, `docs/decisions/`). Names, the one-liner and the question are in 02 and win over this sheet.*

**For whom.** AntaraX's own products first, then businesses and projects that want AI on their documents without sending them everywhere.

**The problem.** "How do we use AI without sending our data everywhere?"

**What it does.** AwanGan reads PDFs, scans and photos, finds and masks personal data, and pulls the fields out of invoices and receipts. Where a customer's policy allows it, masked text may go to an outside AI provider the customer chose, in the region they chose. Every call is counted and recorded, so each customer's use and cost can be shown.

**What it is not.** A chatbot or a website: other software calls it through `api.antarax.ai`. Not BumiNyata, its on-premises counterpart; neither needs the other. Not built for one client: it stays an open platform and each client is a tenant (AwanGan decision 0025, 30 October 2026).

**Claims.**
- May say: "Our own AI models, in the cloud."; that personal data is masked before anything leaves; that every call is recorded.
- Never say: that the models were trained from scratch, which open models sit underneath, sizes or benchmarks (02); customers or uptime before there are any.

**How it is sold.** By arrangement ("Talk to us"). A client project's monthly cost has a default ceiling, with tiers, in `docs/PRICING.md` (AwanGan decision 0030); the site shows tiers without prices.

**AXLE.** `axle-awangan.antarax.ai` (decision 0024; the standard address form since 11 November 2026, 13).

## Name

- Write **AwanGan**, one word, capital A and G. Credit: "AwanGan · by AntaraX".
- Family: Nalar (AntaraX Nalar on the Families page).

## Mark, colour and motif

**Mark: the cloud in orbit** (owner, 11 November 2026: "AwanGan should be cloud and orbit"). AwanGan is an **own-mark** product: a cloud (awan) in Nalar gold `#B48B02`, a navy ring round it and a sparkle cyan `#0CC4FB` moon on the ring. A gap is cut where the ring's front crosses the cloud and round the moon, so cloud and orbit stay two shapes down to 24px. The A with Cabang stays the Nalar family's mark and is no longer AwanGan's.

| File | Use |
|---|---|
| `assets/products/awangan/awangan-mark.svg` | Full colour, on white and near-white |
| `assets/products/awangan/awangan-mark-small.svg` | 24px and below: a heavier ring, a larger moon, a wider gap |
| `assets/products/awangan/awangan-mark-white.svg` | Navy and dark grounds: a white cloud, a gold ring, the cyan moon |
| `assets/products/awangan/awangan-mark-mono.svg` | One colour (`currentColor`) |
| `assets/product-logos/awangan.svg`, `-small.svg`, `-white.svg` | The same on the shared square, for tiles, lockups and lists |

- Lockup: the mark, then "AwanGan" and "by AntaraX" as set text (12). Never beside the AntaraX A.
- Not PLExyz Crowd's orbit: Crowd's orbit motif is a thin dashed ellipse with signal arcs. AwanGan's ring is solid and crosses a solid body.

**Colour: Nalar gold**, as Cebis Loom and AX Motion act in their family colours, with navy second (owner, 11 November 2026). Gold is 3.17:1 on white, so it acts and writes in `#8D6C01` (4.91:1), hovers in `#715702`, and writes on its tint `#F5ECD7` in `#574201`. On the dark ground the gold itself reads (5.8:1). Chart set: gold, then blue, orange, magenta, violet. Palette: `tokens/product-palettes.json` (`awangan`); tokens `color.product.awangan`, `--ax-awangan*`, and its shell slots.

**Motif: ketupat** (owner, 11 November 2026): a woven parcel with one square lit. The document stays woven shut and only the field that is needed shows. Nalar pair, `assets/products/awangan/awangan-motif.svg`; 72px in empty states. Its BaTech set is Nalar's sky and ground, leaning to the sky (`assets/batech/nalar-sky/`).

**Credit:** the standard lines (12): "AwanGan · by AntaraX" in chrome, "AwanGan by AntaraX, from REKA." on sign-in, first email and reports. Where AwanGan runs AI inside another product, that work carries the sparkle and no "Powered by AwanGan".

## Type

The shared core: Poppins, and JetBrains Mono with tabular figures for every number.

## Open

Nothing: its mark, palette, motif and credit were decided on 11 November 2026 (10).
