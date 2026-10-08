export const SITE_NAME = "일리아스이야기";
export const SITE_NAME_EN = "Iliad Stories";
export const SITE_TAGLINE = "일리아스는 트로이 전쟁 전체가 아닙니다";
export const SITE_SUB =
  "10년째 해의 약 51일, 아킬레우스의 분노를 짧은 한국어로 읽습니다. 파리스의 심판, 헬레네를 데려온 일, 발뒤꿈치, 목마는 이 시가 들려주지 않습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iliad-stories.vercel.app";

export const MYTH_URL = "https://nadoo-myth.vercel.app";
export const MYTH_NAME = "나두신화";

export const GREECE_URL = "https://greece-stories.vercel.app";
export const GREECE_NAME = "그리스이야기";

export const ROME_URL = "https://rome-stories.vercel.app";
export const ROME_NAME = "로마이야기";

export const EGYPT_URL = "https://egypt-stories.vercel.app";
export const EGYPT_NAME = "이집트이야기";

export const PERSIA_URL = "https://persia-stories.vercel.app";
export const PERSIA_NAME = "페르시아이야기";

export const CHOSEN_URL = "https://the-chosen-korean.vercel.app";
export const CHOSEN_NAME = "더 초즌 · 성경";

export const PHILOSOPHY_URL = "https://philosophy-stories.vercel.app";
export const PHILOSOPHY_NAME = "철학이야기";

export const KOREA_URL = "https://korea-stories.vercel.app";
export const KOREA_NAME = "대한민국이야기";

export const TIMELINE_URL = "https://nadoo-timeline.vercel.app";
export const TIMELINE_NAME = "나두연표";

export const HUB_URL = "https://tinalinkeom.vercel.app";
export const HUB_NAME = "나두 허브";

export const SISTER_LABEL = "나두 역사·신화";

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

/** 다른 사이트가 이미 열어 둔 주소. 철학이야기의 호메로스 글은 나란히 붙는 중입니다. */
export const OUT = {
  mythTrojanWar: `${MYTH_URL}/stories/trojan-war`,
  mythJudgment: `${MYTH_URL}/stories/judgment-of-paris`,
  mythHorse: `${MYTH_URL}/stories/trojan-horse`,
  mythOdyssey: `${MYTH_URL}/stories/odyssey`,
  mythAeneid: `${MYTH_URL}/stories/aeneid`,
  mythFamily: `${MYTH_URL}/family-tree`,
  mythMediaTroy: `${MYTH_URL}/in-media#troy-2004`,
  mythAchilleus: `${MYTH_URL}/gods/achilleus`,
  mythHektor: `${MYTH_URL}/gods/hektor`,
  mythAgamemnon: `${MYTH_URL}/gods/agamemnon`,
  mythHelene: `${MYTH_URL}/gods/helene`,
  mythParis: `${MYTH_URL}/gods/paris`,
  mythAineias: `${MYTH_URL}/gods/aineias`,
  mythThetis: `${MYTH_URL}/gods/thetis`,
  mythHera: `${MYTH_URL}/gods/hera`,
  mythAthena: `${MYTH_URL}/gods/athena`,
  mythPoseidon: `${MYTH_URL}/gods/poseidon`,
  mythApollo: `${MYTH_URL}/gods/apollo`,
  mythAphrodite: `${MYTH_URL}/gods/aphrodite`,
  mythAres: `${MYTH_URL}/gods/ares`,
  mythZeus: `${MYTH_URL}/gods/zeus`,
  greeceHomer: `${GREECE_URL}/people/homer`,
  greeceMycenaean: `${GREECE_URL}/origins#mycenaean`,
  greeceTroyFilm: `${GREECE_URL}/movies#troy`,
  greeceOdysseyFilm: `${GREECE_URL}/movies#odyssey-2026`,
  greeceTree: `${GREECE_URL}/family-tree?tree=trojan`,
  greeceAchilles: `${GREECE_URL}/family-tree?tree=trojan&focus=achilles`,
  greeceHector: `${GREECE_URL}/family-tree?tree=trojan&focus=hector`,
  greeceHelen: `${GREECE_URL}/family-tree?tree=trojan&focus=helen`,
  greeceParis: `${GREECE_URL}/family-tree?tree=trojan&focus=paris`,
  greeceAgamemnon: `${GREECE_URL}/family-tree?tree=trojan&focus=agamemnon`,
  romeAeneas: `${ROME_URL}/family-tree?tree=legend&focus=aeneas`,
  romeRomulus: `${ROME_URL}/rulers/romulus`,
  timelineWar: `${TIMELINE_URL}/events/trojan-war`,
  timelineHomer: `${TIMELINE_URL}/events/homeric-epics`,
  timelineMycenaean: `${TIMELINE_URL}/events/mycenaean-citadels`,
  philosophyPlato: `${PHILOSOPHY_URL}/people/plato`,
  philosophyHomer: `${PHILOSOPHY_URL}/people/homer`,
} as const;

export const SISTERS = [
  {
    href: MYTH_URL,
    name: MYTH_NAME,
    en: "MYTH",
    button: "나두신화에서 신 읽기",
    note: "신의 편, 파리스의 심판, 목마, 오디세이아.",
    body: "헤라와 아폴론이 누구 편인지, 파리스의 심판과 목마는 신화 사전에 있습니다. 일리아스 본문의 51일은 이 사이트에 둡니다.",
  },
  {
    href: GREECE_URL,
    name: GREECE_NAME,
    en: "GREECE",
    button: GREECE_NAME,
    note: "미케네 궁전과 트로이 영웅의 가계.",
    body: "시의 배경이 된 청동기 궁전, 그리고 트로이 영웅 탭이 있는 가족관계도. 역사와 전승을 나누는 글입니다.",
  },
  {
    href: ROME_URL,
    name: ROME_NAME,
    en: "ROME",
    button: ROME_NAME,
    note: "아이네이아스에서 로물루스로 이어지는 건국 전승.",
    body: "일리아스 20권은 아이네이아스가 살아남는다고 말합니다. 이탈리아와 로마의 족보는 로마이야기의 전승 가계에 있습니다.",
  },
  {
    href: EGYPT_URL,
    name: EGYPT_NAME,
    en: "EGYPT",
    button: EGYPT_NAME,
    note: "파라오와 나일강, 선왕조에서 클레오파트라.",
    body: "같은 집안의 역사 글입니다. 트로이 전승의 세기와 이집트의 청동기는 나두연표에서 나란히 봅니다.",
  },
  {
    href: PERSIA_URL,
    name: PERSIA_NAME,
    en: "PERSIA",
    button: PERSIA_NAME,
    note: "아케메네스에서 파르티아·사산까지.",
    body: "페르시아 왕의 역사는 별도 사이트에 있습니다. 일리아스의 트로이와 아케메네스 궁전은 다른 시대입니다.",
  },
  {
    href: CHOSEN_URL,
    name: CHOSEN_NAME,
    en: "CHOSEN",
    button: CHOSEN_NAME,
    note: "드라마 『더 초즌』을 성경 구절과 나눠 읽는 가이드.",
    body: "나두의 다른 이야기입니다. 성경에 있는 장면과 드라마가 더한 장면을 구분해 적습니다.",
  },
  {
    href: PHILOSOPHY_URL,
    name: PHILOSOPHY_NAME,
    en: "PHILOSOPHY",
    button: PHILOSOPHY_NAME,
    note: "플라톤은 호메로스의 신을 문제 삼습니다.",
    body: "호메로스는 철학자가 아닙니다. 그 시를 나중에 어떻게 읽었는지는 철학이야기의 플라톤과 호메로스 글로 이어집니다.",
  },
  {
    href: KOREA_URL,
    name: KOREA_NAME,
    en: "KOREA",
    button: KOREA_NAME,
    note: "백제·신라·가야, 고려와 조선을 남쪽 고을로.",
    body: "같은 나두의 한국사입니다. 서사시의 세기와 한반도의 같은 무렵은 나두연표에서 비교합니다.",
  },
  {
    href: TIMELINE_URL,
    name: TIMELINE_NAME,
    en: "TIMELINE",
    button: TIMELINE_NAME,
    note: "트로이 전쟁 전승 연대와 서사시가 정리된 세기.",
    body: "기원전 1184년경은 후대의 계산입니다. 시가 글로 모인 기원전 8세기와, 이야기 속 전쟁의 전승 연대를 나눠 둡니다.",
  },
  {
    href: HUB_URL,
    name: HUB_NAME,
    en: "HUB",
    button: HUB_NAME,
    note: "나두 사이트를 모아 둔 허브.",
    body: "역사·신화·철학 사이트의 문간입니다. 여기서 다른 방으로 건너갑니다.",
  },
] as const;

export const OTHER_TREES = [
  { href: `${ROME_URL}/family-tree`, name: ROME_NAME, note: "건국 전승의 가계" },
  { href: `${GREECE_URL}/family-tree`, name: GREECE_NAME, note: "트로이 영웅 탭" },
  { href: `${EGYPT_URL}/family-tree`, name: EGYPT_NAME, note: "파라오의 가계" },
  { href: `${PERSIA_URL}/family-tree`, name: PERSIA_NAME, note: "왕의 가계" },
  { href: `${KOREA_URL}/family-tree`, name: KOREA_NAME, note: "왕실의 가계" },
  { href: `${MYTH_URL}/family-tree`, name: MYTH_NAME, note: "신들의 가계" },
  { href: `${CHOSEN_URL}/family-tree`, name: CHOSEN_NAME, note: "드라마와 성경의 가계" },
] as const;

export const OTHER_FILMS = [
  { href: `${ROME_URL}/movies`, name: ROME_NAME, note: "영화" },
  { href: `${GREECE_URL}/movies`, name: GREECE_NAME, note: "영화" },
  { href: `${EGYPT_URL}/movies`, name: EGYPT_NAME, note: "영화" },
  { href: `${PERSIA_URL}/movies`, name: PERSIA_NAME, note: "영화" },
  { href: `${KOREA_URL}/films`, name: KOREA_NAME, note: "영화" },
  { href: `${PHILOSOPHY_URL}/films`, name: PHILOSOPHY_NAME, note: "영화" },
  { href: `${MYTH_URL}/in-media`, name: MYTH_NAME, note: "작품 속 신화" },
  { href: `${CHOSEN_URL}/together`, name: CHOSEN_NAME, note: "같이 보기" },
] as const;

export const NAV = [
  { href: "/timeline", label: "51일" },
  { href: "/books", label: "24권" },
  { href: "/heroes", label: "인물" },
  { href: "/scope", label: "나오는 것" },
  { href: "/scenes", label: "명장면" },
  { href: "/why", label: "왜 51일" },
  { href: "/family-tree", label: "가족관계도" },
  { href: "/movies", label: "영화" },
  { href: "/homer", label: "호메로스" },
  { href: "/sources", label: "출처" },
] as const;

export const HOME_SECTIONS = [
  {
    href: "/timeline",
    en: "51 Days",
    title: "51일 타임라인",
    desc: "역병과 다툼, 아킬레우스의 철수, 헥토르의 성공, 사절단, 파트로클로스의 죽음, 귀환, 프리아모스의 밤, 장례.",
  },
  {
    href: "/books",
    en: "24 Books",
    title: "24권 한눈에",
    desc: "권마다 세 줄. 몇 권인지 짚고, 그 권의 글로 들어갑니다.",
  },
  {
    href: "/heroes",
    en: "People",
    title: "인물",
    desc: "그리스군, 트로이군, 그리고 누구 편에 선 신. 신들의 가계는 나두신화로 넘깁니다.",
  },
  {
    href: "/scope",
    en: "In and Out",
    title: "나오는 것 · 안 나오는 것",
    desc: "다툼과 헥토르의 장례는 이 시에 있습니다. 심판, 납치, 발목, 목마, 오디세이아, 아이네이스는 다른 작품입니다.",
  },
  {
    href: "/scenes",
    en: "Scenes",
    title: "명장면·명문장",
    desc: "첫 줄, 헥토르와 안드로마케, 아킬레우스의 방패, 프리아모스와 아킬레우스. 한국어는 이 사이트의 풀이입니다.",
  },
  {
    href: "/why",
    en: "Why 51 Days",
    title: "왜 51일만?",
    desc: "시의 첫 단어는 전쟁이 아니라 분노입니다. 명예와 죽음, 그리고 한 부분을 고른 이유.",
  },
  {
    href: "/family-tree",
    en: "Family Tree",
    title: "가족관계도",
    desc: "아트레우스 집안, 펠레우스와 테티스, 프리아모스의 집, 안키세스와 아프로디테의 아이네이아스.",
  },
  {
    href: "/movies",
    en: "Films",
    title: "영화·드라마",
    desc: "트로이(2004)를 비롯한 화면 각색. 일리아스에 없는 죽음을 영화가 넣었는지도 적습니다.",
  },
  {
    href: "/homer",
    en: "Homer",
    title: "호메로스는 누구?",
    desc: "기원전 8세기의 노래, 입으로 전하던 전통, 한 사람인지 아직 열리는 질문. 철학이야기와 잇습니다.",
  },
] as const;
