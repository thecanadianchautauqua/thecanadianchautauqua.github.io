/* ============================================================
   The Canadian Chautauqua, interactions + bilingual dynamic content
   The wheel SVG (surnames) is language-neutral and built once; the
   roster, legend, timeline and people cards are re-rendered per
   language by window.CHQ.render(lang), called from i18n.js.
   ============================================================ */
(function () {
  'use strict';

  const T = (v, lang) => (v && typeof v === 'object') ? (v[lang] || v.en) : v;

  /* ---------- data (EN + FR) ---------- */
  const CATS = {
    reformers:  { label: { en: 'Religious reformers',            fr: 'Réformateurs religieux' },              color: '#dc9086' },
    educators:  { label: { en: 'Educators & Chautauqua founders', fr: 'Éducateurs et fondateurs du Chautauqua' }, color: '#5cbda8' },
    poets:      { label: { en: 'Poets & writers',                fr: 'Poètes et écrivains' },                   color: '#e3b562' },
    composers:  { label: { en: 'Composers',                      fr: 'Compositeurs' },                          color: '#bb9dd9' },
    scientists: { label: { en: 'Scientists & inventors',         fr: 'Savants et inventeurs' },                 color: '#84b7e1' },
    statesmen:  { label: { en: 'Statesmen & vice-royalty',       fr: 'Hommes d’État et vice-rois' },            color: '#acb8bd' },
  };

  const AVENUES = [
    ['Luther',      'reformers',  { en: 'Martin Luther, who began the Reformation', fr: 'Martin Luther, instigateur de la Réforme' }],
    ['Wycliffe',    'reformers',  { en: 'John Wycliffe, early English reformer and Bible translator', fr: 'John Wycliffe, réformateur anglais et traducteur de la Bible' }],
    ['Wesley',      'reformers',  { en: 'John Wesley, founder of Methodism', fr: 'John Wesley, fondateur du méthodisme' }],
    ['Knox',        'reformers',  { en: 'John Knox, leader of the Scottish Reformation', fr: 'John Knox, chef de la Réforme écossaise' }],
    ['Wilberforce', 'reformers',  { en: 'William Wilberforce, abolitionist of the slave trade', fr: 'William Wilberforce, abolitionniste de la traite des esclaves' }],
    ['Vincent',     'educators',  { en: 'John Heyl Vincent, co-founder of the Chautauqua movement', fr: 'John Heyl Vincent, cofondateur du mouvement Chautauqua' }],
    ['Froebel',     'educators',  { en: 'Friedrich Fröbel, who invented the kindergarten', fr: 'Friedrich Fröbel, inventeur du jardin d’enfants' }],
    ['Ryerson',     'educators',  { en: 'Egerton Ryerson, architect of Ontario’s public schools (Ryerson Park)', fr: 'Egerton Ryerson, architecte des écoles publiques de l’Ontario (parc Ryerson)' }],
    ['Shakespeare', 'poets',      { en: 'William Shakespeare', fr: 'William Shakespeare' }],
    ['Milton',      'poets',      { en: 'John Milton, poet of Paradise Lost', fr: 'John Milton, poète du Paradis perdu' }],
    ['Longfellow',  'poets',      { en: 'Henry Wadsworth Longfellow', fr: 'Henry Wadsworth Longfellow' }],
    ['Tennyson',    'poets',      { en: 'Alfred, Lord Tennyson, Poet Laureate', fr: 'Alfred, Lord Tennyson, poète officiel de la Couronne' }],
    ['Bryant',      'poets',      { en: 'William Cullen Bryant, American poet and editor', fr: 'William Cullen Bryant, poète et éditeur américain' }],
    ['Browning',    'poets',      { en: 'Robert Browning', fr: 'Robert Browning' }],
    ['Chaucer',     'poets',      { en: 'Geoffrey Chaucer, father of English poetry', fr: 'Geoffrey Chaucer, père de la poésie anglaise' }],
    ['Homer',       'poets',      { en: 'Homer, poet of the Iliad and Odyssey', fr: 'Homère, poète de l’Iliade et de l’Odyssée' }],
    ['Addison',     'poets',      { en: 'Joseph Addison, essayist of The Spectator', fr: 'Joseph Addison, essayiste du Spectator' }],
    ['Dickens',     'poets',      { en: 'Charles Dickens, the one avenue since renamed, to Dixie Avenue, for reasons no one now recalls', fr: 'Charles Dickens, la seule avenue rebaptisée depuis, en Dixie Avenue, pour des raisons que nul ne se rappelle' }],
    ['Mozart',      'composers',  { en: 'Wolfgang Amadeus Mozart', fr: 'Wolfgang Amadeus Mozart' }],
    ['Mendelssohn', 'composers',  { en: 'Felix Mendelssohn', fr: 'Felix Mendelssohn' }],
    ['Newton',      'scientists', { en: 'Sir Isaac Newton', fr: 'Sir Isaac Newton' }],
    ['Faraday',     'scientists', { en: 'Michael Faraday, pioneer of electricity', fr: 'Michael Faraday, pionnier de l’électricité' }],
    ['Edison',      'scientists', { en: 'Thomas Edison, inventor (the grounds had electric light)', fr: 'Thomas Edison, inventeur (les terrains avaient l’éclairage électrique)' }],
    ['Dawson',      'scientists', { en: 'Sir J. William Dawson, Canadian geologist and educator', fr: 'Sir J. William Dawson, géologue et éducateur canadien' }],
    ['Gladstone',   'statesmen',  { en: 'W. E. Gladstone, British Prime Minister', fr: 'W. E. Gladstone, premier ministre britannique' }],
    ['Lansdowne',   'statesmen',  { en: 'The Marquess of Lansdowne, Governor General of Canada', fr: 'Le marquis de Lansdowne, gouverneur général du Canada' }],
  ];

  const PANEL = {
    en: { name: 'The hub of the wheel', role: 'Point at any avenue to see who it honoured.' },
    fr: { name: 'Le moyeu de la roue',  role: 'Pointez une avenue pour voir qui elle honorait.' },
  };
  const avLabel = (name, lang) => lang === 'fr' ? ('avenue ' + name) : (name + ' Avenue');

  const TIMELINE = [
    ['1788', { en: 'A family astride the border', fr: 'Une famille à cheval sur la frontière' }, { en: 'Francis Crooks opens a trading house at Fort Niagara; his brothers follow. As the fort passes to the U.S., the family crosses to the Canadian bank and builds the estate “Crookston” on this point.', fr: 'Francis Crooks ouvre un comptoir au fort Niagara; ses frères le rejoignent. Le fort passant aux États-Unis, la famille gagne la rive canadienne et bâtit le domaine « Crookston » sur cette pointe.' }, false],
    ['1811', { en: 'The Lord Nelson', fr: 'Le Lord Nelson' }, { en: 'W. & J. Crooks launch a fine merchant schooner, the Lord Nelson, at Niagara.', fr: 'W. & J. Crooks lancent une belle goélette marchande, le Lord Nelson, à Niagara.' }, false],
    ['1812', { en: 'Seized before the war', fr: 'Saisi avant la guerre' }, { en: 'Nine days before war is declared, the U.S. Navy seizes the Lord Nelson and arms her as the USS Scourge.', fr: 'Neuf jours avant la déclaration de guerre, la marine américaine s’empare du Lord Nelson et l’arme sous le nom d’USS Scourge.' }, true],
    ['1813', { en: 'The estate is razed', fr: 'Le domaine est rasé' }, { en: 'On 27 May the American bombardment that takes the town wrecks James Crooks’ estate, “Crookston.” Weeks later the Scourge, his Lord Nelson, founders in a squall, and still lies on the lakebed.', fr: 'Le 27 mai, le bombardement américain qui emporte la ville détruit le domaine « Crookston » de James Crooks. Des semaines plus tard, le Scourge, son Lord Nelson, sombre dans une bourrasque et repose encore au fond du lac.' }, true],
    ['1814', { en: 'Peace, and a long grievance', fr: 'La paix, et un long litige' }, { en: 'The Treaty of Ghent ends the war. Ruined, James Crooks leaves for Crooks’ Hollow; his heirs will press the U.S. government over the Lord Nelson for a century.', fr: 'Le traité de Gand met fin à la guerre. Ruiné, James Crooks part pour Crooks’ Hollow; ses héritiers réclameront réparation au gouvernement américain pendant un siècle.' }, false],
    ['1885', { en: 'First word of a plan', fr: 'Premières rumeurs d’un projet' }, { en: 'A New York paper notes the “establishment of the Canadian Chautauqua” on the shore of Lake Ontario near Niagara, a year before any land changes hands.', fr: 'Un journal new-yorkais signale l’« établissement du Canadian Chautauqua » sur les rives du lac Ontario près de Niagara, un an avant toute transaction.' }, false],
    ['1886', { en: 'The Niagara Assembly buys the point', fr: 'La Niagara Assembly achète la pointe' }, { en: 'In May the town grants a 20-year tax exemption and the Assembly purchases the 92-acre Crooks property, laying out ~500 lots on a radial plan.', fr: 'En mai, la ville accorde une exemption de taxes de 20 ans et l’assemblée acquiert la propriété Crooks de 92 acres, y traçant environ 500 lots sur un plan rayonnant.' }, true],
    ['1887', { en: 'The hotel rises', fr: 'L’hôtel s’élève' }, { en: 'The Hotel Chautauqua is built by One Mile Pond; the inaugural assembly runs eleven days.', fr: 'L’Hôtel Chautauqua est construit près de One Mile Pond; l’assemblée inaugurale dure onze jours.' }, false],
    ['1888', { en: 'The first full season', fr: 'La première saison complète' }, { en: 'The grounds open in earnest, electric light, telephone and telegraph, an inter-denominational programme under the amphitheatre.', fr: 'Les terrains ouvrent pour de bon, éclairage électrique, téléphone et télégraphe, un programme interconfessionnel sous l’amphithéâtre.' }, true],
    ['1890', { en: 'Steamers and excursion trains', fr: 'Vapeurs et trains d’excursion' }, { en: 'The season opens 14 June for twelve days; the New York Central runs excursion trains “to the Canadian Chautauqua” from Buffalo.', fr: 'La saison ouvre le 14 juin pour douze jours; le New York Central affrète des trains d’excursion « vers le Canadian Chautauqua » depuis Buffalo.' }, false],
    ['1894', { en: 'Bankruptcy, and a new name', fr: 'La faillite, et un nouveau nom' }, { en: 'Too few beds and slow lot sales bankrupt the Assembly. The Niagara Syndicate takes over and renames the hotel the Strathcona.', fr: 'Trop peu de chambres et des ventes de lots trop lentes ruinent l’assemblée. Le Niagara Syndicate prend le relais et rebaptise l’hôtel le Strathcona.' }, true],
    ['1909', { en: 'Ten minutes of fire', fr: 'Dix minutes de feu' }, { en: 'On 27 August the Strathcona burns to the ground in minutes. The owners do not rebuild, and the resort era ends.', fr: 'Le 27 août, le Strathcona brûle en quelques minutes. Les propriétaires ne reconstruisent pas, et l’ère de la villégiature s’achève.' }, true],
    ['1922', { en: 'A neighbourhood inside the wheel', fr: 'Un quartier dans la roue' }, { en: 'The Mississauga Land Beach Company subdivides the grounds; a residential community, still called Chautauqua, grows up inside the old plan.', fr: 'La Mississauga Land Beach Company lotit les terrains; une communauté résidentielle, toujours appelée Chautauqua, grandit dans l’ancien plan.' }, false],
    ['1952', { en: 'Neighbours organize', fr: 'Les voisins s’organisent' }, { en: 'The Chautauqua Residents’ Association is founded, still going strong seventy years on, and older than the festival that will nickname the place.', fr: 'La Chautauqua Residents’ Association est fondée, toujours active soixante-dix ans plus tard, et plus ancienne que le festival qui donnera son surnom au lieu.' }, false],
    ['1962', { en: '“SHAWtauqua”', fr: '« SHAWtauqua »' }, { en: 'The Shaw Festival begins nearby; over the coming decades its actors, designers and crew fill the cottages, and the neighbourhood earns its fond second name.', fr: 'Le Shaw Festival s’installe à proximité; au fil des décennies, ses comédiens, concepteurs et techniciens remplissent les chalets, et le quartier gagne son affectueux second nom.' }, false],
    ['2003', { en: 'Reviving the creek', fr: 'Faire revivre le ruisseau' }, { en: 'Friends of One Mile Creek form to restore the water and wetland along the wheel’s western edge.', fr: 'Les Friends of One Mile Creek se forment pour restaurer l’eau et les milieux humides du flanc ouest de la roue.' }, false],
    ['2016', { en: 'Counting the oaks', fr: 'Recenser les chênes' }, { en: 'Two neighbours begin cataloguing the canopy, and find 166 heritage oaks that self-seeded just after 1812. The Chautauqua Oaks Project is born.', fr: 'Deux voisins entreprennent de recenser la voûte, et découvrent 166 chênes patrimoniaux ensemencés juste après 1812. Le Chautauqua Oaks Project est né.' }, true],
    ['2023', { en: 'A forest for the future', fr: 'Une forêt pour l’avenir' }, { en: 'The Oaks Project finishes: 172 next-generation oaks grown from the originals’ acorns, plus 500+ trees gifted across the town.', fr: 'Le Oaks Project s’achève : 172 chênes de la génération suivante issus des glands d’origine, plus de 500 arbres offerts à la ville.' }, true],
    ['2024', { en: 'Art & gardens', fr: 'Arts et jardins' }, { en: 'The Residents’ Association opens ten gardens and studios in the first free Chautauqua Art & Garden Tour.', fr: 'L’association des résidents ouvre dix jardins et ateliers lors du premier Circuit des arts et des jardins de Chautauqua, gratuit.' }, false],
    ['2026', { en: 'Neighbourhood of the Year', fr: 'Quartier de l’année' }, { en: 'In the very first year of the honour, the Town names Chautauqua its Neighbourhood of the Year, and throws a party in the park.', fr: 'Dès la toute première année de la distinction, la Ville nomme Chautauqua son Quartier de l’année, et organise une fête au parc.' }, true],
  ];

  const PEOPLE = [
    ['RW', 'Robert M. Warren', { en: 'fl. 1880s–90s', fr: 'actif v. 1880-1890' }, { en: 'Postmaster of Niagara and the prime mover of the Niagara Assembly. His cottage at Chautauqua survives in a museum postcard.', fr: 'Maître de poste de Niagara et cheville ouvrière de la Niagara Assembly. Son chalet à Chautauqua subsiste sur une carte postale du musée.' }, '#c2883a'],
    ['JL', 'John Neilson Lake', '1834–1925', { en: 'Methodist preacher and temperance leader on the Assembly board, and the man who, in 1882, <b>chose the site of and founded the city of Saskatoon</b>.', fr: 'Prédicateur méthodiste et chef du mouvement de tempérance au conseil de l’assemblée, et l’homme qui, en 1882, <b>choisit l’emplacement et fonda la ville de Saskatoon</b>.' }, '#4fa493'],
    ['WW', 'Rev. W. H. Withrow', '1839–1908', { en: 'Editor of the <b>Canadian Methodist Magazine</b> for thirty years, the movement’s literary and religious establishment in person.', fr: 'Rédacteur en chef du <b>Canadian Methodist Magazine</b> pendant trente ans, l’establishment littéraire et religieux du mouvement en personne.' }, '#c07c70'],
    ['JH', 'James L. Hughes', '1846–1935', { en: 'Toronto’s chief school inspector and a champion of the <b>kindergarten</b>, fittingly, an avenue here bears Fröbel’s name.', fr: 'Inspecteur en chef des écoles de Toronto et champion du <b>jardin d’enfants</b>, à propos, une avenue d’ici porte le nom de Fröbel.' }, '#6aa9d8'],
    ['JM', 'John James MacLaren', { en: 'Toronto bar & bench', fr: 'barreau et magistrature de Toronto' }, { en: 'Toronto barrister, later a <b>Justice of the Ontario Court of Appeal</b>, Methodist layman and temperance leader.', fr: 'Avocat torontois, plus tard <b>juge à la Cour d’appel de l’Ontario</b>, laïc méthodiste et militant de la tempérance.' }, '#94a2a8'],
    ['JC', 'James Crooks', '1778–1860', { en: 'The Scottish-born merchant whose estate became the grounds. After the War of 1812 he built Crooks’ Hollow near Hamilton and Upper Canada’s first paper mill.', fr: 'Le marchand d’origine écossaise dont le domaine devint les terrains. Après la guerre de 1812, il bâtit Crooks’ Hollow près de Hamilton et la première papeterie du Haut-Canada.' }, '#a98ccb'],
  ];
  const MODERN = [
    ['LF', 'Leslie Frankish', { en: 'Oaks Project co-founder', fr: 'cofondatrice du Oaks Project' }, { en: 'A Shaw Festival scenic designer who, alarmed at the vanishing canopy, co-founded the <b>Chautauqua Oaks Project</b>, and opens her stage-designer’s garden on the Art &amp; Garden Tour.', fr: 'Conceptrice de décors au Shaw Festival qui, alarmée par le dépérissement de la voûte, cofonda le <b>Chautauqua Oaks Project</b>, et ouvre son jardin de scénographe lors du Circuit des arts et des jardins.' }, '#3f7d6e'],
    ['HH', 'Holmes Hooke', { en: 'Oaks Project co-founder', fr: 'cofondateur du Oaks Project' }, { en: 'The project’s co-ordinator, who called replanting the neighbourhood’s oaks “a very satisfying retirement project.”', fr: 'Coordonnateur du projet, qui qualifia la replantation des chênes du quartier de « projet de retraite très gratifiant ».' }, '#9a6f1c'],
    ['CN', 'Christopher Newton', { en: 'Shaw Festival, 1980–2002', fr: 'Shaw Festival, 1980-2002' }, { en: 'Led the Shaw Festival for 23 years; the town’s “grand heritage tree canopy” helped draw him here. The neighbourhood planted a <b>grove of oaks</b> in his honour.', fr: 'Dirigea le Shaw Festival pendant 23 ans; la « grande voûte patrimoniale » de la ville contribua à l’y attirer. Le quartier planta un <b>bosquet de chênes</b> en son honneur.' }, '#b5615a'],
    ['WM', 'Weston Miller', { en: 'Residents’ Association president', fr: 'président de l’association des résidents' }, { en: 'Leads the CRA and launched the free <b>Art &amp; Garden Tour</b>: “Historically, Chautauqua was a very artistic community.”', fr: 'Dirige la CRA et a lancé le <b>Circuit des arts et des jardins</b>, gratuit : « Historiquement, Chautauqua était une communauté très artistique. »' }, '#3f7d9e'],
    ['GB', 'Gerry Beneteau', { en: 'Friends of One Mile Creek', fr: 'Friends of One Mile Creek' }, { en: 'A founder of the 2003 group that has spent two decades restoring the creek and Lansdowne Pond.', fr: 'Cofondateur du groupe de 2003 qui, depuis deux décennies, restaure le ruisseau et l’étang Lansdowne.' }, '#5f6b70'],
    ['BD', 'Betty Disero', { en: 'Former Lord Mayor', fr: 'ancienne mairesse (Lord Mayor)' }, { en: 'Championed the Oaks Project from Town Hall, one of many hands, resident and civic, behind the canopy’s renewal.', fr: 'A défendu le Oaks Project depuis l’hôtel de ville, l’une des nombreuses mains, citoyennes et municipales, derrière le renouveau de la voûte.' }, '#7d5da0'],
  ];

  /* ---------- the wheel SVG (built once; surnames are language-neutral) ---------- */
  const SVGNS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('wheelSvg');
  const wpName = document.getElementById('wpName');
  const wpRole = document.getElementById('wpRole');
  const legendEl = document.getElementById('wheelLegend');
  const rosterEl = document.getElementById('wheelRoster');
  let curLang = null;
  const spokeGroups = [];

  if (svg) {
    const CX = 380, CY = 380, HUB = 70, DOT_R = 250, LABEL_R = 268, N = AVENUES.length;
    const el = (n, a) => { const e = document.createElementNS(SVGNS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
    svg.appendChild(el('circle', { cx: CX, cy: CY, r: HUB + 6, class: 'wheel-hub-ring' }));

    AVENUES.forEach(([name, cat], i) => {
      const baseDeg = (i / N) * 360 - 90;
      const color = CATS[cat].color;
      const g = el('g', { class: 'spoke', 'data-cat': cat, transform: `rotate(${baseDeg} ${CX} ${CY})` });
      g.appendChild(el('line', { class: 'spoke-line', x1: CX + HUB, y1: CY, x2: CX + DOT_R, y2: CY }));
      const dot = el('circle', { class: 'spoke-dot', cx: CX + DOT_R, cy: CY, r: 4.5, fill: color });
      g.appendChild(dot);
      const flip = (baseDeg > 90 && baseDeg < 270);
      const lbl = el('text', { class: 'spoke-label', x: CX + LABEL_R, y: CY, 'text-anchor': flip ? 'end' : 'start', 'dominant-baseline': 'middle' });
      if (flip) lbl.setAttribute('transform', `rotate(180 ${CX + LABEL_R} ${CY})`);
      lbl.textContent = name;
      g.appendChild(lbl);
      svg.appendChild(g);
      spokeGroups.push({ g, cat, name, i, color });
      const activate = () => setActive(i);
      dot.addEventListener('mouseenter', activate);
      lbl.addEventListener('mouseenter', activate);
      g.addEventListener('mouseleave', clearActive);
      g.addEventListener('click', activate);   // tap to select (touch / mobile)
    });

    const hub = el('circle', { cx: CX, cy: CY, r: HUB - 8, class: 'wheel-hub' });
    hub.addEventListener('click', clearActive);   // tap centre to reset (touch / mobile)
    svg.appendChild(hub);
    const h1 = el('text', { x: CX, y: CY - 6, class: 'wheel-hub-label' }); h1.textContent = 'Circle';
    const h2 = el('text', { x: CX, y: CY + 13, class: 'wheel-hub-label' }); h2.textContent = 'Street';
    svg.appendChild(h1); svg.appendChild(h2);
  }

  function setActive(i) {
    const s = spokeGroups[i];
    spokeGroups.forEach((o, j) => { o.g.classList.toggle('is-active', j === i); o.g.classList.toggle('is-dim', j !== i); });
    if (wpName) { wpName.textContent = avLabel(s.name, curLang); wpName.style.color = s.color; }
    if (wpRole) wpRole.textContent = T(AVENUES[i][2], curLang);
  }
  function clearActive() {
    spokeGroups.forEach(o => o.g.classList.remove('is-active', 'is-dim'));
    if (wpName) { wpName.textContent = PANEL[curLang].name; wpName.style.color = ''; }
    if (wpRole) wpRole.textContent = PANEL[curLang].role;
  }

  function renderLegend(lang) {
    if (!legendEl) return;
    legendEl.textContent = '';
    Object.entries(CATS).forEach(([key, { label, color }]) => {
      const b = document.createElement('span');
      b.className = 'leg';
      b.innerHTML = `<span class="leg__sw" style="background:${color}"></span>${T(label, lang)}`;
      b.addEventListener('mouseenter', () => spokeGroups.forEach(o => o.g.classList.toggle('is-dim', o.cat !== key)));
      b.addEventListener('mouseleave', () => spokeGroups.forEach(o => o.g.classList.remove('is-dim')));
      legendEl.appendChild(b);
    });
  }
  function renderRoster(lang) {
    if (!rosterEl) return;
    rosterEl.textContent = '';
    Object.entries(CATS).forEach(([key, { label, color }]) => {
      const group = AVENUES.filter(a => a[1] === key);
      const items = group.map(([name, , role]) =>
        `<div class="roster-item"><dt>${avLabel(name, lang)}</dt><dd>${T(role, lang)}</dd></div>`).join('');
      const sec = document.createElement('div');
      sec.className = 'roster-group reveal';
      sec.innerHTML = `<h3 class="roster-h"><span class="roster-sw" style="background:${color}" aria-hidden="true"></span>${T(label, lang)}</h3><dl class="roster-list">${items}</dl>`;
      rosterEl.appendChild(sec);
    });
  }
  function renderTimeline(lang) {
    const list = document.getElementById('timelineList');
    if (!list) return;
    list.textContent = '';
    TIMELINE.forEach(([year, t, d, key]) => {
      const li = document.createElement('li');
      li.className = 'tl reveal' + (key ? ' is-key' : '');
      li.innerHTML = `<div class="tl__year">${year}</div><div class="tl__body"><p class="tl__t">${T(t, lang)}</p><p class="tl__d">${T(d, lang)}</p></div>`;
      list.appendChild(li);
    });
  }
  function buildPeople(list, container, lang) {
    if (!container) return;
    container.textContent = '';
    list.forEach(([mono, name, yrs, desc, color]) => {
      const d = document.createElement('article');
      d.className = 'person reveal';
      d.style.setProperty('--accent', color);
      d.innerHTML = `<p class="person__mono" aria-hidden="true">${mono}</p><h3 class="person__name">${name}</h3><p class="person__yrs">${T(yrs, lang)}</p><p class="person__role">${T(desc, lang)}</p>`;
      container.appendChild(d);
    });
  }

  /* ---------- scroll reveals ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let io = null;
  if (!reduce && 'IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  }
  let firstBuild = true;
  function handleReveals() {
    if (reduce || !io) { document.querySelectorAll('.reveal').forEach(r => r.classList.add('in')); return; }
    if (firstBuild) { document.querySelectorAll('.reveal:not(.in)').forEach(r => io.observe(r)); }
    else { document.querySelectorAll('.reveal:not(.in)').forEach(r => r.classList.add('in')); } // language switch: no re-animation
  }

  /* ---------- render (called per language) ---------- */
  function render(lang) {
    if (lang === curLang) return;
    curLang = lang;
    renderLegend(lang);
    renderRoster(lang);
    renderTimeline(lang);
    buildPeople(PEOPLE, document.getElementById('peopleGrid'), lang);
    buildPeople(MODERN, document.getElementById('modernGrid'), lang);
    clearActive();
    handleReveals();
    firstBuild = false;
  }
  window.CHQ = { render: render };

  // hero reveals fire immediately
  document.querySelectorAll('.hero .reveal').forEach(r => r.classList.add('in'));
  // fallback initial render (i18n.js will re-render in the saved/preferred language)
  render('en');

  /* ---------- progress bar ---------- */
  const bar = document.getElementById('progressBar');
  if (bar) {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
      ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }
})();
