# PLExyz Grid — Brand & Theme Reference

Reference doc for AI-assisted work (copy, UI, code, marketing) on PLExyz Grid. Paste this into a chat or project knowledge base so generated output stays on-brand without re-deriving these decisions each time. Everything here was pixel-verified against the source logo file except where flagged.

---

## 1. Brand

- **Product**: PLExyz Grid — structured spatial intelligence for warehouses, ports, and facilities.
- **Tagline**: Presence + Placement + Intelligence Boundary
- **System principle**: Space (Force Field) + Entity (Core Shard) + Behaviour (Grid) = Insight. The logo is a formula, not a picture — three independent parts that combine into one meaning.
- **Parent brand**: PLExyz. Product family declared as Grid, Flow, Transit, Crowd, Site, Ward, Yard — sharing force-field size, core-entity size, line weight, and alignment rules per the original spec sheet. **Unverified**: only Grid has been rebuilt and checked pixel-by-pixel against a source file.

---

## 2. Logo construction

Three components, each with its own construction rule:

1. **Core Entity (Shard)** — faceted obelisk, 5 visible facets (top, left, left-lower, right, right-lower). Centered on the force field's vertical axis. Floats in the space above the grid, vertically centered between the apex and the grid's north edge (not centered in the full force-field height).
2. **Spatial Grid (Base)** — 4 zones: West, East, South (from source file) + North (added by design decision, not in the original source — see §6). All four fuse at one shared center point. West/East outer corners sit flush on the force-field boundary. North is top-face only, no side face (that corner faces away from the viewer in this isometric projection).
3. **Force Field (Boundary)** — offset hexagon, pointed top and bottom. 7-unit line weight, matched by every internal grid division — no element carries a heavier or lighter line than another.

**Proportion**: shard width (C) measured at ≈15.5% of force-field width (F) in the actual source file. The written spec sheet declares 30%. Not reconciled — flag this if asked to build a new mark from the spec sheet text alone.

---

## 3. Color

### Shard — officially declared
| Facet | Hex |
|---|---|
| Top | `#8542ED` |
| Left | `#6A2EF0` |
| Left, lower facet | `#4407FB` |
| Right (both facets) | `#2C09B2` |
| Outline, all elements | `#2C09B2` |

### Grid zones — measured from source file, not officially declared before this project
| Zone | Hex | Notes |
|---|---|---|
| West | `#4FD7D1` | teal |
| East | `#FD9001` | orange |
| South | `#FD4F85` | pink |
| North | `#CBB6FA` | very light purple — added zone, reserved/inactive connotation |

### App theme — light mode
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#F7F7FA` | app background |
| `--bg-soft` | `#FBFBFD` | subtle panel/input background |
| `--surface` | `#FFFFFF` | cards, sidebar |
| `--border` | `#E7E7EE` | hairlines |
| `--text` | `#1C1B2E` | primary text |
| `--text-dim` | `#75758C` | secondary text |
| `--text-faint` | `#A6A6BA` | placeholders, captions |
| `--navy` (primary action) | `#2C09B2` | buttons, links, active states |
| `--navy-hover` | `#3A14D6` | button hover |

Data-viz / accents always pull from the 4 grid-zone colors above, never invented separately (stat card borders, chart bars, badges, nav highlights).

---

## 4. Typography

- **Display / UI**: Poppins — weights 400, 500, 600, 700, 800
- **Mono / data / labels**: JetBrains Mono — weights 400, 500, 600
- Load via Google Fonts: `family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600`
- JetBrains Mono is reserved for small structural labels (nav eyebrows, timestamps, stat deltas, code), not body copy.

---

## 5. Wordmark

"PLExyz" set solid navy (`#2C09B2`), bold. "Grid" splits across its 4 letters, each mapped to a grid-zone color, with a thin 1px outline stroke for contrast (navy stroke on light backgrounds, white stroke on dark backgrounds — without it, 3 of the 4 zone colors fail WCAG contrast against white):

| Letter | Maps to | Fill |
|---|---|---|
| G | North | `#CBB6FA` |
| r | West | `#4FD7D1` |
| i | East | `#FD9001` |
| d | South | `#FD4F85` |

## 6. Logo variants

- **Primary / Full Color** — default, all facet/zone colors as declared.
- **White on Dark** — single light tone (`#ffffff` fills at reduced opacity for grid/shard, full white for shard's brightest facets), for use on navy or dark panels. Needs its own wordmark version too (`wordmarkWhiteSVG`) — the standard wordmark is invisible on dark backgrounds.
- **Monochrome** — single brand hue for every fill, outline strokes retained to keep facets/zones distinguishable.
- **Solid / Single Color** — flat silhouette, no strokes at all. Use below ~48px where line weight stops reading.
- **Device Mark** — icon alone.
- **Wordmark** — text alone.
- **Lockup, Centered** — icon stacked above wordmark, both centered. Use where the mark sits alone against open space (splash screens, login cards).
- **Lockup, Horizontal** — icon left, wordmark right, vertically centered. Use in headers/sidebars paired with left-aligned text or nav.

---

## 7. Do not

- Recolor a facet outside the declared palette.
- Resize or reposition the shard independently of the force field.
- Rotate the mark, or any single element within it.
- Add or remove a grid zone without a documented reason (North's addition is documented — see §6/§8).
- Change line weight on one element only — 7 units is uniform across the whole mark.

## 8. Minimum size

Line weight (7 units) is ~0.8% of the mark's width. Recommended floor for the full-color mark: **48px**. Below that, switch to the Solid variant rather than letting the line weight degrade.

---

## 9. UI patterns established (dashboard mockup)

- **Splash**: centered lockup (icon above wordmark), soft radial teal/lavender glow on light background, loading bar sweeping teal → orange → pink.
- **Login**: two-panel split.
  - Left (info panel): navy-to-purple gradient (`150deg, #2C09B2 → #4b1cd6 → #6A2EF0`), white icon + white wordmark as a horizontal header lockup, headline + 3 feature points each tagged with a zone-color dot, oversized faded mark shapes bleeding off two corners.
  - Right (form panel): light background with a genuine seamless hex-tile pattern behind the card (pointy-top hexagons, ~34 unit radius, navy stroke at ~10% opacity) — not a repeating image, an actual tiled `<pattern>`. Card lockup is stacked/centered (icon above wordmark), not horizontal.
- **Dashboard**: light theme, sidebar with horizontal lockup + nav list (active item gets light-purple background + navy text), header with search + bell + avatar, 4 stat cards each top-bordered in a different zone color, zone-occupancy bars using actual zone colors, 7-day activity chart cycling the 4 zone colors, assets table with status badges (ok=green, warn=orange, idle=gray).

---

## 10. Reference geometry

Raw path data for the device mark, in a shared local coordinate space (`viewBox="-40 -40 860 1000"`). Reuse verbatim — do not redraw or approximate; every value here was checked against the source file at sub-pixel precision.

```js
var PARTS = {
  hex: 'M388,4 L771,234 L771,668 L388,902 L5,670 L5,234 Z',
  grid: {
    north:    'M390,614 L196,498 L390,363 L579,500 Z',
    tealTop:  'M4,620 L196,498 L390,614 L193,738 Z',
    orangeTop:'M390,614 L579,500 L773,620 L588,737 Z',
    pinkTop:  'M390,614 L588,737 L390,865 L193,738 Z',
    tealSide: 'M4,620 L193,738 L193,788 L4,670 Z',
    orangeSide:'M773,620 L588,737 L588,787 L773,670 Z',
    pinkSideL:'M193,738 L390,865 L390,915 L193,788 Z',
    pinkSideR:'M390,865 L588,737 L588,787 L390,915 Z'
  },
  shard: {
    // top, left, and lower-left facets are exact bezier paths extracted from the source SVG.
    // right and lower-right facets are mirrored from left/lower-left (source fused them into
    // its line-art layer since they're the same dark tone as the outline).
    top:'M328.621,198.755C331.325,193.969 332.638,195.161 378.71,151.722C387.793,143.159 388.287,143.445 389.189,143.968C390.267,144.594 446.971,196.276 447.203,196.726C447.275,196.866 447.223,196.871 447.469,198.685C446.397,199.127 389.663,234.822 389.263,235.128C387.943,235.013 387.994,235.005 386.668,235.15C365.75,222.364 332.224,200.55 328.621,198.755Z',
    left:'M326.987,201.4C331.579,204.301 382.96,236.757 384.336,237.752C386.349,239.208 386.126,239.857 385.619,332.501C385.311,388.674 384.764,388.619 384.991,393.493C385.507,404.6 385.132,404.573 385.243,405.529C385.943,411.566 381.407,406.563 376.292,403.902C371.656,401.492 342.069,386.102 318.554,373.38C317.432,372.785 304.822,366.102 304.293,366.416C303.967,366.61 304.531,367.357 304.206,367.551C300.204,360.208 302.32,359.787 303.485,351.497C305.786,335.11 323.997,215.372 325.797,203.538C325.797,203.538 326.891,201.571 326.987,201.4Z',
    lowerLeft:'M310.773,373.031C315.905,375.614 315.908,375.564 316.351,375.79C316.836,376.02 322.119,378.525 322.4,378.678C324.976,380.085 344.454,390.725 354.712,396.082C383.687,411.214 383.443,412.079 386.276,412.135C387.451,418.381 386.466,469.881 386.876,474.587C387.434,481.007 381.004,470.169 374.647,462.396C370.948,457.873 309.327,375.296 309.627,374.5C309.846,373.919 310.554,373.612 310.773,373.031Z',
    right1:'M449.113,201.4C444.521,204.301 393.14,236.757 391.764,237.752C389.751,239.208 389.974,239.857 390.481,332.501C390.789,388.674 391.336,388.619 391.109,393.493C390.593,404.6 390.968,404.573 390.857,405.529C390.157,411.566 394.693,406.563 399.808,403.902C404.444,401.492 434.031,386.102 457.546,373.38C458.668,372.785 471.278,366.102 471.807,366.416C472.133,366.61 471.569,367.357 471.894,367.551C475.896,360.208 473.78,359.787 472.615,351.497C470.314,335.11 452.103,215.372 450.303,203.538C450.303,203.538 449.209,201.571 449.113,201.4Z',
    right2:'M465.327,373.031C460.195,375.614 460.192,375.564 459.749,375.79C459.264,376.02 453.981,378.525 453.7,378.678C451.124,380.085 431.646,390.725 421.388,396.082C392.413,411.214 392.657,412.079 389.824,412.135C388.649,418.381 389.634,469.881 389.224,474.587C388.666,481.007 395.096,470.169 401.453,462.396C405.152,457.873 466.773,375.296 466.473,374.5C466.254,373.919 465.546,373.612 465.327,373.031Z'
  }
};
```

Fill rules: grid faces get `stroke="#2C09B2" stroke-width="7"`; shard faces get `stroke="#ffffff" stroke-width="4"` (full-color mode only — see variant rules in §6 for mono/solid/white treatment); hex boundary gets `stroke="#2C09B2" stroke-width="7" fill="none"`.

---

## 11. Known open items — surface these, don't silently resolve them

- Shard proportion: 15.5% measured vs. 30% spec-declared. Unreconciled.
- North grid zone is a deliberate addition made in this project, not present in the original source file.
- Wordmark uses live `<text>` in Poppins, not converted to outlines. Depends on the font being reachable wherever it renders. Convert to outlines before handing an SVG off externally.
- Grid's internal fold lines measure thinner (~4-5 units) than the 7-unit boundary in the actual source file. Current builds use 7 uniformly per explicit direction, not source fidelity.
- Product-family consistency claims (§1) apply only to Grid; other product marks haven't been built or checked.

---

## 12. Source files

- `plexyz-grid-logo.html` — full interactive brand guideline document: construction reference, color system, minimum size, usage variants, do/don't grid, downloadable device mark / wordmark / lockups (SVG + PNG).
- `plexyz-grid-dashboard-mockup.html` — theme mockup: splash, login (two-panel), dashboard.
- `plexyz-grid-device-mark.svg` / `.png` — icon alone, transparent background.
- `plexyz-grid-wordmark.svg` / `.png` — "PLExyz Grid" text lockup alone, transparent background.
- `plexyz-grid-lockup-centered.svg` / `.png` — icon stacked above wordmark, transparent background.
- `plexyz-grid-lockup-horizontal.svg` / `.png` — icon left, wordmark right, transparent background.
- All PNGs exported at 2000px on the long edge. All SVGs are the literal output of the same generator functions used throughout this project — not redrawn or re-approximated.
