import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function English() {
  return (
    <>
      <MyHead title="Inglés - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Inglés</h5>
            <div>
              <p>
                A continuación se presenta una serie de publicaciones que he
                realizado sobre herramientas y recursos para aprender el idioma
                inglés, ordenadas en forma de temario, exponiendo algo de lo que
                he aprendido, descubierto y utilizado, con el objetivo de que le
                sirva a otras personas como guía o también para validar los
                conocimientos adquiridos generando discusiones.
              </p>
              <p>
                Esta página se irá actualizando conforme vaya publicando más
                sobre el idioma inglés en mi blog personal.
              </p>
              <ol>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2022/12/como-dominar-el-idioma-ingles.html"
                  >
                    ¿Cómo dominar el idioma inglés?
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/duolingo.html"
                  >
                    Duolingo
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/02/elsa-speak.html"
                  >
                    Elsa Speak
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/cambly.html"
                  >
                    Cambly
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
