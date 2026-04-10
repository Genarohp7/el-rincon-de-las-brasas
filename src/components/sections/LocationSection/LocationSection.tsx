import { motion } from "motion/react";
import { Link } from "react-router";
import businessInfo from "../../../data/businessInfo";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../../utils/motion";
import "./LocationSection.css";

function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-section__container">
        <motion.div
          className="location-section__intro"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="location-section__eyebrow"
            variants={fadeUpVariant}
          >
            Ubicación
          </motion.p>

          <motion.h2
            className="location-section__title"
            variants={fadeUpVariant}
          >
            Encuéntranos y ven por el antojo
          </motion.h2>

          <motion.p
            className="location-section__description"
            variants={fadeUpVariant}
          >
            Estamos listos para recibirte o atender tu pedido. Ubícanos
            fácilmente, revisa nuestros horarios y disfruta el sabor de la
            parrilla como se debe.
          </motion.p>
        </motion.div>

        <motion.div
          className="location-section__grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article
            className="location-section__info-card"
            variants={fadeUpVariant}
          >
            <p className="location-section__card-eyebrow">Dirección</p>
            <h3 className="location-section__card-title">
              Lomas de Atizapán
            </h3>
            <p className="location-section__card-text">{businessInfo.address}</p>

            <div className="location-section__meta-group">
              <div className="location-section__meta-block">
                <p className="location-section__meta-label">Horario</p>
                {businessInfo.schedule.map((scheduleItem) => (
                  <p className="location-section__meta-text" key={scheduleItem}>
                    {scheduleItem}
                  </p>
                ))}
              </div>

              <div className="location-section__meta-block">
                <p className="location-section__meta-label">Contacto</p>
                <p className="location-section__meta-text">
                  {businessInfo.phoneDisplay}
                </p>
              </div>
            </div>

            <div className="location-section__actions">
              <a
                className="location-section__button location-section__button--primary"
                href={businessInfo.mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps
              </a>

              <a
                className="location-section__button location-section__button--secondary"
                href={businessInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </motion.article>

          <motion.article
            className="location-section__map-card"
            variants={fadeUpVariant}
          >
            <div className="location-section__map-frame">
              <iframe
                className="location-section__map-iframe"
                src={businessInfo.mapsEmbedSrc}
                title="Mapa de El Rincón de las Brasas"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          className="location-section__cta"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="location-section__cta-content">
            <p className="location-section__cta-eyebrow">Haz tu pedido</p>
            <h3 className="location-section__cta-title">
              ¿Ya se te antojó?
            </h3>
            <p className="location-section__cta-text">
              Haz tu pedido por WhatsApp, revisa el menú completo o ven a
              visitarnos para disfrutar el sabor de la casa.
            </p>
          </div>

          <div className="location-section__cta-actions">
            <a
              className="location-section__button location-section__button--primary"
              href={businessInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp
            </a>

            <Link
              className="location-section__button location-section__button--secondary"
              to="/menu"
            >
              Ver menú
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationSection;