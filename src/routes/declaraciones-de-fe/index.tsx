import { useState } from "react";
import testimonio1 from "@/assets/testimo.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role?: string;
  image: string;
  video: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María López",
    role: "Miembro de la iglesia",
    image: testimonio1,
    video: "https://www.youtube.com/embed/VIDEO_ID_1",
    description:
      "Mi vida cambió completamente después de encontrar este lugar. Ahora tengo propósito y paz.",
  },
  {
    id: 2,
    name: "Carlos Ramos",
    role: "Voluntario",
    image: testimonio1,
    video: "https://www.youtube.com/embed/VIDEO_ID_2",
    description:
      "Aprendí a servir y amar a los demás de una manera que nunca imaginé.",
  },
  {
    id: 3,
    name: "Juan Pérez",
    role: "Miembro de la iglesia",
    image: testimonio1,
    video: "https://www.youtube.com/embed/VIDEO_ID_3",
    description:
      "Aprendí a servir y amar a los demás de una manera que nunca imaginé.",
  },
  {
    id: 4,
    name: "Valeria",
    role: "Voluntario",
    image: testimonio1,
    video: "https://www.youtube.com/embed/VIDEO_ID_4",
    description:
      "Aprendí a servir y amar a los demás de una manera que nunca imaginé.",
  },
  {
    id: 5,
    name: "Maria Fernanda",
    role: "Voluntario",
    image: testimonio1,
    video: "https://www.youtube.com/embed/VIDEO_ID_5",
    description:
      "Aprendí a servir y amar a los demás de una manera que nunca imaginé.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <section className="py-20 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Testimonios</h2>
          <p className="text-gray-600">
            Historias reales de personas transformadas
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
              onClick={() => setActive(t)}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />

              <h3 className="text-xl font-semibold text-center">
                {t.name}
              </h3>

              {t.role && (
                <p className="text-sm text-gray-500 text-center mb-3">
                  {t.role}
                </p>
              )}

              <p className="text-gray-600 text-center text-sm line-clamp-3">
                {t.description}
              </p>

              <button className="mt-4 text-blue-600 text-sm block mx-auto">
                Ver testimonio
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 relative">
            
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Video */}
              <div className="w-full h-[250px] md:h-full">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={active.video}
                  title={active.name}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {active.name}
                </h3>
                <p className="text-gray-500 mb-4">{active.role}</p>
                <p className="text-gray-700">{active.description}</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}