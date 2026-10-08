# 일리아스이야기 (Iliad Stories)

호메로스의 『일리아스』가 어렵게 느껴지는 사람을 위해, 한국어로 짧게 정리한 정적 사이트입니다. 영어 제목은 짧게 두고, 설명은 한국어로 씁니다.

나두 — 나의 모든 일상을 AI와 함께

이 시는 트로이 전쟁 전체가 아닙니다. 10년째 해의 약 51일, 중심은 아킬레우스의 분노입니다.

## 메뉴

- **홈** `/`
- **51일** `/timeline` — 역병과 다툼부터 헥토르의 장례까지. 날짜는 재구성이라고 적습니다
- **24권** `/books`, `/books/1` … `/books/24`
- **인물** `/heroes`, `/heroes/[slug]` — 그리스군, 트로이군, 신들. 다른 사이트가 잇는 주소는 `/heroes/achilles`, `hector`, `agamemnon`, `patroclus`, `helen`, `paris`, `priam`, `odysseus`, `aeneas`
- **나오는 것** `/scope` — 시에 있는 장면과, 키프리아·아이티오피스·작은 일리아스·오디세이아·아이네이스의 장면
- **명장면** `/scenes` — 첫 줄, 6권, 18권, 24권. 한국어는 이 사이트의 풀이
- **왜 51일** `/why`
- **가족관계도** `/family-tree`
- **영화** `/movies` — `#troy-2004`, `#helen-of-troy-1956`, `#helen-of-troy-2003`, `#troy-fall-of-a-city-2018`, `#trojan-women-1971`, `#odyssey-2026`
- **호메로스** `/homer`
- **출처** `/sources`

## 개발

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. 페이지는 빌드 때 정적으로 생성됩니다.

`NEXT_PUBLIC_SITE_URL`의 기본값은 `https://iliad-stories.vercel.app`입니다. 방문자 수는 Abacus 네임스페이스 `iliad-stories`, 키 `visits`를 씁니다.

## 적는 기준

고대 기록의 권과 위치만 밝히고, 없는 인용문을 만들지 않습니다. 현대 번역의 문장을 옮기지 않습니다. 영화 제목은 확인된 작품만 쓰고, 작품을 볼 수 있는 불법 사이트는 안내하지 않습니다.
