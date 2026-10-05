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
