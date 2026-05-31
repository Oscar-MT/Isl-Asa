import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, X } from "lucide-react";
import { events } from "@/routes/event/data";
import { useState } from "react";

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof events)[number]>(null);
  const carouselEvents = [...events, ...events];

  return (
    <section id="eventos" className="section-padding bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Eventos de esta semana
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No dejes para mañana lo que puedes vivir hoy. ¡Te esperamos con los brazos abiertos!
          </p>
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedEvent(null)}
            />

            <div className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="h-72 w-full object-cover md:h-80"
                />
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75"
                  aria-label="Cerrar evento"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-6">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-primary">
                  <CalendarDays className="h-4 w-4" />
                  {selectedEvent.date}
                </p>
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {selectedEvent.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  {selectedEvent.location && (
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {selectedEvent.location}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {selectedEvent.time}
                  </span>
                </div>
                <p className="mt-5 leading-7 text-muted-foreground">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent" />

          <div className="flex w-max gap-6 py-2 [animation:event-carousel_28s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {carouselEvents.map((event, index) => (
              <article
                key={`${event.title}-${index}`}
                className="group flex w-[82vw] max-w-sm shrink-0 flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-80"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={512}
                  />
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.date}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {event.location && (
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </p>
                    )}
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </p>
                  </div>

                  <Button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] text-sm text-white transition hover:shadow-md"
                  >
                    Más información
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
