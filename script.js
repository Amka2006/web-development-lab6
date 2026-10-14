// ===== Цомгийн өгөгдөл (зураг: images/<key>.jpg) =====
// Тоо, хэмжээг эх сурвалжтай нь тулгаж шалгаарай.
const places = [
  { key: 'khuvsgul', name: 'Хөвсгөл нуур', region: 'Хойд', aimag: 'Хөвсгөл аймаг', art: 'lake',
    dist: 'Мөрөн хотоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн гүн цэнгэг устай нуур.',
    facts: ['Урт нь ~136 км, хамгийн гүн нь ~262 м', 'Монголын цэнгэг усны ихэнх хувийг агуулдаг', 'Хойд талд цаатан (буга маллагч) иргэд амьдардаг'],
    todo: ['Морин аялал', 'Завиар зугаалах', 'Өвөл мөсөн дээгүүр явах'] },
  { key: 'khongor', name: 'Хонгорын элс', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'gobi',
    dist: 'Улаанбаатараас ~800 км', season: '5–9-р сар',
    text: 'Говийн хамгийн том элсэн манхан, «Дуут манхан».',
    facts: ['Хэдэн зуун метр өндөр, ~180 км үргэлжилнэ', 'Салхитай үед элс «дуугардаг»', 'Хажуугаар Хонгор гол урсдаг'],
    todo: ['Тэмээгээр аялах', 'Манхан өөд авирах', 'Шөнийн одыг ажиглах'] },
  { key: 'suvraga', name: 'Цагаан сүврага', region: 'Өмнөд', aimag: 'Дундговь аймаг', art: 'steppe',
    dist: 'Улаанбаатараас ~450 км', season: '5–10-р сар',
    text: 'Олон өнгийн ордон шиг харагддаг эртний хадан хясаа.',
    facts: ['Урт нь ~400 м орчим, олон сая жилийн настай', 'Далайн ёроол байсан үеийн тунамал давхарга', 'Нар жаргах үед өнгө нь өөрчлөгддөг'],
    todo: ['Нар жаргахыг харах', 'Хадны ёроолоор алхах', 'Гэрт буудаллах'] },
  { key: 'bayanzag', name: 'Баянзаг (Бамбат хад)', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'bayan',
    dist: 'Даланзадгадаас ~100 км', season: '5–9-р сар',
    text: 'Динозаврын өндөг олдсон алдарт газар.',
    facts: ['1920-иод онд Америкийн экспедиц дэлхийд анх нээсэн', 'Улаан хадан хясаа нарны гэрэлд галтай харагддаг', 'Саксаулын ой байдаг'],
    todo: ['Хадан хөндийгөөр алхах', 'Саксаулын ойд зугаалах', 'Нар жаргах үеийн зураг авах'] },
  { key: 'orkhon', name: 'Орхоны хүрхрээ', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khangai',
    dist: 'Улаанбаатараас ~600 км', season: '6–9-р сар',
    text: 'Монголын хамгийн сайхан хүрхрээ, UNESCO-гийн өвийн бүс.',
    facts: ['Өндөр нь ~20 м орчим', 'Орхоны хөндий нь 2004 онд UNESCO-д бүртгэгдсэн', 'Галт уулын гаралтай хавцалд оршино'],
    todo: ['Хавцлын эрэг дагуу явган аялах', 'Морь унах', 'Нүүдэлчин айлд зочлох'] },
  { key: 'erdenezuu', name: 'Эрдэнэ Зуу хийд', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khentii',
    dist: 'Улаанбаатараас ~370 км', season: '5–10-р сар',
    text: 'Монголын хамгийн эртний Буддын шашны хийдүүдийн нэг.',
    facts: ['1586 онд байгуулагдсан', 'Эртний Хархорум хотын туурь дэргэд оршино', '108 суваргатай хэрмээр хүрээлэгдсэн'],
    todo: ['Хийдийн музей үзэх', 'Хархорины музейд очих', 'Орхоны хөндийгөөр аялах'] },
  { key: 'terkh', name: 'Тэрхийн цагаан нуур', region: 'Төв', aimag: 'Архангай аймаг', art: 'terkh',
    dist: 'Улаанбаатараас ~650 км', season: '6–9-р сар',
    text: 'Галт уулын нуралтаар үүссэн, шувууны олон зүйлтэй нуур.',
    facts: ['Тэрх голыг лаав хаасны улмаас үүссэн', 'Ойролцоогоор 16 км урт', 'Хорго галт уул ойрхон'],
    todo: ['Нуурын эрэгт зугаалах', 'Хорго уул өөд авирах', 'Загасчлах'] },
  { key: 'altai', name: 'Алтай Таван Богд', region: 'Баруун', aimag: 'Баян-Өлгий аймаг', art: 'altai',
    dist: 'Өлгий хүртэл нисэх онгоцоор', season: '6–9-р сар',
    text: 'Монголын хамгийн өндөр оргил бүхий цасан нуруу.',
    facts: ['Хүйтэн оргил ~4,374 м', 'Поташины мөсөн гол ойрхон', 'Казах бүргэдчид уламжлалаа хадгалж байна'],
    todo: ['Бүргэдчний хөтөлбөр үзэх', 'Мөсөн голоор алхах', 'Казах гэрт зочлох'] },
  { key: 'uvs', name: 'Увс нуур', region: 'Баруун', aimag: 'Увс аймаг', art: 'lake',
    dist: 'Улаангомоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн том нуур, давстай. UNESCO-гийн өвийн сав газар.',
    facts: ['Талбай нь ~3,350 км² орчим', '2003 онд UNESCO-д бүртгэгдсэн', 'Нүүдлийн шувууд амардаг'],
    todo: ['Шувуу ажиглах', 'Элсэн цөлөөр явах', 'Улаангомын музей үзэх'] },
  { key: 'hustai', name: 'Хустайн нуруу', region: 'Төв', aimag: 'Төв аймаг', art: 'khangai',
    dist: 'Улаанбаатараас ~100 км', season: '5–9-р сар',
    text: 'Тахь (Пржевальскийн морь) эргэн ирсэн байгалийн цогцолборт газар.',
    facts: ['1990-ээд онд тахийг дахин тавьсан', 'Ховор амьтан, шувууны олон зүйл', 'Нийслэлээс хамгийн ойр байгалийн цогцолбор'],
    todo: ['Тахь ажиглах', 'Явган аялал', 'Гэрт буудаллах'] },
  { key: 'burkhan', name: 'Бурхан Халдун', region: 'Зүүн', aimag: 'Хэнтий аймаг', art: 'khentii',
    dist: 'Улаанбаатараас ~250 км', season: '6–9-р сар',
    text: 'Чингис хааны төрсөн нутаг, ариун уул.',
    facts: ['2015 онд UNESCO-д бүртгэгдсэн', 'Онон, Хэрлэн, Туул голын эхтэй холбоотой', 'Монголчуудын онцгой хүндэтгэдэг ариун газар'],
    todo: ['Тайгын мөрөөр явган аялах', 'Онон голоор сэлэх', 'Түүхэн дурсгал үзэх'] },
  { key: 'terelj', name: 'Тэрэлж', region: 'Төв', aimag: 'Төв аймаг', art: 'steppe',
    dist: 'Улаанбаатараас ~70 км', season: '5–10-р сар',
    text: 'Гэрийн жуулчны бааз, Мэлхий хад бүхий дархан цаазат газар.',
    facts: ['Горхи-Тэрэлжийн байгалийн цогцолбор', 'Мэлхий хад, Аривал хийд', 'Нийслэлээс 1–2 цагийн зайтай'],
    todo: ['Морь унах', 'Хад өөд авирах', 'Гэрт буудаллах'] }
];

const grid = document.getElementById('galleryGrid');

// ===== Картуудыг үүсгэх (--i нь stagger-ийн дугаар) =====
places.forEach((p, i) => {
  const img = `images/${p.key}.jpg`;
  grid.insertAdjacentHTML('beforeend', `
    <article class="card" tabindex="0" data-region="${p.region}" data-index="${i}" style="--i:${i}" aria-label="${p.name}">
      <div class="card-inner">
        <div class="face front art art-${p.art}">
          <img src="${img}" alt="${p.name}" loading="lazy" onerror="this.remove()">
          <span class="badge">${p.region}</span>
          <div class="cap"><h3>${p.name}</h3><p>${p.aimag}</p></div>
        </div>
        <div class="face back" style="--img:url(${img})">
          <div class="back-body">
            <h3>${p.name}</h3>
            <p>${p.text}</p>
            <ul class="pills"><li>📍 ${p.dist}</li><li>🗓 ${p.season}</li></ul>
            <button class="btn zoom" type="button">Дэлгэрэнгүй</button>
          </div>
        </div>
      </div>
    </article>`);
});

const cards = [...grid.querySelectorAll('.card')];

// ===== Scroll хийхэд stagger-ээр гарч ирнэ =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); observer.unobserve(en.target); }
  });
}, { threshold: 0.15 });
cards.forEach((c) => observer.observe(c));

// ===== Гар утас: товшиход эргэнэ =====
grid.addEventListener('click', (e) => {
  if (e.target.closest('.zoom')) return;
  const card = e.target.closest('.card');
  if (card) card.classList.toggle('flipped');
});

grid.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    e.target.classList.toggle('flipped');
  }
});

// ===== Бүс нутгаар шүүх =====
const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.setAttribute('aria-pressed', c === chip));
    const filter = chip.dataset.filter;
    let n = 0;
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.region === filter;
      card.hidden = !show;
      card.classList.remove('flipped');
      if (show) {
        card.style.setProperty('--i', n++);   // stagger-ийг дахин тооцно
        card.classList.remove('in');
        void card.offsetWidth;                // animation-г дахин эхлүүлнэ
        card.classList.add('in');
      }
    });
  });
});

// ===== Дэлгэрэнгүй цонх =====
const box = document.getElementById('lightbox');
const lbBody = document.getElementById('lbBody');

grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.zoom');
  if (!btn) return;
  const p = places[btn.closest('.card').dataset.index];
  lbBody.innerHTML = `
    <div class="lb">
      <div class="art lb-art art-${p.art}">
        <img src="images/${p.key}.jpg" alt="${p.name}" onerror="this.remove()">
      </div>
      <div class="lb-info">
        <p class="eyebrow">${p.region} · ${p.aimag}</p>
        <h3 id="lbTitle">${p.name}</h3>
        <p>${p.text}</p>
        <dl class="lb-meta">
          <div><dt>Зай</dt><dd>${p.dist}</dd></div>
          <div><dt>Аялах үе</dt><dd>${p.season}</dd></div>
        </dl>
        <h4>Онцлох зүйл</h4>
        <ul>${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
        <h4>Хийх зүйл</h4>
        <ul class="pills">${p.todo.map((t) => `<li>${t}</li>`).join('')}</ul>
      </div>
    </div>`;
  box.showModal();
});

box.addEventListener('click', (e) => { if (e.target === box) box.close(); }); // гадна талд товшиход хаана

// ===== Харанхуй / гэрэл горим =====
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
themeBtn.setAttribute('aria-pressed', root.dataset.theme === 'dark');
themeBtn.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  root.dataset.theme = dark ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
  themeBtn.setAttribute('aria-pressed', dark);
});

// ===== Гар утасны цэс =====
const menuBtn = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
});