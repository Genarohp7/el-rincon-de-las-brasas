import { motion } from "motion/react";
import { Link } from "react-router";
import businessInfo from "../../../data/businessInfo";
import specialties from "../../../data/specialties";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../../utils/motion";
import "./SpecialtiesSection.css";

function SpecialtiesSection() {
  return (
    <section className="specialties-section">
      <div className="specialties-section__container">
        <motion.div
          className="specialties-section__intro"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="specialties-section__eyebrow"
            variants={fadeUpVariant}
          >
            Especialidades
          </motion.p>

          <motion.h2
            className="specialties-section__title"
            variants={fadeUpVariant}
          >
            Lo que hace especial este rincón
          </motion.h2>

          <motion.p
            className="specialties-section__description"
            variants={fadeUpVariant}
          >
            Una selección pensada para mostrar el carácter del lugar, abrir el
            apetito desde la vista y dejar claro que aquí el fuego sí se
            convierte en sabor.
          </motion.p>
        </motion.div>

        <motion.div
          className="specialties-section__grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {specialties.map((specialty) => (
            <motion.article
              className="specialties-section__card"
              key={specialty.id}
              variants={fadeUpVariant}
            >
              <div
  className="specialties-section__visual"
  style={{ backgroundImage: `url(${specialty.imageSrc})` }}
>
  <div className="specialties-section__visual-badge">
    {specialty.eyebrow}
  </div>
</div>

              <div className="specialties-section__content">
                <p className="specialties-section__card-eyebrow">
                  {specialty.eyebrow}
                </p>

                <h3 className="specialties-section__card-title">
                  {specialty.title}
                </h3>

                <p className="specialties-section__card-text">
                  {specialty.description}
                </p>

                <span className="specialties-section__tag">
                  {specialty.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="specialties-section__cta"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="specialties-section__cta-content">
            <p className="specialties-section__cta-eyebrow">Menú y pedidos</p>
            <h3 className="specialties-section__cta-title">
              Revisa el menú y haz tu pedido directo
            </h3>
            <p className="specialties-section__cta-text">
              Explora la versión inicial del menú o contáctanos por WhatsApp
              para pedir, preguntar o conocer más de nuestras especialidades.
            </p>
          </div>

          <div className="specialties-section__cta-actions">
            <Link
              className="specialties-section__button specialties-section__button--secondary"
              to="/menu"
            >
              Ver menú
            </Link>

            <a
              className="specialties-section__button specialties-section__button--primary"
              href={businessInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SpecialtiesSection;