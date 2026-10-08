export type Scene = {
  id: string;
  book: string;
  bookHref: string;
  en: string;
  title: string;
  greek: string;
  greekNote: string;
  paraphrase: string;
  body: string;
  links: readonly { href: string; label: string }[];
};

export const scenes: readonly Scene[] = [
  {
    id: "opening",
    book: "1.1–7",
    bookHref: "/books/1",
    en: "Proem",
    title: "첫 줄, 분노를 노래하라",
    greek: "μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος / οὐλομένην, ἣ μυρί᾽ Ἀχαιοῖς ἄλγε᾽ ἔθηκε",
    greekNote: "『일리아스』 1.1–2",
    paraphrase:
      "노래하소서, 여신이여. 펠레우스의 아들 아킬레우스의 분노를. 그 파멸의 분노가 아카이아인들에게 수많은 고통을 안겼습니다.",
    body: "시의 주인공은 전쟁 10년이 아니라 한 사람의 분노입니다. 이어지는 줄은 그 분노가 많은 영웅의 혼을 하데스로 보내고, 개들의 밥이 되게 했다고 말합니다. 제우스의 뜻이 이루어지던 때부터 노래하라는 주문도 첫머리에 있습니다. 영어로는 보통 이렇게 옮깁니다. Sing, goddess, the wrath of Achilles, Peleus’ son.",
    links: [
      { href: "/why", label: "왜 분노인가" },
      { href: "/heroes/achilles", label: "아킬레우스" },
    ],
  },
  {
    id: "farewell",
    book: "6.390–502",
    bookHref: "/books/6",
    en: "The farewell",
    title: "헥토르와 안드로마케",
    greek: "δακρυόεν γελάσας",
    greekNote: "『일리아스』 6.484. 아이가 운 뒤 헥토르가 아내를 보는 자리",
    paraphrase:
      "투구의 말총이 흔들리자 아스튀아낙스가 울어 유모의 품으로 파고듭니다. 헥토르는 빛나는 투구를 벗어 땅에 두고 아들을 안은 뒤, 제우스와 다른 신들에게 빕니다. 이 아이가 나보다 뛰어나고, 전리품을 가지고 돌아올 때 사람들이 아버지보다 낫다고 말하게 하소서.",
    body: "스카이아 문 앞의 장면입니다. 안드로마케는 아버지와 형제를 아킬레우스에게 잃었다고 말하고, 헥토르에게 성벽 쪽으로 싸우라고 청합니다. 헥토르는 트로이 사람들이 자기를 겁쟁이라 할까 두려워 그 청을 받지 않습니다. 동시에 성이 무너지는 날을 이미 말합니다(6.447–465). 아이의 죽음은 이 장면에 없고, 어머니의 두려움만 있습니다. 헤라클레스의 후예라는 자랑보다, 투구를 벗는 손과 웃으며 우는 얼굴이 이 권의 중심입니다.",
    links: [
      { href: "/heroes/hector", label: "헥토르" },
      { href: "/heroes/andromache", label: "안드로마케" },
      { href: "/heroes/astyanax", label: "아스튀아낙스" },
    ],
  },
  {
    id: "shield",
    book: "18.478–608",
    bookHref: "/books/18",
    en: "The shield",
    title: "아킬레우스의 방패",
    greek: "Ἐν μὲν γαῖαν ἔτευξ᾽, ἐν δ᾽ οὐρανόν, ἐν δὲ θάλασσαν",
    greekNote: "『일리아스』 18.483",
    paraphrase:
      "헤파이스토스는 방패 위에 땅과 하늘과 바다, 해와 달과 별자리를 만들었습니다. 한 도시에서는 결혼과 재판이 열리고, 다른 도시에서는 포위와 매복이 있습니다. 밭을 갈고, 포도를 거두고, 소가 사자에게 습격당하고, 젊은이들이 춤을 춥니다. 가장 바깥은 오케아노스 강입니다.",
    body: "파트로클로스가 아킬레우스의 갑옷을 입은 채 죽어, 그 갑옷은 헥토르에게 가 있습니다. 테티스가 대장장이 신에게 새 무구를 청하고, 신은 하룻밤에 방패를 두드립니다. 방패는 무기 목록이 아니라 사람 사는 세상의 원입니다. 평화와 전쟁이 같은 원에 있습니다. 이 묘사는 길어서, 여기서는 장면의 뼈만 풀었습니다.",
    links: [
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/heroes/thetis", label: "테티스" },
      { href: "/books/18", label: "18권" },
    ],
  },
  {
    id: "priam",
    book: "24.477–551",
    bookHref: "/books/24",
    en: "Ransom",
    title: "프리아모스와 아킬레우스",
    greek: "ἀνδρὸς παιδοφόνοιο ποτὶ στόμα χεῖρ᾽ ὀρέγεσθαι",
    greekNote: "『일리아스』 24.506. 자식을 죽인 사람의 손에 입을 맞춘다는 말",
    paraphrase:
      "프리아모스는 아킬레우스의 무릎을 안고, 펠레우스를 떠올리라고 말합니다. 그도 문 앞에서 자식을 기다리는 아버지입니다. 나는 아무도 참지 못한 일을 참습니다. 자식을 죽인 사람의 손에 입을 맞춥니다. 아킬레우스는 아버지와 파트로클로스를 생각하고, 둘은 함께 웁니다.",
    body: "헤르메스가 밤길로 프리아모스를 안내한 뒤의 막사입니다. 아킬레우스는 몸값을 받고 시신을 정결하게 돌려줍니다. 적을 용서해서가 아니라, 자기 아버지 펠레우스가 멀리 있다는 사실과 마주칩니다. 시의 분노는 여기서 식사의 자리까지 내려앉고, 다음 장면은 트로이 성의 곡과 화장입니다. 화해로 전쟁이 끝나는 결말은 아닙니다. 열두째 날 다시 싸울 수 있다는 말만 남고 시가 닫힙니다.",
    links: [
      { href: "/heroes/priam", label: "프리아모스" },
      { href: "/heroes/achilles", label: "아킬레우스" },
      { href: "/timeline#priam", label: "29–51일" },
    ],
  },
];
