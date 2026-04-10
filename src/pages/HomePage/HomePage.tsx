import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import FeaturedItemsSection from "../../components/sections/FeaturedItemsSection/FeaturedItemsSection";
import GallerySection from "../../components/sections/GallerySection/GallerySection";
import LocationSection from "../../components/sections/LocationSection/LocationSection";
import MenuQrSection from "../../components/sections/MenuQrSection/MenuQrSection";
import SpecialtiesSection from "../../components/sections/SpecialtiesSection/SpecialtiesSection";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
import seoConfig from "../../data/seo";
import {
  fadeUpVariant,
  softFadeVariant,
  staggerContainerVariant,
} from "../../utils/motion";
import "./HomePage.css";

function HomePage() {
  const canonicalUrl = `${seoConfig.siteUrl}/`;
  const pageTitle =
    "El Rincón de las Brasas | Tacos, burritos y grill en Lomas de Atizapán";
  const pageDescription =
    "Descubre El Rincón de las Brasas en Lomas de Atizapán. Tacos, burritos, especialidades al grill y pedido directo por WhatsApp.";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: businessInfo.name,
    image: seoConfig.defaultImage,
    url: canonicalUrl,
    telephone: businessInfo.phoneDisplay,
    servesCuisine: "Mexican",
    menu: `${seoConfig.siteUrl}/menu`,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: "Ciudad López Mateos",
      addressRegion: "Estado de México",
      addressCountry: "MX",
    },
    sameAs: [businessInfo.instagramHref, businessInfo.facebookHref],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "14:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday", "Sunday"],
        opens: "14:00",
        closes: "22:00",
      },
    ],
  };

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

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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

        <SpecialtiesSection />
        <FeaturedItemsSection />
        <GallerySection />
        <MenuQrSection />
        <LocationSection />
      </main>

      <Footer />
      <MobileStickyBar currentPage="home" />
    </>
  );
}

export default HomePage;