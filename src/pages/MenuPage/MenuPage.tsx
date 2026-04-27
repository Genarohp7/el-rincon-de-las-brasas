import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import MobileStickyBar from "../../components/layout/MobileStickyBar/MobileStickyBar";
import businessInfo from "../../data/businessInfo";
import menuSections from "../../data/menuSections";
import seoConfig from "../../data/seo";
import "./MenuPage.css";

function MenuPage() {
  const canonicalUrl = `${seoConfig.siteUrl}/menu`;
  const pageTitle = "Menú | El Rincón de las Brasas";
  const pageDescription =
    "Consulta el menú completo de El Rincón de las Brasas: tacos, burritos, cortes, parrilladas, hamburguesas, hot-dogs, ramen, bebidas y más.";

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categoryNavRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categoryLinks = useMemo(
    () =>
      menuSections.map((section) => ({
        id: section.id,
        label: section.title,
      })),
    []
  );

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const navElement = categoryNavRef.current;

    if (!navElement) {
      return;
    }

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = navElement;
      const maxScrollLeft = scrollWidth - clientWidth;

      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();

    navElement.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      navElement.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleCategoryScroll = (direction: "left" | "right") => {
    const navElement = categoryNavRef.current;

    if (!navElement) {
      return;
    }

    const scrollAmount = 320;

    navElement.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
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
      </Helmet>

      <Header currentPage="menu" />

      <main className="menu-page">
        <section className="menu-page__hero">
          <div className="menu-page__container">
            <p className="menu-page__eyebrow">Menú digital</p>

            <h1 className="menu-page__title">Todo el sabor, en un solo lugar</h1>

            <p className="menu-page__description">
              Consulta el menú completo de El Rincón de las Brasas y encuentra
              desde tacos y burritos hasta cortes, parrilladas, hamburguesas,
              hot-dogs, ramen, snacks y bebidas.
            </p>


            <div className="menu-page__actions">
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
            </div>
          </div>
        </section>

        <section className="menu-page__category-nav-section">
          <div className="menu-page__container">
            <div className="menu-page__category-nav-shell">
              <button
                className={`menu-page__category-arrow menu-page__category-arrow--left ${
                  canScrollLeft ? "menu-page__category-arrow--active" : ""
                }`}
                type="button"
                aria-label="Desplazar categorías a la izquierda"
                onClick={() => handleCategoryScroll("left")}
                disabled={!canScrollLeft}
              >
                ‹
              </button>

              <div className="menu-page__category-nav-wrap">
                <div className="menu-page__category-nav" ref={categoryNavRef}>
                  {categoryLinks.map((category) => (
                    <a
                      key={category.id}
                      className="menu-page__category-link"
                      href={`#${category.id}`}
                    >
                      {category.label}
                    </a>
                  ))}
                </div>
              </div>

              <button
                className={`menu-page__category-arrow menu-page__category-arrow--right ${
                  canScrollRight ? "menu-page__category-arrow--active" : ""
                }`}
                type="button"
                aria-label="Desplazar categorías a la derecha"
                onClick={() => handleCategoryScroll("right")}
                disabled={!canScrollRight}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        <section className="menu-page__section">
          <div className="menu-page__container">
            <div className="menu-page__section-header">
              <p className="menu-page__section-eyebrow">Menú completo</p>
              <h2 className="menu-page__section-title">
                Explora todas las categorías
              </h2>
              <p className="menu-page__section-description">
                Usa la barra de navegación para saltar directo a la sección que
                te interesa y encontrar más fácil lo que buscas.
              </p>
            </div>

            <div className="menu-page__grid">
              {menuSections.map((section) => (
                <article
                  className="menu-page__card"
                  id={section.id}
                  key={section.id}
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
                      <div
                        className="menu-page__item-row"
                        key={`${section.id}-${item.name}`}
                      >
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-page__cta-section">
          <div className="menu-page__container">
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
          </div>
        </section>

        <button
          className={`menu-page__scroll-top ${
            showScrollTop ? "menu-page__scroll-top--visible" : ""
          }`}
          type="button"
          aria-label="Volver arriba"
          onClick={handleScrollTop}
        >
          ↑
        </button>
      </main>

      <Footer />
      <MobileStickyBar currentPage="menu" />
    </>
  );
}

export default MenuPage;