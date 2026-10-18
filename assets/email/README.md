# AntaraX email reference

How every AntaraX email looks, and how a product, old or new, sends one. The rules are in [guide 13, section 4](../../guide/13-shared-product-standards.md#4-emails). The code that draws every email is `haziqfaris/antarax-api` (`packages/lapisan-email`, served by `apps/email` at `email.antarax.ai`); the files here are rendered from it with sample words, so a person can see the result without running anything. The code is the source: when the two differ, the code wins and these files are remade.

- `index.html`: open it in a browser. It links to every file below.
- `templates/<id>.html`: every template, as AX Frame.
- `products/<product>-welcome.html`: the welcome email for every product, so each family's band, motif and colour can be compared.

## What a product sends

A product never writes HTML, a subject, a From or a Reply-To. It names one of these templates and sends its words; the service checks each link is on the product's own site, draws the layout and sends it as `<Product> <product@mail.antarax.ai>`, replying to `support@go.antarax.ai`.

| Template | Class | For |
|---|---|---|
| `auth.verify_email.v1` | security | Confirm an address |
| `auth.sign_in.v1` | security | Sign in with a link, a code or both |
| `auth.password_reset.v1` | security | Reset a password |
| `auth.password_changed.v1` | security | Tell them the password changed |
| `auth.email_changed.v1` | security | Tell the old address it changed |
| `auth.confirm_email_change.v1` | security | Confirm a new address before it signs in |
| `auth.invite.v1` | security | Accept an account made for them; motif and steps |
| `team.invitation.v1` | service | Join an organisation; motif, an optional note, steps |
| `onboarding.welcome.v1` | service | Welcome, once ready; motif and steps |
| `system.action_required.v1` | service | Something needs a person |
| `system.export_ready.v1` | service | An export is ready |
| `system.announcement.v1` | service | A change, maintenance or a policy; never marketing |
| `notice.v1` | activity | The product's own notifications; one-click unsubscribe |
| `digest.v1` | activity | A summary with tables of figures; one-click unsubscribe |

Security emails are never stopped by an opt-out; service emails have none; activity emails carry the product's one-click unsubscribe. A new kind of email is a new template in antarax-api, never HTML in a product.

## Sign-in emails sent by Supabase

A product whose Supabase project sends its own sign-in email pastes the same layout into Supabase (Authentication → Emails) and sends through Resend as the product (Authentication → SMTP Settings). `supabaseEmails()` and `supabaseSmtp()` in `packages/lapisan-email/src/supabase.ts` give the six templates, with Supabase's fields left in, and the settings.

## A new product

1. Its sender in `packages/lapisan-email/src/senders.ts` and in antarax-api's `registry/registry.json` (`email.senders`): name, `product@mail.antarax.ai`, its action colour and ground (14), its own hosts.
2. Its family and whether it has a signature motif, in the same file. Its mark as a 64 px PNG in `apps/email/public/marks/`, and its motif as a 144 px PNG in `apps/email/public/art/`, both made from this kit's SVGs. A family band already exists for every family.
3. A service key (`ax_svc_<product>_…`) on the product and on the email service, and the product's switch (`ANTARAX_EMAIL_URL`, `AX_SVC_KEY`). antarax-api `docs/15-email.md`, section 15.9.
4. Remake these files from antarax-api so the new product's welcome is here.
