# carlosalbertoxw.github.io

Mi sitio web personal — [carlosalbertoxw.com](https://carlosalbertoxw.com). Un conjunto de recursos digitales para exponer y recordar lo que he aprendido: proyectos propios, notas sobre desarrollo de software, emprendimiento y más.

## Stack

| Tecnología | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, generación estática del sitio |
| [React 19](https://react.dev/) | Componentes de interfaz |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos (utilidades, sin CSS propio casi) |
| [TypeScript 6](https://www.typescriptlang.org/) | Tipado de todo el código |
| [pnpm](https://pnpm.io/) | Gestor de paquetes |
| [GitHub Pages](https://docs.github.com/en/pages) + Actions | Hosting y despliegue automático |

## Cómo está diseñado

### Sitio 100 % estático

No hay backend ni base de datos: todo el contenido vive en el propio código. En [next.config.ts](next.config.ts) se usa `output: 'export'`, así que `next build` genera HTML/CSS/JS puro en la carpeta `out/`, que es lo que sirve GitHub Pages. Por eso también `images.unoptimized: true` (el optimizador de imágenes de Next requiere servidor) y `trailingSlash: true` (cada ruta se exporta como `carpeta/index.html`, el formato que GitHub Pages espera).

### Una ruta por tema

El sitio usa el App Router de Next.js: cada sección temática es una carpeta con su `page.tsx` dentro de `src/app/`. Agregar una sección nueva es crear una carpeta, exportar su `metadata` (título y descripción para SEO) y enlazarla desde el Navbar.

```
src/
├── app/
│   ├── layout.tsx                      # Layout raíz: fuentes, metadata global, Navbar
│   ├── page.tsx                        # Portada: hero + tarjetas de proyectos
│   ├── globals.css                     # Import de Tailwind y variables de tema
│   ├── opengraph-image.tsx             # Imagen Open Graph generada en el build
│   ├── software-development/page.tsx   # Secciones temáticas…
│   ├── entrepreneurship-finance/page.tsx
│   ├── git/page.tsx
│   ├── docker/page.tsx
│   ├── blockchain-cryptocurrencies/page.tsx
│   └── links/page.tsx
└── components/
    └── Navbar.tsx                      # Único componente cliente
```

### Componentes de servidor por defecto

Casi todo son React Server Components (no llevan JavaScript al navegador). El único componente con `'use client'` es [Navbar.tsx](src/components/Navbar.tsx), porque necesita estado para el menú desplegable de "Recursos" y el menú móvil (que además se cierran solos al hacer scroll).

### Páginas de listado

[software-development](src/app/software-development/page.tsx) y [entrepreneurship-finance](src/app/entrepreneurship-finance/page.tsx) comparten la misma estructura: el contenido vive en un arreglo `groups` tipado al inicio del archivo y el JSX se limita a recorrerlo. Cada grupo se pinta como una tarjeta numerada con sus puntos, y cada punto admite un `href` opcional que le añade un enlace «Leer publicación» hacia la entrada correspondiente del blog. Encima del listado, una tarjeta destacada señala la publicación que enmarca todo lo demás.

Las tarjetas se distribuyen con `columns-1 md:columns-2` en vez de `grid`, para que cada una ocupe solo el alto de su contenido y no queden huecos. Como las columnas CSS se llenan de arriba abajo antes de pasar a la siguiente, en escritorio el orden de lectura no es evidente: por eso cada tarjeta muestra su número (`01`, `02`, …).

### Lenguaje visual

- **Paleta**: fondos oscuros `slate-900` (`#0f172a`) para navbar y hero de portada, contenido sobre fondo claro `slate-50`, y acentos en azul y esmeralda (el título de la portada usa un degradado azul → esmeralda). Cada sección temática mantiene un solo color de acento: azul en Desarrollo de Software, esmeralda en Emprendimiento y Finanzas.
- **Tarjetas**: un único estilo en todo el sitio — blancas, `rounded-2xl`, `border-slate-100` y `shadow-sm` que crece al hacer hover. No hay variantes oscuras ni de color de fondo.
- **Tipografía**: [Geist y Geist Mono](https://vercel.com/font) cargadas con `next/font` (se auto-hospedan en el build, sin peticiones a Google).
- **Responsive**: mobile-first con los breakpoints de Tailwind; el Navbar colapsa a menú hamburguesa bajo `md`.

Todo el estilo son utilidades de Tailwind directamente en el JSX — [globals.css](src/app/globals.css) solo importa Tailwind y define variables de tema.

### Despliegue

Cada push a `main` dispara el workflow [nextjs.yml](.github/workflows/nextjs.yml): instala dependencias con pnpm (con caché de la store y de `.next/cache`), ejecuta `pnpm build` y publica `out/` en GitHub Pages. El dominio propio `carlosalbertoxw.com` se configura en los ajustes de Pages del repositorio, no con un archivo `CNAME`. El build activa además SRI (Subresource Integrity) experimental para que los scripts exportados lleven hash de integridad.

### Dependencias forzadas por seguridad

[pnpm-workspace.yaml](pnpm-workspace.yaml) contiene `overrides` que suben versiones transitivas vulnerables que Next.js o ESLint fijan internamente:

| Paquete | Forzado a | Motivo |
|---|---|---|
| `postcss` | `^8.5.16` | XSS ([GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)) |
| `brace-expansion@1` | `^1.1.17` | DoS por expansión sin límite ([GHSA-mh99-v99m-4gvg](https://github.com/advisories/GHSA-mh99-v99m-4gvg)) |
| `sharp` | `^0.35.3` | libvips vulnerable ([GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)) |

`pnpm audit` sigue reportando `brace-expansion` como vulnerable: el aviso declara el rango `<=5.0.7`, que por semver incluye la `1.1.17` aunque esa versión ya lleve el parche retroportado. Es un falso positivo — el árbol solo tiene `1.1.17` y `5.0.8`, ambas parcheadas.

## Desarrollo local

Requisitos: Node.js ≥ 20.9 y [pnpm](https://pnpm.io/installation) ≥ 11 (la versión exacta está en el campo `packageManager` de [package.json](package.json)).

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:3000
pnpm lint        # revisar el código con ESLint
pnpm build       # generar el sitio estático en out/
```
