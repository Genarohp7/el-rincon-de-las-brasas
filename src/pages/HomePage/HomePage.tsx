import { motion } from "motion/react";
import { Link } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
import {
  fadeUpVariant,
  softFadeVariant,
  staggerContainerVariant,
} from "../../utils/motion";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Header currentPage="home" />

      <main className="home-page">
        <section className="home-page__hero">
          <motion.div
            className="home-page__hero-overlay"
            variants={softFadeVariant}
            initial="hidden"
            animate="visible"
          />

          <motion.div
            className="home-page__hero-content"
            variants={staggerContainerVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="home-page__eyebrow" variants={fadeUpVariant}>
              {businessInfo.name}
            </motion.p>

            <motion.h1 className="home-page__title" variants={fadeUpVariant}>
              Donde el fuego se convierte en sabor
            </motion.h1>

            <motion.p
              className="home-page__description"
              variants={fadeUpVariant}
            >
              Un rincón hecho para disfrutar tacos, burritos y especialidades
              con carácter, sazón y antojo del bueno.
            </motion.p>

            <motion.div
              className="home-page__actions"
              variants={fadeUpVariant}
            >
              <a
                className="home-page__button home-page__button--primary"
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Pedir por WhatsApp
              </a>

              <Link
                className="home-page__button home-page__button--secondary"
                to="/menu"
              >
                Ver menú
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="home-page__highlights">
          <motion.div
            className="home-page__container"
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.article
              className="home-page__highlight-card"
              variants={fadeUpVariant}
            >
              <p className="home-page__highlight-label">Especialidad</p>
              <h2 className="home-page__highlight-title">Sabor con carácter</h2>
              <p className="home-page__highlight-text">
                Tacos, burritos y especialidades con presencia, sazón y ese
                toque al grill que sí se nota.
              </p>
            </motion.article>

            <motion.article
              className="home-page__highlight-card"
              variants={fadeUpVariant}
            >
              <p className="home-page__highlight-label">Promoción</p>
              <h2 className="home-page__highlight-title">
                {businessInfo.promoText}
              </h2>
              <p className="home-page__highlight-text">
                Una forma simple y poderosa de abrir apetito desde la primera
                vista.
              </p>
            </motion.article>

            <motion.article
              className="home-page__highlight-card"
              variants={fadeUpVariant}
            >
              <p className="home-page__highlight-label">Ubicación</p>
              <h2 className="home-page__highlight-title">Lomas de Atizapán</h2>
              <p className="home-page__highlight-text">
                Encuéntranos fácilmente, revisa el menú y haz tu pedido directo
                por WhatsApp.
              </p>
            </motion.article>
          </motion.div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar currentPage="home" />
    </>
  );
}

export default HomePage;