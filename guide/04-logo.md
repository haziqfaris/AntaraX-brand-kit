# 04 Logo

Master file: [`reference/antarax-brand-guidelines.html`](../reference/antarax-brand-guidelines.html) (open in a browser; it has light and dark previews, every lockup and the animations). Production files: `assets/logo/`, `assets/families/`.

## The A mark

The device mark is an **A** in AntaraX blue `#0459F7` built from three solid paths, with a **sparkle** in its centre.

| Layer | ID in the master file |
|---|---|
| Top / apex sweep | `#layer-a-top` |
| Right foot | `#layer-a-right` |
| Left foot | `#layer-a-left-foot` |
| Sparkle: purple wing, orange point, cyan point, emerald sliver, indigo sliver | `#layer-sparkle-*` |

- The centre of the A is a **real mask** (a circle cut from the three blue paths), not a painted shape. Final empty-space size: **95px** on the master artboard.
- The **wordmark** is "antarax" in lower case, set with the mark. In running text always write "AntaraX".
- Files: `antarax-mark.svg` (blue on light), `antarax-mark-white.svg` (white on blue or dark), `antarax-mark-full.svg` (full lockup).

## The kain A

The A mark as a window onto the BaTech kain (06): the A filled with the corak on a light blue ground (`#EAF1FF`), a blue `#0459F7` outline, and the sparkle in its eye. It is the hero on antarax.ai and reka.re, and the large-format mark for print and events.

| File | What it is | Use |
|---|---|---|
| `assets/logo/antarax-a-kain.svg` | The kain A with the sparkle in its 95 eye | Heroes, banners, buntings, covers |
| `assets/logo/antarax-a-kain-open.svg` | The same A opened the way the family A-marks open (the eye grows from 95 to 300), the sparkle removed, a blue line round the opening | A frame for something placed in the eye: a QR code, a photo, an event's own art |

- **Large only.** Under about 200px use the plain A (`antarax-mark.svg`): the corak turns to noise when small.
- **On dark grounds** (navy `#071233`, REKA near-black) the eye shows the ground; a soft AntaraX blue glow behind the sparkle keeps it lit, as on reka.re. Never put a white disc behind the eye.
- **In the open A's eye**, centre the object on the eye (49.4% across, 59.7% down the file's box) and keep it inside the opening: a square up to about 55% of the A's width fits. A QR code sits on a white tile.
- Never crop, stretch or recolour the kain, add a second outline, or put the kain A beside the plain A.
- Source: the antarax.ai hero (`haziqfaris/antarax-ai`, `prototype/site/src/illustrations.mjs`, `heroWindow`). When the hero changes, copy it over `antarax-a-kain.svg` and run `node tools/build-kain-a-open.mjs` for the open one.
- Event print built with it: `assets/print/` (the roll-up bunting and the A3 QR poster, `tools/build-print.mjs`).

## Product family lockups

Each family has its own icon (in its family colour) that sits in the A's open centre in place of the sparkle.

| Family | Colour | Icon construction |
|---|---|---|
| Motion | `#FC5D04` | 2 separated straight polygons |
| Ripple | `#08B0B3` | 3 shapes: an organic curve and two true circles |
| Edge | `#12B76A` | 3 shapes: an organic curve, a rounded rect, a true circle (recoloured from teal to emerald to separate it from Ripple) |
| Frame | `#074AF8` | 5 shapes: symmetric brackets, lines and arcs |
| Loom | `#4904B3` | 10 rounded rects |
| Tide | `#E9579D` | **proposed:** a crescent with the family's dot (`assets/families/tide-icon.svg`, 11) |

Name variants per family: Full "AntaraX Motion", Centered and Medium "AX Motion", Short "AXM".

Known issue from the master file: Edge's small highlight sliver is about 19% larger in area than its source; nudge it before Edge art goes to print.

## Animations

1. **Splash (hero or app launch):** the sparkle fades in over the fixed A. For a family: the A starts solid, the centre opens to its size, then the family icon fades in.
2. **AI thinking:** the A stays still at its normal opening while the icon's separate pieces wiggle independently (different rotation, scale and timing), drifting in and out of sync. Use for "AI is working" states in products.
3. **Families page (antarax.ai/families):** selecting a family opens the A in the middle (the mask circle grows from 95 to 300 in A coordinates), the sparkle fades out and the family icon fades in. Paths for each icon: `assets/families/famicons.json`. Picking "All" closes it again.

All logo motion stops for reduced motion.

## Usage rules

- Clear space: at least the width of the A's foot on every side.
- On AntaraX blue or dark grounds use the white mark; the sparkle may stay in colour.
- Do not recolour the A, rotate or stretch it, outline it, add effects, or place the sparkle anywhere except the A's centre.
- Do not set the wordmark in another typeface.
- Product apps show either their **own mark** (own-mark products: PLExyz, Janka, Angka, Tinara) or the **AntaraX A with their family icon** (A-mark products: Yara, AX Frame, Loom, Motion), with "by AntaraX" as set text. Never a different A, and never the A beside a product's own mark. Rules for restyling own marks, lockups and the shared app tile: [12 Brand architecture](12-brand-architecture.md). Product mark files: `assets/products/`.
