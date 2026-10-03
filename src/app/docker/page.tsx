import { Metadata } from "next";
import TopicSheet, { type Section } from "@/components/TopicSheet";

export const metadata: Metadata = {
  title: "Docker - Guía y Conceptos",
  description: "Ruta de conceptos de Docker organizada por nivel: básicos, intermedios y avanzados.",
};

const dockerSections: Section[] = [
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
        detail: "rootless mode, usuarios no-root, capabilities, seccomp, AppArmor/SELinux, --read-only",
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

export default function Docker() {
  return (
    <TopicSheet
      title="Docker Cheat Sheet"
      accent="blue"
      icon={
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
        </svg>
      }
      intro="Una ruta de conceptos de Docker organizada por nivel, de los básicos a los temas avanzados de construcción, seguridad y orquestación. Los temas que ya tienen artículo publicado son enlaces; el resto forma parte del índice pendiente por documentar."
      sections={dockerSections}
    />
  );
}
