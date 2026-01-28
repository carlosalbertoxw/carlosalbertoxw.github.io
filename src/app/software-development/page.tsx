import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Software",
  description: "Trayectoria profesional y recursos de aprendizaje de Carlos Alberto.",
};

const tools = [
  { name: "LeetCode", href: "https://blog.carlosalbertoxw.com/2023/03/leetcode.html" },
  { name: "HackerRank", href: "https://blog.carlosalbertoxw.com/2023/03/hackerrank.html" },
  { name: "Entorno de Desarrollo .NET", href: "https://blog.carlosalbertoxw.com/2023/04/entorno-para-desarrollo-en-net.html" },
  { name: "Entorno de Desarrollo Java", href: "https://blog.carlosalbertoxw.com/2025/05/entorno-para-desarrollo-en-java.html" },
  { name: "Entorno de Desarrollo JavaScript", href: "https://blog.carlosalbertoxw.com/2023/04/entorno-para-desarrollo-en-javascript.html" },
  { name: "Entorno de Desarrollo Python", href: "https://blog.carlosalbertoxw.com/2025/05/entorno-para-desarrollo-en-python.html" },
  { name: "Git", href: "https://blog.carlosalbertoxw.com/2023/03/git.html" },
  { name: "GitHub", href: "https://blog.carlosalbertoxw.com/2023/03/github.html" },
  { name: "Docker", href: "https://blog.carlosalbertoxw.com/2023/08/docker.html" },
  { name: "Docker Compose", href: "https://blog.carlosalbertoxw.com/2023/08/docker-compose.html" },
  { name: "Pruebas Unitarias", href: "https://blog.carlosalbertoxw.com/2025/05/pruebas-unitarias-en-el-desarrollo-de-software.html" },
  { name: "Ciclo de Vida (SDLC)", href: "https://blog.carlosalbertoxw.com/2023/04/ciclo-de-vida-del-desarrollo-de-software.html" },
];

const exercises = [
  { name: "Algorithm Exercises C#", href: "https://github.com/carlosalbertoxw/AlgorithmExercisesCSharp" },
  { name: "Algorithm Exercises Java", href: "https://github.com/carlosalbertoxw/AlgorithmExercisesJava" },
  { name: "Algorithm Exercises TypeScript", href: "https://github.com/carlosalbertoxw/AlgorithmExercisesTS" },
  { name: "Algorithm Exercises Python", href: "https://github.com/carlosalbertoxw/AlgorithmExercisesPython" },
  { name: "Next.js GitHub Actions", href: "https://github.com/carlosalbertoxw/nextjs-github-actions" },
  { name: "Web Extensions Samples", href: "https://github.com/carlosalbertoxw/web-extensions-samples" },
];

export default function SoftwareDevelopment() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header de la página */}
      <header className="bg-white border-b border-slate-200 py-16 mb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Desarrollo de Software
          </h1>
          <div className="prose prose-slate lg:prose-lg mx-auto text-slate-600 leading-relaxed text-justify">
            <p>
              Profesionalmente, me he desempeñado en el campo del desarrollo de software desde el año **2017** en una empresa de consultoría de TI. Mi labor se centra en la creación de nuevas funcionalidades y la resolución de problemas operativos de raíz para diversas empresas.
            </p>
            <p>
              Aquí comparto publicaciones y ejercicios que podrían servir como guía para otros y como validación de mis conocimientos.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SECCIÓN: HERRAMIENTAS */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-blue-600 w-2 h-8 rounded-full"></span>
              <h2 className="text-2xl font-bold text-slate-800">Herramientas & Conceptos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <Link 
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  className="flex items-center p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <span className="text-slate-600 group-hover:text-blue-600 text-sm font-medium">
                    {tool.name}
                  </span>
                  <svg className="w-4 h-4 ml-auto text-slate-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* SECCIÓN: EJERCICIOS */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <span className="bg-emerald-500 w-2 h-8 rounded-full"></span>
              <h2 className="text-2xl font-bold text-slate-800">Ejercicios de Código</h2>
            </div>
            <div className="space-y-3">
              {exercises.map((ex) => (
                <Link 
                  key={ex.name}
                  href={ex.href}
                  target="_blank"
                  className="flex items-center p-4 bg-[#0f172a] rounded-xl hover:bg-slate-800 transition-colors group"
                >
                  <div className="flex flex-col">
                    <span className="text-slate-100 font-semibold group-hover:text-blue-400 transition-colors">
                      {ex.name}
                    </span>
                    <span className="text-slate-500 text-xs">Repositorio de GitHub</span>
                  </div>
                  <svg className="w-5 h-5 ml-auto text-slate-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Cierre de página */}
        <footer className="mt-20 p-8 bg-blue-50 rounded-3xl text-center border border-blue-100">
          <p className="text-blue-900 font-medium mb-4">
            Si crees que puedo ayudarte en algo, no dudes en contactarme.
          </p>
          <Link 
            href="/links" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Contactar
          </Link>
        </footer>
      </div>
    </main>
  );
}