import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git - Guía y Comandos",
  description: "Recopilación de comandos y conceptos sobre el sistema de control de versiones Git.",
};

type GitTopic = {
  title: string;
  detail?: string;
  mono?: boolean;
  href?: string;
};

type GitSection = {
  id: string;
  title: string;
  topics: GitTopic[];
};

const gitSections: GitSection[] = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    topics: [
      {
        title: "Control de versiones",
        detail: "qué problema resuelve, distribuido vs. centralizado",
        href: "https://blog.carlosalbertoxw.com/2023/03/git.html",
      },
      {
        title: "Configuración inicial",
        detail: "identidad, editor y opciones globales",
        href: "https://blog.carlosalbertoxw.com/2023/07/configuracion-inicial-de-git.html",
      },
      { title: "Repositorio", detail: ".git, repos locales y remotos" },
      { title: "Las tres áreas", detail: "working directory, staging area (index), repositorio" },
      { title: "Commit", detail: "snapshot, hash SHA-1, autor, mensaje" },
      {
        title: "git init / git clone",
        detail: "inicializar o clonar un repositorio",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/inicializar-o-clonar-repositorio-git.html",
      },
      {
        title: "git add",
        detail: "llevar cambios al staging area",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-add.html",
      },
      {
        title: "git commit",
        detail: "confirmar los cambios preparados",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-commit.html",
      },
      {
        title: "git status",
        detail: "estado del working directory y del index",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-status.html",
      },
      {
        title: "git log",
        detail: "historial de commits",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-log.html",
      },
      {
        title: ".gitignore",
        detail: "patrones de exclusión",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/gitignore.html",
      },
      {
        title: "git diff",
        detail: "comparar working dir, staging y commits",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-diff.html",
      },
    ],
  },
  {
    id: "ramas",
    title: "Ramas y navegación",
    topics: [
      {
        title: "Branch",
        detail: "es solo un puntero móvil a un commit",
        href: "https://blog.carlosalbertoxw.com/2023/07/git-branch.html",
      },
      { title: "HEAD", detail: "dónde estás parado; detached HEAD" },
      {
        title: "git checkout",
        detail: "moverse entre ramas y commits (forma clásica)",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-checkout.html",
      },
      { title: "git switch", detail: "alternativa moderna para cambiar de rama", mono: true },
      {
        title: "git restore",
        detail: "descartar cambios en archivos (forma moderna)",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-restore.html",
      },
      {
        title: "Merge",
        detail: "fast-forward vs. merge commit (three-way merge)",
        href: "https://blog.carlosalbertoxw.com/2023/07/git-merge.html",
      },
      { title: "Conflictos de merge", detail: "cómo se marcan y se resuelven" },
      {
        title: "Tags",
        detail: "ligeros vs. anotados",
        href: "https://blog.carlosalbertoxw.com/2023/07/git-tag.html",
      },
    ],
  },
  {
    id: "remotos",
    title: "Trabajo con remotos",
    topics: [
      {
        title: "Remote, origin, upstream",
        detail: "registrar y administrar repositorios remotos",
        href: "https://blog.carlosalbertoxw.com/2023/07/git-remote-add.html",
      },
      {
        title: "git fetch",
        detail: "traer cambios del remoto sin integrarlos",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-fetch.html",
      },
      {
        title: "git pull",
        detail: "fetch + merge/rebase",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-pull.html",
      },
      {
        title: "git push",
        detail: "ramas de seguimiento (tracking branches), origin/main",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-push.html",
      },
      { title: "Pull requests / merge requests", detail: "concepto de plataforma, no de Git" },
      {
        title: "Clonado superficial (--depth) y repos bare",
        detail: "opciones del comando git clone",
        href: "https://blog.carlosalbertoxw.com/2023/07/opciones-de-comando-git-clone.html",
      },
    ],
  },
  {
    id: "reescritura",
    title: "Reescritura de historia",
    topics: [
      {
        title: "git rebase",
        detail: "replantar commits, rebase interactivo (-i)",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-rebase.html",
      },
      { title: "Squash, fixup, reword, drop", detail: "acciones del rebase interactivo" },
      { title: "git commit --amend", detail: "corregir el último commit", mono: true },
      {
        title: "git cherry-pick",
        detail: "aplicar un commit puntual en otra rama",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-cherry-pick.html",
      },
      {
        title: "git reset",
        detail: "--soft, --mixed, --hard",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-reset.html",
      },
      { title: "git revert", detail: "deshacer creando un commit nuevo", mono: true },
      {
        title: "git clean",
        detail: "eliminar archivos no rastreados del working directory",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-clean.html",
      },
      { title: "La regla de oro", detail: "no reescribas historia ya publicada" },
      { title: "git push --force-with-lease", detail: "más seguro que --force", mono: true },
    ],
  },
  {
    id: "rescate",
    title: "Herramientas de investigación y rescate",
    topics: [
      {
        title: "git stash",
        detail: "stash pop, apply, list",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-stash.html",
      },
      {
        title: "git show",
        detail: "inspeccionar el contenido de un commit u objeto",
        mono: true,
        href: "https://blog.carlosalbertoxw.com/2023/07/git-show.html",
      },
      { title: "git reflog", detail: "la red de seguridad para recuperar commits \"perdidos\"", mono: true },
      { title: "git bisect", detail: "búsqueda binaria del commit que introdujo un bug", mono: true },
      { title: "git blame y git log -S", detail: "pickaxe, para buscar cambios de código", mono: true },
      { title: "Rangos de commits", detail: "A..B, A...B, HEAD~3, HEAD^2" },
    ],
  },
  {
    id: "internals",
    title: "Internals",
    topics: [
      { title: "Modelo de objetos", detail: "blob, tree, commit, tag" },
      { title: "Content-addressable storage", detail: "por qué el hash es el contenido" },
      { title: "Refs y packed-refs, ORIG_HEAD", detail: "cómo se apuntan los commits" },
      { title: "Índice (index)", detail: "como archivo binario real" },
      { title: "Packfiles y delta compression", detail: "git gc" },
      { title: "Garbage collection", detail: "y objetos huérfanos" },
    ],
  },
  {
    id: "avanzado",
    title: "Avanzado / equipos grandes",
    topics: [
      { title: "Estrategias de branching", detail: "Git Flow, GitHub Flow, trunk-based development" },
      { title: "Hooks", detail: "pre-commit, pre-push, commit-msg; Husky, pre-commit framework" },
      { title: "Submodules vs. subtrees vs. monorepos", detail: "cómo componer repositorios" },
      { title: "git worktree", detail: "varias ramas checkout simultáneas", mono: true },
      { title: "rerere", detail: "reutilizar resoluciones de conflictos grabadas", mono: true },
      { title: "git filter-repo", detail: "reemplaza a filter-branch, para limpiar historia", mono: true },
      { title: "Firma de commits", detail: "con GPG/SSH" },
      { title: "Sparse-checkout y partial clone", detail: "para repos enormes" },
      { title: "Conventional Commits", detail: "y versionado semántico" },
      { title: "Estrategias de merge", detail: "ort, ours, theirs, octopus" },
    ],
  },
];

const totalTopics = gitSections.reduce((acc, section) => acc + section.topics.length, 0);
const totalLinks = gitSections.reduce(
  (acc, section) => acc + section.topics.filter((topic) => topic.href).length,
  0
);

function TopicContent({ topic, linked }: { topic: GitTopic; linked?: boolean }) {
  return (
    <>
      <span
        className={`${topic.mono ? "font-mono text-[13px]" : "text-sm"} font-semibold ${
          linked ? "text-slate-800 group-hover:text-orange-600" : "text-slate-500"
        } transition-colors`}
      >
        {topic.title}
      </span>
      {topic.detail && (
        <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">{topic.detail}</span>
      )}
    </>
  );
}

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
            Conceptos de Git, de básico a avanzado. Un temario estructurado que sirve como
            referencia rápida y como validación de conocimientos en el control de versiones.
            Los temas que ya tienen artículo publicado son enlaces; el resto forma parte del
            índice pendiente por documentar.
          </p>

          {/* Índice de secciones */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {gitSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs uppercase tracking-widest font-bold text-slate-300 border border-slate-700 hover:border-orange-400 hover:text-orange-400 px-3 py-1.5 rounded-full transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>

          <p className="mt-6 text-xs text-slate-500 font-mono">
            {totalLinks} de {totalTopics} temas con artículo disponible
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {gitSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 text-orange-400 font-mono text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-bold text-slate-800">{section.title}</h2>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {section.topics.filter((topic) => topic.href).length}/{section.topics.length}
                </span>
              </div>

              <ul className="divide-y divide-slate-100">
                {section.topics.map((topic) => (
                  <li key={topic.title}>
                    {topic.href ? (
                      <Link
                        href={topic.href}
                        target="_blank"
                        className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-50/50 transition-all"
                      >
                        <span className="text-orange-500 font-mono font-bold text-sm leading-5">$</span>
                        <span className="flex-1 min-w-0">
                          <TopicContent topic={topic} linked />
                        </span>
                        <svg
                          className="w-3.5 h-3.5 mt-1 text-slate-300 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <div className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent text-slate-400">
                        <span className="font-mono text-sm leading-5 text-slate-300">•</span>
                        <span className="flex-1 min-w-0 opacity-70">
                          <TopicContent topic={topic} />
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
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
