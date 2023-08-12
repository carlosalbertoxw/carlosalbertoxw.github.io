import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function BlockchainCryptocurrencies() {
  return (
    <>
      <MyHead title="Blockchain y Criptomonedas - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Blockchain y Criptomonedas</h5>
            <div>
              <p>
                A continuación se presenta una serie de publicaciones que he
                realizado sobre blockchain y criptomonedas, ordenadas en forma
                de temario, exponiendo algo de lo que he aprendido, con el
                objetivo de que le sirva a otras personas como guía si quieren
                aprender del tema o también para validar los conocimientos
                adquiridos generando discusiones.
              </p>
              <p>
                Esta página se irá actualizando conforme vaya publicando más
                conceptos sobre blockchain y criptomonedas en mi blog personal.
              </p>
              <ol>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/el-mundo-de-las-criptomonedas.html"
                  >
                    El mundo de las criptomonedas
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/areas-especializacion-criptomonedas.html"
                  >
                    Áreas de Especialización en Criptomonedas
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/que-es-un-exchange-en-criptomonedas.html"
                  >
                    Que es un exchange en criptomonedas?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/bitso.html"
                  >
                    Bitso
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/que-es-una-wallet-en-criptomonedas.html"
                  >
                    Que es una wallet en criptomonedas?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/coinbase-wallet.html"
                  >
                    Coinbase Wallet
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/wallet-y-exchange-en-criptomonedas.html"
                  >
                    Cual es la diferencia entre una wallet y un exchange en
                    criptomonedas?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/coinmarketcap.html"
                  >
                    CoinMarketCap
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/que-son-las-stablecoins.html"
                  >
                    Que son las stablecoins?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/que-es-el-gas-en-criptomonedas.html"
                  >
                    Que es el gas en criptomonedas?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/etherscan-y-la-privacidad-en-blockchain.html"
                  >
                    Etherscan y la privacidad en blockchain
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/que-son-los-nfts.html"
                  >
                    ¿Qué son los NFTs?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/opensea.html"
                  >
                    Opensea
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/llave-privada-y-publica-en-blockchain.html"
                  >
                    Llave privada y pública en blockchain
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
