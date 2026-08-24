# AGENTS.md — Design-Vorschriften simplaro.ch

Diese Regeln sind **verbindlich** für jede Anpassung der Website. Bei Konflikt gilt:
Token-Dateien > diese Datei > eigenes Ermessen. Nichts davon «verbessern» — nur anwenden.

## Projektstruktur

- `site/` — die deploybare Website. **Nur hier arbeiten.**
- `site/tokens/*.css` — **Quelle der Wahrheit** für Farben, Typografie, Abstände,
  Radien, Schatten, Animationen. Werden von `site/styles.css` per `@import` geladen.
- `site/guidelines/*.html` — visuelle Referenz des Design-Systems (18 Seiten:
  Farben, Typo, Formen, Motion, Marke). Im Browser öffnen und ansehen, bevor
  etwas Neues gebaut wird.
- `source.dc.html`, `build.py` — historisch, nicht anfassen.
- Deploy: `main` → `gh-pages` (GitHub Pages, philip1658.github.io/simplaro.ch).
  **Nicht selbst deployen** — nur auf `main` committen.

## Harte Regeln

### Farben
- **Ausschliesslich Tokens aus `site/tokens/colors.css`** verwenden — bevorzugt die
  semantischen Aliase (`--bg-page`, `--surface-card`, `--text-body`, `--accent`,
  `--cta-bg`, `--link` …). Direkte Palette-Tokens (`--terra-500` …) nur, wenn kein
  Alias passt.
- **Keine neuen Hex-Werte erfinden.** Keine Farbe ausserhalb der Palette, kein
  reines Weiss/Schwarz (`#FFF`/`#000`) — hellster Grund ist `--cream-50`, dunkelster
  Text `--ink-900`.
- Verläufe nur die definierten (`--grad-terra-*`, `--grad-package`, `--glow-peach`).
- Die alte Navy-Ära (dunkelblau, Space Grotesk, `logo-mark.png` ohne Suffix) ist
  tot — nie wiederverwenden, auch nicht «als Akzent».

### Typografie
- **Quicksand** für alles, **nur die Gewichte 500/600/700**. **IBM Plex Mono**
  (400–600) nur für Zahlen, Timecodes, Overlines. Keine weiteren Fonts, kein
  Inter/Roboto/Arial.
- Grössen ausschliesslich über die Tokens (`--text-hero` … `--text-badge`), mit den
  zugehörigen Laufweiten (`--tracking-*`) und Zeilenhöhen (`--leading-*`).
- Schreibweisen: Nav und CTAs **lowercase** («termin direkt buchen ↗»), Kicker
  **UPPERCASE, nummeriert** («02 — WAS WIR FÜR SIE TUN»), Badges/Overlines
  UPPERCASE mit weiter Laufweite. Headlines enden mit Punkt.

### Sprache
- **Deutsch (Schweiz): immer «ss», nie «ß».** Anführungszeichen «guillemets».
  Sie-Form, warm und direkt («Grüezi!»), keine Marketing-Floskeln.

### Form & Effekte
- Radien nur aus `site/tokens/spacing.css`: Pills `--radius-pill`, Karten
  `--radius-lg`/`--radius-xl`, Bubbles `--radius-md`/`--radius-sm`. Nichts Eckiges.
- Schatten nur die drei definierten: `--shadow-comic` (6px-Offset, Sprechblasen),
  `--shadow-soft`, `--shadow-cta`. Comic-Ränder: `1.5–2px solid var(--border-ink)`.
- Animationen mit den definierten Easings/Dauern (`--ease-spring`, `--ease-reveal`,
  `--duration-*`); vorhandene Keyframes (`twinkle`, `breathe` …) wiederverwenden.
- Icons: Inline-SVG im vorhandenen Stil. **Keine Emoji im UI** (nur ✓ ✦ ↗ → · «»
  als typografische Zeichen, siehe `guidelines/brand-voice.html`).

### Layout
- Inhaltsbreite `--content-max` (1160px), Header `--header-max` (1280px),
  Sektionen `--section-pad-y` (72px, gross 88px), seitlich `--section-pad-x`
  (32px, mobil 20px). Abstände aus der `--space-*`-Skala.
- Bestehende Breakpoints respektieren: 1200/1120/700/480px. Jede Änderung bei
  390px Viewport-Breite prüfen (umbrechende Headlines, gequetschte Grids).

## Arbeitsweise

1. Vor jeder Änderung die nächstliegende bestehende Seite/Sektion als Vorbild
   lesen und deren Muster exakt übernehmen — Anatomie, Dichte, Abstände.
2. Gezielte Änderungen bleiben gezielt: nichts ungefragt umgestalten, keine
   Sektionen, Texte oder «Verbesserungen» hinzufügen.
3. Keine Inline-Hex-Werte, keine Pixel-Werte, wo ein Token existiert.
4. Neue Tokens nur, wenn ausdrücklich beauftragt — dann in der passenden
   `site/tokens/*.css` mit Kommentar, nie inline.
5. Fehlende Fakten (Preis, Datum, Kontakt) als `[PLATZHALTER]` markieren, nie
   erfinden.
