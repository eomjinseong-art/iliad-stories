import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { GuideBlock } from "@/components/GuideBlock";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "일리아스가 약 51일만 다루는 이유. 시의 첫 단어는 분노이고, 명예와 죽음을 한 구간에 모읍니다. 아리스토텔레스는 호메로스가 전쟁 전체를 한 편에 넣지 않았다고 적습니다.";

export const metadata = pageMetadata({
  title: "왜 51일만?",
  description,
  path: "/why",
});

export default function WhyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왜 51일만?", path: "/why" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "왜 51일만?" }]} />
      <PageHead
        kicker="WHY FIFTY-ONE DAYS"
        title="왜 51일만?"
        lead="전쟁 10년을 다 노래하면 배가 출항하는 날부터 성이 무너지는 밤까지가 됩니다. 호메로스는 그 길을 고르지 않았습니다. 한 사람의 분노가 동료를 죽이고, 그 죽음이 또 다른 죽음을 부르는 구간만 골랐습니다."
      />
      <div className="mt-8 space-y-4">
        <GuideBlock
          en="Menis"
          title="첫 단어가 분노입니다"
          kind="legend"
          summary="그리스어 첫 단어 메니스(μῆνις)는 단순한 화가 아닙니다. 신이 내릴 법한, 오래 가는 분노입니다. 시는 그 감정이 아카이아인들의 죽음을 불렀다고 첫머리에서 말합니다."
          points={[
            "주제는 트로이의 함락이 아니라 아킬레우스의 분노와 그 결과입니다.",
            "1권의 제우스의 고개가 그 결과를 허락합니다.",
            "24권에서 분노는 식사의 자리까지 내려앉지만, 전쟁은 끝나지 않습니다.",
          ]}
          more={["나머지 9년과 함락의 밤은 다른 시, 곧 서사시권이 맡고 있었습니다. 한 가수가 모든 밤을 다 부를 필요는 없었습니다."]}
        />
        <GuideBlock
          en="Time"
          title="명예를 잃으면 자리가 없습니다"
          kind="legend"
          summary="티메(τιμή)는 몫이자 명예입니다. 아가멤논이 브리세이스를 가져가자 아킬레우스는 전리품만이 아니라 전사들 사이의 자리를 잃었다고 여깁니다."
          points={[
            "9권의 선물은 그 자리를 돈으로 되돌리려는 시도입니다.",
            "아킬레우스는 거절합니다. 명예는 물건의 개수와 같지 않다고 보는 자리입니다.",
            "파트로클로스가 죽은 뒤에야 그는 돌아옵니다. 복수와 슬픔이 선물을 대신합니다.",
          ]}
        />
        <GuideBlock
          en="Mortality"
          title="양쪽 다 죽음을 압니다"
          kind="legend"
          summary="인간의 비극은 신이 이기고 지는 이야기가 아닙니다. 헥토르는 성이 무너질 것을 아내에게 말하고도 문 앞에 남습니다. 아킬레우스는 자기가 곧 죽을 것을 알고 돌아옵니다."
          points={[
            "6권의 작별과 22권의 죽음이 한 사람을 관통합니다.",
            "24권에서 적의 아버지가 펠레우스의 얼굴을 빌려 무릎을 안습니다.",
            "클레오스(κλέος), 사람들이 나중에 부르는 이름은 그 짧은 삶 옆에 있습니다.",
          ]}
          more={["발뒤꿈치의 무적 신화는 이 비극을 약하게 만듭니다. 이 시의 아킬레우스는 다칠 수 있고, 그래서 갑옷을 청합니다."]}
        />
        <GuideBlock
          en="Poetics"
          title="한 부분을 고른 시"
          kind="mixed"
          summary="아리스토텔레스는 『시학』 23장에서, 호메로스가 전쟁의 시작과 끝을 다 가진 재료를 한 편에 넣지 않고 한 부분을 골랐다고 적습니다. 너무 커서 한 번에 보기 어렵다는 이유입니다."
          points={[
            "통일은 연표의 완결이 아니라, 분노에서 장례로 이어지는 한 줄입니다.",
            "에피소드(결투, 목록, 방패)는 그 줄 옆에 붙습니다.",
            "51일이라는 숫자는 그 압축을 나중에 센 결과입니다. 시인 자신의 합계는 아닙니다.",
          ]}
          more={[
            "이 평은 시의 설계를 가리키는 고대의 말입니다. 현대의 구전 연구는 거기에, 여러 세대의 노래가 한 편의 꼴로 모였을 가능성을 더합니다. [호메로스는 누구?](/homer)",
          ]}
        />
      </div>
      <p className="mt-8 text-sm leading-7">
        날짜를 어떻게 이었는지는 <Link href="/timeline" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">51일 타임라인</Link>
        에 적어 두었습니다.
      </p>
    </div>
  );
}
