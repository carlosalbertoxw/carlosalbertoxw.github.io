import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function EntrepreneurshipFinance() {
  return (
    <>
      <MyHead title="Emprendimiento y Finanzas - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Emprendimiento y Finanzas</h5>
            <p>
              A lo largo de mi vida he tenido cierto interés por el mundo del
              emprendimiento y las finanzas, que me ha llevado a asistir a
              eventos, leer libros, tomar cursos y unirme a organizaciones de
              emprendimiento en los que he aprendido muchas cosas de las
              historias de otras personas y de los aciertos y fracasos que he
              tenido.
            </p>
            <p>
              A continuación se presenta una serie de publicaciones que he
              realizado sobre emprendimiento y finanzas, ordenadas en forma de
              temario, exponiendo algo de lo que he aprendido, con el objetivo
              de que le sirva a otras personas como guía si quieren aprender del
              tema o también para validar los conocimientos adquiridos generando
              discusiones.
            </p>
            <p>
              Esta página se irá actualizando conforme vaya publicando más
              conceptos sobre emprendimiento y finanzas en mi blog personal.
            </p>
            <ol>
              <li>
                <Link
                  target="_blank"
                  className="green-text text-darken-3"
                  href="https://blog.carlosalbertoxw.com/2023/03/un-consejo-financiero.html"
                >
                  Un consejo financiero
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="green-text text-darken-3"
                  href="https://blog.carlosalbertoxw.com/2016/11/como-lograr-la-libertad-financiera.html"
                >
                  ¿Cómo Lograr la Libertad Financiera?
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="green-text text-darken-3"
                  href="https://blog.carlosalbertoxw.com/2016/10/consejos-para-vender-un-producto-o-servicio.html"
                >
                  Consejos para Vender un Producto o Servicio
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  className="green-text text-darken-3"
                  href="https://blog.carlosalbertoxw.com/2023/04/consejos-para-mejorar-las-habilidades-de-comunicacion-y-venta.html"
                >
                  Consejos para mejorar las habilidades de comunicación y venta
                </Link>
              </li>
            </ol>
            <p>
              Si te interesa hablar sobre ahorro e inversiones y los diferentes
              productos financieros que existen, o simplemente quieres compartir
              puntos de vista e ideas, no dudes en contactarme.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
