'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenus = () => {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', closeMenus);
    return () => window.removeEventListener('scroll', closeMenus);
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
            <Link href="/software-development" className="hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Desarrollo de Software
            </Link>
            <Link href="/entrepreneurship-finance" className="hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Emprendimiento y Finanzas
            </Link>
            <div className="relative">
              <button 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all outline-none ${
                  isDropdownOpen ? 'bg-slate-800 text-white' : 'hover:text-white hover:bg-slate-800'
                }`}
              >
                Recursos
                <svg 
                  className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div 
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-56 bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in duration-200"
                >
                  <Link href="/git" className="block px-4 py-2.5 text-sm hover:bg-blue-600 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>Git & GitHub</Link>
                  <Link href="/blockchain-cryptocurrencies" className="block px-4 py-2.5 text-sm hover:bg-blue-600 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>Blockchain</Link>
                  <Link href="/productivity" className="block px-4 py-2.5 text-sm hover:bg-blue-600 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>Productividad</Link>
                  <Link href="/english" className="block px-4 py-2.5 text-sm hover:bg-blue-600 hover:text-white transition-colors" onClick={() => setIsDropdownOpen(false)}>Inglés</Link>
                </div>
              )}
            </div>

            <Link href="/links" className="hover:text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all">
              Enlaces
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 border-t border-slate-800' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#0f172a]">
          <Link href="/software-development" className="block px-3 py-2 rounded-md hover:bg-slate-800">Desarrollo de Software</Link>
          <Link href="/entrepreneurship-finance" className="block px-3 py-2 rounded-md hover:bg-slate-800">Emprendimiento y Finanzas</Link>
          <div className="pt-2">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Recursos</p>
            <div className="grid grid-cols-2 gap-1">
              <Link href="/git" className="px-3 py-2 text-sm hover:bg-slate-800 rounded-md">Git</Link>
              <Link href="/english" className="px-3 py-2 text-sm hover:bg-slate-800 rounded-md">Inglés</Link>
              <Link href="/blockchain" className="px-3 py-2 text-sm hover:bg-slate-800 rounded-md">Blockchain</Link>
              <Link href="/productivity" className="px-3 py-2 text-sm hover:bg-slate-800 rounded-md">Productividad</Link>
            </div>
          </div>
          <Link href="/links" className="block px-3 py-2 rounded-md bg-blue-600 text-white text-center font-bold">Enlaces</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;