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

        {/* SECCIÓN: Herramientas */}
        <section>
          <div className="flex items-center mb-10 border-b border-slate-200 pb-4">
            <div className="bg-emerald-600/10 p-2.5 rounded-xl mr-4">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Herramientas</h2>
          </div>
          
          {/* Grid de Categorías 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            
            {/* Categoría: Calculadoras */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-purple-200"></span>
                Calculadoras
              </h3>
              <div className="space-y-4">
                <Link href="/tools/compoundInterestCalculator" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 mb-1 transition-colors">
                    Calculadora de Interés Compuesto
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Herramienta para calcular el crecimiento del interés a lo largo del tiempo basado en la frecuencia, capital y tasa.
                  </p>
                </Link>
                <Link href="/tools/loanCalculator" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 mb-1 transition-colors">
                    Calculadora de Préstamos
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Calcula tu cuota, compara sistemas de amortización y visualiza tu tabla de pagos incluyendo seguros u otros gastos.
                  </p>
                </Link>
              </div>
            </div>

            {/* Categoría: Generadores */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-amber-200"></span>
                Generadores
              </h3>
              <div className="space-y-4">
                <Link href="/tools/randomString" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 mb-1 transition-colors">
                    Generador de Texto Aleatorio
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Crea cadenas de texto, contraseñas seguras y secuencias de caracteres aleatorias al instante.
                  </p>
                </Link>
                <Link href="/tools/randomNumbers" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 mb-1 transition-colors">
                    Generador de Números Aleatorios
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Genera números al azar de forma gratuita. Configura rangos personalizados y evita repeticiones.
                  </p>
                </Link>
              </div>
            </div>

            {/* Categoría: Convertidores */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-200"></span>
                Convertidores
              </h3>
              <div className="space-y-4">
                <Link href="/tools/base64converter" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-1 transition-colors">
                    Convertidor Base64
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Herramienta para convertir texto a codificación Base64 y viceversa de forma instantánea.
                  </p>
                </Link>
                <Link href="/tools/base64FileConverter" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-1 transition-colors">
                    Convertidor de Archivos Base64
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Herramienta para convertir archivos a codificación Base64 y viceversa de forma instantánea.
                  </p>
                </Link>
                <Link href="/tools/textToBinary" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 mb-1 transition-colors">
                    Traductor de Texto a Binario
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Convierte texto a código binario y viceversa de forma rápida.
                  </p>
                </Link>
              </div>
            </div>

            {/* Categoría: Manejo de Archivos */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-emerald-200"></span>
                Manejo de Archivos
              </h3>
              <div className="space-y-4">
                <Link href="/tools/pdfPageSplitter" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 mb-1 transition-colors">
                    Divisor de Páginas de PDF
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Segmenta archivos PDF en documentos individuales por página de manera segura.
                  </p>
                </Link>
                <Link href="/tools/pdfMerger" className="block bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 mb-1 transition-colors">
                    Unir PDF
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Combina múltiples archivos PDF en un solo documento de forma segura.
                  </p>
                </Link>
              </div>
            </div>

          </div>
        </section>

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