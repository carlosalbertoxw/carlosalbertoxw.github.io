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
| [Playwright](https://playwright.dev/) | Pruebas end-to-end del menú |
| [GitHub Pages](https://docs.github.com/en/pages) + Actions | Hosting y despliegue automático |
| [Cloudflare](https://www.cloudflare.com/) | Proxy delante de Pages: DNS, TLS y cabeceras de seguridad |

## Cómo está diseñado

### Sitio 100 % estático

No hay backend ni base de datos: todo el contenido vive en el propio código. En [next.config.ts](next.config.ts) se usa `output: 'export'`, así que `next build` genera HTML/CSS/JS puro en la carpeta `out/`, que es lo que sirve GitHub Pages. Por eso también `images.unoptimized: true` (el optimizador de imágenes de Next requiere servidor) y `trailingSlash: true` (cada ruta se exporta como `carpeta/index.html`, el formato que GitHub Pages espera).

### Una ruta por tema

El sitio usa el App Router de Next.js: cada sección temática es una carpeta con su `page.tsx` dentro de `src/app/`. Agregar una sección nueva es crear una carpeta, exportar su `metadata` (título y descripción para SEO) y añadir la ruta a `mainLinks` o `resourceLinks` en el Navbar, que alimentan tanto el menú de escritorio como el móvil.

Las rutas publicadas funcionan como contrato: el blog y otros sitios enlazan a ellas, y GitHub Pages no permite redirecciones. No se renombra una carpeta de `src/app/` sin crear antes una *Redirect Rule* en Cloudflare desde la ruta anterior. [e2e/routes.spec.ts](e2e/routes.spec.ts) lo hace cumplir: tiene la lista de rutas estables, comprueba que cada una exista y que [sitemap.ts](src/app/sitemap.ts) liste exactamente esas. Una página nueva se agrega a las dos listas.

```
src/
├── app/
│   ├── layout.tsx                      # Layout raíz: fuentes, metadata global, Navbar y pie de página
│   ├── page.tsx                        # Portada: hero + tarjetas de proyectos
│   ├── globals.css                     # Import de Tailwind y variables de tema
│   ├── opengraph-image.tsx             # Imagen Open Graph generada en el build
│   ├── sitemap.ts                      # sitemap.xml con las rutas publicadas
│   ├── robots.ts                       # robots.txt, que apunta al sitemap
│   ├── software-development/page.tsx   # Secciones temáticas…
│   ├── entrepreneurship-finance/page.tsx
│   ├── git/page.tsx
│   ├── docker/page.tsx
│   ├── blockchain-cryptocurrencies/page.tsx
│   ├── links/page.tsx
│   └── privacy/page.tsx                # Aviso de privacidad (enlazado desde el pie de página)
└── components/
    ├── Navbar.tsx                      # Único componente cliente
    ├── ChecklistPage.tsx               # Plantilla de las páginas de listado
    └── TopicSheet.tsx                  # Plantilla de las guías por temas
```

### Componentes de servidor por defecto

Casi todo son React Server Components (no llevan JavaScript al navegador). El único componente con `'use client'` es [Navbar.tsx](src/components/Navbar.tsx), porque necesita estado para el menú desplegable de "Recursos" y el menú móvil (que además se cierran solos al hacer scroll y con Escape). El desplegable se abre solo con clic, no con hover: abrirlo al pasar el mouse hacía que el clic siguiente lo cerrara; también se cierra con un clic fuera de él. El menú móvil se despliega superpuesto bajo la barra (`absolute`), sin empujar el contenido: si lo empujara, a mitad de página el navegador compensaría el salto con un evento `scroll` y el menú se cerraría al instante. También se cierra al elegir un enlace, porque el Navbar vive en el layout y no se desmonta al navegar. Cerrado mide 0 de alto pero sigue en el DOM, así que lleva `inert` para que sus enlaces no reciban el foco con Tab.

### Páginas de listado

[software-development](src/app/software-development/page.tsx) y [entrepreneurship-finance](src/app/entrepreneurship-finance/page.tsx) comparten la misma estructura: cada `page.tsx` solo contiene su `metadata`, su presentación y un arreglo `groups` tipado, y el render lo hace [ChecklistPage.tsx](src/components/ChecklistPage.tsx), que recibe además el color de acento. Cada grupo se pinta como una tarjeta numerada con sus puntos, y cada punto admite un `href` opcional que le añade un enlace «Leer publicación» hacia la entrada correspondiente del blog. Encima del listado, una tarjeta destacada señala la publicación que enmarca todo lo demás.

Las tarjetas se distribuyen con `columns-1 md:columns-2` en vez de `grid`, para que cada una ocupe solo el alto de su contenido y no queden huecos. Como las columnas CSS se llenan de arriba abajo antes de pasar a la siguiente, en escritorio el orden de lectura no es evidente: por eso cada tarjeta muestra su número (`01`, `02`, …).

### Guías por temas

[git](src/app/git/page.tsx), [docker](src/app/docker/page.tsx) y [blockchain-cryptocurrencies](src/app/blockchain-cryptocurrencies/page.tsx) siguen el mismo esquema con otra plantilla, [TopicSheet.tsx](src/components/TopicSheet.tsx): cada página aporta su encabezado, su color de acento y un arreglo de secciones con sus temas. Los temas con `href` se pintan como enlace al artículo del blog y los demás quedan como índice pendiente, con un contador por sección.

Las plantillas declaran las clases de cada color de acento completas (`hover:border-orange-400`, no `` `hover:border-${color}-400` ``) porque Tailwind solo genera las clases que encuentra escritas en el código.

### Lenguaje visual

- **Paleta**: fondos oscuros `slate-900` (`#0f172a`) para navbar y hero de portada, contenido sobre fondo claro `slate-50`, y acentos en azul y esmeralda (el título de la portada usa un degradado azul → esmeralda). Cada sección temática mantiene un solo color de acento: azul en Desarrollo de Software, esmeralda en Emprendimiento y Finanzas.
- **Tarjetas**: un único estilo en todo el sitio — blancas, `rounded-2xl`, `border-slate-100` y `shadow-sm` que crece al hacer hover. No hay variantes oscuras ni de color de fondo.
- **Tipografía**: [Geist y Geist Mono](https://vercel.com/font) cargadas con `next/font` (se auto-hospedan en el build, sin peticiones a Google).
- **Responsive**: mobile-first con los breakpoints de Tailwind; el Navbar colapsa a menú hamburguesa bajo `md`.

Todo el estilo son utilidades de Tailwind directamente en el JSX — [globals.css](src/app/globals.css) solo importa Tailwind y define variables de tema.

### Despliegue

El workflow [nextjs.yml](.github/workflows/nextjs.yml) se ejecuta en cada push y en cada pull request hacia `main`. Revisa los propios workflows con [zizmor](https://docs.zizmor.sh/) (permisos, inyección de expresiones, credenciales persistidas, Actions sin fijar), instala dependencias con pnpm (`--frozen-lockfile`, con caché de la store y de `.next/cache`) y ejecuta `pnpm lint`, `pnpm format:check`, `pnpm audit --audit-level high`, `pnpm build` y las pruebas end-to-end (`pnpm test:e2e`). Si alguno falla, no se despliega. En los pull requests se queda ahí; en los push a `main` además publica `out/` en GitHub Pages. El dominio propio `carlosalbertoxw.com` se configura en los ajustes de Pages del repositorio, no con un archivo `CNAME`. El build activa además SRI (Subresource Integrity) experimental para que los scripts exportados lleven hash de integridad.

El dominio pasa por Cloudflare antes de llegar a GitHub Pages. GitHub Pages no permite cabeceras propias, así que las de seguridad (`Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) se añaden en Cloudflare, igual que la versión mínima de TLS (1.2; las versiones 1.0 y 1.1 se rechazan). Cloudflare también inyecta Cloudflare Web Analytics, una analítica sin cookies que se describe en el [aviso de privacidad](src/app/privacy/page.tsx). Todo eso se edita en el panel de Cloudflare; su respaldo y el motivo de cada valor están en [docs/cloudflare.md](docs/cloudflare.md).

Las Actions de los workflows se fijan por SHA de commit, con la versión en un comentario (`actions/checkout@3d3c… # v7.0.1`), para que una etiqueta reescrita no cambie el código que se ejecuta. Cada job declara solo los permisos que usa, y `actions/checkout` no deja el token en `.git/config` (`persist-credentials: false`), porque ningún workflow hace `git push`. En los workflows semanales, los jobs que instalan dependencias o ejecutan herramientas de terceros solo pueden leer el repositorio; abrir el issue con el reporte lo hace un job aparte.

[dependabot.yml](.github/dependabot.yml) abre cada mes hasta tres PR agrupados: las actualizaciones menores y de parche de las dependencias; las Actions de Pages (`configure-pages`, `upload-pages-artifact` y `deploy-pages`); y el resto de las Actions, actualizando el SHA y el comentario. Las de Pages van aparte porque no se ejecutan en los pull requests: solo se prueban al desplegar, así que conviene fusionarlas solas y revisar ese despliegue. Solo se proponen versiones publicadas hace al menos 7 días (`cooldown`), para dar tiempo a que se detecte y retire un paquete comprometido. Las actualizaciones de seguridad no esperan: Dependabot las abre en cuanto sale el aviso.

No se genera un SBOM en el pipeline: el lockfile ya fija cada versión, y si hace falta el inventario en formato SPDX se exporta desde *Insights › Dependency graph › Export SBOM* del repositorio.

### Dependencias forzadas por seguridad

[pnpm-workspace.yaml](pnpm-workspace.yaml) contiene `overrides` que suben versiones transitivas vulnerables que Next.js o ESLint fijan internamente. El motivo detallado de cada uno está comentado en ese archivo; si se agrega o se cambia uno, esta tabla se actualiza en el mismo commit.

| Paquete | Forzado a | Llega vía | Motivo |
|---|---|---|---|
| `postcss` | `^8.5.16` | Next.js | XSS ([GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93)) |
| `brace-expansion@1` | `^1.1.21` | ESLint › minimatch@3 | Cuatro DoS: arrays intermedios sin límite ([GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895)), recursión sin límite ([GHSA-6j4f-fj2g-mc7p](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p), [GHSA-qhr7-859c-m2p7](https://github.com/advisories/GHSA-qhr7-859c-m2p7)) y expansión cuadrática ([GHSA-q2hr-2g5m-vwhr](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr)) |
| `brace-expansion@5` | `^5.0.12` | ESLint › minimatch@10 | Los mismos cuatro DoS |
| `browserslist` | `^4.28.7` | styled-jsx › @babel/core | Escritura en el prototipo ([GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g)) y caché sin límite ([GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)) |
| `nanoid@3` | `^3.3.18` | postcss | Bucle infinito con `size` cero ([GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8)) |
| `sharp` | `^0.35.4` | Next.js | libvips ([GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)) y libheif ([GHSA-rgj7-g3m4-5g8c](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c)) vulnerables |
| `baseline-browser-mapping` | `^2.11.0` | Next.js | Terminación del proceso ante entrada inválida ([GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv)) |

Cuando un aviso no tiene versión parchada, no hay override posible. En ese caso se ignora de forma explícita en `auditConfig.ignoreGhsas`, dentro del mismo archivo, con el motivo y la condición para quitarlo. Así `pnpm audit` deja de bloquear el despliegue solo por ese aviso. Hoy hay uno:

| Aviso ignorado | Paquete | Llega vía | Por qué se acepta | Se quita cuando |
|---|---|---|---|---|
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | `braces@3.0.3` | @next/eslint-plugin-next › fast-glob › micromatch | DoS con patrones muy anidados; solo corre en ESLint, sobre los patrones del repositorio, sin entrada externa | Se publique el parche |

## Operación

- **Revertir un despliegue:** `git revert <commit>` en una rama y PR a `main`; al fusionarlo, el workflow vuelve a publicar la versión anterior en alrededor de un minuto. `git reset` seguido de `push --force` no funciona: la protección de `main` lo rechaza. Para salir del paso sin tocar el historial, se puede relanzar desde la pestaña Actions la ejecución de un commit anterior, pero el siguiente push a `main` la sustituye.
- **Cabeceras de seguridad y TLS:** se editan en el panel de Cloudflare del dominio, según [docs/cloudflare.md](docs/cloudflare.md). Tras cambiarlas, actualiza los valores esperados en [check-headers.sh](.github/scripts/check-headers.sh) y ejecútalo (`bash .github/scripts/check-headers.sh`).
- **Revisión semanal del sitio publicado:** el workflow [produccion.yml](.github/workflows/produccion.yml) corre cada lunes. Compara las cabeceras reales con las de `check-headers.sh` y mide con Lighthouse la portada, Desarrollo de Software y Git, con una meta de 90 en rendimiento, accesibilidad, buenas prácticas y SEO ([lighthouserc.json](.github/lighthouserc.json)). Si algo falla, abre o actualiza un issue con la etiqueta `cabeceras` o `rendimiento`. No bloquea despliegues.
- **Dominio:** Pages (ajustes del repositorio) y el DNS en Cloudflare deben apuntar al mismo dominio. El registro del dominio se renueva en su registrador; conviene tener activada la renovación automática.
- **Enlaces rotos:** el workflow [links.yml](.github/workflows/links.yml) genera el sitio cada lunes y revisa con [lychee](https://github.com/lycheeverse/lychee) todos los enlaces del HTML exportado, incluidas las rutas internas y las anclas (`#…`). Si alguno falla, abre un issue con la etiqueta `enlaces`, o actualiza el que ya esté abierto. LinkedIn, Instagram, X y TikTok se excluyen porque bloquean a los bots. Se puede lanzar a mano desde la pestaña Actions.
- **Alertas de dependencias:** llegan como alertas y PR de Dependabot. Cada PR ejecuta el mismo workflow, y no se puede fusionar hasta que el check `build` pase; al fusionarlo, el sitio se redespliega solo. Tras fusionar el PR de las Actions de Pages, revisa que ese despliegue termine bien.
- **Seguridad del repositorio:** se configura en los ajustes de GitHub, no en archivos. Hoy están activos:
  - el ruleset *Proteger main*, que impide borrar la rama y reescribir su historial, sin excepciones;
  - el ruleset *Checks en PR*, que exige que todo cambio a `main` llegue por pull request (sin aprobaciones requeridas, porque hay un solo mantenedor) y con el check `build` en verde. No tiene excepciones: ni el administrador puede hacer push directo;
  - el escaneo de secretos con protección de push, que rechaza un push que contenga una credencial reconocible;
  - CodeQL en modo *Default* para JavaScript/TypeScript y Actions, con los resultados en la pestaña Security;
  - el reporte privado de vulnerabilidades, anunciado en [SECURITY.md](SECURITY.md).
- **Si se compromete una cuenta** (GitHub, Cloudflare o el registrador del dominio):
  1. Recupera el acceso, cambia la contraseña y cierra todas las sesiones abiertas.
  2. Revoca los tokens, llaves SSH, aplicaciones OAuth y llaves de API que no reconozcas, y revisa que el MFA siga activo y con tus métodos.
  3. En GitHub, revisa los commits recientes de `main`, los rulesets, los secretos y las ejecuciones de Actions. Si alguien publicó contenido, revierte con `git revert` en un PR.
  4. En Cloudflare y en el registrador, revisa los registros DNS, los nameservers y las cabeceras. `bash .github/scripts/check-headers.sh` confirma estas últimas.
  5. Anota qué pasó y qué cambiaste para evitar que se repita.

## Desarrollo local

Requisitos: Node.js 24 (la versión está en [.nvmrc](.nvmrc), la misma que usan los workflows) y [pnpm](https://pnpm.io/installation) ≥ 11 (la versión exacta está en el campo `packageManager` de [package.json](package.json)).

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo en http://localhost:3000
pnpm lint        # revisar el código con ESLint
pnpm format      # formatear el código con Prettier
pnpm audit       # buscar vulnerabilidades conocidas en las dependencias
pnpm build       # generar el sitio estático en out/
pnpm start       # servir out/ en http://localhost:4173, igual que GitHub Pages
pnpm test:e2e    # pruebas con Playwright sobre out/ (requiere pnpm build)
```

Antes de subir un cambio conviene ejecutar `pnpm lint`, `pnpm format:check`, `pnpm audit --audit-level high`, `pnpm build` y `pnpm test:e2e`: son los mismos pasos que corre el workflow, y si alguno falla el sitio no se despliega. La configuración de Prettier está en [.prettierrc.json](.prettierrc.json) (líneas de hasta 120 caracteres); el Markdown, el lockfile y los textos de licencia se excluyen en [.prettierignore](.prettierignore).

### Pruebas end-to-end

[e2e/navbar.spec.ts](e2e/navbar.spec.ts) prueba con Playwright la única parte interactiva del sitio, el Navbar: que cada enlace del menú de escritorio y del móvil lleve a su página; que el desplegable de Recursos se abra con clic aunque el mouse se haya detenido antes encima, y se cierre con clic, Escape o un clic fuera; que el menú móvil se cierre al navegar, al desplazarse y con Escape; que se quede abierto a mitad y al final de la página; y que, cerrado, sus enlaces no reciban el foco con Tab. Las tres últimas son regresiones de errores reales. [e2e/routes.spec.ts](e2e/routes.spec.ts) comprueba que las rutas estables existan y coincidan con el sitemap, y que `robots.txt` apunte a él. Las pruebas corren contra el sitio ya exportado, servido por [e2e/serve.mjs](e2e/serve.mjs) igual que GitHub Pages (cada ruta es una carpeta con su `index.html`), así que prueban exactamente lo que se publica. La primera vez hay que instalar el navegador con `pnpm exec playwright install chromium`.

## Costos

Todo lo que usa el repositorio es gratuito mientras el repositorio sea **público**:

- **GitHub Actions**: minutos ilimitados en los runners estándar (`ubuntu-latest`) para repositorios públicos. Los artefactos (resultados de Lighthouse y de Playwright) tampoco cuentan contra ningún límite de pago.
- **GitHub Pages**, **Dependabot**, **CodeQL**, el **escaneo de secretos** y el **reporte privado de vulnerabilidades**: gratuitos en repositorios públicos.
- **Cloudflare**: el plan Free incluye el proxy, *Always Use HTTPS*, el TLS mínimo, las Transform Rules de cabeceras y Web Analytics.
- **Herramientas y dependencias** (Next.js, React, Tailwind, Playwright, Lighthouse CI, lychee y las demás): de código abierto con licencias permisivas. Lighthouse CI no usa servidor propio ni almacenamiento público temporal.

El único costo es el **registro del dominio** `carlosalbertoxw.com`, que se paga cada año en el registrador. Si el repositorio pasara a privado, Actions empezaría a consumir minutos de la cuota del plan, CodeQL y el escaneo de secretos requerirían GitHub Advanced Security, y Pages exigiría un plan de pago.

## Licencia

El repositorio tiene dos licencias, según lo que se reutilice:

- **Código** — componentes, estilos, configuración y workflows: [MIT](LICENSE). Puedes usarlo en tus proyectos conservando el aviso de copyright.
- **Contenido** — los textos de las páginas, incluidos los listados, guías y temarios escritos dentro de los archivos de `src/app/`: [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](LICENSE-CONTENT). Puedes copiarlo, adaptarlo y usarlo con cualquier fin, siempre que cites la fuente: *Carlos Alberto, [carlosalbertoxw.com](https://carlosalbertoxw.com)*, con enlace a la página original.

Quedan fuera de ambas licencias mi nombre, mi información biográfica y los nombres y logotipos de mis proyectos (Ollin, Cotejo y los demás enlazados en la portada): no pueden usarse para presentar otro sitio o producto como mío o como respaldado por mí. Las publicaciones del blog enlazadas se rigen por lo que indique el propio blog.

Parte del código se escribe con ayuda de asistentes de IA; todos los cambios los dirijo y reviso yo antes de integrarlos.
