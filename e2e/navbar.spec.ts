import { expect, test, type Page } from "@playwright/test";

// Rutas del menú con el título que debe tener cada página
const routes = [
  { label: "Desarrollo de Software", path: "/software-development/", heading: "Desarrollo de Software" },
  { label: "Emprendimiento y Finanzas", path: "/entrepreneurship-finance/", heading: "Emprendimiento y Finanzas" },
  { label: "Git", path: "/git/", heading: "Git Cheat Sheet" },
  { label: "Docker", path: "/docker/", heading: "Docker Cheat Sheet" },
  { label: "Blockchain", path: "/blockchain-cryptocurrencies/", heading: "Blockchain y Criptomonedas" },
  { label: "Enlaces", path: "/links/", heading: "Carlos Alberto" },
];

test.describe("menú de escritorio", () => {
  test("cada enlace lleva a su página", async ({ page }) => {
    for (const route of routes) {
      await page.goto("/");
      const nav = page.getByRole("navigation");
      if (["Git", "Docker", "Blockchain"].includes(route.label)) {
        await nav.getByRole("button", { name: "Recursos" }).click();
      }
      await nav.getByRole("link", { name: route.label, exact: true }).click();
      await expect(page).toHaveURL(route.path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.heading);
    }
  });

  test("el desplegable de Recursos se abre y se cierra", async ({ page }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "Recursos" });
    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });

  // Regresión: se abría con hover, así que el clic de quien se detenía antes de pulsar lo cerraba
  test("el desplegable se abre con clic aunque el mouse se detenga antes encima", async ({ page }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "Recursos" });
    await button.hover();
    await page.waitForTimeout(300);
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await button.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");
  });

  test("el desplegable se cierra con Escape y con un clic fuera", async ({ page }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "Recursos" });
    await button.click();
    await page.keyboard.press("Escape");
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await button.click();
    await page.getByRole("heading", { level: 1 }).click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });
});

test.describe("menú móvil", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  const menuButton = (page: Page) => page.getByRole("button", { name: /menú/ });
  const menu = (page: Page) => page.locator("#mobile-menu");

  test("cada enlace lleva a su página y cierra el menú", async ({ page }) => {
    for (const route of routes) {
      await page.goto("/");
      await menuButton(page).click();
      await menu(page).getByRole("link", { name: route.label, exact: true }).click();
      await expect(page).toHaveURL(route.path);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.heading);
      await expect(menuButton(page)).toHaveAttribute("aria-expanded", "false");
    }
  });

  // Regresión: al abrirse empujaba el contenido, el navegador compensaba con un
  // evento scroll y el menú se cerraba solo si la página no estaba arriba
  for (const position of ["la mitad", "el final"]) {
    test(`se abre y se queda abierto a ${position} de la página`, async ({ page }) => {
      await page.goto("/software-development/");
      await page.evaluate((pos) => {
        const max = document.documentElement.scrollHeight - innerHeight;
        window.scrollTo(0, pos === "el final" ? max : max / 2);
      }, position);
      await page.waitForTimeout(300);
      await menuButton(page).click();
      await page.waitForTimeout(500);
      await expect(menuButton(page)).toHaveAttribute("aria-expanded", "true");
      await expect(menu(page).getByRole("link", { name: "Git", exact: true })).toBeVisible();
    });
  }

  // Regresión: cerrado medía 0 de alto, pero sus enlaces seguían recibiendo el foco con Tab
  test("cerrado, sus enlaces no reciben el foco con el teclado", async ({ page }) => {
    await page.goto("/");
    await menuButton(page).focus();
    await page.keyboard.press("Tab");
    const focusInMenu = await page.evaluate(() => !!document.activeElement?.closest("#mobile-menu"));
    expect(focusInMenu).toBe(false);
  });

  test("abierto, sus enlaces sí reciben el foco con el teclado", async ({ page }) => {
    await page.goto("/");
    await menuButton(page).click();
    await page.keyboard.press("Tab");
    await expect(menu(page).getByRole("link", { name: "Desarrollo de Software" })).toBeFocused();
  });

  test("se cierra con Escape", async ({ page }) => {
    await page.goto("/");
    await menuButton(page).click();
    await page.keyboard.press("Escape");
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "false");
  });

  test("se cierra al desplazar la página", async ({ page }) => {
    await page.goto("/software-development/");
    await menuButton(page).click();
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "true");
    await page.mouse.wheel(0, 400);
    await expect(menuButton(page)).toHaveAttribute("aria-expanded", "false");
  });
});
