import { defineConfig, devices } from "@playwright/test";

// Pruebas de humo sobre el sitio ya exportado (out/), no sobre el servidor de
// desarrollo: así se prueba exactamente lo que se publica. Requiere `pnpm build`.
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "node e2e/serve.mjs",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
});
