export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
};

export type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    id: "elige-tu-carne",
    eyebrow: "Base del menú",
    title: "Elige tu carne",
    items: [
      {
        name: "Carne sencilla",
        description:
          "Arrachera, barriga, asada, sirloin, new york, pollo, pastor, cecina natural, cecina enchilada, chistorra, chorizo argentino y costilla.",
      },
      {
        name: "Carne premium",
        description: "Rib-eye, camarón, picaña, cowboy y jabalí.",
      },
    ],
  },
  {
    id: "tacos",
    eyebrow: "Parrilla",
    title: "Tacos",
    note: "Elige tus tacos con tortilla de harina o maíz. Agrega queso por $12 más.",
    items: [
      { name: "Taco grill sencillo", price: "$40" },
      { name: "Taco grill premium", price: "$55" },
    ],
  },
  {
    id: "quesitacos",
    eyebrow: "Parrilla",
    title: "Quesitacos",
    note: "Vegetariano: champiñones con elote.",
    items: [
      { name: "Quesitaco sencillo", price: "$55" },
      { name: "Quesitaco premium", price: "$65" },
      { name: "Quesitaco vegetariano", price: "$55" },
    ],
  },
  {
    id: "gringas",
    eyebrow: "Parrilla",
    title: "Gringas",
    items: [
      { name: "Gringa sencilla", price: "$75" },
      { name: "Gringa premium", price: "$85" },
    ],
  },
  {
    id: "burritos",
    eyebrow: "Parrilla",
    title: "Burritos",
    note: "Vegetariano: champiñones, elote, pimiento morrón y queso.",
    items: [
      { name: "Burrito sencillo", price: "$139" },
      { name: "Burrito premium", price: "$159" },
      { name: "Burrito vegetariano", price: "$138" },
    ],
  },
  {
    id: "cebollon",
    eyebrow: "Especialidad",
    title: "Cebollón",
    note: "Vegetariano: champiñones, elote, pimiento morrón y queso.",
    items: [
      { name: "Cebollón sencillo", price: "$152" },
      { name: "Cebollón premium", price: "$168" },
      { name: "Cebollón vegetariano", price: "$148" },
    ],
  },
  {
    id: "alambre",
    eyebrow: "Especialidad",
    title: "Alambre",
    note: "Base: pimiento morrón, cebolla caramelizada, queso y carne a elegir. Vegetariano: champiñones, elote, pimiento morrón, cebolla caramelizada y queso.",
    items: [
      { name: "Alambre sencillo", price: "$152" },
      { name: "Alambre premium", price: "$163" },
      { name: "Alambre vegetariano", price: "$152" },
    ],
  },
  {
    id: "pepitos",
    eyebrow: "Especialidad",
    title: "Pepitos",
    note: "Delicioso baguete con la carne que más te gusta. Incluye papas gajo.",
    items: [
      { name: "Pepito de pastor", price: "$119" },
      { name: "Pepito de arrachera", price: "$129" },
      { name: "Pepito de rib-eye", price: "$145" },
      { name: "Pepito de picaña", price: "$160" },
      { name: "Choripán", price: "$119" },
    ],
  },
  {
    id: "costras",
    eyebrow: "Especialidad",
    title: "Costras",
    note: "Costra de queso rellena de carne de su elección, acompañada de tortillas de harina. Vegetariana: champiñones con elote.",
    items: [
      { name: "Costra sencilla", price: "$120" },
      { name: "Costra premium", price: "$140" },
      { name: "Costra vegetariana", price: "$130" },
    ],
  },
  {
    id: "molcajetes",
    eyebrow: "Para compartir",
    title: "Molcajetes",
    items: [
      {
        name: "Molcajete especial",
        price: "$269",
        description:
          "Arrachera, pollo, camarón, chorizo argentino, asada, nopales y cebolla.",
      },
      {
        name: "Molcajete mixto",
        price: "$239",
        description:
          "Arrachera, pollo, chorizo argentino, asada, nopales y cebolla.",
      },
      {
        name: "Molcajete de chicharrón norteño",
        description: "Acompañado de guacamole.",
      },
    ],
  },
  {
    id: "chicharron-norteno",
    eyebrow: "Especialidad",
    title: "Chicharrón norteño",
    items: [
      { name: "Taco", price: "$55" },
      { name: "Chicharrón 250 grs", price: "$165" },
      { name: "Chicharrón 500 grs", price: "$295" },
      { name: "Chicharrón 1 kilo", price: "$399" },
    ],
  },
  {
    id: "kilos",
    eyebrow: "Para llevar o compartir",
    title: "Kilos",
    note: "Incluyen tortillas, salsas, nopales y cebollas caramelizadas.",
    items: [
      { name: "Kilo de pastor o cecina enchilada", price: "$370" },
      { name: "½ kilo de arrachera", price: "$370" },
      { name: "Kilo de arrachera", price: "$575" },
      { name: "½ kilo de picaña", price: "$425" },
      { name: "Kilo de picaña", price: "$685" },
    ],
  },
  {
    id: "cortes",
    eyebrow: "Premium",
    title: "Cortes",
    note: "Corte de 350 grs, con nopales, cebolla caramelizada y papas gajo.",
    items: [
      { name: "Arrachera", price: "$270" },
      { name: "New York", price: "$285" },
      { name: "Picaña", price: "$298" },
      { name: "Bife de lomo", price: "$320" },
      { name: "Rib-eye", price: "$358" },
    ],
  },
  {
    id: "parrilladas",
    eyebrow: "Para compartir",
    title: "Parrilladas",
    note: "Incluyen cebollas, nopales, papas gajo, salsas y limones.",
    items: [
      {
        name: "2 personas (500 grs)",
        price: "$496",
        description:
          "125 grs de chorizo argentino, 125 grs de pollo, 125 grs de rib-eye y 125 grs de asada.",
      },
      {
        name: "4 personas (1200 grs)",
        price: "$795",
        description:
          "250 grs de rib-eye, 200 grs de New York, 250 grs de asada, 250 grs de pollo y 250 grs de chorizo argentino.",
      },
      {
        name: "8 personas (2500 grs)",
        price: "$1399",
        description:
          "400 grs de rib-eye, 400 grs de arrachera, 400 grs de pollo, 400 grs de chorizo argentino, 400 grs de pastor y 400 grs de chistorra.",
      },
    ],
  },
  {
    id: "extras-grill",
    eyebrow: "Complementos",
    title: "Extras de parrilla",
    items: [
      { name: "Tuétanos al grill (2 pzs)", price: "$235" },
      { name: "Chicharrón de queso", price: "$80" },
      { name: "Nopales al grill con cebollas caramelizadas", price: "$30" },
      { name: "Orden de aguacate", price: "$38" },
      { name: "Orden de guacamole", price: "$48" },
    ],
  },
  {
    id: "entradas",
    eyebrow: "Entrada",
    title: "Entradas",
    items: [
      { name: "Jugo de carne", price: "$85" },
      { name: "Sopa de tortilla", price: "$65" },
      { name: "Frijoles charros", price: "$55" },
    ],
  },
  {
    id: "queso-fundido",
    eyebrow: "Entrada",
    title: "Queso fundido",
    items: [
      { name: "Queso fundido", price: "$80" },
      { name: "Queso fundido con chistorra", price: "$105" },
      { name: "Queso fundido con arrachera", price: "$105" },
    ],
  },
  {
    id: "ramen",
    eyebrow: "Especialidad",
    title: "Ramen",
    note: "Sopa tradicional con tallarines y fondo shitake, acompañada de col, germen de soya, cebollín, elote y naruto.",
    items: [
      { name: "Ramen de pollo", price: "$125" },
      { name: "Ramen de arrachera", price: "$135" },
      { name: "Ramen de camarón", price: "$135" },
      { name: "Ramen de picaña", price: "$135" },
      {
        name: "Ramen mixta",
        price: "$145",
        description: "Pollo, camarón y arrachera.",
      },
    ],
  },
  {
    id: "hamburguesas",
    eyebrow: "Burger zone",
    title: "Hamburguesas",
    note: "Todas nuestras hamburguesas incluyen papas.",
    items: [
      {
        name: "Tradicional",
        price: "$99",
        description: "180 grs de carne y vegetales.",
      },
      {
        name: "Pollo Cruji",
        price: "$115",
        description: "180 grs de carne, aderezo chipotle, queso y vegetales.",
      },
      {
        name: "Hawaiana",
        price: "$130",
        description: "180 grs de carne, jamón, piña, tocino, queso y vegetales.",
      },
      {
        name: "Bacon BBQ Burguer",
        price: "$158",
        description:
          "180 grs de molida de rib-eye BBQ, queso, tocino y aros de cebolla.",
      },
      {
        name: "Especial",
        price: "$148",
        description:
          "180 grs de carne, chistorra, tocino, jamón, queso y vegetales.",
      },
      {
        name: "A la Burguer",
        price: "$185",
        description:
          "Doble carne, doble tocino, doble jamón, doble queso, extra papas y vegetales.",
      },
      {
        name: "3 Quesos",
        price: "$145",
        description:
          "180 grs de carne con queso Philadelphia, queso gouda, manchego y vegetales.",
      },
      {
        name: "Súper Burguer",
        price: "$162",
        description:
          "180 grs de carne, 100 grs de pastor, piña y vegetales.",
      },
      {
        name: "Campesina",
        price: "$148",
        description:
          "180 grs de carne, queso, champiñones y cebolla caramelizada.",
      },
      {
        name: "Arrachera Burguer",
        price: "$168",
        description:
          "195 grs de arrachera, queso, cebolla caramelizada, guacamole y vegetales.",
      },
      {
        name: "Camarón Burguer",
        price: "$168",
        description:
          "180 grs de camarones empanizados, queso Philadelphia y mayo-chipotle.",
      },
      {
        name: "Picaña Burger",
        price: "$168",
        description:
          "Corte de picaña de 180 grs, queso, cebolla caramelizada, guacamole y vegetales.",
      },
    ],
  },
  {
    id: "hot-dogs",
    eyebrow: "Hot dogs",
    title: "Hot-dogs",
    note: "Todos nuestros hot-dogs son de 25 cm e incluyen papas.",
    items: [
      {
        name: "Hot-dog especial",
        price: "$145",
        description:
          "Salchicha Frankfurt a la parrilla, arrachera, cebolla caramelizada y queso.",
      },
      {
        name: "Hot-dog super",
        price: "$140",
        description:
          "Salchicha Frankfurt a la parrilla, pastor, piña y queso.",
      },
      {
        name: "Hot-dog hawaiano",
        price: "$135",
        description:
          "Salchicha Frankfurt a la parrilla, jamón, piña y queso.",
      },
      {
        name: "Hot-dog bacon",
        price: "$125",
        description:
          "Salchicha Frankfurt a la parrilla, tocino y queso.",
      },
    ],
  },
  {
    id: "snacks",
    eyebrow: "Snacks",
    title: "Snacks",
    items: [
      { name: "Alitas 400 grs", price: "$120" },
      { name: "Alitas 800 grs", price: "$220" },
      { name: "Alitas 1 kilo", price: "$260" },
      { name: "Tender de pollo", price: "$120" },
      { name: "Boneless", price: "$130" },
      { name: "Dedos de queso", price: "$85" },
      { name: "Aros de cebolla", price: "$80" },
      { name: "Orden de papas (gajo, francesa o waffle)", price: "$76" },
      { name: "Nachos con arrachera", price: "$96" },
      { name: "Nachos con queso", price: "$85" },
    ],
  },
  {
    id: "bebidas",
    eyebrow: "Bebidas",
    title: "Drinks",
    items: [
      { name: "Agua de jamaica 1 lt", price: "$45" },
      { name: "Agua de horchata 1 lt", price: "$45" },
      { name: "Agua de limón con chía 1 lt", price: "$45" },
      { name: "Agua de limón con pepino 1 lt", price: "$45" },
      { name: "Agua de avena 1 lt", price: "$45" },
      { name: "Agua jamaica-fresa 1 lt", price: "$55" },
      { name: "Agua horchata-fresa 1 lt", price: "$55" },
      { name: "Limonadas 1 lt", price: "$65" },
      { name: "Naranjada 1 lt", price: "$65" },
    ],
  },
  {
    id: "refrescos",
    eyebrow: "Bebidas",
    title: "Refrescos 355 ml",
    items: [
      { name: "Agua mineral", price: "$35" },
      { name: "Agua natural 500 ml", price: "$25" },
      { name: "Coca-Cola sin azúcar", price: "$35" },
      { name: "Coca-Cola clásica", price: "$35" },
      { name: "Sangría", price: "$30" },
      { name: "Peñafiel de sabor", price: "$30" },
      { name: "Boing de sabor", price: "$30" },
    ],
  },
  {
    id: "extras-burger",
    eyebrow: "Extras",
    title: "Extras",
    items: [
      { name: "Queso", price: "$16" },
      { name: "Piña", price: "$13" },
      { name: "Tocino", price: "$13" },
      { name: "Queso / papas", price: "$16" },
      { name: "Ad. Ranch", price: "$18" },
      { name: "Papas extra", price: "$38" },
      { name: "Chistorra extra", price: "$16" },
      { name: "Carne extra", price: "$55" },
    ],
  },
];

export default menuSections;