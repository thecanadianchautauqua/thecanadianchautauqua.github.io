# The Canadian Chautauqua — website

A single-page, scrollable, interactive, **bilingual (EN / FR-Québécois)** history of the **Chautauqua** neighbourhood of Niagara-on-the-Lake — the full arc from the Crooks estate and the War of 1812, through the 1880s spoke-and-wheel summer resort and the 1909 fire, to the thriving community of today that won the Town's 2026 **Neighbourhood of the Year**. Built from the research in this repository.

**Narrative arc (the page tells one continuous story of a single piece of ground — war → ruin → reconciliation → community):** *the land before the wheel* (the Crooks family, the seized schooner *Lord Nelson*, the war, the hundred-year claim) → the idea → the wheel of streets → the timeline (1788→2026) → the grounds → the founders → the season → *the fire (a pivot, not an ending)* → the wheel outlives the resort → **the heritage oaks** → the living community & its modern characters → **Neighbourhood of the Year** → sources. The design turns from dark (war, fire) to light (the idea, today) so the story reads as reconciliation, not ruin.

## Run it
It's a static site — no build step.

```bash
cd site
python3 -m http.server 8731
# open http://localhost:8731
```

Or open `index.html` directly in a browser (web fonts and the layout work over `file://`; a server is only needed to avoid browser caching quirks during editing).

## Files
| File | Purpose |
|---|---|
| `index.html` | Page structure and copy |
| `styles.css` | Identity & layout — palette, type, the "twilight-on-the-lake / archival lithograph" look |
| `app.js` | The interactive spoke-and-wheel (signature), plus **bilingual** rendering of the timeline, wheel roster and people cards; scroll reveals; scroll progress |
| `i18n.js` | The language engine + the full **Québécois-French** dictionary, and the accessible EN/FR switcher |
| `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` / `favicon-32.png` | Site icons — the **spoke-and-wheel** mark in the site palette (dark teal, brass hub). `favicon.svg` is the scalable primary; `.ico` (16/32/48) and the PNGs are fallbacks for older browsers and iOS |
| `assets/img/` | Six verified historical images (see attribution) |

## Bilingual (EN-UK / FR-Québécois)
- A **language switcher** sits top-right (a fleur-de-lis / Union Jack pill). English lives in the HTML (source + no-JS fallback); French is supplied in `i18n.js` and swapped in on demand; JS-built content (timeline, roster, people) is re-rendered from bilingual data by `window.CHQ.render(lang)`.
- The choice persists (`localStorage`), sets `<html lang>` (`en` / `fr-CA`), and the switcher is a fully keyboard-accessible menu (arrows, Enter, Esc, outside-click, `aria-expanded` / `aria-checked`).
- **Translation** is natural Québec French, done in-house. Verbatim historical quotes (period newspapers, the *Scourge*'s flag motto, Frankish's line) are kept in the original English and marked `lang="en"`, with translated citations.

## Design
- **Identity:** deep "lake teal" grounds, antique-paper reading panels, a brass accent and a faded "lot-rose" — chosen to suit an 1880s lakeside assembly rather than a generic template. Display face **Fraunces**, body/UI **Hanken Grotesk** (Google Fonts).
- **Signature:** an interactive SVG **wheel of streets** — point at any avenue to meet its namesake; a colour-coded legend groups them by theme, and a full **text roster** below lists every avenue and namesake.
- **The roots** open the story in a dark, archival "dossier" section — the Crooks estate and the War of 1812 — with a `9 days / 100+ years` figure (the *Lord Nelson* seized before the war; the century-long claim) and the *Scourge*'s flag motto as a pull-quote, deliberately rhyming with the oaks' figure below.
- **The oaks** get their own deep-green "grove" section — the emotional heart — with a `166 → 172` figure (heritage oaks → their replanted offspring) and Leslie Frankish's quote.
- **Performance:** vanilla JS, no framework, lazy-loaded images, `IntersectionObserver` reveals, scroll-progress bar; static, hostable anywhere.

## Accessibility (targets WCAG 2.1 AA)
- **Contrast:** accent text uses `--brass-deep` on light grounds and `--brass-lt` on dark grounds (both ≥4.5:1); wheel-marker colours are lightened to clear 3:1 on the dark ground; body/heading colours all clear AA. The hero image credit sits on a solid dark panel (previously it was illegible over the map).
- **Screen readers:** a skip link; semantic landmarks (`header`, `main`, `footer`) and every `section` labelled via `aria-labelledby`; the decorative SVG wheel is `role="img"` with a descriptive label, and its content is fully available as the visible **text roster** (the hover panel/legend are a non-focusable mouse enhancement); stats use a `<dl>`; external links carry descriptive labels noting they open a new tab; images have descriptive `alt` (the background map is decorative).
- **Motion & keyboard:** `prefers-reduced-motion` disables anim/parallax; visible focus rings; no keyboard traps.
- **Bilingual a11y:** switching language updates `<html lang>` (`en` / `fr-CA`) so screen readers use the right voice; verbatim English quotes keep `lang="en"` even in French mode; the switcher menu is keyboard-operable with `aria-expanded`/`aria-checked`; its dark pill clears AA over any section it floats above.

## Image attribution
All six historical images are held by the **Niagara-on-the-Lake Museum** (Niagara Historical Society) and were published via its curated **Google Arts & Culture** exhibit. Each image on the page links to its source record. They are served locally here (small sepia files) for reliability and correctness; rights remain with the holding institution. Web fonts load from Google Fonts' CDN.

- `amphitheatre.jpg` — *The Chautauqua Amphitheatre* (interior) · [source](https://artsandculture.google.com/asset/the-chautauqua-amphitheatre/OgFTerTCEvwAww)
- `grounds-map.jpg` — *Map of Grounds … The Canadian Chautauqua* (Sproatt, VanNostrand, Toronto) · [source](https://artsandculture.google.com/asset/map-of-the-canadian-chautauqua/IQHJdG1mX6KXHg)
- `hotel.jpg` — *Hotel Chautauqua* postcard · [source](https://artsandculture.google.com/asset/chautauqua-hotel/jAGPb6UDyxG7ng)
- `boathouse.jpg` — *Ryerson Park* boat & bath house · [source](https://artsandculture.google.com/asset/ryerson-park/GgHR6y4dA94odQ)
- `ryerson-park.jpg` — *Group at Ryerson Park, c. 1890* · [source](https://artsandculture.google.com/asset/group-of-unknown-individuals-at-ryerson-park-c-1890/EwE0ogX3AzCgQA)
- `grounds-engraving.jpg` — *View of the Assembly Grounds* (Season of 1888) · [source](https://artsandculture.google.com/asset/view-of-the-assembly-grounds/gAF9Joc4cblFAw)

## Accuracy
Every claim on the site is drawn from the primary records compiled in this repo (`/docs`, `/photos/FINDINGS-amphitheatre.md`, `/references`) — the NOTL Museum survey plans (street names, founders), the amphitheatre photograph, and period newspapers — not from secondary retellings. Where exact dates were not verified (e.g. J. J. MacLaren's years), the site omits them rather than guess.
