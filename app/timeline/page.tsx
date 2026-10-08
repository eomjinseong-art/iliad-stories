import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { DAY_NOTE, days } from "@/data/days";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { OUT, TIMELINE_NAME } from "@/lib/site";

const description =
  "일리아스가 다루는 약 51일을 재구성한 흐름. 역병과 다툼, 아킬레우스의 철수, 헥토르의 성공, 사절, 파트로클로스의 죽음, 귀환, 프리아모스의 방문, 장례. 날짜의 합은 학자들의 재구성입니다.";

export const metadata = pageMetadata({
  title: "51일 타임라인",
  description,
  path: "/timeline",
});

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "51일 타임라인", path: "/timeline" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "51일 타임라인" }]} />
      <PageHead
        kicker="51 DAYS"
        title="51일 타임라인"
        lead="『일리아스』는 트로이 전쟁 10년째의 짧은 구간입니다. 아래 번호는 시가 직접 센 날(아흐레, 열흘째, 열두 번째 새벽)을 이어 맞춘 재구성입니다."
      />
      <aside className="mt-6 rounded-lg border border-line bg-card p-4 text-sm leading-7 text-muted">
        <p>{DAY_NOTE}</p>
        <p className="mt-2">
          전승 연대 기원전 1184년경은 후대의 계산입니다.{" "}
          <a href={OUT.timelineWar} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean" rel="noopener noreferrer">
            {TIMELINE_NAME}의 트로이 전쟁 전승
          </a>
          에서 그 숫자와 유적을 나눠 읽습니다.
        </p>
      </aside>
      <ol className="mt-8 space-y-4">
        {days.map((day, index) => (
          <li key={day.id} id={day.id} className="scroll-mt-28 rounded-lg border border-line bg-card p-5">
            <p className="text-[11px] tracking-[0.16em] text-aegean">
              {String(index + 1).padStart(2, "0")} · {day.days} · {day.books}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{day.title}</h2>
            <p className="mt-2 text-sm leading-7">{day.body}</p>
            {day.note ? <p className="mt-2 text-sm leading-7 text-wine">{day.note}</p> : null}
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm leading-7">
        권마다의 세 줄은 <Link href="/books" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">24권</Link>
        에, 이 구간에 없는 장면은 <Link href="/scope" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">나오는 것 · 안 나오는 것</Link>
        에 있습니다.
      </p>
    </div>
  );
}
