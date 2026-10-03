import { Metadata } from "next";
import ChecklistPage, { type Group } from "@/components/ChecklistPage";

export const metadata: Metadata = {
  title: "Emprendimiento y Finanzas",
  description: "Puntos de salud y crecimiento financiero, y guías para quienes inician un negocio.",
};

const featuredPost = {
  name: "Cómo Lograr la Libertad Financiera",
  description:
    "El objetivo de fondo al que apunta todo el listado. Los puntos que siguen son el camino ordenado para llegar ahí.",
  href: "https://blog.carlosalbertoxw.com/2016/11/como-lograr-la-libertad-financiera.html",
};

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

export default function EntrepreneurshipFinance() {
  return (
    <ChecklistPage
      title="Emprendimiento y Finanzas"
      accent="emerald"
      intro={
        <>
          <p>
            A lo largo de mi trayectoria he desarrollado un profundo interés por el mundo del emprendimiento. He
            aprendido de historias ajenas, libros y cursos, pero sobre todo, de mis propios{" "}
            <strong className="font-semibold text-slate-900">aciertos y fracasos</strong>.
          </p>
          <p>
            Comparto estos recursos con el objetivo de que sirvan como guía para quienes inician su camino y como un
            espacio para recordar lo que he aprendido.
          </p>
        </>
      }
      listTitle="Salud y crecimiento financiero"
      listNote="Listado ordenado: cada bloque se apoya en el anterior. Es información general con fines educativos y no sustituye la asesoría de un profesional."
      listIcon={
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </>
      }
      featuredPost={featuredPost}
      groups={groups}
    />
  );
}
