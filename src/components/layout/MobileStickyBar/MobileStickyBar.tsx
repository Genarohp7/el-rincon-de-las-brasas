import { Link } from "react-router";
import businessInfo from "../../../data/businessInfo";
import "./MobileStickyBar.css";

type MobileStickyBarProps = {
  currentPage: "home" | "menu";
};

function MobileStickyBar({ currentPage }: MobileStickyBarProps) {
  return (
    <div className="mobile-sticky-bar">
      <a
        className="mobile-sticky-bar__item"
        href={businessInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mobile-sticky-bar__label">WhatsApp</span>
      </a>

      {currentPage === "home" ? (
        <Link className="mobile-sticky-bar__item" to="/menu">
          <span className="mobile-sticky-bar__label">Menú</span>
        </Link>
      ) : (
        <Link className="mobile-sticky-bar__item" to="/">
          <span className="mobile-sticky-bar__label">Inicio</span>
        </Link>
      )}

      <a
        className="mobile-sticky-bar__item"
        href={businessInfo.mapsHref}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mobile-sticky-bar__label">Ubicación</span>
      </a>
    </div>
  );
}

export default MobileStickyBar;