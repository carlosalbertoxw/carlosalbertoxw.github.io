import Link from "next/link";
import MyHead from "../components/my-head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Links() {
  return (
    <>
      <MyHead title="Enlaces - Carlos Alberto" />
      <Nav />
      <main className="container">
        <div className="row">
          <div className="col s12 m12" style={{ textAlign: "justify" }}>
            <h5 className="center">Enlaces</h5>
            <p className="center">
              Blog <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://blog.carlosalbertoxw.com/"
              >
                blog.carlosalbertoxw.com
              </Link>
            </p>
            <p className="center">
              GitHub <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://github.com/carlosalbertoxw"
              >
                github.com/carlosalbertoxw
              </Link>
            </p>
            <p className="center">
              YouTube <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.youtube.com/carlosalbertoxw"
              >
                youtube.com/carlosalbertoxw
              </Link>
            </p>
            <p className="center">
              TikTok <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.tiktok.com/@carlosalbertoxw"
              >
                tiktok.com/@carlosalbertoxw
              </Link>
            </p>
            <p className="center">
              Instagram <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.instagram.com/carlosalbertoxw"
              >
                instagram.com/carlosalbertoxw
              </Link>
            </p>
            <p className="center">
              X <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.x.com/carlosalbertoxw"
              >
                x.com/carlosalbertoxw
              </Link>
            </p>
            <p className="center">
              Linkedin <br />
              <Link
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.linkedin.com/in/carlosalbertoxw"
              >
                linkedin.com/in/carlosalbertoxw
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
