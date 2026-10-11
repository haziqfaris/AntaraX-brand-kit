# Yara

A-mark product in the Ripple family. Main product and the portfolio lead. Live at yara.antarax.ai. Yara is the **reference implementation** for every other product app: it already follows the shared core.

## Name

- Write **Yara**. Never "YARA" or "Yara Ripple" (retired 7 October 2026).
- Credit: **"by AntaraX"**, as for every product. Its family, Ripple, shows on antarax.ai, not in the credit.
- In-app tagline: "Simple work tracking, from order to done." (`src/lib/brand.ts:12`). Website one-liner: as in 02.
- Stop using: "Yara for BRIC Operations" and "YARA: Project & Workforce Intelligence by REKA" (old reka.re landing page) in anything customer-facing. "Yara AXLE" is internal.

## Where it came from

- The idea traces to REKA's pandemic automation work (2020 to 2021): most operational work still needs people, and the value is in seeing every task live (REKA story). The reka.re playbook asks for this origin to be confirmed before it is used as a Yara example, so **do not publish it yet**.
- The current app was first built for a Malaysian metal fabricator (app brief dated 10 July 2026; requirements signed 19 August 2026; go-live 30 September 2026). Do not name the customer until the owner confirms permission (11, question 9).
- Yara was already under AntaraX at launch (23 July 2026). It is the first subscription success.

## Mark

- The AntaraX A with the Ripple icon in its centre: `assets/products/yara/yara-mark.svg` (from `public/brand/antarax-ax-ripple-centered.svg`). Blue `#0459F7` A, teal `#08B0B3` Ripple wave.
- The product name sits beside it as live text (`src/components/brand/BrandLockup.tsx`). Do not bake the name into the SVG.
- Splash: the A opens and the Ripple icon fades in. Long AI work: the "thinking" animation (04).

## Colour

| Role | Value |
|---|---|
| Primary action | teal `#098284`, hover `#05686A` (closer to Ripple teal than AntaraX blue; full palette in 14). AntaraX blue stays the focus ring |
| Accent | Ripple `#08B0B3`, tint `#D9F3F2`, dark `#0B6E72` |
| Status | shared core |

The app's own tokens (`design-system/tokens.css`) use tint `#E1F6F6`, dark `#078F92`, blue strong `#0246C9`, blue tint `#E7EEFE`. These are near enough; align them with `tokens/tokens.css` when the file is next touched.

## Type

Poppins and JetBrains Mono. Aligned. (The mono font's variable is still named `plexMono`; internal only.)

## Credit lines

- Chrome: "Yara · by AntaraX".
- Sign-in and splash: "Yara by AntaraX, from REKA."
- REKA as operator: "Managed by REKA for your organisation" (`src/components/settings/LookupsPanel.tsx:53`) is true and may stay; use British spelling.

## The AntaraX layer in Yara

Yara is A-mark and already carries most of the layer. BaTech: **awan larat** (`yara-motif.svg`, Ripple pair, approved by the owner) as the picture in empty states: the old scroll redrawn as a circuit trace, Yara's job today of carrying people's work into digital. When Yara automates, its automation screens take **sungai** (`yara-automation-motif.svg`). Riak was not used because it repeats the Ripple wave in Yara's logo (14); the Ripple **Rings** composition (`assets/families/compositions/ripple-rings.svg`) in a corner of the sign-in panel and splash; the Ripple drift band under email headers. The AI sparkle (Yara's own `design-system/brand/spark-x.svg` is the source of `assets/ai/spark-x.svg`) beside AI intake and suggestions.

## Gaps in the app today

1. The byline reads "Yara — powered by AntaraX Ripple" (`src/lib/brand.ts:11`). Change it to "Yara · by AntaraX", here and in the sidebar, login, splash, email header and README.
2. US spelling "organization" in UI copy (`LookupsPanel.tsx:53`).
3. `design-system/brand/README.md` keeps its own product registry, which is out of date (it lists Janka as "Inline 'J' tile (no asset yet)"). Point it at this kit instead of keeping a copy.
4. No "from REKA" trust line on sign-in.

## Steps to converge

1. Fix the byline separator and spelling.
2. Replace the local product registry with a link to `guide/products/`.
3. Add the sign-in trust line, awan larat in empty states and the Ripple Rings on sign-in, and the AI sparkle on AI suggestions.

## Shared standards (13)

Audited against [13 Shared product standards](../13-shared-product-standards.md) on 11 October 2026. The full list is under Yara in 13's audit; in short: organisation and role names, the sender address, the email credit line, plan names, "AXLE · Yara", British spelling, export names, focus and reduced motion, an axe check.

