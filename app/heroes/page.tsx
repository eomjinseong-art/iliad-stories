import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KindBadge } from "@/components/KindBadge";
import { PageHead } from "@/components/PageHead";
import { Rich } from "@/components/Rich";
import { CAMPS, heroes, heroesByCamp } from "@/data/heroes";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "일리아스의 그리스군, 트로이군, 신들. 아킬레우스, 헥토르, 아가멤논, 파트로클로스, 헬레네, 파리스, 프리아모스, 오디세우스, 아이네이아스와 그들의 신. 각 인물은 /heroes/ 아래에 있습니다.";

export const metadata = pageMetadata({
  title: "인물",
  description,
  path: "/heroes",
});

export default function HeroesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/heroes" },
          ]),
          itemListLd(
            "일리아스의 인물",
            "/heroes",
            heroes.map((hero) => ({ name: hero.nameKo, path: `/heroes/${hero.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "인물" }]} />
      <PageHead
        kicker="PEOPLE"
        title="인물"
        lead="왕 명단이 아닙니다. 51일 안에 서 있는 사람들과, 그 편을 드는 신입니다. 신의 다른 이야기는 나두신화로, 미케네의 궁전은 그리스이야기로 넘깁니다."
      />
      {CAMPS.map((camp) => (
        <section key={camp.id} className="mt-10" aria-labelledby={`camp-${camp.id}`}>
          <h2 id={`camp-${camp.id}`} className="font-serif text-2xl text-ink">
            {camp.title} <span className="text-sm font-sans tracking-wide text-aegean">{camp.en}</span>
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted">
            <Rich text={camp.lead} />
          </p>
          <ul className="mt-4 grid gap-3">
            {heroesByCamp(camp.id).map((hero) => (
              <li key={hero.slug}>
                <Link href={`/heroes/${hero.slug}`} className="block rounded-lg border border-line bg-card p-4 hover:border-aegean">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[11px] tracking-[0.16em] text-aegean">{hero.nameEn}</p>
                    <KindBadge kind={hero.kind} />
                  </div>
                  <h3 className="mt-1 font-serif text-xl text-ink">{hero.nameKo}</h3>
                  <p className="mt-1 text-xs text-muted">
                    <span lang="grc">{hero.greek}</span> · {hero.role}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{hero.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
