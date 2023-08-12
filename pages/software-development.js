import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function SoftwareDevelopment() {
  return (
    <>
      <MyHead title="Desarrollo de Software - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Desarrollo de Software</h5>
            <p>
              Profesionalmente, me he desempeñado en el campo del desarrollo de
              software durante los últimos 5 años en una empresa de consultoría
              de tecnología de la información (TI). Durante este tiempo, mi
              labor se ha centrado en proporcionar apoyo en la creación de
              nuevas funcionalidades de aplicaciones existentes y solucionar
              problemas operativos de raíz en los departamentos de TI de
              diversas empresas de la región.
            </p>
            <p>
              A continuación se presenta una serie de publicaciones y ejercicios
              que he realizado sobre desarrollo de software, ordenadas en forma
              de temario, exponiendo algo de lo que he aprendido, con el
              objetivo de que le sirva a otras personas como guía si quieren
              aprender del tema o también para validar los conocimientos
              adquiridos generando discusiones.
            </p>
            <p>
              Esta página se irá actualizando conforme vaya publicando más
              conceptos sobre desarrollo de software en mi blog personal o
              github.
            </p>
            <div className="row">
              <div className="col l6 m6 s12">
                <p className="center">Herramientas</p>
                <ol>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/03/leetcode.html"
                    >
                      LeetCode
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/03/hackerrank.html"
                    >
                      HackerRank
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/04/entorno-para-desarrollo-en-net.html"
                    >
                      Entorno para desarrollo en .NET
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/04/entorno-para-desarrollo-en-javascript.html"
                    >
                      Entorno para desarrollo en Javascript
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/03/git.html"
                    >
                      Git
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/03/github.html"
                    >
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://blog.carlosalbertoxw.com/2023/04/ciclo-de-vida-del-desarrollo-de-software.html"
                    >
                      Ciclo de Vida del Desarrollo de Software
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="col l6 m6 s12">
                <p className="center">Ejercicios</p>
                <ol>
                  <li>
                    <Link
                      target="_blank"
                      className="green-text text-darken-3"
                      href="https://github.com/carlosalbertoxw/nextjs-github-pages-example"
                    >
                      nextjs-github-pages-example
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
            <p>
              Si crees que puedo ayudarte en algo, quieres darme alguna
              retroalimentación, o simplemente quieres compartir puntos de vista
              e ideas, no dudes en contactarme.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
