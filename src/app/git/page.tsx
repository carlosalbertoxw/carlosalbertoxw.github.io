import { Metadata } from "next";
import TopicSheet, { type Section } from "@/components/TopicSheet";

export const metadata: Metadata = {
  title: "Git - Guía y Comandos",
  description: "Recopilación de comandos y conceptos sobre el sistema de control de versiones Git.",
};

const gitSections: Section[] = [
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
      { title: "git reflog", detail: 'la red de seguridad para recuperar commits "perdidos"', mono: true },
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

export default function Git() {
  return (
    <TopicSheet
      title="Git Cheat Sheet"
      accent="orange"
      icon={
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.277 12c0 .267-.105.522-.293.71l-9.72 9.72c-.188.188-.443.293-.71.293s-.522-.105-.71-.293l-1.92-1.92c-.392-.392-.392-1.028 0-1.42l1.21-1.21c-.13-.34-.2-.71-.2-1.1 0-1.66 1.34-3 3-3 .39 0 .76.07 1.1.2l1.21-1.21c.392-.392 1.028-.392 1.42 0l1.92 1.92c.188.188.293.443.293.71zm-13.84 3.12c-.13-.34-.2-.71-.2-1.1 0-1.66 1.34-3 3-3 .39 0 .76.07 1.1.2l1.21-1.21c.392-.392 1.028-.392 1.42 0l1.92 1.92c.188.188.293.443.293.71s-.105.522-.293.71l-9.72 9.72c-.188.188-.443.293-.71.293s-.522-.105-.71-.293l-1.92-1.92c-.392-.392-.392-1.028 0-1.42l1.21-1.21zM4.723 12c0-.267.105-.522.293-.71l9.72-9.72c.188-.188.443-.293.71-.293s.522.105.71.293l1.92 1.92c.392.392.392 1.028 0 1.42l-1.21 1.21c.13.34.2.71.2 1.1 0 1.66-1.34 3-3 3-.39 0-.76-.07-1.1-.2l-1.21 1.21c-.392.392-1.028.392-1.42 0L10.713 11.29c-.188-.188-.293-.443-.293-.71s.105-.522.293-.71l9.72-9.72c.188-.188.443-.293.71-.293s.522.105.71.293l1.92 1.92c.392.392.392 1.028 0 1.42l-1.21 1.21z" />
        </svg>
      }
      intro="Conceptos de Git, de básico a avanzado. Un temario estructurado que sirve como referencia rápida y como validación de conocimientos en el control de versiones. Los temas que ya tienen artículo publicado son enlaces; el resto forma parte del índice pendiente por documentar."
      sections={gitSections}
    />
  );
}
