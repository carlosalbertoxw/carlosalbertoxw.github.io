import { useMediaQuery } from '@material-ui/core';
import Link from "next/link";
import { Navbar, Icon, NavItem, Dropdown } from "react-materialize";

const Nav = () => {
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
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
        centerChildren={isDesktop}
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
          <Link href="/blockchain-cryptocurrencies">Blockchain y Criptomonedas</Link>
          <Link href="/productivity">Productividad</Link>
          <Link href="/english">Inglés</Link>
        </Dropdown>
        <NavItem href="/links">Enlaces</NavItem>
      </Navbar>
    </>
  );
};

export default Nav;
