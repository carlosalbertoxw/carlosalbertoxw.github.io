import { Metadata } from "next";
import TopicSheet, { type Section } from "@/components/TopicSheet";

export const metadata: Metadata = {
  title: "Blockchain y Criptomonedas",
  description:
    "Temario del ecosistema cripto y las redes blockchain: fundamentos, plataformas, seguridad, funcionamiento de la red, mercado, DeFi, NFTs y regulación.",
};

const cryptoSections: Section[] = [
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

export default function BlockchainPage() {
  return (
    <TopicSheet
      title="Blockchain y Criptomonedas"
      accent="indigo"
      marker="#"
      icon={
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l7 3.9v7.8l-7 3.9-7-3.9V6.4l7-3.9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6.4l7 3.9 7-3.9M12 10.3v7.8" />
        </svg>
      }
      intro="Un temario del ecosistema cripto y las redes blockchain, de los fundamentos técnicos a las plataformas, la seguridad, el funcionamiento de la red y las finanzas descentralizadas. Los temas que ya tienen artículo publicado son enlaces; el resto forma parte del índice pendiente por documentar."
      sections={cryptoSections}
    />
  );
}
