import { generals } from "@/data/generals";
import type { MetadataRoute } from "next";
import { books } from "@/data/books";
import { heroes } from "@/data/heroes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/timeline",
    "/books",
    "/heroes",
    "/generals",
    "/generals/quiz",
    ...generals.map((g) => `/generals/${g.slug}`),
    "/scope",
    "/scenes",
    "/why",
    "/family-tree",
    "/movies",
    "/movies/troy-fall-of-a-city",
    "/homer",
    "/sources",
    ...books.map((book) => `/books/${book.n}`),
    ...heroes.map((hero) => `/heroes/${hero.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
