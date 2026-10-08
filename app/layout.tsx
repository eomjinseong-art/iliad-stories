import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700"] });
const serif = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-noto-serif", weight: ["400", "600", "700"] });

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} · 51일간의 분노`, template: `%s · ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "일리아스",
    "아킬레우스",
    "헥토르",
    "호메로스",
    "트로이 전쟁",
    "51일",
    "파트로클로스",
    "프리아모스",
    "가족관계도",
    "일리아스이야기",
    "Iliad",
    "Iliad Stories",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · 51일간의 분노`,
    description,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: [OG_IMAGE.url] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-bg font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
