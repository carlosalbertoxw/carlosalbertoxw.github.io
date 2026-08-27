import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain y Criptomonedas",
  description:
    "Temario del ecosistema cripto y las redes blockchain: fundamentos, plataformas, seguridad, funcionamiento de la red, mercado, DeFi, NFTs y regulación.",
};

type CryptoTopic = {
  title: string;
  detail?: string;
  mono?: boolean;
  href?: string;
};

type CryptoSection = {
  id: string;
  title: string;
  topics: CryptoTopic[];
};

const cryptoSections: CryptoSection[] = [
  {
    id: "fundamentos",
    title: "Fundamentos",
    topics: [
      {
        title: "El mundo de las criptomonedas",
        detail: "qué son, de dónde vienen y por qué existen",
        href: "https://blog.carlosalbertoxw.com/2023/02/el-mundo-de-las-criptomonedas.html",
      },
      {
        title: "¿Qué es una blockchain?",
        detail: "bloques encadenados por hash, y por qué eso la hace difícil de alterar",
      },
      {
        title: "Descentralización y nodos",
        detail: "quién guarda una copia de la cadena y quién valida lo que se escribe en ella",
      },
      {
        title: "Mecanismos de consenso",
        detail: "cómo se ponen de acuerdo miles de nodos: Proof of Work vs. Proof of Stake",
      },
      {
        title: "Minado y emisión",
        detail: "de dónde salen las monedas nuevas, la recompensa por bloque y el halving",
      },
      {
        title: "Llaves privadas y públicas",
        detail: "la base criptográfica de la propiedad en blockchain",
        href: "https://blog.carlosalbertoxw.com/2023/03/llave-privada-y-publica-en-blockchain.html",
      },
      {
        title: "Bitcoin y Ethereum",
        detail: "la primera red y la que introdujo el cómputo programable",
      },
      {
        title: "Contratos inteligentes",
        detail: "código que se ejecuta en la red y aplica las reglas sin intermediario",
      },
      {
        title: "Áreas de especialización",
        detail: "los distintos caminos dentro del ecosistema cripto",
        href: "https://blog.carlosalbertoxw.com/2023/03/areas-especializacion-criptomonedas.html",
      },
    ],
  },
  {
    id: "plataformas",
    title: "Plataformas y custodia",
    topics: [
      {
        title: "¿Qué es un exchange?",
        detail: "dónde se compran, venden e intercambian criptomonedas",
        href: "https://blog.carlosalbertoxw.com/2023/02/que-es-un-exchange-en-criptomonedas.html",
      },
      {
        title: "Bitso",
        detail: "un exchange con operación en Latinoamérica",
        href: "https://blog.carlosalbertoxw.com/2023/03/bitso.html",
      },
      {
        title: "¿Qué es una wallet?",
        detail: "el monedero donde se resguardan las llaves",
        href: "https://blog.carlosalbertoxw.com/2023/02/que-es-una-wallet-en-criptomonedas.html",
      },
      {
        title: "Coinbase Wallet",
        detail: "una wallet de autocustodia y cómo se usa",
        href: "https://blog.carlosalbertoxw.com/2023/03/coinbase-wallet.html",
      },
      {
        title: "Wallet vs. exchange",
        detail: "quién tiene realmente las llaves en cada caso",
        href: "https://blog.carlosalbertoxw.com/2023/02/wallet-y-exchange-en-criptomonedas.html",
      },
    ],
  },
  {
    id: "seguridad",
    title: "Seguridad y estafas",
    topics: [
      {
        title: "La frase semilla",
        detail: "quien la tiene, tiene los fondos; cómo respaldarla fuera de línea",
      },
      {
        title: "Nunca compartas la frase semilla",
        detail: "ningún soporte técnico legítimo la pide: es el vector de estafa más común",
      },
      {
        title: "Phishing y sitios falsos",
        detail: "dominios suplantados, anuncios pagados y wallets clonadas",
      },
      {
        title: "Aprobaciones de contratos",
        detail: "qué estás autorizando al firmar, y cómo revocar permisos concedidos",
      },
      {
        title: "Rug pulls y esquemas Ponzi",
        detail: "señales de alerta en proyectos que prometen rendimientos garantizados",
      },
      {
        title: "Airdrops maliciosos y dusting",
        detail: "tokens que llegan solos a tu wallet y el riesgo de interactuar con ellos",
      },
      {
        title: "Verifica la red antes de retirar",
        detail: "enviar por la cadena equivocada suele ser irreversible",
      },
    ],
  },
  {
    id: "red",
    title: "La red por dentro",
    topics: [
      {
        title: "Anatomía de una transacción",
        detail: "firma, mempool, inclusión en un bloque y confirmaciones",
      },
      {
        title: "¿Qué es el gas?",
        detail: "el costo de ejecutar una transacción en la red",
        href: "https://blog.carlosalbertoxw.com/2023/03/que-es-el-gas-en-criptomonedas.html",
      },
      {
        title: "Forks",
        detail: "soft fork vs. hard fork: cómo cambian las reglas de una red",
      },
      {
        title: "Capa 2 y rollups",
        detail: "por qué existen y qué cambia en costos y tiempos de confirmación",
      },
      {
        title: "Redes alternativas",
        detail: "Solana, Polygon, BNB Chain, Avalanche y sus trade-offs",
      },
      {
        title: "Puentes entre cadenas",
        detail: "cómo se mueve un activo de una red a otra, y por qué son un punto débil",
      },
      {
        title: "Estándares de token",
        detail: "ERC-20, ERC-721 y ERC-1155: fungibles, únicos e híbridos",
      },
      {
        title: "Oráculos",
        detail: "cómo entra al contrato un dato del mundo real, como un precio",
      },
      {
        title: "Testnets y faucets",
        detail: "probar y equivocarse sin arriesgar dinero real",
      },
      {
        title: "Etherscan y la privacidad",
        detail: "todo queda registrado y es público: qué implica",
        href: "https://blog.carlosalbertoxw.com/2023/03/etherscan-y-la-privacidad-en-blockchain.html",
      },
    ],
  },
  {
    id: "mercado",
    title: "Activos y mercado",
    topics: [
      {
        title: "Monedas vs. tokens",
        detail: "activo nativo de una red frente a token emitido sobre ella",
      },
      {
        title: "Capitalización, suministro y volumen",
        detail: "las métricas que describen un activo, y lo que no dicen",
      },
      {
        title: "CoinMarketCap",
        detail: "cómo consultar precios, capitalización y volumen",
        href: "https://blog.carlosalbertoxw.com/2023/02/coinmarketcap.html",
      },
      {
        title: "Stablecoins",
        detail: "criptomonedas ancladas al valor de otro activo",
        href: "https://blog.carlosalbertoxw.com/2023/02/que-son-las-stablecoins.html",
      },
      {
        title: "El riesgo de las stablecoins",
        detail: "qué las respalda realmente y qué es un episodio de depeg",
      },
      {
        title: "Órdenes de mercado vs. límite",
        detail: "libro de órdenes, spread y deslizamiento",
      },
      {
        title: "Volatilidad y ciclos",
        detail: "por qué el precio se mueve tanto; información educativa, no asesoría",
      },
    ],
  },
  {
    id: "defi",
    title: "DeFi",
    topics: [
      {
        title: "¿Qué es DeFi?",
        detail: "servicios financieros ejecutados por contratos en lugar de instituciones",
      },
      {
        title: "DEX y creadores de mercado automáticos",
        detail: "intercambiar sin libro de órdenes ni contraparte humana",
      },
      {
        title: "Pools de liquidez e impermanent loss",
        detail: "qué aportas al pool y por qué puedes retirar menos de lo que pusiste",
      },
      {
        title: "Staking",
        detail: "bloquear activos para asegurar la red a cambio de una recompensa",
      },
      {
        title: "Préstamos y liquidaciones",
        detail: "colateral, sobrecolateralización y qué pasa cuando el precio cae",
      },
      {
        title: "De dónde sale el rendimiento",
        detail: "si no puedes explicar quién paga ese interés, falta entender el riesgo",
      },
    ],
  },
  {
    id: "nfts",
    title: "NFTs",
    topics: [
      {
        title: "¿Qué son los NFTs?",
        detail: "activos únicos representados en la blockchain",
        href: "https://blog.carlosalbertoxw.com/2023/02/que-son-los-nfts.html",
      },
      {
        title: "Estándares y metadatos",
        detail: "qué se guarda en la cadena y qué vive fuera, en IPFS o un servidor",
      },
      {
        title: "Opensea",
        detail: "un marketplace para comprar y vender NFTs",
        href: "https://blog.carlosalbertoxw.com/2023/03/opensea.html",
      },
      {
        title: "Regalías",
        detail: "el pago al creador en cada reventa, y por qué su cumplimiento varía",
      },
      {
        title: "Usos más allá del arte",
        detail: "boletos, membresías, identidad y certificados",
      },
    ],
  },
  {
    id: "regulacion",
    title: "Regulación y fiscalidad",
    topics: [
      {
        title: "El marco regulatorio varía por país",
        detail: "y cambia rápido: lo que aplica en un lugar no aplica en otro",
      },
      {
        title: "Implicaciones fiscales",
        detail: "comprar, vender e intercambiar pueden ser hechos declarables",
      },
      {
        title: "Lleva registro de tus operaciones",
        detail: "desde la primera; reconstruirlo después es mucho más difícil",
      },
    ],
  },
];

const totalTopics = cryptoSections.reduce((acc, section) => acc + section.topics.length, 0);
const totalLinks = cryptoSections.reduce(
  (acc, section) => acc + section.topics.filter((topic) => topic.href).length,
  0
);

function TopicContent({ topic, linked }: { topic: CryptoTopic; linked?: boolean }) {
  return (
    <>
      <span
        className={`${topic.mono ? "font-mono text-[13px]" : "text-sm"} font-semibold ${
          linked ? "text-slate-800 group-hover:text-indigo-600" : "text-slate-500"
        } transition-colors`}
      >
        {topic.title}
      </span>
      {topic.detail && (
        <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">{topic.detail}</span>
      )}
    </>
  );
}

export default function BlockchainPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header Estilo Documentación */}
      <header className="bg-slate-900 py-20 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-4 text-indigo-400">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l7 3.9v7.8l-7 3.9-7-3.9V6.4l7-3.9z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.4l7 3.9 7-3.9M12 10.3v7.8" />
            </svg>
            <h1 className="text-4xl font-bold tracking-tight">Blockchain y Criptomonedas</h1>
          </div>
          <p className="text-xl text-slate-400 max-w-2xl text-justify leading-relaxed">
            Un temario del ecosistema cripto y las redes blockchain, de los fundamentos técnicos a
            las plataformas, la seguridad, el funcionamiento de la red y las finanzas
            descentralizadas. Los temas que ya tienen artículo publicado son enlaces; el resto forma
            parte del índice pendiente por documentar.
          </p>

          {/* Índice de secciones */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {cryptoSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-xs uppercase tracking-widest font-bold text-slate-300 border border-slate-700 hover:border-indigo-400 hover:text-indigo-400 px-3 py-1.5 rounded-full transition-colors"
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
          {cryptoSections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-900 text-indigo-400 font-mono text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-bold text-slate-800">{section.title}</h2>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  {section.topics.filter((topic) => topic.href).length}/{section.topics.length}
                </span>
              </div>

              <ul className="divide-y divide-slate-100">
                {section.topics.map((topic) => (
                  <li key={topic.title}>
                    {topic.href ? (
                      <Link
                        href={topic.href}
                        target="_blank"
                        className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent hover:border-indigo-400 hover:bg-indigo-50/50 transition-all"
                      >
                        <span className="text-indigo-500 font-mono font-bold text-sm leading-5">#</span>
                        <span className="flex-1 min-w-0">
                          <TopicContent topic={topic} linked />
                        </span>
                        <svg
                          className="w-3.5 h-3.5 mt-1 text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <div className="group flex items-start gap-3 px-5 py-3 border-l-2 border-transparent text-slate-400">
                        <span className="font-mono text-sm leading-5 text-slate-300">•</span>
                        <span className="flex-1 min-w-0 opacity-70">
                          <TopicContent topic={topic} />
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
          <p className="text-slate-600 mb-4">
            Si crees que puedo ayudarte en algo, no dudes en contactarme.
          </p>
          <Link
            href="/links"
            className="text-indigo-600 font-bold hover:text-indigo-700 underline decoration-2 underline-offset-4"
          >
            Contactar
          </Link>
        </div>
      </div>
    </main>
  );
}
