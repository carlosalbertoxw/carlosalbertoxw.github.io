import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Productivity() {
  return (
    <>
      <MyHead title="Productividad - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Productividad</h5>
            <div>
              <p>
                A continuación se presenta una serie de publicaciones que he
                realizado sobre productividad, ordenadas en forma de temario,
                exponiendo algo de lo que he aprendido, con el objetivo de que
                le sirva a otras personas como guía si quieren aprender del tema
                o también para validar los conocimientos adquiridos generando
                discusiones.
              </p>
              <p>
                Esta página se irá actualizando conforme vaya publicando más
                conceptos sobre productividad en mi blog personal.
              </p>
              <ol>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/un-consejo-de-vida.html"
                  >
                    Un consejo de vida
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2022/12/como-mejorar-la-productividad.html"
                  >
                    ¿Cómo mejorar la productividad?
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
