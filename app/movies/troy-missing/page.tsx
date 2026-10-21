import Link from "next/link";
import { Fragment } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoupangCard } from "@/components/CoupangCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Rich } from "@/components/Rich";
import {
  TROY_MISSING_PATH,
  compareRows,
  missedHighlights,
  troyColumns,
  type CompareCell,
} from "@/data/troy-compare";
import { articleLd, breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "2004년 영화 『트로이』, 2018년 『트로이: 왕국의 몰락』, 『일리아스』와 서사시권이 같은 장면을 어떻게 다루는지 주제별로 나란히 봅니다. 전승이 갈리는 자리는 전해지는 이야기로 표시합니다.";

const tones: Record<(typeof troyColumns)[number]["key"], string> = {
  film: "border-l-ink/25 bg-stone",
  series: "border-l-aegean bg-card",
  poem: "border-l-olive bg-card",
};

export const metadata = pageMetadata({
  title: "영화 트로이에서 빠진 이야기",
  description,
  path: TROY_MISSING_PATH,
  type: "article",
});

function TraditionBadge() {
  return (
    <span className="inline-block rounded-sm border border-wine/40 bg-wine/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-wine">
      전해지는 이야기
    </span>
  );
}

function CellBody({ cell }: { cell: CompareCell }) {
  return (
    <>
      {cell.tradition ? (
        <p className="mb-2">
          <TraditionBadge />
        </p>
      ) : null}
      <p className="text-sm leading-7">
        <Rich text={cell.text} />
      </p>
    </>
  );
}

export default function TroyMissingPage() {
  return (
    <article className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화·드라마", path: "/movies" },
            { name: "영화 트로이에서 빠진 이야기", path: TROY_MISSING_PATH },
          ]),
          articleLd({
            headline: "영화 트로이에서 빠진 이야기",
            description,
            path: TROY_MISSING_PATH,
            about: ["Troy", "Troy: Fall of a City", "일리아스", "서사시권"],
          }),
          itemListLd(
            "영화 트로이에서 빠진 이야기",
            TROY_MISSING_PATH,
            compareRows.map((row) => ({
              name: row.title,
              path: `${TROY_MISSING_PATH}#${row.id}`,
            })),
          ),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/movies", label: "영화·드라마" },
          { label: "영화 트로이에서 빠진 이야기" },
        ]}
      />
      <PageHead
        kicker="COMPARE"
        title="영화 트로이에서 빠진 이야기"
        lead="2004년 영화 「트로이」, 2018년 「트로이: 왕국의 몰락」, 『일리아스』와 서사시권이 같은 자리를 어떻게 다루는지 주제마다 세 칸으로 나눕니다. 좁은 화면에서는 그 세 칸이 카드로 쌓입니다."
      />
      <p className="mt-4 text-sm leading-7 text-muted">
        아래는 세 이야기의 끝까지 말합니다. 고대 이야기끼리도 갈리는 칸에는 전해지는 이야기라고 적습니다. 배우의 얼굴과 이름은 두지 않습니다.
      </p>

      <section className="mt-8 rounded-lg border border-wine/30 bg-wine/5 p-5" aria-labelledby="missed-heading">
        <h2 id="missed-heading" className="font-serif text-2xl text-ink">
          가장 크게 빠진 것
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          2004년 영화가 시의 이야기에서 가장 멀리 간 다섯 자리입니다. 제목을 누르면 아래 표의 그 줄로 갑니다.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {missedHighlights.map((item) => (
            <li key={item.id} className="rounded-md border border-wine/20 bg-card p-4">
              <a href={`#${item.id}`} className="font-serif text-lg text-ink underline decoration-line underline-offset-4 hover:text-aegean">
                {item.title}
              </a>
              <p className="mt-2 text-sm leading-7">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-8" aria-label="비교 항목">
        <p className="text-xs tracking-[0.16em] text-aegean">항목</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {compareRows.map((row) => (
            <li key={row.id}>
              <a
                href={`#${row.id}`}
                className="inline-block rounded-full border border-line bg-card px-3 py-1.5 text-sm hover:border-aegean hover:text-aegean"
              >
                {row.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6">
        <table className="block w-full md:table md:table-fixed md:border-collapse">
          <caption className="sr-only">
            2004년 영화 「트로이」, 2018년 「트로이: 왕국의 몰락」, 『일리아스』와 서사시권의 장면별 비교
          </caption>
          <thead className="hidden md:table-header-group">
            <tr>
              {troyColumns.map((column) => (
                <th
                  key={column.key}
                  id={`col-${column.key}`}
                  scope="col"
                  className={`sticky top-28 z-10 border-b border-line px-3 py-3 text-left font-serif text-base font-normal text-ink ${tones[column.key]}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {compareRows.map((row) => (
              <Fragment key={row.id}>
                <tr className="block md:table-row">
                  <th
                    id={row.id}
                    colSpan={3}
                    className="block scroll-mt-36 px-0 pb-2 pt-8 text-left font-normal md:table-cell md:border-b md:border-line md:px-3 md:pt-10"
                  >
                    <span className="font-serif text-xl text-ink">{row.title}</span>
                    {row.links.length ? (
                      <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                        {row.links.map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            className="text-olive underline decoration-line underline-offset-4 hover:text-aegean"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </span>
                    ) : null}
                  </th>
                </tr>
                <tr className="block md:table-row">
                  {troyColumns.map((column) => (
                    <td
                      key={column.key}
                      headers={`${row.id} col-${column.key}`}
                      className={`mb-3 block rounded-lg border border-line border-l-4 p-4 align-top md:mb-0 md:table-cell md:rounded-none md:border-x-0 md:border-b md:border-t-0 md:border-l-4 ${tones[column.key]}`}
                    >
                      <p className="mb-2 text-[11px] tracking-[0.16em] text-aegean md:hidden">{column.label}</p>
                      <CellBody cell={row[column.key]} />
                    </td>
                  ))}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm leading-7 text-muted">
        2018년 시리즈의 회차 줄거리는{" "}
        <Link href="/movies/troy-fall-of-a-city" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
          트로이: 왕국의 몰락
        </Link>
        에, 작품 목록은{" "}
        <Link href="/movies" className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
          영화·드라마
        </Link>
        에 있습니다.
      </p>
      <CoupangCard />
    </article>
  );
}
