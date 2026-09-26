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
| [Cloudflare](https://www.cloudflare.com/) | Proxy delante de Pages: DNS, TLS y cabeceras de seguridad |

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

El workflow [nextjs.yml](.github/workflows/nextjs.yml) se ejecuta en cada push y en cada pull request hacia `main`. Instala dependencias con pnpm (`--frozen-lockfile`, con caché de la store y de `.next/cache`), ejecuta `pnpm lint`, `pnpm format:check`, `pnpm audit --audit-level high` y `pnpm build`. Si alguno falla, no se despliega. En los pull requests se queda ahí; en los push a `main` además publica `out/` en GitHub Pages. El dominio propio `carlosalbertoxw.com` se configura en los ajustes de Pages del repositorio, no con un archivo `CNAME`. El build activa además SRI (Subresource Integrity) experimental para que los scripts exportados lleven hash de integridad.

El dominio pasa por Cloudflare antes de llegar a GitHub Pages. GitHub Pages no permite cabeceras propias, así que las de seguridad (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) se añaden en Cloudflare, igual que la versión mínima de TLS (1.2; las versiones 1.0 y 1.1 se rechazan). Nada de eso vive en este repositorio: si cambian, se cambian en el panel de Cloudflare.

Las Actions de los workflows se fijan por SHA de commit, con la versión en un comentario (`actions/checkout@3d3c… # v7.0.1`), para que una etiqueta reescrita no cambie el código que se ejecuta.

[dependabot.yml](.github/dependabot.yml) abre cada mes hasta tres PR agrupados: las actualizaciones menores y de parche de las dependencias; las Actions de Pages (`configure-pages`, `upload-pages-artifact` y `deploy-pages`); y el resto de las Actions, actualizando el SHA y el comentario. Las de Pages van aparte porque no se ejecutan en los pull requests: solo se prueban al desplegar, así que conviene fusionarlas solas y revisar ese despliegue. Las actualizaciones de seguridad las abre Dependabot en cuanto sale el aviso.

### Dependencias forzadas por seguridad

[pnpm-workspace.yaml](pnpm-workspace.yaml) contiene `overrides` que suben versiones transitivas vulnerables que Next.js o ESLint fijan internamente. El motivo detallado de cada uno está comentado en ese archivo; si se agrega o se cambia uno, esta tabla se actualiza en el mismo commit.

| Paquete | Forzado a | Llega vía | Motivo |
|---|---|---|---|
| `postcss` | `^8.5.16` | Next.js | XSS ([GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)) |
| `brace-expansion@1` | `^1.1.18` | ESLint › minimatch@3 | DoS por arrays intermedios sin límite ([GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)) |
| `brace-expansion@5` | `^5.0.9` | ESLint › minimatch@10 | El mismo DoS ([GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)) |
| `browserslist` | `^4.28.7` | styled-jsx › @babel/core | Escritura en el prototipo ([GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g)) y caché sin límite ([GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)) |
| `nanoid@3` | `^3.3.18` | postcss | Bucle infinito con `size` cero ([GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8)) |
| `sharp` | `^0.35.4` | Next.js | libvips ([GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)) y libheif ([GHSA-rgj7-g3m4-5g8c](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c)) vulnerables |
| `baseline-browser-mapping` | `^2.11.0` | Next.js | Terminación del proceso ante entrada inválida ([GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv)) |

## Operación

- **Revertir un despliegue:** `git revert <commit>` y push a `main`; el workflow vuelve a publicar la versión anterior en alrededor de un minuto. `git reset` seguido de `push --force` no funciona: la protección de `main` lo rechaza. Para salir del paso sin tocar el historial, se puede relanzar desde la pestaña Actions la ejecución de un commit anterior, pero el siguiente push a `main` la sustituye.
- **Cabeceras de seguridad y TLS:** se editan en el panel de Cloudflare del dominio. Tras cambiarlas, comprueba el resultado con `curl -I https://carlosalbertoxw.com/`.
- **Dominio:** Pages (ajustes del repositorio) y el DNS en Cloudflare deben apuntar al mismo dominio. El registro del dominio se renueva en su registrador; conviene tener activada la renovación automática.
- **Enlaces rotos:** el workflow [links.yml](.github/workflows/links.yml) genera el sitio cada lunes y revisa con [lychee](https://github.com/lycheeverse/lychee) todos los enlaces del HTML exportado, incluidas las rutas internas y las anclas (`#…`). Si alguno falla, abre un issue con la etiqueta `enlaces`, o actualiza el que ya esté abierto. LinkedIn, Instagram, X y TikTok se excluyen porque bloquean a los bots. Se puede lanzar a mano desde la pestaña Actions.
- **Alertas de dependencias:** llegan como alertas y PR de Dependabot. Cada PR ejecuta el mismo workflow, y no se puede fusionar hasta que el check `build` pase; al fusionarlo, el sitio se redespliega solo. Tras fusionar el PR de las Actions de Pages, revisa que ese despliegue termine bien.
- **Seguridad del repositorio:** se configura en los ajustes de GitHub, no en archivos. Hoy están activos:
  - el ruleset *Proteger main*, que impide borrar la rama y reescribir su historial, sin excepciones;
  - el ruleset *Checks en PR*, que exige el check `build` para fusionar un pull request. El rol de administrador puede saltárselo, así que los push directos a `main` siguen funcionando (Git lo avisa como *bypassed rule violations*);
  - el escaneo de secretos con protección de push, que rechaza un push que contenga una credencial reconocible;
  - CodeQL en modo *Default* para JavaScript/TypeScript y Actions, con los resultados en la pestaña Security.

## Desarrollo local

Requisitos: Node.js ≥ 20.9 y [pnpm](https://pnpm.io/installation) ≥ 11 (la versión exacta está en el campo `packageManager` de [package.json](package.json)).

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:3000
pnpm lint        # revisar el código con ESLint
pnpm format      # formatear el código con Prettier
pnpm audit       # buscar vulnerabilidades conocidas en las dependencias
pnpm build       # generar el sitio estático en out/
```

Antes de subir un cambio conviene ejecutar `pnpm lint`, `pnpm format:check`, `pnpm audit --audit-level high` y `pnpm build`: son los mismos pasos que corre el workflow, y si alguno falla el sitio no se despliega. La configuración de Prettier está en [.prettierrc.json](.prettierrc.json) (líneas de hasta 120 caracteres); el Markdown, el lockfile y los textos de licencia se excluyen en [.prettierignore](.prettierignore).

## Licencia

El repositorio tiene dos licencias, según lo que se reutilice:

- **Código** — componentes, estilos, configuración y workflows: [MIT](LICENSE). Puedes usarlo en tus proyectos conservando el aviso de copyright.
- **Contenido** — los textos de las páginas, incluidos los listados, guías y temarios escritos dentro de los archivos de `src/app/`: [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](LICENSE-CONTENT). Puedes copiarlo, adaptarlo y usarlo con cualquier fin, siempre que cites la fuente: *Carlos Alberto, [carlosalbertoxw.com](https://carlosalbertoxw.com)*, con enlace a la página original.

Quedan fuera de ambas licencias mi nombre, mi información biográfica y los nombres y logotipos de mis proyectos (Ollin, Cotejo y los demás enlazados en la portada): no pueden usarse para presentar otro sitio o producto como mío o como respaldado por mí. Las publicaciones del blog enlazadas se rigen por lo que indique el propio blog.

Parte del código se escribe con ayuda de asistentes de IA; todos los cambios los dirijo y reviso yo antes de integrarlos.
