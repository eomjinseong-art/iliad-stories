import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-xs tracking-[0.2em] text-aegean">404</p>
      <h1 className="mt-2 font-serif text-3xl text-ink">이 권에는 그 장면이 없습니다</h1>
      <p className="mt-3 text-sm leading-7 text-muted">주소가 없거나 옮겨졌습니다. 첫 줄로 돌아가 51일 안의 다른 길을 고르세요.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <Link href="/" className="text-aegean underline">
          홈
        </Link>
        <Link href="/timeline" className="text-aegean underline">
          51일
        </Link>
        <Link href="/books" className="text-aegean underline">
          24권
        </Link>
        <Link href="/heroes" className="text-aegean underline">
          인물
        </Link>
      </div>
    </div>
  );
}
