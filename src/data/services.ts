import residentialPhoto from "../assets/galeria/trabajo-en-techo.jpeg";
import commercialPhoto from "../assets/galeria/cubierta-comercial.jpeg";
import maintenancePhoto from "../assets/galeria/revision-de-cubierta.jpeg";

export const services = [
  {
    slug: "instalacion-residencial",
    icon: "home",
    title: "Instalación residencial",
    description: "Sistemas solares a la medida del consumo y el espacio de tu hogar.",
    image: residentialPhoto,
    alt: "Técnicos de Sunlight trabajando sobre una cubierta",
    paragraphs: [
      "Para diseñar una instalación residencial, el primer paso es conocer cuánta electricidad consume la vivienda y en qué horarios. También importa el espacio disponible en el techo y si árboles o edificios cercanos proyectan sombra.",
      "Al solicitar una cotización, indica la ubicación de tu casa y comparte tu consumo mensual si lo tienes a mano. Con esos datos podemos conversar sobre un sistema que se ajuste a tu hogar.",
    ],
  },
  {
    slug: "instalacion-comercial",
    icon: "building",
    title: "Instalación comercial",
    description: "Soluciones solares adaptadas a las necesidades de tu negocio.",
    image: commercialPhoto,
    alt: "Vista aérea de una cubierta comercial",
    paragraphs: [
      "Una tienda que abre durante el día y una bodega con refrigeración continua tienen perfiles de consumo distintos. El diseño de una instalación comercial parte de los horarios de operación, la demanda eléctrica y la superficie disponible para los paneles.",
      "Para evaluar tu proyecto, cuéntanos a qué se dedica el negocio, qué equipos concentran el consumo y cuándo se puede acceder al inmueble. Esa información ayuda a planificar la instalación alrededor de tu operación.",
    ],
  },
  {
    slug: "mantenimiento-de-paneles",
    icon: "tools",
    title: "Mantenimiento de paneles",
    description: "Limpieza y revisión para cuidar el rendimiento de tu sistema.",
    image: maintenancePhoto,
    alt: "Equipo técnico revisando una cubierta",
    paragraphs: [
      "El polvo, las hojas y las sombras pueden afectar la producción del sistema. Una revisión permite evaluar el estado visible de los paneles y determinar si necesitan limpieza o una inspección más detallada.",
      "Si has observado una caída de producción, indica desde cuándo ocurre y si el inversor muestra algún aviso. El historial de generación y la fecha del último mantenimiento ayudan a orientar la revisión.",
    ],
  },
] as const;
