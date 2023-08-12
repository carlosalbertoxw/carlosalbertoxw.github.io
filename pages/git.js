import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Git() {
  return (
    <>
      <MyHead title="Git - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Git</h5>
            <div>
              <p>
                A continuación se presenta una serie de publicaciones que he
                realizado sobre el sistema de control de versiones git,
                ordenadas en forma de temario, exponiendo algo de lo que he
                aprendido, descubierto y utilizado, con el objetivo de que le
                sirva a otras personas como guía o también para validar los
                conocimientos adquiridos generando discusiones.
              </p>
              <p>
                Esta página se irá actualizando conforme vaya publicando más
                sobre el sistema de control de versiones git en mi blog
                personal.
              </p>
              <ol>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/03/git.html"
                  >
                    Introducción a Git
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/configuracion-inicial-de-git.html"
                  >
                    Configuración inicial de Git
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/inicializar-o-clonar-repositorio-git.html"
                  >
                    Inicializar o clonar repositorio Git
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/opciones-de-comando-git-clone.html"
                  >
                    Opciones de comando git clone
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-status.html"
                  >
                    Git status
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-restore.html"
                  >
                    Git restore
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-clean.html"
                  >
                    Git clean
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-add.html"
                  >
                    Git add
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-reset.html"
                  >
                    Git reset
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-commit.html"
                  >
                    Git commit
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-tag.html"
                  >
                    Git tag
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-branch.html"
                  >
                    Git branch
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-checkout.html"
                  >
                    Git checkout
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-remote-add.html"
                  >
                    Git remote add
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-push.html"
                  >
                    Git push
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-fetch.html"
                  >
                    Git fetch
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-pull.html"
                  >
                    Git pull
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-merge.html"
                  >
                    Git merge
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-cherry-pick.html"
                  >
                    Git cherry-pick
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-rebase.html"
                  >
                    Git rebase
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-diff.html"
                  >
                    Git diff
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-show.html"
                  >
                    Git show
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-log.html"
                  >
                    Git log
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/git-stash.html"
                  >
                    Git stash
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    className="green-text text-darken-3"
                    href="https://blog.carlosalbertoxw.com/2023/07/gitignore.html"
                  >
                    Gitignore
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
