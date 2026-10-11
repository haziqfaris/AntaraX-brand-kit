# 12 Brand architecture

How AntaraX, its products and REKA carry their names, marks and colours, and how AntaraX's style reaches into each product without replacing the product's own. Each product's details are in [products/](products/README.md). The visual version is [`guide/product-brands.html`](product-brands.html). When each rule was decided is in [10 Decisions log](10-decisions-log.md); what is still open is in [11 Open questions](11-open-questions.md).

## Why products lead

Most AntaraX products are older than the AntaraX brand, which launched as a product line on 23 July 2026:

- **PLExyz** has been a REKA product with its own logo since at least January 2023;
- **Janka, PLExyz Grid and Tinara** arrived with their own names and identities;
- **Angka** followed in September 2026 with its own mark and canon.

Customers and partners know REKA, and some know these products. So AntaraX does not replace the product brands. It **endorses** them and adds one small shared layer to each.

## The model

```
REKA Inisiatif Sdn Bhd            the company: R&D, Managed AI, legal entity
 └─ AntaraX                       the product line: every product is "by AntaraX"
     ├─ Families                  capability groups on antarax.ai (Ripple, Edge, Frame, Loom, Motion, Tide)
     └─ Products                  the brands customers buy
         ├─ own-mark products     keep their own logo
         └─ A-mark products       use the AntaraX A with their family icon
```

- **The product is the brand the customer buys.** Lead with the product name and its plain outcome (03 Voice).
- **Every product is "by AntaraX".** One credit line, the same everywhere.
- **AntaraX owns the shared layer:** type, text and status colours, interface rules, the motif language, the AI sparkle, antarax.ai, Lapisan and the API.
- **Families group products** on antarax.ai (the Families and Technology pages, family badges and colours). They are not part of a product's credit line.
- **REKA is the company behind AntaraX:** the legal line, the Managed AI operator, and the "from REKA" trust line.
- **PLExyz** is REKA's spatial intelligence platform (Harmonik division), built on AntaraX. Its products are credited "by AntaraX" like every other product.

### Two kinds of product

| Kind | Products | Mark | Primary action | Accent |
|---|---|---|---|---|
| **Own-mark** | PLExyz products, Janka, Angka, Tinara | The product's own logo | The product's own colour (its dark shade if it fails 4.5:1 with white) | The product's own colours |
| **A-mark** | Yara, AX Frame, Loom, Motion, and every new product | The AntaraX A with the family icon in its centre (04) | AntaraX blue `#0459F7` | The family colour |

A product is own-mark when it arrived with an identity people already recognise. Everything else starts as A-mark.

## Two layers in every product

**The product layer is the product's own** and stays as it is: logo, palette, signature details, layouts.

| Product | Signature details |
|---|---|
| PLExyz Grid | Force field, shard and zone grid; the four zone colours; the multicoloured "Grid" wordmark; the hex-tile sign-in |
| Janka | The J that never closes; the signal ticks; its splash and thinking animations |
| Angka | The sheet-stack face; paper ground; plum and Lapis peach |
| Tinara | Plum and gold; the kerawang window mark |
| AX Frame | The breathing cube halo |
| Yara | The A with riak; teal |

**The AntaraX layer is the same in every product**, and small enough that it never changes how the product looks:

1. **Credit line:** "by AntaraX" (see below).
2. **Product motif:** one BaTech motif per product, drawn simply in the product's colour, used rarely and quietly (see below).
3. **AI sparkle:** the four-petal sparkle (`assets/ai/spark-x.svg`) beside every piece of AI work: a forecast, a ranking, a drafted order or brief, a suggested match. The same sign in every product tells a customer that this is AntaraX intelligence. Never decoration, never a logo.
4. **Thinking motion:** while AI works for more than a moment, the product's own mark moves the AntaraX way, its separate pieces drifting in and out of step (04, animation 2). Respect reduced motion.
5. **Shared core:** Poppins, JetBrains Mono for every number, the shared status colours, the AntaraX-blue focus ring (see "Colour").
6. **Intan eyebrow:** section eyebrows start with the intan (a 9px diamond) in the product's accent.
7. **App tile:** one tile shape for every product.
8. **Footer:** the legal line, and "Lapisan by AntaraX" wherever the product mentions its API.

## Product motifs

The full BaTech cloth is antarax.ai's language (06). **Inside a product it is never used as a pattern.** Each product instead has **one signature motif**, drawn simply in one colour, which ties it to AntaraX and says something true about the product.

### The motif map

| Family | Product | Motif | What it says |
|---|---|---|---|
| Ripple | Yara | **riak**, a ripple from one point | One tap on the floor moves the whole job |
| Tide | Janka | **padi**, a rice stalk | Know the harvest before you need it: what to reorder, before you run out |
| Tide | Angka | **congkak**, the counting board | Numbers you can follow, hole by hole |
| Tide | Tinara | **kerawang**, the carved lattice | One opening worth calling, found in the lattice of the market |
| Edge | PLExyz Grid | **petak**, field plots | Every space in its place |
| Edge | PLExyz Crowd | **orbit**, presence around a point | People sensed, never seen |
| Frame | AX Frame | **intan**, the cut gem | One world, many faces |
| Loom | Loom | **tenun**, the weave | Data woven together |
| Motion | Motion | **cengkih**, the clove flower | A quadcopter seen from above |

Each motif belongs to its family's set (06), so a product's motif also says which family it is in. Files: `assets/products/<product>/<product>-motif.svg` (line) and `-motif-tint.svg` (line with a light fill), built by `tools/build-product-motifs.mjs`.

### Where a motif goes

Only these places, **once per screen**:

| Place | How |
|---|---|
| Sign-in brand panel | One motif, line only, large (about 60% of the panel width), at 8 to 12% opacity, cropped by a corner. The logo stays the hero |
| Empty states | One motif, tint version, 56 to 72px, above the message |
| Email header and report cover | One motif, line only, 24px, beside the product name or in a corner |
| Splash screen | Optional, behind the logo, at 8% opacity |

### Never

- a repeated pattern, cloth or band of motifs inside a product;
- more than one motif on a screen, or another product's motif;
- behind data, tables, forms or running text;
- at full strength as decoration, or in place of the logo.

## Own marks

Own marks stay as they are. A mark may be refreshed when it has a problem (trace noise, colours that clash with the shared core), keeping its shape:

1. Keep the silhouette and the idea.
2. Highlights from the sparkle colours inside the A: purple `#524FE9`, orange `#F47B3D`, cyan `#0CC4FB`, emerald `#12B76A`, indigo `#7171EA`.
3. One ink: AntaraX navy `#0B1B4F`, or the product's own deep colour.
4. Flat fills: no gradients, glows, shadows or bevels.
5. Wordmark in Poppins in the product's proper casing; a designed wordmark (Janka, PLExyz Grid) stays as designed.
6. Variants: full colour, white, one colour.

Janka's mark follows these rules (navy ink, sparkle orange and cyan).

## Lockups

```
[mark]  Janka                    [mark]
        by AntaraX                Janka
                                by AntaraX
   horizontal                    stacked
```

- **"by AntaraX" for every product,** set as text: Poppins 500, about 45% of the product name's size, in body `#3B4469` (white at 80% on dark). Never put the AntaraX A next to an own mark: one mark per lockup.
- In one line: "Janka · by AntaraX". Never an em dash.
- Clear space: half the mark's height on every side.
- Minimum: mark 24px high (PLExyz Grid 48px for the full-colour mark, its solid variant below that). Under 120px of lockup width, drop "by AntaraX".

### App icon tile

- White tile, corner radius 22% of its width; the mark centred at 62% of the tile width.
- Maskable variant (PWA): the mark at 50%.
- Dark variant: navy `#0B1B4F` tile with the white mark.
- Favicon: the mark alone when it reads at 16px; otherwise the tile.

## Colour in product apps

**Shared core, own accent.**

Shared core:

- Type: Poppins for UI, JetBrains Mono for every number (tabular figures). No third face.
- Text: navy `#0B1B4F` and body `#3B4469`, or the product's own near-equivalents where they are part of its theme (PLExyz Grid `#1C1B2E`).
- Grounds: white, or the product's own near-white (Angka `#FAF7F2`, Grid `#F7F7FA`), never a coloured one.
- Status: ok `#12B76A`, warn `#F79009`, fault `#F04438`, only for real signal.
- Focus ring: AntaraX blue on every control.
- Interface rules from 07.
- Dark product UIs: ground `#071233`, raised `#0C1B47`, ink `#EAF0FF`, body `#B6C3EA`.

Own accent, for the primary action, selection, charts and identity moments, with its tint (86% toward white) and dark (55%):

| Product | Accent | Tint | Dark | Primary action |
|---|---|---|---|---|
| Yara | Ripple `#08B0B3` | `#DCF4F4` | `#046162` | AntaraX blue `#0459F7` |
| AX Frame | Frame `#074AF8` | `#DCE6FE` | `#042988` | AntaraX blue `#0459F7` |
| Janka | cyan `#0CC4FB` | `#DDF7FE` | `#076C8A` | `#076C8A` |
| PLExyz Grid | violet `#2C09B2`; zones `#4FD7D1` `#FD9001` `#FD4F85` `#CBB6FA` for data | `#E1DDF4` | `#180562` | `#2C09B2` |
| Angka | plum `#6B3F6B` | `#EAE4EA` | `#3B233B` | `#6B3F6B` |
| Tinara | plum `#5B2B4A`; gold `#D6A84F` for highlights | `#E8E1E6` | `#321829` | `#5B2B4A` |
| Loom, Motion | family colour | see tokens | see tokens | AntaraX blue |

On antarax.ai the family colour leads (05). Inside a product's own app, the product's colours lead.

## Credit lines

| Where | Line |
|---|---|
| Product chrome (sidebar, header, app title) | "Janka · by AntaraX" |
| Sign-in, splash, first email, reports, product site footers | "Janka by AntaraX, from REKA." |
| Legal footer, terms, invoices | "AntaraX, a product line of REKA Inisiatif Sdn Bhd." |
| Pilot and Managed AI screens | "Run by REKA as part of Managed AI." (only where REKA really runs it) |
| Support contacts | Name REKA people where REKA people answer |

- The same lines for every product, PLExyz included.
- Never: "Powered by", "by REKA", "Tinara by REKA", "A product of REKA Inisiatif", "REKA Intelligence", "REKA" in REKA orange inside a product, "AntaraX AI".
- "from REKA" is reviewed on 23 July 2027.

## Sub-brands and shared names

- **PLExyz** is a product line with one visual system: "Same space. Same entity. Different behaviour." Every product shares the force field and the core entity shard; only the spatial context inside changes. Grid (flagship), Trace (built inside Janka), and the concepts Flow, Transit, Crowd, Site, Ward and Yard. See the PLExyz sheet.
- **Lapis** belongs to Angka ("Lapis by Angka"); **Lapisan** is the AntaraX platform ("Lapisan by AntaraX").
- **AX Frame** is the product; **AntaraX Frame** is its family on the Families page.
- No product reuses a family name for a part of itself ("PLExyz Edge Gateway" collides with Edge).
- Internal names stay internal: AXLE, JWI, SPECTRA OS, "Remix" prototype names, CIRO.

## Adding a product

1. Start as A-mark in its family, with the family accent and AntaraX blue for actions.
2. Give it the AntaraX layer: "by AntaraX", a motif from its family's set, the AI sparkle, the shared core.
3. Write its sheet in `guide/products/` and add it to 02 and the motif map.

## Do and don't

- **Do** keep each product's logo, colours and signature details.
- **Do** credit every product "by AntaraX".
- **Do** mark every piece of AI work with the sparkle.
- **Do** use the product motif once, faintly, in the places listed.
- **Don't** put a batik pattern or cloth inside a product.
- **Don't** put two marks side by side (the product's and the A).
- **Don't** credit a product "by REKA" or "Powered by".
