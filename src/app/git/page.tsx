import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git - Guía y Comandos",
  description: "Recopilación de comandos y conceptos sobre el sistema de control de versiones Git.",
};

const gitLinks = [
  { name: "Introducción a Git", href: "https://blog.carlosalbertoxw.com/2023/03/git.html", category: "Básico" },
  { name: "Configuración inicial", href: "https://blog.carlosalbertoxw.com/2023/07/configuracion-inicial-de-git.html", category: "Básico" },
  { name: "Inicializar o clonar", href: "https://blog.carlosalbertoxw.com/2023/07/inicializar-o-clonar-repositorio-git.html", category: "Básico" },
  { name: "Opciones de git clone", href: "https://blog.carlosalbertoxw.com/2023/07/opciones-de-comando-git-clone.html", category: "Básico" },
  { name: "Git status", href: "https://blog.carlosalbertoxw.com/2023/07/git-status.html", category: "Flujo" },
  { name: "Git add", href: "https://blog.carlosalbertoxw.com/2023/07/git-add.html", category: "Flujo" },
  { name: "Git commit", href: "https://blog.carlosalbertoxw.com/2023/07/git-commit.html", category: "Flujo" },
  { name: "Git restore", href: "https://blog.carlosalbertoxw.com/2023/07/git-restore.html", category: "Cambios" },
  { name: "Git clean", href: "https://blog.carlosalbertoxw.com/2023/07/git-clean.html", category: "Cambios" },
  { name: "Git reset", href: "https://blog.carlosalbertoxw.com/2023/07/git-reset.html", category: "Cambios" },
  { name: "Git tag", href: "https://blog.carlosalbertoxw.com/2023/07/git-tag.html", category: "Organización" },
  { name: "Git branch", href: "https://blog.carlosalbertoxw.com/2023/07/git-branch.html", category: "Ramas" },
  { name: "Git checkout", href: "https://blog.carlosalbertoxw.com/2023/07/git-checkout.html", category: "Ramas" },
  { name: "Git merge", href: "https://blog.carlosalbertoxw.com/2023/07/git-merge.html", category: "Ramas" },
  { name: "Git rebase", href: "https://blog.carlosalbertoxw.com/2023/07/git-rebase.html", category: "Ramas" },
  { name: "Git remote add", href: "https://blog.carlosalbertoxw.com/2023/07/git-remote-add.html", category: "Remoto" },
  { name: "Git push", href: "https://blog.carlosalbertoxw.com/2023/07/git-push.html", category: "Remoto" },
  { name: "Git fetch", href: "https://blog.carlosalbertoxw.com/2023/07/git-fetch.html", category: "Remoto" },
  { name: "Git pull", href: "https://blog.carlosalbertoxw.com/2023/07/git-pull.html", category: "Remoto" },
  { name: "Git cherry-pick", href: "https://blog.carlosalbertoxw.com/2023/07/git-cherry-pick.html", category: "Avanzado" },
  { name: "Git stash", href: "https://blog.carlosalbertoxw.com/2023/07/git-stash.html", category: "Avanzado" },
  { name: "Git diff", href: "https://blog.carlosalbertoxw.com/2023/07/git-diff.html", category: "Inspección" },
  { name: "Git show", href: "https://blog.carlosalbertoxw.com/2023/07/git-show.html", category: "Inspección" },
  { name: "Git log", href: "https://blog.carlosalbertoxw.com/2023/07/git-log.html", category: "Inspección" },
  { name: "Gitignore", href: "https://blog.carlosalbertoxw.com/2023/07/gitignore.html", category: "Configuración" },
];

export default function Git() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Estilo Documentación */}
      <header className="bg-slate-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-4 text-orange-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.277 12c0 .267-.105.522-.293.71l-9.72 9.72c-.188.188-.443.293-.71.293s-.522-.105-.71-.293l-1.92-1.92c-.392-.392-.392-1.028 0-1.42l1.21-1.21c-.13-.34-.2-.71-.2-1.1 0-1.66 1.34-3 3-3 .39 0 .76.07 1.1.2l1.21-1.21c.392-.392 1.028-.392 1.42 0l1.92 1.92c.188.188.293.443.293.71zm-13.84 3.12c-.13-.34-.2-.71-.2-1.1 0-1.66 1.34-3 3-3 .39 0 .76.07 1.1.2l1.21-1.21c.392-.392 1.028-.392 1.42 0l1.92 1.92c.188.188.293.443.293.71s-.105.522-.293.71l-9.72 9.72c-.188.188-.443.293-.71.293s-.522-.105-.71-.293l-1.92-1.92c-.392-.392-.392-1.028 0-1.42l1.21-1.21zM4.723 12c0-.267.105-.522.293-.71l9.72-9.72c.188-.188.443-.293.71-.293s.522.105.71.293l1.92 1.92c.392.392.392 1.028 0 1.42l-1.21 1.21c.13.34.2.71.2 1.1 0 1.66-1.34 3-3 3-.39 0-.76-.07-1.1-.2l-1.21 1.21c-.392.392-1.028.392-1.42 0L10.713 11.29c-.188-.188-.293-.443-.293-.71s.105-.522.293-.71l9.72-9.72c.188-.188.443-.293.71-.293s.522.105.71.293l1.92 1.92c.392.392.392 1.028 0 1.42l-1.21 1.21z"/>
            </svg>
            <h1 className="text-4xl font-bold tracking-tight">Git Cheat Sheet</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl text-justify leading-relaxed">
            Una recopilación estructurada de comandos y flujos de trabajo en Git. 
            Esta guía está diseñada para servir como referencia rápida y validación de conocimientos en el control de versiones.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 -mt-8">
        {/* Grid de Comandos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gitLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              className="group bg-white border border-slate-200 p-5 rounded-lg shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-orange-500 transition-colors">
                  {link.category}
                </span>
                <span className="text-slate-800 font-mono text-sm font-semibold flex items-center">
                  <span className="text-orange-500 mr-2 font-bold">$</span>
                  {link.name.toLowerCase().replace(/ /g, "-")}
                </span>
              </div>
              <div className="mt-4 flex items-center text-xs text-slate-400 italic">
                Ver detalle de comando
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer de la página */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
          <p className="text-slate-600 mb-4">
            Si crees que puedo ayudarte en algo, no dudes en contactarme.
          </p>
          <Link 
            href="/links" 
            className="text-orange-600 font-bold hover:text-orange-700 underline decoration-2 underline-offset-4"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}