# PLExyz

REKA's spatial intelligence platform, built on AntaraX and credited **"by AntaraX"** like every product. Own-mark product line, shown on antarax.ai in the Edge family. Owned by REKA's Harmonik division. **PLExyz Grid** is the flagship and a main product (free for one facility, live at grid.antarax.ai); **PLExyz Trace** is built as a module inside Janka; the rest are concepts. PLExyz is the oldest name in the portfolio.

Sources: the PLExyz product line overview and brief, and the PLExyz Grid brand and theme reference (`assets/products/plexyz/plexyz-grid-brand-theme.md`, pixel-verified against the source logo). Where this sheet and those disagree, they win on PLExyz's own design; this sheet wins on how PLExyz meets AntaraX.

## The line

Brand statement: **"Spatial intelligence, made readable."** Design principle: **"Same space. Same entity. Different behaviour."**

| Product | Focus | For | Status |
|---|---|---|---|
| **PLExyz Grid** | Spatial capacity and operations: layouts, cargo placement, occupancy | Ports, warehouses, logistics operators | Flagship, built, live |
| **PLExyz Trace** | RFID tags, zones and readers, where each tagged item was last seen | Manufacturers, warehouses | Built, as a module inside Janka |
| PLExyz Flow | Movement and behaviour: foot traffic, dwell time | Malls, retail, commercial property | Concept |
| PLExyz Transit | Routes and connectivity | Cities, transport operators | Concept |
| PLExyz Crowd | Occupancy and density, congestion, event safety | Stadiums, events, large venues | Concept in the line brief; a closed-pilot app exists (see below) |
| PLExyz Site | Site and asset intelligence | Construction, industrial | Concept |
| PLExyz Ward | Healthcare spatial intelligence | Hospitals | Concept |
| PLExyz Yard | Vehicle and staging intelligence | Vehicle yards, ports, automotive logistics | Concept |

Concepts are proposed directions, not launches. Never show them as available (03, claims rule 4).

## Briefs

*Who each PLExyz product serves, what it does and what it may claim. Names, one-liners and questions are in 02; features and prices live in each product's own repo. Checked against `haziqfaris/plexyz-grid` at `7e1b9a4` (11 October 2026) and `haziqfaris/plexyz-crowd` at `ed08e96` (21 July 2026). Open questions are in 11. PLExyz Trace is briefed inside Janka.*

### PLExyz Grid

**For whom.** Buyer: the operations lead at a third-party logistics firm, port, bonded warehouse or container freight station that manages storage space. User: operations managers, supervisors and operators; tenants, through their own portal.

**The problem.** "What is where, and where should the next load go?" Most operators track space and cargo on spreadsheets, whiteboards and memory, with no live view of how full a site is.

**What it does.** PLExyz Grid draws a warehouse or yard as it really is, from the site plan down to each bay, and shows what is stored where. It tracks cargo from arrival to dispatch, with incidents and regular floor checks; paid plans add bookings, tenants, movements and analytics. Before cargo is placed, it checks the bay against the site's rules and warns or blocks.

**What it is not.**
- Only for ports: port features are add-ons.
- Fed by live sensors: weights and measurements are entered by hand today.
- A working simulation engine, yet.

**Claims.**
- May say:
  - Free for one facility (plan data).
  - Bays shown on the site's own layout (built).
  - Cargo, incidents and floor checks tracked (built).
  - Every placement checked against the site's rules (built).
  - Tenants see only their own bays and bookings (built, an add-on).
- Never say: AI placement suggestions as live; "retrieval distance"; the flagship customer's name; prices; customer counts, uptime or quotes; analytics trends or simulation as real; live weighbridge or sensor feeds; exports; Malay.

**How it is sold.** Main product. Call to action: Book a demo. The free plan has no AI. Paid plans are a subscription that REKA sets per organisation and invoices; prices are not published. REKA reviews each new workspace before it goes live. Plans move to Seed (free), Nova, Galaxy and Quantum (13).

**Lines and areas.** In the app: Operations, Commercial, Monitoring and System. Add-ons: Tenant portal, AI pack, Port add-ons. No website lines.

**Source of truth.** `haziqfaris/plexyz-grid`: `PRODUCT_BRIEF.md`, `PROGRESS.md`, `apps/grid/src/App.tsx`, `docs/ai/AI-usage-framework.md`. Plans: `packages/shared/src/entitlements.ts`.

### PLExyz Crowd

**For whom.** Buyer: a facilities or workplace lead, an operations manager, or a finance lead weighing a lease renewal; offices first. User: the facilities team, reading live occupancy and the monthly report.

**The problem.** "How many people are actually in this building right now, and do we need all this space?" Leases are signed on headcount and assumption, and nobody learns how the space is really used.

**What it does.** PLExyz Crowd shows how many people are in each space of a building, live, and how that changes through the day and the week. It works out what unused space and empty, powered rooms cost, and puts it in a monthly report you can forward. Every number says whether it is estimated or measured, and a space with no data says so instead of showing zero.

**What it is not.**
- A camera system: no video, no faces, no identities.
- A health or vital-signs product.
- Reading a building's own Wi-Fi yet: the pilot runs on simulated signals.

**Claims.**
- May say:
  - No cameras; no video ever exists (how it senses).
  - It counts people per space and never identifies anyone (product rule).
  - Every number is marked estimated or measured (built).
  - Space and energy cost, worked out from your own figures (built).
  - A monthly report and CSV export (built).
  - The demo is simulated (a required disclosure).
- Never say: accuracy percentages; customers, logos or case studies; vital signs; existing Wi-Fi, through-wall sensing, falls or safety alerts as available; money figures from the simulated site; Malaysian data residency (it is hosted in Singapore); AXLE; awards.

**How it is sold.** Closed pilot, run as part of REKA's Managed AI service: REKA sets it up on site, keeps it running and improves it with the customer. Call to action: Request pilot access. No waitlist and no sign-up. Pricing is not published; the drafts pair a monthly software fee with hardware sold separately. A pilot is a stage, not a plan. For events, use the Mole line (02).

**Lines and areas.** In the app: Live, Alerts, Analytics, Reports, Devices and the client view. Hardware: PLExyz Crowd Node (simulated today) and PLExyz Gateway (planned). Planned: reading a building's Wi-Fi controller, and a safety module.

**Source of truth.** `haziqfaris/plexyz-crowd`: `README.md`, `app/lib/nav.ts`, `docs/plexyz-crowd-landing-page-brief.md` (its claims and pricing sections are out of date: follow this brief and 03). The repo's last commit is 21 July 2026.

## Name

- Always **PLExyz**: capital P, L, E; lower-case xyz. Products are "PLExyz Grid", "PLExyz Trace" and so on.
- Stop using in anything customers see: "JWI" and "JohorPort Warehouse Intelligence" (Grid's working name), "PLExyz WiFi" (Crowd's old name), "SPECTRA OS", and **AXLE** (the Crowd app is currently branded AXLE).
- **"PLExyz Edge Gateway" is renamed "PLExyz Gateway"** (owner): "Edge" is an AntaraX family name.

## Where it came from

- A "Plexyz project" is mentioned on reka.re in March 2022. The archived PLExyz product page is dated 5 January 2023, with its own logo, and a "PLExyz by REKA" PDF followed in January 2024.
- Published REKA posts (October and November 2023) describe PLExyz as audience analytics in venues, counting people and measuring dwell time without identifying anyone. It sat in REKA's Harmonik division, in purple.
- Frost & Sullivan **recognised** REKA's crowd analytics work (never "award").
- PLExyz Grid started in July 2026 as a single-site warehouse prototype for its flagship customer, and was named and given its mark on 13 July 2026.
- Customer-facing heritage line: "PLExyz began at REKA, measuring how people use real spaces. Grid brings the same idea to warehouses and yards." The flagship customer and pricing appear only once the owner clears them for public copy (11, question 23).

## The visual system (kept as it is)

Every PLExyz mark is the same three parts. Only the middle one changes per product.

| Part | What it is | Rule |
|---|---|---|
| **Force field** | The isometric cube boundary, drawn as a pointed-top hexagon | Identical size and proportion in every product |
| **Core entity** | The floating faceted obelisk (the shard) | Identical in every product; centred on the vertical axis |
| **Spatial context** | What the product reads | Grid: a 2×2 zone grid. Flow: a path across the grid. Transit: a route between points. Crowd: scattered entities on the grid. Site: stacked layers. Ward: walled rooms. Yard: parking lanes. Trace: a tag and its last-seen trail |

- **The PLExyz master mark** (approved 11 October 2026): the force field and shard on an empty floor, the space and the entity with no behaviour. `plexyz-master-disc.svg` (on a violet disc) and `plexyz-master-mark.svg` (bare).
- **Every product's mark is drawn and approved** (11 October 2026, `tools/build-logos.mjs`): `plexyz-crowd-mark.svg`, `plexyz-trace-mark.svg`, `plexyz-flow-mark.svg`, `plexyz-transit-mark.svg`, `plexyz-site-mark.svg`, `plexyz-ward-mark.svg`, `plexyz-yard-mark.svg`. Each keeps Grid's force field and shard and puts its own spatial context on the floor. Concepts stay concepts: a mark is not a launch.
- **Line purple:** Grid's violet `#2C09B2` for the whole line (owner, 11 October 2026); the line brief's `#6040CC` stays only as PLExyz Crowd's product accent until Crowd has its own theme.

### PLExyz Grid mark

- Files: `assets/products/plexyz/plexyz-grid-mark.svg` (device mark), `plexyz-grid-wordmark.svg`, `plexyz-grid-lockup-horizontal.svg`, `plexyz-grid-lockup-centered.svg`, from the owner on 11 October 2026; full rules in `plexyz-grid-brand-theme.md`.
- **In AntaraX colours** (owner, 11 October 2026). The shape is unchanged; the zones move to their AntaraX equivalents so Grid sits with the other logos: teal `#4FD7D1` to sparkle cyan `#0CC4FB`, orange `#FD9001` to sparkle orange `#F47B3D`, pink `#FD4F85` to Tide pink `#E9579D`, lavender `#CBB6FA` to an indigo tint `#B9B8F5`. The owner's files stay as `*-original.svg`.
- Shard: top `#8542ED`, left `#6A2EF0`, lower left `#4407FB`, right `#2C09B2`; outlines `#2C09B2`, 7 units throughout.
- Zones: north `#B9B8F5`, west `#0CC4FB`, east `#F47B3D`, south `#E9579D` (were `#CBB6FA`, `#4FD7D1`, `#FD9001`, `#FD4F85`). The app's zone and chart colours follow.
- Wordmark: "PLExyz" bold in `#2C09B2`; "Grid" with each letter in a zone colour (the new ones) and a 1px outline.
- Minimum 48px for the full-colour mark; the solid variant below that.
- Open in Grid's own reference: shard proportion (15.5% measured against 30% in the spec sheet); the north zone is a deliberate addition.

### One purple

The line brief gave PLExyz purple `#6040CC`; the Grid mark and app use violet `#2C09B2`. Decided (owner, 11 October 2026): the line takes Grid's violet, which every PLExyz mark already uses.

## The AntaraX layer in PLExyz

Grid keeps everything above. AntaraX adds (12):

1. **Credit:** "PLExyz Grid · by AntaraX" in the chrome; "PLExyz Grid by AntaraX, from REKA." on sign-in and reports.
2. **BaTech:** Grid's motif is **petak** (`grid-motif.svg`, Edge pair: spaces in a real layout); Crowd's is **orbit** (`crowd-motif.svg`, Edge pair: signals counted, never faces). Each as the picture in its empty states. **Grid takes no full-panel BaTech for now** (owner, 11 October 2026): its sign-in carries one Edge spot in a corner (14). Crowd and the other PLExyz products take the Edge set when they need it.
3. **The AI sparkle** beside placement recommendations ("Suggested slot").
4. **Thinking motion:** the shard and the four zones drift out of step while a placement is computed.
5. **Shared core:** already Poppins and JetBrains Mono. Move status colours to the shared set.
6. **Intan eyebrows** in violet.
7. **The app tile** with the device mark.
8. **Footer:** the legal line.

## Colour

| Role | Grid | Other PLExyz products |
|---|---|---|
| Primary action | violet `#2C09B2`, hover `#3A14D6` | the line's violet `#2C09B2` until each has a theme (Crowd: `#6040CC`) |
| Data and charts | the four zone colours, never invented colours | the product's spatial-context colours |
| Ground and text | `#F7F7FA`, `#FFFFFF`; text `#1C1B2E`, `#75758C` | |
| Status | shared core (ok `#12B76A`, warn `#F79009`, fault `#F04438`) | shared core |

## Gaps in the apps today

**Grid**
1. No AntaraX credit; "by REKA" on the user-guide cover (`apps/grid/public/guide/user-guide.html:52`).
2. Uppercase eyebrow with an em dash: "PLEXYZ GRID — WAREHOUSE INTELLIGENCE" (`apps/grid/src/components/Auth/LoginPage.tsx:42`).
3. The dashboard's stat cards are top-bordered in zone colours, which 07 rules out for every product UI ("no coloured top-border accent"). Use a zone-coloured icon tile or chart mark instead (11).
4. The user guide uses a different palette (accent `#1A5FB4`); a leftover orange `#F27D26` still ships.
5. No manifest or app tile.

**Crowd** (the existing app, `haziqfaris/plexyz-crowd`)
1. The shipped app is branded "AXLE · REKA Operations Console" (`app/app/layout.tsx:18-19`, `app/app/login/page.tsx:44`), with the AXLE icon and "REKA · OPERATIONS" eyebrows. AXLE is internal; customers must never see it. **Most urgent fix in the portfolio.**
2. Stock framework favicon. Its mark is now drawn: `plexyz-crowd-mark.svg`, force field and shard over scattered entities.
3. Its focus (building occupancy from Wi-Fi) differs from the line brief's (stadiums and event safety). Settle which Crowd is (11).

**Trace**
1. Lives inside Janka as a setting and an RFID page. It is a PLExyz product: in Janka it reads "PLExyz Trace", and its page carries the PLExyz Trace mark once drawn.

## Steps to converge

1. Crowd: rename the app to PLExyz Crowd and remove AXLE from every screen and the print footer.
2. Grid: credit lines, the eyebrow, the guide cover.
3. Grid: petak in empty states; the AI sparkle on suggestions; status colours; the app tile. No BaTech on Grid's screens for now.
4. Grid: replace top-bordered stat cards.
5. Put the Crowd and Trace marks in their apps; add the PLExyz master mark file.

## Shared standards (13)

Audited against [13 Shared product standards](../13-shared-product-standards.md) on 11 October 2026. The full list is under PLExyz Grid and PLExyz Crowd in 13's audit; in short: for Grid: one account word, shared roles, `grid.antarax.ai`, plan names, money and dates, invite and reset emails, the AXLE look, exports, focus outlines; for Crowd: rename from AXLE, `crowd.antarax.ai`, organisation and members, error copy, report header, light first, reduced motion.

## Decided (11 October 2026)

- **One purple:** Grid's violet `#2C09B2` for the line.
- **Crowd is about occupancy and space use in buildings,** which is what is built. Event safety comes later, through the planned safety module pack.
- **"PLExyz Edge Gateway" becomes "PLExyz Gateway".**
- **Where PLExyz is sold:** antarax.ai leads, with "Book a demo" for Grid; the conversation is REKA's consultative sale; reka.re links to antarax.ai.
- **Grid's top-bordered stat cards are replaced** with a zone-coloured icon tile.
- **The master mark** is the proposal: the force field and shard on an empty floor, on a violet disc (`plexyz-master-disc.svg`) and bare (`plexyz-master-mark.svg`).
