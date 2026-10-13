# AntaraX marketing assets

Everything here is ready to hand over: to a printer, a partner, an event organiser or whoever makes the slides. The masters live in `assets/` and the rules in `guide/`. Never edit a file here by hand: change the master or the tool, then rebuild (see the end of this page).

| Folder | What is in it | Who it is for |
|---|---|---|
| [`print/`](print/) | Print-ready PDFs, one folder per piece | Printers |
| [`logo-pack/`](logo-pack/) | The AntaraX logos as SVG, vector PDF and transparent PNG | Printers, partners, slides, press |
| [`qr/`](qr/) | The QR codes the print uses, as vectors | Anyone making a new piece |
| [`photography/`](photography/) | The photo brief: shot list and image-AI prompts | Photographers, whoever makes images for antarax.ai |

## Print pieces

### Roll-up bunting, 80 x 200 cm (`print/bunting-80x200cm/`)

Navy. The AntaraX wordmark, "Put intelligence to work.", the kain A, a QR card for antarax.ai/meet, and "AntaraX is the AI product line of REKA" at the foot.

| File | Size | Use |
|---|---|---|
| `antarax-bunting-80x200cm-5mm-bleed.pdf` | 810 x 2010 mm | **Send this to the printer** |
| `antarax-bunting-80x200cm-trim.pdf` | 800 x 2000 mm | Only if the printer asks for trim size and adds their own bleed |
| `antarax-bunting-80x200cm-preview.png` | small | For approvals and chat, never for print |

The bottom 8 cm goes into the stand's base, so only the REKA lines sit near it. Check the printer's stand: if its base takes more than 8 cm, tell us before printing.

### A3 QR poster (`print/poster-a3-qr-meet/`)

Navy. "Nice to meet you.", the open kain A with the QR code in its eye, antarax.ai/meet, and the REKA line. For tables, walls and stands.

| File | Size | Use |
|---|---|---|
| `antarax-a3-qr-meet-3mm-bleed.pdf` | 303 x 426 mm | **Send this to the printer** |
| `antarax-a3-qr-meet-trim.pdf` | 297 x 420 mm (A3) | Office printers, and printers that add their own bleed |
| `antarax-a3-qr-meet-preview.png` | small | For approvals and chat, never for print |

## Sending a piece to a printer

- **Bleed or trim?** The trim size is the finished piece. The bleed file has the navy background carried a few millimetres past the trim on every side, so when the sheet is cut a hair off the line there is no white sliver at the edge. Send the bleed file unless the printer asks otherwise. Nothing important sits near the edge, so either cuts safely.
- **Colour.** The PDFs are RGB. Ask the printer to convert to their CMYK profile and to show a printed proof first: the navy (`#071233`) and AntaraX blue (`#0459F7`) are the colours most likely to shift. Approve the proof, not the screen.
- **Fonts** are embedded (Poppins). Nothing needs installing.
- **The kain A** is in the PDFs at 300 ppi at full printed size, which is print quality. The text, QR code and REKA lockup are vector.
- **Test the QR code** on the proof with two phones before the full run. Both pieces lead to `https://antarax.ai/meet`.

## Logo pack

`logo-pack/` holds the AntaraX A, the wordmark, the kain A (closed and open) and the AI sparkle, each as:

- `svg/`: the master drawing, for the web and design tools;
- `pdf/`: vector, 100 mm wide, scales to any size without losing quality (printers, signage);
- `png/`: 2000 px wide with a transparent background (slides, documents, social).

[`logo-pack/CONTENTS.md`](logo-pack/CONTENTS.md) lists every file and which ground it is for. The rules for using them (clear space, and which version goes on which ground) are in [guide/04 Logo](../guide/04-logo.md). Product logos are in [`assets/product-logos/`](../assets/product-logos/).

## QR codes

`qr/qr-antarax-meet.svg` leads to `https://antarax.ai/meet`, with error correction Q (it still scans with a quarter of it damaged or covered). Always put a QR code on a white tile with a quiet margin round it, never straight on navy or the kain. For a new destination, make a new file here named for it (`qr-antarax-<page>.svg`), and test it with two phones.

## Rebuilding

Every file here comes from a tool in `tools/`, which says at the top how to run it. They need Node, and Playwright with Chromium for the PDFs and PNGs.

| Files | Tool | Built from |
|---|---|---|
| `print/` | `NODE_PATH=$(npm root -g) node tools/build-print.mjs` | `assets/antarax/`, `assets/reka/`, `qr/`, `tools/fonts/` |
| `logo-pack/` | `NODE_PATH=$(npm root -g) node tools/build-logo-pack.mjs` | `assets/antarax/` |

To make a new piece, add a job to `tools/build-print.mjs`, write it to its own folder in `print/` (named for the piece and its size), add it to the table above, and record it in [guide/10](../guide/10-decisions-log.md).
