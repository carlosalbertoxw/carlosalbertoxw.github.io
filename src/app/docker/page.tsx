import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docker - Guía y Conceptos",
  description: "Ruta de conceptos de Docker organizada por nivel: básicos, intermedios y avanzados.",
};

type DockerTopic = {
  title: string;
  detail?: string;
  mono?: boolean;
  href?: string;
};

type DockerSection = {
  id: string;
  title: string;
  topics: DockerTopic[];
};

const dockerSections: DockerSection[] = [
  {
    id: "basicos",
    title: "Básicos",
    topics: [
      {
        title: "Introducción a Docker",
        detail: "qué es, para qué sirve y cómo empezar",
        href: "https://blog.carlosalbertoxw.com/2023/08/docker.html",
      },
      {
        title: "Contenedor vs. máquina virtual",
        detail: "por qué los contenedores comparten el kernel del host",
      },
      { title: "Imagen", detail: "plantilla inmutable de solo lectura" },
      { title: "Contenedor", detail: "instancia en ejecución de una imagen" },
      { title: "Dockerfile", detail: "receta para construir imágenes" },
      { title: "Capas (layers)", detail: "y caché de construcción" },
      { title: "Registry (Docker Hub)", detail: "pull, push, tags" },
      {
        title: "Comandos esenciales",
        detail: "run, ps, logs, exec, stop, rm, rmi, build",
      },
      { title: "Puertos", detail: "mapeo -p host:contenedor" },
      { title: "Variables de entorno", detail: "-e, --env-file" },
      { title: "Volúmenes básicos", detail: "bind mounts vs. volúmenes nombrados" },
    ],
  },
  {
    id: "intermedios",
    title: "Intermedios",
    topics: [
      {
        title: "Instrucciones del Dockerfile a fondo",
        detail: "COPY vs ADD, CMD vs ENTRYPOINT, ARG vs ENV, WORKDIR, EXPOSE, USER, HEALTHCHECK",
      },
      { title: ".dockerignore", detail: "y contexto de build", mono: true },
      { title: "Multi-stage builds", detail: "imágenes finales pequeñas" },
      { title: "Imágenes base", detail: "Alpine, distroless, slim; trade-offs" },
      {
        title: "Redes",
        detail: "bridge, host, none, redes definidas por usuario y DNS interno",
      },
      { title: "Volúmenes avanzados", detail: "drivers, permisos, backups" },
      {
        title: "Docker Compose",
        detail: "servicios, depends_on, perfiles, override files",
        href: "https://blog.carlosalbertoxw.com/2023/08/docker-compose.html",
      },
      {
        title: "Ciclo de vida del contenedor",
        detail: "estados, señales, restart policies",
      },
      { title: "Logging drivers", detail: "y recolección de logs" },
      { title: "Límites de recursos", detail: "CPU, memoria, ulimits" },
    ],
  },
  {
    id: "avanzados",
    title: "Avanzados",
    topics: [
      {
        title: "BuildKit",
        detail: "caché montado, secretos en build, builds paralelos, --platform",
      },
      {
        title: "Builds multi-arquitectura",
        detail: "con buildx y manifest lists",
      },
      {
        title: "Optimización de capas",
        detail: "orden de instrucciones, reproducibilidad, imágenes deterministas",
      },
      {
        title: "Seguridad",
        detail:
          "rootless mode, usuarios no-root, capabilities, seccomp, AppArmor/SELinux, --read-only",
      },
      { title: "Escaneo de vulnerabilidades", detail: "Trivy, Docker Scout, SBOM" },
      {
        title: "Firma y procedencia",
        detail: "Cosign, attestations, cadena de suministro",
      },
      {
        title: "Internos de Linux",
        detail: "namespaces (pid, net, mnt, uts, ipc, user), cgroups, union filesystems (overlay2)",
      },
      { title: "Runtimes", detail: "containerd, runc, OCI spec, imágenes OCI" },
      {
        title: "Docker socket",
        detail: "riesgos de montarlo, Docker-in-Docker vs. socket mounting",
      },
      {
        title: "Orquestación",
        detail: "Docker Swarm, y la transición hacia Kubernetes",
      },
      { title: "Alternativas", detail: "Podman, Buildah, nerdctl, Kaniko" },
      {
        title: "CI/CD con Docker",
        detail: "caché entre pipelines, registries privados, promoción de imágenes",
      },
    ],
  },
];

const totalTopics = dockerSections.reduce((acc, section) => acc + section.topics.length, 0);
const totalLinks = dockerSections.reduce(
  (acc, section) => acc + section.topics.filter((topic) => topic.href).length,
  0
);

function TopicContent({ topic, linked }: { topic: DockerTopic; linked?: boolean }) {
  return (
    <>
      <span
        className={`${topic.mono ? "font-mono text-[13px]" : "text-sm"} font-semibold ${
          linked ? "text-slate-800 group-hover:text-blue-600" : "text-slate-500"
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

export default function Docker() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Estilo Documentación */}
      <header className="bg-slate-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-4 text-blue-400">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/>
            </svg>
            <h1 className="text-4xl font-bold tracking-tight">Docker Cheat Sheet</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl text-justify leading-relaxed">
            Una ruta de conceptos de Docker organizada por nivel, de los básicos a los temas
            avanzados de construcción, seguridad y orquestación. Los temas que ya tienen artículo
            publicado son enlaces; el resto forma parte del índice pendiente por documentar.
          </p>

          {/* Índice de secciones */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {dockerSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs uppercase tracking-widest font-bold text-slate-300 border border-slate-700 hover:border-blue-400 hover:text-blue-400 px-3 py-1.5 rounded-full transition-colors"
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
          {dockerSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 text-blue-400 font-mono text-xs font-bold">
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
                        className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent hover:border-blue-400 hover:bg-blue-50/50 transition-all"
                      >
                        <span className="text-blue-500 font-mono font-bold text-sm leading-5">$</span>
                        <span className="flex-1 min-w-0">
                          <TopicContent topic={topic} linked />
                        </span>
                        <svg
                          className="w-3.5 h-3.5 mt-1 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all shrink-0"
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
            className="text-blue-600 font-bold hover:text-blue-700 underline decoration-2 underline-offset-4"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
