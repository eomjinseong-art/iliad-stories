import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { scenes } from "@/data/scenes";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description =
  "일리아스의 첫 줄, 헥토르와 안드로마케의 작별(6권), 아킬레우스의 방패(18권), 프리아모스와 아킬레우스(24권). 한국어는 이 사이트가 고대 그리스어를 짧게 풀어 쓴 것이고, 출간된 현대 번역의 문장이 아닙니다.";

export const metadata = pageMetadata({
  title: "명장면·명문장",
  description,
  path: "/scenes",
});

export default function ScenesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "명장면", path: "/scenes" },
          ]),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "명장면" }]} />
      <PageHead
        kicker="SCENES"
        title="명장면·명문장"
        lead="아래 한국어는 고대 그리스어를 이 사이트가 짧게 풀어 쓴 것입니다. 출간된 번역의 문장을 옮기지 않았습니다. 그리스어 한 줄은 시의 자리를 가리키려고 둡니다."
      />
      <div className="mt-8 space-y-6">
        {scenes.map((scene) => (
          <article key={scene.id} id={scene.id} className="scroll-mt-28 rounded-lg border border-line bg-card p-5 sm:p-6">
            <p className="text-[11px] tracking-[0.16em] text-aegean">
              {scene.en} · {scene.book}
            </p>
            <h2 className="mt-1 font-serif text-2xl text-ink">{scene.title}</h2>
            <p lang="grc" className="mt-4 text-sm leading-7 text-aegean">
              {scene.greek}
            </p>
            <p className="text-xs text-muted">{scene.greekNote}</p>
            <blockquote className="mt-4 border-l-2 border-aegean pl-4 font-serif text-lg leading-8 text-ink">{scene.paraphrase}</blockquote>
            <p className="mt-4 text-sm leading-7 text-muted">{scene.body}</p>
            <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <Link href={scene.bookHref} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                이 권 읽기
              </Link>
              {scene.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                  {link.label}
                </Link>
              ))}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
