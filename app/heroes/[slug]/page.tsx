import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { KindBadge } from "@/components/KindBadge";
import { More } from "@/components/More";
import { RelatedMovies } from "@/components/MovieList";
import { Pager } from "@/components/Pager";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Rich } from "@/components/Rich";
import { SourceList } from "@/components/SourceList";
import { heroes, heroBySlug } from "@/data/heroes";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return heroes.map((hero) => ({ slug: hero.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hero = heroBySlug(slug);
  if (!hero) return {};
  return pageMetadata({
    title: `${hero.nameKo} (${hero.nameEn})`,
    description: `${hero.nameKo}(${hero.greek}). ${hero.summary}`,
    path: `/heroes/${hero.slug}`,
    type: "article",
  });
}

export default async function HeroPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hero = heroBySlug(slug);
  if (!hero) notFound();
  const index = heroes.findIndex((item) => item.slug === hero.slug);
  const prev = heroes[index - 1];
  const next = heroes[index + 1];
  const path = `/heroes/${hero.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "인물", path: "/heroes" },
            { name: hero.nameKo, path },
          ]),
          articleLd({
            headline: `${hero.nameKo} (${hero.nameEn})`,
            description: hero.summary,
            path,
            about: [hero.nameEn, hero.greek, hero.role],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/heroes", label: "인물" }, { label: hero.nameKo }]} />
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs tracking-[0.2em] text-aegean">{hero.nameEn}</p>
          <KindBadge kind={hero.kind} />
        </div>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{hero.nameKo}</h1>
        <p className="mt-2 text-sm text-muted">
          <span lang="grc">{hero.greek}</span> · {hero.role}
        </p>
        <p className="mt-3 text-base leading-8 text-ink">
          <Rich text={hero.summary} />
        </p>
      </header>
      {hero.careful ? (
        <aside className="mt-4 rounded-md border border-wine/40 bg-wine/5 p-4 text-sm leading-7">
          <p className="text-[11px] tracking-[0.16em] text-wine">주의</p>
          <p className="mt-1">
            <Rich text={hero.careful} />
          </p>
        </aside>
      ) : null}
      <KeyPoints items={hero.points} />
      <More>
        {hero.more.map((paragraph) => (
          <p key={paragraph}>
            <Rich text={paragraph} />
          </p>
        ))}
      </More>
      <RelatedLinks links={hero.related} />
      {hero.movieSlugs.length ? (
        <RelatedMovies slugs={hero.movieSlugs} />
      ) : (
        <p className="mt-8 text-sm leading-7 text-muted">
          이 이름을 중심으로 한 극영화는 목록에서 빼 두었습니다.{" "}
          <Link href="/movies" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
            영화 목록
          </Link>
          에서 어느 작품이 일리아스를 넘어서는지 확인하세요.
        </p>
      )}
      <SourceList sources={hero.sources} />
      <Pager
        prev={prev ? { href: `/heroes/${prev.slug}`, label: prev.nameKo } : undefined}
        next={next ? { href: `/heroes/${next.slug}`, label: next.nameKo } : undefined}
      />
    </article>
  );
}
