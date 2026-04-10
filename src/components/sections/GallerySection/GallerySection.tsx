import { motion } from "motion/react";
import businessInfo from "../../../data/businessInfo";
import galleryItems from "../../../data/galleryItems";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../../utils/motion";
import "./GallerySection.css";

function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-section__container">
        <motion.div
          className="gallery-section__intro"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p className="gallery-section__eyebrow" variants={fadeUpVariant}>
            Galería
          </motion.p>

          <motion.h2 className="gallery-section__title" variants={fadeUpVariant}>
            Así se vive El Rincón de las Brasas
          </motion.h2>

          <motion.p
            className="gallery-section__description"
            variants={fadeUpVariant}
          >
            Una sección pensada para provocar antojo desde lo visual. Por ahora
            dejamos espacios premium para futuras fotos reales del negocio, sin
            perder estética ni fuerza de marca.
          </motion.p>
        </motion.div>

        <motion.div
          className="gallery-section__grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {galleryItems.map((item) => (
            <motion.article
              className={`gallery-section__card gallery-section__card--${item.layout}`}
              key={item.id}
              variants={fadeUpVariant}
            >
              <div className="gallery-section__card-overlay" />

              <div className="gallery-section__card-content">
                <span className="gallery-section__card-badge">
                  Foto disponible pronto
                </span>

                <h3 className="gallery-section__card-title">{item.title}</h3>

                <p className="gallery-section__card-text">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="gallery-section__cta"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="gallery-section__cta-content">
            <p className="gallery-section__cta-eyebrow">Síguenos</p>
            <h3 className="gallery-section__cta-title">
              Mientras sumamos más material visual
            </h3>
            <p className="gallery-section__cta-text">
              Puedes encontrarnos en redes y conocer más del estilo, promociones
              y esencia de la marca mientras seguimos enriqueciendo esta
              experiencia digital.
            </p>
          </div>

          <div className="gallery-section__cta-actions">
            <a
              className="gallery-section__button gallery-section__button--secondary"
              href={businessInfo.instagramHref}
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram
            </a>

            <a
              className="gallery-section__button gallery-section__button--primary"
              href={businessInfo.facebookHref}
              target="_blank"
              rel="noreferrer"
            >
              Ver Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;