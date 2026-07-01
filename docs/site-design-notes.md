# Site design notes — weaving in the roots, and adding EN/FR

Working notes for the site rebuild (designer → developer). The guiding idea after adding the Crooks/1812 material: **the whole site is the story of one piece of ground — war → ruin → a hundred-year grievance → reconciliation → community.** The Chautauqua wheel is the turn from war to peace; the modern era (Buffalo visitors, Neighbourhood of the Year) completes it.

## Narrative order (new)
1. **Hero** — subtitle nods to the deeper arc (a bombarded point that became a meeting place).
2. **NEW — "The land before the wheel"** (roots): the Crooks family astride the border; Crookston on the point; the schooner *Lord Nelson* **seized nine days before the war**; the war on the doorstep; the ship that still lies on the lakebed; the **hundred-year claim** against the U.S. government; *war ground becomes common ground*. → bridges into:
3. **Prologue "The idea"** — the ruined ground, seventy years on, becomes the wheel (add one bridging line).
4. Wheel (interactive signature) → 5. Timeline (now **1788 → 2026**) → 6. Grounds → 7. People (founders) → 8. Season → 9. Fire (pivot) → 10. Afterlife → 11. Oaks → 12. Community → 13. Today → 14. Sources.

## Interactive vs non-interactive (deliberate restraint)
- **One signature interactive:** the spoke-and-wheel. Keep it singular.
- **One utility interactive:** the new **EN/FR language switcher** (top-right).
- **The roots** get a **non-interactive but striking "figure" treatment** — bold stat pairs (*"9 days before the war"*, *"100+ years to justice"*) plus a short narrative and a period pull-quote — deliberately rhyming with the oaks' `166 → 172` figure. No new heavy interactive (avoids diluting the wheel and de-risks i18n).
- **Timeline** stays an elegant vertical scroll-revealed list (not made interactive) even though it now spans two centuries — restraint over gadgetry.

## New section visual treatment
- "The land before the wheel" uses a **dark, archival "dossier" mood** (lake-teal, deep) so it sits before the paper "idea" section and gives the war weight; the turn to the paper Prologue reads as the turn toward peace/light.

## Internationalisation (EN-UK / FR-Québécois)
- **Switcher:** accessible dropdown, top-right of a slim fixed bar; button shows current language + flag (🇬🇧 / ⚜️ Québec); menu lists both. Full keyboard support, `aria-expanded`, focus management; choice saved to `localStorage`; `<html lang>` updated.
- **Content:** all copy moves into a single `I18N = { en, fr }` dictionary keyed by id; a `applyLang()` swaps `textContent`/`innerHTML`. JS-built content (wheel roster, timeline, people, ship figure) is generated from the same dictionary so both languages stay in sync.
- **Translation:** done in-house to natural **Québec French**; historical/heritage register (standard written French with Québec conventions where natural). Proper nouns, quotations and citations kept faithfully; a period English newspaper quote is shown in English with a French gloss.
- **QA:** verify layout in both languages (French runs ~15–20% longer — check headings/buttons don't break), responsive at mobile, and WCAG AA (contrast, the switcher's keyboard/SR behaviour, `lang` correctness).
