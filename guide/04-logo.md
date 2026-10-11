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

## Product family lockups

Each family has its own icon (in its family colour) that sits in the A's open centre in place of the sparkle.

| Family | Colour | Icon construction |
|---|---|---|
| Motion | `#FC5D04` | 2 separated straight polygons |
| Ripple | `#08B0B3` | 3 shapes: an organic curve and two true circles |
| Edge | `#12B76A` | 3 shapes: an organic curve, a rounded rect, a true circle (recoloured from teal to emerald to separate it from Ripple) |
| Frame | `#074AF8` | 5 shapes: symmetric brackets, lines and arcs |
| Loom | `#4904B3` | 10 rounded rects |
| Tide | `#E9579D` | **no icon yet**; the bunga raya motif stands in (see 11 Open questions) |

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
- Product apps show either their **own mark** (own-mark products: PLExyz, Janka, Angka, Tinara) or the **AntaraX A with their family icon** (A-mark products: Yara, Frame, Loom, Motion), always with "by AntaraX" as set text. Never a different A, and never the A beside a product's own mark. Rules for restyling own marks, lockups and the shared app tile: [12 Brand architecture](12-brand-architecture.md). Product mark files: `assets/products/`.
