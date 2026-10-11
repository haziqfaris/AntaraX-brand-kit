# 12 Brand architecture

How AntaraX, its products and REKA carry their names, marks and colours, and how AntaraX's style reaches into each product without replacing the product's own. Each product's details are in [products/](products/README.md). The visual version, with every mark, cloth and sign-in example, is [`guide/product-brands.html`](product-brands.html).

## Why this page exists

Most AntaraX products are older than the AntaraX brand. AntaraX launched as a product line on 23 July 2026. By then:

- **PLExyz** had been a REKA product with its own logo since at least January 2023 (archived reka.re product page), first as crowd analytics for venues;
- **Janka, PLExyz Grid and Tinara** had their own names and identities and were credited "by REKA";
- **Angka** followed in September 2026 with its own mark and canon, also credited to REKA.

Customers and partners know REKA, and some know these products. The AntaraX name is new. So AntaraX does not replace the product brands. It **endorses** them, and adds one shared layer to each.

## The model: endorsed products (owner decision, 11 October 2026)

```
REKA Inisiatif Sdn Bhd            the company: R&D, Managed AI, legal entity
 ├─ PLExyz (Harmonik)             REKA's spatial intelligence platform, powered by AntaraX
 └─ AntaraX                       the product line: endorses every product, powers PLExyz
     ├─ Families                  capability endorsements (Ripple, Edge, Frame, Loom, Motion, Tide)
     └─ Products                  the brands customers buy
         ├─ own-mark products     keep their own logo
         └─ A-mark products       use the AntaraX A with their family icon
```

- **The product is the brand the customer buys.** Lead with the product name and its plain outcome (03 Voice).
- **AntaraX is the maker's mark and the shared layer.** Every product carries an AntaraX credit. AntaraX owns the shared core (type, text and status colours, interface rules), the motif language (BaTech), the AI sparkle, the website, the platform (Lapisan) and the API (`api.antarax.ai`).
- **Families stay endorsements.** They group products on antarax.ai and appear as "Powered by AntaraX Ripple"-style lines. They never replace a product's own mark.
- **REKA is the company behind AntaraX.** It appears in the legal line, as the Managed AI operator, and in the "from REKA" trust line.
- **PLExyz is REKA's platform, powered by AntaraX** (PLExyz product line brief, 11 October 2026). It is owned by REKA's Harmonik division and built on AntaraX. Its products appear on antarax.ai in the Edge family, and they credit AntaraX as "Powered by AntaraX", not "by AntaraX".

### Two kinds of product

| Kind | Who | Mark | Action colour | Accent |
|---|---|---|---|---|
| **Own-mark** | PLExyz products, Janka, Angka, Tinara | The product's own logo, kept as it is unless the owner chooses a restyle | The product's own (its dark shade if it fails 4.5:1 with white) | The product's own colours |
| **A-mark** | Yara, AX Frame, Loom, Motion, and every new product by default | The AntaraX A with the family icon in its centre (04 Logo) | AntaraX blue `#0459F7` | The family colour |

A product is own-mark when it arrived with an identity people already recognise, or when the owner decides it serves a market that needs its own face. Everything else starts as A-mark. Moving a product between kinds is an owner decision, recorded in 10.

## Keep the product's style; add the AntaraX layer (owner direction, 11 October 2026)

The owner's direction: integrate the AntaraX style and motifs into each product **while keeping the product's current style**. So every product has two layers.

**The product layer stays the product's own.** Its logo, its palette, its signature details and its layouts:

| Product | Signature details that stay |
|---|---|
| PLExyz Grid | The force field, shard and zone grid; the four zone colours; the multicoloured "Grid" wordmark; the hex-tile pattern on sign-in |
| Janka | The J that never closes; the signal ticks; the splash and thinking animations |
| Angka | The sheet-stack face; paper ground; plum and Lapis peach |
| Tinara | Plum and gold; the new kerawang mark |
| AX Frame | The breathing cube halo |
| Yara | Already AntaraX: the A with riak, teal |

**The AntaraX layer is the same in every product.** Eight touchpoints, each small, each recognisably AntaraX:

1. **The credit line** (decided): "by AntaraX", "Powered by AntaraX" for PLExyz, "from REKA" on sign-in and reports. See "Credit lines".
2. **The product cloth.** AntaraX's BaTech corak, drawn from the product's family motifs **in the product's own colours**. Grid's cloth is petak, orbit and telang in teal, orange, pink and lavender with a violet ink; Janka's is padi and bunga raya in its cyan and orange; Angka's is congkak in plum and peach. The motifs say AntaraX; the colours say the product. Every cloth carries the REKA, AntaraX and Seth cameos (06). Files: `assets/products/<product>/<product>-cloth.svg`, built by `tools/build-product-cloths.mjs`.
   - **Use it for brand moments only:** the sign-in brand panel, the splash screen, empty states, onboarding, the email header band, report and guide covers, the product's marketing pages.
   - **Never** behind data, tables, forms or running text, and never in place of the product's logo.
3. **The AI sparkle.** The four-petal sparkle (`assets/ai/spark-x.svg`, in the A's sparkle colours) marks AI work in every product: a forecast, a ranking, a drafted order or brief, a suggested match. Put it beside the label, for example "Drafted by AI" or "Forecast". The same glyph in every product tells a customer that this is AntaraX intelligence. Never use it as decoration or as a logo.
4. **Thinking motion.** While AI works for more than a moment, the product's own mark moves the AntaraX way: its separate pieces drift in and out of step (04 Logo, animation 2). Janka already does this; Grid's shard and zones and the Tinara lattice can do the same. Respect reduced motion.
5. **The shared core.** Poppins, JetBrains Mono for every number, the shared status colours and the AntaraX-blue focus ring (see "Colour in product apps").
6. **The intan eyebrow.** Section eyebrows start with the intan (a 9px diamond), in the product's accent, as on antarax.ai.
7. **The app tile.** The same tile shape for every product (see "App icon tile").
8. **The footer.** The legal line, and "Lapisan by AntaraX" wherever the product mentions its API or developer access.

## Restyling an own mark (optional)

A restyle is **chosen per product by the owner**, not required. Without one, the mark stays exactly as it is and the AntaraX layer does the integrating.

- **Janka: restyled** (approved 11 October 2026). Navy ink, and the orange and cyan moved onto the sparkle's orange and cyan, so the J carries the A's colours.
- **PLExyz Grid: kept as it is** (owner, 11 October 2026). Its colours already sit close to AntaraX: the teal zone `#4FD7D1` is near the sparkle cyan and Ripple, the pink zone `#FD4F85` is near Tide pink, and the lavender zone is a tint of its own violet. The orange zone is REKA's orange, which suits a REKA-owned platform.
- **Angka: kept.** It already meets every rule below.
- **Tinara: new mark** from the kerawang motif (options in the Tinara sheet).

When the owner does choose a restyle, it follows these rules:

1. **Keep the silhouette and the idea.** Do not redraw the geometry.
2. **Highlights from the sparkle:** purple `#524FE9`, orange `#F47B3D`, cyan `#0CC4FB`, emerald `#12B76A`, indigo `#7171EA`.
3. **One ink:** AntaraX navy `#0B1B4F`, or the product's own deep colour.
4. **Flat fills:** no gradients, glows, shadows or bevels.
5. **REKA's colours stay with REKA's products.** REKA orange `#FB9800` and REKA blue may appear in REKA-owned products (PLExyz); an AntaraX product moves off them.
6. **Wordmark** in Poppins, in the product's proper casing. A drawn wordmark (Janka) or a designed multicolour wordmark (PLExyz Grid) may stay as designed.
7. **Variants:** full colour, white, and one colour.

## Lockups

### Product lockup

```
[mark]  Janka                    [mark]
        by AntaraX                Janka
                                by AntaraX
   horizontal                    stacked
```

- **The AntaraX credit is set text,** Poppins 500, about 45% of the product name's size, in body `#3B4469` (white at 80% on dark). Never put the AntaraX A next to an own mark: one mark per lockup.
- **Which words:** "by AntaraX" (Janka, Angka, Tinara); "Powered by AntaraX" (PLExyz products); "Powered by AntaraX [Family]" for an A-mark product whose family is the story (Yara: "Powered by AntaraX Ripple"); AX Frame needs none beside its name, as its mark is the A.
- **Separator in one line:** a middle dot, "Janka · by AntaraX". Never an em dash.
- **Clear space:** half the mark's height on every side.
- **Minimum size:** mark 24px high on screen (PLExyz Grid: 48px for the full-colour mark, its solid variant below that); under 120px of lockup width, drop the credit.

### App icon tile

- white tile, corner radius 22% of its width; the mark centred at 62% of the tile width;
- maskable variant (PWA): the mark at 50%;
- dark variant: navy `#0B1B4F` tile with the white mark;
- favicon: the mark alone when it reads at 16px; otherwise the tile.

## Colour in product apps (owner decision, 11 October 2026)

**Shared core, own accent.**

**Shared core (every app):**

- Type: Poppins for UI, JetBrains Mono for every number (tabular figures). No third face.
- Text: navy `#0B1B4F` headings and body `#3B4469`, or the product's own near-equivalents where they are part of its established theme (PLExyz Grid `#1C1B2E`).
- Grounds: white or a near-white of the product's own (Angka paper `#FAF7F2`, Grid `#F7F7FA`), never a coloured one.
- Status: ok `#12B76A`, warn `#F79009`, fault `#F04438`, only for real signal.
- Focus ring: AntaraX blue on every control.
- Interface rules from 07.
- Dark product UIs: ground `#071233`, raised `#0C1B47`, ink `#EAF0FF`, body `#B6C3EA`; the blueprint dot grid stays on Technology pages only.

**Own accent:** the primary action, selection, the product's charts and identity moments, with tint (86% toward white) and dark (55%).

| Product | Kind | Accent | Tint | Dark | Primary action |
|---|---|---|---|---|---|
| Yara | A-mark | Ripple `#08B0B3` | `#DCF4F4` | `#046162` | AntaraX blue `#0459F7` |
| AX Frame | A-mark | Frame `#074AF8` | `#DCE6FE` | `#042988` | AntaraX blue `#0459F7` |
| Janka | Own-mark | Janka cyan `#0CC4FB` | `#DDF7FE` | `#076C8A` | `#076C8A` |
| PLExyz Grid | Own-mark | Grid violet `#2C09B2`; zones `#4FD7D1` `#FD9001` `#FD4F85` `#CBB6FA` for charts and data | `#E1DDF4` | `#180562` | `#2C09B2` |
| Other PLExyz products | Own-mark | PLExyz purple `#6040CC` (line brief) until each product's theme exists | | | |
| Angka | Own-mark | Angka plum `#6B3F6B` | `#EAE4EA` | `#3B233B` | `#6B3F6B` |
| Tinara | Own-mark | Tinara plum `#5B2B4A`, gold `#D6A84F` for highlights | `#E8E1E6` | `#321829` | `#5B2B4A` |
| Loom, Motion | A-mark | Family colour | see tokens | see tokens | AntaraX blue |

On antarax.ai the family colour leads (badges, pilot buttons, family cloths), as 05 says. Inside a product's own app and its cloth, the product's own colours lead.

## Credit lines (owner decision, 11 October 2026)

| Where | AntaraX products | PLExyz products |
|---|---|---|
| Product chrome (sidebar, header, app title) | "Janka · by AntaraX" (Yara: "Powered by AntaraX Ripple") | "PLExyz Grid · Powered by AntaraX" |
| Sign-in, splash, first email, reports, product site footers | "Janka by AntaraX, from REKA." | "PLExyz Grid, from REKA. Powered by AntaraX." |
| Legal footer, terms, invoices | "AntaraX, a product line of REKA Inisiatif Sdn Bhd." | "PLExyz, a REKA Inisiatif Sdn Bhd platform, powered by AntaraX." |
| Pilot and Managed AI screens | "Run by REKA as part of Managed AI." (only where REKA really runs it) | same |
| Support contacts | Name REKA people where REKA people answer. | same |

- **Retire** "Tinara by REKA", "A product of REKA Inisiatif", "Angka, by REKA Inisiatif Sdn Bhd", the "REKA Intelligence" eyebrow, "REKA" set in REKA orange inside an AntaraX product, and "AntaraX AI" (write AntaraX).
- **Review "from REKA"** on 23 July 2027, one year after AntaraX launched.

## Sub-brands and shared names

- **PLExyz** is a product line with one visual system: "Same space. Same entity. Different behaviour." Every product shares the force field (the isometric cube boundary) and the core entity (the faceted obelisk shard); only the spatial context inside changes. Products: Grid (flagship, built), Trace (built as a module inside Janka), and Flow, Transit, Crowd, Site, Ward and Yard (concepts). See the PLExyz sheet.
- **Lapis** belongs to Angka ("Lapis by Angka"); **Lapisan** is the AntaraX platform ("Lapisan by AntaraX").
- **AX Frame** shares its family's name, so the product takes the short form (owner, 11 October 2026; "Frame" alone is crowded in software). The family stays "AntaraX Frame" on the Families page.
- **No product reuses a family name** for a part of itself. "PLExyz Edge Gateway" collides with AntaraX Edge.
- **Internal names stay internal:** AXLE, JWI, SPECTRA OS, "Remix" prototype names, CIRO.

## Adding a product

1. Start as **A-mark** in its family, with the family accent and AntaraX blue for actions.
2. Give it the AntaraX layer from day one: credit line, a cloth in its colours, the AI sparkle, the shared core.
3. Write its product sheet in `guide/products/` from the template in the index, and add it to 02.
4. If it arrives with an identity customers already know (for example, graduating from REKA with live customers), the owner may make it own-mark.

## Do and don't

- **Do** keep each product's logo, colours and signature details.
- **Do** add the eight AntaraX touchpoints to every product.
- **Do** use the product cloth for brand moments, in the product's own colours.
- **Do** mark every piece of AI work with the sparkle.
- **Don't** put two marks side by side (the product's and the A).
- **Don't** put a cloth behind data, forms or running text.
- **Don't** let a product's accent take over antarax.ai; there the family colour leads.
- **Don't** credit an AntaraX product "by REKA"; REKA is the company behind AntaraX.
