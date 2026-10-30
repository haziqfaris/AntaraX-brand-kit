# How AntaraX Brand Kit fits with the other REKA frameworks

AntaraX Brand Kit owns how AntaraX looks and talks: names, statuses, tokens, voice. This page is generated the same way in every REKA framework: it says who governs what, what each framework owns, and how AntaraX Brand Kit relates to each one. Checked on 30 October 2026.

## Who governs what

From RESAM's [repository map](https://github.com/haziqfaris/RESAM/blob/main/docs/repository-map.md) (AwanGan decision 0021, 25 October 2026). Gates, checks and decisions always stay in each product.

| When the work is about | It goes to |
|---|---|
| A client engagement or REKA product: steps, gates, documents, handover | Development Framework |
| Rules for any AI feature: AI cards, consequence floors, checks | Heuristiks |
| AntaraX's AI: provider keys, models, routing, call records, AI cost | AwanGan (client-owned work only with the client's written agreement) |
| The same AI on a client's own servers, offline | BumiNyata |
| API keys for callers, tenants, scopes, limits, usage rows | Lapisan, at api.antarax.ai |
| Data a business hands over: files in, clean tables out | Cebis Loom |
| Staff consoles (AXLE) and the AntaraX app shell | Dashboard Kit |
| How REKA or AntaraX looks and talks | REKA Brand Kit or AntaraX Brand Kit |
| Which framework governs what, and the shared registry | RESAM |

## Every framework, and how AntaraX Brand Kit relates to it

| Framework | Owns | AntaraX Brand Kit and it |
|---|---|---|
| [RESAM](https://github.com/haziqfaris/RESAM) | which framework governs what; the shared registry, module map and checklists | AntaraX Brand Kit names it; RESAM links to AntaraX Brand Kit |
| [Development Framework](https://github.com/haziqfaris/reka-development-framework) | the lifecycle from first contact to handover: steps 01 to 09, 12 gates and their signers, job sizes, documents | no direct link |
| [Heuristiks](https://github.com/haziqfaris/ai-framework-heuristiks) | the rules for every AI feature: AI cards, consequence floors, 23 layers, evaluation, the shared gateway and runtime | AntaraX Brand Kit links to it; Heuristiks names AntaraX Brand Kit |
| [AwanGan](https://github.com/haziqfaris/AntaraX-AwanGan) | AntaraX's AI control plane (provider keys, models, routing, call records, AI cost) and its cloud document AI | AntaraX Brand Kit links to it; AwanGan pins AntaraX Brand Kit |
| [BumiNyata](https://github.com/haziqfaris/AntaraX-BumiNyata) | the same AI installed on a client's own servers, offline | AntaraX Brand Kit names it; BumiNyata pins AntaraX Brand Kit |
| [Lapisan](https://github.com/haziqfaris/antarax-api) | keys for API callers, tenants, scopes, limits and usage rows; the gateway at api.antarax.ai, Console and AntaraX email | AntaraX Brand Kit links to it; Lapisan names AntaraX Brand Kit |
| [Cebis Loom](https://github.com/haziqfaris/antarax-cebis-loom) | data a business hands over: files in, clean tables and a data dictionary out | AntaraX Brand Kit links to it; Cebis Loom pins AntaraX Brand Kit |
| [Dashboard Kit](https://github.com/haziqfaris/AntaraX-Dashboard-kit) | AXLE staff consoles, the AntaraX app shell and the REKA client-project base | AntaraX Brand Kit links to it; Dashboard Kit pins AntaraX Brand Kit |
| [REKA Brand Kit](https://github.com/haziqfaris/reka-brand-kit) | how REKA looks and talks: mark, orange, type, voice, copy rules | AntaraX Brand Kit links to it; REKA Brand Kit links to AntaraX Brand Kit |
| [Mission Docs](https://github.com/haziqfaris/reka-mission-docs) | plain-language mission documents from problem to handover (candidate, not yet adopted) | no direct link |
| [KITAR AI Framework](https://github.com/haboque/ai-framework-kitar) | AI routing, model registry and checks for the KITAR app only | no direct link |
| [Ripple (tool)](https://github.com/haziqfaris/ripple-workflow) | turns a client interview into a process map and a first FRS | Ripple (tool) pins AntaraX Brand Kit |

## Kept in step

Gaps still open when the frameworks were rechecked on 30 October 2026:

- The guide says version 1.4; the tokens say 1.11.0.
- The README still calls Cebis Loom a closed pilot; Cebis 0.5.0 is built and has an app.

RESAM records every framework's version, stage and links in its [framework status](https://github.com/haziqfaris/RESAM/blob/main/docs/reference/framework-status.md), [connections](https://github.com/haziqfaris/RESAM/blob/main/docs/reference/connections.md) and [modules](https://github.com/haziqfaris/RESAM/blob/main/docs/reference/modules.md) pages. When this page and RESAM disagree, RESAM is updated first and this page follows.
