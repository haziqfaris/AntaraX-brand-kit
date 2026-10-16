# 13 Shared product standards

What every AntaraX product does the same way, so a customer who uses two products meets one company. Each product keeps its own look (12); these standards cover the words, addresses, formats and patterns underneath it. They apply to every product app, its emails, its help and its exports. Where a product's code uses other names internally (a `tenant` table, a `company_id` column), the standard covers what people read, not the code.

The audit of each app against these standards is at the end. Items marked **(owner)** wait on a decision in [11 Open questions](11-open-questions.md).

## 1 Words

One word for each shared idea, in every product. Product-specific things keep their own words (a job card, a forecast, a bay).

| Idea | Use | Not |
|---|---|---|
| The customer's account | **organisation** on settings, billing, invites and AXLE. A product for owner-run businesses may say "your business" in its own sentences (Angka) | company, tenant, client, partner, organization (US spelling) |
| A separate space inside an organisation, where a product has them | **workspace** | project (unless it is a project), site, space |
| A person with access | **member** | user (on screen), staff, seat (except on billing screens) |
| Shared roles | **Owner** (billing, members, deleting the organisation) · **Admin** (settings and members) · **Member** (does the work) · **Viewer** (reads only) | Superadmin, Administrator, "Owner / CEO / MD", ADMIN in capitals, abbreviations |
| Product roles | Allowed in addition, named for the job: Supervisor and Worker in Yara | inventing a new word for Admin or Member |
| Joining | **Invite** someone; they **join** | add user, onboard user |
| Paying | **Plan** and **Billing** | tier, package, subscription level |
| REKA people helping inside a customer's organisation | **REKA support** | AXLE, REKA admin, platform admin |
| Getting in and out | **Sign in**, **Sign out** | Log in, Login, Logout, Sign on |
| The AI assistant | **Assist**, with the sparkle (12). Angka keeps **Ask Angka** (owner) | Copilot, bot, a new name per product |
| Settings | **Settings** | Preferences, Config, Admin |

## 2 Addresses and contacts

| What | Standard |
|---|---|
| Product app | `<product>.antarax.ai` (yara, janka, grid, frame, angka, tinara, crowd). Never a `vercel.app`, `netlify.app` or other platform address in front of a customer |
| Admin console | `axle.antarax.ai`, one console for every product (antarax-api decision 0009). Until it exists, `axle.<product>.antarax.ai` |
| Developers | `api.antarax.ai` and `lapisan.antarax.ai` |
| Product's public page | antarax.ai under `/products/` or `/pilots/` (02) |
| Product email sender | `<Product> <product@antarax.ai>`, for example `Janka <janka@antarax.ai>`, sent through Resend. Mail sent on a customer's behalf: `<Organisation> via <Product> <product@antarax.ai>` (Angka's pattern). antarax.ai sends but does not receive, so every product email sets **Reply-To: `support@go.antarax.ai`** |
| Support | **`support@go.antarax.ai` for every product**, answered by the team at REKA. Wording, everywhere: "Need help? Email support@go.antarax.ai and the team will reply." Do not promise a reply time until one is kept |
| Sales and demos | The antarax.ai form (it emails holla@reka.re today). An Enterprise "Talk to us" link goes to **`sales@go.antarax.ai`** with the product and plan in the subject |
| Privacy and legal requests | **`privacy@go.antarax.ai`** on every terms and privacy page, and as the legal contact |

Role addresses only, decided by the owner on 11 October 2026: `support@`, `sales@`, `privacy@` and each product's sender. **The three role addresses live on `go.antarax.ai`** (owner, 11 October 2026), which receives mail through Google Groups; `antarax.ai` itself only sends, through Resend. Create the three groups before the apps point at them. If `antarax.ai` is later given its own mail exchange, the role addresses can move to it; until then, never show an `@antarax.ai` address that a person is expected to write to.

Never show a personal address, "contact your REKA account manager" unless one is really assigned, or a platform address. A personal address in a product sends customers' mail to one person's inbox: it is lost when that person is away or leaves, it ties the product to a person rather than the company, and it puts that address in front of anyone who scrapes the page. Internal settings, such as AXLE's list of super-admins and test data, are not customer-facing and may keep named people.

## 3 Plans, money, dates and times

**Plans.** One ladder of plan names, **Rise**, chosen by the owner on 11 October 2026. It is drawn from the AntaraX theme of Earth, Cosmos and Quantum (playbook §13) and climbs from the ground, to the stars, to the quantum. Every product except Angka uses it, taking only the steps it needs, in order:

| Step | Name | Theme | For | Shown as |
|---|---|---|---|---|
| 1 | **Seed** | Earth | starting out, free | "Seed · free to start" |
| 2 | **Terra** | Earth | one person or one site | "Terra · for one person" |
| 3 | **Nova** | Cosmos | a team | "Nova · for teams" |
| 4 | **Galaxy** | Cosmos | a business with several teams or sites | "Galaxy · for growing businesses" |
| 5 | **Quantum** | Quantum | enterprise terms, the most intelligence | "Quantum · for enterprises" |

- **Always pair the name with who it is for**, on plan cards, upgrade prompts and invoices ("Nova · for teams"). A themed name alone does not tell a buyer which plan is bigger; the descriptor does.
- On invoices and receipts: the product then the plan, "Janka Galaxy".
- A trial is a period on a plan, and a closed pilot is a stage, not a plan. Neither is a plan name.
- **Angka keeps its own names** (Solo, Business, Team, Enterprise, and Lapis Business): its plans are live with customers and written for owner-run businesses.
- Names never reuse a line, area, motif or family name. That is why there is no "Orbit" or "Pulse" plan.
- Prices stay the product's own; names are shared. Mappings are in the audit below.

**Money**

- The symbol directly before the amount, commas for thousands: `RM1,200.00`, `US$45.00`. Write `US$`, never a bare `$`.
- Two decimals in tables and invoices; whole numbers allowed in summaries (`RM1,200`).
- Never convert silently. Totals in more than one currency stay grouped: `RM1,200 + US$45` (AX Frame's rule, now everyone's).
- Every amount in JetBrains Mono with tabular figures (05).
- antarax.ai shows USD first with an MYR toggle (03); inside a product, the organisation's own currency.

**Dates and times**

| Where | Format |
|---|---|
| On screen | `11 Oct 2026` |
| In sentences and emails | `11 October 2026` |
| Exports, file names, APIs | `2026-10-11` |
| Times on screen and in exports | 24-hour, `14:30` |
| Times in sentences (emails, notifications) | 12-hour, `2:30 pm`: "Your report is ready, sent at 2:30 pm MYT." |
| Relative | "5 min ago" up to a day, then the date |
| Time zone | The organisation's time zone, default Malaysia (`Asia/Kuala_Lumpur`). Write `MYT` after a time in emails and exports |

## 4 Emails

Every product email uses one template, the one built for the Lapisan console (antarax-api):

1. **Header:** the product's mark as a PNG (mail clients do not draw SVG), its name and "by AntaraX"; optionally the family's Quiet drift band under it, as an image. The structure is shared; the colours are the product's own (its action colour for the button, its ground), so Angka's warm paper and plum stay.
2. **Heading:** one plain sentence.
3. **Body:** the words, short. Where there are steps, a numbered "What happens next".
4. **One button** (bulletproof, works in every mail client), saying what it does.
5. **The link written out** in mono, with how long it works.
6. **Footer:** why the email came, the credit line ("Janka by AntaraX, from REKA."), the legal line, the support line.

Tables and inline styles only, light only, and a plain-text part that says the same with the link first. Emails people can opt out of (digests, reminders, alerts) carry a one-click `List-Unsubscribe` header and a line in the footer saying how to stop them (AX Frame's pattern); sign-in, invite and security emails do not. Subject lines are a plain sentence in sentence case, no emoji, no exclamation mark; the sender name already says which product it is. A mail provider that refuses is logged and the person sees what went wrong in words.

## 5 Copy patterns

| Pattern | Shape | Example |
|---|---|---|
| Empty state | The product's motif (12) · a title naming what is missing · one line saying what will appear and how · one action | **No forecasts yet** · Run a forecast to see what to reorder, and when. · *Run forecast* |
| Error | What failed · what to do · a reference in mono for support when there is one. No "Oops", no blame, no exclamation mark | Couldn't save the job. Check your connection and try again. `ERR-1042` |
| Success | Past tense, what happened, six words or fewer; Undo where it can be undone | Order drafted. *Undo* |
| Destructive confirmation | Name the thing and the consequence; the button names the action | Delete 3 jobs? Their history goes too. *Delete 3 jobs* |
| Loading a task | The action, ending in -ing | Forecasting 48 items |
| Buttons | Verb first, sentence case, no full stop | Book a demo · Run forecast |

## 6 The admin console (AXLE)

AXLE is REKA's internal console for running every product. Customers never see its name or reach it (03).

- **One name:** "AXLE", with the product as context ("AXLE · Janka"), never "REKA Admin" or a product-branded name.
- **One address:** `axle.antarax.ai` (see 2).
- **One look:** dark bars, light page (owner, 15 October 2026). The sidebar and the AntaraX top bar are dark (`#071233`, raised `#0C1B47`) with REKA orange `#FB9800` as the accent (it is REKA's tool) and an orange `AXLE` tag after the brand pill; the page is light (`#F5F7FC`, white cards, navy ink). Poppins and JetBrains Mono, the AntaraX A in the corner. The full standard and the template every AXLE is built from are in `haziqfaris/AntaraX-Dashboard-kit`: start with `axle/README.md` (spec v1.0, the final mock, the tokens).
- **Two modes everywhere:** Dashboard for the business and R8 for the machinery, switched at the top of the sidebar. Every product has R8 Base; a product that runs machinery of its own has R8 Full (owner, 15 October 2026).
- **The sidebar:** groups are folding cards with a tinted icon tile and a title in the group's colour; the current page is an orange tint with orange text and the intan, never a side stripe (owner, 15 October 2026).
- **One sign-in** for REKA staff across products, when the single console exists.

## 6a The AntaraX shell in customer apps

Each product's customer app is its own: identity, colours, shape, navigation and UI. A small shell stays the same everywhere (owner, 15 October 2026):

- the top bar's order, with Help and the account at the far right;
- the account and Help menus;
- the standard pages under `/settings`, `/account`, `/guide` and `/help`;
- the shared roles;
- getting in, banners, notifications, Assist, Send feedback, and what dialogs, toasts, errors and empty states say.

The full standard is in `haziqfaris/AntaraX-Dashboard-kit`: start with `app/README.md`.

## 6b AI in the interface

The same pieces wherever a product shows AI work, so a customer reads AI the same way in every product. They are the interface layer (B1) of the AntaraX AI framework (`haziqfaris/ai-framework-heuristiks`, its layer page B1 and docs 03, 21 and 25); its gateway supplies the words and the outcomes, the product draws them in its own style (owner, 16 October 2026).

| Piece | What it is | Rules |
|---|---|---|
| **The mark** | The AntaraX sparkle beside every AI result, with "AI" in words: "Suggested by AI", "Read by AI" | Never a vendor's name on a screen; never decoration (12) |
| **The suggestion** | The answer, then **Accept**, **Change** and **Dismiss** | Each button reports the outcome to the gateway (used, corrected, not used), so AXLE's R8 → AI flow counts it. Nothing is applied until a person accepts, unless the card's guardrail applies it |
| **Why** | The sources it answered from, as chips that open them; a confidence in words ("likely", "unsure") as well as any colour | A retrieval answer always shows its sources; confidence is never shown by colour alone |
| **Applied by AI** | "Applied by AI · Undo" on what a guardrail applied without a person | The undo is always there for the card's undo window |
| **Thinking** | The thinking motion (12, 14) and the action in words ("Reading the invoice") | After 10 seconds, offer the way without AI ("Type it yourself"); never a spinner |
| **AI is off, or stopped** | The gateway's note, in a neutral panel, then the way without AI: "AI is off for this. Type the delivery note number." "AI is busy just now." "This month's AI allowance is used up." | Never an error style, never an error code; the person can always finish without AI |
| **Streaming text** | Text that arrives as it is written | Announced politely to screen readers, once complete, not word by word |

The full words are the gateway's (`noteFor` in the framework's gateway); a product translates them, never rewrites what they mean.

## 7 Languages

- **British English** in every product (03): organisation, colour, cancelled.
- **Bahasa Malaysia is parked** (owner, 11 October 2026). Products are English only for now. What already exists in Malay stays as it is (Yara's worker screens and its Malay help answers); nothing new is translated until the owner reopens it. When it reopens, start with front-line screens. Formats (dates, money) do not change with the language.
- Translations are written, not machine output left unchecked.

## 8 Guides and help

- `/guide`: the user guide, in REKA's user-guide format (task IDs, steps, a screenshot, "You should see"), as Yara and Janka already do.
- `/help`: answers to common questions, public before sign-in where they are not private.
- One **Help** item in every product's menu, and a help link on sign-in.
- Guide covers carry the product mark and the family's Quiet drift band; chapter breaks use the drift band (12).

## 9 Reports and exports

- **PDF cover:** the product mark, the report title, the organisation, the date range, "Generated 11 Oct 2026, 14:30 MYT", and the family's Quiet drift band under the header.
- **Every page footer:** "Janka by AntaraX, from REKA." · page 2 of 5 · "AntaraX, a product line of REKA Inisiatif Sdn Bhd."
- **File names:** `<product>-<what>-<organisation>-<YYYY-MM-DD>.<ext>`, lower case with hyphens: `janka-forecast-acme-plastics-2026-10-11.pdf`.
- **CSV:** UTF-8, ISO dates, plain numbers with the currency in its own column, a header row in plain words.

## 10 Dark mode and accessibility

- **Light first.** Every customer-facing product works in light. Dark mode is optional; where a product offers it, it follows the system setting with a light/dark/system choice (Angka's pattern) and uses the dark product ground (12, tokens). AXLE has dark bars around a light page (6).
- **Accessibility baseline in every product:** WCAG 2.2 AA contrast; a visible AntaraX-blue focus ring; targets at least 44px; everything reachable by keyboard; all motion stops for reduced motion; images and icons named or hidden from screen readers (07).
- **One automated check** (axe or equivalent) runs on each product's main screens in its CI.

## Reference implementations

Where one product already does it well, the others copy it rather than starting again:

| Standard | Copy from |
|---|---|
| Email template | The Lapisan console mailer (`antarax-api/apps/console/lib/mailer.ts`), with AX Frame's unsubscribe headers (`axframe/src/lib/email.ts`) |
| Money | Angka's `lib/money.ts` (integer minor units, grouped currencies), writing `US$` for dollars |
| Dates and time zone | Yara's `src/lib/utils.ts` (pinned to Malaysia time) and AX Frame's per-workspace time zone |
| Guides and help | Yara's `/guide` and `/help`; Angka's `/help` |
| Reduced motion | AX Frame (31 places) and Janka |
| Dark mode | Angka (light, dark, system) |

## Audit, 11 October 2026

Read from each repository. ✓ meets the standard · ◐ partly · ✗ does not.

| | 1 Words | 2 Addresses | 3 Plans, money, dates | 4 Emails | 5 Copy | 6 AXLE | 7 Languages | 8 Help | 9 Exports | 10 Access |
|---|---|---|---|---|---|---|---|---|---|---|
| **Yara** | ◐ | ◐ | ◐ | ◐ | ✓ | ◐ | ◐ | ✓ | ◐ | ◐ |
| **Janka** | ◐ | ◐ | ◐ | ✗ | ◐ | ◐ | ◐ | ◐ | ✓ | ◐ |
| **PLExyz Grid** | ✗ | ✗ | ✗ | ✗ | ◐ | ✗ | ✗ | ◐ | ✗ | ✗ |
| **PLExyz Crowd** | ✗ | ✗ | ◐ | ✗ | ✗ | ✗ | ✗ | ✗ | ◐ | ✗ |
| **AX Frame** | ◐ | ✗ | ◐ | ◐ | ✓ | ◐ | ◐ | ◐ | ◐ | ◐ |
| **Angka** | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ◐ | ✓ | ✓ | ◐ |
| **Tinara** | ◐ | ✗ | ✗ | ✗ | ◐ | ✗ | ✗ | ✗ | ◐ | ✗ |

No product yet has an automated accessibility check, a shared plan name, or the shared support address.

### What each app needs

**Yara**
- Words: "Organization" → Organisation (`src/components/shared/Sidebar.tsx:72`); roles "Owner / CEO / MD" → Owner, "Operation Manager" → Admin, "REKA staff" → REKA support (`src/lib/constants.ts:10-16`); keep Supervisor and Worker as product roles.
- Addresses: sender `Yara <no-reply@antarax.ai>` → `Yara <yara@antarax.ai>`; the help fallback "contact the Yara AXLE team" (`src/app/help/shared.tsx:37`) → the support line; fill the legal placeholder "[privacy contact email]" (`src/lib/legal.ts:15`).
- Emails: the shared `frame()` is close; change "Powered by AntaraX Ripple" to "by AntaraX" and the sign-off to the credit line (`src/lib/email/templates.ts:37, 83`); send invitations by email as well as WhatsApp; notification emails move from plain text to the template.
- Plans: name the AXLE "packages" from the ladder.
- AXLE: "Yara AXLE" → "AXLE · Yara". Languages: British spelling across management screens. Exports: prefix CSVs with `yara-` and the organisation. Access: focus rings beyond inputs, reduced motion everywhere, an axe check.

**Janka**
- Words: roles Admin, Manager, Worker; add Owner, and map Manager to Admin or keep it as a product role.
- Addresses: `hello@reka.re` on sign-in and access screens (`src/auth/LoginScreen.tsx:105`, `src/layout/RoleGuard.tsx:49`) → the support line; set a sender.
- Plans and money: Growth and Enterprise → Galaxy and Quantum; `RM 12,345` → `RM12,345` (`src/lib/format.ts`); pin dates to the organisation's time zone (they follow the browser today).
- Emails: none of its own; password reset uses the auth provider's default. Move it to the shared template.
- Copy: "Upgrade to unlock this page." uses a banned word (03) → "Upgrade to use this page."
- AXLE: title "AXLE — REKA Admin" (`axle.html:7`) → "AXLE · Janka". Help: add `/help`. Access: focus ring in AntaraX blue, not orange; an axe check.

**PLExyz Grid**
- Words: "organization" and "workspace" both mean the customer; use organisation (and workspace for sites, if needed). Roles Superadmin → Owner, Administrator → Admin, Viewer stays; Operations Manager, Supervisor, Operator, Customs Officer and Tenant Portal are product roles; drop the short forms ("Ops Mgr").
- Addresses: `plexyz-grid.pages.dev` and `plexyz-grid-axle.pages.dev` → `grid.antarax.ai` and AXLE; "Contact your REKA account manager" → the support line.
- Plans and money: Free, Trial, Standard, Advanced, Intelligent → Seed, then Nova, Galaxy, Quantum (a trial is a period, not a plan; Standard → Nova, Advanced → Galaxy, Intelligent → Quantum); `RM 1,234` → `RM1,234`; one date format; wire the time-zone setting (it has no effect today).
- Emails: none; invites and password resets happen on screen. Add invite and reset emails on the template.
- AXLE: "PLExyz Grid AXLE — Platform Admin", light and violet → the AXLE look. Languages: one spelling (British). Help: move the guide to `/guide` and add `/help`. Exports: every export is disabled; build CSV and PDF to 9. Access: focus outlines are removed on inputs (`apps/grid/src/index.css:81-84`); add reduced motion and an axe check.

**PLExyz Crowd**
- Words: "Client" and "Users" → organisation and members; roles Viewer and Admin are fine.
- Addresses: `plexyz-crowd.vercel.app` → `crowd.antarax.ai`; no support contact.
- AXLE: the whole customer app is named "AXLE · REKA Operations Console" (`app/app/layout.tsx:18`). Rename it PLExyz Crowd; AXLE is the internal console only. **Most urgent fix in the portfolio.**
- Copy: errors are lower-case API strings ("invalid email or password") → the error pattern.
- Exports: report header hard-codes "REKA HQ" and "REKA Inisiatif · AXLE" (`app/app/print/monthly/page.tsx:119-123, 211`) → organisation name, product mark and credit line; prefix CSVs with `crowd-`.
- Languages: US spelling → British. Help: none. Access: dark-only (add light first), no reduced motion though a shimmer loops forever (`globals.css:39`), no tests.

**AX Frame**
- Addresses: app and AXLE on `vercel.app` (`antarax-frame.vercel.app`, `axle-antarax.vercel.app`) → `frame.antarax.ai` and AXLE; sender `notifications@antaraxframe.com` → `AX Frame <frame@antarax.ai>`; a personal address as the legal contact (`lib/legal/processors.ts:155`, shown on the terms and privacy pages) → the privacy address.
- Money: `$` → `US$` (`src/lib/money.ts:14-16`; the landing page already writes US$). Plans: Free and Paid → Seed and Nova.
- Emails: the digest frame is the closest to the standard; the invite (`app/api/invites/route.ts:59`) and admin broadcast are bare HTML → the template; rename "AntaraX Frame" to "AX Frame" in emails.
- Words: the account is called a workspace; on settings and billing, call it the organisation. AXLE: "REKA operator console" → "AXLE · AX Frame". Copy: an em dash in "Couldn't revoke that connection — it's still active." Help: add `/guide` and `/help` (an in-app FAQ exists). Access: add an axe check.

**Angka**
- Addresses: sender `hello@angka.antarax.ai` → `angka@antarax.ai` (keep "{Business} via Angka"); inquiries to `holla@reka.re`, and a personal address on the Enterprise link (`lib/billing/catalog.ts:115`) and on the terms and privacy pages (`app/(legal)/terms/page.tsx:75`, `privacy/page.tsx:138`) → `support@go.antarax.ai` and the privacy address.
- Emails: the shared shell fits; change the footer credit "Angka, by REKA Inisiatif Sdn Bhd." (`lib/mail/invite-mail.ts:49`) to the credit and legal lines.
- Plans: Angka keeps its own names (Solo, Business, Team, Enterprise); "Pilot" is a stage, not a plan. Money: `USD 1,200.00` → `US$1,200.00`.
- Copy: "This page tripped over itself" (`app/error.tsx:41`) → say what failed and what to do.
- AXLE: shares the app's plum and a theme toggle → the AXLE look. Languages: the app is English only (the marketing site has Malay). Access: add an axe check.

**Tinara**
- Addresses: `workers.dev` hosts → `tinara.antarax.ai`; no support contact or sender.
- Plans and money: Explorer, Scout, Operator → Seed, Nova, Galaxy; plan currency defaults to USD and the admin mock shows `$49` → the organisation's currency, `US$` for dollars.
- Emails: the auth provider's defaults → the template.
- Words: "organization" → organisation; roles shown as ADMIN and USER → Owner, Admin, Member, Viewer (the database already has them).
- AXLE: "Tinara Admin" inside the app → AXLE. Languages: US spelling → British. Help: none. Exports: `Tinara_CRM_Import.csv`-style names and the "Tinara Intelligence Engine by REKA" footer (`ReportMemoView.tsx:773`) → 9. Access: no reduced motion (animations always on), few focus styles, no tests.

