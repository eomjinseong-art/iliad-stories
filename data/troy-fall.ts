import { OUT } from "@/lib/site";
import type { LinkItem } from "@/data/types";

export const TROY_SERIES_PATH = "/movies/troy-fall-of-a-city";

export const troySeries = {
  titleKo: "트로이: 왕국의 몰락",
  titleEn: "Troy: Fall of a City",
  year: "2018",
  episodes: 8,
  broadcaster:
    "영국 BBC One에서 2018년 2월 17일부터 4월 7일까지 토요일에 방송했습니다. BBC One과 넷플릭스의 공동 제작이고, 영국 밖에서는 넷플릭스가 공개했습니다. 한국 넷플릭스 제목은 「트로이: 왕국의 몰락」입니다.",
  creator: "데이비드 파가 기획했습니다. 각본은 데이비드 파, 낸시 해리스, 미카 왓킨스, 조 바턴이 나누고, 연출은 오언 해리스, 마크 브로젤, 존 스트리클랜드가 맡았습니다.",
  watch:
    "처음 공개된 곳은 BBC One과 넷플릭스입니다. 오늘 어느 목록에 남아 있는지는 지역마다 달라 주소를 적지 않습니다. 불법 영상 링크는 없습니다.",
} as const;

export type TroyCast = {
  character: string;
  actor: string;
  href?: string;
  note?: string;
};

export const troyCast: readonly { group: string; people: readonly TroyCast[] }[] = [
  {
    group: "트로이",
    people: [
      { character: "파리스 (알렉산드로스)", actor: "루이스 헌터", href: "/heroes/paris" },
      { character: "헬레네", actor: "벨라 데인", href: "/heroes/helen" },
      { character: "프리아모스", actor: "데이비드 스렐폴", href: "/heroes/priam" },
      { character: "헤카베", actor: "프랜시스 오코너", href: "/heroes/hecuba" },
      { character: "헥토르", actor: "톰 웨스턴존스", href: "/heroes/hector" },
      { character: "안드로마케", actor: "클로이 피리", href: "/heroes/andromache" },
      { character: "카산드라", actor: "에이미 피온 에드워즈", href: "/heroes/cassandra" },
      { character: "아이네이아스", actor: "앨프리드 에노크", href: "/heroes/aeneas" },
    ],
  },
  {
    group: "그리스",
    people: [
      { character: "아가멤논", actor: "조니 해리스", href: "/heroes/agamemnon" },
      { character: "메넬라오스", actor: "조너스 암스트롱", href: "/heroes/menelaus" },
      { character: "아킬레우스", actor: "데이비드 기아시", href: "/heroes/achilles" },
      { character: "오디세우스", actor: "조지프 마울", href: "/heroes/odysseus" },
      { character: "파트로클로스", actor: "레모강 치파", href: "/heroes/patroclus" },
      { character: "브리세이스", actor: "에이미 루이즈 윌슨", href: "/books/1", note: "1권의 전리품" },
    ],
  },
  {
    group: "신",
    people: [
      { character: "제우스", actor: "하킴 카에카짐", href: "/heroes/zeus" },
      { character: "헤라", actor: "잉에 베크만", href: "/heroes/hera" },
      { character: "아테나", actor: "샤밀라 밀러", href: "/heroes/athena" },
      { character: "아프로디테", actor: "렉스 킹", href: "/heroes/aphrodite" },
      { character: "아르테미스", actor: "탄도 호파" },
    ],
  },
];

export type TroyEpisode = {
  n: number;
  slug: string;
  titleKo: string;
  titleEn: string;
  netflixKo?: string;
  air: string;
  credit: string;
  paragraphs: readonly string[];
};

export const troyEpisodes: readonly TroyEpisode[] = [
  {
    n: 1,
    slug: "black-blood",
    titleKo: "검은 피",
    titleEn: "Black Blood",
    air: "2018년 2월 17일",
    credit: "각본 데이비드 파 · 연출 오언 해리스",
    paragraphs: [
      "목동으로 살던 [파리스](/heroes/paris)가 헤라, 아테나, 아프로디테의 아름다움 다툼을 심판합니다. 황금 사과를 아프로디테에게 주고, 세상에서 가장 아름다운 여자를 약속받습니다. 이 심판의 장면은 [『키프리아』 쪽](/scope#judgment)이고, 받은 『일리아스』는 그 약속을 펼쳐 보이지 않습니다.",
      "트로이의 경기에서 파리스는 [헥토르](/heroes/hector)와 맞붙습니다. 태어날 때 불타는 성과 검은 피의 환시가 있어 언덕에 버려졌던 아이로 밝혀지고, [프리아모스](/heroes/priam)와 [헤카베](/heroes/hecuba)가 아들로 맞습니다. [카산드라](/heroes/cassandra)는 이미 환시에 시달립니다. 프리아모스는 거친 아들을 다듬는다며 스파르테 사절로 보냅니다. 드라마는 그 혼담의 상대를 헬레네의 딸 헤르미오네로 둡니다. 헤르미오네를 파리스의 약혼 상대로 보내는 설정은 이 작품이 더한 것입니다.",
      "[메넬라오스](/heroes/menelaus)가 아버지의 장례로 자리를 비운 사이, [헬레네](/heroes/helen)는 자신을 혼인의 상으로 여기는 자리에서 벗어나 궤짝에 숨어 파리스와 함께 떠납니다. 제우스가 일으킨 폭풍이 배를 붙잡기도 하고, 아프로디테는 잔치의 사람들 사이에 모습을 보입니다. [스파르테에서 떠난 길](/scope#abduction)은 『일리아스』가 시작되기 전의 일입니다. 시가 열릴 때 헬레네는 이미 트로이에 있습니다.",
    ],
  },
  {
    n: 2,
    slug: "conditions",
    titleKo: "조건",
    titleEn: "Conditions",
    air: "2018년 2월 24일",
    credit: "각본 데이비드 파 · 연출 오언 해리스",
    paragraphs: [
      "파리스와 헬레네가 트로이에 닿자 왕가는 돌려보낼지를 두고 갈립니다. 헥토르는 금으로 메넬라오스의 체면을 덮자는 안에 반대하고, [안드로마케](/heroes/andromache)는 두 사람의 도착을 달가워하지 않습니다. 협상에서 [아가멤논](/heroes/agamemnon)은 헬레네의 반환과 함께 헬레스폰토스 해협의 통행권을 요구합니다. 해협의 권리는 이 드라마가 넣은 전쟁 이유입니다. [아이네이아스](/heroes/aeneas)가 트로이 편에 섭니다.",
      "그리스 쪽에서는 [오디세우스](/heroes/odysseus)가 출정을 피하려 미친 척을 합니다. 집의 어린아이를 쟁기 앞에 두는 시험으로 그 척이 들통납니다. 『일리아스』는 이 장면을 쓰지 않습니다. 『키프리아』가 전하는 보통의 이야기에서는 팔라메데스가 아들 텔레마코스로 시험합니다. 아가멤논은 출항 앞에 흰 비둘기를 아르테미스에게 바칩니다. 여신은 거절하고 딸 이피게네이아를 요구하며, 아가멤논은 그 아이를 제물로 바칩니다. 이 제물은 [51일 타임라인 밖의 앞이야기](/scope)입니다. 제우스는 여신들의 다툼이라며 손을 대지 않고, 헤라와 아테나와 아프로디테는 병사들 사이를 걷습니다.",
    ],
  },
  {
    n: 3,
    slug: "siege",
    titleKo: "포위",
    titleEn: "Siege",
    air: "2018년 3월 3일",
    credit: "각본 낸시 해리스 · 연출 오언 해리스",
    paragraphs: [
      "포위가 성 안의 곡식을 줄입니다. 헬레네는 파리스와 혼인하고, 곡식을 나누며 안드로마케에게 다가갑니다. 헥토르와 파리스는 밤을 틈타 킬리키아의 동맹, 헥토르의 장인 에에티온에게 군량을 구하러 갑니다. 헥토르는 파리스를 죽일 기회에서 손을 멈추고, 파리스가 형을 살립니다. [6권](/books/6)이 열릴 때 에에티온은 이미 [아킬레우스](/heroes/achilles)에게 죽은 사람입니다. 드라마는 그 약탈을 포위가 진행되는 동안의 일로 보여 줍니다.",
      "아킬레우스가 헬레네를 데려가려 하고, 헬레네는 그의 자부심에 호소해 그 뜻을 되돌립니다. 이 만남은 시에 없습니다. 그 자리에서 새어 나간 말이 다음 회의 킬리키아로 이어집니다. 신들은 거의 빠지고, 해안의 아프로디테와 트로이의 사제 리토스가 저주를 반복합니다. 리토스는 시의 인물이 아닙니다.",
    ],
  },
  {
    n: 4,
    slug: "spoils-of-war",
    titleKo: "전리품",
    titleEn: "Spoils of War",
    air: "2018년 3월 10일",
    credit: "각본 미카 왓킨스 · 연출 마크 브로젤",
    paragraphs: [
      "아킬레우스가 킬리키아를 쳐 에에티온을 죽이고 곡식을 불태웁니다. 아폴론 사제의 딸 크리세이스와 브리세이스가 그리스 진영으로 옵니다. 안드로마케는 아버지의 죽음과 함께 자신의 임신을 압니다. 아가멤논은 크리세이스를 죽은 딸의 자리에 겹쳐 보다가 그를 범하고, 진영에 돌림병이 돕니다. 크리세이스를 돌려보낸 뒤 아가멤논은 아킬레우스의 브리세이스를 가져가고, 아킬레우스는 싸우지 않겠다고 물러납니다. 이 다툼이 [1권](/books/1)의 출발입니다. [51일](/timeline#plague)은 여기서부터 셉니다.",
      "드라마는 아킬레우스와 [파트로클로스](/heroes/patroclus)를 연인으로 보여주고, 브리세이스를 그 막사에 붙입니다. 시는 파트로클로스를 메노이티오스의 아들, 펠레우스의 집에 맡겨진 벗으로 적습니다. 메넬라오스와 파리스가 결투합니다. 리토스가 파리스는 태어날 때부터 저주받았고 가족이 그를 죽이려 했다고 공표하고, 아프로디테가 파리스를 빼 언덕으로 달아나게 합니다. [3권](/books/3)에서 아프로디테는 그를 안개에 실어 헬레네의 침실로 되돌립니다.",
    ],
  },
  {
    n: 5,
    slug: "hunted",
    titleKo: "쫓김",
    titleEn: "Hunted",
    air: "2018년 3월 17일",
    credit: "각본 데이비드 파 · 연출 마크 브로젤",
    paragraphs: [
      "결투 뒤 파리스는 그리스군에게 쫓겨 옛 목장으로 갑니다. 자신을 키운 아겔라오스와, 예전의 연인 오이노네를 찾으나 환영받지 못하고 아프로디테를 원망합니다. 성 안의 헬레네는 왕족의 대접을 잃고 판다로스의 위협을 받습니다. 판다로스는 이 회에서 목숨을 잃습니다. 카산드라의 환시가 다시 나오고, 브리세이스는 오라비와 얼굴을 마주합니다. 드라마는 그 오라비를 시의 정찰병 돌론과 겹쳐 둡니다. 『일리아스』 10권의 돌론은 브리세이스의 오라비가 아닙니다.",
      "오디세우스는 성 안에 둔 크산티오스라는 사람을 통해 트로이를 엿봅니다. 크산티오스는 시에 없는 사람입니다. 아테나가 그리스 진영 근처의 첩자를 오디세우스에게 알리고, 아프로디테와 제우스는 파리스의 운명을 두고 맞섭니다. 헥토르는 기병을 내보내는 계획을 그리스 쪽에 미리 알린 뒤 실행하고, 그 말은 성문 밖으로 나갔다가 뜻을 잃습니다. 아킬레우스는 약탈이 아닌 이유를 달라며 여전히 나서지 않습니다. 트로이 쪽은 그리스 진영의 분열을 이용하려 합니다.",
    ],
  },
  {
    n: 6,
    slug: "battle-on-the-beach",
    titleKo: "해안의 전투",
    titleEn: "Battle on the Beach",
    netflixKo: "해안의 전투",
    air: "2018년 3월 24일",
    credit: "각본 조 바턴 · 연출 마크 브로젤",
    paragraphs: [
      "언덕에서 파리스가 스스로 목숨을 끊으려 합니다. 아마존의 펜테실레이아가 말리고 그를 트로이로 데려옵니다. 아프로디테는 심장이 한 번 멈추었으니 저주가 풀렸다고 말합니다. 왕가는 이길 수 있다고 믿고, 카산드라만 믿지 않습니다. 아마존이 헥토르보다 먼저 파리스 편에 서는 순서는 서사시권 『아이티오피스』와 다릅니다. 그 쪽 이야기에서 펜테실레이아는 헥토르가 죽은 뒤에 옵니다.",
      "아킬레우스가 싸우지 않는 틈에 헥토르와 파리스가 그리스의 보급을 끊습니다. 파트로클로스가 아킬레우스의 무장을 입고 나가 헥토르에게 죽습니다. [16권](/books/16)은 그 앞에 사르페돈, 아폴론, 에우포르보스를 겹칩니다. 아킬레우스는 복수로 나와 헥토르를 죽이고 시신을 성 밖으로 끌어갑니다. [22권](/books/22)의 죽음과 시신 모독이 이 한 회에 모입니다. 안드로마케가 그 싸움을 지켜보고, 이 무렵 [아스튀아낙스](/heroes/astyanax)를 낳습니다. 6권의 작별에서 그 아이는 이미 젖먹이입니다. 판다로스의 배신을 헥토르는 믿으려 하지 않습니다.",
    ],
  },
  {
    n: 7,
    slug: "twelve-days",
    titleKo: "열두 날",
    titleEn: "Twelve Days",
    netflixKo: "폭풍전야",
    air: "2018년 3월 31일",
    credit: "각본 데이비드 파 · 연출 존 스트리클랜드",
    paragraphs: [
      "아킬레우스가 헥토르의 시신을 돌려주지 않습니다. 프리아모스가 밤중에 그리스 진영으로 들어가 몸값을 청합니다. 이 밤이 [24권](/books/24)이고, [프리아모스와 아킬레우스](/scenes#priam)로도 적어 둔 장면입니다. 성 안에서는 안드로마케가 헬레네를 이 전쟁의 원인으로 지목하고, 파리스는 성부터 지키겠다고 말합니다. 크산티오스는 자신이 돌보던 아이에게 배신당해 아이네이아스와 파리스에게 심문을 받습니다. 헬레네는 그를 풀어 주고, 성 사람들의 안전을 대가로 자신을 내놓습니다.",
      "열두 날의 애도 휴전이 정해집니다. 아가멤논과 메넬라오스, 마지못한 오디세우스가 테르시테스를 시켜, 트로이가 휴전을 깼다고 아킬레우스를 속입니다. 아킬레우스는 다시 싸우며 펜테실레이아와 아마존을 죽이고, 성문 앞에서 프리아모스와 마주칩니다. 파리스의 화살이 발뒤꿈치에 박히고 아킬레우스는 죽습니다. 『일리아스』가 끝날 때 아킬레우스는 살아 있습니다. 시의 마지막은 [헥토르의 장례](/scope#funeral)입니다. 오디세우스는 아킬레우스를 사랑했다고 말하고 전쟁을 끝내고 싶어 합니다. 제우스는 신들이 운명의 방향을 바꾸지 못한다고 말합니다. 저주가 풀렸다는 아프로디테의 말은 여기서 거짓으로 드러납니다. 브리세이스는 아가멤논에게, 그의 차례도 온다는 말을 전합니다.",
    ],
  },
  {
    n: 8,
    slug: "offering",
    titleKo: "제물",
    titleEn: "Offering",
    netflixKo: "신의 제물",
    air: "2018년 4월 7일",
    credit: "각본 데이비드 파 · 연출 존 스트리클랜드",
    paragraphs: [
      "그리스 진영이 비고, 포세이돈에게 바치는 제물처럼 보이는 목마가 바닷가에 남습니다. 안에는 곡식과 포도주가 들어 있어 굶주린 트로이가 성 안으로 들입니다. 의심하는 사람도 있습니다. [목마와 함락](/scope#horse)은 『일리아스』에 없고, 『작은 일리아스』와 『일리우 페르시스』, 『오디세이아』가 전합니다. 말을 곡식 창고로 만들어 들이게 하는 이유는 이 드라마의 각색입니다. 카산드라는 경고하나 받아들여지지 않습니다. 24권의 카산드라는 프리아모스가 시신과 함께 돌아오는 것을 먼저 보는 사람이고, 예언을 믿지 못하는 저주는 그 뒤 비극에서 분명해집니다.",
      "함락의 밤에 메넬라오스가 파리스를 죽입니다. 헬레네는 왕가를 지키려 했으나 그 죽음 앞에 서고, 메넬라오스는 무너진 명예의 탓을 헬레네에게 돌린 채 그를 스파르테로 데려갑니다. 『오디세이아』 4권에서 두 사람은 이미 스파르테에 있습니다. 시는 그 귀환을 이 드라마처럼 끝내지 않습니다. 오디세우스는 아가멤논의 명령과, 아내와 아이들에게 향할 협박 앞에서 아스튀아낙스를 성에서 떨어뜨립니다. 안드로마케가 저주하고, 오디세우스는 귀향의 배에 오릅니다. [그 10년](/scope#odyssey)은 이 작품의 밖입니다. 헤카베는 스스로 목숨을 끊습니다. 아이네이아스는 살아남은 남자 가운데 남고, 이탈리아로 가는 [『아이네이스』의 항해](/scope#aeneid)는 이 회의 밖입니다. 크산티오스는 자신을 살려 주지 않으려 했던 왕가 쪽을 오히려 살려 보냅니다. 브리세이스는 불타는 성에 닿습니다. 아프로디테가 파리스의 주검 앞에서 울고, 헤라와 아테나가 그 곁에 있으며, 제우스는 불타는 성을 멀리서 봅니다.",
    ],
  },
];

export type TroyDifference = {
  id: string;
  title: string;
  body: string;
  tradition?: boolean;
  links: readonly LinkItem[];
};

export const troyDifferences: readonly TroyDifference[] = [
  {
    id: "span",
    title: "51일이 아니라 전쟁 전체",
    body: "여덟 회는 심판과 출발에서 포위와 함락까지를 한 줄로 잇습니다. 『일리아스』는 전쟁이 10년째로 접어든 해의 약 51일, 아킬레우스의 분노에서 헥토르의 장례까지입니다. 드라마의 소개는 10년 포위를 말하지만, 회차 안에서는 그 햇수가 해마다 흘러가지 않고 시작과 끝이 붙어 진행됩니다.",
    links: [
      { href: "/timeline", label: "51일" },
      { href: "/why", label: "왜 51일만" },
      { href: "/scope", label: "나오는 것 · 안 나오는 것" },
    ],
  },
  {
    id: "gods",
    title: "신들이 사람 사이로 걸어 들어옴",
    body: "헤라, 아테나, 아프로디테, 제우스, 아르테미스가 사람 모습으로 나와 말로 개입합니다. 『일리아스』의 신도 전장과 침실에 손을 대지만, 8권에서 제우스가 개입을 막은 금지는 곧 깨집니다. 이 드라마의 제우스는 한동안 거리를 두다가, 후반에는 신들이 운명을 바꾸지 못한다고 말합니다.",
    links: [
      { href: "/heroes/zeus", label: "제우스" },
      { href: "/heroes/aphrodite", label: "아프로디테" },
      { href: "/books/8", label: "8권" },
    ],
  },
  {
    id: "helen-will",
    title: "헬레네는 궤짝에 숨어 스스로 떠남",
    body: "드라마의 헬레네는 혼인의 상에서 벗어나려 파리스와 함께 가기를 고릅니다. 『일리아스』 3권의 헬레네는 이미 트로이에 있고, 자신과 파리스를 원망하며 후회를 말합니다. 스스로 따라갔는지, 끌려갔는지, 진짜 몸 대신 형상만 트로이에 있었는지는 이야기가 갈립니다. 형상만 갔다는 쪽은 스테시코로스와 헤로도토스, 에우리피데스 『헬레네』에 가깝습니다.",
    tradition: true,
    links: [
      { href: "/heroes/helen", label: "헬레네" },
      { href: "/scope#abduction", label: "데려온 일은 키프리아" },
      { href: "/books/3", label: "3권" },
    ],
  },
  {
    id: "hermione",
    title: "헤르미오네와의 혼담",
    body: "프리아모스가 파리스를 보낸 표면의 이유는 헬레네의 딸 헤르미오네와의 혼담입니다. 메넬라오스는 약혼을 넌지시 말합니다. 전승의 헤르미오네는 전쟁 뒤 오레스테스와 네오프톨레모스 이야기 속의 딸이지, 파리스가 청혼하러 간 공주가 아닙니다.",
    links: [
      { href: "/heroes/paris", label: "파리스" },
      { href: "/heroes/menelaus", label: "메넬라오스" },
    ],
  },
  {
    id: "straits",
    title: "해협의 통행권",
    body: "아가멤논은 헬레네와 함께 헬레스폰토스(지금의 다르다넬스) 해협의 통행권을 내놓으라고 합니다. 프리아모스는 금으로 일을 덮으려 합니다. 『일리아스』의 그리스 진영이 이미 포위 중인 까닭은 헬레네와, 그 전에 맺었다는 구혼자들의 맹세 쪽입니다. 1권의 다툼은 브리세이스입니다.",
    links: [
      { href: "/heroes/agamemnon", label: "아가멤논" },
      { href: "/scope#quarrel", label: "브리세이스의 다툼" },
    ],
  },
  {
    id: "iphigenia",
    title: "이피게네이아와 미친 척",
    body: "비둘기 제물을 아르테미스가 거절한 뒤 이피게네이아가 죽습니다. 오디세우스의 미친 척은 쟁기 앞의 아이로 들통납니다. 둘 다 출항 전의 앞이야기라 『일리아스』 밖에 있습니다. 제물 이야기는 『키프리아』와 에우리피데스 쪽이고, 미친 척을 들추는 사람은 보통 팔라메데스, 아이는 아들 텔레마코스입니다. 제물 뒤 아가멤논이 집에서 죽는 이야기는 [클리타임네스트라](/heroes/clytemnestra)의 복수로 『오디세이아』 11권과 비극에 있고, 이 8회는 거기까지 가지 않습니다.",
    links: [
      { href: "/heroes/odysseus", label: "오디세우스" },
      { href: "/heroes/clytemnestra", label: "클리타임네스트라" },
    ],
  },
  {
    id: "cilicia",
    title: "킬리키아와 에에티온의 때",
    body: "헥토르와 파리스가 군량을 구하러 간 킬리키아를, 헬레네에게서 새어 나간 말 뒤에 아킬레우스가 칩니다. 에에티온이 그때 죽습니다. 『일리아스』가 열릴 때 이 약탈은 이미 지난 일이고, 안드로마케는 6권에서 그 죽음을 이미 알고 있습니다. 크리세이스와 브리세이스를 그 한 번의 약탈에서 함께 데려오는 묶음도 드라마의 압축입니다.",
    links: [
      { href: "/heroes/andromache", label: "안드로마케" },
      { href: "/books/6", label: "6권" },
      { href: "/scenes#farewell", label: "헥토르와 안드로마케" },
    ],
  },
  {
    id: "lovers",
    title: "아킬레우스, 파트로클로스, 브리세이스",
    body: "드라마는 아킬레우스와 파트로클로스를 연인으로 보여주고, 브리세이스를 그 막사의 사람으로 붙입니다. 브리세이스에게는 오라비가 있고, 그 오라비는 돌론과 겹칩니다. 『일리아스』는 둘을 벗으로 적고, 23권은 뼈를 함께 두라고 합니다. 연인으로 읽는 쪽은 아이스킬로스의 『뮈르미돈』과 플라톤 『향연』 같은 후대의 읽기입니다. 브리세이스는 19권에서 파트로클로스를 곡하는 포로이지, 돌론의 누이가 아닙니다.",
    tradition: true,
    links: [
      { href: "/heroes/patroclus", label: "파트로클로스" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/books/19", label: "19권" },
    ],
  },
  {
    id: "duel",
    title: "결투 뒤 파리스는 침실이 아니라 언덕으로",
    body: "메넬라오스와의 결투에서 진 파리스를 아프로디테가 빼내지만, 그는 헬레네의 침실이 아니라 쫓기는 몸으로 언덕에 남습니다. 3권은 안개에 실려 침실로 돌아가고, 아프로디테가 헬레네를 그 침대로 보냅니다. 그 뒤 파리스가 옛 연인 오이노네에게 거절당하는 장면도 시에 없습니다. 오이노네가 이다 산의 님프로 파리스의 첫 아내였다는 말은 후대에 붙습니다.",
    tradition: true,
    links: [
      { href: "/books/3", label: "3권의 결투" },
      { href: "/heroes/paris", label: "파리스" },
    ],
  },
  {
    id: "amazon",
    title: "아마존이 오는 때",
    body: "펜테실레이아는 파리스의 자살 기도를 막고 그를 성으로 데려온 뒤, 아킬레우스에게 죽습니다. 그 사이 헥토르가 죽습니다. 『아이티오피스』의 순서에서는 헥토르의 장례 뒤에 아마존이 트로이를 돕러 오고, 아킬레우스가 펜테실레이아를 죽입니다.",
    links: [
      { href: "/scope#heel", label: "시 밖의 뒷이야기" },
      { href: "/heroes/hector", label: "헥토르" },
    ],
  },
  {
    id: "astyanax-born",
    title: "아스튀아낙스는 헥토르가 죽을 무렵에 태어남",
    body: "안드로마케는 아버지 에에티온의 죽음을 들은 회에 임신을 알고, 헥토르가 죽는 회에 아스튀아낙스를 낳습니다. 6권의 작별에서 아이는 이미 아버지 무릎에 있고, 투구를 보고 웁니다. 드라마는 그 아이와 아버지의 나날을 보여 주지 않습니다.",
    links: [
      { href: "/heroes/astyanax", label: "아스튀아낙스" },
      { href: "/scenes#farewell", label: "6권의 작별" },
    ],
  },
  {
    id: "truce-trick",
    title: "열두 날의 휴전을 속임으로 깸",
    body: "프리아모스가 몸값을 청하는 밤 뒤에, 열두 날의 애도가 휴전이 됩니다. 아가멤논 쪽은 테르시테스를 시켜 트로이가 휴전을 깼다고 아킬레우스를 속이고, 아킬레우스는 명예를 버린 채 다시 싸움터에 섭니다. 『일리아스』 19권은 아가멤논과 아킬레우스가 화해하고 브리세이스가 돌아가는 쪽입니다. 24권의 열두 날은 신들이 시신을 두고 다투다 프리아모스가 떠나는 날, 그리고 장례의 날수에 가깝고, 그리스가 그 휴전을 속여 깨는 계책은 없습니다. 2권의 테르시테스는 아가멤논을 욕하다 오디세우스에게 맞는 병사입니다.",
    links: [
      { href: "/books/19", label: "19권의 화해" },
      { href: "/books/24", label: "24권" },
      { href: "/books/2", label: "2권의 테르시테스" },
    ],
  },
  {
    id: "heel",
    title: "발뒤꿈치의 화살",
    body: "파리스의 화살이 성문 앞에서 아킬레우스의 발뒤꿈치에 박히고, 그는 아마존을 죽인 뒤에 죽습니다. 22권에서 헥토르가 예언할 뿐, 죽는 장면은 『일리아스』에 없습니다. 『아이티오피스』에서는 파리스와 아폴론이 스카이아 문에서 그를 죽입니다. 발목만 약했다는 말, 테티스가 스틱스 강에 담갔다는 말은 더 뒤의 정리입니다. 폴릭세네와 혼인한다며 아폴론 신전으로 유인된다는 죽음도 따로 전해집니다. 드라마는 그 신전 혼인이 아니라 깨진 휴전 뒤의 화살을 택합니다.",
    tradition: true,
    links: [
      { href: "/scope#heel", label: "발뒤꿈치는 시 밖에" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/books/22", label: "22권의 예언" },
    ],
  },
  {
    id: "horse-grain",
    title: "곡식을 채운 목마",
    body: "오디세우스의 목마는 포세이돈에게 바치는 제물로 바닷가에 남고, 안에는 곡식과 포도주가 들어 있습니다. 굶주린 성이 그래서 말을 들입니다. 서사시권의 말은 아테나에게 바치는 봉납에 가깝고, 시논과 라오콘, 카산드라의 말이 그 밤을 가릅니다. 곡식 창고로 만든 속은 이 작품의 이유입니다.",
    links: [
      { href: "/scope#horse", label: "목마는 시 밖에" },
      { href: OUT.mythHorse, label: "나두신화 · 목마" },
    ],
  },
  {
    id: "paris-dies",
    title: "파리스는 함락의 밤에 메넬라오스에게 죽습니다",
    body: "메넬라오스가 성이 무너지는 밤에 파리스를 죽이고 헬레네를 데려갑니다. 서사시권에서 파리스의 죽음은 함락보다 앞이고, 필록테테스가 헤라클레스의 활로 쏜 화살에 죽는 쪽이 보통입니다. 『일리아스』는 파리스의 죽음도 헬레네의 귀환도 끝내지 않습니다.",
    links: [
      { href: "/heroes/paris", label: "파리스" },
      { href: "/heroes/menelaus", label: "메넬라오스" },
      { href: "/scope#horse", label: "함락은 시 밖에" },
    ],
  },
  {
    id: "child",
    title: "아스튀아낙스를 죽이는 손",
    body: "오디세우스가 아가멤논의 명령으로 아스튀아낙스를 성에서 떨어뜨립니다. 아내와 아이에게 미칠 벌을 피하려는 이유가 붙어 있습니다. 아이를 성벽에서 던지는 일은 함락 이야기에 있으나, 그 손이 누구인지는 이야기가 갈립니다. 오디세우스가 죽음을 제안하고, 아킬레우스의 아들 네오프톨레모스가 던진다는 쪽도 전해집니다. 안드로마케가 네오프톨레모스의 포로가 되는 비극의 뒤도 이 회는 오디세우스의 손에 모읍니다.",
    tradition: true,
    links: [
      { href: "/heroes/astyanax", label: "아스튀아낙스" },
      { href: "/heroes/andromache", label: "안드로마케" },
      { href: "/heroes/odysseus", label: "오디세우스" },
    ],
  },
  {
    id: "hecuba",
    title: "헤카베는 스스로 목숨을 끊음",
    body: "함락의 밤에 헤카베가 자살합니다. 에우리피데스 『트로이의 여인들』에서 헤카베는 그 밤을 지나 포로로 남고, 『헤카베』에서는 개의 모습으로 변할 것이 예언됩니다. 드라마의 마지막은 그 포로 행렬이 아닙니다.",
    links: [
      { href: "/heroes/hecuba", label: "헤카베" },
      { href: "/movies#trojan-women-1971", label: "영화 『트로이의 여인들』" },
    ],
  },
  {
    id: "aeneas",
    title: "아이네이아스는 살아남으나 로마로 가지 않음",
    body: "아이네이아스는 함락의 생존자로 남습니다. 드라마는 그를 아프로디테의 아들로 내세우지 않습니다. 『일리아스』 5권과 20권은 아프로디테의 아들이라고 말하고, 20권은 그의 자손이 트로이 사람을 이끈다고 합니다. 카르타고와 라티움, 로마의 조상으로 가는 길은 [『아이네이스』](/scope#aeneid)의 몫이고 이 8회의 밖입니다.",
    links: [
      { href: "/heroes/aeneas", label: "아이네이아스" },
      { href: "/family-tree?tree=aeneas&focus=aeneas", label: "가족관계도" },
      { href: OUT.romeAeneas, label: "로마이야기 · 아이네이아스" },
    ],
  },
];

export const troyReception: readonly TroyDifference[] = [
  {
    id: "casting",
    title: "배역을 둘러싼 논쟁",
    body: "아킬레우스(데이비드 기아시), 제우스(하킴 카에카짐), 파트로클로스(레모강 치파), 아이네이아스(앨프리드 에노크)를 흑인 배우가 맡았습니다. 방송 전후로 이 선택이 논쟁의 중심이 되었습니다. 이 글은 어느 쪽의 결론도 고르지 않습니다.",
    links: [
      { href: "https://variety.com/2018/tv/news/troy-fall-of-a-city-casting-diversity-bbc-netflix-1202707708/", label: "버라이어티 · 제작진의 말" },
      { href: "https://www.radiotimes.com/tv/drama/troy-fall-of-a-city-blackwashing-casting-black-actors-greek-myth/", label: "라디오타임스 · 양쪽의 말" },
      { href: "https://pharos.vassarspaces.net/2018/05/11/scholars-respond-to-racist-backlash-against-black-achilles-part-1-ancient-greek-attitudes-toward-africans/", label: "파로스 · 반응 기록" },
    ],
  },
  {
    id: "casting-text",
    title: "시 구절을 든 쪽",
    body: "반대하는 쪽은 시의 묘사와 맞지 않는다고 했습니다. [1.197](/books/1)과 [23.141](/books/23)은 아킬레우스의 머리카락을 크산토스(ξανθός)라고 하고, 이 단어는 흔히 금빛이나 밝은색으로 옮겨집니다. 소셜 미디어에는 그래서 흑인 배우가 맡을 수 없다는 글이 올라왔습니다. 그리스계 매체 그리스 리포터는 이 선택을 문화적 수정과 정치적 올바름이라고 비판했습니다. 파로스는 그 반응 가운데 욕설과 인종 비방, 인종차별 사이트의 글이 섞여 있었다고 기록합니다. 라디오타임스가 인용한 글에는 유럽의 문화를 지운다는 음모론도 있었습니다.",
    links: [
      { href: "/books/1", label: "1.197이 있는 1권" },
      { href: "/books/23", label: "23.141이 있는 23권" },
      { href: "https://greekreporter.com/2018/03/15/bbcs-controversial-troy-fall-of-a-city-ratings-continue-to-tank/", label: "그리스 리포터 · 비판" },
      { href: "https://pharos.vassarspaces.net/2018/05/18/scholars-respond-to-racist-backlash-against-black-achilles-part-2-what-did-achilles-look-like/", label: "파로스 · 크산토스" },
    ],
  },
  {
    id: "casting-reply",
    title: "신화의 자유라고 한 쪽",
    body: "기획 데이비드 파는 버라이어티에서, 신화라 배역의 폭이 넓고 아킬레우스를 에티오피아 사람이라고 주장하는 것이 아니라 그 역에 맞는 사람을 고른 것이라고 말했습니다. 제작 데릭 왁스는 다양성이 BBC와 넷플릭스 배역의 중심이고, 논쟁을 만들려는 쪽에서 논쟁이 된다고 말했습니다. 케임브리지의 팀 휘트마쉬는 라디오타임스 인터뷰에서, 오늘의 흑백 구분이 고대 그리스의 구분이 아니고, 크산토스가 금발이라는 한 뜻으로만 읽히지 않으며, 제우스는 모습을 바꾸는 신이라고 설명했습니다. 파로스는 말의 대부분이 아킬레우스에게 몰렸고, 제우스·아테나·아이네이아스·파트로클로스·네스토르는 덜 다뤄졌다고 적습니다. 팝매터스는 아이네이아스 배역이 덜 말해졌지만 무게가 있다고 보았습니다.",
    links: [
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/heroes/zeus", label: "제우스" },
      { href: "/heroes/patroclus", label: "파트로클로스" },
      { href: "/heroes/aeneas", label: "아이네이아스" },
      { href: "https://www.popmatters.com/troy-fall-of-a-city-2579452784.html", label: "팝매터스 · 아이네이아스" },
    ],
  },
  {
    id: "ratings",
    title: "평점과 시청률",
    body: "평점은 모이는 대로 바뀝니다. 아래는 2026년 10월에 연 페이지의 숫자입니다. 로튼토마토 시즌 1 비평가 지수는 리뷰 24편으로 67%이고, 관객 지수는 500건이 넘는 표시로 22%입니다. 비평가 요약은, 청동기의 수레바퀴를 새로 만들지는 않지만 왕가와 신의 음모는 볼 만하다는 쪽에 가깝습니다. IMDb 시리즈 점수는 10점 만점에 4.1이고, 표시된 표는 약 16,000입니다. 같은 사이트의 회차 점수는 이보다 높게 나와 있어, 두 숫자는 다른 집계입니다. 버라이어티는 2018년 2월 17일 1화의 BBC One 시청자를 320만, 점유율을 18.2%로 전했습니다. 선데이 텔레그래프는 2018년 6월, 시리즈 평균 시청자를 230만, 제작비를 1,600만 파운드로 적었습니다.",
    links: [
      { href: "https://www.rottentomatoes.com/tv/troy_fall_of_a_city/s01", label: "로튼토마토 · 시즌 1" },
      { href: "https://www.imdb.com/title/tt5103758/ratings/", label: "IMDb · 평점" },
      { href: "https://variety.com/2018/tv/news/troy-fall-of-a-city-casting-diversity-bbc-netflix-1202707708/", label: "버라이어티 · 1화 320만" },
      { href: "https://www.telegraph.co.uk/news/2018/06/30/bbc1-audience-figures-lowest-16-years-saturday-night-drama-experiment/", label: "텔레그래프 · 평균 230만" },
    ],
  },
  {
    id: "ratings-four",
    title: "4화 160만이라는 보도",
    tradition: true,
    body: "더 선과 그리스 리포터는 4화 시청자를 160만으로 전했습니다. 이 글은 BARB 원표를 대조하지 못했습니다. 160만이 공식 확정 숫자인지는 전해지는 이야기입니다.",
    links: [
      { href: "https://www.thesun.co.uk/tvandshowbiz/5782956/troy-fall-of-a-city-flops-as-just-1-6m-tune-in-to-bbcs-16million-bonkbuster/", label: "더 선 · 4화 보도" },
      { href: "https://greekreporter.com/2018/03/15/bbcs-controversial-troy-fall-of-a-city-ratings-continue-to-tank/", label: "그리스 리포터 · 같은 숫자" },
    ],
  },
  {
    id: "criticism",
    title: "각색과 성애 장면에 대한 말",
    body: "신화를 바꾼 자리에 대한 평도 갈렸습니다. 로튼토마토에 실린 뉴 스테이츠먼의 짧은 인용은, 이야기를 지루할 만큼 21세기처럼 만들었다고 합니다. 인디와이어의 짧은 평은 볼 만하기보다 무난하다는 쪽이고 B-입니다. 같은 페이지에서 데일리 메일은 5점 만점에 4점을 주고, 어른을 위한 공들인 재이야기라고 보았습니다. 아트 데스크는 인물이 밋밋하고 대사가 평범하다고 했습니다. 성애 장면은 따로 말이 나왔습니다. 더 선은 시청률 기사에서 이 작품을 성애 중심의 드라마로 불렀습니다. 로튼토마토의 관객 글에는 해변의 정사를 거부하는 의견이 있습니다. 그 글은 집계된 평점이 아니라 개인 의견입니다. 학술지 『헤로도투』의 한 논문은 아킬레우스, 파트로클로스, 브리세이스가 함께하는 장면을 두고, 공개된 반응은 그 장면보다 배역의 피부색에 더 몰렸다고 적습니다. 시와 다른 자리는 [위 칸](#differences)에 모아 두었습니다.",
    links: [
      { href: "#differences", label: "신화와 다른 점" },
      { href: "https://www.rottentomatoes.com/tv/troy_fall_of_a_city/s01", label: "로튼토마토 · 평론 인용" },
      { href: "https://periodicos.unifesp.br/index.php/herodoto/article/view/13791", label: "헤로도투 · 논문" },
    ],
  },
  {
    id: "one-season",
    title: "한 시즌에서 끝남",
    body: "2018년 2월 17일부터 4월 7일까지 여덟 회가 방송된 것이 전부입니다. 방송 중인 2월, 데릭 왁스는 버라이어티에서 두 번째 시즌의 생각이 있고 호메로스는 『오디세이아』도 썼다고 말했습니다. 2026년 10월에 본 로튼토마토는 시즌을 하나로 적습니다. 두 번째 시즌은 나오지 않았습니다.",
    links: [
      { href: "https://variety.com/2018/tv/news/troy-fall-of-a-city-casting-diversity-bbc-netflix-1202707708/", label: "버라이어티 · 다음 시즌 구상" },
      { href: "https://www.rottentomatoes.com/tv/troy_fall_of_a_city", label: "로튼토마토 · 시즌 1" },
      { href: "/scope#odyssey", label: "귀향은 다른 시" },
    ],
  },
  {
    id: "cancellation-notice",
    title: "취소라는 발표는 확인하지 못함",
    tradition: true,
    body: "한 시즌으로 끝났다는 사실과, 방송사가 ‘취소한다’고 발표했다는 말은 다릅니다. BBC나 넷플릭스가 날짜를 정해 취소했다고 적은 발표문은 이 글이 찾지 못했습니다. 그 발표가 있었다는 말은 전해지는 이야기입니다.",
    links: [],
  },
];

export const troySeeAlso: readonly LinkItem[] = [
  { href: "/movies/troy-missing", label: "영화 트로이에서 빠진 이야기" },
  { href: "/movies#troy-fall-of-a-city-2018", label: "영화 목록의 짧은 카드" },
  { href: "/movies#troy-2004", label: "2004년 영화 『트로이』" },
  { href: "/generals", label: "시의 장수" },
  { href: "/family-tree", label: "네 집의 가족관계도" },
  { href: OUT.mythTrojanWar, label: "나두신화 · 트로이 전쟁" },
  { href: OUT.mythJudgment, label: "나두신화 · 파리스의 심판" },
  { href: OUT.greeceTroySeries, label: "그리스이야기 · 같은 시리즈" },
];
