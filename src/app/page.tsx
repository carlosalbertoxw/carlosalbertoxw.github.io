import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Carlos Alberto
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conjunto de recursos digitales para exponer y recordar lo que he aprendido.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">          
          <section>
            <div className="flex items-center mb-8">
              <div className="bg-blue-600/10 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Aplicaciones & Extensiones</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-2">HTTPS Verifier</h3>
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
          </section>
          <section>
            <div className="flex items-center mb-8">
              <div className="bg-emerald-600/10 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Herramientas</h2>
            </div>
            <div className="space-y-6">
              <Link href="/tools/base64converter" className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2 transition-colors">
                  Convertidor Base64
                </h3>
                <p className="text-slate-600 text-sm">
                  Herramienta para convertir texto a codificación Base64 y viceversa de forma instantánea.
                </p>
              </Link>
              <Link href="/tools/base64FileConverter" className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2 transition-colors">
                  Convertidor de Archivos Base64
                </h3>
                <p className="text-slate-600 text-sm">
                  Herramienta para convertir archivos a codificación Base64 y viceversa de forma instantánea.
                </p>
              </Link>
              <Link href="/tools/pdf-page-splitter" className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-2 transition-colors">
                  Divisor de Páginas de PDF
                </h3>
                <p className="text-slate-600 text-sm">
                  Segmenta archivos PDF en documentos individuales por página de manera segura.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}