import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
import menuSections from "../../data/menuSections";
import seoConfig from "../../data/seo";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../utils/motion";
import "./MenuPage.css";

function MenuPage() {
  const canonicalUrl = `${seoConfig.siteUrl}/menu`;
  const pageTitle = "Menú | El Rincón de las Brasas";
  const pageDescription =
    "Consulta el menú completo de El Rincón de las Brasas: tacos, burritos, cortes, parrilladas, hamburguesas, hot-dogs, ramen, bebidas y más.";

  return (
    <>
      <Helmet>
        <html lang="es-MX" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content={seoConfig.locale} />
        <meta property="og:site_name" content={seoConfig.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={seoConfig.defaultImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={seoConfig.defaultImage} />
      </Helmet>

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
              Menú digital
            </motion.p>

            <motion.h1 className="menu-page__title" variants={fadeUpVariant}>
              Todo el sabor, en un solo lugar
            </motion.h1>

            <motion.p
              className="menu-page__description"
              variants={fadeUpVariant}
            >
              Consulta el menú completo de El Rincón de las Brasas y encuentra
              desde tacos y burritos hasta cortes, parrilladas, hamburguesas,
              hot-dogs, ramen, snacks y bebidas.
            </motion.p>

            <motion.div
              className="menu-page__badges"
              variants={fadeUpVariant}
            >
              <span className="menu-page__badge">Precios en MXN</span>
              <span className="menu-page__badge">Pedido por WhatsApp</span>
              <span className="menu-page__badge">Menú digital</span>
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
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="menu-page__section-header"
              variants={fadeUpVariant}
            >
              <p className="menu-page__section-eyebrow">Menú completo</p>
              <h2 className="menu-page__section-title">
                Explora todas las categorías
              </h2>
              <p className="menu-page__section-description">
                Este menú digital reúne la oferta actual del restaurante en un
                formato claro, navegable y pensado para verse bien en celular.
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

                  {section.note ? (
                    <p className="menu-page__card-note">{section.note}</p>
                  ) : null}

                  <div className="menu-page__item-list">
                    {section.items.map((item) => (
                      <div className="menu-page__item-row" key={`${section.id}-${item.name}`}>
                        <div className="menu-page__item-copy">
                          <p className="menu-page__item-name">{item.name}</p>
                          {item.description ? (
                            <p className="menu-page__item-description">
                              {item.description}
                            </p>
                          ) : null}
                        </div>

                        {item.price ? (
                          <span className="menu-page__item-price">
                            {item.price}
                          </span>
                        ) : null}
                      </div>
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
                  Escríbenos por WhatsApp para hacer tu pedido, preguntar por
                  disponibilidad o elegir la mejor opción para compartir.
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