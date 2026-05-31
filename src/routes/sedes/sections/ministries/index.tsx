import ministryKids from "@/assets/ministry-kids.jpg";
import ministryYouth from "@/assets/ministry-youth.jpg";
import ministryCouples from "@/assets/ministry-couples.jpg";
import ministryMusic from "@/assets/ministry-music.jpg";
import ministryService from "@/assets/ministry-service.jpg";

const ministries = [
  { name: "Niños", description: "Enseñanza bíblica y actividades para los más pequeños.", image: ministryKids },
  { name: "Jóvenes", description: "Comunidad, crecimiento y propósito para la nueva generación.", image: ministryYouth },
  { name: "Matrimonios", description: "Fortaleciendo familias a través de la fe y el amor.", image: ministryCouples },
  { name: "Música", description: "Adoración que transforma corazones y eleva el espíritu.", image: ministryMusic },
  { name: "Servicio Social", description: "Llevando esperanza y ayuda a quienes más lo necesitan.", image: ministryService },
];

const MinistriesSection = () => {
  return (
    <section id="ministerios" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ministerios
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Descubre cómo puedes servir y crecer en las diferentes áreas de nuestra iglesia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div
              key={m.name}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={m.image}
                  alt={`Ministerio de ${m.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;