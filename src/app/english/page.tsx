import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inglés - Carlos Alberto",
  description: "Recursos, herramientas y consejos para dominar el idioma inglés.",
};

const englishResources = [
  {
    title: "¿Cómo dominar el idioma inglés?",
    tag: "Estrategia",
    description: "Una guía sobre los pilares fundamentales para alcanzar la fluidez y consejos para no desistir en el proceso.",
    href: "https://blog.carlosalbertoxw.com/2022/12/como-dominar-el-idioma-ingles.html",
    icon: "🎯"
  },
  {
    title: "Duolingo",
    tag: "Herramienta",
    description: "Análisis sobre cómo aprovechar esta plataforma para construir hábito y vocabulario básico de forma lúdica.",
    href: "https://blog.carlosalbertoxw.com/2023/02/duolingo.html",
    icon: "🦉"
  }
];

export default function English() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header con estilo académico moderno */}
      <header className="bg-[#1a237e] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Learning English
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed italic">
            The limits of my language mean the limits of my world.
          </p>
          <p className="mt-4 text-blue-200/80 text-sm max-w-xl mx-auto">
            Recopilación de herramientas y métodos que he utilizado para expandir mis horizontes a través del inglés.
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 -mt-10 pb-20">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-12 text-slate-600 leading-relaxed text-justify">
          <p>
            A continuación, presento una serie de publicaciones sobre herramientas y recursos para aprender inglés. 
          </p>
        </div>

        {/* Recursos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {englishResources.map((item, index) => (
            <Link 
              key={index}
              href={item.href}
              target="_blank"
              className="group bg-white rounded-2xl border-b-4 border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all p-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{item.icon}</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase">
                  {item.tag}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-3">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm flex-grow leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center text-blue-600 text-sm font-semibold">
                Ver publicación completa
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Notificación de actualización */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200/50 rounded-full text-slate-500 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Actualizado conforme a nuevas publicaciones en el blog
          </div>
        </div>
      </section>
    </main>
  );
}