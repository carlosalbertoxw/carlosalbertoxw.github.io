import Link from "next/link";
import { Navbar, Icon, NavItem, Dropdown, Divider } from "react-materialize";

const Nav = () => (
  <>
    <Navbar
      menuIcon={<Icon>menu</Icon>}
      brand={
        <Link className="brand-logo" href="/">
          Carlos Alberto
        </Link>
      }
      className="green darken-3 nav-wrapper"
      alignLinks="right"
      centerChildren
    >
      <NavItem href="/entrepreneurship-finance">
        Emprendimiento y Finanzas
      </NavItem>
      <NavItem href="/software-development">Desarrollo de Software</NavItem>
      <Dropdown
        id="resources"
        trigger={
          <a href="#!">
            Recursos <Icon right>arrow_drop_down</Icon>
          </a>
        }
      >
        <Link href="/git">Git</Link>
        <Divider />
        <Link href="/blockchain-cryptocurrencies">Blockchain y Criptomonedas</Link>
        <Divider />
        <Link href="/productivity">Productividad</Link>
        <Divider />
        <Link href="/english">Inglés</Link>
        <Divider />
      </Dropdown>
      <NavItem href="/links">Enlaces</NavItem>
    </Navbar>
  </>
);

export default Nav;
