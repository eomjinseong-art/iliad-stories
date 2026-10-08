import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { books } from "@/data/books";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "호메로스 『일리아스』 24권을 권마다 세 줄로 연 목록. 각 권의 글은 /books/1 부터 /books/24 까지 있습니다.";

export const metadata = pageMetadata({
  title: "24권 한눈에",
  description,
  path: "/books",
});

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "24권", path: "/books" },
          ]),
          itemListLd(
            "일리아스 24권",
            "/books",
            books.map((book) => ({ name: `${book.n}권 ${book.title}`, path: `/books/${book.n}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "24권" }]} />
      <PageHead
        kicker="24 BOOKS"
        title="24권 한눈에"
        lead="오늘날의 24권 나눔은 후대의 편집입니다. 시는 그 번호로 노래되지 않았습니다. 그래도 장면을 찾을 때 권 번호가 가장 짧습니다. 각 권은 세 줄로 열고, 제목을 누르면 그 권의 글이 있습니다."
      />
      <ol className="mt-8 space-y-4">
        {books.map((book) => (
          <li key={book.n} className="rounded-lg border border-line bg-card p-5">
            <p className="text-[11px] tracking-[0.16em] text-aegean">
              BOOK {book.n} · {book.en}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">
              <Link href={`/books/${book.n}`} className="hover:text-aegean">
                {book.n}권. {book.title}
              </Link>
            </h2>
            <div className="mt-2 space-y-1 text-sm leading-7 text-muted">
              {book.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
