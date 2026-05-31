import testimonialImage from "@/assets/testimo.jpeg";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "María Fernanda",
    role: "Miembro de la iglesia",
    value: "Amor",
    quote:
      "Llegué buscando paz y encontré una familia que me acompañó a volver a confiar en Dios.",
  },
  {
    name: "Carlos Mendoza",
    role: "Servidor del ministerio",
    value: "Misión",
    quote:
      "Servir aquí me enseñó que la fe también se vive con acciones pequeñas, constantes y llenas de amor.",
  },
  {
    name: "Ana Lucía",
    role: "Joven de la comunidad",
    value: "Comunidad",
    quote:
      "En cada reunión encontré palabra, amistad y un espacio seguro para crecer espiritualmente.",
  },
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    const timer = window.setInterval(goToNext, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div
      id="testimonios"
      className="mt-14 grid items-stretch overflow-hidden rounded-lg border border-border/70 bg-card shadow-lg shadow-black/20 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="relative min-h-72 overflow-hidden bg-slate-900 lg:min-h-full">
        <img
          src={testimonialImage}
          alt="Persona compartiendo su testimonio en la comunidad"
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
          width={720}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
            Historias reales
          </p>
          <p className="mt-2 max-w-sm text-lg font-medium leading-7">
            Nuestros valores se ven mejor cuando se convierten en vidas
            transformadas.
          </p>
        </div>
      </div>

      <div className="p-6 text-left md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
            <Quote className="h-4 w-4" />
            Testimonio
          </span>
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            Valor: {activeTestimonial.value}
          </span>
        </div>

        <div className="mt-7 flex gap-1 text-amber-400" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <blockquote className="mt-5 min-h-32 text-xl font-medium leading-9 text-foreground md:text-2xl">
          “{activeTestimonial.quote}”
        </blockquote>

        <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              {activeTestimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {activeTestimonial.role}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Ver testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Ver siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 flex gap-2" aria-label="Seleccionar testimonio">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-border hover:bg-primary/50"
              }`}
              aria-label={`Ver testimonio de ${testimonial.name}`}
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
