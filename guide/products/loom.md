# Cebis Loom

A-mark product in the Loom family (Synthesize). **Managed service, by arrangement** (owner, 25 October 2026). Cebis Loom replaces AX Loom: AntaraX's ETL platform for corporates, turning the data a business already has into clean tables and files for reports and AI. *Cebis* is Malay for a scrap or fragment: the pieces a business's data is in.

## Brief

*Who Cebis Loom serves, what it does and what it may claim. Rests on `haziqfaris/antarax-cebis-loom` (README, docs/DIRECTION.md, docs/PACKAGES.md, docs/METHODS.md, decisions 0001 to 0013), checked 25 October 2026, and the owner's decision of 25 October (10).*

**For whom.** Corporates and growing businesses whose data sits in spreadsheets, system exports and scanned documents, each in its own shape, and who want a quick return on it. The buyer is an operations, finance or data lead; the user reads the clean tables and the report.

**The problem.** "How much more could we get from the data we already have?" The data was paid for once, collecting it, and then sits unused because nobody can join it up.

**What it does.** Messy files go in (spreadsheets, CSV and system exports, scans read by OCR). Out come clean typed tables, a data dictionary, personal data tokenised, a report, an Excel workbook and files ready for AI. Every figure is computed, not written by a model. It runs online for the customer, or on the customer's side beside BumiNyata. Synthetic data comes later.

**What it is not.**
- Automation, AI agents or workflows: automation runs on Ripple (10, 10 October 2026).
- A self-serve product today: it is sold as a managed service, run by AntaraX's team.

**Claims.**
- May say: the one-liner, the question and the paragraph above; "managed service, by arrangement"; "ETL" one layer deeper than the headline; packages as tiers without prices.
- Never say: privacy, anonymisation or compliance guarantees (Cebis decision 0003, AGENTS rule 7), including "PDPA compliant"; customers, data volumes or accuracy; integrations or connectors that do not exist; synthetic data as available; prices.

**How it is sold.** Managed service, by arrangement: "Talk to us" to the contact form (`/contact?product=loom&intent=managed-ai`). Fixed-fee services first (Cebis docs/DIRECTION.md); the package prices in docs/PACKAGES.md are recommendations for the owner, never page copy.

**Lines and areas.** Drop (the command line and the local app), Cebis online (sign-in by email link at cebis.antarax.ai, decision 0013); the cloud cell with its API is planned.

**Source of truth.** `haziqfaris/antarax-cebis-loom` for what it does; this sheet and 02 for the name and claims.

## Name

- Write **Cebis Loom** on the website and in sales material (owner, 25 October 2026); the app credits "Cebis · by AntaraX" (Cebis decision 0001). The family stays **Loom**.
- Tagline: "Your business data, cleaned and ready." Family motto: "Weave it together."
- Stop using: "AX Loom" (retired 25 October 2026); "Loom" on its own for the product; Loom for agents, workflows or automation; the verb "Orchestrate"; "waitlist".

## Where it came from

- REKA's older brand guidelines listed Loom as a data-ingest part of AntaraX, and early antarax.ai teasers used "AX Loom" for synthetic data. AX Loom became the product's name on 11 October 2026.
- An earlier playbook made Loom the automation name. On 10 October 2026 automation moved to Ripple and Loom became data synthesis, with synthetic data back in it, as a closed pilot (10).
- The AX Loom A-mark was drawn on 11 October 2026; it serves Cebis Loom until Cebis has its own.
- On 24 October 2026 the data platform was named Cebis (Cebis decision 0001), and on 25 October the owner made Cebis Loom the Loom product, replacing AX Loom, and sold it only as a managed service (10).
- No customer-facing heritage line. Do not write one.

## Mark

- `assets/product-logos/loom.svg` (square, use this one); source `assets/products/loom/loom-mark.svg`; family icon `assets/families/loom-icon.svg`.
- The AntaraX A in AntaraX blue with the Loom icon, woven bars, in its centre in Loom violet. The logo is never the motif (tenun).
- Minimum height 24px. App tile, splash and thinking motion as for every A-mark (12, 14).
- Not drawn yet: a white version and a one-colour version.

## Colour

Cebis Loom acts in its own colour (12, 14). Use the roles from `tokens/product-palettes.css` (`--loom-*`), never raw scale steps.

| Role | Value |
|---|---|
| Action, hover, pressed | `#4904B3`, `#311775`, `#200C52` |
| Accent | `#4904B3` |
| Tint, subtle, border | `#F6F6FF`, `#EBEBFF`, `#D8D6FE` |
| Secondary | navy `#0B1B4F` |
| Dark mode accent (on `#071233`) | `#8870FF` |
| Focus ring | AntaraX blue `#0459F7` |
| BaTech pair (motifs only) | `#4904B3`, dark `#33027D`, ground `#EEE6FA` |

## Type

The shared core: Poppins, and JetBrains Mono with tabular figures for every number.

## The AntaraX layer

- Credit line "Cebis · by AntaraX"; the AI sparkle beside AI work; the sparkle morphing into the Loom logo while it thinks.
- BaTech: the motif is **tenun**, the weave itself, in empty states. The family set is **Thread** (`assets/batech/loom/`) and the Quiet bands are `assets/families/bands/loom-quiet-*.svg`.

## Credit lines

| Where | Line |
|---|---|
| Product chrome | "Cebis · by AntaraX" |
| Sign-in, splash, first email, reports | "Cebis Loom by AntaraX, from REKA." |
| Legal footer, terms, invoices | "AntaraX, a product line of REKA Inisiatif Sdn Bhd." |

## Before the app is built

1. Draw the tenun motif file (`assets/products/loom/loom-motif.svg`); add Cebis Loom to `tools/build-product-motifs.mjs`.
2. Draw the white and one-colour marks.
3. Choose Cebis Loom's loaders and its one signature moment (14, 12).
4. When the app exists: follow 13 (address, sender `Cebis <cebis@mail.antarax.ai>` (Cebis decision 0012), Reply-To support, `/guide`, `/help`, the Rise ladder) and add Cebis Loom's row to the audit.

## Open

In 11: Cebis Loom's own mark and palette (question 26), and how synthetic data may be described for privacy when it comes.
