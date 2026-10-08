export type Source = { work: string; ref?: string };

export type Kind = "legend" | "history" | "mixed";

export type LinkItem = { href: string; label: string };

export type Camp = "greek" | "trojan" | "god" | "house";

export type Hero = {
  slug: string;
  nameKo: string;
  nameEn: string;
  greek: string;
  role: string;
  camp: Camp;
  kind: Kind;
  summary: string;
  points: readonly [string, string, string];
  more: readonly string[];
  careful?: string;
  sources: readonly Source[];
  related: readonly LinkItem[];
  movieSlugs: readonly string[];
};

export type Book = {
  n: number;
  en: string;
  title: string;
  lines: readonly [string, string, string];
  more: readonly string[];
  heroSlugs: readonly string[];
};

export type Movie = {
  slug: string;
  titleKo: string;
  titleOriginal: string;
  year: string;
  director: string;
  kind: "영화" | "시리즈";
  faithful: string;
  note: string;
  watch?: string;
  links: readonly LinkItem[];
};
