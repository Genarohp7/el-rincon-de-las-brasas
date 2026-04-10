import "./MenuPage.css";

function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-page__hero">
        <div className="menu-page__container">
          <p className="menu-page__eyebrow">Menú</p>
          <h1 className="menu-page__title">Nuestro menú</h1>
          <p className="menu-page__description">
            Esta es una versión inicial del menú para presentar el concepto del
            proyecto. Después integraremos el menú real del restaurante.
          </p>
        </div>
      </section>

      <section className="menu-page__section">
        <div className="menu-page__container">
          <h2 className="menu-page__section-title">Categorías demo</h2>

          <div className="menu-page__grid">
            <article className="menu-page__card">
              <h3 className="menu-page__card-title">Tacos</h3>
              <p className="menu-page__card-text">
                Taco al grill, taco especial de la casa, taco norteño.
              </p>
            </article>

            <article className="menu-page__card">
              <h3 className="menu-page__card-title">Burritos y pepitos</h3>
              <p className="menu-page__card-text">
                Burrito clásico, burrito especial, pepito al grill.
              </p>
            </article>

            <article className="menu-page__card">
              <h3 className="menu-page__card-title">
                Especialidades de la casa
              </h3>
              <p className="menu-page__card-text">
                Chicharrón Norteño, Cebollón y especialidad para compartir.
              </p>
            </article>

            <article className="menu-page__card">
              <h3 className="menu-page__card-title">Postres</h3>
              <p className="menu-page__card-text">
                Fresas con crema y opciones dulces para cerrar con buen sabor.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MenuPage;