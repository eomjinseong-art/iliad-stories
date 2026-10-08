import { OUT } from "@/lib/site";
import type { LinkItem } from "@/data/types";

export type ScopeRow = {
  id: string;
  title: string;
  inPoem: boolean;
  where: string;
  detail: string;
  links: readonly LinkItem[];
};

export const scopeRows: readonly ScopeRow[] = [
  {
    id: "quarrel",
    title: "아킬레우스와 아가멤논의 다툼",
    inPoem: true,
    where: "『일리아스』 1권",
    detail:
      "브리세이스를 둘러싼 말다툼, 아킬레우스의 철수, 제우스의 고개가 시의 출발입니다. 트로이를 언제 침공했는지는 이미 지난 일로 둡니다.",
    links: [
      { href: "/books/1", label: "1권" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/heroes/agamemnon", label: "아가멤논" },
    ],
  },
  {
    id: "hector-rise",
    title: "헥토르가 그리스군을 밀어붙임",
    inPoem: true,
    where: "『일리아스』 8권, 11–15권",
    detail:
      "제우스의 날 이후 헥토르는 배 앞까지 옵니다. 벽을 뚫고, 큰 아이아스가 갑판에서 버티는 데까지가 이 시의 위기입니다.",
    links: [
      { href: "/books/8", label: "8권" },
      { href: "/books/15", label: "15권" },
      { href: "/heroes/hector", label: "헥토르" },
    ],
  },
  {
    id: "patroclus",
    title: "파트로클로스의 죽음",
    inPoem: true,
    where: "『일리아스』 16권",
    detail:
      "아킬레우스의 갑옷을 입은 파트로클로스가 사르페돈을 죽인 뒤, 아폴론과 에우포르보스와 헥토르에게 죽습니다. 시의 가운데 재앙입니다.",
    links: [
      { href: "/books/16", label: "16권" },
      { href: "/heroes/patroclus", label: "파트로클로스" },
    ],
  },
  {
    id: "return",
    title: "아킬레우스의 귀환과 헥토르의 죽음",
    inPoem: true,
    where: "『일리아스』 19–22권",
    detail:
      "새 방패를 받고 돌아온 아킬레우스가 헥토르를 죽입니다. 성 세 바퀴, 아테나의 속임, 시신을 전차에 매단 일이 22권에 있습니다.",
    links: [
      { href: "/books/22", label: "22권" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/heroes/hector", label: "헥토르" },
    ],
  },
  {
    id: "funeral",
    title: "헥토르의 장례",
    inPoem: true,
    where: "『일리아스』 24권",
    detail:
      "프리아모스가 몸값을 가져오고, 성이 곡한 뒤 화장과 무덤으로 시가 끝납니다. 파트로클로스의 장례 경기는 그 앞 23권에 따로 있습니다.",
    links: [
      { href: "/books/24", label: "24권" },
      { href: "/scenes#priam", label: "프리아모스와 아킬레우스" },
    ],
  },
  {
    id: "judgment",
    title: "파리스의 심판",
    inPoem: false,
    where: "서사시권 『키프리아』",
    detail:
      "헤라, 아테나, 아프로디테가 황금 사과를 두고 겨루고 파리스가 아프로디테를 고르는 장면은 『키프리아』 쪽 이야기입니다. 받은 『일리아스』 24.25–30은 여신들이 그의 집에 왔던 일을 한두 줄 가리킬 뿐, 사과와 약속의 장면은 없습니다. 고대 학자 아리스타르코스는 그 몇 줄을 의심했습니다.",
    links: [
      { href: OUT.mythJudgment, label: "나두신화 · 파리스의 심판" },
      { href: "/heroes/paris", label: "파리스" },
    ],
  },
  {
    id: "abduction",
    title: "헬레네를 스파르테에서 데려옴",
    inPoem: false,
    where: "서사시권 『키프리아』",
    detail:
      "『일리아스』가 열릴 때 헬레네는 이미 트로이에 있습니다. 3권은 성벽 위의 그녀와, 파리스의 침실로 돌아가는 길을 보여줄 뿐 배 위의 출발은 들려주지 않습니다. 그 출발은 『키프리아』가 맡는 앞이야기입니다.",
    links: [
      { href: OUT.mythTrojanWar, label: "나두신화 · 트로이 전쟁" },
      { href: "/heroes/helen", label: "헬레네" },
    ],
  },
  {
    id: "heel",
    title: "아킬레우스의 죽음, 발뒤꿈치의 화살",
    inPoem: false,
    where: "『아이티오피스』, 그리고 더 나중의 전승",
    detail:
      "죽는 장면은 『일리아스』에 없습니다. 22.358–360에서 헥토르가, 파리스와 아폴론이 스카이아 문에서 그를 죽일 것이라고 예언할 뿐입니다. 프로클로스가 전하는 『아이티오피스』에서 파리스와 아폴론이 스카이아 문에서 그를 죽입니다. 아폴로도로스 요약은 발목을 말하고, 테티스가 스틱스 강에 담가 발뒤꿈치만 약했다는 이야기는 로마 시대 스타티우스의 『아킬레이스』 쪽에 가깝습니다. 『일리아스』의 아킬레우스는 무적이 아니며, 갑옷이 필요합니다.",
    links: [
      { href: OUT.mythAchilleus, label: "나두신화 · 아킬레우스" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/books/22", label: "22권의 예언" },
    ],
  },
  {
    id: "horse",
    title: "목마와 트로이의 함락",
    inPoem: false,
    where: "『작은 일리아스』, 『일리우 페르시스』, 『오디세이아』",
    detail:
      "목마는 『일리아스』에 없습니다. 프로클로스의 요약에서는 말을 만들어 성 안에 들이는 쪽이 『작은 일리아스』, 함락의 밤은 『일리우 페르시스』에 가깝습니다. 경계는 요약마다 조금 다릅니다. 『오디세이아』 8권에서 데모도코스가 목마를 노래하고, 4권에서 헬레네가 그 밤을 회상합니다.",
    links: [
      { href: OUT.mythHorse, label: "나두신화 · 목마" },
      { href: OUT.mythOdyssey, label: "나두신화 · 오디세이아" },
    ],
  },
  {
    id: "odyssey",
    title: "오디세우스의 귀향",
    inPoem: false,
    where: "호메로스 『오디세이아』",
    detail:
      "『오디세이아』는 다른 시입니다. 트로이가 무너진 뒤 오디세우스가 10년 만에 이타케로 돌아가는 이야기입니다. 『일리아스』 안의 오디세우스는 사절과 정찰과 집회의 사람이지, 아직 귀향의 주인공이 아닙니다.",
    links: [
      { href: OUT.mythOdyssey, label: "나두신화 · 오디세이아" },
      { href: "/heroes/odysseus", label: "오디세우스" },
      { href: "/movies#odyssey-2026", label: "영화 『오디세이』(2026)" },
    ],
  },
  {
    id: "aeneid",
    title: "아이네이아스가 이탈리아에 닿아 로마의 조상이 됨",
    inPoem: false,
    where: "베르길리우스 『아이네이스』(기원전 1세기)",
    detail:
      "『일리아스』 20.302–308은 아이네이아스와 그 자손이 트로이 사람을 다스린다고만 말합니다. 카르타고, 라티움, 로물루스로 이어지는 족보는 로마의 시 『아이네이스』와 로마의 건국 전승입니다. 그리스 서사시가 쓴 로마 건국기는 아닙니다.",
    links: [
      { href: OUT.mythAeneid, label: "나두신화 · 아이네이스" },
      { href: OUT.romeAeneas, label: "로마이야기 · 아이네이아스" },
      { href: OUT.romeRomulus, label: "로마이야기 · 로물루스" },
      { href: "/heroes/aeneas", label: "아이네이아스" },
    ],
  },
];

export const extraOut = [
  {
    title: "아울리스의 이피게네이아",
    body: "아가멤논이 딸을 제물로 바쳐 바람을 불렀다는 이야기는 『키프리아』와 후대 비극 쪽입니다. 『일리아스』 9권이 적는 딸 이름은 크리소테미스, 라오디케, 이피아나사입니다.",
  },
  {
    title: "큰 아이아스의 자살",
    body: "아킬레우스의 무기를 두고 오디세우스와 다툰 뒤 스스로 죽는 이야기는 『작은 일리아스』와 소포클레스의 비극 쪽입니다. 『일리아스』의 아이아스는 7권에서 헥토르와 비기고, 15권에서 배를 지킵니다.",
  },
  {
    title: "카산드라의 예언",
    body: "『일리아스』 13.365–366은 그녀를 프리아모스의 가장 아름다운 딸, 오트뤼오네우스의 약혼자로만 적습니다. 아무도 믿지 않는 예언은 이 시에 없습니다.",
  },
  {
    title: "아스튀아낙스의 죽음",
    body: "6권과 24권에서 안드로마케가 두려워하는 미래입니다. 성벽에서 떨어지는 죽음은 『일리우 페르시스』와 에우리피데스 『트로이의 여인들』 쪽입니다.",
  },
] as const;
