// Everything a non-programmer needs to change lives in CONFIG.
const CONFIG = {
  // Stripe Payment Link with "customer chooses what to pay" (needs an association/club account).
  // Empty = the button opens the bank transfer details instead.
  stripeLink: '',
  bank: {
    name: '',      // account holder, e.g. the club or a parent
    iban: '',
    bank: '',
    note: 'Tamás',
  },
  sponsorEmail: '',
};

// big = the velodrome podium in the tricolour jersey; wide/tall follow the photo's shape
// order matters: the 2x2 and the two tall ones fill the first two rows, the rest packs into rows of four
const PODIUMS = [[1, 'big'], [10, 'tall'], [11, 'tall'], [2], [6, 'wide'], [3], [4], [8, 'wide'], [5], [7], [9, 'wide'], [12]];

const T = {
  ro: {
    demo: 'Demo · texte și sume provizorii',
    cat: 'U15 · șosea · MTB · pistă',
    first: 'Tamás', last: 'Koréh',
    lede: 'Pedalează serios de cinci ani. În decembrie a concurat pe velodrom, în Bulgaria.',
    ask: 'Ajută-l să ajungă la următoarea linie de start.',
    season: 'Sezonul 2027', pick: 'Alege suma', other: 'Altă sumă',
    give: n => `Donează ${n} lei`,
    buys: { 50: 'o taxă de înscriere', 100: 'plinul până la cursă', 250: 'o pereche de cauciucuri', 500: 'un weekend de concurs' },
    buysOther: 'orice ajută',
    bank: 'Sau prin transfer bancar',
    holder: 'Titular', ibanL: 'IBAN', bankL: 'Banca', noteL: 'Mențiune',
    soon: 'Detaliile contului vin în curând.',
    sponsor: 'Firma ta poate sta aici, pe tricou',
    kindsTitle: 'Face de toate', road: 'Șosea', mtb: 'Munte · MTB', track: 'Pistă',
    podTitle: 'Din telefonul lui tata', podSub: 'Podiumuri, pe rând.',
    again: 'Fiecare cursă începe cu o taxă de înscriere și un drum.',
    againBtn: 'Pune-l la start',
    made: 'Pagină făcută de fratele lui.',
    credit: 'Fotografii de curse: Linia20 și familia.',
    heroAlt: 'Tamás înainte de start, cu casca pe cap',
    roadAlt: 'Pluton la o cursă de șosea', mtbAlt: 'Coborâre pe pământ la o cursă de MTB',
    trackAlt: 'Tamás în tricoul albastru, pe bicicleta de cursă', podAlt: 'Podium',
    spTitle: 'Firma ta, pe tricoul meu', spHi: 'Sunt Tamás.',
    spWhy: 'Tricoul meu stă pe podium, în poze și în clasamente.',
    spFree: 'Locul de pe piept încă e liber.', spType: 'Scrie numele firmei', spPh: 'Firma ta',
    spBtn: 'Vreau locul ăsta', spNote: 'Mâneca stângă e deja a fratelui meu.', spTaken: 'REZERVAT',
    spMail: 'Vreau locul de pe tricoul lui Tamás',
    title: 'Tamás Koréh · ciclism U15',
  },
  hu: {
    demo: 'Demó · a szövegek és összegek ideiglenesek',
    cat: 'U15 · országúti · MTB · pálya',
    first: 'Koréh', last: 'Tamás',
    lede: 'Öt éve teker komolyan. Decemberben Bulgáriában versenyzett, velodromon.',
    ask: 'Segíts, hogy eljusson a következő rajtvonalig.',
    season: '2027-es szezon', pick: 'Válassz összeget', other: 'Más összeg',
    give: n => `${n} lejt adományozok`,
    buys: { 50: 'egy nevezési díj', 100: 'a benzin a versenyig', 250: 'egy pár gumi', 500: 'egy versenyhétvége' },
    buysOther: 'minden segít',
    bank: 'Vagy banki átutalással',
    holder: 'Számlatulajdonos', ibanL: 'IBAN', bankL: 'Bank', noteL: 'Közlemény',
    soon: 'A számlaadatok hamarosan jönnek.',
    sponsor: 'A céged neve itt lehet, a mezen',
    kindsTitle: 'Mindenben indul', road: 'Országúti', mtb: 'Hegyi · MTB', track: 'Pálya',
    podTitle: 'Apa telefonjából', podSub: 'Dobogók, sorban.',
    again: 'Minden verseny egy nevezési díjjal és egy úttal kezdődik.',
    againBtn: 'Állítsd rajthoz',
    made: 'Az oldalt a bátyja készítette.',
    credit: 'Versenyfotók: Linia20 és a család.',
    heroAlt: 'Tamás a rajt előtt, sisakban',
    roadAlt: 'Mezőny egy országúti versenyen', mtbAlt: 'Lejtmenet egy MTB-versenyen',
    trackAlt: 'Tamás kék mezben, versenykerékpáron', podAlt: 'Dobogó',
    spTitle: 'A céged, a mezemen', spHi: 'Tamás vagyok.',
    spWhy: 'A mezem ott van a dobogón, a fotókon és az eredménylistákon.',
    spFree: 'A mellkasomon még szabad a hely.', spType: 'Írd be a céged nevét', spPh: 'A céged',
    spBtn: 'Ezt a helyet kérem', spNote: 'A bal ujj már a bátyámé.', spTaken: 'FOGLALT',
    spMail: 'Szeretném a helyet Tamás mezén',
    title: 'Koréh Tamás · kerékpár U15',
  },
  en: {
    demo: 'Demo · copy and amounts are placeholders',
    cat: 'U15 · road · MTB · track',
    first: 'Tamás', last: 'Koréh',
    lede: 'Five years of serious riding. In December he raced on the track, in Bulgaria.',
    ask: 'Help him reach the next start line.',
    season: '2027 season', pick: 'Choose an amount', other: 'Other amount',
    give: n => `Donate ${n} lei`,
    buys: { 50: 'one entry fee', 100: 'fuel to the race', 250: 'a pair of tyres', 500: 'a race weekend' },
    buysOther: 'every bit helps',
    bank: 'Or by bank transfer',
    holder: 'Account holder', ibanL: 'IBAN', bankL: 'Bank', noteL: 'Reference',
    soon: 'Account details coming soon.',
    sponsor: 'Your company could go here, on the jersey',
    kindsTitle: 'He rides everything', road: 'Road', mtb: 'Mountain · MTB', track: 'Track',
    podTitle: "From dad's phone", podSub: 'Podiums, one after another.',
    again: 'Every race starts with an entry fee and a drive.',
    againBtn: 'Put him on the start line',
    made: 'Page made by his brother.',
    credit: 'Race photos: Linia20 and the family.',
    heroAlt: 'Tamás before the start, helmet on',
    roadAlt: 'The bunch in a road race', mtbAlt: 'A dirt descent in an MTB race',
    trackAlt: 'Tamás in the blue jersey, on his race bike', podAlt: 'Podium',
    spTitle: 'Your company, on my jersey', spHi: "I'm Tamás.",
    spWhy: 'My jersey is on the podium, in the photos and in the results.',
    spFree: 'The spot on my chest is still free.', spType: 'Type your company name', spPh: 'Your company',
    spBtn: 'I want this spot', spNote: 'The left sleeve already belongs to my brother.', spTaken: 'TAKEN',
    spMail: "I want the spot on Tamás's jersey",
    title: 'Tamás Koréh · U15 cycling',
  },
};

const $ = s => document.querySelector(s);
const bib = $('#bib'), go = $('#go'), buys = $('#buys'), other = $('#other');
let lang = 'ro';

function store(k, v) { try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); } catch (e) { v = null; } return v; }

function amount() {
  const o = parseInt(other.value, 10);
  if (o > 0) return o;
  return parseInt(bib.querySelector('input[name=amt]:checked')?.value || '100', 10);
}

function paint() {
  const t = T[lang], n = amount();
  go.textContent = t.give(n);
  buys.textContent = '= ' + (t.buys[n] || t.buysOther);
}

function setLang(l) {
  if (!T[l]) l = 'ro';
  lang = l;
  const t = T[l];
  document.documentElement.lang = l;
  document.title = t.title;
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = t[el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { el.alt = t[el.dataset.i18nAlt]; });
  document.querySelectorAll('#wall img').forEach(el => { el.alt = t.podAlt; });
  document.querySelectorAll('.langs button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  $('#sp-name').placeholder = t.spPh;
  chest();
  bankData();
  paint();
  store('lang', l);
}

function bankData() {
  const t = T[lang], b = CONFIG.bank, dl = $('#bank-data');
  if (!b.iban) { dl.innerHTML = `<dd style="grid-column:1/-1">${t.soon}</dd>`; return; }
  const rows = [[t.holder, b.name], [t.ibanL, b.iban], [t.bankL, b.bank], [t.noteL, b.note]].filter(r => r[1]);
  dl.innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
}

function flap() {
  bib.classList.remove('flap');
  void bib.offsetWidth;
  bib.classList.add('flap');
}

bib.addEventListener('change', e => {
  if (e.target.name === 'amt') { other.value = ''; flap(); }
  paint();
});
other.addEventListener('input', paint);

bib.addEventListener('submit', e => {
  e.preventDefault();
  if (CONFIG.stripeLink) {
    const u = new URL(CONFIG.stripeLink);
    u.searchParams.set('client_reference_id', 'tamas');
    u.searchParams.set('__prefilled_amount', String(amount() * 100));
    location.href = u.toString();
  } else {
    const d = bib.querySelector('.bank');
    d.open = true;
    d.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
});

document.querySelectorAll('.langs button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

const sponsor = $('#sponsor-link');
if (CONFIG.sponsorEmail) sponsor.href = `mailto:${CONFIG.sponsorEmail}?subject=Sponsor%20Tam%C3%A1s`;

$('#wall').innerHTML = PODIUMS.map(([n, cls = '']) =>
  `<img class="${cls}" src="assets/img/pod${String(n).padStart(2, '0')}.webp" loading="lazy" alt="">`).join('');

// ---------- jersey: the sponsor sees their name on his chest ----------
const spName = $('#sp-name'), chestEl = $('#chest'), jersey = $('.jersey');
function chest() {
  const v = spName.value.trim().toUpperCase();
  const label = v || T[lang].spPh.toUpperCase();
  chestEl.textContent = label;
  // shrink the name until it fits across the chest (max 220 of the 400-unit jersey)
  chestEl.setAttribute('font-size', 46);
  const w = chestEl.getComputedTextLength ? chestEl.getComputedTextLength() : 0;
  if (w > 220) chestEl.setAttribute('font-size', (46 * 220 / w).toFixed(1));
  jersey.classList.toggle('filled', !!v);
  const mail = CONFIG.sponsorEmail;
  const subj = encodeURIComponent(T[lang].spMail + (v ? ` · ${spName.value.trim()}` : ''));
  $('#sp-go').href = mail ? `mailto:${mail}?subject=${subj}` : '#sponsori';
}
spName.addEventListener('input', () => {
  chest();
  chestEl.classList.remove('pop'); void chestEl.getBBox(); chestEl.classList.add('pop');
});

// ---------- quiet entrances ----------
document.querySelectorAll('.kinds h2, .k, .pod-head, .wall, .sp-text, .jersey, .again-line').forEach(el => el.classList.add('rv'));
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -12% 0px' }) : null;
document.querySelectorAll('.rv').forEach((el, i) => {
  if (el.classList.contains('k')) el.style.transitionDelay = (i % 3) * 0.08 + 's';
  io ? io.observe(el) : el.classList.add('in');
});

// ---------- loader: start clock runs until the photos are in ----------
(function loader() {
  const clock = $('#ld-clock'), bar = $('#ld-bar');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const still = new URLSearchParams(location.search).has('still');
  if (reduce || still) { document.body.classList.add('ready', 'no-loader'); document.querySelectorAll('.rv').forEach(el => el.classList.add('in')); return; }
  const t0 = performance.now();
  const imgs = [...document.querySelectorAll('.hero img')];
  let done = 0;
  const step = () => { bar.style.transform = `scaleX(${Math.min(1, (done + 1) / (imgs.length + 1))})`; };
  imgs.forEach(im => (im.complete ? (done++, step()) : im.addEventListener('load', () => { done++; step(); }, { once: true })));
  let raf;
  const tick = now => {
    const s = (now - t0) / 1000;
    clock.textContent = `00:${String(Math.floor(s)).padStart(2, '0')}.${Math.floor((s % 1) * 10)}`;
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  const finish = () => {
    bar.style.transform = 'scaleX(1)';
    setTimeout(() => { cancelAnimationFrame(raf); document.body.classList.add('ready'); document.body.classList.remove('loading'); }, 250);
  };
  const minTime = new Promise(r => setTimeout(r, 1100));
  const loaded = new Promise(r => (document.readyState === 'complete' ? r() : addEventListener('load', r, { once: true })));
  const cap = new Promise(r => setTimeout(r, 4000));
  Promise.race([Promise.all([minTime, loaded]), cap]).then(finish);
})();

const q = new URLSearchParams(location.search).get('lang');
setLang(q || store('lang') || 'ro');
