import type { ReactNode } from "react";
import { Metadata } from "next";
import ChecklistPage, { type Group } from "@/components/ChecklistPage";

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
        term: "Contenedores con Docker",
        rest: " para que el entorno sea reproducible en cualquier máquina y equivalente al de producción.",
        href: "https://blog.carlosalbertoxw.com/2023/08/docker.html",
      },
    ],
  },
  {
    icon: "🏗️",
    title: "Diseño y arquitectura",
    items: [
      {
        term: "Define los requisitos no funcionales antes de diseñar",
        rest: ": escalabilidad, disponibilidad, rendimiento y seguridad, con cifras concretas. Sin ellos no hay forma de saber si un diseño es bueno.",
      },
      {
        term: "Elige la solución más simple que cumpla los requisitos",
        rest: ": un monolito bien modularizado antes que microservicios, y nada de abstracciones para casos que todavía no existen. La complejidad se agrega cuando un requisito la justifica, porque quitarla después cuesta mucho más.",
      },
      {
        term: "Organiza el sistema en capas con responsabilidades claras",
        rest: ": presentación, lógica de negocio y acceso a datos, donde cada capa solo depende de la que tiene debajo y se comunica a través de interfaces. Las reglas de negocio no deben saber si los datos vienen de una base de datos o de una API externa, así cambiar una no obliga a reescribir la otra. La separación se ajusta al tamaño del proyecto: una capa que solo reenvía llamadas no aporta nada.",
      },
      {
        term: "Aplica patrones de diseño para resolver problemas concretos",
        rest: ", como Repository para aislar el acceso a datos, Strategy para variar un comportamiento o Adapter para integrar servicios externos. Un patrón le da al equipo un vocabulario común; aplicado sin necesidad, solo agrega indirección.",
      },
      {
        term: "Escribe código pensando en quien lo va a mantener",
        rest: ": nombres descriptivos, funciones pequeñas con una sola responsabilidad, bajo acoplamiento y cada regla de negocio en un solo lugar. Principios como SOLID y DRY son una guía, no un fin. El código se lee muchas más veces de las que se escribe.",
      },
      {
        term: "Optimiza con mediciones, no por intuición",
        rest: ": perfila y mide para encontrar el cuello de botella real, que suele estar en consultas N+1, índices faltantes, trabajo repetido que se puede cachear o algoritmos con una complejidad innecesaria. Optimizar sin medir complica el código que no era el problema.",
      },
      {
        term: "Diseña para cuando las integraciones fallen",
        rest: ": timeouts en toda llamada externa, reintentos con espera exponencial solo en operaciones idempotentes y un circuit breaker para no arrastrar al resto del sistema. Un servicio externo lento no debería tumbar el tuyo.",
      },
      {
        term: "Cuida la compatibilidad de las APIs y los contratos",
        rest: ": cada campo que expones es un compromiso. Versiona los cambios incompatibles, depreca con aviso y un plazo definido, y detecta las rupturas antes de publicar, no cuando las reporta quien consume la API.",
      },
      {
        term: "Revisa el diseño antes de implementarlo",
        rest: ": los cambios que afectan la estructura, el modelo de datos o las integraciones se discuten con el equipo antes de escribir código. Corregir un diagrama cuesta menos que reescribir un módulo.",
      },
      {
        term: "Haz un modelado de amenazas",
        rest: ": qué se protege, quién podría atacarlo y por dónde entraría. Se hace desde el diseño y se repite cuando cambia la arquitectura.",
      },
      {
        term: "Evalúa cada dependencia antes de agregarla",
        rest: ": si de verdad hace falta, si tiene mantenimiento activo, cuánto se usa y qué historial de vulnerabilidades tiene. Cada paquete es código ajeno que se ejecuta con tus permisos.",
      },
    ],
  },
  {
    icon: "📝",
    title: "Documentación",
    items: [
      {
        term: "Explica qué hace el proyecto",
        rest: ": qué problema resuelve, para quién y qué queda fuera de su alcance. Es lo primero del README y cabe en un par de párrafos.",
      },
      {
        term: "Documenta cómo levantarlo desde cero",
        rest: (
          <>
            {": requisitos con sus versiones, pasos de instalación, comandos para desarrollo, pruebas y build, y un "}
            <Code>.env.example</Code> con cada variable necesaria y sin valores reales. Si alguien nuevo tiene que
            preguntar, falta un paso.
          </>
        ),
      },
      {
        term: "Describe la estructura y la arquitectura",
        rest: ": cómo se organizan las carpetas, cuáles son los componentes principales, cómo se comunican entre sí y con servicios externos, y un diagrama de alto nivel.",
      },
      {
        term: "Registra las decisiones de arquitectura",
        rest: " (ADR): qué se decidió, qué alternativas se descartaron y por qué. El código muestra el cómo; el porqué se pierde si no se escribe.",
      },
      {
        term: "Documenta la API como contrato",
        rest: ", con una especificación como OpenAPI generada o validada desde el código para que no se desfase de lo que realmente responde.",
      },
      {
        term: "Escribe una guía de contribución",
        rest: (
          <>
            {" en "}
            <Code>CONTRIBUTING.md</Code>: pone por escrito la estrategia de ramas y revisión, las convenciones de
            commits y qué debe cumplir un cambio para aprobarse, para que no dependa de preguntarle a alguien.
          </>
        ),
      },
      {
        term: "Ten runbooks para la operación",
        rest: ": el paso a paso de cada procedimiento, como desplegar, hacer rollback, restaurar un respaldo o atender una alerta, escrito para quien lo ejecute con prisa y sin contexto. Tener la capacidad no sirve si solo una persona sabe usarla.",
      },
      {
        term: "Mantén un registro de cambios",
        rest: (
          <>
            {" en "}
            <Code>CHANGELOG.md</Code> con versionado semántico: qué cambió en cada versión y qué rompe compatibilidad.
          </>
        ),
      },
      {
        term: "Trata la documentación como código",
        rest: ": vive en el repositorio, se revisa y se actualiza en el mismo cambio que la vuelve obsoleta. Los comentarios en el código explican el porqué, no el qué.",
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
        rest: ", con nivel e identificador de correlación que permita seguir una petición de principio a fin.",
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
      {
        term: "Protege las claves API y secretos",
        rest: ": no quedan escritos en el repositorio ni viajan al cliente. Define de forma explícita qué claves son públicas y cuáles solo existen en el servidor.",
      },
      { term: "Elimina secretos del historial de Git", rest: " y rota inmediatamente las credenciales comprometidas." },
      {
        term: "Usa variables de entorno o un gestor de secretos",
        rest: " para credenciales y configuraciones sensibles.",
      },
    ],
  },
  {
    icon: "🔑",
    title: "Autenticación y sesiones",
    items: [
      {
        term: "Usa autenticación robusta del lado servidor",
        rest: ": la sesión se emite, se valida y se revoca en el servidor.",
      },
      {
        term: "Hashea las contraseñas con algoritmos diseñados para contraseñas",
        rest: ", como Argon2id, bcrypt o scrypt.",
      },
      {
        term: "Limita los intentos de inicio de sesión",
        rest: " por cuenta y por origen, con bloqueo progresivo ante ataques de fuerza bruta.",
      },
      {
        term: "Protege las cookies de sesión",
        rest: (
          <>
            {" con "}
            <Code>HttpOnly</Code>, <Code>Secure</Code> y <Code>SameSite</Code> apropiados.
          </>
        ),
      },
      {
        term: "Expira y rota las sesiones",
        rest: " después de eventos sensibles, como cambio de contraseña o elevación de privilegios.",
      },
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
      {
        term: "Aplica autorización en el servidor",
        rest: ": toda operación sensible comprueba, antes de ejecutarse, que quien la pide puede pedirla. Ocultar un botón en la interfaz no impide la petición.",
      },
      {
        term: "Restringe el acceso a cada registro",
        rest: ": además de tener permiso sobre el tipo de recurso, comprueba que el registro pertenezca al usuario, rol, organización o tenant de quien lo pide.",
      },
      {
        term: "Define qué campos puede modificar el cliente",
        rest: ": nunca vuelques el cuerpo de la petición sobre la entidad; el rol, el precio o el propietario no se cambian desde fuera.",
      },
      {
        term: "Aplica el principio de mínimo privilegio",
        rest: " a usuarios, servicios y conexiones de base de datos.",
      },
    ],
  },
  {
    icon: "🛡️",
    title: "Validación y protección de datos",
    items: [
      {
        term: "Valida y normaliza todas las entradas",
        rest: " en el servidor: tipo, rango y formato, aunque el cliente ya las haya validado.",
      },
      { term: "Protege contra XSS", rest: " mediante escape contextual y sanitización cuando corresponda." },
      {
        term: "Protege contra SQL Injection",
        rest: " utilizando consultas parametrizadas/ORM correctamente configurados.",
      },
      {
        term: "Protege contra SSRF",
        rest: ": valida y restringe las direcciones que tu servidor consulta a partir de datos proporcionados por el usuario.",
      },
      {
        term: "Cifra en reposo los datos sensibles",
        rest: ": datos personales, financieros o de salud, tanto en la base de datos como en los respaldos.",
      },
      {
        term: "No almacenes información sensible innecesaria",
        rest: " y define cuánto se conserva cada tipo de dato, incluidos los registros de auditoría: lo que no guardas no se puede filtrar, pero sin bitácora no se puede investigar.",
      },
    ],
  },
  {
    icon: "📁",
    title: "Archivos y APIs",
    items: [
      { term: "Restringe las subidas de archivos", rest: " por tamaño, extensión, tipo MIME y contenido." },
      {
        term: "Almacena los archivos subidos fuera del directorio ejecutable",
        rest: " y evita nombres controlados por el usuario.",
      },
      {
        term: "Limita las respuestas de las APIs",
        rest: " a los campos que el cliente necesita: no serialices la entidad completa por comodidad.",
      },
      {
        term: "Implementa rate limiting",
        rest: " en endpoints de alto consumo o fáciles de abusar de forma automatizada, como registros, búsquedas o envío de correos.",
      },
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
      {
        term: "Evita exponer información sensible en mensajes de error",
        rest: " y logs: el detalle interno de un fallo le sirve a quien ataca, no a quien lo sufre.",
      },
    ],
  },
  {
    icon: "🔍",
    title: "Dependencias y vigilancia",
    items: [
      {
        term: "Escanea las dependencias",
        rest: " en busca de vulnerabilidades conocidas y corrige de inmediato las que te afectan.",
      },
      {
        term: "Fija las versiones con un archivo de bloqueo",
        rest: " y verifica la integridad de los paquetes que instalas.",
      },
      {
        term: "Mantén un inventario de dependencias y automatiza sus actualizaciones",
        rest: ": un SBOM registra qué versiones exactas llegan a producción, y herramientas como Dependabot o Renovate mantienen las actualizaciones pequeñas y frecuentes en lugar de saltos de varias versiones.",
      },
      {
        term: "Escanea el código y las imágenes de contenedor en el pipeline",
        rest: ": análisis estático de seguridad en cada cambio, no una revisión al año.",
      },
      {
        term: "Monitoriza autenticaciones, cambios de privilegios y operaciones sospechosas",
        rest: ", incluidos los accesos masivos y las consultas fuera de lo habitual en la base de datos: es lo que después permite reconstruir qué pasó y cuándo.",
      },
      {
        term: "Configura alertas para eventos de seguridad relevantes",
        rest: ", con un responsable claro para cada una: una alerta que nadie revisa es ruido.",
      },
      {
        term: "Realiza pruebas de seguridad periódicas",
        rest: ": DAST sobre el sistema en ejecución y pruebas de penetración a cargo de alguien ajeno al equipo.",
      },
      {
        term: "Mantén un plan de respuesta ante incidentes",
        rest: ": quién decide, quién comunica, qué se hace en la primera hora y cómo se notifica una brecha a autoridades y afectados en los plazos que marque la ley. Escrito antes, no durante.",
      },
    ],
  },
  {
    icon: "⚖️",
    title: "Cumplimiento y aspectos legales",
    items: [
      {
        term: "Revisa las licencias de las dependencias",
        rest: " y su compatibilidad con el modelo de distribución del proyecto: una licencia copyleft en una librería puede obligarte a liberar tu código o a reemplazarla cuando ya es tarde.",
      },
      {
        term: "Cumple la normativa de protección de datos personales",
        rest: " que aplique a tus usuarios: identifica qué datos recoges, con qué finalidad y bajo qué base legal, y ten un mecanismo real para atender solicitudes de acceso, rectificación y eliminación.",
      },
      {
        term: "Publica el aviso de privacidad y los términos de uso",
        rest: " y mantenlos alineados con lo que el sistema hace de verdad, no con lo que hacía el día que se redactaron.",
      },
      {
        term: "Revisa a tus proveedores y subprocesadores",
        rest: ": qué datos tratan, dónde se almacenan y qué compromisos contractuales existen. Externalizar el servicio no externaliza la responsabilidad.",
      },
      {
        term: "Deja clara la titularidad del código y de las contribuciones",
        rest: ", incluyendo el código de terceros y el generado con herramientas de IA que incorpores al proyecto.",
      },
    ],
  },
];

export default function SoftwareDevelopment() {
  return (
    <ChecklistPage
      title="Desarrollo de Software"
      accent="blue"
      intro={
        <>
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
        </>
      }
      listTitle="Qué implementar en un proyecto de software"
      listNote="Listado ordenado desde el arranque del proyecto hasta su operación y seguridad."
      listIcon={
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M12 3l7 4v5c0 4.418-2.865 8.166-7 9-4.135-.834-7-4.582-7-9V7l7-4z"
          />
        </>
      }
      featuredPost={featuredPost}
      groups={groups}
    />
  );
}
