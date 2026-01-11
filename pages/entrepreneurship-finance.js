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
            <div className="row">
              <div className="col l6 m6 s12">
                <p className="center">Consejos para personas comunes</p>
                <ol>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/03/un-consejo-financiero.html"
                    >
                      Un Consejo Financiero
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2016/11/como-lograr-la-libertad-financiera.html"
                    >
                      Cómo Lograr la Libertad Financiera
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/un-consejo-legal.html"
                    >
                      Un Consejo Legal
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/un-consejo-contable.html"
                    >
                      Un Consejo Contable
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/un-consejo-de-mercadotecnia.html"
                    >
                      Un Consejo de Mercadotecnia
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/04/consejos-para-mejorar-las-habilidades-de-comunicacion-y-venta.html"
                    >
                      Consejos para Mejorar las Habilidades de Comunicación y Venta
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
                      href="https://blog.carlosalbertoxw.com/2026/01/un-consejo-de-seguridad-informatica.html"
                    >
                      Un Consejo de Seguridad Informática
                    </Link>
                  </li>              
                </ol>
              </div>
              <div className="col l6 m6 s12">
                <p className="center">Guías para Emprendedores</p>
                <ol>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/que-son-las-incubadoras-y-aceleradoras.html"
                    >
                      Qué son las Incubadoras y Aceleradoras de Negocios
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/modelo-de-negocios-canvas.html"
                    >
                      Modelo de Negocios Canvas
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/que-es-el-coworking.html"
                    >
                      Qué es el Coworking
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/guia-legal-para-emprendedores.html"
                    >
                      Guía Legal para Emprendedores
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/guia-contable-para-emprendedores.html"
                    >
                      Guía Contable para Emprendedores
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/guia-de-mercadotecnia-para-emprendedores.html"
                    >
                      Guía de Mercadotecnia para Emprendedores
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2026/01/guia-de-ti-para-emprendedores.html"
                    >
                      Guía de TI para Emprendedores
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
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
