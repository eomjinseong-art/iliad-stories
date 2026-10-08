import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { extraOut, scopeRows } from "@/data/scope";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "일리아스에 나오는 것과 나오지 않는 것. 다툼, 헥토르의 성공, 파트로클로스의 죽음, 아킬레우스의 귀환, 장례는 이 시에 있습니다. 파리스의 심판, 헬레네를 데려온 일, 발뒤꿈치, 목마, 오디세이아, 아이네이스는 다른 작품입니다.";

export const metadata = pageMetadata({
  title: "나오는 것 · 안 나오는 것",
  description,
  path: "/scope",
});

export default function ScopePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "나오는 것 · 안 나오는 것", path: "/scope" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "나오는 것 · 안 나오는 것" }]} />
      <PageHead
        kicker="IN AND OUT"
        title="일리아스에 나오는 것 vs 안 나오는 것"
        lead="유명한 장면이 다 이 시 안에 있는 것은 아닙니다. 표의 왼쪽이 장면, 가운데가 이 시에 있는지, 오른쪽이 그 이야기의 집입니다."
      />
      <div className="mt-8 overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
          <caption className="border-b border-line bg-stone/70 px-4 py-3 text-left font-serif text-base text-ink">
            장면이 사는 곳
          </caption>
          <thead>
            <tr className="border-b border-line bg-card text-xs tracking-wide text-aegean">
              <th scope="col" className="px-4 py-2 font-medium">
                장면
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                일리아스
              </th>
              <th scope="col" className="px-4 py-2 font-medium">
                이야기의 집
              </th>
            </tr>
          </thead>
          <tbody>
            {scopeRows.map((row) => (
              <tr key={row.id} id={row.id} className="scroll-mt-28 border-b border-line align-top">
                <th scope="row" className="px-4 py-3 font-serif text-base font-normal text-ink">
                  {row.title}
                </th>
                <td className="px-4 py-3">
                  <span className={row.inPoem ? "text-olive" : "text-wine"}>{row.inPoem ? "나옴" : "이 시는 그 장면을 들려주지 않음"}</span>
                </td>
                <td className="px-4 py-3 text-muted">{row.where}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 space-y-4">
        {scopeRows.map((row) => (
          <section key={row.id} aria-labelledby={`${row.id}-title`} className="rounded-lg border border-line bg-card p-4">
            <h2 id={`${row.id}-title`} className="font-serif text-xl text-ink">
              {row.title}
            </h2>
            <p className="mt-1 text-xs text-aegean">{row.inPoem ? "이 시에 있습니다" : "다른 작품의 장면입니다"} · {row.where}</p>
            <p className="mt-2 text-sm leading-7">{row.detail}</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              {row.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.href + link.label} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.href + link.label} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ),
              )}
            </p>
          </section>
        ))}
      </div>
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">같이 헷갈리는 것</h2>
        <ul className="mt-4 space-y-3">
          {extraOut.map((item) => (
            <li key={item.title} className="rounded-md border border-line bg-card p-4 text-sm leading-7">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-1 text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
