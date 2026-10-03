// Servidor estático mínimo para probar el sitio exportado en out/ tal como lo
// sirve GitHub Pages: cada ruta es una carpeta con su index.html. Sin dependencias.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

async function resolveFile(pathname) {
  // normalize evita salir de out/ con rutas como /../
  const file = join(root, normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, ""));
  if (!file.startsWith(root)) return null;
  try {
    const info = await stat(file);
    return info.isDirectory() ? join(file, "index.html") : file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  const file = await resolveFile(pathname);
  try {
    if (!file) throw new Error("not found");
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": types[extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    const notFound = await readFile(join(root, "404.html")).catch(() => "404");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(notFound);
  }
}).listen(port, () => console.log(`Sirviendo out/ en http://localhost:${port}`));
