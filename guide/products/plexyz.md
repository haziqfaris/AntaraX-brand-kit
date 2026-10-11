# PLExyz (Grid and Crowd)

Own-mark product line in the Edge family. **PLExyz Grid** is a main product (free for one facility), live at grid.antarax.ai. **PLExyz Crowd** is a closed pilot. PLExyz is the oldest name in the portfolio.

## Name

- Always **PLExyz**: capital P, L, E; lower-case xyz. Never "Plexyz", "PLEXYZ" or "PleXYZ", including in labels.
- The two products are **PLExyz Grid** and **PLExyz Crowd**. A new PLExyz product needs an owner decision.
- Grid in-app line: "Every zone, one field of view." Crowd: "Know how your building is really used. No cameras." (02).
- Stop using in anything customers see: "JWI" and "JohorPort Warehouse Intelligence" (Grid's working name), "PLExyz WiFi" (Crowd's old name), "SPECTRA OS", and **AXLE** (Crowd's app is currently branded AXLE; 03 forbids showing it).
- **Rename "PLExyz Edge Gateway"** (a Crowd hardware name) to "PLExyz Gateway": "Edge" is an AntaraX family name. "PLExyz Crowd Nodes" may stay.

## Where it came from

- A "Plexyz project" is mentioned on reka.re in March 2022. The archived PLExyz product page is dated 5 January 2023, with its own logo, and a "PLExyz by REKA" PDF followed in January 2024.
- Published REKA posts (October and November 2023) describe PLExyz as audience analytics: a sensor in a venue that counts people, finds popular spots and measures dwell time without identifying anyone. It sat in REKA's Harmonik division, in purple.
- The sensing lineage goes back to REKA's work with Murata from 2019 and the 2016 car's sensors (Edge's "oldest bloodline", 02). Frost & Sullivan **recognised** the crowd analytics work (never "award").
- **PLExyz Grid** started in July 2026 as a single-site warehouse prototype for a port operator, was renamed and given its mark on 13 July 2026, and became multi-tenant.
- **PLExyz Crowd** continues the venue-sensing idea using the Wi-Fi signals already in a building. Its reference deployment uses simulated sensing at REKA's office.
- Customer-facing heritage line: "PLExyz began at REKA, measuring how people use real spaces. Grid brings the same idea to warehouses and yards." Add a year or customer names only after the owner confirms them (11, question 9).

## Mark

- **The PLExyz shard**: a faceted crystal standing inside a hexagonal outline. For Grid it stands on an isometric grid of four zones. Keep the hexagon, shard and grid.
- Current: `assets/products/plexyz/plexyz-grid-mark.svg` (identical to Grid's favicon and the antarax.ai menu icon).
- **Proposed restyle** (colours only, same paths): `plexyz-grid-mark-proposed.svg`.

| Part | Today | Proposed |
|---|---|---|
| Hexagon and outlines | violet `#2C09B2` | unchanged |
| Back zone | lavender `#CBB6FA` | unchanged |
| Left zone | teal `#4FD7D1` | sparkle cyan `#0CC4FB` |
| Right zone | orange `#FD9001` | sparkle orange `#F47B3D` |
| Front zone | pink `#FD4F85` | sparkle emerald `#12B76A` (also Edge's colour) |
| Shard facets | `#8542ED`, `#6A2EF0`, `#4407FB` | sparkle indigo `#7171EA`, sparkle purple `#524FE9`, violet `#2C09B2` |

- Wordmark: "PLExyz Grid" in Poppins 600, one colour (navy, or white on dark). Today "Grid" is set letter by letter in four colours (`apps/grid/src/components/Shared/Logo.tsx:100-115`); stop that.
- White variant: already in the app for sign-in screens.
- **PLExyz Crowd needs a mark:** the same hexagon and shard, standing on rings (the orbit motif from 06) instead of the grid. To be drawn; until then Crowd uses the wordmark "PLExyz Crowd" alone, never the AXLE hub-and-spokes icon.

## Colour

| Role | Grid today | Crowd today | Both, target |
|---|---|---|---|
| Primary action | violet `#2C09B2` | REKA orange `#FB9800` | PLExyz violet `#2C09B2` |
| Accent | zone colours | greens | violet, tint `#E1DDF4`, dark `#180562` |
| On dark | n/a | orange | lavender `#CBB6FA` with navy text |
| Ground | `#F7F7FA` | green-black `#0E1310` | Grid: white; Crowd: dark product ground `#071233` |
| Status | `#1A7A4A` / `#B8720A` / `#C0392B` | `#E2574C` | shared core |

Grid has a leftover orange `#F27D26` (`AUDIT_2026-09-21.md:72`); remove it.

## Type

Both use Poppins and JetBrains Mono. Aligned.

## Credit lines

- Chrome: "PLExyz Grid · by AntaraX", "PLExyz Crowd · by AntaraX".
- Sign-in and reports: "PLExyz Grid by AntaraX, from REKA." (proposed, 12)
- Keep true operator lines: "A REKA team member checks every new workspace before it goes live." Replace "by REKA" on Grid's user-guide cover and Crowd's "REKA · OPERATIONS" eyebrows.

## Gaps in the apps today

**Grid**
1. No AntaraX credit; "by REKA" on the user-guide cover (`apps/grid/public/guide/user-guide.html:52`).
2. Uppercase eyebrow with an em dash: "PLEXYZ GRID — WAREHOUSE INTELLIGENCE" (`apps/grid/src/components/Auth/LoginPage.tsx:42`).
3. Multicoloured wordmark letters.
4. User guide uses a different palette (accent `#1A5FB4`).
5. No manifest or app tile.

**Crowd**
1. The shipped app is branded "AXLE · REKA Operations Console" (`app/app/layout.tsx:18-19`, `app/app/login/page.tsx:44`), with the AXLE icon and "REKA · OPERATIONS" / "REKA · CLIENT" eyebrows. This breaks the claims rule in 03 and must change before any customer sees it.
2. Stock framework favicon and boilerplate SVGs in `public/`.
3. REKA orange accent; green-black dark theme.

## Steps to converge

1. Crowd: rename the app to PLExyz Crowd and remove AXLE from every screen and the print footer. This is the most urgent item in the portfolio.
2. Both: credit lines; Grid's eyebrow and wordmark.
3. Grid: apply the restyled mark colours once approved (`Logo.tsx` colour maps), drop the stray orange, add the app tile.
4. Crowd: move to PLExyz violet and the dark product ground; draw the Crowd mark.

## Open

- Approve the restyled Grid colours and the Crowd mark brief (11).
- Rename "PLExyz Edge Gateway" (11).
