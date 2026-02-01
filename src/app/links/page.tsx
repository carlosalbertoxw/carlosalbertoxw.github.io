import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enlaces",
  description: "Conecta conmigo a través de mis redes sociales y plataformas.",
};

const socialLinks = [
  { name: "Blog Personal", url: "https://blog.carlosalbertoxw.com/", icon: "🌐", color: "hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700" },
  { name: "GitHub", url: "https://github.com/carlosalbertoxw", icon: "💻", color: "hover:bg-slate-900 hover:text-white" },
  { name: "YouTube", url: "https://www.youtube.com/carlosalbertoxw", icon: "📺", color: "hover:bg-red-50 hover:border-red-500 hover:text-red-700" },
  { name: "TikTok", url: "https://www.tiktok.com/@carlosalbertoxw", icon: "📱", color: "hover:bg-black hover:text-white" },
  { name: "Instagram", url: "https://www.instagram.com/carlosalbertoxw", icon: "📸", color: "hover:bg-pink-50 hover:border-pink-500 hover:text-pink-700" },
  { name: "X (Twitter)", url: "https://www.x.com/carlosalbertoxw", icon: "🐦", color: "hover:bg-slate-100 hover:border-slate-800" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/carlosalbertoxw", icon: "💼", color: "hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800" },
];

export default function Links() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-16 px-6">
      {/* Perfil */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          CA
        </div>
        <h1 className="text-2xl font-bold text-slate-800">Carlos Alberto</h1>
        <p className="text-slate-500 text-sm mt-2 font-medium tracking-wide uppercase">
          Software Engineer
        </p>
      </div>

      {/* Botones de Enlaces */}
      <div className="w-full max-w-md space-y-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            rel="nofollow"
            target="_blank"
            className={`
              flex items-center justify-between p-4 w-full
              bg-white border-2 border-slate-100 rounded-2xl
              shadow-sm transition-all duration-300 transform hover:-translate-y-1
              text-slate-700 font-semibold group
              ${link.color}
            `}
          >
            <span className="text-xl ml-2">{link.icon}</span>
            <span className="flex-1 text-center">{link.name}</span>
            <svg 
              className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Footer minimalista */}
      <footer className="mt-16 text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Carlos Alberto
      </footer>
    </main>
  );
}