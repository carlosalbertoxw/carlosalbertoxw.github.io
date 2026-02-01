import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emprendimiento y Finanzas",
  description: "Publicaciones y consejos sobre finanzas personales y emprendimiento.",
};

const commonAdvice = [
  { name: "Tipos de Inversiones", href: "https://blog.carlosalbertoxw.com/2026/01/tipos-de-inversiones.html" },
  { name: "Un Consejo Financiero", href: "https://blog.carlosalbertoxw.com/2023/03/un-consejo-financiero.html" },
  { name: "Cómo Lograr la Libertad Financiera", href: "https://blog.carlosalbertoxw.com/2016/11/como-lograr-la-libertad-financiera.html" },
  { name: "Un Consejo Legal", href: "https://blog.carlosalbertoxw.com/2026/01/un-consejo-legal.html" },
  { name: "Un Consejo Contable", href: "https://blog.carlosalbertoxw.com/2026/01/un-consejo-contable.html" },
  { name: "Un Consejo de Mercadotecnia", href: "https://blog.carlosalbertoxw.com/2026/01/un-consejo-de-mercadotecnia.html" },
  { name: "Consejos para Mejorar las Habilidades de Comunicación y Venta", href: "https://blog.carlosalbertoxw.com/2023/04/consejos-para-mejorar-las-habilidades-de-comunicacion-y-venta.html" },
  { name: "Consejos para Vender un Producto o Servicio", href: "https://blog.carlosalbertoxw.com/2016/10/consejos-para-vender-un-producto-o-servicio.html" },
  { name: "Un Consejo de Seguridad Informática", href: "https://blog.carlosalbertoxw.com/2026/01/un-consejo-de-seguridad-informatica.html" },
];

const entrepreneurGuides = [
  { name: "Qué son las Incubadoras y Aceleradoras de Negocios", href: "https://blog.carlosalbertoxw.com/2026/01/que-son-las-incubadoras-y-aceleradoras.html" },
  { name: "Modelo de Negocios Canvas", href: "https://blog.carlosalbertoxw.com/2026/01/modelo-de-negocios-canvas.html" },
  { name: "Qué es el Coworking", href: "https://blog.carlosalbertoxw.com/2026/01/que-es-el-coworking.html" },
  { name: "Guía Legal para Emprendedores", href: "https://blog.carlosalbertoxw.com/2026/01/guia-legal-para-emprendedores.html" },
  { name: "Guía Contable para Emprendedores", href: "https://blog.carlosalbertoxw.com/2026/01/guia-contable-para-emprendedores.html" },
  { name: "Guía de Mercadotecnia para Emprendedores", href: "https://blog.carlosalbertoxw.com/2026/01/guia-de-mercadotecnia-para-emprendedores.html" },
  { name: "Guía de TI para Emprendedores", href: "https://blog.carlosalbertoxw.com/2026/01/guia-de-ti-para-emprendedores.html" },
];

export default function EntrepreneurshipFinance() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section / Header */}
      <header className="bg-white border-b border-slate-200 py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-4">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Emprendimiento y Finanzas
          </h1>
          <div className="prose prose-slate lg:prose-lg mx-auto text-slate-600 leading-relaxed text-justify">
            <p>
              A lo largo de mi trayectoria he desarrollado un profundo interés por el mundo del emprendimiento. 
              He aprendido de historias ajenas, libros y cursos, pero sobre todo, de mis propios **aciertos y fracasos**.
            </p>
            <p>
              Comparto estos recursos con el objetivo de que sirvan como guía para quienes inician su camino 
              y como un espacio para recordar lo que he aprendido.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SECCIÓN: CONSEJOS */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-emerald-500 w-2 h-8 rounded-full"></span>
              <h2 className="text-2xl font-bold text-slate-800">Consejos Financieros</h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {commonAdvice.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="flex items-center p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <div className="flex-1">
                    <span className="text-slate-700 group-hover:text-emerald-700 font-medium transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* SECCIÓN: GUÍAS */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-slate-800 w-2 h-8 rounded-full"></span>
              <h2 className="text-2xl font-bold text-slate-800">Guías para Emprendedores</h2>
            </div>
            <div className="bg-[#0f172a] rounded-3xl p-6 shadow-xl border border-slate-800">
              <div className="space-y-2">
                {entrepreneurGuides.map((guide) => (
                  <Link 
                    key={guide.name}
                    href={guide.href}
                    target="_blank"
                    className="flex items-center p-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm md:text-base font-medium">{guide.name}</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Tarjeta de Contacto Contextual */}
            <div className="mt-8 p-6 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-200/50">
              <p className="text-emerald-100 text-sm mb-4">
                Si crees que puedo ayudarte en algo, no dudes en contactarme.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-emerald-700 px-6 py-2 rounded-lg font-bold text-sm hover:bg-emerald-50 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}