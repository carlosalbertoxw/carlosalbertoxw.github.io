/* eslint-disable @next/next/no-sync-scripts */
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
  <footer className="green darken-3">
    <div className="container">
      <div className="center white-text">
        Contáctame en:&nbsp;
        <Link rel="nofollow" target="blank" href="https://twitter.com/carlosalbertoxw">
          <Image src="/twitter.png" alt="Twitter" width="24" height="24" />
        </Link>
        &nbsp;|&nbsp;
        <Link rel="nofollow" target="blank" href="https://t.me/carlosalbertoxw">
          <Image src="/telegram.png" alt="Telegram" width="24" height="24" />
        </Link>
        &nbsp;|&nbsp;
        Todos los Derechos Reservados
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
  </footer>
);

export default Footer;