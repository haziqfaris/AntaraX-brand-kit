# Agent rules for the AntaraX brand kit

This repository is the **source of truth for the AntaraX brand**: positioning, product architecture, voice, claims, logo, colour, type, illustration, interface rules and website conventions. Development and marketing work in other repositories should follow it.

## When working in this repository

- Change the guide only for a decision the owner has made, or to correct a fact. Add the decision to `guide/10-decisions-log.md` with its date, in the same change.
- Put anything unresolved in `guide/11-open-questions.md`; do not resolve it silently.
- Keep `tokens/tokens.json` and `tokens/tokens.css` in step. A token change is a change to every consumer; list the consumers affected in the commit message.
- `reference/` holds the documents the guide was built from. Do not edit them to match the guide; the guide supersedes them.
- Write in plain British English, sentence case, no em dashes in customer-facing copy.

## When working in another repository that uses AntaraX

- Read `README.md` and the guide pages relevant to the task before changing copy, layout, colour, illustration or naming.
- Use the names, one-liners, statuses and CTAs in `guide/02-products-and-families.md` exactly. Do not promote a closed pilot to a product, or invent a status.
- Follow the claims rules in `guide/03-voice-and-claims.md`: never invent customers, logos, quotes, metrics, certifications, integrations or maturity.
- If the work needs a brand decision this kit does not cover, raise it with the owner and record the answer here.
