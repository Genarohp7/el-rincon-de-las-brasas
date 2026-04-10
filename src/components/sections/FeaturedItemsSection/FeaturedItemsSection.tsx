import { motion } from "motion/react";
import businessInfo from "../../../data/businessInfo";
import featuredItems from "../../../data/featuredItems";
import {
  fadeUpVariant,
  staggerContainerVariant,
} from "../../../utils/motion";
import "./FeaturedItemsSection.css";

function FeaturedItemsSection() {
  return (
    <section className="featured-items-section">
      <div className="featured-items-section__container">
        <motion.div
          className="featured-items-section__intro"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="featured-items-section__eyebrow"
            variants={fadeUpVariant}
          >
            Productos estrella
          </motion.p>

          <motion.h2
            className="featured-items-section__title"
            variants={fadeUpVariant}
          >
            Los sabores que mejor representan la casa
          </motion.h2>

          <motion.p
            className="featured-items-section__description"
            variants={fadeUpVariant}
          >
            Una selección pensada para mostrar personalidad, antojo y ese toque
            especial que hace que este rincón se quede en la memoria desde la
            primera visita.
          </motion.p>
        </motion.div>

        <motion.div
          className="featured-items-section__grid"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featuredItems.map((item) => (
            <motion.article
              className="featured-items-section__card"
              key={item.id}
              variants={fadeUpVariant}
            >
              <div
  className="featured-items-section__visual"
  style={{ backgroundImage: `url(${item.imageSrc})` }}
>
  <div className="featured-items-section__visual-badge">
    {item.eyebrow}
  </div>
</div>

              <div className="featured-items-section__content">
                <p className="featured-items-section__card-eyebrow">
                  {item.eyebrow}
                </p>

                <h3 className="featured-items-section__card-title">
                  {item.name}
                </h3>

                <p className="featured-items-section__card-text">
                  {item.description}
                </p>

                <div className="featured-items-section__card-footer">
                  <span className="featured-items-section__tag">
                    {item.badge}
                  </span>

                  <a
                    className="featured-items-section__link"
                    href={businessInfo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lo quiero por WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedItemsSection;