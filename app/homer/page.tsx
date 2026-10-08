import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { OUT, PHILOSOPHY_NAME } from "@/lib/site";

const description =
  "호메로스는 누구인가. 일리아스와 오디세이아는 기원전 8세기 무렵 입으로 불리던 노래가 글로 모인 시에 가깝고, 한 사람이 다 썼는지는 아직 열리는 질문입니다. 눈먼 가수의 전기는 후대 전설입니다.";

export const metadata = pageMetadata({
  title: "호메로스는 누구?",
  description,
  path: "/homer",
});

export default function HomerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "호메로스", path: "/homer" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "호메로스" }]} />
      <PageHead
        kicker="HOMER"
        title="호메로스는 누구?"
        lead="짧은 답은 이것입니다. 『일리아스』와 『오디세이아』에 붙는 이름입니다. 그 사람이 언제 어디서 눈을 감고 살았는지는, 시보다 훨씬 나중의 이야기가 채웁니다."
      />
      <div className="mt-8 space-y-4">
        <GuideBlock
          en="The question"
          title="한 사람인지, 아직 열립니다"
          kind="mixed"
          summary="호메로스 문제라고 부르는 질문입니다. 두 시를 한 사람이 만들었는지, 같은 전통의 다른 가수들인지, 고대부터 의견이 갈립니다. 이 사이트는 한쪽으로 닫지 않습니다."
          points={[
            "두 시는 언어와 신의 세계가 닮아 한 전통으로 읽힙니다.",
            "문체와 신관의 차이도 오래 지적되어, 한 손의 작품이라고만 단정하기 어렵습니다.",
            "눈먼 가수, 스뮈르나 또는 키오스 출신이라는 전기는 후대에 꾸며진 전설에 가깝습니다.",
          ]}
        />
        <GuideBlock
          en="Eighth century"
          title="기원전 8세기, 입으로 불리던 노래"
          kind="mixed"
          summary="지금 우리가 읽는 꼴에 가까워진 시기를 보통 기원전 8세기로 봅니다. 그 전에는 글이 아니라 노래였습니다. 반복되는 꾸밈말과 정해진 장면은 그 구전 전통의 도구입니다."
          points={[
            "이야기 속 전쟁의 전승 연대와, 시가 정리된 세기는 다른 시간입니다.",
            "알파벳이 그리스에 들어온 뒤 노래가 글로 고정되기 시작했다고 보는 설명이 흔합니다.",
            "한 해로 못 박지 않습니다. 기원전 750년 무렵은 대략의 자리입니다.",
          ]}
          more={["밀먼 패리와 앨버트 로드의 연구는 20세기에 이 구전 전통을 비교로 보여 주었습니다. 그 연구가 시의 작자를 한 사람으로 증명하지는 않습니다."]}
        />
        <GuideBlock
          en="Not a philosopher"
          title="철학자가 아닙니다"
          kind="history"
          summary="호메로스는 세계를 논증한 사람이 아닙니다. 신을 인간처럼 그리고, 영웅의 죽음을 노래합니다. 그 신을 교육에서 문제 삼은 쪽은 나중의 플라톤입니다."
          points={[
            "『국가』에서 플라톤은 신들이 다투고 속이는 이야기를 경계합니다.",
            "그 비판은 시의 한 구절을 철학 명제로 만든 것이 아닙니다.",
            "철학이야기의 플라톤과 호메로스 글에서 그 다음을 읽습니다.",
          ]}
        />
      </div>
      <RelatedLinks
        links={[
          { href: OUT.philosophyHomer, label: `${PHILOSOPHY_NAME} · 호메로스` },
          { href: OUT.philosophyPlato, label: `${PHILOSOPHY_NAME} · 플라톤` },
          { href: OUT.greeceHomer, label: "그리스이야기 · 호메로스" },
          { href: OUT.timelineHomer, label: "나두연표 · 서사시의 세기" },
          { href: OUT.timelineWar, label: "나두연표 · 전쟁 전승 연대" },
          { href: "/why", label: "왜 51일만?" },
        ]}
      />
    </div>
  );
}
