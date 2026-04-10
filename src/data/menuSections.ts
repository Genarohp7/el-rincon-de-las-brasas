type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

const menuSections: MenuSection[] = [
  {
    id: "tacos",
    eyebrow: "Categoría",
    title: "Tacos",
    description:
      "Opciones pensadas para abrir el apetito con sabor directo, buen carácter y ese toque a la parrilla que distingue a la casa.",
    items: ["Taco al grill", "Taco especial de la casa", "Taco norteño"],
  },
  {
    id: "burritos-pepitos",
    eyebrow: "Categoría",
    title: "Burritos y pepitos",
    description:
      "Preparaciones más completas, bien servidas y perfectas para quienes buscan algo abundante y con sazón de verdad.",
    items: [
      "Burrito clásico",
      "Burrito especial",
      "Pepito al grill",
      "Promoción 3x2",
    ],
  },
  {
    id: "especialidades",
    eyebrow: "Categoría",
    title: "Especialidades de la casa",
    description:
      "Sabores con identidad propia y platos que hacen que este rincón se sienta distinto desde la primera visita.",
    items: [
      "Chicharrón Norteño",
      "Cebollón",
      "Especialidad para compartir",
    ],
  },
  {
    id: "postres",
    eyebrow: "Categoría",
    title: "Postres",
    description:
      "El cierre ideal para equilibrar el antojo con algo dulce, fresco y fácil de recordar.",
    items: ["Fresas con crema", "Opciones dulces de temporada"],
  },
];

export default menuSections;