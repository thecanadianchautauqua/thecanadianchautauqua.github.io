/* ============================================================
   The Canadian Chautauqua, bilingual engine (EN-UK / FR-Québec)
   English lives in the HTML (source + no-JS fallback); French is
   supplied here and swapped in on demand. Dynamic content
   (wheel roster, timeline, people) is rendered by app.js via window.CHQ.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- French (Québécois) translations, keyed to data-i18n ---------- */
  const FR = {
    skip: 'Aller au contenu',

    'hero.eyebrow': 'Niagara-on-the-Lake · de 1886 à aujourd’hui',
    'hero.t1': 'Le',
    'hero.sub': 'Une ville d’été dessinée comme une roue, avec un amphithéâtre de quatre mille places en son moyeu et des avenues nommées en l’honneur de poètes et de réformateurs. Elle s’est élevée sur une pointe que les Américains avaient incendiée durant la guerre de 1812, puis les a ramenés de l’autre côté du lac en amis. Le grand hôtel a brûlé de nouveau en 1909. La roue lui a survécu, et le quartier né en son sein est devenu si cher que sa propre ville l’a récemment nommé Quartier de l’année.',
    'hero.cue': 'Commencer le récit',
    'hero.credit': 'Plan des terrains appartenant à la Niagara (late Fort George) Assembly',

    'roots.eyebrow': 'Avant la roue',
    'roots.h': 'La terre avant la roue',
    'roots.p1': 'Avant d’être une roue de rues, ce lieu était le domaine d’un marchand, sur la pointe où un ruisseau rejoint le lac, dans un jeune pays dont la frontière se traçait encore. Il appartenait à la <strong>famille Crooks</strong>, des marchands écossais qui avaient bâti un commerce à cheval sur la Niagara. Le demi-frère <strong>Francis</strong> ouvrit un comptoir au <strong>fort Niagara</strong> vers 1788 et, lorsque ce poste passa aux États-Unis, la famille traversa sur la rive canadienne sous la raison sociale <strong>W. &amp; J. Crooks</strong>. Sur la pointe, <strong>James Crooks</strong> érigea une maison de brique et nomma son domaine <strong>Crookston</strong>. C’est sur cette terre, sur ses quatre-vingt-douze acres, que la roue du Chautauqua serait un jour tracée.',
    'roots.p2': 'Puis la frontière se retourna contre eux. Pour transporter leurs marchandises, les frères avaient fait construire une belle goélette, le <strong>Lord Nelson</strong>. Le 9 juin 1812, <em>neuf jours avant que les États-Unis ne déclarent la guerre</em>, la marine américaine s’en empara sur le lac sous une accusation de contrebande jamais prouvée.',
    'roots.d1big': '9 jours',
    'roots.d1lbl': 'avant la déclaration de guerre, la marine américaine saisit la goélette des Crooks, le <em>Lord Nelson</em>',
    'roots.d2big': 'plus de 100 ans',
    'roots.d2lbl': 'la famille réclama justice au gouvernement américain, l’obtenant enfin vers 1914-1930',
    'roots.note': 'Rebaptisé <strong>USS <em>Scourge</em></strong> et retourné contre ceux qui l’avaient bâti, il sombra dans une bourrasque nocturne en 1813 avec quelque quatre-vingt-quatre hommes. Il repose encore, intact, au fond du lac Ontario, sépulture de guerre et lieu historique national.',
    'roots.quoteCite': 'Le pavillon hissé par l’USS <em>Scourge</em>, jadis le <em>Lord Nelson</em> de la famille Crooks',
    'roots.p3': 'La guerre vint frapper à la porte. James Crooks combattit comme capitaine de milice à <strong>Queenston Heights</strong>; au printemps de 1813, le bombardement américain qui emporta la ville <strong>rasa Crookston</strong>. La paix venue à Gand, la famille était ruinée, et James partit pour la tête du lac fonder <strong>Crooks’ Hollow</strong> et la première papeterie du Haut-Canada. La pointe incendiée resta soixante-dix ans entre les mains de ses héritiers.',
    'roots.turn': 'Un champ de bataille allait devenir un lieu de rencontre.',

    'prologue.eyebrow': 'L’idée',
    'prologue.h': 'Un mouvement qui balaya le continent, et une roue imprimée dans quatre-vingt-douze acres de rivage',
    'prologue.p1': 'En 1874, sur les rives du lac Chautauqua, dans l’ouest de l’État de New York, deux méthodistes, <strong>John Heyl Vincent</strong> et <strong>Lewis Miller</strong>, ouvrirent un camp d’été pour former les moniteurs d’école du dimanche. L’entreprise devint tout autre chose : un <em>mouvement d’éducation populaire</em> fait de conférences, de musique, de sciences et de perfectionnement personnel, qui essaima à travers l’Amérique du Nord, engendrant des centaines d’assemblées « filles ».',
    'prologue.p2': 'L’une d’elles atteignit les rives du lac Ontario, et, de tous les lieux, le sol même que la guerre avait incendié. Au début des années 1880, <strong>Robert Warren</strong>, maître de poste de Niagara, et un cercle d’hommes de Toronto fondèrent la <strong>Niagara Assembly</strong> et, en mai 1886, achetèrent la pointe de quatre-vingt-douze acres : <strong>le domaine ruiné de James Crooks, silencieux depuis soixante-dix ans</strong>. Ils y tracèrent le plan le plus singulier de la région. Des rues rayonnaient comme les rayons d’une roue depuis un moyeu unique, où un amphithéâtre de bois ouvert offrirait quatre mille places, et où les vapeurs ramèneraient bientôt les Américains de l’autre côté du lac, en invités.',
    'prologue.s1l': 'acres de rivage',
    'prologue.s2l': 'lots de villégiature, en baux de 99 ans',
    'prologue.s3l': 'places dans l’amphithéâtre',
    'prologue.s4l': 'ans plus tard, une roue qui tourne toujours',

    'wheel.eyebrow': 'La signature',
    'wheel.h': 'La roue des rues',
    'wheel.lede': 'Chaque avenue rayonnait depuis <strong>Circle Street</strong> et l’amphithéâtre en son centre, et chacune portait un nom. Réunies, elles forment un panthéon victorien de réformateurs, de poètes, de compositeurs, de savants et d’hommes d’État, imprimé dans un plan de rues. Pointez un rayon pour découvrir son homonyme, ou lisez la liste complète ci-dessous.',
    'wheel.hub': 'Circle Street et l’amphithéâtre',
    'wheel.hubName': 'Le moyeu de la roue',
    'wheel.hubRole': 'Pointez une avenue pour voir qui elle honorait.',

    'timeline.eyebrow': 'Le parcours',
    'timeline.h': 'D’une goélette saisie au Quartier de l’année',
    'timeline.lede': 'Deux siècles sur une même pointe de terre, une famille, une guerre, une villégiature, un incendie, et la communauté qui leur a tous survécu.',

    'grounds.eyebrow': 'Les terrains',
    'grounds.h': 'Ce qui s’élevait sur la pointe',
    'grounds.lede': 'Les photographies et gravures de la Niagara Assembly elle-même, conservées aujourd’hui par le Niagara-on-the-Lake Museum, sont presque tout ce qui subsiste de la villégiature. Chaque image renvoie à sa source.',

    'plate.no': 'Planche I',
    'plate.t': 'L’amphithéâtre, la seule photographie connue',
    'plate.d': 'Un pavillon ouvert, aux fermes de bois apparentes, dominant un banc de gradins en pente, orné de guirlandes, d’un Union Jack et de la bannière du <strong>Chautauqua Literary &amp; Scientific Circle</strong>. La planche imprimée porte la légende <em>« Amphitheatre (Seating Capacity 4,000) »</em>. Pendant des décennies, on crut qu’aucune photographie n’avait survécu; celle-ci existe bel et bien.',

    'card1.t': 'Hôtel Chautauqua',
    'card1.d': 'Construit en 1887 près de One Mile Pond, doté de l’éclairage électrique, du téléphone, du télégraphe, de bains et d’une grande salle à manger. Rebaptisé le <strong>Strathcona</strong> après 1894.',
    'card2.t': 'Le parc Ryerson et l’établissement de bains',
    'card2.d': 'L’espace vert riverain longeait le lac Ontario, avec une plage de sable, les établissements de bains et de canotage, et des chaloupes à louer.',
    'card3.t': 'Un rassemblement au parc Ryerson, vers 1890',
    'card3.d': 'Des visiteurs inconnus sous les arbres, savourant la vie sociale pour laquelle l’assemblée avait été conçue : conférences le jour, concerts le soir, croquet et boulingrin entre les deux.',
    'card4.t': 'Les terrains gravés, saison de 1888',
    'card4.d': 'Tiré du programme même de l’assemblée : un chalet, un pavillon et des tentes de toile. La villégiature commença par « des dizaines de tentes sur l’ancienne ferme des Crooks » avant que ne s’élèvent les chalets.',

    'people.eyebrow': 'Les personnages, première partie',
    'people.h': 'Ceux qui tracèrent la roue',
    'people.lede': 'Les administrateurs de l’assemblée, inscrits sur son propre plan d’arpentage, formaient une brochette de pasteurs méthodistes, d’éducateurs et d’hommes d’affaires torontois, dont plusieurs eurent une portée nationale bien au-delà de ce rivage.',

    'season.eyebrow': 'La saison',
    'season.h': 'Onze jours de juin, et un vapeur venu de Buffalo',
    'season.p1': 'L’assemblée ouvrait à la mi-juin et durait onze ou douze jours. Le jour, on suivait des cours d’anglais, d’histoire, de sciences politiques, de musique, d’arts et de botanique; le soir, des concerts et l’office divin sous les fermes de l’amphithéâtre. Entre les deux : tennis, boulingrin, croquet, baseball, golf et plage de sable. Un billet de saison coûtait <strong>un dollar</strong>; une seule journée, <strong>dix cents</strong>.',
    'season.p2': 'On y venait par eau et par rail. Les vapeurs à roues à aubes <strong>Chicora</strong> et <strong>Cibola</strong> reliaient Toronto–Niagara–Lewiston; les trains du Michigan Central s’arrêtaient à un embranchement au bout de John Street. Et de l’autre côté du lac, Buffalo s’éprit du lieu, le New York Central annonçait des trains d’excursion « vers le Canadian Chautauqua », et les écoles du dimanche en firent le but de leur pique-nique annuel.',
    'season.c1': 'Lockport Daily Journal, 16 juin 1890',
    'season.c2': 'Buffalo Evening News, avis d’excursion, 23 juillet 1890',
    'season.c3': 'Buffalo Evening News, 14 août 1896',

    'fire.eyebrow': '27 août 1909',
    'fire.h': 'Dix minutes',
    'fire.p1': 'La villégiature battait déjà de l’aile, trop peu de chambres, une vente de lots trop lente, un ton semi-religieux qui attirait des foules plus modestes qu’espéré, le tout sur fond d’une longue dépression internationale. En 1894, la Niagara Assembly fit faillite; un successeur, le Niagara Syndicate, exploita l’hôtel sous le nom de <strong>Strathcona</strong>.',
    'fire.p2': 'Puis, à trois heures vingt par un après-midi d’août, des pêcheurs virent la fumée monter du sous-sol de l’hôtel. <strong>En dix minutes, le bâtiment de bois n’était plus.</strong> Des clients s’enfuirent à demi vêtus; certains sautèrent des balcons; les voisins les recueillirent. L’incendie, dit-on, serait parti d’une lampe qu’une jeune femme utilisait pour se friser les cheveux. Les propriétaires ne reconstruisirent pas.',
    'fire.coda': 'Et tout aurait pu finir là. <span class="fire-turn">Il n’en fut rien.</span> L’hôtel avait disparu, mais la roue des rues, les lots, les chalets et les jeunes chênes, eux, demeuraient. La villégiature était finie; le <em>quartier</em> ne faisait que commencer.',

    'afterlife.eyebrow': 'La seconde vie',
    'afterlife.h': 'La roue survit à la villégiature',
    'afterlife.p1': 'En 1922, la <strong>Mississauga Land Beach Company</strong> lotit ce qui restait et vendit les derniers terrains; lorsqu’elle périclita, la Ville récupéra une grande partie des terres pour taxes impayées et les revendit. Peu à peu, les anciens terrains de l’assemblée devinrent une <strong>communauté de chalets d’été</strong>, de modestes chalets d’un étage ou d’un étage et demi, souvent non isolés, habités quelques semaines et loués le reste de la saison. Cette tradition centenaire de location façonne encore les rues aujourd’hui.',
    'afterlife.p2': 'Au cours de la seconde moitié du XXᵉ siècle, on isola les chalets et le quartier devint habité à l’année, tout en gardant ses rues sans bordures, en sentiers, et sa voûte d’arbres. Quand le <strong>Shaw Festival</strong> s’établit à proximité à partir de 1962, tant de ses comédiens, concepteurs et techniciens s’installèrent dans les chalets abordables que le quartier gagna un second surnom, plus affectueux : <strong>« SHAWtauqua »</strong>. Pour un si petit lieu, il a discrètement logé quelques-uns des visages les plus connus du théâtre canadien.',

    'oaks.eyebrow': 'Le fil vivant',
    'oaks.h': 'Une voûte plus ancienne que la villégiature',
    'oaks.p1': 'Le trait le plus aimé de Chautauqua, ce sont ses arbres, une voûte verte que les résidents appellent la <em>Cathedral of the Everyday</em>. En son cœur se dressent <strong>166 chênes matures</strong>, tous du même âge, qui <strong>se sont ensemencés d’eux-mêmes sur l’ancienne ferme des Crooks, tout juste après la guerre de 1812</strong>. Ils sont plus vieux que la villégiature, plus vieux que la roue, un lien vivant avec la bataille qui rasa le domaine en 1813.',
    'oaks.p2': 'En 2016, ils disparaissaient plus vite qu’ils ne pouvaient se renouveler, seuls douze jeunes chênes poussaient. Deux voisins, la conceptrice de décors <strong>Leslie Frankish</strong> et <strong>Holmes Hooke</strong>, se mirent alors, après une conversation par-dessus la clôture, à recenser chaque arbre et à agir. Avec l’<strong>École d’horticulture du Collège Niagara</strong>, ils firent pousser de nouveaux chênes <strong>à partir des glands des 166 arbres d’origine</strong>, et avaient planté, dès 2023, <strong>172 chênes de la génération suivante</strong> dans le quartier, ainsi que plus de <strong>500 arbres</strong> offerts à l’ensemble de Niagara-on-the-Lake.',
    'oaks.n1': 'chênes patrimoniaux, ensemencés après 1812',
    'oaks.n2': 'de leurs descendants, cultivés et replantés dès 2023',
    'oaks.cite': 'Leslie Frankish, à propos des chênes patrimoniaux · Niagara-on-the-Lake Local, 2023',

    'community.eyebrow': 'Les personnages, deuxième partie',
    'community.h': 'Ceux qui la font tourner',
    'community.lede': 'Les fondateurs de la villégiature tracèrent la roue; un siècle de bénévoles l’a gardée vivante. Chautauqua, aujourd’hui, repose sur ses voisins.',
    'ccol1.h': 'L’association des résidents',
    'ccol1.p': 'Fondée en <strong>1952</strong>, plus ancienne que le Shaw Festival, la <strong>Chautauqua Residents’ Association</strong>, bénévole, défend le quartier auprès de la Ville, organise des rencontres de voisinage et, depuis 2024, tient le <strong>Circuit des arts et des jardins</strong>, gratuit, ouvrant dix jardins et ateliers. « Historiquement, note le président Weston Miller, Chautauqua était une communauté très artistique. »',
    'ccol2.h': 'Les Friends of One Mile Creek',
    'ccol2.p': 'Depuis <strong>2003</strong>, ce groupe de voisins restaure le ruisseau qui draine le flanc ouest de la roue, un plan de bassin versant en 2005, des années de corvées de nettoyage et de plantations indigènes et, avec la Ville et Parcs Canada, des centaines d’arbustes et d’arbres pour remplacer les pertes causées par l’agrile du frêne.',
    'ccol3.h': 'Les gardiens de la voûte',
    'ccol3.p': 'Le <strong>Chautauqua Oaks Project</strong> et le <strong>Community Tree Plan</strong> de la Ville protègent la voûte verte; une <strong>plaque</strong> financée par la communauté, dévoilée au parc Chautauqua en 2025, honore les bénévoles qui ont planté une forêt pour un siècle qu’ils ne verront jamais.',

    'today.eyebrow': 'Aujourd’hui',
    'today.h': 'Le Quartier de l’année',
    'today.p1': 'En 2026, dès la toute première année de cette distinction, la Ville de Niagara-on-the-Lake nomma <strong>Chautauqua son Quartier de l’année</strong>, et organisa une fête communautaire au parc pour le célébrer. Une pointe de terre que les Américains avaient jadis incendiée devint un quartier que, deux siècles plus tard, sa propre ville désigna comme le lieu incarnant le mieux l’appartenance et le lien.',
    'today.p2': 'L’amphithéâtre a disparu; la roue demeure. Circle Street tient toujours le centre, les avenues rayonnent toujours comme des rayons, et sous elles les arrière-arrière-petits-enfants des chênes de 1812 prennent racine. Venez la parcourir : logez dans l’un des vieux chalets, visitez les jardins en juin, et trouvez, à un mille de l’endroit où la rivière Niagara rejoint le lac, un lieu qui n’a jamais cessé de grandir.',
    'today.tag': 'La roue tourne toujours.',

    'sources.eyebrow': 'Sources et mentions',
    'sources.h': 'Chaque affirmation, vérifiable',
    'sources.imagesH': 'Images',
    'sources.imagesP': 'Toutes les photographies, cartes postales, plans et gravures d’époque appartiennent au <strong>Niagara-on-the-Lake Museum</strong> (Niagara Historical Society) et sont présentés grâce à son exposition <a href="https://artsandculture.google.com/story/chautauqua-niagara-historical-society-museum/yAVBx5cT--PjIg" target="_blank" rel="noopener">Google Arts &amp; Culture</a>. Chaque image ci-dessus renvoie à sa fiche source. Les polices Web proviennent du réseau de diffusion de Google Fonts.',
    'sources.recordsH': 'Fonds et archives',
    'sources.rec1': '<a href="https://notlmuseum.catalogaccess.com/" target="_blank" rel="noopener">Collection en ligne du NOTL Museum</a>, plans d’arpentage, photographies de l’amphithéâtre et de l’hôtel.',
    'sources.rec2': '<a href="https://www.nyshistoricnewspapers.org/" target="_blank" rel="noopener">NYS Historic Newspapers</a>, couverture de Buffalo et de la frontière du Niagara, 1885-1909.',
    'sources.rec3': '<a href="https://www.chautauquaresidents.ca/" target="_blank" rel="noopener">Chautauqua Residents’ Association</a> et <a href="https://friendsofonemilecreek.org/" target="_blank" rel="noopener">Friends of One Mile Creek</a>, la communauté d’aujourd’hui.',
    'sources.rec4': '<a href="https://en.wikipedia.org/wiki/USS_Scourge_(1812)" target="_blank" rel="noopener">USS Scourge / Lord Nelson</a> et le <a href="https://www.biographi.ca/fr/bio/crooks_james_8F.html" target="_blank" rel="noopener">Dictionnaire biographique du Canada</a>, la famille Crooks et la guerre de 1812.',
    'sources.accuracyH': 'Sur l’exactitude',
    'sources.accuracyP': 'Les dates, les noms et les chiffres, de la saisie du Lord Nelson aux 166 chênes patrimoniaux, proviennent de documents d’archives, de journaux d’époque et des organismes de la communauté eux-mêmes, non de récits de seconde main. Ceci n’est qu’une page d’un fonds de recherche plus vaste couvrant de 1788 à nos jours.',
    'colophon': 'L’histoire du quartier de Chautauqua, à Niagara-on-the-Lake, d’un domaine incendié au Quartier de l’année. Réalisé à partir de recherches en archives; les droits sur les images demeurent ceux des institutions détentrices. <a href="#top">Revenir en haut <span aria-hidden="true">↑</span></a>',
  };

  /* ---------- capture the English (source) content from the DOM ---------- */
  const nodes = [];
  document.querySelectorAll('[data-i18n], [data-i18n-html]').forEach(function (el) {
    const isHtml = el.hasAttribute('data-i18n-html');
    const key = el.getAttribute(isHtml ? 'data-i18n-html' : 'data-i18n');
    nodes.push({ el: el, key: key, html: isHtml, en: isHtml ? el.innerHTML : el.textContent });
  });

  const btn = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');
  const curLbl = document.getElementById('langCur');
  const btnFlag = btn ? btn.querySelector('.lang__flag') : null;
  const opts = menu ? Array.prototype.slice.call(menu.querySelectorAll('.lang__opt')) : [];

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr-CA' : 'en');
    nodes.forEach(function (n) {
      const val = (lang === 'fr' && FR[n.key] != null) ? FR[n.key] : n.en;
      if (n.html) n.el.innerHTML = val; else n.el.textContent = val;
    });
    if (curLbl) curLbl.textContent = lang === 'fr' ? 'FR' : 'EN';
    if (btnFlag) btnFlag.textContent = lang === 'fr' ? '⚜️' : '🇬🇧';
    opts.forEach(function (o) { o.setAttribute('aria-checked', o.dataset.lang === lang ? 'true' : 'false'); });
    if (window.CHQ && typeof window.CHQ.render === 'function') window.CHQ.render(lang);
    try { localStorage.setItem('chq-lang', lang); } catch (e) {}
    window.CHQ_LANG = lang;
  }

  /* ---------- accessible dropdown ---------- */
  function openMenu() {
    if (!menu) return;
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    const checked = opts.find(function (o) { return o.getAttribute('aria-checked') === 'true'; }) || opts[0];
    if (checked) checked.focus();
  }
  function closeMenu(focusBtn) {
    if (!menu) return;
    menu.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    if (focusBtn && btn) btn.focus();
  }
  function toggleMenu() { (menu.hidden ? openMenu : function () { closeMenu(true); })(); }

  if (btn && menu) {
    btn.addEventListener('click', function (e) { e.stopPropagation(); toggleMenu(); });
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMenu(); }
    });
    opts.forEach(function (o, i) {
      o.addEventListener('click', function () { applyLang(o.dataset.lang); closeMenu(true); });
      o.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); (opts[i + 1] || opts[0]).focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); (opts[i - 1] || opts[opts.length - 1]).focus(); }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); applyLang(o.dataset.lang); closeMenu(true); }
        else if (e.key === 'Escape') { e.preventDefault(); closeMenu(true); }
        else if (e.key === 'Tab') { closeMenu(false); }
      });
    });
    document.addEventListener('click', function (e) { if (!menu.hidden && !document.getElementById('lang').contains(e.target)) closeMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) closeMenu(true); });
  }

  /* ---------- init ---------- */
  let saved = null;
  try { saved = localStorage.getItem('chq-lang'); } catch (e) {}
  const initial = (saved === 'fr' || saved === 'en') ? saved
    : (navigator.language && navigator.language.toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en');
  applyLang(initial);
})();
