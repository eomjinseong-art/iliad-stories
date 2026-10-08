import Link from "next/link";
import { moviesBySlugs } from "@/data/movies";
import type { Movie } from "@/data/types";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <li id={movie.slug} className="scroll-mt-28 rounded-lg border border-line bg-card p-4">
      <p className="font-serif text-lg text-ink">
        「{movie.titleKo}」
        <span className="ml-2 font-sans text-sm font-normal text-muted">
          {movie.titleOriginal} · {movie.year} · {movie.kind}
        </span>
      </p>
      <p className="mt-1 text-xs text-aegean">감독 · {movie.director}</p>
      <p className="mt-2 text-sm leading-7">{movie.faithful}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{movie.note}</p>
      {movie.watch ? <p className="mt-2 text-xs leading-5 text-olive">{movie.watch}</p> : null}
      {movie.links.length ? (
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {movie.links.map((link) =>
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
  );
}

export function RelatedMovies({ slugs }: { slugs: readonly string[] }) {
  const list = moviesBySlugs(slugs);
  if (!list.length) return null;
  return (
    <section className="mt-10" aria-labelledby="related-movies-heading">
      <h2 id="related-movies-heading" className="font-serif text-2xl text-ink">
        관련 화면
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted">각색입니다. 시의 사실 관계를 이 카드로 외우면 순서가 섞입니다. 불법 영상 링크는 없습니다.</p>
      <ul className="mt-4 space-y-3">
        {list.map((movie) => (
          <MovieCard key={movie.slug} movie={movie} />
        ))}
      </ul>
      <Link href="/movies" className="mt-3 inline-block text-sm text-aegean">
        영화·드라마 전체 보기 →
      </Link>
    </section>
  );
}
