import { MapPin, Clock } from "lucide-react";
import { locations, horariosDomingo } from "./components/locations";
import { Button } from "@/components/ui/button";

const LocationsSection = () => {

  const getDomingo = (name: string) => {
    return horariosDomingo.find((h) => h.name === name);
  };

  return (
    <section id="sedes" className="section-padding bg-slate-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nuestras Sedes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visítanos en cualquiera de nuestras ubicaciones. ¡Te esperamos!
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-12">
          {locations.map((loc) => {
            const domingo = getDomingo(loc.name);

            return (
              <div
                key={loc.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300"
              >
                
                {/* Title */}
                <div className="bg-primary p-4 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {loc.name}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2">
                  
                  {/* Imagen */}
                  <div className="h-56 md:h-full">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col justify-between gap-6">

                    {/* Dirección */}
                    <div className="flex gap-3">
                      <MapPin className="text-primary mt-1" />
                      <div>
                        <p className="text-lg">{loc.address}</p>
                        <a
                          href={loc.mapUrl}
                          target="_blank"
                          className="text-sm text-primary hover:underline"
                        >
                          Ver en Google Maps
                        </a>
                      </div>
                    </div>

                    {/* Horarios */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="text-primary" />
                        <span className="font-semibold text-lg">Horarios</span>
                      </div>

                      <div className="space-y-2 text-sm">
                        {loc.schedules.map((s) => (
                          <div key={s.day} className="flex justify-between">
                            <span className="text-muted-foreground">
                              <strong>{s.day}</strong> · {s.time}
                            </span>
                            <span>{s.service}</span>
                          </div>
                        ))}

                        {/* Domingo optimizado */}
                        {domingo && (
                          <div className="mt-3 border-t pt-3">
                            <p className="font-semibold text-muted-foreground">
                              Domingo
                            </p>
                            <div className="flex justify-between">
                              <span>{domingo.time}</span>
                              <span>{domingo.service}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{domingo.time2}</span>
                              <span>{domingo.service2}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Acción */}
                    <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient transition">
                      Más información
                    </Button>
                  </div>
                </div>

                {/* Mapa */}
                <div className="h-64">
                  <iframe
                    src={loc.mapEmbed}
                    className="w-full h-full border-0"
                    loading="lazy"
                    title={loc.name}
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;