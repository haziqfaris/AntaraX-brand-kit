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
6. **No text too small to matter.** Facts a buyer needs (pricing basis, add-ons, where data runs) are never set at 11–12px in mono capitals while "Talk to us" sits at price size. If it is worth saying, it is readable; if not, cut it.
7. **No block that repeats the one before it.** One closing call to action per page; one explanation of each product per page; a benchmark shown once.

## Components

- **Buttons:** Poppins 600, 0.9375rem, sentence case, radius 12px, min-height 44px, 2px border. Primary: AntaraX blue. Ghost: transparent with blue text. Light: white on blue or navy panels. On a pilot or family page the primary may take the family colour.
- **Section labels (owner, 14 October 2026):** none by default. A small label above a heading usually repeats the heading and reads as generated. Keep one only when it says something the heading doesn't: "Closed pilot", "Sources", "Illustrative scenario", "Experimental".
- **Eyebrow and markers:** the one eyebrow a page keeps sits above its h1, in sentence case, marked with the **sparkle in the page's colour** (Yara teal, Janka orange, PLExyz green, Frame blue; AntaraX blue elsewhere). Never a diamond (intan) bullet, a rotated square or a dot as a marker; the sparkle stays still and never spins.
- **Badges:** pill with the family colour and white text, followed by plain text, e.g. **Closed pilot** · Run as part of Managed AI.
- **Cards:** white, radius 20px, hairline border, padding 22–24px, content-sized height; hover lifts 2–3px with a soft navy shadow.
- **Panels:** radius 24–28px. Dark navy panels for Managed AI and "How the pilot works", with a numbered (01, 02…) mono step list.
- **Product mocks:** white card, radius 18px, soft shadow, real-looking UI built in HTML with **example data**, labelled "Example data". Prefer a real screenshot where one exists (Yara's guide screenshots); use an HTML mock where none does.
- **Comparison ("compared") cards:** each carries a small icon tile (64px, `#F4F6FB` ground, a 44px line-and-fill pictogram) above the heading.
- **"How it works" steps:** real product screenshots when they exist, each with a numbered step and a one-line explanation.
- **Choice buttons:** pill-ish 10–12px radius buttons in a wrapping row; selected = AntaraX blue fill, white text.
- **Forms:** one question at a time for the evaluation, with a progress bar and "Question n of 9"; radio options as full-width rows with a styled radio.

## Product pages (owner, 14 October 2026)

- **Lead with the problem in money.** The hero names what the problem costs; the value calculator comes straight after it, so a visitor sees a figure from their own inputs in seconds; one outcome line follows, with no figure, percentage or timeframe (03, claims rule 3).
- **Calculators work in ringgit,** with defaults set for Malaysian businesses, and convert to USD only when the visitor asks.
- **About eight blocks:** hero, your figure, the problem, how it works, features, pricing basis and start, questions, keep reading. Each product is explained once.

## Navigation

- **Mega-menu** lists the products people can buy: a large lead tile (Yara), mid tiles (Janka, PLExyz Grid). Closed pilots get **one** entry, "Six more in closed pilot", leading to the pilots page; they are never listed one by one in the menu (owner, 14 October 2026).
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
