type GalleryItem = {
  id: string;
  title: string;
  description: string;
  layout: "large" | "wide" | "standard" | "tall";
};

const galleryItems: GalleryItem[] = [
  {
    id: "grill-moment",
    title: "El fuego al centro",
    description:
      "Espacio pensado para mostrar parrilla, brasa, preparación y ese ambiente que abre el apetito desde la primera vista.",
    layout: "large",
  },
  {
    id: "signature-plating",
    title: "Especialidades de la casa",
    description:
      "Aquí después podremos destacar un emplatado o un producto estrella con mejor presencia visual.",
    layout: "standard",
  },
  {
    id: "sharing-table",
    title: "Ideal para compartir",
    description:
      "Perfecto para futuros visuales de combos, mesas compartidas o una escena con más contexto de consumo.",
    layout: "wide",
  },
  {
    id: "dessert-detail",
    title: "Un cierre dulce",
    description:
      "Espacio pensado para mostrar postres, frescura, toppings y detalles más cercanos.",
    layout: "standard",
  },
  {
    id: "brand-atmosphere",
    title: "Ambiente y marca",
    description:
      "Zona ideal para integrar branding, fachada, detalles del local o composición gráfica premium.",
    layout: "tall",
  },
];

export default galleryItems;