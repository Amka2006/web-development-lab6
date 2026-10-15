// ===== Цомгийн өгөгдөл (зураг: images/<key>.jpg) =====
// map: Google Maps-д хайх нэр. Тоо, хэмжээг эх сурвалжтай нь тулгаж шалгаарай.
const places = [
  { key: 'khuvsgul', name: 'Хөвсгөл нуур', region: 'Хойд', aimag: 'Хөвсгөл аймаг', art: 'lake',
    map: 'Lake Khuvsgul, Mongolia', dist: 'Мөрөн хотоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн гүн цэнгэг устай нуур.',
    facts: ['Урт нь ~136 км, хамгийн гүн нь ~262 м', 'Монголын цэнгэг усны ихэнх хувийг агуулдаг', 'Хойд талд цаатан иргэд амьдардаг'] },
  { key: 'khongor', name: 'Хонгорын элс', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'gobi',
    map: 'Khongoryn Els, Mongolia', dist: 'Улаанбаатараас ~800 км', season: '5–9-р сар',
    text: 'Говийн хамгийн том элсэн манхан, «Дуут манхан».',
    facts: ['Хэдэн зуун метр өндөр, ~180 км үргэлжилнэ', 'Салхитай үед элс «дуугардаг»', 'Хажуугаар Хонгор гол урсдаг'] },
  { key: 'suvraga', name: 'Цагаан сүврага', region: 'Өмнөд', aimag: 'Дундговь аймаг', art: 'steppe',
    map: 'Tsagaan Suvarga, Mongolia', dist: 'Улаанбаатараас ~450 км', season: '5–10-р сар',
    text: 'Олон өнгийн ордон шиг харагддаг эртний хадан хясаа.',
    facts: ['Урт нь ~400 м орчим, олон сая жилийн настай', 'Далайн ёроол байсан үеийн тунамал давхарга', 'Нар жаргах үед өнгө нь өөрчлөгддөг'] },
  { key: 'bayanzag', name: 'Баянзаг (Бамбат хад)', region: 'Өмнөд', aimag: 'Өмнөговь аймаг', art: 'bayan',
    map: 'Bayanzag Flaming Cliffs, Mongolia', dist: 'Даланзадгадаас ~100 км', season: '5–9-р сар',
    text: 'Динозаврын өндөг олдсон алдарт газар.',
    facts: ['1920-иод онд Америкийн экспедиц дэлхийд анх нээсэн', 'Улаан хадан хясаа нарны гэрэлд галтай харагддаг', 'Саксаулын ой байдаг'] },
  { key: 'orkhon', name: 'Орхоны хүрхрээ', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khangai',
    map: 'Orkhon Waterfall, Mongolia', dist: 'Улаанбаатараас ~600 км', season: '6–9-р сар',
    text: 'Монголын хамгийн сайхан хүрхрээ, UNESCO-гийн өвийн бүс.',
    facts: ['Өндөр нь ~20 м орчим', 'Орхоны хөндий нь 2004 онд UNESCO-д бүртгэгдсэн', 'Галт уулын гаралтай хавцалд оршино'] },
  { key: 'erdenezuu', name: 'Эрдэнэ Зуу хийд', region: 'Төв', aimag: 'Өвөрхангай аймаг', art: 'khentii',
    map: 'Erdene Zuu Monastery, Mongolia', dist: 'Улаанбаатараас ~370 км', season: '5–10-р сар',
    text: 'Монголын хамгийн эртний Буддын шашны хийдүүдийн нэг.',
    facts: ['1586 онд байгуулагдсан', 'Эртний Хархорум хотын туурь дэргэд оршино', '108 суваргатай хэрмээр хүрээлэгдсэн'] },
  { key: 'terkh', name: 'Тэрхийн цагаан нуур', region: 'Төв', aimag: 'Архангай аймаг', art: 'terkh',
    map: 'Terkhiin Tsagaan Lake, Mongolia', dist: 'Улаанбаатараас ~650 км', season: '6–9-р сар',
    text: 'Галт уулын нуралтаар үүссэн, шувууны олон зүйлтэй нуур.',
    facts: ['Тэрх голыг лаав хаасны улмаас үүссэн', 'Ойролцоогоор 16 км урт', 'Хорго галт уул ойрхон'] },
  { key: 'altai', name: 'Алтай Таван Богд', region: 'Баруун', aimag: 'Баян-Өлгий аймаг', art: 'altai',
    map: 'Altai Tavan Bogd National Park, Mongolia', dist: 'Өлгий хүртэл нисэх онгоцоор', season: '6–9-р сар',
    text: 'Монголын хамгийн өндөр оргил бүхий цасан нуруу.',
    facts: ['Хүйтэн оргил ~4,374 м', 'Поташины мөсөн гол ойрхон', 'Казах бүргэдчид уламжлалаа хадгалж байна'] },
  { key: 'uvs', name: 'Увс нуур', region: 'Баруун', aimag: 'Увс аймаг', art: 'lake',
    map: 'Uvs Lake, Mongolia', dist: 'Улаангомоос ~100 км', season: '6–9-р сар',
    text: 'Монголын хамгийн том нуур, давстай. UNESCO-гийн өвийн сав газар.',
    facts: ['Талбай нь ~3,350 км² орчим', '2003 онд UNESCO-д бүртгэгдсэн', 'Нүүдлийн шувууд амардаг'] },
  { key: 'hustai', name: 'Хустайн нуруу', region: 'Төв', aimag: 'Төв аймаг', art: 'khangai',
    map: 'Hustai National Park, Mongolia', dist: 'Улаанбаатараас ~100 км', season: '5–9-р сар',
    text: 'Тахь (Пржевальскийн морь) эргэн ирсэн байгалийн цогцолборт газар.',
    facts: ['1990-ээд онд тахийг дахин тавьсан', 'Ховор амьтан, шувууны олон зүйл', 'Нийслэлээс хамгийн ойр байгалийн цогцолбор'] },
  { key: 'burkhan', name: 'Бурхан Халдун', region: 'Зүүн', aimag: 'Хэнтий аймаг', art: 'khentii',
    map: 'Burkhan Khaldun, Mongolia', dist: 'Улаанбаатараас ~250 км', season: '6–9-р сар',
    text: 'Чингис хааны төрсөн нутаг, ариун уул.',
    facts: ['2015 онд UNESCO-д бүртгэгдсэн', 'Онон, Хэрлэн, Туул голын эхтэй холбоотой', 'Монголчуудын онцгой хүндэтгэдэг ариун газар'] },
  { key: 'terelj', name: 'Тэрэлж', region: 'Төв', aimag: 'Төв аймаг', art: 'steppe',
    map: 'Gorkhi-Terelj National Park, Mongolia', dist: 'Улаанбаатараас ~70 км', season: '5–10-р сар',
    text: 'Гэрийн жуулчны бааз, Мэлхий хад бүхий дархан цаазат газар.',
    facts: ['Горхи-Тэрэлжийн байгалийн цогцолбор', 'Мэлхий хад, Аривал хийд', 'Нийслэлээс 1–2 цагийн зайтай'] }
];

const grid = document.getElementById('galleryGrid');

// Google Maps холбоос (хайлтын нэрээр)
const mapUrl = (q) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);

// ===== Картуудыг үүсгэх (--i нь stagger-ийн дугаар) =====
places.forEach((p, i) => {
  const img = `images/${p.key}.jpg`;
  grid.insertAdjacentHTML('beforeend', `
    <article class="card in" tabindex="0" data-region="${p.region}" style="--i:${i}" aria-label="${p.name}">
      <div class="card-inner">

        <div class="face front art art-${p.art}">
          <img src="${img}" alt="${p.name}" loading="lazy" onerror="this.remove()">
          <span class="badge">${p.region}</span>
          <div class="cap"><h3>${p.name}</h3><p>${p.aimag}</p></div>
        </div>

        <div class="face back" style="--img:url('${img}')">
          <div class="back-body">
            <h3>${p.name}</h3>
            <p class="where">${p.region} · ${p.aimag}</p>
            <p class="desc">${p.text}</p>
            <ul class="facts">${p.facts.map((f) => `<li>${f}</li>`).join('')}</ul>
            <ul class="pills"><li>${p.dist}</li><li>${p.season}</li></ul>
            <button class="map-link" type="button" data-q="${p.map}" data-name="${p.name}">
              <span class="pin" aria-hidden="true"></span>Google Maps дээр харах
            </button>
          </div>
        </div>

      </div>
    </article>`);
});

const cards = [...grid.querySelectorAll('.card')];

// ===== Товшилт: газрын зураг нээх / утсанд карт эргүүлэх =====
grid.addEventListener('click', (e) => {
  const mapBtn = e.target.closest('.map-link');
  if (mapBtn) { openMap(mapBtn.dataset.q, mapBtn.dataset.name); return; }
  if (e.target.closest('a')) return;
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
      card.classList.remove('flipped', 'in');
      if (show) {
        card.style.setProperty('--i', n++);   // stagger-ийг дахин тооцно
        void card.offsetWidth;                // animation-г дахин эхлүүлнэ
        card.classList.add('in');
      }
    });
  });
});

// ===== Газрын зургийг цонхонд нээх =====
const mapDialog = document.getElementById('mapDialog');
const mapFrame = document.getElementById('mapFrame');

function openMap(q, name) {
  document.getElementById('mapTitle').textContent = name;
  document.getElementById('mapOpen').href = mapUrl(q);
  mapFrame.src = 'https://maps.google.com/maps?q=' + encodeURIComponent(q) + '&z=9&hl=mn&output=embed';
  mapDialog.showModal();
}

function closeMap() {
  mapDialog.close();
  mapFrame.src = 'about:blank';
}

document.getElementById('mapClose').addEventListener('click', closeMap);
mapDialog.addEventListener('click', (e) => { if (e.target === mapDialog) closeMap(); });
mapDialog.addEventListener('cancel', () => { mapFrame.src = 'about:blank'; });

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