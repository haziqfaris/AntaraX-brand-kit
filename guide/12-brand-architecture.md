# 12 Brand architecture

How AntaraX, its products and REKA carry their names, marks and colours, and how they relate to one another. Each product's details are in [products/](products/README.md). The visual version, with every mark and lockup, is [`guide/product-brands.html`](product-brands.html).

## Why this page exists

Most AntaraX products are older than the AntaraX brand. AntaraX launched as a product line on 23 July 2026. By then:

- **PLExyz** had been a REKA product with its own logo since at least January 2023 (archived reka.re product page), first as crowd analytics for venues;
- **Janka, PLExyz Grid and Tinara** had their own names and identities and were credited "by REKA";
- **Angka** followed in September 2026 with its own mark and canon, also credited to REKA.

Customers and partners know REKA, and some know these products. The AntaraX name is new. So AntaraX does not replace the product brands. It **endorses** them, and lends them one shared way of looking and sounding.

## The model: endorsed products (owner decision, 11 October 2026)

```
REKA Inisiatif Sdn Bhd            the company: R&D, Managed AI, legal entity
 └─ AntaraX                       the product line: endorses every product
     ├─ Families                  capability endorsements (Ripple, Edge, Frame, Loom, Motion, Tide)
     └─ Products                  the brands customers buy
         ├─ own-mark products     keep their own logo, restyled to AntaraX rules
         └─ A-mark products       use the AntaraX A with their family icon
```

- **The product is the brand the customer buys.** Lead with the product name and its plain outcome (03 Voice).
- **AntaraX is the maker's mark.** Every product carries "by AntaraX". AntaraX owns the shared look (type, neutrals, status colours, interface rules), the website, the platform (Lapisan) and the API (`api.antarax.ai`).
- **Families stay endorsements.** They group products on antarax.ai and appear as "Powered by AntaraX Ripple"-style lines. They never replace a product's own mark.
- **REKA is the company behind AntaraX.** It appears as the legal line, as the operator of Managed AI, and, during the transition, in a short trust line (see "Credit lines").

### Two kinds of product

| Kind | Who | Mark | Action colour | Accent |
|---|---|---|---|---|
| **Own-mark** | PLExyz Grid, PLExyz Crowd, Janka, Angka, Tinara | The product's own logo, restyled to the rules below | The product accent (its dark shade if the accent fails 4.5:1 with white) | The product's own colour |
| **A-mark** | Yara, Frame, Loom, Motion, and every new product by default | The AntaraX A with the family icon in its centre (04 Logo) | AntaraX blue `#0459F7` | The family colour |

A product is own-mark when it arrived with an identity people already recognise, or when the owner decides it serves a market that needs its own face. Everything else starts as A-mark. Moving a product from one kind to the other is an owner decision, recorded in 10.

## Restyling an own-mark logo

"Keep the logo, adopt the AntaraX style" means the **shape and idea stay; the finish changes.** Recognition is what the restyle protects, so nobody should be able to say the logo changed, only that it looks sharper next to AntaraX.

1. **Keep the silhouette and the idea.** The J that never closes, the PLExyz shard over its grid, the Angka sheets. Do not redraw the geometry.
2. **Highlights come from the AntaraX sparkle.** The five colours inside the A are the shared bloodline: purple `#524FE9`, orange `#F47B3D`, cyan `#0CC4FB`, emerald `#12B76A`, indigo `#7171EA`. A product's bright accents move to the nearest sparkle colour.
3. **One ink.** Letterforms and outlines use AntaraX navy `#0B1B4F`, or the product's own deep colour where the mark is built on it (PLExyz violet `#2C09B2`, Angka plum `#4E2C4F`).
4. **Flat fills.** No gradients, glows, shadows or bevels. Separation lines inside a mark may stay where they are part of the drawing.
5. **Never REKA's colours.** REKA orange `#FB9800` and REKA blue belong to REKA. A product mark that uses them moves to the sparkle orange `#F47B3D` or AntaraX blue.
6. **Wordmark.** The product name in Poppins 600, in its proper casing (Janka, PLExyz Grid, Angka, Tinara), one colour (navy, or white on dark). A custom-drawn wordmark that already exists (Janka) may stay, recoloured. No multicoloured letters.
7. **Variants.** Every own-mark has full colour, white (for navy, blue or photo grounds) and one-colour (`currentColor`) versions.

Proposed restyles for Janka and PLExyz Grid are in `assets/products/`, named `*-proposed.svg`. They change only colours, so the geometry is byte-for-byte the product's own. They stay proposals until the owner approves them (11 Open questions).

## Lockups

### Product lockup (own-mark and A-mark alike)

```
[mark]  Janka                    [mark]
        by AntaraX                Janka
                                by AntaraX
   horizontal                    stacked
```

- **"by AntaraX" is always set text,** Poppins 500, about 45% of the product name's size, in body `#3B4469` (white at 80% on dark). Never put the AntaraX A next to an own-mark: one mark per lockup.
- **A-mark products** may use "Powered by AntaraX [Family]" instead, where the family is the story (Yara: "Powered by AntaraX Ripple").
- **Separator in one line:** a middle dot, "Janka · by AntaraX". Never an em dash.
- **Clear space:** half the mark's height on every side.
- **Minimum size:** mark 24px high on screen; under 120px of lockup width drop "by AntaraX" and show the mark and name only.

### App icon tile

The same tile for every product, so the portfolio reads as one family on a phone's home screen and in browser tabs:

- white tile, corner radius 22% of its width; the mark centred at 62% of the tile width;
- maskable variant (PWA): the mark at 50% so it survives circular crops;
- dark variant: navy `#0B1B4F` tile with the white mark;
- favicon: the mark alone, no tile, when it reads at 16px; otherwise the tile.

## Colour in product apps (owner decision, 11 October 2026)

**Shared core, own accent.** Every product app shares the AntaraX core and keeps one accent of its own.

**Shared core (every app):**

- Type: Poppins for UI, JetBrains Mono for every number (tabular figures). No third face.
- Text: navy `#0B1B4F` headings, body `#3B4469`, hairlines `rgba(11,27,79,.12)`.
- Grounds: white or the alternate `#F4F6FB`. A product may keep its own near-white page ground where it is part of its character (Angka's paper `#FAF7F2`), never a coloured one.
- Status: ok `#12B76A`, warn `#F79009`, fault `#F04438`, only for real signal.
- Focus ring: AntaraX blue on every control.
- Interface rules from 07: radii, controls, no coloured top borders, no uppercase non-data labels.
- Dark product UIs (where a product needs one): ground `#071233`, raised `#0C1B47`, ink `#EAF0FF`, body `#B6C3EA`; the blueprint dot grid stays on Technology pages only.

**Own accent (per product):** used for the primary action, selection, the product's charts and identity moments. One accent per product, with its tint (86% toward white) and dark (55%). See the table below and each product sheet.

**Families on antarax.ai.** The website shows products in their family colour (badges, pilot buttons, family cloths), as 05 says. Inside a product's own app, the product accent leads.

| Product | Kind | Accent | Tint | Dark | Primary action |
|---|---|---|---|---|---|
| Yara | A-mark | Ripple `#08B0B3` | `#DCF4F4` | `#046162` | AntaraX blue `#0459F7` |
| Frame | A-mark | Frame `#074AF8` | `#DCE6FE` | `#042988` | AntaraX blue `#0459F7` |
| Janka | Own-mark | Janka cyan `#0CC4FB` | `#DDF7FE` | `#076C8A` | `#076C8A` (cyan fails with white text) |
| PLExyz Grid | Own-mark | PLExyz violet `#2C09B2` | `#E1DDF4` | `#180562` | `#2C09B2` |
| PLExyz Crowd | Own-mark | PLExyz violet `#2C09B2`; lavender `#CBB6FA` on dark | `#E1DDF4` | `#180562` | `#2C09B2` (lavender with navy text on dark) |
| Angka | Own-mark | Angka plum `#6B3F6B` | `#EAE4EA` | `#3B233B` | `#6B3F6B` |
| Tinara | Own-mark | Tide pink `#E9579D` (proposed) | `#FCE7F1` | `#803056` | `#803056` (pink fails with white text) |
| Loom, Motion | A-mark | Family colour | see tokens | see tokens | AntaraX blue |

Accents for Janka and Tinara are proposals (11 Open questions): Janka's current orange is REKA's orange and sits next to the warn colour; Tinara's plum is too close to Angka's.

## Credit lines (proposed, awaiting owner confirmation)

The owner asked for a recommendation. AntaraX is new and people know REKA, so the proposal borrows REKA's trust for a while without making REKA the product's brand:

| Where | Line |
|---|---|
| Product chrome (sidebar, header, app title) | "Janka · by AntaraX" (Yara: "Powered by AntaraX Ripple") |
| Sign-in, splash, first email, PDF reports, product website footers | "Janka by AntaraX, from REKA." |
| Legal footer, terms, invoices | "AntaraX, a product line of REKA Inisiatif Sdn Bhd." |
| Pilot and Managed AI screens | "Run by REKA as part of Managed AI." (only where REKA really runs it) |
| Support contacts | Name REKA people where REKA people answer ("your account team at REKA"). |

- **Retire** product endorsements that say "by REKA": "Tinara by REKA", "A product of REKA Inisiatif", "Angka, by REKA Inisiatif Sdn Bhd", "PLExyz by REKA", the "REKA Intelligence" eyebrow, and "REKA" set in REKA orange inside a product.
- **Review "from REKA"** on 23 July 2027, one year after AntaraX launched. If AntaraX is recognised on its own by then, the trust line drops from sign-in and splash and stays in the legal line.
- Write **AntaraX**, never "AntaraX AI" (the domain is antarax.ai; the brand is AntaraX).

## Sub-brands and shared names

- **PLExyz** is a product line inside the Edge family: PLExyz Grid and PLExyz Crowd share one mark idea (the shard) and one accent (violet). New PLExyz products need an owner decision.
- **Lapis** belongs to Angka ("Lapis by Angka"); **Lapisan** is the AntaraX platform ("Lapisan by AntaraX"). Lapis never becomes a master brand (Angka Canon).
- **Frame** is the one product that shares its family's name. In the app it is "AntaraX Frame"; in copy beside other products it is "Frame" (proposed; see 11).
- **No product reuses a family name** for a part of itself. "PLExyz Edge Gateway" collides with AntaraX Edge (see the PLExyz sheet).
- **Internal names stay internal:** AXLE, JWI, SPECTRA OS, "Remix" prototype names, CIRO.

## Adding a product

1. Start as **A-mark** in its family, with the family accent and AntaraX blue for actions.
2. Write its product sheet in `guide/products/` from the template in the index, and add it to 02.
3. If it arrives with an identity customers already know (for example, graduating from REKA with live customers), the owner may make it own-mark. Restyle its logo by the rules above before it ships under AntaraX.

## Do and don't

- **Do** lead with the product and its outcome; let AntaraX sign it.
- **Do** keep each product's logo recognisable; change finish, not shape.
- **Do** share type, neutrals, status and controls across every product.
- **Don't** put two marks side by side (the product's and the A).
- **Don't** let a product's accent take over antarax.ai; there the family colour leads.
- **Don't** use REKA orange or REKA blue in a product.
- **Don't** credit a product "by REKA"; REKA is the company behind AntaraX, not the product's brand.
