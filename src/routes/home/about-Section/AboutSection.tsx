import { Heart, Target, Users, BookOpen } from "lucide-react";

const values = [
  { icon: Heart, title: "Amor", description: "Vivimos el amor de Dios en cada acción y relación." },
  { icon: Target, title: "Misión", description: "Compartir el evangelio y transformar vidas con propósito." },
  { icon: Users, title: "Comunidad", description: "Somos una familia que se apoya y crece junta." },
  { icon: BookOpen, title: "Palabra", description: "Fundamentados en la enseñanza bíblica cada día." },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Quiénes Somos
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
          Somos una iglesia comprometida con Dios y con las personas. Desde nuestros inicios,
          hemos buscado ser un refugio de paz y un lugar de crecimiento espiritual para todos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;