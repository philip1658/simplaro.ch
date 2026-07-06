#!/usr/bin/env python3
"""Konvertiert Simplaro Redesign.dc.html (Claude Design) in eine eigenständige index.html."""
import re
from pathlib import Path

src = Path("source.dc.html").read_text()

# 1. Body-Inhalt = alles innerhalb <x-dc>...</x-dc>
body = src.split("<x-dc>", 1)[1].split("</x-dc>", 1)[0]

# 2. Helmet-Inhalt in den echten <head> übernehmen
helmet = body.split("<helmet>", 1)[1].split("</helmet>", 1)[0]
body = body.split("</helmet>", 1)[1]

# 3. sc-if-Blöcke auflösen: showNotes -> entfernen, showTestimonial -> behalten
def resolve_sc_if(html, var, keep):
    out, pos = [], 0
    open_tag = re.compile(r'<sc-if value="\{\{ ' + var + r' \}\}"[^>]*>')
    while True:
        m = open_tag.search(html, pos)
        if not m:
            out.append(html[pos:])
            break
        out.append(html[pos:m.start()])
        # zugehöriges </sc-if> finden (keine Verschachtelung desselben Vars nötig,
        # aber showTestimonial enthält ein inneres showNotes-sc-if -> Tiefe zählen)
        depth, i = 1, m.end()
        while depth:
            nxt_open = html.find("<sc-if", i)
            nxt_close = html.find("</sc-if>", i)
            if nxt_open != -1 and nxt_open < nxt_close:
                depth += 1
                i = nxt_open + 6
            else:
                depth -= 1
                i = nxt_close + len("</sc-if>")
        inner = html[m.end():i - len("</sc-if>")]
        if keep:
            out.append(inner)
        pos = i
    return "".join(out)

body = resolve_sc_if(body, "showTestimonial", keep=True)
body = resolve_sc_if(body, "showNotes", keep=False)
assert "<sc-if" not in body, "sc-if übrig!"

# 4. image-slots ersetzen
body = re.sub(
    r'<x-import [^>]*id="buerobot-foto"[^>]*></x-import>',
    '<img src="assets/buerobot-v2.png" alt="Büro-Bot by Simplaro – der digitale Mitarbeiter" '
    'style="width:100%;height:430px;display:block;object-fit:cover;border-radius:14px;">',
    body)

def person_placeholder(name):
    return (
        '<div role="img" aria-label="Foto ' + name + ' folgt" '
        'style="width:100%;height:340px;display:flex;align-items:center;justify-content:center;'
        'background:repeating-linear-gradient(45deg,#f3f1ea,#f3f1ea 12px,#efece3 12px,#efece3 24px);'
        'border:1px dashed #d8d2c2;border-radius:14px;">'
        '<span style="font:500 14px/1.4 \'DM Sans\',sans-serif;color:#8a93a8;">Foto ' + name + ' folgt</span></div>')

body = re.sub(r'<x-import [^>]*id="foto-andre"[^>]*></x-import>', person_placeholder("André Ulrich"), body)
body = re.sub(r'<x-import [^>]*id="foto-philip"[^>]*></x-import>', person_placeholder("Philip Krieger"), body)
assert "<x-import" not in body

# 5. Mobile: minmax(NNNpx,1fr) -> minmax(min(NNNpx,100%),1fr)  (verhindert Overflow auf Phones)
body = re.sub(r'minmax\((\d+)px,1fr\)', r'minmax(min(\1px,100%),1fr)', body)

# 6. style-hover -> echte CSS-Regeln über data-Attribute
hover_rules = []
counter = [0]
def hoverize(m):
    counter[0] += 1
    n = counter[0]
    css = m.group(1).replace('&amp;', '&')
    important = ";".join(d.strip() + " !important" for d in css.split(";") if d.strip())
    hover_rules.append(f'[data-hv="{n}"]:hover{{{important}}}')
    return f'data-hv="{n}"'

body = re.sub(r'style-hover="([^"]*)"', hoverize, body)
hover_css = "\n".join(hover_rules)

# 7. Zusammenbauen
favicon_svg = ("data:image/svg+xml," +
    "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E"
    "%3Cpolygon points='10,0 13,10 10,20 7,10' fill='%23d9482b' transform='rotate(40 10 10)'/%3E"
    "%3Ccircle cx='10' cy='10' r='2.4' fill='%23071d49'/%3E%3C/svg%3E")

html = f"""<!DOCTYPE html>
<html lang="de-CH">
<head>
<meta charset="utf-8">
<title>Simplaro – Wir geben Orientierung. KI &amp; Transformation für Schweizer KMU</title>
<meta name="description" content="Strategie, Prozesse und KI für Schweizer KMU – verständlich erklärt und im Alltag umgesetzt. Simplaro GmbH, Zürich.">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="Simplaro – Wir geben Orientierung.">
<meta property="og:description" content="Strategie, Prozesse und KI für Schweizer KMU – verständlich erklärt und im Alltag umgesetzt.">
<meta property="og:type" content="website">
<link rel="icon" href="{favicon_svg}">
{helmet.strip()}
<style>
{hover_css}
@media (max-width: 720px) {{
  header nav {{ flex-wrap: wrap; justify-content: flex-end; gap: 14px !important; }}
}}
</style>
</head>
<body>
{body.strip()}
</body>
</html>
"""
Path("site/index.html").write_text(html)
print(f"OK — {len(html)} Bytes, {counter[0]} Hover-Regeln, Notes entfernt, Testimonial behalten")
