import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <MyHead title="Inicio - Carlos Alberto" />
      <Nav />
      <main className="container">
        
        <div className="row">
          <div className="col l6 m6 s12 center">
            <h5>Aplicaciones / Extensiones</h5>
            <dev>
              <Link
                target="_blank"
                className="green-text text-darken-3"
                href="https://chromewebstore.google.com/detail/ogfgecooebcghjojlklphjjajaegcpen?utm_source=item-share-cb"
              >
                HTTPS Verifier
              </Link>
              &nbsp;|&nbsp;
              <Link
                target="_blank"
                className="green-text text-darken-3"
                href="https://github.com/carlosalbertoxw/HTTPSVerifier"
              >
                Repositorio de GitHub
              </Link>
              <p>
                Extensión web de Google Chrome que comprueba y garantiza que las páginas web y sus recursos asociados, como enlaces, imágenes y archivos CSS y JavaScript, utilicen conexiones HTTPS seguras.
              </p>
            </dev>
          </div>
          <div className="col l6 m6 s12 center">
            <h5>Utilidades</h5>
            <dev>
              <Link
                className="green-text text-darken-3"
                href="utilities/Base64Converter"
              >
                Convertidor Base64
              </Link>
              <p>
                Herramienta para convertir texto a codificación Base64 y viceversa
              </p>
            </dev>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
