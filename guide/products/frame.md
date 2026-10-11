# Frame

A-mark product, and the one product that shares its family's name (Frame, Understand). Closed pilot while the owner validates it. Live at frame.antarax.ai. A manual-first ledger of every subscription, domain, login and renewal a business runs on.

## Name

- In the app, emails and its own site: **AntaraX Frame** (short code AXF, internal and in key prefixes). Beside other products in AntaraX copy: **Frame** (02). Proposed as the one exception to "products are named on their own" (12, 11).
- Never "AX Frame" in customer copy (the landing FAQ uses it: `src/features/landing/Landing.tsx:28-30`).
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
| Accent | orange `#FB9800` "REKA signal accent" | Frame `#074AF8`, tint `#DCE6FE`, dark `#042988`; orange dropped |
| Status, type | shared core | aligned |

Note that AntaraX blue and the Frame accent are close. Use the Frame accent for selection, charts and identity moments, and AntaraX blue for actions, so both stay distinct by role.

## Type

Poppins and JetBrains Mono, "every number, always" in mono. Aligned.

## Credit lines

- The name already carries AntaraX. On the About and billing screens, "Built by REKA" becomes "AntaraX Frame, from REKA." (proposed, 12).
- "courtesy of REKA" (`src/features/billing/BillingScreen.tsx:107`) may stay only if REKA really pays for something there.
- Footer: add the legal line.

## Gaps in the app today

1. Primary blue `#0062FB` and orange accent (`src/app/globals.css:5-17`; `CLAUDE.md:68-73` calls these non-negotiable, so that file needs updating with them).
2. "AX Frame" in the FAQ.
3. Social image without the mark.
4. Operator console named "AXLE · REKA operator console" (internal, fine as long as customers never reach it).

## Steps to converge

1. Swap `#0062FB` for `#0459F7` and drop the orange accent, updating the repo's `CLAUDE.md` design tokens in the same change.
2. Fix "AX Frame"; put the mark on the social image.
3. Credit lines once confirmed.

## Open

- Confirm "AntaraX Frame" as the product's full name in the app (11).
