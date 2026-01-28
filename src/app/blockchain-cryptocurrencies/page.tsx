import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain y Criptomonedas",
  description: "Recopilación de artículos sobre el ecosistema cripto y redes blockchain.",
};

const cryptoLinks = [
  { title: "El mundo de las criptomonedas", href: "https://blog.carlosalbertoxw.com/2023/02/el-mundo-de-las-criptomonedas.html" },
  { title: "Áreas de Especialización", href: "https://blog.carlosalbertoxw.com/2023/03/areas-especializacion-criptomonedas.html" },
  { title: "¿Qué es un exchange?", href: "https://blog.carlosalbertoxw.com/2023/02/que-es-un-exchange-en-criptomonedas.html" },
  { title: "Bitso (Exchange)", href: "https://blog.carlosalbertoxw.com/2023/03/bitso.html" },
  { title: "¿Qué es una wallet?", href: "https://blog.carlosalbertoxw.com/2023/02/que-es-una-wallet-en-criptomonedas.html" },
  { title: "Coinbase Wallet", href: "https://blog.carlosalbertoxw.com/2023/03/coinbase-wallet.html" },
  { title: "Wallet vs Exchange", href: "https://blog.carlosalbertoxw.com/2023/02/wallet-y-exchange-en-criptomonedas.html" },
  { title: "CoinMarketCap", href: "https://blog.carlosalbertoxw.com/2023/02/coinmarketcap.html" },
  { title: "Stablecoins", href: "https://blog.carlosalbertoxw.com/2023/02/que-son-las-stablecoins.html" },
  { title: "¿Qué es el gas?", href: "https://blog.carlosalbertoxw.com/2023/03/que-es-el-gas-en-criptomonedas.html" },
  { title: "Etherscan y Privacidad", href: "https://blog.carlosalbertoxw.com/2023/03/etherscan-y-la-privacidad-en-blockchain.html" },
  { title: "¿Qué son los NFTs?", href: "https://blog.carlosalbertoxw.com/2023/02/que-son-los-nfts.html" },
  { title: "Opensea", href: "https://blog.carlosalbertoxw.com/2023/03/opensea.html" },
  { title: "Llaves Privadas y Públicas", href: "https://blog.carlosalbertoxw.com/2023/03/llave-privada-y-publica-en-blockchain.html" },
];

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Encabezado con color sólido y elegante */}
      <header className="bg-indigo-900 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Blockchain y Criptomonedas
          </h1>
          <p className="text-indigo-200 max-w-2xl mx-auto text-lg">
            Guía estructurada y publicaciones sobre tecnología descentralizada.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 -mt-10 pb-20">
        {/* Introducción en una tarjeta destacada */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 border border-slate-100">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-justify">
            <p>
              A continuación presento una serie de publicaciones ordenadas en forma de temario. 
              El objetivo es que sirva como guía de aprendizaje y para recordar conocimientos aprendidos.
            </p>
          </div>
        </div>

        {/* Grid de Enlaces - Diseño de Tarjetas Simples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              target="_blank"
              className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="bg-indigo-50 p-3 rounded-lg group-hover:bg-indigo-600 transition-colors">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-slate-300 font-bold text-2xl">0{index + 1}</span>
              </div>
              
              <h3 className="mt-4 text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {link.title}
              </h3>
              
              <p className="mt-2 text-sm text-slate-500">
                Click para leer el artículo en el blog oficial.
              </p>
            </Link>
          ))}
        </div>

        {/* Footer de actualización */}
        <footer className="mt-16 text-center text-slate-400 text-sm italic">
          Actualización constante conforme a nuevas publicaciones en el blog personal.
        </footer>
      </section>
    </main>
  );
}