import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
import menuSections from "../../data/menuSections";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../utils/motion";
import "./MenuPage.css";

function MenuPage() {
  return (
    <>
      <Header currentPage="menu" />

      <main className="menu-page">
        <section className="menu-page__hero">
          <motion.div
            className="menu-page__container"
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="menu-page__eyebrow" variants={fadeUpVariant}>
              Menú
            </motion.p>

            <motion.h1 className="menu-page__title" variants={fadeUpVariant}>
              Nuestro menú
            </motion.h1>

            <motion.p
              className="menu-page__description"
              variants={fadeUpVariant}
            >
              Esta es una versión inicial para presentar el concepto del
              proyecto. Después integraremos el menú real del restaurante con
              sus productos, precios y fotografías definitivas.
            </motion.p>

            <motion.div
              className="menu-page__badges"
              variants={fadeUpVariant}
            >
              <span className="menu-page__badge">Versión demo</span>
              <span className="menu-page__badge">Preparado al momento</span>
              <span className="menu-page__badge">Pedido por WhatsApp</span>
            </motion.div>

            <motion.div
              className="menu-page__actions"
              variants={fadeUpVariant}
            >
              <a
                className="menu-page__button menu-page__button--primary"
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Pedir por WhatsApp
              </a>

              <Link
                className="menu-page__button menu-page__button--secondary"
                to="/"
              >
                Volver al inicio
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="menu-page__section">
          <motion.div
            className="menu-page__container"
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              className="menu-page__section-header"
              variants={fadeUpVariant}
            >
              <p className="menu-page__section-eyebrow">Selección inicial</p>
              <h2 className="menu-page__section-title">Categorías demo</h2>
              <p className="menu-page__section-description">
                Una primera estructura pensada para mostrar el estilo del menú y
                cómo se presentará la oferta del negocio cuando integremos la
                versión final.
              </p>
            </motion.div>

            <div className="menu-page__grid">
              {menuSections.map((section) => (
                <motion.article
                  className="menu-page__card"
                  key={section.id}
                  variants={fadeUpVariant}
                >
                  <div className="menu-page__card-head">
                    <p className="menu-page__card-eyebrow">
                      {section.eyebrow}
                    </p>
                    <h3 className="menu-page__card-title">{section.title}</h3>
                  </div>

                  <p className="menu-page__card-text">
                    {section.description}
                  </p>

                  <div className="menu-page__item-list">
                    {section.items.map((item) => (
                      <span className="menu-page__item-pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="menu-page__cta-section">
          <motion.div
            className="menu-page__container"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="menu-page__cta-card">
              <div className="menu-page__cta-content">
                <p className="menu-page__cta-eyebrow">Pide directo</p>
                <h2 className="menu-page__cta-title">
                  ¿Listo para pedir o preguntar?
                </h2>
                <p className="menu-page__cta-text">
                  Escríbenos por WhatsApp para hacer tu pedido, preguntar por la
                  promoción del momento o conocer más sobre nuestras
                  especialidades.
                </p>
              </div>

              <div className="menu-page__cta-actions">
                <a
                  className="menu-page__button menu-page__button--primary"
                  href={businessInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Pedir por WhatsApp
                </a>

                <a
                  className="menu-page__button menu-page__button--secondary"
                  href={businessInfo.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver ubicación
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar currentPage="menu" />
    </>
  );
}

export default MenuPage;