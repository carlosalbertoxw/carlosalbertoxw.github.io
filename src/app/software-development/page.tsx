import Link from "next/link";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desarrollo de Software",
  description:
    "Trayectoria profesional y listado de prácticas y medidas de seguridad a implementar en un proyecto de software.",
};

const featuredPost = {
  name: "Ciclo de Vida del Desarrollo de Software",
  description:
    "Las etapas por las que pasa un proyecto y cómo se relacionan entre sí. Es la base sobre la que se apoya el resto del listado.",
  href: "https://blog.carlosalbertoxw.com/2023/04/ciclo-de-vida-del-desarrollo-de-software.html",
};

const Code = ({ children }: { children: ReactNode }) => (
  <code className="font-mono text-[0.85em] text-slate-700 bg-slate-100 px-1 py-0.5 rounded">{children}</code>
);

type Item = { term: string; rest?: ReactNode; href?: string };
type Group = { icon: string; title: string; items: Item[] };

const groups: Group[] = [
  {
    icon: "🧰",
    title: "Fundamentos del proyecto",
    items: [
      {
        term: "Control de versiones con Git",
        rest: " como única fuente de verdad del código, con un historial legible que explique el porqué de cada cambio.",
        href: "https://blog.carlosalbertoxw.com/2023/03/git.html",
      },
      {
        term: "Define una estrategia de ramas y revisión de código",
        rest: ": nada llega a la rama principal sin pasar por una revisión.",
      },
      {
        term: "Documenta la estructura y cómo levantar el proyecto",
        rest: ": cómo está organizado el código, los requisitos, los pasos de instalación y las variables necesarias, en el README del repositorio.",
      },
      {
        term: "Contenedores con Docker",
        rest: " para que el entorno sea reproducible en cualquier máquina y equivalente al de producción.",
        href: "https://blog.carlosalbertoxw.com/2023/08/docker.html",
      },
    ],
  },
  {
    icon: "🧪",
    title: "Pruebas y calidad",
    items: [
      {
        term: "Pruebas unitarias",
        rest: ": verifican una unidad de código de forma aislada y son la primera red ante una regresión.",
        href: "https://blog.carlosalbertoxw.com/2025/05/pruebas-unitarias-en-el-desarrollo-de-software.html",
      },
      {
        term: "Pruebas de integración",
        rest: ": comprueban que los módulos, la base de datos y los servicios externos funcionan juntos.",
      },
      {
        term: "Pruebas end-to-end",
        rest: " sobre los flujos críticos del negocio, los que no se pueden dar por buenos sin ejecutarlos completos.",
      },
      {
        term: "Análisis estático y formato automático",
        rest: ": linter y formateador aplicados por igual a todo el equipo desde el pipeline, no a criterio de cada quien.",
      },
    ],
  },
  {
    icon: "⚙️",
    title: "Automatización y despliegue",
    items: [
      {
        term: "Automatización de procesos en workflows de pipelines",
        rest: ": compilar, probar, analizar y desplegar sin pasos manuales.",
      },
      {
        term: "Bloquea la integración si el pipeline falla",
        rest: ": un pipeline en rojo que se puede ignorar no aporta nada.",
      },
      {
        term: "Versiona las migraciones de base de datos",
        rest: " y aplícalas junto al despliegue, de forma automática y reversible.",
      },
      {
        term: "Ten una estrategia de rollback",
        rest: ": poder volver a la versión anterior rápido importa más que desplegar rápido.",
      },
    ],
  },
  {
    icon: "🩺",
    title: "Observabilidad y operación",
    items: [
      {
        term: "Health checks · Liveness",
        rest: (
          <>
            {" — ¿el proceso sigue vivo? Si falla, el orquestador "}
            <strong className="font-semibold text-slate-900">reinicia</strong> el contenedor. Debe verificar lo mínimo:
            que el proceso responde.
          </>
        ),
      },
      {
        term: "Health checks · Readiness",
        rest: (
          <>
            {" — ¿puede atender tráfico ahora? Si falla, el orquestador "}
            <strong className="font-semibold text-slate-900">deja de enviarle peticiones</strong> sin reiniciar. Aquí sí
            va la verificación de la base de datos.
          </>
        ),
      },
      {
        term: "Implementa un apagado ordenado",
        rest: ": al recibir la señal de terminación, deja de aceptar peticiones nuevas y termina las que están en curso.",
      },
      {
        term: "Registra logs estructurados",
        rest: ", con nivel e identificador de correlación, y nunca con datos sensibles dentro.",
      },
      {
        term: "Mide y alerta sobre errores y latencia",
        rest: ": si te enteras de una caída porque la reporta un usuario, falta instrumentación.",
      },
      {
        term: "Respalda los datos y prueba la restauración",
        rest: ": un respaldo que nunca se ha restaurado todavía no es un respaldo.",
      },
    ],
  },
  {
    icon: "🔐",
    title: "Secretos y configuración",
    items: [
      { term: "Protege las claves API y secretos", rest: ": nunca los expongas en el frontend, repositorios o logs." },
      { term: "Elimina secretos del historial de Git", rest: " y rota inmediatamente las credenciales comprometidas." },
      { term: "Usa variables de entorno o un gestor de secretos", rest: " para credenciales y configuraciones sensibles." },
      { term: "Separa las claves públicas de los secretos del servidor", rest: " y define claramente qué credenciales pueden exponerse al cliente." },
    ],
  },
  {
    icon: "🔑",
    title: "Autenticación y sesiones",
    items: [
      { term: "Usa autenticación robusta del lado servidor", rest: "; nunca confíes únicamente en controles del cliente." },
      { term: "Hashea las contraseñas con algoritmos diseñados para contraseñas", rest: ", como Argon2id, bcrypt o scrypt." },
      { term: "Limita los intentos de inicio de sesión", rest: " y aplica protección contra ataques de fuerza bruta." },
      {
        term: "Protege las cookies de sesión",
        rest: (
          <>
            {" con "}
            <Code>HttpOnly</Code>, <Code>Secure</Code> y <Code>SameSite</Code> apropiados.
          </>
        ),
      },
      { term: "Expira y rota las sesiones", rest: " después de eventos sensibles, como cambio de contraseña o elevación de privilegios." },
      { term: "Implementa MFA", rest: " para cuentas administrativas y operaciones de alto riesgo." },
    ],
  },
  {
    icon: "🗄️",
    title: "Base de datos y autorización",
    items: [
      {
        term: "Activa Row Level Security (RLS)",
        rest: " cuando la plataforma lo soporte: es una segunda barrera en la base de datos, no un sustituto de la autorización en el servidor.",
      },
      { term: "Aplica autorización en el servidor", rest: " para todas las operaciones sensibles." },
      { term: "Restringe el acceso a registros", rest: " según usuario, rol, organización o tenant." },
      { term: "Impide la manipulación de campos protegidos", rest: " mediante validación y autorización del lado servidor." },
      { term: "Aplica el principio de mínimo privilegio", rest: " a usuarios, servicios y conexiones de base de datos." },
      { term: "Monitoriza y registra consultas y operaciones sensibles", rest: " de la base de datos, y conserva ese registro el tiempo suficiente para poder investigar un incidente." },
    ],
  },
  {
    icon: "🛡️",
    title: "Validación y protección de datos",
    items: [
      { term: "Valida y normaliza todas las entradas", rest: " en el servidor." },
      { term: "Protege contra XSS", rest: " mediante escape contextual y sanitización cuando corresponda." },
      { term: "Protege contra SQL Injection", rest: " utilizando consultas parametrizadas/ORM correctamente configurados." },
      {
        term: "Protege contra SSRF",
        rest: ": valida y restringe las direcciones que tu servidor consulta a partir de datos proporcionados por el usuario.",
      },
      {
        term: "Cifra los datos sensibles en tránsito y en reposo",
        rest: ": TLS siempre, y cifrado en reposo para datos personales, financieros o de salud.",
      },
      { term: "No almacenes información sensible innecesaria", rest: " y establece políticas de retención." },
    ],
  },
  {
    icon: "📁",
    title: "Archivos y APIs",
    items: [
      { term: "Restringe las subidas de archivos", rest: " por tamaño, extensión, tipo MIME y contenido." },
      { term: "Almacena los archivos subidos fuera del directorio ejecutable", rest: " y evita nombres controlados por el usuario." },
      { term: "Limita las respuestas de las APIs", rest: " para no exponer campos o información innecesaria." },
      { term: "Implementa rate limiting", rest: " en endpoints sensibles y de alto consumo." },
      { term: "Valida permisos en cada endpoint", rest: ", no solamente en la interfaz de usuario." },
      { term: "Protege los endpoints contra abuso automatizado y bots", rest: " cuando sea necesario." },
    ],
  },
  {
    icon: "🌐",
    title: "Seguridad web",
    items: [
      { term: "Fuerza HTTPS", rest: " y deshabilita protocolos inseguros." },
      {
        term: "Configura cabeceras de seguridad",
        rest: (
          <>
            {", incluyendo CSP, HSTS, "}
            <Code>X-Content-Type-Options</Code> y políticas de <Code>Referrer</Code>.
          </>
        ),
      },
      { term: "Configura correctamente CORS", rest: " y evita permitir orígenes arbitrarios." },
      { term: "Protege las operaciones contra CSRF", rest: " cuando la arquitectura de autenticación lo requiera." },
      { term: "Evita exponer información sensible en mensajes de error", rest: ", respuestas o logs." },
    ],
  },
  {
    icon: "🔍",
    title: "Dependencias y vigilancia",
    items: [
      { term: "Escanea las dependencias", rest: " y actualiza paquetes vulnerables." },
      {
        term: "Fija las versiones con un archivo de bloqueo",
        rest: " y verifica la integridad de los paquetes que instalas.",
      },
      { term: "Escanea el código y los contenedores", rest: " en busca de vulnerabilidades." },
      { term: "Monitoriza autenticaciones, errores y operaciones sospechosas", rest: "." },
      { term: "Configura alertas para eventos de seguridad relevantes", rest: ", con un responsable claro para cada una: una alerta que nadie revisa es ruido." },
      { term: "Realiza pruebas de seguridad periódicas", rest: ", incluyendo SAST, DAST y pruebas de penetración." },
      { term: "Mantén un plan de respuesta ante incidentes", rest: " y procedimientos para rotar credenciales comprometidas." },
    ],
  },
];

const ExternalIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function SoftwareDevelopment() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 text-center">
            Desarrollo de Software
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 text-slate-600 leading-relaxed">
            <p>
              Profesionalmente, me he desempeñado en el campo del desarrollo de software desde el año{" "}
              <strong className="font-semibold text-slate-900">2017</strong> en una empresa de consultoría de TI.
              Especializado en automatización de procesos operativos, análisis y levantamiento de requerimientos
              funcionales y desarrollo de soluciones escalables orientadas al usuario. Enfoque en la optimización de
              tiempos operativos, mejora continua y resolución de problemas desde su causa raíz, asegurando estabilidad,
              eficiencia y mantenibilidad en los sistemas.
            </p>
            <p>
              Aquí comparto publicaciones y ejercicios que podrían servir como guía para otros y como validación de mis
              conocimientos.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        <section>
          <div className="flex items-center mb-4 border-b border-slate-200 pb-4">
            <div className="bg-blue-600/10 p-2.5 rounded-xl mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M12 3l7 4v5c0 4.418-2.865 8.166-7 9-4.135-.834-7-4.582-7-9V7l7-4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              Qué implementar en un proyecto de software
            </h2>
          </div>
          <p className="mb-8 text-sm text-slate-500">
            Listado ordenado desde el arranque del proyecto hasta su operación y seguridad.
          </p>

          {/* Tarjeta principal */}
          <Link
            href={featuredPost.href}
            target="_blank"
            className="group block bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Publicación principal
            </span>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {featuredPost.name}
              </span>
              <ExternalIcon className="w-5 h-5 mt-1 shrink-0 text-slate-300 group-hover:text-blue-600 transition-colors" />
            </span>
            <span className="mt-3 block text-slate-600 leading-relaxed">{featuredPost.description}</span>
          </Link>

          {/* Tarjetas del listado */}
          <div className="columns-1 md:columns-2 gap-6">
            {groups.map((group, index) => (
              <div
                key={group.title}
                className="mb-6 break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-lg"
                    aria-hidden="true"
                  >
                    {group.icon}
                  </span>
                  <div>
                    <span className="block text-xs font-semibold tracking-widest text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-slate-900">{group.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-1 shrink-0 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="text-sm text-slate-600 leading-relaxed">
                        <p>
                          <strong className="font-semibold text-slate-900">{item.term}</strong>
                          {item.rest}
                        </p>
                        {item.href && (
                          <Link
                            href={item.href}
                            target="_blank"
                            className="mt-1 flex w-fit items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                          >
                            Leer publicación
                            <ExternalIcon className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
          <p className="text-slate-600 mb-5">Si crees que puedo ayudarte en algo, no dudes en contactarme.</p>
          <Link
            href="/links"
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Contactar
          </Link>
        </section>
      </div>
    </main>
  );
}
