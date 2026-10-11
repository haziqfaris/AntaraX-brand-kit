# Angka

Own-mark product in the Tide family. Closed pilot, free while the pilot runs. Its own landing page lives at antarax.ai/angka (a separate Worker; link to it, do not replace it). A finance workspace for business owners who are not accountants.

## Name

- Write **Angka**. Core line: "Every number has a story." Other lines in use: "Simpler together.", "Business clarity for what's next.", "Less busywork. More forward." Use the 02 one-liner on antarax.ai; inside the product, pick one line and retire the rest.
- **Lapis** is part of Angka: "Lapis by Angka". Its API is "Lapis API". **Lapisan** is the AntaraX platform, "Lapisan by AntaraX". Lapis never becomes a master brand (Angka Canon).
- Write "AntaraX", not "AntaraX AI" (`components/site/reka/frame.tsx:171, 209`).

## Where it came from

- Canonical brief 8 September 2026; canon revised 24 and 27 September; feature freeze for pilot businesses 3 October 2026.
- The 8 September brief set Angka up as "a standalone REKA product brand, not an AntaraX sub-product" (`ANGKA_CANONICAL_PRODUCT_BRIEF.md:17`). Later code calls it "part of AntaraX". **This kit settles it: Angka is an AntaraX product with its own mark, endorsed "by AntaraX".** Update the brief.
- Angka arrived after AntaraX launched, but with a complete identity of its own (mark, palette, canon), which is why it is own-mark.

## Mark

- **The sheet stack**: three rounded sheets tilted 12 degrees, a calm face on the top sheet, two spark strokes. `assets/products/angka/angka-mark.svg`; Lapis's peach version `lapis-mark.svg`.
- **No restyle needed.** It is already flat, one deep ink (plum `#4E2C4F`, face `#3A2438`), and uses no REKA colours. It meets every rule in 12.
- Canon rules that stay: the face never appears beside bad news; no gradients, glass, glow or blobs.
- Wordmark: "Angka" in Poppins 600, plum or navy.

## Colour

| Role | Value |
|---|---|
| Primary action | Angka plum `#6B3F6B` |
| Accent | plum, tint `#EAE4EA`, dark `#3B233B`; soft fill `#F3EAF7` may stay |
| Lapis accent | peach `#FFB493`, ink `#A24A1E`, inside Angka only |
| Ground | paper `#FAF7F2` (allowed as Angka's own near-white) |
| Text | shared core navy and body, replacing `#2D2A26` over time |
| Status | Angka's evidence states (confirmed, inferred, missing) are a product concept and may keep their own colours; real ok/warn/fault use the shared core |
| Dark mode | exists (`app/globals.css:201`); move its ground towards the dark product ground `#071233` |


## Type

Today: Poppins, Caveat (handwritten asides) and Geist Mono. Target: Poppins and JetBrains Mono only (shared core). Replace Geist Mono with JetBrains Mono for numbers; drop Caveat. `DESIGN.md:56` still says Geist Sans; the canon moved to Poppins on 27 September.

## Credit lines

- Chrome: "Angka · by AntaraX".
- Sign-in, invite emails, the digest: "Angka by AntaraX, from REKA." Replaces "Angka, by REKA Inisiatif Sdn Bhd." (`lib/mail/invite-mail.ts:38`).
- Footers: the legal line, replacing "REKA Inisiatif Sdn Bhd" and "Run by REKA Inisiatif Sdn Bhd" as product credits.
- reka.re pages that call it "Angka by REKA" move to "Angka by AntaraX" (with REKA's own page framing).

## The AntaraX layer in Angka

Angka keeps its face, paper and plum. AntaraX adds: BaTech: **congkak** (`angka-motif.svg`, Tide pair) as the picture in empty states (never next to the face with bad news), and the Tide Quiet drift band under the digest email header and along the sign-in panel; the AI sparkle beside every AI match, categorisation and draft (Angka's evidence states stay as they are); intan eyebrows in plum; the legal footer.

## Gaps in the app today

1. "by REKA" credits in sign-in footer, invite email and reka.re pages.
2. "AntaraX AI" naming.
3. Caveat and Geist Mono.
4. Several taglines at once.

## Steps to converge

1. Credit lines and "AntaraX".
2. Swap Geist Mono for JetBrains Mono; remove Caveat.
3. Update the canonical brief's "standalone REKA brand" line.

## Shared standards (13)

Audited against [13 Shared product standards](../13-shared-product-standards.md) on 11 October 2026. The full list is under Angka in 13's audit; in short: the sender `angka@antarax.ai`, the support line instead of holla@reka.re and a personal address, the email footer credit, plan names in ladder order, `US$`, a plain error page, the AXLE look, an axe check.

## Open

- None.
