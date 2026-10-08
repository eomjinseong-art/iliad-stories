/**
 * 가족관계도. 칸의 col·y와 parent/spouse 선만 바꾸면 그림이 다시 놓입니다.
 * 신의 넓은 가계는 나두신화 /family-tree 에 있습니다.
 */

export const TREE_IDS = ["atreus", "peleus", "priam", "aeneas"] as const;
export type TreeId = (typeof TREE_IDS)[number];
export type LinkKind = "parent" | "spouse" | "variant-parent";

export type TreeSeed = {
  id: string;
  ko: string;
  roman: string;
  greek?: string;
  band: string;
  col: number;
  y: number;
  slug?: string;
  href?: string;
  linkLabel?: string;
  tagline?: string;
  years?: string;
  guestTag?: string;
  summary: string;
  note?: string;
  legend?: boolean;
  aliases?: string[];
};

export type TreeLink = { from: string; to: string; kind: LinkKind };

export type BandMeta = {
  id: string;
  ko: string;
  en: string;
  hint: string;
  color: string;
  soft: string;
};

export type LayoutNode = TreeSeed & {
  x: number;
  y: number;
  w: number;
  h: number;
  sub: string;
  caption: string;
  href?: string;
  keys: string[];
};

export type LayoutEdge = {
  id: string;
  d: string;
  d2?: string;
  kind: LinkKind;
  from: string;
  to: string;
  local: boolean;
  quiet: boolean;
};

export type LayoutBand = BandMeta & {
  top: number;
  height: number;
  nodeIds: string[];
};

export type FamilyTree = {
  id: TreeId;
  ko: string;
  en: string;
  legend: boolean;
  blurb: string;
  width: number;
  height: number;
  nodes: LayoutNode[];
  edges: LayoutEdge[];
  bands: LayoutBand[];
  byId: Map<string, LayoutNode>;
  links: TreeLink[];
};

const COL = 150;
const NODE_W = 128;
const NODE_H = 96;
const PAD = 32;

export const LINE_LEGEND = [
  { id: "parent", label: "부모 → 자식", color: "#a6843d", dash: false, double: false },
  { id: "spouse", label: "배우자", color: "#8c2f2b", dash: false, double: true },
  { id: "variant", label: "전승으로 갈리는 관계", color: "#6d4c8a", dash: true, double: false },
] as const;

export const DISPUTES = [
  {
    id: "daughters",
    title: "아가멤논의 딸 이름",
    main: "이 그림에는 딸의 칸을 두지 않았습니다. 부부와 두 아들만 잇습니다.",
    other:
      "『일리아스』 9.144–145는 크리소테미스, 라오디케, 이피아나사를 적습니다. 이피게네이아와 엘렉트라는 후대 비극이 고정한 이름이라 같은 사람인지 단정하지 않습니다.",
  },
  {
    id: "helen-father",
    title: "헬레네의 아버지",
    main: "이 그림에서 헬레네는 메넬라오스의 배우자로만 있습니다. 부모 칸은 두지 않았습니다.",
    other: "『일리아스』는 헬레네를 제우스의 딸이라고 부릅니다. 틴다레오스와 레다의 인간 부모는 다른 전승입니다. 신의 가계는 나두신화에 둡니다.",
  },
  {
    id: "cassandra",
    title: "카산드라의 예언",
    main: "프리아모스와 헤카베의 딸이라는 선만 그었습니다.",
    other: "13.365–366은 약혼만 말합니다. 예언의 신은 이 시에 부모로 나오지 않습니다.",
  },
  {
    id: "astyanax",
    title: "아스튀아낙스의 죽음",
    main: "헥토르와 안드로마케의 아들로 살아 있는 칸입니다.",
    other: "성벽에서 떨어지는 죽음은 『일리우 페르시스』와 에우리피데스의 비극 쪽입니다.",
  },
  {
    id: "aeneas-rome",
    title: "아이네이아스와 로마",
    main: "안키세스와 아프로디테의 아들까지만 그립니다.",
    other: "『일리아스』 20.302–308은 자손이 트로이 사람을 다스린다고 말합니다. 크레우사, 아스카니우스, 로물루스는 로마 전승이라 로마이야기 가계로 넘깁니다.",
  },
] as const;

export const NAME_NOTES = [
  {
    title: "테티스와 테튀스",
    body: "아킬레우스의 어머니 테티스(Thetis)는 바다의 님프입니다. 나두신화 가계의 테튀스(Tethys)는 오케아노스의 아내인 티탄으로, 다른 신입니다.",
  },
  {
    title: "파리스의 다른 이름",
    body: "파리스는 알렉산드로스라고도 불립니다. 마케도니아의 알렉산드로스와 같은 사람이 아닙니다.",
  },
  {
    title: "두 아이아스",
    body: "이 가계도에는 아이아스를 두지 않았습니다. 헥토르와 싸운 큰 아이아스와, 오일레우스의 아들인 작은 아이아스는 다른 사람입니다.",
  },
  {
    title: "아스튀아낙스의 다른 이름",
    body: "헥토르는 아들을 스카만드리오스라고 불렀습니다. 아스튀아낙스는 트로이 사람들이 부른 이름입니다(6.402–403).",
  },
] as const;

type TreeSpec = {
  id: TreeId;
  ko: string;
  en: string;
  legend: boolean;
  blurb: string;
  bands: BandMeta[];
  seeds: TreeSeed[];
  links: TreeLink[];
};

function linkPair(): { links: TreeLink[]; parent: (from: string, to: string) => void; parents: (child: string, ...from: string[]) => void; spouse: (a: string, b: string) => void } {
  const links: TreeLink[] = [];
  const parent = (from: string, to: string) => links.push({ from, to, kind: "parent" });
  const parents = (child: string, ...from: string[]) => from.forEach((id) => parent(id, child));
  const spouse = (a: string, b: string) => links.push({ from: a, to: b, kind: "spouse" });
  return { links, parent, parents, spouse };
}

function atreusLinks() {
  const { links, parents, spouse } = linkPair();
  spouse("clytemnestra", "agamemnon");
  spouse("menelaus", "helen");
  parents("agamemnon", "atreus");
  parents("menelaus", "atreus");
  return links;
}

function peleusLinks() {
  const { links, parents, spouse } = linkPair();
  spouse("peleus", "thetis");
  parents("achilles", "peleus", "thetis");
  return links;
}

function priamLinks() {
  const { links, parents, spouse } = linkPair();
  spouse("priam", "hecuba");
  spouse("hector", "andromache");
  parents("hector", "priam", "hecuba");
  parents("paris", "priam", "hecuba");
  parents("cassandra", "priam", "hecuba");
  parents("astyanax", "hector", "andromache");
  return links;
}

function aeneasLinks() {
  const { links, parents, spouse } = linkPair();
  spouse("anchises", "aphrodite");
  parents("aeneas", "anchises", "aphrodite");
  return links;
}

const SPECS: TreeSpec[] = [
  {
    id: "atreus",
    ko: "아트레우스 집안",
    en: "House of Atreus",
    legend: true,
    blurb: "아가멤논과 메넬라오스는 아트레우스의 아들입니다. 헬레네는 메넬라오스의 배우자로만 두었습니다. 딸들의 이름은 권마다 갈려 칸을 비웠습니다.",
    bands: [
      { id: "father", ko: "아버지", en: "Atreus", hint: "홀이 지나온 이름입니다. 전장에는 나오지 않습니다.", color: "#6d3d52", soft: "rgba(109, 61, 82, 0.08)" },
      { id: "house", ko: "아들과 아내", en: "Sons", hint: "트로이에 온 두 형제와, 시가 이름을 대는 배우자입니다.", color: "#1a5278", soft: "rgba(26, 82, 120, 0.08)" },
    ],
    links: atreusLinks(),
    seeds: [
      {
        id: "atreus",
        ko: "아트레우스",
        roman: "Atreus",
        greek: "Ἀτρεύς",
        band: "father",
        col: 2,
        y: 40,
        slug: "atreus",
        summary: "아가멤논과 메넬라오스의 아버지입니다. 2권의 홀 이야기에 이름이 있습니다.",
        aliases: ["atreus", "아트레우스"],
      },
      {
        id: "clytemnestra",
        ko: "클리타임네스트라",
        roman: "Clytemnestra",
        greek: "Κλυταιμνήστρη",
        band: "house",
        col: 0,
        y: 280,
        slug: "clytemnestra",
        tagline: "1권에 이름만",
        summary: "아가멤논의 아내입니다. 시는 1권에서 이름만 댑니다.",
        aliases: ["clytemnestra", "clytaemnestra", "클리타임네스트라"],
      },
      {
        id: "agamemnon",
        ko: "아가멤논",
        roman: "Agamemnon",
        greek: "Ἀγαμέμνων",
        band: "house",
        col: 1.2,
        y: 280,
        slug: "agamemnon",
        tagline: "미케나이",
        summary: "연합의 우두머리입니다. 이 시 안에서 죽지 않습니다.",
        aliases: ["agamemnon", "아가멤논"],
      },
      {
        id: "menelaus",
        ko: "메넬라오스",
        roman: "Menelaus",
        greek: "Μενέλαος",
        band: "house",
        col: 2.8,
        y: 280,
        slug: "menelaus",
        tagline: "스파르테",
        summary: "헬레네의 남편입니다. 시가 끝날 때까지 살아 있습니다.",
        aliases: ["menelaus", "menelaos", "메넬라오스", "메넬라스"],
      },
      {
        id: "helen",
        ko: "헬레네",
        roman: "Helen",
        greek: "Ἑλένη",
        band: "house",
        col: 4,
        y: 280,
        slug: "helen",
        tagline: "지금은 트로이",
        summary: "메넬라오스의 아내로 두었습니다. 부모 칸은 전승이 갈려 비웠습니다.",
        aliases: ["helen", "helene", "헬레네", "헬렌"],
      },
    ],
  },
  {
    id: "peleus",
    ko: "펠레우스와 테티스",
    en: "Peleus and Thetis",
    legend: true,
    blurb: "아킬레우스는 인간 왕과 바다 님프의 아들입니다. 파트로클로스는 아들이 아니라 집에 맡겨진 벗이라 칸을 두지 않았습니다.",
    bands: [
      { id: "parents", ko: "부모", en: "Parents", hint: "아버지는 프티아에 남아 있습니다.", color: "#1a5278", soft: "rgba(26, 82, 120, 0.08)" },
      { id: "son", ko: "아들", en: "Son", hint: "시의 분노가 시작되는 사람입니다.", color: "#6d3d52", soft: "rgba(109, 61, 82, 0.08)" },
    ],
    links: peleusLinks(),
    seeds: [
      {
        id: "peleus",
        ko: "펠레우스",
        roman: "Peleus",
        greek: "Πηλεύς",
        band: "parents",
        col: 0,
        y: 40,
        slug: "peleus",
        summary: "프티아의 왕이고 아킬레우스의 아버지입니다. 트로이에는 오지 않습니다.",
        aliases: ["peleus", "펠레우스"],
      },
      {
        id: "thetis",
        ko: "테티스",
        roman: "Thetis",
        greek: "Θέτις",
        band: "parents",
        col: 1.2,
        y: 40,
        slug: "thetis",
        tagline: "바다의 님프",
        summary: "아킬레우스의 어머니입니다. 티탄 테튀스와 다른 신입니다.",
        aliases: ["thetis", "테티스"],
      },
      {
        id: "achilles",
        ko: "아킬레우스",
        roman: "Achilles",
        greek: "Ἀχιλλεύς",
        band: "son",
        col: 0.6,
        y: 280,
        slug: "achilles",
        tagline: "분노",
        summary: "펠레우스와 테티스의 아들입니다. 시의 중심입니다.",
        aliases: ["achilles", "achilleus", "아킬레우스", "아킬레스"],
      },
    ],
  },
  {
    id: "priam",
    ko: "프리아모스 집안",
    en: "House of Priam",
    legend: true,
    blurb: "프리아모스와 헤카베 아래 헥토르, 파리스, 카산드라를 두었습니다. 자식이 쉰 명이라는 왕의 말 전부를 칸으로 만들지는 않았습니다. 헬레네는 파리스의 정식 배우자로 잇지 않고 아트레우스 집안에 둡니다.",
    bands: [
      { id: "parents", ko: "부모", en: "Parents", hint: "트로이의 왕과 왕비입니다.", color: "#6d3d52", soft: "rgba(109, 61, 82, 0.08)" },
      { id: "children", ko: "자녀", en: "Children", hint: "시에서 이름이 크게 남는 자녀만 골랐습니다.", color: "#1a5278", soft: "rgba(26, 82, 120, 0.08)" },
      { id: "grandchild", ko: "손자", en: "Grandchild", hint: "6권에서 살아 있는 아이입니다.", color: "#3e5340", soft: "rgba(62, 83, 64, 0.08)" },
    ],
    links: priamLinks(),
    seeds: [
      {
        id: "priam",
        ko: "프리아모스",
        roman: "Priam",
        greek: "Πρίαμος",
        band: "parents",
        col: 1.6,
        y: 40,
        slug: "priam",
        summary: "트로이의 왕입니다. 24권에서 아들의 시신을 찾으러 갑니다.",
        aliases: ["priam", "프리아모스"],
      },
      {
        id: "hecuba",
        ko: "헤카베",
        roman: "Hecuba",
        greek: "Ἑκάβη",
        band: "parents",
        col: 2.8,
        y: 40,
        slug: "hecuba",
        summary: "프리아모스의 아내이고 헥토르의 어머니입니다.",
        aliases: ["hecuba", "hecube", "헤카베", "헤쿠바"],
      },
      {
        id: "andromache",
        ko: "안드로마케",
        roman: "Andromache",
        greek: "Ἀνδρομάχη",
        band: "children",
        col: 0,
        y: 280,
        slug: "andromache",
        tagline: "헥토르의 아내",
        summary: "테베의 에에티온의 딸입니다. 부모의 집은 이 그림 밖에 있습니다.",
        aliases: ["andromache", "안드로마케"],
      },
      {
        id: "hector",
        ko: "헥토르",
        roman: "Hector",
        greek: "Ἕκτωρ",
        band: "children",
        col: 1.2,
        y: 280,
        slug: "hector",
        tagline: "성의 수비",
        summary: "프리아모스와 헤카베의 아들입니다. 22권에서 죽습니다.",
        aliases: ["hector", "hektor", "헥토르"],
      },
      {
        id: "paris",
        ko: "파리스",
        roman: "Paris",
        greek: "Πάρις",
        band: "children",
        col: 2.6,
        y: 280,
        slug: "paris",
        tagline: "알렉산드로스",
        summary: "프리아모스의 아들입니다. 헬레네와의 선은 정식 혼인으로 긋지 않았습니다.",
        aliases: ["paris", "alexander", "alexandros", "파리스", "알렉산드로스"],
      },
      {
        id: "cassandra",
        ko: "카산드라",
        roman: "Cassandra",
        greek: "Κασσάνδρη",
        band: "children",
        col: 3.8,
        y: 280,
        slug: "cassandra",
        tagline: "예언은 시 밖에",
        summary: "프리아모스의 딸입니다. 13권은 약혼만 말합니다.",
        aliases: ["cassandra", "카산드라"],
      },
      {
        id: "astyanax",
        ko: "아스튀아낙스",
        roman: "Astyanax",
        greek: "Ἀστυάναξ",
        band: "grandchild",
        col: 0.6,
        y: 520,
        slug: "astyanax",
        tagline: "스카만드리오스",
        summary: "헥토르와 안드로마케의 아들입니다. 이 시에서는 살아 있습니다.",
        aliases: ["astyanax", "scamandrius", "아스튀아낙스", "아스튜아낙스"],
      },
    ],
  },
  {
    id: "aeneas",
    ko: "아이네이아스",
    en: "Aeneas",
    legend: true,
    blurb: "안키세스와 아프로디테의 아들입니다. 로마로 가는 자손의 칸은 그리지 않았습니다. 그 족보는 로마이야기의 전승 가계에 있습니다.",
    bands: [
      { id: "parents", ko: "부모", en: "Parents", hint: "인간과 여신입니다.", color: "#6d4c8a", soft: "rgba(109, 76, 138, 0.08)" },
      { id: "son", ko: "아들", en: "Son", hint: "20권에서 살아남습니다.", color: "#1a5278", soft: "rgba(26, 82, 120, 0.08)" },
    ],
    links: aeneasLinks(),
    seeds: [
      {
        id: "anchises",
        ko: "안키세스",
        roman: "Anchises",
        greek: "Ἀγχίσης",
        band: "parents",
        col: 0,
        y: 40,
        slug: "anchises",
        summary: "아이네이아스의 아버지입니다. 업혀 성을 나오는 밤은 이 시 밖에 있습니다.",
        aliases: ["anchises", "안키세스"],
      },
      {
        id: "aphrodite",
        ko: "아프로디테",
        roman: "Aphrodite",
        greek: "Ἀφροδίτη",
        band: "parents",
        col: 1.2,
        y: 40,
        slug: "aphrodite",
        legend: true,
        tagline: "어머니인 여신",
        summary: "아이네이아스의 어머니입니다. 신의 다른 가계는 나두신화에 있습니다.",
        aliases: ["aphrodite", "아프로디테"],
      },
      {
        id: "aeneas",
        ko: "아이네이아스",
        roman: "Aeneas",
        greek: "Αἰνείας",
        band: "son",
        col: 0.6,
        y: 280,
        slug: "aeneas",
        tagline: "살아남음",
        summary: "20권에서 포세이돈이 구합니다. 로마의 시조 이야기는 그 다음입니다.",
        aliases: ["aeneas", "aineias", "아이네이아스", "아이네아스"],
      },
    ],
  },
];


function norm(value: string) {
  return value.toLowerCase().replace(/[\s·.'’\-()/_]/g, "");
}

function captionFor(id: string, links: TreeLink[], byId: Map<string, TreeSeed>) {
  const names = links
    .filter((link) => link.to === id && link.kind === "parent")
    .map((link) => byId.get(link.from)?.ko)
    .filter((name): name is string => Boolean(name));
  return names.join("·");
}

function placeNodes(seeds: TreeSeed[], links: TreeLink[]) {
  const cols = seeds.map((seed) => seed.col);
  const min = Math.min(...cols);
  const max = Math.max(...cols);
  const contentWidth = (max - min) * COL + NODE_W;
  const width = contentWidth + PAD * 2;
  const seedById = new Map(seeds.map((seed) => [seed.id, seed]));
  const nodes: LayoutNode[] = seeds.map((seed) => {
    const keys = [seed.ko, seed.roman, seed.id, seed.slug, seed.greek, seed.tagline, ...(seed.aliases ?? [])].filter(
      (key): key is string => Boolean(key),
    );
    return {
      ...seed,
      x: PAD + (seed.col - min) * COL,
      w: NODE_W,
      h: NODE_H,
      sub: seed.roman,
      caption: captionFor(seed.id, links, seedById),
      href: seed.href ?? (seed.slug ? `/heroes/${seed.slug}` : undefined),
      keys,
    };
  });
  const height = Math.max(...nodes.map((node) => node.y + node.h)) + 36;
  return { nodes, width, height };
}

type Box = { id: string; x: number; y: number; w: number; h: number; cx: number; cy: number };

function boxes(nodes: LayoutNode[]): Box[] {
  return nodes.map((node) => ({
    id: node.id,
    x: node.x,
    y: node.y,
    w: node.w,
    h: node.h,
    cx: node.x + node.w / 2,
    cy: node.y + node.h / 2,
  }));
}

function edgePaths(nodes: LayoutNode[], links: TreeLink[]): LayoutEdge[] {
  const box = new Map(boxes(nodes).map((item) => [item.id, item]));
  return links.map((link) => {
    const from = box.get(link.from)!;
    const to = box.get(link.to)!;
    const path = link.kind === "spouse" ? spousePath(from, to) : directedPath(from, to, link.kind);
    const dx = Math.abs(from.cx - to.cx);
    const dy = Math.abs(from.cy - to.cy);
    const local = link.kind === "spouse" ? dx < COL * 1.6 && dy < NODE_H * 1.4 : dx < COL * 1.8 && dy < 240;
    return {
      id: `${link.kind}-${link.from}-${link.to}`,
      d: path.d,
      d2: path.d2,
      kind: link.kind,
      from: link.from,
      to: link.to,
      local,
      quiet: Math.hypot(dx, dy) > 620,
    };
  });
}

function directedPath(from: Box, to: Box, kind: LinkKind): { d: string; d2?: string } {
  const downward = from.cy <= to.cy;
  const x1 = from.cx;
  const y1 = downward ? from.y + from.h : from.y;
  const x2 = to.cx;
  const y2 = downward ? to.y : to.y + to.h;
  const sameRow = Math.abs(from.cy - to.cy) < 24;
  if (sameRow && kind === "variant-parent") {
    const left = Math.min(x1, x2);
    const right = Math.max(x1, x2);
    const y = Math.min(from.y, to.y);
    return { d: `M ${left} ${y} Q ${(left + right) / 2} ${y - 26}, ${right} ${y}` };
  }
  if (Math.abs(x1 - x2) < 6) return { d: `M ${x1} ${y1} V ${y2}` };
  const mid = (y1 + y2) / 2;
  return { d: `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}` };
}

function spousePath(a: Box, b: Box): { d: string; d2?: string } {
  const left = a.cx <= b.cx ? a : b;
  const right = a.cx <= b.cx ? b : a;
  const x1 = left.x + left.w;
  const x2 = right.x;
  const gap = x2 - x1;
  if (Math.abs(a.cy - b.cy) < 24 && gap < COL * 0.75) {
    const y = (left.cy + right.cy) / 2;
    return { d: `M ${x1} ${y - 2.5} H ${x2}`, d2: `M ${x1} ${y + 2.5} H ${x2}` };
  }
  if (Math.abs(a.cy - b.cy) < 24) {
    const y = left.y;
    const mid = (left.cx + right.cx) / 2;
    const lift = Math.min(36, 16 + Math.abs(right.cx - left.cx) * 0.04);
    return { d: `M ${left.cx} ${y} Q ${mid} ${y - lift}, ${right.cx} ${y}` };
  }
  const upper = a.cy <= b.cy ? a : b;
  const lower = a.cy <= b.cy ? b : a;
  const mid = (upper.y + upper.h + lower.y) / 2;
  const bow = upper.cx <= lower.cx ? 36 : -36;
  return { d: `M ${upper.cx} ${upper.y + upper.h} C ${upper.cx + bow} ${mid}, ${lower.cx + bow} ${mid}, ${lower.cx} ${lower.y}` };
}

function validate(treeName: string, nodes: LayoutNode[], links: TreeLink[], bands: BandMeta[]) {
  const ids = new Set<string>();
  const bandIds = new Set(bands.map((band) => band.id));
  for (const node of nodes) {
    if (ids.has(node.id)) throw new Error(`${treeName} id 중복: ${node.id}`);
    if (!bandIds.has(node.band)) throw new Error(`${treeName} 세대 없음: ${node.id} · ${node.band}`);
    ids.add(node.id);
  }
  for (const link of links) {
    if (!ids.has(link.from) || !ids.has(link.to)) {
      throw new Error(`${treeName} 선 오류: ${link.kind} ${link.from} → ${link.to}`);
    }
  }
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const overlapX = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
      const overlapY = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
      if (overlapX > 2 && overlapY > 2) throw new Error(`${treeName} 칸이 겹칩니다: ${a.id} · ${b.id}`);
    }
  }
}

function buildBands(bands: BandMeta[], nodes: LayoutNode[]): LayoutBand[] {
  return bands.map((meta) => {
    const group = nodes.filter((node) => node.band === meta.id).sort((a, b) => a.y - b.y || a.x - b.x);
    if (!group.length) throw new Error(`빈 세대: ${meta.id}`);
    const top = Math.min(...group.map((node) => node.y)) - 52;
    const bottom = Math.max(...group.map((node) => node.y + node.h)) + 18;
    return { ...meta, top, height: bottom - top, nodeIds: group.map((node) => node.id) };
  });
}

function defineTree(spec: TreeSpec): FamilyTree {
  const placed = placeNodes(spec.seeds, spec.links);
  validate(spec.ko, placed.nodes, spec.links, spec.bands);
  const bands = buildBands(spec.bands, placed.nodes);
  for (let i = 1; i < bands.length; i += 1) {
    const gap = bands[i].top - (bands[i - 1].top + bands[i - 1].height);
    if (gap < 12) throw new Error(`${spec.ko} 세대 간격이 좁습니다: ${bands[i - 1].id} → ${bands[i].id}`);
  }
  return {
    id: spec.id,
    ko: spec.ko,
    en: spec.en,
    legend: spec.legend,
    blurb: spec.blurb,
    width: placed.width,
    height: placed.height,
    nodes: placed.nodes,
    edges: edgePaths(placed.nodes, spec.links),
    bands,
    byId: new Map(placed.nodes.map((node) => [node.id, node])),
    links: spec.links,
  };
}

export const TREES: FamilyTree[] = SPECS.map(defineTree);

const seen = new Set<string>();
for (const tree of TREES) {
  for (const node of tree.nodes) {
    if (seen.has(node.id)) throw new Error(`가족관계도 id가 가문 사이에 겹칩니다: ${node.id}`);
    seen.add(node.id);
  }
}

export function isTreeId(value: string | null): value is TreeId {
  return !!value && (TREE_IDS as readonly string[]).includes(value);
}

export function treeById(id: TreeId) {
  const tree = TREES.find((item) => item.id === id);
  if (!tree) throw new Error(id);
  return tree;
}

export type RelationPerson = { id: string; ko: string; roman: string; href?: string };

function personRef(tree: FamilyTree, id: string): RelationPerson {
  const node = tree.byId.get(id);
  if (!node) throw new Error(id);
  return { id: node.id, ko: node.ko, roman: node.roman, href: node.href };
}

export function relationsOf(tree: FamilyTree, id: string) {
  const byX = (a: RelationPerson, b: RelationPerson) => (tree.byId.get(a.id)?.x ?? 0) - (tree.byId.get(b.id)?.x ?? 0);
  const parents = tree.links
    .filter((link) => link.to === id && link.kind === "parent")
    .map((link) => personRef(tree, link.from))
    .sort(byX);
  const variantParents = tree.links
    .filter((link) => link.to === id && link.kind === "variant-parent")
    .map((link) => personRef(tree, link.from))
    .sort(byX);
  const children = tree.links
    .filter((link) => link.from === id && link.kind === "parent")
    .map((link) => personRef(tree, link.to))
    .sort(byX);
  const variantChildren = tree.links
    .filter((link) => link.from === id && link.kind === "variant-parent")
    .map((link) => personRef(tree, link.to))
    .sort(byX);
  const spouses = tree.links
    .filter((link) => link.kind === "spouse" && (link.from === id || link.to === id))
    .map((link) => personRef(tree, link.from === id ? link.to : link.from))
    .sort(byX);
  const parentIds = new Set(parents.map((person) => person.id));
  const siblingIds = new Set<string>();
  for (const link of tree.links) {
    if (link.kind !== "parent" || !parentIds.has(link.from) || link.to === id) continue;
    siblingIds.add(link.to);
  }
  const siblings = [...siblingIds].map((siblingId) => personRef(tree, siblingId)).sort(byX);
  return { parents, variantParents, children, variantChildren, spouses, siblings };
}

export type SearchHit = { treeId: TreeId; treeKo: string; node: LayoutNode; exact: boolean; prefix: boolean };

export function searchNodes(query: string): SearchHit[] {
  const q = norm(query);
  if (!q) return [];
  const hits: SearchHit[] = [];
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      const keys = node.keys.map(norm);
      const exact = keys.some((key) => key === q);
      const prefix = keys.some((key) => key.startsWith(q));
      const hit = exact || prefix || keys.some((key) => key.includes(q));
      if (hit) hits.push({ treeId: tree.id, treeKo: tree.ko, node, exact, prefix });
    }
  }
  return hits.sort(
    (a, b) => Number(b.exact) - Number(a.exact) || Number(b.prefix) - Number(a.prefix) || a.node.ko.localeCompare(b.node.ko, "ko"),
  );
}

export function exactNodeId(query: string): { treeId: TreeId; id: string } | null {
  const q = norm(query);
  if (!q) return null;
  const hits: { treeId: TreeId; id: string }[] = [];
  for (const tree of TREES) {
    for (const node of tree.nodes) {
      if (node.keys.some((key) => norm(key) === q)) hits.push({ treeId: tree.id, id: node.id });
    }
  }
  return hits.length === 1 ? hits[0] : null;
}

export function focusHref(treeId: TreeId, id: string) {
  return `/family-tree?tree=${treeId}&focus=${id}`;
}
