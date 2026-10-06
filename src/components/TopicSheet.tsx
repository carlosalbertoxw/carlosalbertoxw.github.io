import Link from "next/link";
import ExternalLink from "./ExternalLink";
import type { ReactNode } from "react";

// Plantilla de las guías por temas (Git, Docker, Blockchain): cada página solo
// aporta su metadata, su encabezado y el arreglo de secciones.

export type Topic = {
  title: string;
  detail?: string;
  mono?: boolean;
  href?: string;
};

export type Section = {
  id: string;
  title: string;
  topics: Topic[];
};

// Tailwind solo genera las clases que encuentra escritas completas en el código,
// así que cada acento declara sus clases enteras en lugar de armarlas con plantillas.
const accents = {
  orange: {
    icon: "text-orange-400",
    pill: "hover:border-orange-400 hover:text-orange-400",
    badge: "text-orange-400",
    row: "hover:border-orange-400 hover:bg-orange-50/50",
    marker: "text-orange-500",
    chevron: "group-hover:text-orange-500",
    title: "group-hover:text-orange-600",
    contact: "text-orange-600 hover:text-orange-700",
  },
  blue: {
    icon: "text-blue-400",
    pill: "hover:border-blue-400 hover:text-blue-400",
    badge: "text-blue-400",
    row: "hover:border-blue-400 hover:bg-blue-50/50",
    marker: "text-blue-500",
    chevron: "group-hover:text-blue-500",
    title: "group-hover:text-blue-600",
    contact: "text-blue-600 hover:text-blue-700",
  },
  indigo: {
    icon: "text-indigo-400",
    pill: "hover:border-indigo-400 hover:text-indigo-400",
    badge: "text-indigo-400",
    row: "hover:border-indigo-400 hover:bg-indigo-50/50",
    marker: "text-indigo-500",
    chevron: "group-hover:text-indigo-500",
    title: "group-hover:text-indigo-600",
    contact: "text-indigo-600 hover:text-indigo-700",
  },
};

type Accent = keyof typeof accents;

function TopicContent({ topic, linked, accent }: { topic: Topic; linked?: boolean; accent: Accent }) {
  return (
    <>
      <span
        className={`${topic.mono ? "font-mono text-[13px]" : "text-sm"} font-semibold ${
          linked ? `text-slate-800 ${accents[accent].title}` : "text-slate-500"
        } transition-colors`}
      >
        {topic.title}
      </span>
      {topic.detail && <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">{topic.detail}</span>}
    </>
  );
}

type TopicSheetProps = {
  title: string;
  icon: ReactNode;
  intro: ReactNode;
  sections: Section[];
  accent: Accent;
  // Símbolo que precede a cada tema con artículo
  marker?: string;
};

export default function TopicSheet({ title, icon, intro, sections, accent, marker = "$" }: TopicSheetProps) {
  const colors = accents[accent];
  const linkedCount = (section: Section) => section.topics.filter((topic) => topic.href).length;
  const totalTopics = sections.reduce((acc, section) => acc + section.topics.length, 0);
  const totalLinks = sections.reduce((acc, section) => acc + linkedCount(section), 0);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Estilo Documentación */}
      <header className="bg-slate-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`flex items-center space-x-4 mb-4 ${colors.icon}`}>
            {icon}
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl text-justify leading-relaxed">{intro}</p>

          {/* Índice de secciones */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-xs uppercase tracking-widest font-bold text-slate-300 border border-slate-700 ${colors.pill} px-3 py-1.5 rounded-full transition-colors`}
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
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center space-x-3">
                  <span
                    className={`flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 ${colors.badge} font-mono text-xs font-bold`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-bold text-slate-800">{section.title}</h2>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {linkedCount(section)}/{section.topics.length}
                </span>
              </div>

              <ul className="divide-y divide-slate-100">
                {section.topics.map((topic) => (
                  <li key={topic.title}>
                    {topic.href ? (
                      <ExternalLink
                        href={topic.href}
                        className={`group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent ${colors.row} transition-all`}
                      >
                        <span className={`${colors.marker} font-mono font-bold text-sm leading-5`}>{marker}</span>
                        <span className="flex-1 min-w-0">
                          <TopicContent topic={topic} linked accent={accent} />
                        </span>
                        <svg
                          className={`w-3.5 h-3.5 mt-1 text-slate-300 ${colors.chevron} transform group-hover:translate-x-1 transition-all shrink-0`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </ExternalLink>
                    ) : (
                      <div className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent text-slate-400">
                        <span className="font-mono text-sm leading-5 text-slate-300">•</span>
                        <span className="flex-1 min-w-0 opacity-70">
                          <TopicContent topic={topic} accent={accent} />
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
          <p className="text-slate-600 mb-4">Si crees que puedo ayudarte en algo, no dudes en contactarme.</p>
          <Link href="/links" className={`${colors.contact} font-bold underline decoration-2 underline-offset-4`}>
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
