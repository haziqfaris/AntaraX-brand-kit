#!/usr/bin/env python3
"""Draws the Nalar family icon: Cabang, melenggok (owner, 3 November 2026).

A fork run backwards: two premises, curved and tapering like a young branch, join into one stem,
and the conclusion is the dot below. One arm sways in a gentle S and stands a little taller, so it
is asymmetric (no face inside the A) and curved (never a tick). Deep gold, the family colour.

Writes:
  assets/families/nalar-icon.svg        the icon, for 32 px and up
  assets/families/nalar-icon-small.svg  a heavier drawing with a longer stem, for 24 px and below
  assets/families/famicons.json         the "Nalar" entry, placed in the A's open centre

Plain Python, no packages:  python3 tools/build-nalar-icon.py
"""
import json
import math
import pathlib

KIT = pathlib.Path(__file__).resolve().parent.parent
GOLD = '#B48B02'          # tokens: color.family.nalar.value
GOLD_RGB = 'rgb(180,139,2)'


def bez(p0, p1, p2, p3, t):
    u = 1 - t
    return tuple(u ** 3 * a + 3 * u * u * t * b + 3 * u * t * t * c + t ** 3 * d for a, b, c, d in zip(p0, p1, p2, p3))


def vein(p0, p1, p2, p3, w0, w1, flare=None, wave=0.0, n=40):
    """A filled stroke along a cubic curve whose width eases from w0 to w1 and flares at its ends."""
    f0, f1 = flare if flare else (w0, w1)
    left, right = [], []
    for i in range(n + 1):
        t = i / n
        x, y = bez(p0, p1, p2, p3, t)
        x2, y2 = bez(p0, p1, p2, p3, min(1, t + 1e-3))
        x1, y1 = bez(p0, p1, p2, p3, max(0, t - 1e-3))
        dx, dy = x2 - x1, y2 - y1
        ln = math.hypot(dx, dy) or 1
        nx, ny = -dy / ln, dx / ln
        x += nx * wave * math.sin(2 * math.pi * t)
        y += ny * wave * math.sin(2 * math.pi * t)
        w = (w0 + (w1 - w0) * t + (f0 - w0) * (1 - t) ** 4 + (f1 - w1) * t ** 4) / 2
        left.append((x + nx * w, y + ny * w))
        right.append((x - nx * w, y - ny * w))
    pts = left + right[::-1]
    return 'M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in pts) + ' Z'


def dot(cx, cy, r, n=36):
    pts = [(cx + r * math.cos(2 * math.pi * i / n), cy + r * math.sin(2 * math.pi * i / n)) for i in range(n)]
    d = f'M{pts[0][0]:.1f},{pts[0][1]:.1f}'
    for i in range(n):
        p0, p1, p2, p3 = pts[i - 1], pts[i], pts[(i + 1) % n], pts[(i + 2) % n]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f' C{c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}'
    return d + ' Z'


def cabang(arm=15, tip=6, flare=24, tip_r=3.2, stem_w=12, stem_top=103, stem_bottom=120, dot_y=140, dot_r=13):
    """The paths, in a 160 x 160 box."""
    return [
        vein((80, 100), (64, 96), (48, 82), (44, 56), arm, tip, flare=(flare, tip)),
        vein((80, 100), (100, 92), (106, 64), (118, 30), arm, tip, flare=(flare, tip), wave=3.5),
        dot(44, 56, tip_r), dot(118, 30, tip_r),
        dot(80, 102, flare / 2),  # rounds the join, so branches and stem flow as one shape
        vein((80, stem_top - 1), (80, stem_top + 6), (80, stem_bottom - 8), (80, stem_bottom), flare, stem_w - 3),  # starts as wide as the join, then tapers
        dot(80, dot_y, dot_r),
    ]


FULL = cabang()
SMALL = cabang(arm=20, tip=10, flare=30, tip_r=5, stem_w=15, stem_top=103, stem_bottom=122, dot_y=146, dot_r=14)
BOUNDS = (36, 22, 125, 161)  # the drawing's extent in the 160 box, used to centre it in the A


def svg(paths, label):
    body = ''.join(f'<path d="{d}" fill="{GOLD}"/>' for d in paths)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" role="img" aria-label="{label}">{body}</svg>\n'


def main():
    fam = KIT / 'assets' / 'families'
    (fam / 'nalar-icon.svg').write_text(svg(FULL, 'Nalar'))
    (fam / 'nalar-icon-small.svg').write_text(svg(SMALL, 'Nalar'))
    # famicons.json: the icon placed in the A's open centre (357.5, 441 in the A's own space), as the other families are
    x0, y0, x1, y1 = BOUNDS
    sc = 370 / max(x1 - x0, y1 - y0)  # tall and thin, so a little larger than the wider family icons to carry the same weight
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    transform = f'transform="translate({357.5 - cx * sc:.2f},{441 - cy * sc:.2f}) scale({sc:.4f})"'
    icons = json.loads((fam / 'famicons.json').read_text())
    icons['Nalar'] = {'hole': '0;300;300;0;0', 'icon': transform + '|' + ''.join(f'<path d="{d}" fill="{GOLD_RGB}"/>' for d in FULL)}
    (fam / 'famicons.json').write_text(json.dumps(icons, separators=(', ', ': ')))
    for p in ('nalar-icon.svg', 'nalar-icon-small.svg', 'famicons.json'):
        print('assets/families/' + p)


if __name__ == '__main__':
    main()
