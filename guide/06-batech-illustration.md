# 06 BaTech illustration

**BaTech** (batik teknologi) is the AntaraX **corak**: Malaysian batik motifs rebuilt from technology, used the way batik is used, as backgrounds, bands, fills, cloths and texture. It is AntaraX's only illustration language. Full system history: [`reference/design/BATECH.md`](../reference/design/BATECH.md). Research: [`reference/research/BATIK_MALAYSIA.md`](../reference/research/BATIK_MALAYSIA.md). Source code of every motif: `haziqfaris/antarax-ai`, `prototype/site/src/batech.mjs` and `src/illustrations.mjs`.

## Principles

1. **Malaysian, tech first.** Lead with Malaysian flowers and Malay forms, each rebuilt so it reads as technology before it reads as a flower. Kawung and parang are Javanese court motifs: they may appear in the weave but are never a signature.
2. **Mixed patterns, not straight lines.** Pieces interlock like a puzzle by their silhouettes, with even gutters. No ruled grids, no straight-line diagrams as decoration, no row of identical triangles (the pucuk rebung row is retired).
3. **Decoration with meaning.** Visitors never need to decode it. It should feel Malaysian, crafted and technical at once.
4. **Flat fills, one ink outline.** Outlines in the site ink or the family's dark colour; fills from the palette; no gradients inside motifs, no photo textures, no clip art.
5. **Never behind running text** at full colour.

## The motifs

- **Flowers, rebuilt:** bunga raya (traces to pads, a chip heart, an antenna stamen); bunga telang (a camera iris); ketam guri (rhombic chip leaves); bunga cengkih (a quadcopter from above); bunga tanjung (a robot cell).
- **Malay forms:** awan larat (an endless circuit trace); pucuk rebung; wau bulan (a sensor in the sky); congkak (a counting board, for Angka); kerawang (a lattice with one path, for Tinara); gasing (balance in motion); intan (one world, many faces).
- **Earth and water:** padi, daun, sungai, benih.
- **Meaning motifs:** riak (one tap, spreading), petak (a grid of spaces), tenun (the weave), percik (sparks).
- **Cosmos and quantum:** cakerawala, orbit, komet, atom, suria, gelombang, jaring. Kubit is reserved.

## Inside products

Product apps never use a cloth, medallion or full-colour corak area. They use BaTech in a few quiet places only: the product's signature motif in empty states (full colour, family pair), and a Quiet band of the family's corak on dividers, sign-in edges and email headers. Motifs are always drawn in the family pair, never in a product's own colours. The rules and the motif map are in [12 Brand architecture](12-brand-architecture.md#product-motifs).

## Families and their cloth

| Family | Colour | Signature motifs | Product motif |
|---|---|---|---|
| Ripple | `#08B0B3` | riak, awan larat, sungai, gear | Yara: awan larat; later sungai for automation (14) |
| Edge | `#12B76A` | petak, orbit, telang, benih, wau | Grid: petak · Crowd: orbit |
| Frame | `#074AF8` | intan, cakerawala, ketam guri, suria, atom | Frame: intan |
| Loom | `#4904B3` | tenun, jaring, komet, awan larat (sources woven together, records moving between systems) | Loom: tenun |
| Motion | `#FC5D04` | cengkih, tanjung, percik, gasing | Motion: cengkih |
| Tide | `#E9579D` | bunga raya, padi, congkak, kerawang, gelombang | Janka: padi · Angka: congkak · Tinara: kerawang |

Each family cloth packs only its own motifs in its own colours, as a **mirrored medallion** layout (a family swatch). Each closed pilot landing page uses its family swatch as the hero picture, with a product mock (example data) laid over it.

## Looks and where they go

| Look | Description | Use |
|---|---|---|
| **Site weave** | Dense mixed puzzle of the whole vocabulary, flat fills | Hero A window, menu and section bands, sign-off cloth |
| **Drift band** | A strip of mixed interlocking motifs that fades out with no edge | Section heads, panel feet, product beds, the mega-menu |
| **Family swatch** | Open, brushed, mirrored medallions in one family's colours | Families page, pilot heroes and cards |
| **Quiet** | One light ink, no fills | Behind content, only where text sits on a solid card |
| **White on blue** | White at about 25–30% opacity | Blue panels and CTAs |
| **Glow in the dark** | Luminous outlines in each motif's own hue, deep jewel fills, soft bloom | The dark blueprint (Technology page, developer material) only |

## The three cameos (owner rule, 10 October 2026)

**Every illustration carries REKA, AntaraX and Seth in the mix:**

- **Seth Linton,** REKA's brand character, as a small batik cameo (one per large area). See the REKA brand kit for who Seth is.
- **The REKA mark** as the maker's signature (its long slash sharp at both ends).
- **The AntaraX A.**

Medallions carry the three as small beads under the motif; diagrams and anything without a corak carry them as a small cluster in the lower corner. Apart from Seth's cameo, **no faces** in the corak.

Note: the REKA character guide says Seth appears only on dark grounds. The batik cameo is a stylised motif, not the character render; see 11 Open questions.

## Motion

Radial motifs may turn slowly; others stay still. All motion stops for reduced motion and the site's "Pause motion" toggle.

## Photography

Until real photos exist, photo slots show a kain panel instead of a stock image. The shot list and image-AI prompts for every slot are in [marketing/photography/PHOTO_BRIEF.md](../marketing/photography/PHOTO_BRIEF.md). When photos come: real sites, real people who agreed to be photographed, natural light, no "AI brain" or stock digital-transformation imagery.

## Don't

Redraw motifs ad hoc; add new motifs without adding them to `batech.mjs`; use cinematic space imagery, glowing brains, robots shaking hands or generic AI art; put full-colour corak behind paragraphs.
