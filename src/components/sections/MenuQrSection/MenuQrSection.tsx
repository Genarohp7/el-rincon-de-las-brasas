import { useMemo } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../../utils/motion";
import "./MenuQrSection.css";

function MenuQrSection() {
  const menuUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "";
    }

    const normalizedBaseUrl = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;

    return `${window.location.origin}${normalizedBaseUrl}menu`;
  }, []);

  const qrImageSrc = useMemo(() => {
    if (!menuUrl) {
      return "";
    }

    return `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(
      menuUrl
    )}`;
  }, [menuUrl]);

  return (
    <section className="menu-qr-section">
      <div className="menu-qr-section__container">
        <motion.div
          className="menu-qr-section__card"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="menu-qr-section__content"
            variants={fadeUpVariant}
          >
            <p className="menu-qr-section__eyebrow">Menú QR</p>

            <h2 className="menu-qr-section__title">
              Compártelo 
            </h2>

          

            <div className="menu-qr-section__meta">
             
              <span className="menu-qr-section__pill">Abre directo al menú</span>
            </div>

            <div className="menu-qr-section__actions">
              <Link
                className="menu-qr-section__button menu-qr-section__button--secondary"
                to="/menu"
              >
                Abrir menú
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="menu-qr-section__qr-panel"
            variants={fadeUpVariant}
          >
            <div className="menu-qr-section__qr-frame">
              {qrImageSrc ? (
                <img
                  className="menu-qr-section__qr-image"
                  src={qrImageSrc}
                  alt="Código QR para abrir el menú"
                  loading="lazy"
                />
              ) : (
                <div className="menu-qr-section__qr-placeholder">
                  QR disponible al cargar la página
                </div>
              )}
            </div>

            <p className="menu-qr-section__qr-caption">
              Escanea para abrir el menú
            </p>

            <a
              className="menu-qr-section__qr-link"
              href={menuUrl || "/menu"}
              target="_blank"
              rel="noreferrer"
            >
              Abrir enlace del menú
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MenuQrSection;