import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { More } from "@/components/More";
import { Rich } from "@/components/Rich";
import { bookByNumber, books } from "@/data/books";
import { heroBySlug } from "@/data/heroes";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return books.map((book) => ({ book: String(book.n) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ book: string }> }) {
  const { book: raw } = await params;
  const book = bookByNumber(Number(raw));
  if (!book) return {};
  return pageMetadata({
    title: `${book.n}권 ${book.title}`,
    description: book.lines.join(" "),
    path: `/books/${book.n}`,
    type: "article",
  });
}

export default async function BookPage({ params }: { params: Promise<{ book: string }> }) {
  const { book: raw } = await params;
  const book = bookByNumber(Number(raw));
  if (!book) notFound();
  const prev = bookByNumber(book.n - 1);
  const next = bookByNumber(book.n + 1);
  const path = `/books/${book.n}`;
  const people = book.heroSlugs.map((slug) => heroBySlug(slug)).filter((hero) => Boolean(hero));

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "24권", path: "/books" },
            { name: `${book.n}권`, path },
          ]),
          articleLd({
            headline: `일리아스 ${book.n}권 ${book.title}`,
            description: book.lines.join(" "),
            path,
            about: [`Iliad ${book.n}`, book.en],
          }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/books", label: "24권" }, { label: `${book.n}권` }]} />
      <header className="mt-4">
        <p className="text-xs tracking-[0.2em] text-aegean">BOOK {book.n} · {book.en}</p>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">
          {book.n}권. {book.title}
        </h1>
      </header>
      <div className="mt-4 space-y-2 text-sm leading-7">
        {book.lines.map((line) => (
          <p key={line}>
            <Rich text={line} />
          </p>
        ))}
      </div>
      <More>
        {book.more.map((paragraph) => (
          <p key={paragraph}>
            <Rich text={paragraph} />
          </p>
        ))}
      </More>
      {people.length ? (
        <nav aria-label="이 권의 인물" className="mt-6">
          <p className="text-xs text-muted">이 권의 인물</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {people.map((hero) => (
              <li key={hero!.slug}>
                <Link href={`/heroes/${hero!.slug}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 text-sm hover:border-aegean hover:text-aegean">
                  {hero!.nameKo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
      <p className="mt-6 text-sm">
        <Link href="/timeline" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
          51일 타임라인에서 이 권의 위치
        </Link>
      </p>
      <nav className="mt-10 flex justify-between gap-4 border-t border-line pt-4 text-sm" aria-label="앞뒤 권">
        {prev ? (
          <Link href={`/books/${prev.n}`} className="text-olive hover:text-aegean">
            ← {prev.n}권 {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/books/${next.n}`} className="text-right text-olive hover:text-aegean">
            {next.n}권 {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
