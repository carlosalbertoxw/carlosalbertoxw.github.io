"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Única fuente de las rutas del menú: la usan tanto la vista de escritorio como la móvil
const mainLinks = [
  { href: "/software-development", label: "Desarrollo de Software" },
  { href: "/entrepreneurship-finance", label: "Emprendimiento y Finanzas" },
];

const resourceLinks = [
  { href: "/git", label: "Git" },
  { href: "/docker", label: "Docker" },
  { href: "/blockchain-cryptocurrencies", label: "Blockchain" },
];

const contactLink = { href: "/links", label: "Enlaces" };

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // El Navbar vive en el layout y no se desmonta al navegar: el menú móvil se cierra al elegir un enlace
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Los menús se cierran al hacer scroll y con Escape; el desplegable, además, con un clic fuera de él
  useEffect(() => {
    const closeMenus = () => {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };
    const closeDropdownOutside = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setIsDropdownOpen(false);
    };
    window.addEventListener("scroll", closeMenus);
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeDropdownOutside);
    return () => {
      window.removeEventListener("scroll", closeMenus);
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeDropdownOutside);
    };
  }, []);

  return (
    <nav className="bg-[#0f172a] text-slate-200 shadow-lg border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="group flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Carlos Alberto
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
            {/* Se abre solo con clic: abrirlo también con hover hacía que el clic siguiente lo cerrara */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all outline-none ${
                  isDropdownOpen ? "bg-slate-800 text-white" : "hover:text-white hover:bg-slate-800"
                }`}
              >
                Recursos
                <svg
                  className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm hover:bg-blue-600 hover:text-white transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={contactLink.href}
              className="hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              {contactLink.label}
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Panel superpuesto bajo la barra (absolute) en lugar de dentro del flujo: si empujara el contenido,
          a mitad de página el navegador compensaría el salto con un evento scroll que cerraría el menú.
          Cerrado solo mide 0 de alto, así que inert saca sus enlaces del orden de tabulación */}
      <div
        id="mobile-menu"
        inert={!isMobileMenuOpen}
        className={`md:hidden absolute inset-x-0 top-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 border-t border-slate-800" : "max-h-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#0f172a]">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md hover:bg-slate-800"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Recursos</p>
            <div className="grid grid-cols-2 gap-1">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm hover:bg-slate-800 rounded-md"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href={contactLink.href}
            className="block px-3 py-2 rounded-md bg-blue-600 text-white text-center font-bold"
            onClick={closeMobileMenu}
          >
            {contactLink.label}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
