import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/routes/event/data";

const EventsSection = () => {
  return (
    <section id="eventos" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eventos de esta semana
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No dejes para mañana lo que puedes vivir hoy. ¡Te esperamos con los brazos abiertos!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group hover:-translate-y-1"
            >
              <div className="h-auto overflow-hidden relative">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={512}
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {e.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{e.description}</p>
                {e.location && (
                  <p className="text-muted-foreground text-sm mb-4">
                    <strong>Sede:</strong> {e.location}
                  </p>
                )}
                <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-secondary text-sm">
                  <Link to="/event">Más información</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
