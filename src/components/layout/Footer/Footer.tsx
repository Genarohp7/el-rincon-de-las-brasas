import { Link } from "react-router";
import businessInfo from "../../../data/businessInfo";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__brand-block">
          <Link className="site-footer__brand" to="/">
            <img
              className="site-footer__logo"
              src={businessInfo.logoSrc}
              alt={businessInfo.logoAlt}
            />
            <span className="site-footer__brand-name">{businessInfo.name}</span>
          </Link>

          <p className="site-footer__tagline">
            Donde el fuego se convierte en sabor.
          </p>
        </div>

        <div className="site-footer__group">
          <h2 className="site-footer__title">Navegación</h2>
          <div className="site-footer__links">
            <Link className="site-footer__link" to="/">
              Inicio
            </Link>
            <Link className="site-footer__link" to="/menu">
              Menú
            </Link>
            <a
              className="site-footer__link"
              href={businessInfo.mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Ubicación
            </a>
            <a
              className="site-footer__link"
              href={businessInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="site-footer__group">
          <h2 className="site-footer__title">Visítanos</h2>
          <p className="site-footer__text">{businessInfo.address}</p>
          <div className="site-footer__schedule">
            {businessInfo.schedule.map((scheduleItem) => (
              <p className="site-footer__text" key={scheduleItem}>
                {scheduleItem}
              </p>
            ))}
          </div>
        </div>

        <div className="site-footer__group">
          <h2 className="site-footer__title">Redes</h2>
          <div className="site-footer__links">
            <a
              className="site-footer__link"
              href={businessInfo.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="site-footer__link"
              href={businessInfo.facebookHref}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              className="site-footer__link"
              href={businessInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__container site-footer__container--bottom">
          <p className="site-footer__copyright">
            © 2026 {businessInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;