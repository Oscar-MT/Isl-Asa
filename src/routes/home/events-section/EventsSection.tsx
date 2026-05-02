import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { events } from "@/routes/event/data";
import { useState } from "react";

const EventsSection = () => {

 const [activeIndex, setActiveIndex] = useState<number | null>(null);
 const [selectedEvent, setSelectedEvent] = useState<null | typeof events[0]>(null);

  return (
    <section id="eventos" className="section-padding bg-slate-200">
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
          {selectedEvent && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* Fondo oscuro */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setSelectedEvent(null)}
    />

    {/* Card */}
    <div className="relative bg-white w-[95%] md:w-[700px] max-h-[800px] rounded-2xl overflow-hidden shadow-xl z-10 flex flex-col">
      
      {/* Imagen */}
      <div className="relative">
        <img
          src={selectedEvent.image}
          alt={selectedEvent.title}
          className="w-full h-[380px] object-cover"
        />
        <button
          onClick={() => setSelectedEvent(null)}
          className="absolute top-3 right-3 bg-black/50 text-white rounded-full px-3 py-1 text-sm"
        >
          ✕
        </button>
      </div>

      {/* Contenido scroll */}
      <div className="p-6 overflow-y-auto">
        <h3 className="text-2xl font-bold mb-2">
          {selectedEvent.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          {selectedEvent.date}
        </p>

        {selectedEvent.location && (
          <p className="mb-4">
            <strong>Sede:</strong> {selectedEvent.location}
          </p>
        )}

        <p className="text-sm text-muted-foreground mb-4">
          {selectedEvent.description}
        </p>

        {/* Ejemplo contenido largo */}
        <div className="space-y-3">
          <p>Lorem ipsum dolor sit amet...</p>
          <p>Más detalles del evento...</p>
          <p>Información adicional, horarios, etc...</p>
        </div>
      </div>
    </div>
  </div>
)}
          {events.map((e, i) => {
            const isOpen = activeIndex === i
            return (
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
                {/* <Button asChild variant="outline" className="rounded-full border-border text-foreground hover:bg-secondary text-sm"> */}
                   
                  <div key={i} className="...">
                  {/* contenido */}

                  <Button
                    onClick={() => setSelectedEvent(e as typeof events[0])}
                    className="text-white
                    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient transition
                    
                    rounded-full border-border text-sm"
                  >
                    {isOpen ? "Menos" : "Más información"}
                  </Button>
                </div>
                {/* </Button> */}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;