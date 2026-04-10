type SpecialtyItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
};

const specialties: SpecialtyItem[] = [
  {
    id: "tacos",
    eyebrow: "Tacos",
    title: "Sabor directo al antojo",
    description:
      "Opciones con carácter, bien servidas y con ese toque a la parrilla que hace que cada bocado se sienta como de la casa.",
    tag: "Favoritos del grill",
  },
  {
    id: "burritos",
    eyebrow: "Burritos",
    title: "Generosos y con mucho sazón",
    description:
      "Preparados para disfrutarse de verdad, con ingredientes que se sienten completos, abundantes y perfectos para un antojo serio.",
    tag: "Bien servidos",
  },
  {
    id: "specialties",
    eyebrow: "Especialidades",
    title: "Lo que distingue a este rincón",
    description:
      "Propuestas con personalidad propia, hechas para quienes buscan algo más que lo de siempre y quieren probar sabores con identidad.",
    tag: "De la casa",
  },
  {
    id: "combos",
    eyebrow: "Combos",
    title: "Opciones ideales para compartir",
    description:
      "Pensados para disfrutar en pareja, con amigos o en familia, combinando sabor, presencia y una experiencia más completa.",
    tag: "Para compartir",
  },
];

export default specialties;