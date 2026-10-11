# 14 Product identity system

12 sets out how AntaraX and its products relate. This chapter covers the detail a designer needs to build or check one product:

- how its family, logo, motif and sub-products fit together;
- which icons change from product to product, and which stay the same;
- how BaTech looks in each family;
- how the product loads;
- its colour palette.

The visual guide (`guide/product-brands.html`) shows every part of it.

## The chain

Every product sits in one chain. Each link has one job, and no link does another's job.

```
Family        what kind of work          Tide: Optimize, "Read what's coming."
 ├─ gives     the family icon, the BaTech colour pair and the composition shape
 └─ Product   the brand customers buy    Janka
     ├─ Logo  who it is                  the J that never closes
     ├─ Motif what it does               padi: reading the harvest before it comes
     └─ Sub-products                     Stock, Scan & tag, Plan, Watch; PLExyz Trace
```

| Family | Family icon | Product | Logo | Motif | What the motif says |
|---|---|---|---|---|---|
| Ripple · Operate | wave with two dots | Yara | the A with the Ripple icon | **awan larat** | Human work, carried into digital (later, **sungai** for digital to automation) |
| Edge · Perceive | open hexagon with a node | PLExyz Grid | force field, shard, four zones | **petak** | Spaces in a real layout |
| Edge · Perceive | | PLExyz Crowd | force field, shard, scattered entities | **orbit** | Signals counted, never faces |
| Frame · Understand | four corners | AX Frame | the A with the Frame icon | **intan** | One world, seen many ways |
| Loom · Orchestrate | woven bars | Loom | the A with the Loom icon (drawn) | **tenun** | The weave itself |
| Motion · Navigate | split bolt | Motion | the A with the Motion icon (drawn) | **bunga cengkih** | Every vehicle, seen from above |
| Tide · Optimize | crescent with a dot (proposed) | Janka | the J that never closes | **padi** | Reading the harvest before it comes |
| Tide · Optimize | | Angka | the sheet-stack face | **congkak** | Counting where it all goes |
| Tide · Optimize | | Tinara | a new logo, to choose from three options | **kerawang** | One path found in the noise |

What each link gives:

- **The family gives the look.** It sets the family icon, the BaTech colour pair the motif is drawn in, and the shape its BaTech takes inside the product (see "BaTech by family").
- **The logo says who.** It is fixed and shown small on every screen, in the product's own colours.
- **The motif says what the product does.** It appears rarely: in empty states, at signature moments and in the loader. It is drawn in the family pair and comes from the family's niche.
- **The product is what people buy.** It has its own name, logo and palette, and is credited "by AntaraX".
- **Sub-products are parts of one product.** They never get their own logo or motif (see "Sub-products").

## Logo and motif

**A logo and a motif are always different.** A logo has to work at 16px on every screen and stay the same for years. A motif carries meaning, appears rarely and can move. If the two say the same thing, the motif adds nothing, and the product looks as if it repeats its own logo.

1. **A motif never repeats the idea in the logo.** Yara's logo already holds the Ripple wave. Its motif is **awan larat**: the old Malay scroll redrawn as a circuit trace, which is Yara's job today, carrying people's work on the floor into digital. When Yara automates that work, it takes a second motif, **sungai** (fibre optics, the flow that runs by itself), for its automation screens.
2. **No motif is a logo.** Tinara's logo was the kerawang motif; it now gets a logo of its own (see "Logos"), and kerawang goes back to being its motif.
3. **A motif never stands in for the logo,** never sits beside it in a lockup, and never takes the product's own colours.
4. **An own mark keeps its own idea.** Janka's J and padi both speak of sensing, in different forms: a letter with signal ticks, and a stalk ripening. Related, not repeated.

| Product | The logo's idea | The motif's idea |
|---|---|---|
| Yara | the A and the Ripple wave | awan larat: work carried into digital |
| AX Frame | the A and four corners | intan: one world, many faces |
| Janka | a J still sensing | padi: a harvest read early |
| Angka | a friendly stack of sheets | congkak: counting where it goes |
| Tinara | a new logo (options below) | kerawang: one path found in the noise |
| PLExyz Grid | force field, shard, zones | petak: spaces in a layout |
| PLExyz Crowd | force field, shard, entities | orbit: signals counted |
| Loom | the A and woven bars | tenun: the weave |
| Motion | the A and a split bolt | bunga cengkih: seen from above |

## Logos

Every product has a logo, and every logo follows one colour rule so they sit together as a family:

- **Main body in the product's own colour,** flat, no gradients.
- **AntaraX navy `#0B1B4F` for ink** (outlines, letters, small marks), or the product's own deep colour.
- **One or two highlights from the sparkle colours** inside the A: purple `#524FE9`, orange `#F47B3D`, cyan `#0CC4FB`, emerald `#12B76A`, indigo `#7171EA`; Tide pink `#E9579D` stands in for Grid's pink.
- A-marks are the A in AntaraX blue with the family icon in the family colour.

| Product | Logo | Status |
|---|---|---|
| Yara, AX Frame | A-mark | as is |
| Loom, Motion | A-mark, now drawn: `assets/products/loom/loom-mark.svg`, `motion/motion-mark.svg` | new |
| Janka | the J | as is; **option:** a bolder J in Janka's own colour, so its weight sits with the flat marks (`janka/options/janka-mark-bold.svg`) |
| Angka | the sheet stack | as is |
| PLExyz Grid | force field, shard, zones | as is; **option:** the zones in their AntaraX equivalents (teal to cyan, orange to sparkle orange, pink to Tide pink, lavender to indigo tint: `plexyz/options/plexyz-grid-mark-antarax-colours.svg`) |
| PLExyz Crowd, Trace, Flow, Transit, Site, Ward, Yard | the PLExyz system: Grid's force field and shard, each with its own spatial context on the floor | new: `plexyz/plexyz-<product>-mark.svg` |
| Tinara | **three options**, in garnet and gold | new: `tinara/options/` |
| PLExyz master mark | the purple circular mark | the file is still missing (11) |

Tinara's options:

- **A · The next one.** Three rising bars, the tallest in garnet, with a gold dot above it: the company to call next.
- **B · The opening.** A speech bubble with a T and a gold dot: how to open the conversation.
- **C · The signal.** A company with a gold signal reaching out from it: the one that is ready to buy.

Logos are built by `tools/build-logos.mjs`.


## Icons

Three kinds of icon, with three different rules:

| Kind | Different per | Where | Rule |
|---|---|---|---|
| **Family icon** | family | inside an A-mark; family badges on antarax.ai; the Families page | Six icons, one per family, each a single shape and a dot in the family colour. Tide's crescent (`assets/families/tide-icon.svg`) is proposed: the moon turns the tide, as Tide reads what is coming |
| **Product icon** (app tile, favicon) | product | home screens, browser tabs, app stores | The product's logo on the shared tile (12). Two products never share a tile |
| **Interface icons** | nothing: the same everywhere | buttons, menus, tables, feature introductions | One line set for every product (12, Elements; 60 drawn in `assets/icons/features/`, built by `tools/build-feature-icons.mjs`). Someone moving from Janka to Angka finds Settings, Export and Search drawn the same way. The product's colour reaches an icon only through state (selected, active) |

Two consequences:

- **One A-mark product per family.** An A-mark is the A plus the family icon, so a second A-mark product in the same family would share the first one's logo. Instead, the second product in a family gets its own mark, as Tide's three already have. A new product in a family that has no A-mark product yet may take the A-mark.
- **Interface icons never carry motifs or family shapes.** A family is shown by its icon, its colour pair and its BaTech composition, never by restyling the controls people use.

## BaTech by family

Each family's BaTech takes **its own shape**, so a glance at a sign-in screen or a report cover tells you which family you are in. All six follow the same BaTech rules (06, 12):

- the official drawings in the Quiet ink;
- mixed motifs from the family's niche, never a row of identical motifs;
- no straight cut: each one fades out, or meets only a container's own edge;
- the three cameos once each, small, inside the area.

| Family | Shape | What it shows | Where it sits | File |
|---|---|---|---|---|
| Ripple | **Rings** | motifs on arcs spreading from one corner, getting smaller as they travel | one corner of the panel; the two edges of that corner are its only crop | `ripple-rings.svg` |
| Edge | **Field** | a loose grid of motifs seen through one soft spot, like a sensor's view | behind an empty area, away from text; fades on every side | `edge-field.svg` |
| Frame | **Corners** | two small fans in opposite corners, framing what sits between them | top left and bottom right | `frame-corners.svg` |
| Loom | **Thread** | one awan larat thread wandering across, motifs strung on it | across the top of a panel or cover; both ends fade | `loom-thread.svg` |
| Motion | **Trail** | motifs rising along a path and growing toward the leading end; under 24px they become dots | rising from bottom left to top right | `motion-trail.svg` |
| Tide | **Swell** | the family's corak rising from the bottom edge in a wave, fading upward | along the bottom edge | `tide-swell.svg` |

Files are in `assets/families/compositions/`, built by `tools/build-product-motifs.mjs`:

- **Two strengths.** Quiet (the light ink) on white or near-white grounds, and **White on colour** (`-white.svg`, white at 32%) on a panel in the product's own colour. On a tinted panel the Quiet ink all but disappears, so a sign-in panel is either near-white with Quiet, or the product's colour with white.
- **Frame Corners comes as two files** (`frame-corner-tl` and `-br`), one per corner, so it fits a panel of any shape.
- **The cameos are findable.** Seth, the REKA mark and the AntaraX A are drawn at a size you can find, once each in every composition; their places are in `cameos.json`, and the visual guide can show them.
- **PLExyz Grid has no BaTech for now.** It keeps its own sign-in. Crowd and the other PLExyz products take the Edge Field when they need it.

Where each piece of BaTech goes in a product:

| Place | What |
|---|---|
| Sign-in panel, splash, report and guide covers, onboarding | The family composition, Quiet, in the place its shape gives it. Text sits clear of it, on a solid surface |
| Empty states | The product's motif alone, in the family pair, 72px |
| Dividers and email headers | The family's drift band (12): short and narrow, so it keeps one form for every family, with each family's own motifs |
| Signature moment | The product's motif does its one job (12) |
| Loader | The product's motif or mark (see "Loading") |

Products in the same family share the composition; their motifs, logos and colours keep them apart. Janka, Angka and Tinara all sit on the Tide swell.

## Loading

Every product has the same seven loading states, so people always know what kind of wait it is. Within those states, each product moves its own way. A state that is shared looks the same in every product.

| State | When | Shared or the product's own | Size |
|---|---|---|---|
| **None** | under about 400ms | | |
| **Inline** | inside a button, a row or a field | the product's own small loop, drawn from its mark (not its motif: motifs are never under 24px) | 16 to 20px |
| **Skeleton** | a screen or table loading | shared shapes, shimmering in the product's `subtle` colour | the content's own size |
| **Section** | a panel or chart waiting on data | the product's motif, moving | 48 to 64px |
| **Thinking** | AI working for more than a moment | the product's mark in its thinking motion, the sparkle beside it, and the action in words ("Forecasting 48 items") | 48 to 72px |
| **Progress** | a task with a known end (an import, a month-end match) | a bar in the product's colour ending in a pad, the count in words, and the product's own measure | full width |
| **Splash** | the app opening (installed app, first sign-in) | the logo and the credit line; the family composition draws on once | full screen |

**Nothing spins and nothing flips.** Loaders move the way the product works: they draw on, light in sequence, travel along a path, grow, gather and breathe. Each product's loaders come from its own logo and motif.

| Product | Inline | Section | Thinking | Progress measure |
|---|---|---|---|---|
| Yara | three dots travel along a wave, stage to stage | awan larat draws itself on, its leaves open one by one, and a pad runs along the trace | the A breathes while dots travel along its wave | stages done on the job's route |
| AX Frame | four corners close in and open | intan's facets light in turn while a pad travels round its edge | the corners breathe round the A, like the halo | parts of the record filled |
| Janka | six ticks rise in turn, like a level meter | padi grows, its grains appear from the bottom up, and it sways | the bar floats free of the J; the spark blinks; the ticks rise | grains on the stalk |
| Angka | a seed hops between two holes | seeds hop from hole to hole along the board | the top sheet lifts and settles; the face blinks | seeds in the store |
| Tinara | the small lattice lights along its path | kerawang's openings shimmer while the gold path draws and a pad runs along it | the chosen logo's own motion (for option A: the bars rise in turn and the gold dot lands) | steps along the path |
| PLExyz Grid | the four zones fill in turn | petak's cells fill one by one, then clear | the shard floats while the zones light in turn | zones placed |
| PLExyz Crowd | dots gather, then spread | a pad travels orbit's path while its dots gather | entities gather on the floor under the shard | nodes reporting |

Timing and care:

- Inline loops take 1.2 to 1.6 seconds. Section loaders run 2.4 to 3.6 seconds a cycle, and thinking pieces 1.8 to 2.6 seconds, each part a little out of step with the next.
- **Reduced motion:** every loader becomes still. Inline shows its first frame, section shows the motif whole, thinking shows the mark with the sparkle, and the words carry the state.
- A loader never sits on top of data. If something takes longer than 10 seconds, say what is happening and offer a way out.
- The working animations are in the visual guide (Loading).

## Colour palettes

Each product has a full palette, built from its own colour by `tools/build-product-palettes.mjs`. It writes `tokens/product-palettes.json` and `.css`, and contains:

- **Scale:** 11 steps, 50 to 950, in OKLCH, with the product's own colour sitting exactly on its nearest step.
- **Roles:**
  - `action`, `action-hover`, `action-pressed`: the product's own colour, at the first step that passes 4.5:1 with white text. Every product acts in its own colour; AntaraX blue is the focus ring everywhere.
  - `accent`, plus `accent-text`: the first step that reads as text on white (4.5:1).
  - `tint`, `subtle`, `border`, `on-tint`, `secondary`.
  - `dark-accent`: 4.5:1 on the dark ground `#071233`.
- **Secondary scale:** 11 steps around the product's second colour.
- **Neutrals:** 11 greys leaning a little toward the product's hue, for grounds, borders and quiet fills. Text keeps the shared navy and body colours, so every product reads the same.
- **Interface colours:** surfaces (ground, raised, sunken, hover, selected, overlay), text (strong, body, muted, disabled, on action, link), borders (subtle, default, strong, input), status (ok, warn, fault, info, each with its tint and its text colour), and the dark set.
- **Chart set:** five colours, the product's own first, then four shared chart hues in a fixed order. Each set passes the palette validator in light and dark: colour-blind separation, normal-vision difference, lightness band and contrast. Status colours are never in a chart set.

| Product | Character | Own colour | Action | Secondary | Chart order after the product |
|---|---|---|---|---|---|
| Yara | Ripple teal and navy: calm, clear, made for the shop floor | `#08B0B3` | teal `#098284` | navy `#0B1B4F` | blue, orange, magenta, violet |
| AX Frame | Frame blue with halo indigo: precise, technical | `#074AF8` | `#074AF8` | indigo `#524FE9` | aqua, orange, magenta, gold |
| Janka | signal cyan with the spark orange from its mark | `#0CC4FB` | `#077DA1` | orange `#F47B3D` | orange, aqua, violet, magenta |
| PLExyz Grid | shard violet with the four zone colours | `#2C09B2` | `#2C09B2` | zone teal `#4FD7D1` | aqua, orange, magenta, gold (or the four zones) |
| PLExyz Crowd | PLExyz purple until Crowd has its own theme | `#6040CC` | `#6040CC` | zone teal | orange, aqua, blue, magenta |
| Angka | warm plum with Lapis peach, on paper | `#6B3F6B` | `#6B3F6B` | peach `#E9906B` | blue, orange, aqua, violet |
| Tinara | **garnet** with gold: discreet, valuable (proposed) | `#7A1E3C` | `#7A1E3C` | gold `#D6A84F` | blue, orange, aqua, violet |
| Loom, Motion | the family colour | `#4904B3`, `#FC5D04` | `#4904B3`, `#BE4402` | navy | see tokens |

What changed and why:

- **Yara acts in teal, `#098284`,** the first step of Ripple teal that passes 4.5:1 with white text, not AntaraX blue.
- **Tinara moves from plum to garnet** (proposed). Its plum `#5B2B4A` sat within a few steps of Angka's `#6B3F6B`, and the two are in the same family. Garnet keeps Tinara's heritage maroon, sits closer to Tide's pink, and gold reads as a highlight on it. Its new logo options are drawn in garnet and gold.
- **AX Frame's secondary is halo indigo, not orange.** The app's orange `#FB9800` is REKA's colour and almost the warn colour, so a highlight read as a warning.
- **Janka's action is `#077DA1`**, the first step of its cyan that passes 4.5:1 with white text.
- **PLExyz Crowd gets PLExyz purple** until its theme is drawn.

Rules:

- Use roles in code (`--janka-action`), not raw steps, so a palette can change in one place.
- Text in a product colour uses `accent-text`, never the raw colour if it fails 4.5:1 (Yara's teal and Janka's cyan do).
- A chart takes the product's set in its fixed order. Colour follows the thing measured, never its rank. Six or more series fold into "Other" or small multiples.
- Dark mode uses `dark-accent` and `chart-dark`, chosen for the dark ground, never an automatic inversion.

## Sub-products

Inside a product, parts are named in one of the kinds below (naming rules in 12). Each part is a part, not a product: it never has its own logo, motif, colour or credit line.

| Kind | What it is | Example |
|---|---|---|
| **Area** | a section of the app, named in the navigation | Janka's Plan |
| **Line** | a way of using the product described on antarax.ai, with its own audience | AX Frame's Atlas |
| **Module** | an optional part a customer turns on, priced or entitled separately | Yara's Status API |
| **Add-on** | something sold on top of a plan | Angka's Lapisan Automations |
| **Product inside a product** | a separate product that lives in another's app | PLExyz Trace in Janka; Lapis in Angka |
| **Hardware** | a device sold with the product | PLExyz Crowd Node |
| **Internal** | REKA's own tools; customers never see them | AXLE |

**Lines exist only on the website so far.** The lines and areas in the website playbook (AX Frame's Atlas, Layers, Orbit, Pulse, Ledger, Lens; Yara's Work, Desk, Crew, Flow, View, Assist; Janka's and Angka's areas) are not what the apps show. Each app names its own areas, listed below. Until the owner decides, antarax.ai should describe what is built using the app's own names, and keep the lines as working names (11).

### Yara

| Part | Kind | Status | What it does |
|---|---|---|---|
| Dashboard, Work Orders, Projects, Job Cards, Customers, Teams | areas | built | Track each customer PO, its parts and every shop-floor stage |
| Worker app | area | built | Workers see and update their own job cards on a phone |
| Value split | module | built | Splits a PO's value across stages for costing |
| Status API | module | built | Lets a customer's own systems read job status |
| Commission | module | planned | Splits worker commission by stage |
| Reverse engineer | module | planned | Adds a reverse-engineering order type |
| AI intake | feature | backlog | Drafts a work order from a document or email |
| Working lines (website) | lines | working names | Work, Desk, Crew, Flow, View, Assist |

### AX Frame

| Part | Kind | Status | What it does |
|---|---|---|---|
| Insight | area | built | The quick read: health, monthly spend and what needs attention (the phone view) |
| Health | area | built | What AX Frame is watching and what is up |
| Projects (Blueprint) | area | built | Plans new infrastructure from a costed blueprint |
| Estate: Map, Ledger, Stacks & Systems | areas | built | Every asset, how they connect, and how costs add up |
| Money: Spend, Savings, Renewals, Vendors & Groups | areas | built | What you pay, could save, renew next, and to whom |
| Connect your AI | area | built | Lets a coding assistant propose your map, with your approval |
| Working lines (website) | lines | working names | Atlas, Layers, Orbit, Pulse, Ledger, Lens. Of these, only Ledger is a real screen, and Pulse is an internal AXLE menu |

### Janka

| Part | Kind | Status | What it does |
|---|---|---|---|
| Dashboard | area | built | Stock value, value at risk and urgent actions |
| Stock | area | built | What is on hand, every movement, receipt, order, kit, lot and count |
| Scan & tag | area | built | Labels, and scanning and counting from a phone |
| **PLExyz Trace** | product inside a product | built (simulated readers) | RFID tags, zones and readers, and where each tag was last seen |
| Plan | area | built | Forecasts demand, suggests reorders and drafts purchase orders |
| Watch | area | built | What is about to run out, and the money tied up or at risk |
| Organisation | area | built | Reports, the user guide, settings |
| Working areas (website) | areas | working names | Inventory, Forecast, Replenish, Risk, Insights. There is no Insights area, and the marketing brief rules out promising "AI-powered insights" |

### Angka

| Part | Kind | Status | What it does |
|---|---|---|---|
| Home, Inbox, To pay, Ledger | areas | built | What needs you, what arrived, what to pay, and all money in and out with its paperwork |
| Your business: Activities, People, Documents | areas | built | Your work, your contacts and every document Angka has read |
| How it's going: Figures, Ahead, Reports | areas | built | How the business is doing, what is coming, and a hand-off to your accountant |
| Ask Angka | feature | built | Questions about your own figures |
| **Lapis** ("Lapis by Angka") | product inside a product | built (tax invoices and online payment to come) | Makes quotations, invoices and receipts, sends them and chases payment |
| Lapis Business | plan | built | Paid Lapis, included in every paid Angka plan |
| Lapis API | API | built | Lapis documents for developers |
| Lapisan Automations | add-on | not built, not on sale | Recipes, schedules and connectors across products |
| Working areas (website) | areas | working names | Capture, Match, Books, Forecast, Assist |

**Ask Angka** is Angka's AI assistant, so by the shared-names rule it should be called **Assist** (11). **Ledger** names a screen in both AX Frame (every asset) and Angka (every transaction). That is allowed: both are the product's full record of its own things. It must never be used for anything else.

### Tinara

| Part | Kind | Status | What it does |
|---|---|---|---|
| New campaign | area | built | Set your profile, goal and filters; get a ranked list of companies |
| Overview | area | built | Your campaigns and activity at a glance |
| Campaigns | area | built | Scored target lists and an AI brief per company |
| Watchlist and signal feed | area | built (the feed is switched off) | Companies you saved, and new signals since |
| Profiles | area | built | Who you are, what you sell, and who buys it |
| Saved reports | area | built | The briefs you generated |
| Credits | area | built | Usage: 10 per search, 30 per brief |

### PLExyz Grid

| Part | Kind | Status | What it does |
|---|---|---|---|
| Operations | area | built | Facilities and spaces, cargo placement, movements and floor rounds |
| Commercial | area | built | Space bookings, tenants and their leases |
| Monitoring | area | built | Incidents, measures and reports |
| System | area | built | Policies, simulation, team and settings |
| Tenant portal | add-on | built | Each tenant sees only their own bays and bookings |
| AI pack | add-on | built | Help with placement, tenant emails and risk summaries |
| Port add-ons | add-ons | built | Customs, vessel scheduling and cargo taxonomy for ports |

### PLExyz Crowd

| Part | Kind | Status | What it does |
|---|---|---|---|
| Live, Alerts, Analytics, Reports | areas | built (simulated data) | Live occupancy per zone, alerts, history and a monthly report |
| Devices | area | built | The data sources and hardware tiers |
| Client view | area | built | The simple occupancy view for customers |
| PLExyz Crowd Node | hardware | simulated | Wall-mounted sensors that count people through walls |
| Gateway (now "Edge Gateway") | hardware | planned | One per site; runs the sensing locally. Rename to "PLExyz Gateway" |
| Wi-Fi controller and signal agent | hardware and software | planned | Occupancy from existing Wi-Fi |
| Safety module pack | add-on | planned | Forklift proximity, restricted zones and queues |

## Is all of this branding?

Most of it, yes. Some of it is product design, kept here because there is no product design system yet.

| Part | Brand or product design | Why it is here |
|---|---|---|
| The chain, logo vs motif, family icons, sub-product naming | Brand | Without them, nine products look like nine companies, or like one product repeated |
| BaTech by family | Brand | It is what makes a family recognisable at a glance |
| Palettes | Both | The product colour is brand; scales, roles and chart sets are product design |
| Loading states | Mostly product design | The signature loader is brand; the seven states keep products consistent to use |
| Plan names, times, support address (13) | Product standards | Shared so customers moving between products are never surprised |

When a product design system exists, the product-design parts move there, and this chapter keeps only the rules.
