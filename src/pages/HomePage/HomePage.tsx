import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero">
        <div className="home-page__hero-overlay" />
        <div className="home-page__hero-content">
          <p className="home-page__eyebrow">El Rincón de las Brasas</p>
          <h1 className="home-page__title">
            Donde el fuego se convierte en sabor
          </h1>
          <p className="home-page__description">
            Un rincón hecho para disfrutar tacos, burritos y especialidades con
            carácter, sazón y antojo del bueno.
          </p>

          <div className="home-page__actions">
            <a
              className="home-page__button home-page__button--primary"
              href="https://wa.me/525574796585?text=Hola%2C%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp
            </a>

            <a
              className="home-page__button home-page__button--secondary"
              href="/menu"
            >
              Ver menú
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;