import Link from "next/link";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emprendimiento y Finanzas",
  description:
    "Puntos de salud y crecimiento financiero, y guías para quienes inician un negocio.",
};

const featuredPost = {
  name: "Cómo Lograr la Libertad Financiera",
  description:
    "El objetivo de fondo al que apunta todo el listado. Los puntos que siguen son el camino ordenado para llegar ahí.",
  href: "https://blog.carlosalbertoxw.com/2016/11/como-lograr-la-libertad-financiera.html",
};

type Item = { term: string; rest?: ReactNode; href?: string };
type Group = { icon: string; title: string; items: Item[] };

const groups: Group[] = [
  {
    icon: "📊",
    title: "Orden y control",
    items: [
      {
        term: "Conoce a dónde va tu dinero",
        rest: ": registra ingresos y gastos durante unos meses antes de intentar optimizar nada.",
      },
      {
        term: "Elabora un presupuesto y revísalo",
        rest: ": asígnale un destino a cada ingreso en lugar de esperar a ver qué sobra a fin de mes.",
      },
      {
        term: "Separa las finanzas personales de las del negocio",
        rest: ": cuentas, tarjetas y registros distintos desde el primer día.",
      },
      {
        term: "Un consejo financiero para empezar",
        href: "https://blog.carlosalbertoxw.com/2023/03/un-consejo-financiero.html",
      },
    ],
  },
  {
    icon: "🛟",
    title: "Colchón y protección",
    items: [
      {
        term: "Construye un fondo de emergencia",
        rest: " equivalente a varios meses de gastos, en un instrumento de disponibilidad inmediata.",
      },
      {
        term: "Cubre los riesgos que no podrías absorber",
        rest: ": gastos médicos mayores y, si hay personas que dependen de ti, un seguro de vida.",
      },
      {
        term: "Mantén al día tus obligaciones fiscales",
        rest: ": un adeudo con la autoridad suele crecer más rápido que casi cualquier otra deuda.",
      },
      {
        term: "Revisa tus coberturas y contratos",
        rest: " al menos una vez al año; lo que contrataste hace tiempo pudo dejar de ajustarse a tu situación.",
      },
    ],
  },
  {
    icon: "💳",
    title: "Deuda bajo control",
    items: [
      {
        term: "Distingue la deuda que produce de la que solo consume",
        rest: ": la primera financia algo que genera valor; la segunda, un gasto que ya pasó.",
      },
      {
        term: "Conoce el costo real de un crédito antes de firmarlo",
        rest: ": tasa, comisiones y plazo total, no únicamente el monto de la mensualidad.",
        href: "https://blog.carlosalbertoxw.com/2026/06/tipos-de-prestamos-o-creditos.html",
      },
      {
        term: "Liquida primero la deuda más cara",
        rest: ", que normalmente es la de las tarjetas revolventes.",
      },
      {
        term: "Usa la tarjeta de crédito como medio de pago, no como ingreso extra",
        rest: ": liquida el saldo total cada mes para no pagar intereses.",
        href: "https://blog.carlosalbertoxw.com/2026/06/el-uso-inteligente-de-las-tarjetas-de.html",
      },
    ],
  },
  {
    icon: "📈",
    title: "Inversión",
    items: [
      {
        term: "Invierte solo después del fondo de emergencia",
        rest: " y de tener controlada la deuda cara; el orden importa más que el instrumento.",
      },
      {
        term: "Entiende en qué inviertes",
        rest: ": si no puedes explicar de dónde sale el rendimiento, todavía no es momento de poner dinero ahí.",
        href: "https://blog.carlosalbertoxw.com/2026/01/tipos-de-inversiones.html",
      },
      {
        term: "Diversifica",
        rest: " entre instrumentos, plazos y monedas, para no depender de un solo resultado.",
      },
      {
        term: "Define un horizonte y respétalo",
        rest: ": el plazo al que inviertes determina cuánto riesgo tiene sentido tolerar.",
      },
      {
        term: "Reinvierte los rendimientos",
        rest: ": el interés compuesto necesita tiempo antes de que se note.",
      },
    ],
  },
  {
    icon: "🚀",
    title: "Crecimiento de ingresos",
    items: [
      {
        term: "Invierte en tu capacidad de generar ingresos",
        rest: ": al principio, la formación y las habilidades suelen rendir más que cualquier instrumento.",
      },
      {
        term: "Construye ingresos que no dependan de tus horas",
        rest: ", para dejar de intercambiar tiempo por dinero de forma lineal.",
      },
      {
        term: "Mide la rentabilidad real del negocio",
        rest: ", no solo la facturación: descuenta costos, impuestos y tu propio trabajo.",
      },
      {
        term: "Reinvierte una parte de las utilidades",
        rest: " en lugar de retirarlas por completo.",
      },
    ],
  },
];

const ExternalIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function EntrepreneurshipFinance() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 text-center">
            Emprendimiento y Finanzas
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 text-slate-600 leading-relaxed">
            <p>
              A lo largo de mi trayectoria he desarrollado un profundo interés por el mundo del emprendimiento. He
              aprendido de historias ajenas, libros y cursos, pero sobre todo, de mis propios{" "}
              <strong className="font-semibold text-slate-900">aciertos y fracasos</strong>.
            </p>
            <p>
              Comparto estos recursos con el objetivo de que sirvan como guía para quienes inician su camino y como un
              espacio para recordar lo que he aprendido.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">

        {/* SECCIÓN: SALUD Y CRECIMIENTO FINANCIERO */}
        <section>
          <div className="flex items-center mb-4 border-b border-slate-200 pb-4">
            <div className="bg-emerald-600/10 p-2.5 rounded-xl mr-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Salud y crecimiento financiero</h2>
          </div>
          <p className="mb-8 text-sm text-slate-500">
            Listado ordenado: cada bloque se apoya en el anterior. Es información general con fines educativos y no
            sustituye la asesoría de un profesional.
          </p>

          {/* Tarjeta principal */}
          <Link
            href={featuredPost.href}
            target="_blank"
            className="group block bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow mb-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Publicación principal
            </span>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {featuredPost.name}
              </span>
              <ExternalIcon className="w-5 h-5 mt-1 shrink-0 text-slate-300 group-hover:text-emerald-600 transition-colors" />
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
                    <span className="block text-xs font-semibold tracking-widest text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-slate-900">{group.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-1 shrink-0 text-emerald-600"
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
                            className="mt-1 flex w-fit items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-800"
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
            className="inline-block bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Contactar
          </Link>
        </section>
      </div>
    </main>
  );
}
