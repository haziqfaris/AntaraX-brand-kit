# 05 Colour and type

Values live in [`tokens/tokens.json`](../tokens/tokens.json) and [`tokens/tokens.css`](../tokens/tokens.css). This page says how to use them.

## Colour

### Brand and neutrals

| Token | Value | Use |
|---|---|---|
| AntaraX blue | `#0459F7` | Logo, primary buttons, links, brand panels, eyebrows, focus |
| Blue hover | `#0347C8` | Hover and pressed |
| Blue 100 | `#E6EEFE` | Soft fills, pills, quiet borders, hover backgrounds |
| Navy | `#0B1B4F` | Headings, dark panels (Managed AI, "How the pilot works") |
| Body | `#3B4469` | Running text |
| Line | `rgba(11,27,79,.12)` | Hairlines and card borders |
| Background | `#FFFFFF` | Default page ground |
| Alternate | `#F4F6FB` | Alternate page ground |

**Balance:** white and navy carry the page; AntaraX blue marks what is brand or clickable. A page is mostly white, navy text, blue actions, with colour coming from the BaTech corak and family accents.

### Family colours

Ripple `#08B0B3` · Edge `#12B76A` · Frame `#074AF8` · Loom `#4904B3` · Motion `#FC5D04` · Tide `#E9579D`.

Each has a **tint** (86% toward white) for grounds and a **dark** (55%) for outlines and text on the tint (values in the tokens). Use a family colour:

- as the accent on that family's or product's pages (badges, the primary pilot button, chart marks, mock-UI highlights);
- in that family's corak and its icon;
- never as a page's dominant colour, never for body text on white (use the dark shade), never mixed with another family's colour in one component.

### Status

ok `#12B76A` · warn `#F79009` · fault `#F04438`: **only for real signal**, never decoration. (Edge's green and "ok" are the same hue; in Edge contexts label status in words as well.)

### Dark blueprint

The **Technology page** is dark: ground `#071233`, a **dotted** blueprint grid (1px dots every 24px, fainter dots every 120px), ink `#EAF0FF`, body `#B6C3EA`. Dots, never ruled lines. Product mocks on it stay as white cards. Use the blueprint only for technical depth (Technology, developer docs, Lapisan), not for selling pages.

### Gradients

Restrained. Allowed: a soft blue-to-violet wash on one feature tile; batik lukis gradients inside open family cloths. Not allowed: rainbow or neon gradients, gradients inside BaTech motif fills, gradient text. (REKA's orange gradient belongs to REKA.)

## Type

| Role | Face | Setting |
|---|---|---|
| Everything | **Poppins** 300–700 | Headlines 600; body 400; buttons 600 |
| Data | **JetBrains Mono** 500–700 | Every number in UI, IDs, codes, example-data labels, chips |

Scale (fluid):

- H1 `clamp(2.3rem, 4.2vw, 3.6rem)`, weight 600, line-height 1.06, tracking -0.025em, `text-wrap: balance`
- H2 `clamp(1.8rem, 3vw, 2.6rem)`, 600, 1.1, -0.02em
- Sub (lead) `clamp(1.05rem, 1.4vw, 1.25rem)`, 400, 1.45
- Body 1rem, 1.5; keep lines near 65 characters
- Eyebrow 0.9375rem, 600, sentence case, preceded by an **intan** (a 9px square turned 45°) in the same colour

Rules: sentence case; no uppercase mono labels except data; `font-variant-numeric: tabular-nums` where digits line up.
