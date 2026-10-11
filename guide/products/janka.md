# Janka

Own-mark product in the Tide family. Main product. Live at janka.antarax.ai. AI inventory forecasting for manufacturers.

## Name

- Write **Janka**. The drawn wordmark is in capitals; in text it is always "Janka".
- Website one-liner: as in 02 ("Know what you'll need before you run out.").
- **In-app tagline needs replacing.** "Track. Forecast. Unlock." uses "unlock", which is on the words-to-avoid list (03), and the app sets it as uppercase mono ("TRACK · FORECAST · UNLOCK"), which 07 forbids. Proposed: **"Track. Forecast. Reorder."** in Poppins, sentence case.
- **PLExyz Trace** (RFID tags, zones, last-seen locations) is a PLExyz product built inside Janka. Inside Janka write it "PLExyz Trace", and keep Janka's own pages Janka's. See the PLExyz sheet.

## Where it came from

- Built at REKA before AntaraX launched. The rebuild brief v6 is dated 19 July 2026 and replaces an earlier version with a dark-sidebar layout (`Janka_Rebuild_Brief_Compiled.md:3, 26`).
- The repository still credits it "A product of REKA Inisiatif Sdn Bhd" (`README.md:7`).
- The marketing brief (verified 21 July 2026) says there are no confirmed customers yet. Do not imply any.
- Customer-facing heritage line (optional): "Janka was built at REKA for manufacturers. It is now part of AntaraX."

## Mark

- **The J that never closes**, with a row of signal ticks. The hook stops short ("it keeps sensing"); the bar floats clear of the stem; one orange spark marks the gap; the third tick is orange and the sixth cyan. Keep all of this.
- Generated from the app's `src/brand/paths.ts`, which holds the source geometry.
- **Files** (colours refreshed, same paths): `janka-mark.svg`, `janka-mark-white.svg`, `janka-wordmark.svg`. Earlier colours: `janka-mark-previous.svg`.

| Part | Before | Now |
|---|---|---|
| Hook, ticks, letters | ink `#142028` | AntaraX navy `#0B1B4F` |
| Spark, third tick | REKA orange `#FB9800` | sparkle orange `#F47B3D` |
| Bar, sixth tick | cyan `#0FC0D6` | sparkle cyan `#0CC4FB` |

- Variants: full, reversed (white letterform on navy, ticks keep their colours), mono (`currentColor`). The app already has all three (`src/brand/colors.ts`).
- Minimum: 24px high on screen. Never stretch on one axis.

## Colour

| Role | Today | Target |
|---|---|---|
| Primary action | REKA orange `#FB9800` | Janka dark `#076C8A` |
| Accent | cyan `#06B6D4` | Janka cyan `#0CC4FB`, tint `#DDF7FE`, dark `#076C8A` |
| Status | `#22C55E` / `#EAB308` / `#EF4444` | shared core |
| Neutrals | `#1A1A1A` text | shared core (navy, body) |

Why move off orange: it is REKA's brand colour, it is almost the same as the warn colour (`#F79009`), so every primary button reads as a warning, and Motion's family orange is nearby. Janka's cyan is close to Yara's teal; keep the two products' accents apart on shared screens.

## Type

Poppins and JetBrains Mono (`src/main.tsx:10-15`). Aligned. The AXLE console loads Poppins only; add the mono for numbers.

## Credit lines

- Chrome: "Janka · by AntaraX".
- Sign-in, splash, reports: "Janka by AntaraX, from REKA."
- Replace "A product of REKA Inisiatif Sdn Bhd" and "Built by REKA Inisiatif" with the lines above and the legal line.
- Contact text naming hello@reka.re may stay while REKA answers it.

## Gaps in the app today

1. No AntaraX credit anywhere in the UI.
2. Primary colour is REKA orange (`src/styles/tokens.ts:13-49`).
3. Tagline uses a banned word and uppercase mono (`src/auth/LoginScreen.tsx:58`, `src/auth/BrandPanel.tsx:67`, `src/layout/Sidebar.tsx:99`).
4. Sign-in panel is a dark brown-green gradient (`BrandPanel.tsx:49`); use navy `#0B1B4F` or the dark product ground.
5. No PWA manifest or app icons; add the shared app tile (12).
6. The logo source files the code mentions are not in the repo; this kit now holds them.

## The AntaraX layer in Janka

Janka keeps its J, ticks, splash and thinking animations. AntaraX adds (12): the credit line; BaTech: **padi** (`janka-motif.svg`, Tide pair) as the picture in empty states, and the Tide Quiet edge band along the bottom of the sign-in panel (in place of the dark gradient) and under email headers; **the AI sparkle** beside every forecast and drafted order; intan eyebrows in Janka cyan; the app tile; the legal footer.

## Steps to converge

1. Tagline and credit lines.
2. Swap the logo colours in `src/brand/colors.ts` (three values: ink `#0B1B4F`, orange `#F47B3D`, cyan `#0CC4FB`).
3. Move the primary colour to Janka dark and the status colours to the shared core.
4. Sign-in panel to navy; add the app tile and manifest.

## Open

- The cyan accent and the tagline "Track. Forecast. Reorder." (11).
