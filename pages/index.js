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
        <div className="main-card">
          <h1 className="header center green-text text-darken-3">
            Carlos Alberto
          </h1>
          <h5 className="header center">
            Emprendedor y Desarrollador de Software
          </h5>
        </div>
        <div className="row">
          <div className="col l6 m6 s12 center">
            <h5>Emprendimiento y Finanzas</h5>
            <p>
              Me gusta analizar e identificar oportunidades de mejora en las
              cosas que me rodean o que realizo para desarrollar proyectos que
              realicen esas mejoras.
            </p>
            <Link
              className="btn green darken-3"
              href="entrepreneurship-finance"
            >
              Ver más
            </Link>
          </div>
          <div className="col l6 m6 s12 center">
            <h5>Desarrollo de Software</h5>
            <p>
              Soy una persona introvertida. Me gusta aprender cosas nuevas y
              mejorar constantemente para llegar a ser un gran ingeniero de
              software.
            </p>
            <Link className="btn green darken-3" href="software-development">
              Ver más
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
