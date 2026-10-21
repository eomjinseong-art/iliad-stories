import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Rich } from "@/components/Rich";
import {
  TROY_SERIES_PATH,
  troyCast,
  troyDifferences,
  troyEpisodes,
  troyReception,
  troySeeAlso,
  troySeries,
} from "@/data/troy-fall";
import { articleLd, breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "2018년 BBC One·넷플릭스 8부작 『트로이: 왕국의 몰락』(Troy: Fall of a City). 회차 줄거리는 결말까지 말하고, 일리아스·서사시권과 다른 자리는 따로 나눕니다. 출연자 사진은 없습니다.";

export const metadata = pageMetadata({
  title: "트로이: 왕국의 몰락",
  description,
  path: TROY_SERIES_PATH,
  type: "article",
});

export default function TroyFallPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화·드라마", path: "/movies" },
            { name: troySeries.titleKo, path: TROY_SERIES_PATH },
          ]),
          articleLd({
            headline: `${troySeries.titleKo} (${troySeries.titleEn})`,
            description,
            path: TROY_SERIES_PATH,
            about: ["Troy: Fall of a City", "일리아스", "트로이 전쟁"],
          }),
          itemListLd(
            "트로이: 왕국의 몰락 회차",
            TROY_SERIES_PATH,
            troyEpisodes.map((episode) => ({
              name: `${episode.n}화 ${episode.titleKo}`,
              path: `${TROY_SERIES_PATH}#ep-${episode.n}`,
            })),
          ),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/movies", label: "영화·드라마" },
          { label: troySeries.titleKo },
        ]}
      />
      <PageHead
        kicker="BBC · NETFLIX · 2018"
        title={troySeries.titleKo}
        lead="파리스와 헬레네에서 시작해 포위와 함락까지 가는 8부작입니다. 『일리아스』 한 편의 각색이 아닙니다. 시의 51일은 그 안의 한 구간입니다."
      />
      <p className="mt-4 text-sm leading-7">
        2004년 영화 「트로이」와 이 시리즈, 그리고 시가 같은 장면을 어떻게 다루는지는{" "}
        <Link href="/movies/troy-missing" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
          영화 트로이에서 빠진 이야기
        </Link>
        에 나란히 두었습니다.
      </p>

      <section className="mt-8 rounded-lg border border-line bg-card p-5 text-sm leading-7" aria-labelledby="facts-heading">
        <h2 id="facts-heading" className="font-serif text-xl text-ink">
          기본
        </h2>
        <dl className="mt-3 space-y-2">
          <div>
            <dt className="text-aegean">제목</dt>
            <dd>
              {troySeries.titleKo} <span className="text-muted">· {troySeries.titleEn}</span>
            </dd>
          </div>
          <div>
            <dt className="text-aegean">해</dt>
            <dd>{troySeries.year}</dd>
          </div>
          <div>
            <dt className="text-aegean">방송</dt>
            <dd>{troySeries.broadcaster}</dd>
          </div>
          <div>
            <dt className="text-aegean">회차</dt>
            <dd>{troySeries.episodes}화. 한 회는 한 시간 안쪽입니다.</dd>
          </div>
          <div>
            <dt className="text-aegean">만든 사람</dt>
            <dd>{troySeries.creator}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs leading-5 text-olive">{troySeries.watch}</p>
      </section>

      <section className="mt-8" aria-labelledby="cast-heading">
        <h2 id="cast-heading" className="font-serif text-2xl text-ink">
          주요 배역
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          인물 이름으로 적고, 배우는 글자로만 둡니다. 시의 인물은 이 사이트의 글로 이어집니다.
        </p>
        <div className="mt-4 space-y-4">
          {troyCast.map((group) => (
            <div key={group.group}>
              <h3 className="text-[11px] tracking-[0.16em] text-aegean">{group.group}</h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {group.people.map((person) => (
                  <li key={person.character} className="rounded-lg border border-line bg-card px-3 py-2 text-sm">
                    <p className="font-serif text-ink">
                      {person.href ? (
                        <Link href={person.href} className="underline decoration-line underline-offset-4 hover:text-aegean">
                          {person.character}
                        </Link>
                      ) : (
                        person.character
                      )}
                    </p>
                    <p className="text-muted">{person.actor}</p>
                    {person.note ? <p className="text-xs text-olive">{person.note}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <aside className="mt-8 rounded-md border border-wine/40 bg-wine/5 p-4 text-sm leading-7">
        <p className="text-[11px] tracking-[0.16em] text-wine">결말까지</p>
        <p className="mt-1">아래 여덟 회의 줄거리는 마지막 밤까지 모두 말합니다. 시와 다른 자리는 그 다음 칸에 모았습니다.</p>
      </aside>

      <nav className="mt-4 flex flex-wrap gap-2 text-sm" aria-label="회차">
        {troyEpisodes.map((episode) => (
          <a key={episode.n} href={`#ep-${episode.n}`} className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-aegean">
            {episode.n}화 {episode.titleKo}
          </a>
        ))}
        <a href="#differences" className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-aegean">
          시와의 차이
        </a>
        <a href="#reception" className="rounded-full border border-line bg-card px-3 py-1.5 hover:border-aegean">
          논란과 반응
        </a>
      </nav>

      <section className="mt-10" aria-labelledby="episodes-heading">
        <h2 id="episodes-heading" className="font-serif text-2xl text-ink">
          회차
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          영어 제목은 BBC One의 제목입니다. 한국어 제목은 그 영어를 이 사이트가 짧게 옮긴 것이고, 6화부터 8화는 한국 넷플릭스 목록에 보이는 제목도 함께 적었습니다.
        </p>
        <ol className="mt-4 space-y-4">
          {troyEpisodes.map((episode) => (
            <li key={episode.slug} id={`ep-${episode.n}`} className="scroll-mt-28 rounded-lg border border-line bg-card p-5">
              <p className="text-[11px] tracking-[0.16em] text-aegean">
                {episode.n} / {troySeries.episodes} · {episode.air}
              </p>
              <h3 className="mt-1 font-serif text-2xl text-ink">
                {episode.titleKo}
                <span className="ml-2 font-sans text-sm font-normal text-muted">{episode.titleEn}</span>
              </h3>
              {episode.netflixKo ? <p className="mt-1 text-xs text-olive">넷플릭스 목록의 제목 · {episode.netflixKo}</p> : null}
              <p className="mt-1 text-xs text-muted">{episode.credit}</p>
              <div className="mt-3 space-y-3 text-sm leading-7">
                {episode.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <Rich text={paragraph} />
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="differences">
        <h2 id="differences" className="scroll-mt-28 font-serif text-2xl text-ink">
          신화 · 『일리아스』와 다른 점
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          드라마가 고른 자리와, 시와 그 바깥 전승이 말하는 자리를 나눕니다. 고대 이야기끼리도 갈리는 곳에는 전해지는 이야기라고 적습니다.
        </p>
        <ul className="mt-4 space-y-3">
          {troyDifferences.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-28 rounded-lg border border-line bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                {item.tradition ? (
                  <span className="inline-block rounded-sm border border-wine/40 bg-wine/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-wine">
                    전해지는 이야기
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-7">
                <Rich text={item.body} />
              </p>
              {item.links.length ? (
                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {item.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link key={link.href + link.label} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        className="text-olive underline decoration-line underline-offset-4 hover:text-aegean"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="reception">
        <h2 id="reception" className="scroll-mt-28 font-serif text-2xl text-ink">
          논란과 반응
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          배역, 평점, 각색, 한 시즌에서 끝난 일을 출처와 함께 적습니다. 어느 쪽의 편도 들지 않습니다. 확인하지 못한 말은 전해지는 이야기로 표시합니다. 배우의 사진은 없습니다.
        </p>
        <ul className="mt-4 space-y-3">
          {troyReception.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-28 rounded-lg border border-line bg-card p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                {item.tradition ? (
                  <span className="inline-block rounded-sm border border-wine/40 bg-wine/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-wine">
                    전해지는 이야기
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-7">
                <Rich text={item.body} />
              </p>
              {item.links.length ? (
                <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {item.links.map((link) =>
                    link.href.startsWith("/") || link.href.startsWith("#") ? (
                      <Link key={link.href + link.label} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        className="text-olive underline decoration-line underline-offset-4 hover:text-aegean"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ),
                  )}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="seealso-heading">
        <h2 id="seealso-heading" className="font-serif text-2xl text-ink">
          이어서
        </h2>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {troySeeAlso.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href + link.label} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-olive underline decoration-line underline-offset-4 hover:text-aegean"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ),
          )}
        </p>
      </section>
      <CoupangCard />
    </article>
  );
}
