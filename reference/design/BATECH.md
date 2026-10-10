# BaTech: the AntaraX corak

**Status:** in use across the prototype (9 October 2026). Batik Malaysia, rebuilt from technology. Playbook §29.
**Source of truth:** `prototype/site/src/batech.mjs` (motifs, weaves) and `src/illustrations.mjs` (where they appear). Visual guideline: `batech-guidelines.html`. Research: `docs/research/BATIK_MALAYSIA.md`.

## Current system (v3)

**Principles**
- **Malaysian, tech first.** Lead with Malaysian flowers and Malay forms, each rebuilt from technology so it reads as tech before it reads as a flower. Kawung and parang are Javanese court motifs: they stay in the code but are never a signature.
- **No faces in the corak,** except one hidden Seth Linton cameo per large area. The REKA mark appears as the maker's signature.

**The motifs**
- **Flowers, rebuilt:**
  - bunga raya: traces to pads, a chip heart, an antenna stamen
  - bunga telang: a camera iris
  - ketam guri: rhombic chip leaves
  - bunga cengkih: a quadcopter from above
  - bunga tanjung: a robot cell
- **Malay forms:**
  - awan larat: an endless circuit trace
  - pucuk rebung
  - wau bulan: a sensor in the sky
  - congkak: a counting board, for Angka
  - kerawang: a lattice with one path, for Tinara
  - gasing: balance in motion
  - intan: one world, many faces
- **Earth and water:** padi, daun, sungai, benih.
- **Meaning motifs:** riak (one tap, spreading), petak (a grid of spaces), tenun (the weave), percik (sparks).
- **Cosmos and quantum:** cakerawala, orbit, komet, atom, suria, gelombang, jaring. Kubit is reserved.
- **Cameos:** seth (Seth Linton in batik form) and reka (the REKA mark, traced from the logo, its long slash sharp at both ends).

**Where each look is used**
- **The site's own weave:** the dense puzzle with the Malaysian vocabulary (`BATECH_LOOK=mix` default, `m1` density). Pieces interlock by silhouette; awan larat bands run through; flat fills. Used in hero lettering, panel beds and the sign-off.
- **Families, line-up and Story:** open and brushed (`m2`): large pieces, wider gutters, batik lukis gradients.
  - A mirrored medallion layout on each hanging cloth.
  - A flowing band behind each house.
  - Code names `puzzle-ceplok` and `puzzle-parang` are internal only.
- **Story page:** starts as a blank canvas. The kain grows from a meandering thread as wax outlines, then the dye spreads back up the page. Seth and the REKA mark hide in the early chapters.

**Families and their motifs** (copy and data: `LINEUP` in `src/illustrations.mjs`)

| Family | Verb | Colour | Signature motifs | Products and their motif |
|---|---|---|---|---|
| Ripple | Operate | `#08B0B3` | riak, awan larat, sungai, gear | Yara: riak |
| Edge | Perceive | `#12B76A` | petak, orbit, telang, benih, wau | PLExyz Grid: petak; PLExyz Crowd: orbit |
| Frame | Understand | `#074AF8` | intan, cakerawala, ketam guri, suria, atom | Frame: intan |
| Loom | Orchestrate | `#4904B3` | tenun, jaring, komet, awan larat | Loom: tenun |
| Motion | Navigate | `#FC5D04` | cengkih (quadcopter), tanjung (robot cell), percik, gasing | Motion: cengkih |
| Tide | Optimize | `#E9579D` | bunga raya, padi, congkak, kerawang, gelombang | Janka: padi; Angka: congkak; Tinara: kerawang |

**Build switches:**
- `BATECH_LOOK`: `mix`, `m1`, `m2` or `b`
- `BATECH_FLOWERS`: `tech` or `flower`
- `BATECH_STYLE`: `puzzle` (others are studies)
- `STORY_LAB=1`: builds the story directions as extra pages
- `ONLY=a,b`: builds a subset of pages
- `IDENTITY`: `kain` (default, the AntaraX identity) or `tines` (the old shell, kept only for comparison)
- `HERO`: `a` (default, the A mark as a window onto the kain) or `b` (a hanging kain behind the product)
- `SIGNOFF`: `a` (default, a hanging cloth) or `b` (a kepala band)
- `BAND`: `drift` (default) for the bands at section heads, panel feet, product beds and the menu.
  - Each band is a strip of mixed, interlocking motifs with no ruled lines.
  - `drift` fades out with no edge; `hem` has soft, wavy cloth edges; `weave` has straight edges.
  - The row of pucuk rebung triangles is retired at the owner's request (10 October 2026).
- `BATECH_CAMEOS`: defaults to `seth,reka,antarax`.
  - Every corak hides Seth, the REKA mark and the AntaraX mark as cameos.
  - Medallions carry the three as small beads under the motif.
  - Diagrams and anything else without a corak carry them as a small cluster in the lower corner.
  - Owner rule (10 October 2026): every illustration must have REKA, AntaraX and Seth in the mix.

Regenerate masks after changing a motif: `node tools/batech-masks.mjs`.

---

## History (earlier versions, kept for reference)

**Status:** Chosen by the owner on 10 October 2026 as the base motif language for AntaraX. Replaces the earlier flower and cosmic-bloom motifs.
**Source of truth for the drawings:** `prototype/site/src/batech.mjs`. Exploration with all four directions: `docs/design/corak-options.html`.

## What it is

BaTech (batik + technology; "Batik teknologi") is a corak: a motif system used the way batik is used, as backgrounds, borders, fills and texture across the website and the brand. Every motif is a classic Malay batik motif, rebuilt from a piece of technology. The themes from the playbook are mixed inside it: Earth, Cosmos, Quantum and the Robots that do the work. One stretch of cloth can hold a circuit leaf, a planet-processor, an atom and a robot arm side by side, all joined by traces and cables into a single weave.

It is decoration with meaning, not illustration that tells a story. Visitors should never need to decode it; it should simply feel Malaysian, crafted and technical at the same time.

## The motifs

| Motif | Batik origin | Built from | Family niche |
|---|---|---|---|
| `kawung` | Kawung (four ovals) | Four chip packages with pins, a die at the centre | Frame |
| `parang` | Parang (diagonal bands) | Bands of data cable with connector pads | Loom |
| `rebung` | Pucuk rebung (bamboo shoot) | A triangle filled with circuit traces | Unnamed |
| `cengkih` | Bunga cengkih (clove flower) | Cooling-fan blades around a hub | Ripple |
| `awan` | Awan larat (trailing clouds) | Scrolls of signal arcs | Ripple, Loom |
| `daun` | Daun (leaf) | A circuit board: veins are traces ending in pads | Edge |
| `bintang` | Bintang (star) | An antenna array around a core | Edge |
| `tumpal` | Tumpal (border triangles) | Waveforms in a triangle border | Unnamed |
| `benih` | Seed | A sensor with two antennae | Edge |
| `sungai` | River | Fibre optics with light pulses | Ripple |
| `suria` | Sun | A microchip with pins as rays | Frame |
| `jaring` | Net | A mesh network of nodes | Loom |
| `padi` | Paddy | Signal bars along a stalk | Unnamed |
| `cakerawala` | Planet (cosmos) | A planet whose core is a processor, with a ring | Frame |
| `orbit` | Orbit (cosmos) | Wireless arcs around a node on an orbit path | Loom |
| `satelit` | Satellite (cosmos) | An IoT node with solar-panel wings | Edge |
| `komet` | Comet (cosmos) | A data packet with a trail | Loom |
| `atom` | Atom (quantum) | Electron orbits around a processor core | Frame |
| `kubit` | Qubit (quantum) | A Bloch sphere with its state vector | Unnamed |
| `gelombang` | Wave (quantum) | A clock signal: square wave over a sine | Unnamed |
| `lengan` | Arm (robots) | A robot arm on its base | Ripple |
| `robot` | Robot (robots) | An android head with antennae | Ripple |
| `dron` | Drone (robots) | A quadcopter from above | Edge |
| `gear` | Roda gigi (robots) | A gear with a hub | Ripple |

The literal motifs (robot, arm, drone, satellite, comet, sensor, orbit, gear) are drawn as ornaments, not icons: a dome-shaped mask, a stem with a bud, a quatrefoil, a winged jewel, a paisley, a seed, a ringed jewel and a scalloped flower (`useMotifSet('orn')`, the default; `BATECH_MOTIFS` switches it). Twenty-four motifs in five groups: Core (the first eight), Earth (benih to padi), Cosmos, Quantum and Robots. The shared weave (`WEAVE` in `batech.mjs`) mixes all five groups; each family weave draws only from its niche.

## Family corak

Each product family takes its own niche from the same set, in its own colours:

| Family | Meaning | Niche motifs | Colours |
|---|---|---|---|
| Ripple | Flow (Yara) | Robots: cengkih fan, lengan arm, robot, gear, awan signal | Teal `#08B0B3` on `#D9F3F2` |
| Edge | Sensing (PLExyz) | Daun circuit leaf, satelit, benih sensor, dron, bintang antenna | Green `#12B76A` on `#DCF5E8` |
| Frame | Computing (Frame) | Kawung chips, atom, suria microchip, cakerawala planet | Blue `#3D6FE0` on `#E3EBFD` |
| Loom | Networks | Jaring mesh, orbit, komet packet, awan signal | Violet `#8C86EE` on `#ECEBFD` |
| Still to be named | Forecasting (Janka, Angka, Tinara) | Pucuk rebung circuit, kubit, gelombang clock wave, padi signal bars | Orange `#F5A05A` on `#FDEBDC` |

## How to use it

1. **The puzzle weave.** The site corak is busy on purpose, but nothing sits on top of anything else. `puzzle()` in `batech.mjs` fits every motif against the real outline of its neighbours, using silhouette masks in `src/batech-masks.json` (regenerate with `node tools/batech-masks.mjs` after changing any motif). It is built in four steps, always in this order:
   1. **Lay the cables:** parang cables go down first and are pieces of the puzzle, so nothing crosses them.
   2. **Big pieces:** large motifs, turned and sized to sit snugly against the cables and each other.
   3. **Fill the gaps:** medium, small and tiny motifs are tried at many spots and turns; each grows to fill the gap it lands in, with an even gutter.
   4. **Bridge and dot:** short traces with solder pads bridge some neighbours across the gutter; isen-isen fills what is left.

   The weave wraps seamlessly. The old `weave()` (motifs joined by traces on top) and the `sulur()` vine study remain in the code for reference; the build uses the puzzle (`BATECH_STYLE=puzzle`, the default).
   **Families** pack only their niche, in their colours, with no vines: **Parang** (puzzle between diagonal cable bands) behind each house and on the cloth wall, **Ceplok** (a mirrored puzzle with a medallion on each centre line) on the hanging cloths.
2. **Three strengths.**
   - **Quiet (one ink):** behind content. A single light ink (for example `#C5CCF7` on the page background), no fills. Text always sits on a solid card or has enough contrast.
   - **White on blue:** on the blue panels and calls to action, in white at about 25–30% opacity.
   - **Full colour:** for cloths, sign-off lettering, card edges, dividers and family moments. Never behind body text.
3. **One ink outline.** Outlines use the site ink (`#3743B8`, or the family's dark colour). Fills come from the site palette; flat, no gradients inside motifs.
4. **Motion.** Radial motifs (kawung, bintang, suria, cengkih) may turn slowly; others stay still. All motion stops for reduced motion and the motion toggle.
5. **Do not** redraw motifs ad hoc, add photo textures, mix in unrelated clip art, or put full-colour corak behind paragraphs.

## Where it appears in the prototype

- The identity (`IDENTITY=kain`, the default) is built from BaTech pieces, all in the `KAIN` block of `src/illustrations.mjs`:
  - the hero A window and the hanging-cloth sign-off
  - kepala bands on section beds
  - kain bands on the wide page heroes (products, solutions, onboarding, manufacturing)
  - kain swatches held by one medallion on the spot page heroes (about, resources, customers, contact, developers, technology, legal, partners, what's new, security, PLExyz)
  - motif medallions for small icons
  - the tepi band over the footer
- The Story page canvas: the vines carry circuit leaves and grow BaTech motifs, from plain ink at the top to full colour at the end.
- The Families page: Parang puzzle behind each house and on the cloth wall, Ceplok puzzle on each hanging cloth.

## Next

- Apply the quiet corak as section backgrounds and the full corak as card edges and dividers, page by page.
- Brand pieces beyond the website (decks, packaging, merchandise, office) can use the same tiles at print resolution.

## Guidelines page

`docs/design/batech-guidelines.html` (generated by `batech-guidelines.mjs` from the live motif code) is the visual guideline: the idea, the 24 motifs in five groups, anatomy, how the puzzle weave is built (four steps), colour, the three strengths, density, twelve website uses, family corak, applications beyond the website, motion, and do's and don'ts.
