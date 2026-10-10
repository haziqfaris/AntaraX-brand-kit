# 07 Interface rules

These apply to the website and to every product UI. Reference implementation: `haziqfaris/antarax-ai`, `prototype/site/styles.css` + `theme-c.css` + `theme-k.css`.

## Things we never ship

1. **No coloured top-border accent on cards.** The thick highlighted bar along a card's top edge reads as AI-generated. Cards get a 1px hairline (or 1.5px `#E6EEFE`) on all sides, or no border. The same goes for a coloured left stripe on quotes or callouts.
2. **No default browser controls.** Every control is styled:
   - a `<select>` becomes a row of **choice buttons** (the native select stays hidden so code keeps working); a native dropdown is allowed only for long lists, with `data-native`, and is then fully restyled;
   - radios, checkboxes and range sliders use the brand styles;
   - details/summary (FAQ) use the styled accordion.
3. **No uppercase mono labels** for non-data text; no all-caps buttons.
4. **No stock AI imagery,** mascots used as decoration, or giant technology-logo walls.
5. **No typewriter headlines.** The first paint must read as a whole sentence.

## Components

- **Buttons:** Poppins 600, 0.9375rem, sentence case, radius 12px, min-height 44px, 2px border. Primary: AntaraX blue. Ghost: transparent with blue text. Light: white on blue or navy panels. On a pilot or family page the primary may take the family colour.
- **Eyebrow:** sentence case with the intan marker, in blue (or `#CFE0FF` on dark).
- **Badges:** pill with the family colour and white text, followed by plain text, e.g. **Closed pilot** · Run as part of Managed AI.
- **Cards:** white, radius 20px, hairline border, padding 22–24px, content-sized height; hover lifts 2–3px with a soft navy shadow.
- **Panels:** radius 24–28px. Dark navy panels for Managed AI and "How the pilot works", with a numbered (01, 02…) mono step list.
- **Product mocks:** white card, radius 18px, soft shadow, real-looking UI built in HTML with **example data**, labelled "Example data". Prefer a real screenshot where one exists (Yara's guide screenshots); use an HTML mock where none does.
- **Comparison ("compared") cards:** each carries a small icon tile (64px, `#F4F6FB` ground, a 44px line-and-fill pictogram) above the heading.
- **"How it works" steps:** real product screenshots when they exist, each with a numbered step and a one-line explanation.
- **Choice buttons:** pill-ish 10–12px radius buttons in a wrapping row; selected = AntaraX blue fill, white text.
- **Forms:** one question at a time for the evaluation, with a progress bar and "Question n of 9"; radio options as full-width rows with a styled radio.

## Navigation

- **Mega-menu** opens per the established style: a large lead tile (Yara, with a BaTech bed), mid tiles (Janka, PLExyz Grid), and a list column (Closed pilots, each with its family icon and one-liner), with footer links "All closed pilots" and "Request pilot access". Solutions has problem cards and an industry list.
- One **Book a demo** button in the header. Mobile collapses to a toggle.

## Motion

- Easing `cubic-bezier(.2,.7,.2,1)`; springs only for small confirmations.
- Reveal on scroll is subtle (fade and 8–16px rise). Photos may slow-zoom.
- Every animation respects `prefers-reduced-motion` and the site's "Pause motion" button.

## Accessibility

- Contrast AA at minimum; family colours as text only in their dark shade.
- Focus visible on every control (AntaraX blue ring).
- Touch targets at least 44px.
- Decorative SVGs `aria-hidden`; meaningful images have alt text.
- Layout works at 390px with a 16px gutter and no sideways scroll.
