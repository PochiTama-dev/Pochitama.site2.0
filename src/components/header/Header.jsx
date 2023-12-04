import React, { useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {

    const menu = document.querySelector('.bar');
    const nav = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu li a');

    const handleMenuClick = () => {
      menu.classList.toggle('bar-active');
      nav.classList.toggle('nav-active');
    };

    const closeMenu = () => {
      menu.classList.remove('bar-active');
      nav.classList.remove('nav-active');
    };

    menu.addEventListener('click', handleMenuClick);

    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Limpieza del event listener al desmontar el componente
    return () => {
      menu.removeEventListener('click', handleMenuClick);
      links.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };

  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          <h5>Pochitama.dev</h5>
        </div>
        <ul className="menu">
          <li><Link to= "/" >Home</Link></li>
          <li><Link to="/sobre-nosotros">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/servicios">Services</Link></li>
          <li><Link to="/contacto">Contact</Link></li>
        </ul>
        <div className="bar">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
