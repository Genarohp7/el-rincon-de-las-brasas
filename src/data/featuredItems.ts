type FeaturedItem = {
  id: string;
  eyebrow: string;
  name: string;
  description: string;
  badge: string;
};

const featuredItems: FeaturedItem[] = [
  {
    id: "chicharron-norteno",
    eyebrow: "Especialidad de la casa",
    name: "Chicharrón Norteño",
    description:
      "Un platillo con presencia y mucho carácter. Crujiente por fuera, jugoso por dentro y con ese sabor intenso que hace que cada bocado se sienta como una verdadera especialidad de la casa.",
    badge: "Sabor con carácter",
  },
  {
    id: "cebollon",
    eyebrow: "Único de la casa",
    name: "Cebollón",
    description:
      "Cebolla horneada al carbón, rellena con el corte de carne de tu elección y queso fundido. Una combinación con profundidad, toque ahumado y personalidad propia.",
    badge: "Diferente y memorable",
  },
  {
    id: "fresas-con-crema",
    eyebrow: "Final favorito",
    name: "Fresas con crema",
    description:
      "El cierre perfecto para equilibrar el antojo. Fresas con crema de textura suave, acompañadas con almendra quebrada y galleta para un contraste dulce, fresco y delicioso.",
    badge: "Dulce cierre",
  },
];

export default featuredItems;