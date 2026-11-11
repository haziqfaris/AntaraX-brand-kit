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

**Still to design** (owner, 11 November 2026: "Nalar products need to have proper branding"; 11, question 27). Until then:

- README and AXLE use the Nalar icon (`assets/families/nalar-icon.svg`) and Nalar gold `#B48B02` (dark `#7E6105`, tint `#F9EED4`). Two products may not share one A with one icon for good, so this is a stand-in, not a mark.
- No product palette in `tokens/product-palettes.json` yet; its AXLE uses the AXLE standard's own colours.
- No BaTech motif yet; empty states use words only.

## Type

The shared core: Poppins, and JetBrains Mono with tabular figures for every number.

## Open

In 11: AwanGan's own mark, palette and motif (question 27), and Nalar's BaTech composition.
