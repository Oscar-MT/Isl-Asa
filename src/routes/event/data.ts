import eventImage1 from "@/assets/event1.jpeg";
import eventImage2 from "@/assets/event2.jpeg";
import eventImage3 from "@/assets/event3.jpeg";

export const events = [
  {
    date: "16 Abr",
    title: "Culto de oracion",
    description:
      "Un tiempo especial de adoracion donde nos reunimos para exaltar a Dios, rendir nuestros corazones y ser renovados en Su presencia.",
    image: eventImage1,
    location: "Iglesia de Miramar",
    time: "7:30 PM",
  },
  {
    date: "18 Abr",
    title: "Juventud Cristiana",
    description: "Fin de semana de conexion, aventura y crecimiento espiritual.",
    image: eventImage2,
    location: "Iglesia de Miramar",
    time: "6:00 PM",
  },
  {
    date: "17 Abr",
    title: "Mujeres de fe",
    description:
      "Mujeres firmes, valientes y llenas del Espiritu, que se levantan con fe para impactar sus familias, su iglesia y su comunidad.",
    image: eventImage3,
    location: "Iglesia de Miramar",
    time: "5:00 PM",
  },
] as const;
