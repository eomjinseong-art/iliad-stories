import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Rich } from "@/components/Rich";
import { books } from "@/data/books";
import { heroes } from "@/data/heroes";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, HOME_SECTIONS, SISTER_LABEL, SISTERS, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const PATH = [
  { href: "/timeline", label: "10년째의 51일이 어떻게 지나가는지" },
  { href: "/scope", label: "심판·납치·발목·목마는 어느 작품인지" },
  { href: "/books/1", label: "1권, 분노가 시작되는 자리" },
  { href: "/scenes", label: "첫 줄과 네 장면" },
  { href: "/heroes/achilles", label: "아킬레우스" },
  { href: "/heroes/hector", label: "헥토르" },
  { href: "/family-tree", label: "네 집의 가족관계도" },
  { href: "/homer", label: "호메로스는 누구인가" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-aegean">ILIAD STORIES</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">일리아스이야기</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <blockquote className="mx-auto mt-6 max-w-2xl">
          <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">노래하소서, 여신이여! 펠레우스의 아들 아킬레우스의 분노를…</p>
          <p className="mt-3 text-sm text-aegean">Sing, goddess, the wrath of Achilles…</p>
          <p className="mt-1 text-xs text-muted">『일리아스』 1.1의 풀이 · μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος</p>
        </blockquote>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ink">
          이 시는 트로이 전쟁 10년 전체가 아닙니다. 전쟁이 10년째로 접어든 해의 약 51일, 중심은 아킬레우스의 분노입니다. 파리스의 심판, 헬레네를 데려온 일, 발뒤꿈치의 화살, 목마는 이 시가 들려주지 않습니다.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-aegean">{BRAND_LINE}</p>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted">
          전설은 전설이라고 적습니다. 24권, 인물 {heroes.length}명. 날짜의 합은 재구성입니다.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/timeline" className="rounded-full bg-aegean px-4 py-2 text-white hover:bg-aegean-deep">
            51일부터 보기
          </Link>
          <Link href="/scope" className="rounded-full border border-line bg-card px-4 py-2 hover:border-aegean">
            나오는 것 · 안 나오는 것
          </Link>
          <Link href="/books" className="rounded-full border border-line bg-card px-4 py-2 hover:border-aegean">
            24권
          </Link>
        </div>
      </section>

      <div className="meander opacity-50" aria-hidden />

      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="핵심">
        <Link href="/timeline" className="rounded-lg border border-line bg-card p-5 hover:border-aegean">
          <p className="text-[11px] tracking-[0.16em] text-aegean">51 DAYS</p>
          <h2 className="mt-1 font-serif text-2xl text-ink">약 51일</h2>
          <p className="mt-2 text-sm leading-6 text-muted">역병에서 헥토르의 장례까지. 호메로스는 총일수를 말하지 않고, 학자들이 구간을 이어 셉니다.</p>
        </Link>
        <Link href="/books" className="rounded-lg border border-line bg-card p-5 hover:border-aegean">
          <p className="text-[11px] tracking-[0.16em] text-aegean">24 BOOKS</p>
          <h2 className="mt-1 font-serif text-2xl text-ink">{books.length}권</h2>
          <p className="mt-2 text-sm leading-6 text-muted">나중에 나눈 권 번호입니다. 각 권은 세 줄로 열고, 권마다 글이 있습니다.</p>
        </Link>
        <Link href="/scope" className="rounded-lg border border-line bg-card p-5 hover:border-aegean">
          <p className="text-[11px] tracking-[0.16em] text-aegean">NOT THE WHOLE WAR</p>
          <h2 className="mt-1 font-serif text-2xl text-ink">시 밖의 명장면</h2>
          <p className="mt-2 text-sm leading-6 text-muted">심판과 목마는 다른 시의 몫입니다. 어디서 오는지 표로 나눠 두었습니다.</p>
        </Link>
      </section>

      <section className="mt-12" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="font-serif text-2xl text-ink">
          모든 길
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {HOME_SECTIONS.map((section, index) => (
            <Link key={section.href} href={section.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-aegean hover:shadow-sm">
              <p className="font-serif text-xs text-aegean">
                {String(index + 1).padStart(2, "0")} · {section.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-aegean">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="sisters-heading">
        <h2 id="sisters-heading" className="font-serif text-2xl text-ink">
          {SISTER_LABEL}
        </h2>
        <p className="mt-1 text-sm text-muted">신화와 역사, 철학, 연표는 같은 나두의 다른 방입니다.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SISTERS.map((site) => (
            <a
              key={site.href}
              href={site.href}
              rel="noopener noreferrer"
              className="group rounded-lg border border-line bg-card p-5 transition hover:border-aegean hover:shadow-sm"
            >
              <p className="text-[11px] tracking-[0.16em] text-aegean">{site.en}</p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-aegean">{site.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{site.body}</p>
              <p className="mt-3 text-sm text-aegean">{site.name} 보기 →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">처음 읽는 순서</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {PATH.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean">
                  {index + 1}. {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-lg border border-line bg-card p-5">
          <h2 className="font-serif text-2xl text-ink">전승의 연대</h2>
          <p className="mt-2 text-sm leading-7 text-muted">
            <Rich text="이야기 속 전쟁의 전승 연대는 [나두연표의 트로이 전쟁](https://nadoo-timeline.vercel.app/events/trojan-war)에, 시가 글로 모인 세기는 [호메로스 서사시](https://nadoo-timeline.vercel.app/events/homeric-epics)에 따로 있습니다. 청동기 궁전은 [그리스이야기의 미케네](https://greece-stories.vercel.app/origins#mycenaean)에서 읽습니다." />
          </p>
          <Link href="/sources" className="mt-3 inline-block text-sm text-aegean">
            적는 기준 보기 →
          </Link>
        </div>
      </section>
    </div>
  );
}
