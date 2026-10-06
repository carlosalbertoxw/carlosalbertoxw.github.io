import { Fragment } from "react";
import ExternalLink from "@/components/ExternalLink";

// Proyectos de la portada: agregar uno es sumarlo a este arreglo
const projects = [
  {
    name: "Cotejo",
    links: [
      { label: "Sitio Web", href: "https://carlosalbertoxw.com/cotejo-file-comparison/" },
      { label: "GitHub", href: "https://github.com/carlosalbertoxw/cotejo-file-comparison" },
    ],
    description:
      "Cotejo es una aplicación de escritorio para comparar archivos de texto y carpetas completas. Muestra los dos lados enfrentados línea a línea, deja editarlos, copiar bloques de uno a otro, y operar sobre los archivos desde la vista de carpetas.",
  },
  {
    name: "YouTube Playlist Analyzer",
    links: [
      { label: "Sitio Web", href: "https://herramientaswebsencillas.github.io/youtube-playlist-analyzer/" },
      { label: "GitHub", href: "https://github.com/herramientaswebsencillas/youtube-playlist-analyzer" },
    ],
    description:
      "Herramienta web gratuita que revisa playlists públicas de YouTube y YouTube Music para encontrar canciones duplicadas y videos que ya no se pueden reproducir.",
  },
  {
    name: "Herramientas Web Sencillas",
    links: [
      { label: "Sitio Web", href: "https://herramientaswebsencillas.github.io/" },
      { label: "GitHub", href: "https://github.com/herramientaswebsencillas/herramientaswebsencillas.github.io" },
    ],
    description: "Colección de utilidades web.",
  },
  {
    name: "HTTPS Verifier",
    links: [
      { label: "Chrome Store", href: "https://chromewebstore.google.com/detail/ogfgecooebcghjojlklphjjajaegcpen" },
      { label: "GitHub", href: "https://github.com/carlosalbertoxw/HTTPSVerifier" },
    ],
    description:
      "Extensión web para Google Chrome que comprueba y garantiza que las páginas web y sus recursos asociados utilicen conexiones HTTPS seguras.",
  },
  {
    name: "Ollin Finanzas",
    links: [
      { label: "Sitio Web", href: "https://carlosalbertoxw.com/ollin-finanzas/" },
      { label: "GitHub", href: "https://github.com/carlosalbertoxw/ollin-finanzas" },
    ],
    description:
      'App Android de finanzas personales: registra lo que entra y lo que sale, lo clasifica, y te dice en qué se te está yendo el dinero. Ollin es "movimiento" en náhuatl, el glifo del calendario mexica que representa el cambio — justo lo que registra un libro de finanzas.',
  },
  {
    name: "Ollin Actividades",
    links: [
      { label: "Sitio Web", href: "https://carlosalbertoxw.com/ollin-actividades/" },
      { label: "GitHub", href: "https://github.com/carlosalbertoxw/ollin-actividades" },
    ],
    description:
      "Bitácora personal de tiempo para Android: cronometra o captura a mano lo que haces, lleva hábitos con la cadencia que quieras y mira en qué se te fue la semana. Todo vive en el teléfono, en una base cifrada; no hay cuenta, nube ni publicidad.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Carlos Alberto
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Conjunto de recursos digitales para exponer y recordar lo que he aprendido.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* SECCIÓN: Aplicaciones & Extensiones */}
        <section>
          <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
            <div className="bg-blue-600/10 p-2.5 rounded-xl mr-4">
              <svg
                className="w-7 h-7 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Aplicaciones & Extensiones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.name}</h3>
                <div className="flex gap-4 mb-4 text-sm font-medium">
                  {project.links.map((link, index) => (
                    <Fragment key={link.href}>
                      {index > 0 && (
                        <span className="text-slate-300" aria-hidden="true">
                          |
                        </span>
                      )}
                      <ExternalLink
                        href={link.href}
                        className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4"
                      >
                        {link.label}
                      </ExternalLink>
                    </Fragment>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
