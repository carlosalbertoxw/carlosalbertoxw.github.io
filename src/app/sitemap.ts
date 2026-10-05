import type { MetadataRoute } from "next";

// Se genera en el build como out/sitemap.xml. Al agregar una página, añádela aquí y
// a la lista de rutas estables de e2e/routes.spec.ts
export const dynamic = "force-static";

const siteUrl = "https://carlosalbertoxw.com";

const routes = [
  "/",
  "/software-development/",
  "/entrepreneurship-finance/",
  "/git/",
  "/docker/",
  "/blockchain-cryptocurrencies/",
  "/links/",
  "/privacy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
