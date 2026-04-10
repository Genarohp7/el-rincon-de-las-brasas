const whatsappMessage = "Hola, quiero hacer un pedido";
const whatsappDigits = "525574796585";
const address =
  "Av. Adolfo Ruiz Cortines 114, Lomas de Atizapán, 52977, Cdad. López Mateos, Méx.";

const businessInfo = {
  name: "El Rincón de las Brasas",
  logoSrc: "/images/branding/logo-rincon-brasas.png",
  logoAlt: "Logo de El Rincón de las Brasas",
  phoneDisplay: "55 7479 6585",
  whatsappHref: `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
    whatsappMessage
  )}`,
  address,
  mapsHref:
    "https://www.google.com/maps/place/EL+RINC%C3%93N+DE+LAS+BRASAS/@19.5548548,-99.2616995,17z/data=!3m1!4b1!4m6!3m5!1s0x85d21d9b6318f269:0xda51d889fc8419fb!8m2!3d19.5548498!4d-99.2591246!16s%2Fg%2F11zj0_8910?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&z=17&output=embed`,
  instagramHref:
    "https://www.instagram.com/el_rincon_de_las_brasas?igsh=dW9wb2F5aGIzczI=",
  facebookHref: "https://www.facebook.com/share/1LGSw3UPtA/",
  schedule: [
    "Lunes a jueves de 14:00 a 21:30",
    "Viernes a domingo de 14:00 a 22:00",
  ],
  promoTitle: "Promoción del momento",
  promoText: "3x2 en burritos y pepitos",
};

export default businessInfo;