import Link from "next/link";

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
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Aplicaciones & Extensiones</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">YouTube Playlist Analyzer</h3>
              <div className="flex gap-4 mb-4 text-sm font-medium">
                <Link 
                  target="_blank" 
                  href="https://herramientaswebsencillas.github.io/youtube-playlist-analyzer/"
                  className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4"
                >
                  Sitio Web
                </Link>
                <span className="text-slate-300">|</span>
                <Link 
                  target="_blank" 
                  href="https://github.com/herramientaswebsencillas/youtube-playlist-analyzer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Herramienta web gratuita que revisa playlists públicas de YouTube y YouTube Music para encontrar canciones duplicadas y videos que ya no se pueden reproducir.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Herramientas Web Sencillas</h3>
              <div className="flex gap-4 mb-4 text-sm font-medium">
                <Link 
                  target="_blank" 
                  href="https://herramientaswebsencillas.github.io/"
                  className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4"
                >
                  Sitio Web
                </Link>
                <span className="text-slate-300">|</span>
                <Link 
                  target="_blank" 
                  href="https://github.com/herramientaswebsencillas/herramientaswebsencillas.github.io"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Colección de utilidades web desarrolladas como un sitio web estático usando Next.js y GitHub Pages.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">HTTPS Verifier</h3>
              <div className="flex gap-4 mb-4 text-sm font-medium">
                <Link 
                  target="_blank" 
                  href="https://chromewebstore.google.com/detail/ogfgecooebcghjojlklphjjajaegcpen"
                  className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4"
                >
                  Chrome Store
                </Link>
                <span className="text-slate-300">|</span>
                <Link 
                  target="_blank" 
                  href="https://github.com/carlosalbertoxw/HTTPSVerifier"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Extensión web para Google Chrome que comprueba y garantiza que las páginas web y sus recursos asociados utilicen conexiones HTTPS seguras.
              </p>
            </div>

            {/* Espacio para futuras aplicaciones */}
          </div>
        </section>

      </div>
    </main>
  );
}