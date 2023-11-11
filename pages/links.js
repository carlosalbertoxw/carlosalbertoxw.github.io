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
              <a
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://blog.carlosalbertoxw.com/"
              >
                blog.carlosalbertoxw.com
              </a>
            </p>
            <p className="center">
              GitHub <br />
              <a
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://github.com/carlosalbertoxw"
              >
                github.com/carlosalbertoxw
              </a>
            </p>
            <p className="center">
              YouTube <br />
              <a
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.youtube.com/carlosalbertoxw"
              >
                youtube.com/carlosalbertoxw
              </a>
            </p>
            <p className="center">
              TikTok <br />
              <a
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.tiktok.com/@carlosalbertoxw"
              >
                tiktok.com/@carlosalbertoxw
              </a>
            </p>
            <p className="center">
              Linkedin <br />
              <a
                rel="nofollow"
                target="blank"
                className="green-text text-darken-3"
                href="https://www.linkedin.com/in/carlosalbertoxw"
              >
                linkedin.com/in/carlosalbertoxw
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
