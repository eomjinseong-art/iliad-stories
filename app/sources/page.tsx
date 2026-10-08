import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "일리아스이야기의 적는 기준. 호메로스의 일리아스와 오디세이아, 서사시권의 요약, 아리스토텔레스 시학. 없는 인용문은 만들지 않고, 현대 번역의 문장을 옮기지 않습니다.";

export const metadata = pageMetadata({
  title: "출처",
  description,
  path: "/sources",
});

const WORKS = [
  { work: "호메로스 『일리아스』", ref: "권과 행으로 가리킵니다. 24권 나눔은 후대의 편집입니다." },
  { work: "호메로스 『오디세이아』", ref: "목마의 회상(4권, 8권)과 귀향, 아가멤논의 죽음." },
  { work: "서사시권", ref: "『키프리아』, 『아이티오피스』, 『작은 일리아스』, 『일리우 페르시스』. 지금은 프로클로스의 요약으로 아는 부분이 많습니다. 지은 사람 전승은 확실하지 않습니다." },
  { work: "아리스토텔레스 『시학』 23장", ref: "전쟁 전체를 한 편에 넣지 않고 한 부분을 골랐다는 말." },
  { work: "아폴로도로스 『도서관』 요약 5.3", ref: "아킬레우스의 죽음을 발목의 화살로 적습니다. 『일리아스』의 본문은 아닙니다." },
  { work: "스타티우스 『아킬레이스』", ref: "스틱스 강에 담가 발뒤꿈치만 남았다는 쪽은 로마 시대의 시입니다." },
  { work: "베르길리우스 『아이네이스』", ref: "기원전 1세기의 로마 서사시. 아이네이아스의 이탈리아행." },
  { work: "에우리피데스 『트로이의 여인들』", ref: "기원전 415년의 비극. 함락 뒤의 포로들. 1971년 영화의 원작." },
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "출처", path: "/sources" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <PageHead
        kicker="SOURCES"
        title="출처"
        lead="권과 작품 이름만 밝힙니다. 없는 인용문을 만들지 않고, 현대 번역의 문장을 우리말인 척 붙이지 않습니다. 명장면의 한국어는 이 사이트의 풀이입니다."
      />
      <ul className="mt-8 space-y-3">
        {WORKS.map((item) => (
          <li key={item.work} className="rounded-lg border border-line bg-card p-4 text-sm leading-7">
            <h2 className="font-serif text-lg text-ink">{item.work}</h2>
            <p className="mt-1 text-muted">{item.ref}</p>
          </li>
        ))}
      </ul>
      <section className="mt-8 rounded-lg border border-line bg-card p-5 text-sm leading-7">
        <h2 className="font-serif text-xl text-ink">51일이라는 숫자</h2>
        <p className="mt-2 text-muted">
          호메로스는 총일수를 말하지 않습니다. 연구자들은 시가 센 구간을 이어 약 51일로 많이 정리합니다. 요한 라타츠의 정리가 자주 인용되고, 포함해서 세느냐에 따라 50–54일로도 적힙니다. 이 사이트의 타임라인은 그 통상 재구성의 하나이고, 하루가 앞뒤로 움직일 수 있다고 적어 두었습니다.
        </p>
      </section>
      <section className="mt-4 rounded-lg border border-line bg-card p-5 text-sm leading-7">
        <h2 className="font-serif text-xl text-ink">영화</h2>
        <p className="mt-2 text-muted">
          제목, 해, 감독, 처음 공개된 곳은 확인된 것만 적었습니다. 지금 어느 서비스에서 볼 수 있는지는 지역마다 달라 주소를 만들지 않습니다. 불법 영상은 안내하지 않습니다.
        </p>
      </section>
    </div>
  );
}
