import profile from "./business.json";
import logo from "../assets/marca/firma-horizontal.png";
import mark from "../assets/marca/simbolo-solar.png";

const phone = profile.phonePrimary.trim();

if (phone && !/^\+[1-9]\d{7,14}$/.test(phone)) {
  throw new Error("El teléfono debe contener un número en formato internacional, por ejemplo +503 seguido de ocho dígitos.");
}

export const business = {
  ...profile,
  phone,
  phoneHref: phone ? `tel:${phone}` : undefined,
  logo,
  mark,
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/", label: "Servicios" },
  { href: "/galeria/", label: "Galería" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];
