import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productividad",
  description: "Estrategias y consejos para mejorar el enfoque y la eficiencia personal.",
};

const productivityPosts = [
  {
    title: "Un consejo de vida",
    description: "Una reflexión profunda sobre prioridades y cómo gestionar el tiempo que realmente importa.",
    href: "https://blog.carlosalbertoxw.com/2023/03/un-consejo-de-vida.html",
    date: "Marzo 2023"
  },
  {
    title: "¿Cómo mejorar la productividad?",
    description: "Técnicas accionables y herramientas para optimizar tu flujo de trabajo diario y evitar la procrastinación.",
    href: "https://blog.carlosalbertoxw.com/2022/12/como-mejorar-la-productividad.html",
    date: "Diciembre 2022"
  }
];

export default function Productivity() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Minimalista */}
      <header className="bg-emerald-900 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-emerald-800 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Focus & Flow
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Productividad
          </h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Explora mis notas sobre cómo optimizar el recurso más valioso que tenemos: <strong>el tiempo</strong>. 
            Una guía en constante crecimiento para trabajar de forma más inteligente.
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 -mt-12 pb-24">
        {/* Contenedor principal de posts */}
        <div className="space-y-8">
          {productivityPosts.map((post, index) => (
            <Link 
              key={index}
              href={post.href}
              target="_blank"
              className="block group bg-white border border-slate-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-emerald-200 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-xl font-bold">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed max-w-3xl text-justify">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center text-emerald-600 font-bold group-hover:translate-x-2 transition-transform">
                  Leer más
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Placeholder para futuras publicaciones */}
        <div className="mt-12 p-12 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-center">
          <div className="bg-slate-50 p-4 rounded-full mb-4">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-slate-400 font-medium">Más conceptos en camino</h3>
          <p className="text-slate-300 text-sm max-w-xs">
            Sigo validando y redactando nuevas estrategias que publicaré próximamente.
          </p>
        </div>
      </section>
    </main>
  );
}