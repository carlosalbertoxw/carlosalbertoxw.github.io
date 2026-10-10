import Link from "next/link";
import ExternalIcon from "./ExternalIcon";
import ExternalLink from "./ExternalLink";
import type { ReactNode } from "react";

// Plantilla de las páginas de listado (Desarrollo de Software, Emprendimiento y
// Finanzas): cada página solo aporta su presentación, la publicación destacada y
// el arreglo de grupos.

export type Item = { term: string; rest?: ReactNode; href?: string };
export type Group = { icon: string; title: string; items: Item[] };
export type FeaturedPost = { name: string; description: string; href: string };

// Tailwind solo genera las clases que encuentra escritas completas en el código,
// así que cada acento declara sus clases enteras en lugar de armarlas con plantillas.
const accents = {
  blue: {
    iconBg: "bg-blue-600/10",
    icon: "text-blue-600",
    label: "text-blue-600",
    featuredTitle: "group-hover:text-blue-600",
    featuredIcon: "group-hover:text-blue-600",
    number: "text-blue-600",
    check: "text-blue-600",
    readMore: "text-blue-600 hover:text-blue-700",
    cta: "bg-blue-600 hover:bg-blue-700",
  },
  emerald: {
    iconBg: "bg-emerald-600/10",
    icon: "text-emerald-600",
    label: "text-emerald-700",
    featuredTitle: "group-hover:text-emerald-700",
    featuredIcon: "group-hover:text-emerald-600",
    number: "text-emerald-700",
    check: "text-emerald-600",
    readMore: "text-emerald-700 hover:text-emerald-800",
    cta: "bg-emerald-600 hover:bg-emerald-700",
  },
};

type ChecklistPageProps = {
  title: string;
  // Párrafos de presentación bajo el título
  intro: ReactNode;
  listTitle: string;
  listNote: ReactNode;
  // Trazos (<path>) del ícono del encabezado del listado
  listIcon: ReactNode;
  featuredPost: FeaturedPost;
  groups: Group[];
  accent: keyof typeof accents;
};

export default function ChecklistPage({
  title,
  intro,
  listTitle,
  listNote,
  listIcon,
  featuredPost,
  groups,
  accent,
}: ChecklistPageProps) {
  const colors = accents[accent];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <header className="bg-white border-b border-slate-200 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 text-center">
            {title}
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 text-slate-600 leading-relaxed">{intro}</div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        <section>
          <div className="flex items-center mb-4 border-b border-slate-200 pb-4">
            <div className={`${colors.iconBg} p-2.5 rounded-xl mr-4`}>
              <svg
                className={`w-6 h-6 ${colors.icon}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {listIcon}
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{listTitle}</h2>
          </div>
          <p className="mb-8 text-sm text-slate-500">{listNote}</p>

          {/* Tarjeta principal */}
          <ExternalLink
            href={featuredPost.href}
            className="group block bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow mb-6"
          >
            <span className={`text-xs font-semibold uppercase tracking-wider ${colors.label}`}>
              Publicación principal
            </span>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className={`text-xl font-bold text-slate-900 ${colors.featuredTitle} transition-colors`}>
                {featuredPost.name}
              </span>
              <ExternalIcon
                className={`w-5 h-5 mt-1 shrink-0 text-slate-300 ${colors.featuredIcon} transition-colors`}
              />
            </span>
            <span className="mt-3 block text-slate-600 leading-relaxed">{featuredPost.description}</span>
          </ExternalLink>

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
                    <span className={`block text-xs font-semibold tracking-widest ${colors.number}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-slate-900">{group.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.term} className="flex items-start gap-3">
                      <svg
                        className={`w-4 h-4 mt-1 shrink-0 ${colors.check}`}
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
                          <ExternalLink
                            href={item.href}
                            className={`mt-1 flex w-fit items-center gap-1 text-xs font-medium ${colors.readMore}`}
                          >
                            Leer publicación
                            <ExternalIcon className="w-3 h-3" />
                          </ExternalLink>
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
            className={`inline-block ${colors.cta} text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors`}
          >
            Contactar
          </Link>
        </section>
      </div>
    </main>
  );
}
