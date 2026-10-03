import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Qué datos se recogen al visitar este sitio y quién los trata.",
};

// Mantener alineado con lo que el sitio hace de verdad: si se agrega analítica,
// un formulario o un servicio de terceros, este aviso se actualiza en el mismo cambio.
const sections = [
  {
    title: "Lo que recoge este sitio",
    body: "Nada directamente. Es un sitio estático: no tiene formularios, cuentas, cookies propias ni base de datos, y no guarda información de quien lo visita.",
  },
  {
    title: "Estadísticas de visitas",
    body: "El sitio usa Cloudflare Web Analytics para saber qué páginas se visitan. No usa cookies ni identifica a las personas: registra datos agregados como la página, el sitio de procedencia, el país, el tipo de dispositivo y navegador, y métricas de rendimiento de carga.",
  },
  {
    title: "Proveedores de hosting",
    body: "El sitio se publica en GitHub Pages y se entrega a través de Cloudflare. Como cualquier servidor web, ambos procesan la dirección IP y los datos técnicos de cada petición para entregar las páginas y protegerlas de abusos, conforme a sus propias políticas de privacidad.",
  },
  {
    title: "Enlaces a otros sitios",
    body: "Las publicaciones del blog y las redes sociales enlazadas tienen sus propias prácticas de privacidad, que no dependen de este sitio.",
  },
];

export default function Privacy() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">Aviso de privacidad</h1>
        <p className="text-sm text-slate-500 mb-10">Última actualización: 3 de octubre de 2026</p>

        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="font-bold text-slate-900 mb-2">{section.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-600 text-center">
          Si tienes dudas sobre este aviso, puedes escribirme por cualquiera de los medios de{" "}
          <Link href="/links" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4">
            mi página de enlaces
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
