import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FamilyTreeView } from "@/components/FamilyTreeView";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { LinkRow } from "@/components/SisterSites";
import { DISPUTES, NAME_NOTES, TREES, focusHref, relationsOf } from "@/data/family-tree";
import { heroBySlug } from "@/data/heroes";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { MYTH_NAME, MYTH_URL, OTHER_TREES, OUT, ROME_NAME } from "@/lib/site";

const description =
  "일리아스의 가족관계도. 아트레우스 집안, 펠레우스와 테티스, 프리아모스와 헤카베의 자녀, 안키세스와 아프로디테의 아이네이아스. 신의 넓은 가계는 나두신화로, 로마의 자손은 로마이야기로 넘깁니다.";

export const metadata = pageMetadata({
  title: "가족관계도",
  description,
  path: "/family-tree",
});

for (const tree of TREES) {
  for (const node of tree.nodes) {
    if (node.slug && !heroBySlug(node.slug)) {
      throw new Error(`가족관계도 slug에 해당하는 인물 페이지가 없습니다: ${node.slug}`);
    }
  }
}

const listed = TREES.flatMap((tree) => tree.nodes.filter((node) => node.href?.startsWith("/")));

export default function FamilyTreePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "가족관계도", path: "/family-tree" },
          ]),
          itemListLd(
            "일리아스 가족관계도",
            "/family-tree",
            listed.map((node) => ({ name: `${node.ko} (${node.roman})`, path: node.href! })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "가족관계도" }]} />
      <PageHead
        kicker="FAMILY TREE"
        title="가족관계도"
        lead="아트레우스 집안, 펠레우스와 테티스에서 아킬레우스, 프리아모스와 헤카베의 헥토르·파리스·카산드라, 헥토르와 안드로마케의 아스튀아낙스, 안키세스와 아프로디테의 아이네이아스. 칸을 누르면 부모·배우자·자녀·형제가 밝아집니다. 점선 가문은 역사 족보가 아니라 시의 전승입니다."
      />

      <aside className="mt-6 rounded-lg border border-line bg-card p-4 sm:p-5">
        <p className="text-[11px] tracking-[0.16em] text-aegean">{MYTH_NAME}</p>
        <h2 className="mt-1 font-serif text-xl text-ink">신들의 가족관계도는 나두신화에 있습니다</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
          제우스와 티탄의 가계는 여기서 다시 그리지 않습니다. 테티스는 아킬레우스의 어머니로만 두고, 티탄 테튀스와 섞지 않습니다. 트로이 영웅의 더 넓은 전승 가계는 그리스이야기의 트로이 영웅 탭에, 로마로 이어지는 자손은 로마이야기에 있습니다.
        </p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a href={`${MYTH_URL}/family-tree`} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean" rel="noopener noreferrer">
            {MYTH_NAME} 가족관계도
          </a>
          <a href={OUT.greeceTree} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean" rel="noopener noreferrer">
            그리스이야기 · 트로이 영웅
          </a>
          <a href={OUT.romeAeneas} className="text-olive underline decoration-line underline-offset-4 hover:text-aegean" rel="noopener noreferrer">
            {ROME_NAME} · 아이네이아스
          </a>
        </p>
      </aside>

      <FamilyTreeView />

      <section className="mt-8 rounded-lg border border-line bg-card p-5">
        <h2 className="font-serif text-xl text-ink">다른 가족관계도</h2>
        <p className="mt-2 text-sm leading-7 text-muted">같은 나두의 다른 가계입니다. 이 그림의 아이네이아스는 로마 가계의 첫 칸과 만나고, 신의 가계는 나두신화와 만납니다.</p>
        <LinkRow label="다른 가족관계도" items={OTHER_TREES} />
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">글로 읽는 가족관계</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">그림과 같은 관계입니다. 이름을 누르면 그 칸으로 이동합니다.</p>
        {TREES.map((tree) => (
          <section key={tree.id} className="mt-8" aria-labelledby={`read-${tree.id}`}>
            <h3 id={`read-${tree.id}`} className="font-serif text-xl text-ink">
              {tree.ko} <span className="text-sm font-sans tracking-wide text-aegean">{tree.en}</span>
              <span className="ml-2 text-sm font-sans text-wine">전승</span>
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted">{tree.blurb}</p>
            {tree.bands.map((band) => (
              <section key={band.id} className="mt-6">
                <h4 className="font-serif text-lg" style={{ color: band.color }}>
                  {band.ko} <span className="text-sm font-sans tracking-wide text-aegean">{band.en}</span>
                </h4>
                <p className="mt-1 text-sm leading-6 text-muted">{band.hint}</p>
                <ul className="mt-3 space-y-4">
                  {band.nodeIds.map((id) => {
                    const node = tree.byId.get(id)!;
                    const rel = relationsOf(tree, id);
                    return (
                      <li key={id} className="border-b border-line/80 pb-3 text-sm leading-7">
                        <a href={focusHref(tree.id, node.id)} className="font-serif text-base text-ink hover:text-aegean">
                          {node.ko}
                        </a>
                        <span className="text-muted"> / {node.roman}</span>
                        {node.greek ? (
                          <span lang="grc" className="ml-2 text-aegean">
                            {node.greek}
                          </span>
                        ) : null}
                        {node.href ? (
                          <Link href={node.href} className="ml-2 text-aegean">
                            인물 페이지
                          </Link>
                        ) : null}
                        <span className="mt-0.5 block text-ink">{node.summary}</span>
                        {node.note ? <span className="mt-0.5 block text-xs leading-5 text-wine">{node.note}</span> : null}
                        <span className="mt-1 block text-xs leading-5 text-muted">
                          <Kin treeId={tree.id} label="부모" people={rel.parents} />
                          <Kin treeId={tree.id} label="배우자" people={rel.spouses} />
                          <Kin treeId={tree.id} label="자녀" people={rel.children} />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </section>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">전승이 갈리는 자리</h2>
        <ul className="mt-4 space-y-4">
          {DISPUTES.map((item) => (
            <li key={item.id} className="rounded-md border border-line bg-card p-4 text-sm leading-7">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-1">
                <span className="text-aegean">이 그림. </span>
                {item.main}
              </p>
              <p className="mt-1">
                <span className="text-wine">같이 둘 말. </span>
                {item.other}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-ink">이름을 읽을 때</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
          {NAME_NOTES.map((note) => (
            <li key={note.title}>
              <span className="text-ink">{note.title}. </span>
              {note.body}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Kin({ treeId, label, people }: { treeId: (typeof TREES)[number]["id"]; label: string; people: { id: string; ko: string }[] }) {
  if (!people.length) return null;
  return (
    <span className="mr-3 inline">
      {label}{" "}
      {people.map((person, index) => (
        <span key={person.id}>
          {index > 0 ? ", " : null}
          <a href={focusHref(treeId, person.id)} className="text-aegean underline decoration-line underline-offset-2 hover:text-ink">
            {person.ko}
          </a>
        </span>
      ))}
    </span>
  );
}
