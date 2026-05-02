import { Heart, Target, Users, BookOpen } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: Heart, title: "Amor", description: "Vivimos el amor de Dios en cada acción y relación." },
  { icon: Target, title: "Misión", description: "Compartir el evangelio y transformar vidas con propósito." },
  { icon: Users, title: "Comunidad", description: "Somos una familia que se apoya y crece junta." },
  { icon: BookOpen, title: "Palabra", description: "Fundamentados en la enseñanza bíblica cada día." },
];

const AboutSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="nosotros" className="section-padding bg-slate-400/50 mt-20">
      <div ref={ref} className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <h2 className={`font-heading text-3xl md:text-4xl font-bold my-4 transition-all duration-700
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}>
          Quiénes Somos
        </h2>

        <p className={`text-muted-foreground text-lg max-w-2xl mx-auto mb-16 transition-all duration-700 delay-150
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}>
          Somos una iglesia comprometida con Dios y con las personas...
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`
                bg-card rounded-2xl p-8 shadow-sm border border-border/50
                transition-all duration-700
                hover:shadow-lg hover:-translate-y-2
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 120}ms` }} // stagger
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="font-heading text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;