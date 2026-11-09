// Datos del sitio que se repiten en varias páginas y archivos generados
// (metadata, sitemap, robots, imagen Open Graph): se cambian solo aquí.

export const siteUrl = "https://carlosalbertoxw.com";

export const tagline = "Conjunto de recursos digitales para exponer y recordar lo que he aprendido.";

// Imagen para compartir en redes: la genera src/app/og.png/route.tsx y la declara
// la metadata de layout.tsx
export const ogImage = {
  url: "/og.png",
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "Carlos Alberto",
};
