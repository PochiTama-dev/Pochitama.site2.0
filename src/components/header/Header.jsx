import React, { useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    const handleMenuClick = () => {
      const menu = document.querySelector('.bar');
      const nav = document.querySelector('.menu');

      menu.addEventListener('click', () => {
        menu.classList.toggle('bar-active');
        nav.classList.toggle('nav-active');
      });
    };

    handleMenuClick();
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
