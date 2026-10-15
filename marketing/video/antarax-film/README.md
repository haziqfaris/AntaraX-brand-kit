# AntaraX brand film: animatic v1

15 October 2026. About two minutes forty: an opening montage, one chapter each for Yara, Janka, PLExyz Grid and AX Frame, and a close on the kain-filled "Put it to work." It is the animatic for a live-action film with actors at hired locations: the photos and product demo screens stand in for footage until the shoot. Yara appears only in this film, not in the short promos.

| File | What it is |
|---|---|
| `antarax-film-animatic.mp4` | The animatic, with a placeholder music bed |
| `antarax-film.en.srt` | English captions, one per voice-over line; Bahasa Malaysia and Japanese come later |
| `antarax-film-voiceover-script.txt` | The script for the voice-over artist |
| `stills-sheet.jpg` | One still per shot |
| `source/` | How it is made |

Every voice-over line is also a caption, so the same cut works with no sound at events. The music is a placeholder until licensed music is chosen. Every business and figure on screen is demo data.

## Rebuilding

The film uses the website's photos and logos, so check out the `antarax-ai` repository next to this one, or set `ANTARAX_SITE` to its `site/` folder.

    cd marketing/video/antarax-film/source
    NODE_PATH=$(npm root -g) node film.mjs --stills     # one still per shot into stills/
    NODE_PATH=$(npm root -g) node film.mjs              # the silent video, antarax-film-animatic-video.mp4
    python3 music.py 159.52                             # the placeholder bed, music.wav
    ffmpeg -i antarax-film-animatic-video.mp4 -i music.wav -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 160k -shortest antarax-film-animatic.mp4

`film.mjs` also writes `film.html`, `shots.json` and the captions beside itself; they are rebuilt each run and not kept.
