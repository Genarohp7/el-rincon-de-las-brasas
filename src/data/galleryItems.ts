type GalleryItem = {
  id: string;
  title: string;
  description: string;
  layout: "large" | "wide" | "standard" | "tall";
  imageSrc: string;
};

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const galleryItems: GalleryItem[] = [
  {
    id: "grill-moment",
    title: "El fuego al centro",
    description:
      "Espacio pensado para mostrar parrilla, brasa, preparación y ese ambiente que abre el apetito desde la primera vista.",
    layout: "large",
    imageSrc: withBase("/images/Fotosmain/hamburguesa.webp"),
  },
  {
    id: "signature-plating",
    title: "Especialidades de la casa",
    description:
      "Aquí después podremos destacar un emplatado o un producto estrella con mejor presencia visual.",
    layout: "standard",
    imageSrc: withBase("/images/Fotosmain/norteño.webp"),
  },
  {
    id: "sharing-table",
    title: "Ideal para compartir",
    description:
      "Perfecto para futuros visuales de combos, mesas compartidas o una escena con más contexto de consumo.",
    layout: "wide",
    imageSrc: withBase("/images/Fotosmain/parrilla2.webp"),
  },
  {
    id: "dessert-detail",
    title: "Un cierre dulce",
    description:
      "Espacio pensado para mostrar postres, frescura, toppings y detalles más cercanos.",
    layout: "standard",
    imageSrc: withBase("/images/Fotosmain/fresas.webp"),
  },
  {
    id: "brand-atmosphere",
    title: "Ambiente y marca",
    description:
      "Zona ideal para integrar branding, fachada, detalles del local o composición gráfica premium.",
    layout: "tall",
    imageSrc: withBase("/images/Fotosmain/carnesalchicha.webp"),
  },
];

export default galleryItems;