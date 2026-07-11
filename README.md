# carlosalbertoxw.github.io

Mi sitio web personal — [carlosalbertoxw.com](https://carlosalbertoxw.com). Un conjunto de recursos digitales para exponer y recordar lo que he aprendido: proyectos propios, notas sobre desarrollo de software, emprendimiento, productividad y más.

## Stack

| Tecnología | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) (App Router) | Framework, generación estática del sitio |
| [React 19](https://react.dev/) | Componentes de interfaz |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos (utilidades, sin CSS propio casi) |
| [TypeScript](https://www.typescriptlang.org/) | Tipado de todo el código |
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
│   ├── productivity/page.tsx
│   ├── git/page.tsx
│   ├── english/page.tsx
│   ├── blockchain-cryptocurrencies/page.tsx
│   └── links/page.tsx
└── components/
    └── Navbar.tsx                      # Único componente cliente
```

### Componentes de servidor por defecto

Casi todo son React Server Components (no llevan JavaScript al navegador). El único componente con `'use client'` es [Navbar.tsx](src/components/Navbar.tsx), porque necesita estado para el menú desplegable de "Recursos" y el menú móvil (que además se cierran solos al hacer scroll).

### Lenguaje visual

- **Paleta**: fondos oscuros `slate-900` (`#0f172a`) para navbar y heros, contenido sobre fondo claro `slate-50`, y acentos en azul y esmeralda (el título de la portada usa un degradado azul → esmeralda). Cada sección temática puede variar el color de su hero (p. ej. Productividad usa esmeralda).
- **Tarjetas**: el contenido se presenta en tarjetas blancas con bordes redondeados grandes (`rounded-2xl`/`rounded-3xl`), sombra suave que crece al hacer hover, en rejillas responsivas de 1–2 columnas.
- **Tipografía**: [Geist y Geist Mono](https://vercel.com/font) cargadas con `next/font` (se auto-hospedan en el build, sin peticiones a Google).
- **Responsive**: mobile-first con los breakpoints de Tailwind; el Navbar colapsa a menú hamburguesa bajo `md`.

Todo el estilo son utilidades de Tailwind directamente en el JSX — [globals.css](src/app/globals.css) solo importa Tailwind y define variables de tema.

### Despliegue

Cada push a `main` dispara el workflow [nextjs.yml](.github/workflows/nextjs.yml): instala dependencias con pnpm (con caché de la store y de `.next/cache`), ejecuta `pnpm build` y publica `out/` en GitHub Pages con el dominio propio `carlosalbertoxw.com`. El build activa además SRI (Subresource Integrity) experimental para que los scripts exportados lleven hash de integridad.

## Desarrollo local

Requisitos: Node.js ≥ 20.9 y [pnpm](https://pnpm.io/installation) ≥ 11 (la versión exacta está en el campo `packageManager` de [package.json](package.json)).

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:3000
pnpm lint        # revisar el código con ESLint
pnpm build       # generar el sitio estático en out/
```
