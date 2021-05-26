import { Link } from 'gatsby';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => {
  return (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Factura Ágil
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Características
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Servicios
        </AnchorLink>
        {/* <AnchorLink className="px-4" href="#stats">
          Estadísticas
        </AnchorLink> */}
        <AnchorLink className="px-4" href="#testimonials">
          Nuestros Clientes
        </AnchorLink>
        <AnchorLink className="px-4" href="#contacto">
          Contacto
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a className="bg-primary
        hover:bg-primary-darker
        hover:text-white
        rounded
        py-3 px-8
        text-white" href="https://app.factura-agil.com/">Iniciar sesión</a>
        {/* <Button className="text-sm" onClick={handleClick}>Iniciar Sesión</Button> */}
      </div>
    </div>
  </header>
)};

export default Header;
