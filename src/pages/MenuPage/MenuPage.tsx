import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
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
              proyecto. Después integraremos el menú real del restaurante.
            </motion.p>

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
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              className="menu-page__section-title"
              variants={fadeUpVariant}
            >
              Categorías demo
            </motion.h2>

            <div className="menu-page__grid">
              <motion.article
                className="menu-page__card"
                variants={fadeUpVariant}
              >
                <h3 className="menu-page__card-title">Tacos</h3>
                <p className="menu-page__card-text">
                  Taco al grill, taco especial de la casa, taco norteño.
                </p>
              </motion.article>

              <motion.article
                className="menu-page__card"
                variants={fadeUpVariant}
              >
                <h3 className="menu-page__card-title">Burritos y pepitos</h3>
                <p className="menu-page__card-text">
                  Burrito clásico, burrito especial, pepito al grill.
                </p>
              </motion.article>

              <motion.article
                className="menu-page__card"
                variants={fadeUpVariant}
              >
                <h3 className="menu-page__card-title">
                  Especialidades de la casa
                </h3>
                <p className="menu-page__card-text">
                  Chicharrón Norteño, Cebollón y especialidad para compartir.
                </p>
              </motion.article>

              <motion.article
                className="menu-page__card"
                variants={fadeUpVariant}
              >
                <h3 className="menu-page__card-title">Postres</h3>
                <p className="menu-page__card-text">
                  Fresas con crema y opciones dulces para cerrar con buen sabor.
                </p>
              </motion.article>
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