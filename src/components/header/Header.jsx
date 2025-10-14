import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const navItems = [
    { path: "/", label: "Inicio", icon: "🏠" },
    { path: "/sobre-nosotros", label: "Nosotros", icon: "👥" },
    { path: "/portfolio", label: "Portfolio", icon: "💼" },
    { path: "/servicios", label: "Servicios", icon: "⚡" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} role="banner">
      <nav className="nav-wrapper" aria-label="Navegación principal" role="navigation">
        <div className="nav-content">
          {/* Logo con mejor jerarquía */}
          <Link 
            to="/" 
            className="logo" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Pochitama.dev - Ir al inicio"
          >
            <span className="logo-brand">
              <span className="logo-main">Pochitama</span>
              <span className="logo-dot">.</span>
              <span className="logo-extension">dev</span>
            </span>
            <span className="logo-tagline">Soluciones Digitales</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu" role="menubar">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item" role="none">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <Link 
            to="/contacto" 
            className="cta-button desktop-cta"
            aria-label="Contactar con Pochitama.dev"
          >
            <span className="cta-text">Hablemos</span>
            <svg 
              className="cta-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 13L11 9L7 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="menu-line" aria-hidden="true"></span>
            <span className="menu-line" aria-hidden="true"></span>
            <span className="menu-line" aria-hidden="true"></span>
            <span className="menu-text">{isMenuOpen ? "Cerrar" : "Menú"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? "active" : ""}`} 
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Navigation */}
      <aside 
        id="mobile-navigation"
        className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
        aria-label="Menú de navegación móvil"
      >
        <div className="mobile-menu-header">
          <span className="mobile-logo">Pochitama.dev</span>
        </div>

        <nav aria-label="Menú principal">
          <ul className="mobile-nav-list" role="menu">
            {navItems.map((item, index) => (
              <li
                key={item.path}
                className="mobile-nav-item"
                style={{ transitionDelay: `${index * 0.08}s` }}
                role="none"
              >
                <Link
                  to={item.path}
                  className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  <span className="mobile-link-icon" aria-hidden="true">{item.icon}</span>
                  <span className="mobile-link-text">{item.label}</span>
                  {location.pathname === item.path && (
                    <span className="mobile-link-indicator" aria-hidden="true"></span>
                  )}
                </Link>
              </li>
            ))}
            
            {/* Mobile CTA */}
            <li 
              className="mobile-nav-item mobile-cta-item" 
              style={{ transitionDelay: "0.32s" }}
              role="none"
            >
              <Link
                to="/contacto"
                className="mobile-cta-button"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                <span>Iniciar Proyecto</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M7 14L12 10L7 6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Footer */}
        <div className="mobile-menu-footer">
          <p className="mobile-menu-tagline">
            <span className="tagline-icon" aria-hidden="true">✨</span>
            Transformamos ideas en experiencias digitales
          </p>
          <div className="mobile-menu-social">
            <span className="social-label">Síguenos</span>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn" className="social-link">in</a>
              <a href="#" aria-label="GitHub" className="social-link">gh</a>
              <a href="#" aria-label="Instagram" className="social-link">ig</a>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
