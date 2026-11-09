import { expect, test } from "@playwright/test";

// Rutas publicadas que otros sitios enlazan. Son un contrato: GitHub Pages no permite
// redirecciones, así que quitar o renombrar una exige antes una Redirect Rule en
// Cloudflare (ver README). Esta lista solo se cambia a propósito.
const stableRoutes = [
  "/",
  "/software-development/",
  "/entrepreneurship-finance/",
  "/git/",
  "/docker/",
  "/blockchain-cryptocurrencies/",
  "/links/",
  "/privacy/",
];

for (const route of stableRoutes) {
  test(`la ruta ${route} existe y tiene título`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
}

// Regresión: el og:url venía del layout y todas las páginas se compartían con la URL de la portada
for (const route of stableRoutes) {
  test(`la ruta ${route} se declara canónica a sí misma`, async ({ page }) => {
    await page.goto(route);
    const url = `https://carlosalbertoxw.com${route}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", url);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", url);
  });
}

// Regresión: la imagen se exportaba sin extensión y GitHub Pages la servía como
// application/octet-stream; con .png la sirve como image/png
test("la imagen Open Graph es un PNG con extensión", async ({ page, request }) => {
  await page.goto("/");
  const src = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(src).toBe("https://carlosalbertoxw.com/og.png");
  const response = await request.get("/og.png");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toBe("image/png");
});

test("el sitemap lista exactamente las rutas estables", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const urls = [...(await response.text()).matchAll(/<loc>https:\/\/carlosalbertoxw\.com([^<]*)<\/loc>/g)].map(
    (match) => match[1],
  );
  expect(urls.sort()).toEqual([...stableRoutes].sort());
});

test("robots.txt permite el rastreo y apunta al sitemap", async ({ request }) => {
  const response = await request.get("/robots.txt");
  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain("Allow: /");
  expect(body).toContain("Sitemap: https://carlosalbertoxw.com/sitemap.xml");
});
