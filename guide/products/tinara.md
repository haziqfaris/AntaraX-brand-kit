# Tinara

Own-mark product in the Tide family. Closed pilot, invite-only. Malaysia-first B2B intelligence: which companies to sell to, why, and how to open the conversation.

## Name

- Write **Tinara**. Retire **"Tinara by REKA"**, "REKA Intelligence", "Tinara Intelligence Engine by REKA" and "Strategic Intelligence Platform v2.0".
- Website one-liner: as in 02. In-app line: "Know which companies to call next, and what to say."
- The description "scattered data into one clear next move" is retired (10 October 2026).

## Where it came from

- In REKA's June 2026 guidelines Tinara was the flagship of the Esoterik division, described as business intelligence, in maroon `#501643`, with a planned tinara.reka.re address.
- The current app began as a prototype (its metadata still reads "Remix: Remix: Remix: Tinara by REKA v1.5"); the first database migration is dated 14 July 2026.
- Redefined as B2B intelligence on 10 October 2026.
- No customers to name. Pilot partners are invited; REKA staff run it.

## Mark: the kerawang motif

**Tinara's logo is the BaTech kerawang motif itself**: the official drawing of a carved lattice tile with one path stepping through it, in Tinara's plum and gold.

**What kerawang is.** Ukiran kerawang is the pierced woodcarving set into Malay houses above windows and doors: a carved lattice that lets light and air through while screening the view. In BaTech it is the motif for "one path found in the noise".

**Why it fits Tinara.** The market is the lattice: thousands of companies, each one an opening. Tinara finds the path through it: who to call, why, and how to open the conversation.

| File | Use |
|---|---|
| `assets/products/tinara/tinara-mark.svg` | The mark: plum tile, white openings, gold path. 32px and up |
| `tinara-mark-small.svg` | The same construction with a 3×3 lattice, for 24px and below (favicon, small tiles) |
| `tinara-mark-light.svg`, `tinara-mark-small-light.svg` | Light tile, for navy and dark grounds |
| `tinara-empty-motif.svg` | Bunga raya, the Tide family flower, in the Tide pair: Tinara's empty-state picture (the logo is not repeated as a motif) |

- Built by `tools/build-product-motifs.mjs` from the official drawing; never redraw it by hand.
- Wordmark: "Tinara" in Poppins 600, navy or plum, beside the mark.
- Thinking motion: the openings light in turn until the path settles.

## Colour

Plum `#5B2B4A` leads, with gold `#D6A84F` for highlights and amethyst `#8B4E87` as a secondary. The gold keeps Tinara apart from Angka's plum.

| Role | Value |
|---|---|
| Primary action | plum `#5B2B4A`, tint `#E8E1E6`, dark `#321829` |
| Highlight | gold `#D6A84F` (never as text on white; with plum text) |
| Secondary | amethyst `#8B4E87` |
| REKA label | REKA orange `#FB9800`: remove |
| Dark surfaces | `#1A0515`, `#0F172A` today; move to the dark product ground `#071233` |
| Status | shared core |

## The AntaraX layer in Tinara

The credit line; BaTech: **bunga raya** (`tinara-empty-motif.svg`, Tide pair) as the picture in empty states (the kerawang is the logo), and the Tide Quiet edge band along the bottom of the sign-in panel (in place of the blur orbs) and under report headers; **the AI sparkle** beside every ranking and brief; intan eyebrows in plum; the app tile; the legal footer.

## Type

Today Inter (body) and Poppins (display). Target: Poppins only, JetBrains Mono for scores and counts.

## Credit lines

- Chrome: "Tinara · by AntaraX".
- Sign-in and report footers: "Tinara by AntaraX, from REKA."
- "Contact your REKA administrator" may stay while REKA staff hold operator access.

## Gaps in the app today

1. "by REKA" in the title, sidebar, sign-in, splash and reports (`index.html:8`, `components/Layout.tsx:66`, `components/AuthScreen.tsx:73, 176`, `components/SplashScreen.tsx:44, 85`, `components/ReportMemoView.tsx:773`).
2. No logo, favicon or manifest.
3. Inter as a second face; framework-default status colours.
4. Prototype names in metadata.

## Steps to converge

1. Credit lines and metadata name.
2. Wordmark lockup; Poppins only.
3. Shared status colours; dark surfaces to the dark product ground.
4. Put the kerawang mark in; add the app tile and manifest.

## Shared standards (13)

Audited against [13 Shared product standards](../13-shared-product-standards.md) on 11 October 2026. The full list is under Tinara in 13's audit; in short: `tinara.antarax.ai`, a support line and sender, plan names and currency, the shared email template, organisation and role names, the AXLE console, British spelling, `/guide` and `/help`, export names and footer, reduced motion and focus, tests.

## Open

- None.
