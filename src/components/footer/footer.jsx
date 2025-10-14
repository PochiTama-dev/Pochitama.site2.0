import React from "react";
import "./footer.css";
import miLogo from "../../assets/images/LogoPochi.webp";
import LinksBox from "./LinksBox";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img className="footer-logo" src={miLogo} alt="Pochitama.dev Logo" />
            </Link>
            <p className="footer-tagline">
              Construyendo experiencias digitales excepcionales
            </p>
            <div className="footer-tech-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">Mobile</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <div className="footer-column">
              <h4 className="footer-title">Navegación</h4>
              <ul className="footer-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre-nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Servicios</h4>
              <ul className="footer-nav">
                <li><Link to="/servicios">Apps Móviles</Link></li>
                <li><Link to="/servicios">Desarrollo Web</Link></li>
                <li><Link to="/servicios">UX/UI Design</Link></li>
                <li><Link to="/servicios">Consultoría</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <LinksBox />
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Pochitama.dev | Todos los derechos reservados</p>
          </div>
          <div className="footer-legal">
            <Link to="/politica-privacidad">Política de Privacidad</Link>
            <span className="separator">•</span>
            <Link to="/terminos">Términos de Uso</Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-gradient"></div>
      </div>
    </footer>
  );
};

export default Footer;
