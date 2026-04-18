import { Button } from "@/components/ui/button";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "./data";

export default function EventPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Agenda semanal</p>
          <h1 className="mt-4 font-heading text-3xl md:text-5xl font-bold text-foreground">
            Proximos eventos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
            Aqui puedes ver las actividades mas cercanas de la iglesia y planificar tu visita con tiempo.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild className="rounded-full bg-primary hover:bg-blue-hover text-primary-foreground">
              <Link to="/sedes">Ver sedes</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={512}
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {event.date}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">{event.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{event.description}</p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-primary" />
                    {event.time}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border/50 bg-secondary/60 p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Te esperamos</h2>
          <p className="mt-3 text-muted-foreground">
            Si es tu primera vez, puedes escribirnos por redes o visitar una de nuestras sedes para recibirte.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-primary hover:bg-blue-hover text-primary-foreground">
              <Link to="/sedes">Como llegar</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
