import { OUT } from "@/lib/site";
import type { Movie } from "@/data/types";

export const movies: readonly Movie[] = [
  {
    slug: "troy-2004",
    titleKo: "트로이",
    titleOriginal: "Troy",
    year: "2004",
    director: "볼프강 페테르센",
    kind: "영화",
    faithful:
      "이름은 일리아스의 사람들입니다. 아킬레우스, 헥토르, 파리스, 헬레네, 아가멤논, 메넬라오스, 프리아모스, 오디세우스. 그러나 10년 전쟁을 몇 주로 누르고, 신들이 거의 빠지며, 목마와 함락까지 한 편에 넣습니다.",
    note: "영화에서 헥토르가 메넬라오스를 죽이고, 함락의 밤에 브리세이스가 아가멤논을 죽입니다. 『일리아스』가 끝날 때 두 사람은 살아 있습니다. 메넬라오스는 『오디세이아』 4권에서 헬레네와 스파르테에 있고, 아가멤논의 집에서의 죽음은 『오디세이아』 11권과 후대 비극의 이야기입니다. 파트로클로스를 사촌으로 그린 것도 시의 가계와 다릅니다. 시는 그를 메노이티오스의 아들, 펠레우스의 집에 맡겨진 벗으로 적습니다. 아킬레우스가 목마의 날까지 살아 있는 순서도, 그가 함락 전에 죽는 『아이티오피스』의 전승과 다릅니다.",
    watch: "워너 브라더스가 2004년 극장에 걸었습니다. 지금 어느 서비스에 있는지는 지역마다 달라 주소를 적지 않습니다.",
    links: [
      { href: "/scope#heel", label: "발뒤꿈치는 시 밖에" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/heroes/hector", label: "헥토르" },
      { href: OUT.mythMediaTroy, label: "나두신화 · 같은 영화" },
      { href: OUT.greeceTroyFilm, label: "그리스이야기 · 트로이" },
    ],
  },
  {
    slug: "helen-of-troy-1956",
    titleKo: "헬레네 오브 트로이",
    titleOriginal: "Helen of Troy",
    year: "1956",
    director: "로버트 와이즈",
    kind: "영화",
    faithful:
      "크레딧은 호메로스의 서사시를 가리킵니다. 실제로 따라가는 것은 51일이 아니라, 파리스가 스파르테에 닿고 헬레네가 트로이로 가는 전쟁 전체의 틀입니다.",
    note: "로사나 포데스타가 헬레네, 자크 세르나스가 파리스를 맡았습니다. 미국에서는 1956년 1월 26일 워너 브라더스가 개봉했습니다. 파리스가 등 뒤에서 찔리고 헬레네가 메넬라오스에게 돌아가는 결말은 시의 24권과 다른 각색입니다. 『일리아스』는 파리스의 죽음도, 헬레네의 귀환도 끝내지 않습니다.",
    watch: "1956년 극장 개봉작입니다. 오늘 합법적으로 어디서 볼 수 있는지는 여기서 단정하지 않습니다.",
    links: [
      { href: "/heroes/helen", label: "헬레네" },
      { href: "/heroes/paris", label: "파리스" },
      { href: "/scope#abduction", label: "데려온 일은 키프리아" },
    ],
  },
  {
    slug: "helen-of-troy-2003",
    titleKo: "헬레네 오브 트로이",
    titleOriginal: "Helen of Troy",
    year: "2003",
    director: "존 켄트 해리슨",
    kind: "시리즈",
    faithful:
      "USA 네트워크가 2003년 4월 20일 내보낸 미니시리즈로, 소개는 『일리아스』를 내세웁니다. 줄기는 시의 51일보다 넓습니다. 테세우스, 파리스의 심판, 10년 전쟁, 아킬레우스의 죽음이 한 작품 안에 있습니다.",
    note: "시에나 기요리가 헬레네, 매슈 마스던이 파리스를 맡았고, 론니 컨이 썼습니다. 발뒤꿈치를 화살로 맞히는 결말은 『아이티오피스』와 그 뒤 전승의 화면이지, 22권의 재연이 아닙니다. 1956년 같은 제목의 영화와 다른 작품입니다.",
    watch: "2003년 USA 네트워크에서 방송되었습니다. 현재 전송 주소는 적지 않습니다.",
    links: [
      { href: "/scope#judgment", label: "심판은 시 밖에" },
      { href: "/scope#heel", label: "아킬레우스의 죽음" },
      { href: OUT.mythJudgment, label: "나두신화 · 심판" },
    ],
  },
  {
    slug: "troy-fall-of-a-city-2018",
    titleKo: "트로이: 폴 오브 어 시티",
    titleOriginal: "Troy: Fall of a City",
    year: "2018",
    director: "데이비드 파 외",
    kind: "시리즈",
    faithful:
      "데이비드 파가 만들고 BBC One과 넷플릭스가 함께 낸 8부작입니다. 파리스의 출생과 심판에서 시작해 포위와 함락까지 가며, 시점을 트로이 왕가 쪽에 둡니다. 『일리아스』 한 편의 각색이 아닙니다.",
    note: "영국 BBC One에서 2018년 2월 17일부터 방송되었고, 영국 밖에서는 넷플릭스가 공개했습니다. 신, 헬레네와 파리스의 나날, 성의 함락이 이야기의 뼈대입니다. 51일의 분노만 떼어 놓은 구조와는 다릅니다. 연출은 오언 해리스, 마크 브로젤 등이 나눴습니다.",
    watch: "처음 공개된 곳은 BBC One과 넷플릭스입니다. 오늘 어느 목록에 남아 있는지는 지역마다 달라 링크를 두지 않습니다.",
    links: [
      { href: "/scope#horse", label: "함락은 시 밖에" },
      { href: "/heroes/paris", label: "파리스" },
      { href: "/heroes/helen", label: "헬레네" },
      { href: OUT.mythTrojanWar, label: "나두신화 · 전쟁 이야기" },
    ],
  },
  {
    slug: "trojan-women-1971",
    titleKo: "트로이의 여인들",
    titleOriginal: "The Trojan Women",
    year: "1971",
    director: "미할리스 카코야니스",
    kind: "영화",
    faithful:
      "원작은 호메로스가 아니라 에우리피데스의 비극 『트로이의 여인들』(기원전 415년)입니다. 성이 이미 함락된 뒤, 포로가 된 여인들의 하루입니다.",
    note: "카트린 헵번이 헤카베, 버네사 레드그레이브가 안드로마케, 주느비에브 뷔졸드가 카산드라, 이리니 파파스가 헬레네를 맡았습니다. 아스튀아낙스의 죽음이 이 전통의 중심에 있습니다. 『일리아스』 6권은 그 죽음을 두려워할 뿐 보여 주지 않습니다. 24권의 장례 뒤에 이어지는 밤이라고 보면 순서가 어긋납니다. 비극은 함락 이후입니다.",
    watch: "1971년 극장 영화입니다. 현재 볼 수 있는 합법적 주소는 적지 않습니다.",
    links: [
      { href: "/heroes/andromache", label: "안드로마케" },
      { href: "/heroes/hecuba", label: "헤카베" },
      { href: "/heroes/helen", label: "헬레네" },
      { href: "/scope", label: "시에 없는 함락" },
    ],
  },
  {
    slug: "odyssey-2026",
    titleKo: "오디세이",
    titleOriginal: "The Odyssey",
    year: "2026",
    director: "크리스토퍼 놀란",
    kind: "영화",
    faithful:
      "각색의 원작은 『일리아스』가 아니라 『오디세이아』입니다. 놀란이 쓰고 연출했고, 맷 데이먼이 오디세우스를 맡았습니다. 귀향의 신화 모험을 극장용으로 다시 짠 작품입니다.",
    note: "유니버설 픽처스가 2026년 7월 17일 미국과 영국 극장에 공개했습니다. 일리아스의 51일, 헥토르의 죽음, 프리아모스의 밤을 재연한 영화로 보면 작품이 어긋납니다. 오디세우스가 『일리아스』에 나오는 것은 사실이고, 그의 10년 귀향은 다른 시의 몫입니다.",
    watch: "2026년 7월 17일 극장 개봉이 확인됩니다. 그 뒤 어느 화면에서 볼 수 있는지는 여기서 단정하지 않습니다.",
    links: [
      { href: "/heroes/odysseus", label: "오디세우스" },
      { href: "/scope#odyssey", label: "오디세이아는 다른 시" },
      { href: OUT.mythOdyssey, label: "나두신화 · 오디세이아" },
      { href: OUT.greeceOdysseyFilm, label: "그리스이야기 · 같은 영화" },
    ],
  },
];

export function movieBySlug(slug: string) {
  return movies.find((movie) => movie.slug === slug);
}

export function moviesBySlugs(slugs: readonly string[]) {
  return slugs.map((slug) => movieBySlug(slug)).filter((movie): movie is Movie => Boolean(movie));
}
