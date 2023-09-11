import React, { useEffect } from 'react';
import './header.css';

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
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
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
