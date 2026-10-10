# AntaraX brand kit

The single reference for how AntaraX looks, sounds and is organised. Every AntaraX product, the antarax.ai website, decks, campaigns and anything written about AntaraX should follow this kit.

AntaraX is the AI product line of **REKA Inisiatif Sdn Bhd** (Kuala Lumpur, Malaysia). REKA has its own kit: [haziqfaris/reka-brand-kit](https://github.com/haziqfaris/reka-brand-kit). Where the two meet, [guide/01-positioning.md](guide/01-positioning.md) sets the boundary.

## Start here

| If you are… | Read |
|---|---|
| Writing copy, a page or a campaign | [01 Positioning](guide/01-positioning.md), [02 Products and families](guide/02-products-and-families.md), [03 Voice and claims](guide/03-voice-and-claims.md) |
| Designing anything | [04 Logo](guide/04-logo.md), [05 Colour and type](guide/05-colour-and-type.md), [06 BaTech illustration](guide/06-batech-illustration.md), [07 Interface rules](guide/07-interface-rules.md) |
| Building the website | [08 Website, SEO and conversion](guide/08-website-seo-conversion.md), plus `tokens/` |
| Building a product UI | [05 Colour and type](guide/05-colour-and-type.md), [09 Product app alignment](guide/09-product-app-alignment.md), `tokens/` |
| Checking what was decided, and when | [10 Decisions log](guide/10-decisions-log.md), [11 Open questions](guide/11-open-questions.md) |

## The one-minute version

- **Promise:** Put intelligence to work.
- **What we are:** AI products for business. A product company, not a consultancy.
- **Main products:** Yara (jobs and work orders), Janka (inventory forecasting), PLExyz Grid (warehouse and yard space).
- **Closed pilots,** each run as part of REKA's **Managed AI** service: Frame, PLExyz Crowd, Angka, Tinara, Loom, Motion.
- **Six families:** Ripple (Operate), Edge (Perceive), Frame (Understand), Loom (Orchestrate), Motion (Navigate), Tide (Optimize).
- **Look:** AntaraX blue `#0459F7`, navy text, white ground, Poppins and JetBrains Mono, and the BaTech corak (Malaysian batik rebuilt from technology).
- **Voice:** plain language for non-technical buyers. Problem first, product second. Never invent customers, numbers or maturity.

## What is in this repository

```
guide/        the brand guide, numbered in reading order
tokens/       tokens.json and tokens.css: colours, type, radius, spacing, motion
assets/logo/  the A mark (blue and white) and the full lockup
assets/families/  the five family icons and famicons.json (paths for the families animation)
photography/  PHOTO_BRIEF.md: shot list and image-AI prompts for every photo slot on antarax.ai
reference/    the master logo file, and the source strategy, design and research documents the guide was built from
```

## How to use and change this kit

1. **This kit wins.** If a product repo, the website or a deck disagrees with this kit, the kit is right, unless the owner has since decided otherwise. Then update the kit first, in the same piece of work.
2. **Record decisions.** Every owner decision goes in [10 Decisions log](guide/10-decisions-log.md) with its date. Unresolved questions go in [11 Open questions](guide/11-open-questions.md).
3. **Copy tokens; don't retype them.** Products and sites import or copy `tokens/tokens.css` (or read `tokens.json`). If a value changes, change it here and then in each consumer.
4. **Reference documents are history, not instructions.** `reference/` keeps the documents this kit was built from. Where they disagree with `guide/`, the guide is current.

## Where it is used

| Consumer | Repository |
|---|---|
| antarax.ai website (prototype and live build) | `haziqfaris/antarax-ai` (`prototype/site`, `site/`) |
| Yara | `haziqfaris/yara` |
| Janka | `haziqfaris/janka-inventory-intelligence` |
| PLExyz Grid, PLExyz Crowd | `haziqfaris/plexyz-grid`, `haziqfaris/plexyz-crowd` |
| Frame (AXF) | `haziqfaris/axframe` |
| Angka | `haziqfaris/angka` (live at antarax.ai/angka) |
| Tinara | `haziqfaris/tinara` |
| REKA (parent brand) | `haziqfaris/reka.re`, `haziqfaris/reka-brand-kit` |

Version 1.0, 10 October 2026.
