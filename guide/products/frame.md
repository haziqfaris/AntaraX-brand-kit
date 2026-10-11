# AX Frame

A-mark product, and the one product that shares its family's name (Frame, Understand). Closed pilot while the owner validates it. Live at frame.antarax.ai. A manual-first ledger of every subscription, domain, login and renewal a business runs on.

## Brief

*Who AX Frame serves, what it does and what it may claim. Names, the one-liner and the question are in 02; features and prices live in the product's own repo, whose `CLAUDE.md` holds its product rules. Checked against `haziqfaris/axframe` at `692d57b` (11 October 2026). Open questions are in 11.*

**For whom.** Buyer: the founder, operations lead or agency owner at a small company, startup or agency that has outgrown a spreadsheet of subscriptions. User: whoever looks after the company's domains, subscriptions, logins and renewals.

**The problem.** "What does our business pay for, and when does it renew?" Domains, subscriptions, AI bills and logins pile up faster than anyone can remember, so renewals lapse unnoticed.

**What it does.** AX Frame keeps one record of every domain, subscription, AI tool and login a business runs on. It warns by email before something renews and keeps totals in their own currency. It maps how those services fit together, so the business knows what it depends on.

**What it is not.**
- A discovery tool: no scanning, no shadow-IT detection, no guessed connections.
- A payments tool: it never pays, and it never cancels anything with a provider.
- A password store: it records where a password is kept, never the password.

**Claims.**
- May say:
  - Email reminders before a renewal is charged (built).
  - Totals by currency, never silently converted (product rule).
  - Pointers, never secrets (product rule, enforced in the app and the database).
  - Lookups, imports and AI suggestions wait for a person to approve them (product rule).
- Never say: that it discovers or scans anything; customers, usage numbers or savings; the name of an AI model; enterprise IT asset management; payments, consolidated billing or e-signing; future stages as if they were live.

**How it is sold.** Closed pilot, run as part of REKA's Managed AI service. Call to action: Request pilot access. People may sign up in the app itself: it stays a closed pilot because REKA watches every account (owner, 11 October 2026). Inside the app there is a capped free plan and one paid plan, priced by currency.

**Lines and areas.** In the app: Insight, Health, Projects, Estate (Map, Ledger, Stacks & Systems), Money (Spend, Savings, Renewals, Vendors & Groups) and Connect your AI. On the website: Atlas, Layers, Orbit, Pulse, Ledger, Lens (working names; only Ledger is a real screen).

**Source of truth.** `haziqfaris/axframe`: `CLAUDE.md` (product rules and non-goals), `src/features/shell/pageMeta.ts` (screens). Pricing: `src/lib/billing/stripe.ts`, `src/lib/limits.ts`.

## Name

- The product is **AX Frame**, everywhere: in the app, in emails, on its own site and beside other products. "Frame" alone is too common: Nutanix sells a cloud desktop product listed simply as "Frame", and Frame.io and Framer are other well-known software names, so "Frame" alone is hard to find in search and weak as a mark.
- Credit: "AX Frame · by AntaraX", the same line as every product.
- The family stays **AntaraX Frame** (Understand) on the Families page. The short code AXF stays internal and in key prefixes.
- Replace "AntaraX Frame" as the product name in the app title, manifest, emails ("AntaraX Frame <notifications@...>") and landing page. The domain antaraxframe.com can stay.
- Working lines (Atlas, Layers, Orbit, Pulse, Ledger, Lens) are ways of seeing one world, not products (02).

## Where it came from

- Started from an older `antarax-frame` build; the current app's earliest decisions are dated 4 July 2026 and it first went live on 5 July 2026 (`AXF-PLATFORM-BRIEF.md:202, 274-276`), before AntaraX launched.
- It was built on REKA's styling of the time (REKA blue `#0062FB`, REKA orange accent), which is why its colours differ from AntaraX's.
- Claims: Frame never auto-discovers, scans networks or detects shadow IT (03).

## Mark

- The AntaraX A with the Frame icon (an F inside four corner brackets) in its centre: `assets/products/frame/frame-mark.svg` (from `public/brand/mark-padded.svg`). Animated versions in the app: `mark-breathe.svg`, `mark-morph.svg`.
- The app's "breathing cube halo" is a product motif, not a logo; it may stay inside the product.
- The social-share image uses a plain blue rotated square (`src/app/opengraph-image.tsx:23`). Use the mark.

## Colour

| Role | Today | Target |
|---|---|---|
| Primary action | `#0062FB` (REKA's former blue) | AntaraX blue `#0459F7` |
| Accent | orange `#FB9800` "REKA signal accent" | Frame `#074AF8`, tint `#E2EAFE`, dark `#0533A8`; orange gives way to halo indigo `#524FE9` (owner, 11 October 2026). The app's primary `#0062FB` becomes Frame blue `#074AF8` |
| Status, type | shared core | aligned |

Note that AntaraX blue and the Frame accent are close. Use the Frame accent for selection, charts and identity moments, and AntaraX blue for actions, so both stay distinct by role.

## Type

Poppins and JetBrains Mono, "every number, always" in mono. Aligned.

## The AntaraX layer in AX Frame

AX Frame is A-mark, so it is AntaraX already. It keeps its breathing cube halo and adds BaTech: **intan** (`frame-motif.svg`, Frame pair) as the picture in empty states, and the Frame **Corners** composition (14) on the sign-in panel, splash and report covers: white on Frame blue (`frame-corner-tl-white.svg`, `-br-white.svg`) on a blue panel, Quiet on a white one, with the Frame drift band under email headers.

## Credit lines

- Chrome: "AX Frame · by AntaraX". On sign-in, About and billing, "Built by REKA" becomes "AX Frame by AntaraX, from REKA."
- "courtesy of REKA" (`src/features/billing/BillingScreen.tsx:107`) may stay only if REKA really pays for something there.
- Footer: add the legal line.

## Gaps in the app today

1. Primary blue `#0062FB` and orange accent (`src/app/globals.css:5-17`; `CLAUDE.md:68-73` calls these non-negotiable, so that file needs updating with them).
2. The product is named "AntaraX Frame" in the title, manifest, emails and landing; rename to AX Frame.
3. Social image without the mark.
4. Operator console named "AXLE · REKA operator console" (internal, fine as long as customers never reach it).

## Steps to converge

1. Swap `#0062FB` for `#0459F7` and drop the orange accent, updating the repo's `CLAUDE.md` design tokens in the same change.
2. Rename to AX Frame everywhere customers see it; put the mark on the social image.
3. Credit lines; intan in empty states and the Frame Corners on sign-in; the AI sparkle.

## Shared standards (13)

Audited against [13 Shared product standards](../13-shared-product-standards.md) on 11 October 2026. The full list is under AX Frame in 13's audit; in short: `frame.antarax.ai` instead of vercel.app, the sender `AX Frame <frame@antarax.ai>`, no personal address on legal pages, `US$`, plan names, the template for invites, "AXLE · AX Frame", `/guide` and `/help`, an axe check.

## Open

- None.
