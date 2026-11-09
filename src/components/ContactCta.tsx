import Link from "next/link";

// Invitación a contactar al final de las plantillas: un botón relleno en las
// páginas de listado (ChecklistPage) y un enlace subrayado en las guías (TopicSheet).
const variants = {
  button: {
    box: "bg-white border-slate-100 shadow-sm",
    text: "mb-5",
    link: "inline-block text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors",
  },
  link: {
    box: "mt-16 bg-slate-50 border-dashed border-slate-300",
    text: "mb-4",
    link: "font-bold underline decoration-2 underline-offset-4",
  },
};

type ContactCtaProps = {
  variant: keyof typeof variants;
  // Clases de color del enlace, según el acento de la página
  accentClassName: string;
};

export default function ContactCta({ variant, accentClassName }: ContactCtaProps) {
  const styles = variants[variant];

  return (
    <div className={`p-8 rounded-2xl border text-center ${styles.box}`}>
      <p className={`text-slate-600 ${styles.text}`}>Si crees que puedo ayudarte en algo, no dudes en contactarme.</p>
      <Link href="/links" className={`${styles.link} ${accentClassName}`}>
        Contactar
      </Link>
    </div>
  );
}
