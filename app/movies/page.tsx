import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { MovieCard } from "@/components/MovieList";
import { PageHead } from "@/components/PageHead";
import { LinkRow } from "@/components/SisterSites";
import { movies } from "@/data/movies";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { OTHER_FILMS } from "@/lib/site";

const description =
  "트로이(2004), 헬레네 오브 트로이(1956·2003), 트로이: 폴 오브 어 시티(2018), 트로이의 여인들(1971), 크리스토퍼 놀란의 오디세이(2026). 일리아스에 없는 죽음을 영화가 넣었는지도 적습니다. 불법 영상 링크는 없습니다.";

export const metadata = pageMetadata({
  title: "영화·드라마",
  description,
  path: "/movies",
});

export default function MoviesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화·드라마", path: "/movies" },
          ]),
          itemListLd(
            "일리아스 관련 화면",
            "/movies",
            movies.map((movie) => ({ name: movie.titleKo, path: `/movies#${movie.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "영화·드라마" }]} />
      <PageHead
        kicker="FILMS"
        title="영화·드라마"
        lead="화면으로 트로이를 먼저 만난 사람이 많습니다. 제목과 해, 감독은 확인된 작품만 적었습니다. 각 카드는 일리아스와 얼마나 겹치는지, 어디서 이야기가 시 밖으로 나가는지를 나눕니다."
      />
      <ul className="mt-8 space-y-3">
        {movies.map((movie) => (
          <MovieCard key={movie.slug} movie={movie} />
        ))}
      </ul>
      <section className="mt-10 rounded-lg border border-line bg-card p-5">
        <h2 className="font-serif text-xl text-ink">다른 사이트의 영화</h2>
        <p className="mt-2 text-sm leading-7 text-muted">로마, 그리스, 이집트, 페르시아의 영화와, 한국사·철학의 영화, 신화가 쓰인 작품, 더 초즌의 같이 보기는 각 사이트에 있습니다.</p>
        <LinkRow label="다른 사이트의 영화" items={OTHER_FILMS} />
      </section>
    </div>
  );
}
