import { useState } from "react";
import { Link } from "react-router";
import businessInfo from "../../../data/businessInfo";
import "./Header.css";

type HeaderProps = {
  currentPage: "home" | "menu";
};

function Header({ currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClasses = [
    "site-header",
    isMenuOpen ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={headerClasses}>
      <div className="site-header__container">
        <Link
          className="site-header__brand"
          to="/"
          aria-label="Ir al inicio de El Rincón de las Brasas"
          onClick={closeMenu}
        >
          <img
            className="site-header__logo"
            src={businessInfo.logoSrc}
            alt={businessInfo.logoAlt}
          />
          <span className="site-header__brand-text">{businessInfo.name}</span>
        </Link>

        <nav className="site-header__nav" aria-label="Navegación principal">
          <Link
            className={`site-header__link ${
              currentPage === "home" ? "site-header__link--active" : ""
            }`}
            to="/"
          >
            Inicio
          </Link>

          <Link
            className={`site-header__link ${
              currentPage === "menu" ? "site-header__link--active" : ""
            }`}
            to="/menu"
          >
            Menú
          </Link>

          <a
            className="site-header__link"
            href={businessInfo.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Ubicación
          </a>

          <a
            className="site-header__link"
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Contacto
          </a>
        </nav>

        <a
          className="site-header__cta"
          href={businessInfo.whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          Pedir por WhatsApp
        </a>

        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="site-header-mobile-panel"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
        >
          <span className="site-header__menu-line" />
          <span className="site-header__menu-line" />
          <span className="site-header__menu-line" />
        </button>
      </div>

      <div
        className={`site-header__mobile-panel ${
          isMenuOpen ? "site-header__mobile-panel--open" : ""
        }`}
        id="site-header-mobile-panel"
      >
        <nav
          className="site-header__mobile-nav"
          aria-label="Navegación móvil"
        >
          <Link
            className={`site-header__mobile-link ${
              currentPage === "home" ? "site-header__mobile-link--active" : ""
            }`}
            to="/"
            onClick={closeMenu}
          >
            Inicio
          </Link>

          <Link
            className={`site-header__mobile-link ${
              currentPage === "menu" ? "site-header__mobile-link--active" : ""
            }`}
            to="/menu"
            onClick={closeMenu}
          >
            Menú
          </Link>

          <a
            className="site-header__mobile-link"
            href={businessInfo.mapsHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Ubicación
          </a>

          <a
            className="site-header__mobile-link"
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
