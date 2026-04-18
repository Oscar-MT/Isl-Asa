import { MapPin, Clock } from "lucide-react";
import { locations, horariosDomingo } from "./components/locations";
import { Button } from "@/components/ui/button";

const LocationsSection = () => {
  return (
    <section id="sedes" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestras Sedes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visítanos en cualquiera de nuestras tres ubicaciones. ¡Te esperamos!
          </p>
        </div>
        <div className="space-y-12">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300"
            >
              <div className="bg-primary p-4">
                <h3 className="font-heading text-2xl font-semibold text-primary-foreground text-center">
                  {loc.name}
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="w-full h-56 md:h-64 overflow-hidden">
                <img
                    src={loc.image}
                    alt={`Foto de ${loc.name}`}
                    loading="lazy"
                    width={800}
                    height={512}
                    className="w-full h-full object-cover"
                />
                </div>
                {/* Info */}
                <div className="grid p-6 space-y-4 row-span-2 ">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                    <p className="text-xl text-foreground">{loc.address}</p>
                        <a
                            href={loc.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline"
                        >
                        Ver en Google Maps
                        </a>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <p className="text-sm text-foreground">{loc.phone}</p>
                  </div> */}
                  <div className="border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-primary" />
                        <span className="text-xl font-semibold text-foreground">Horarios</span>
                    </div>
                    <div className="space-y-2">
                      {loc.schedules.map((s) => (
                        <div key={s.day} className="flex justify-between text-base">
                          <span className="text-muted-foreground">
                            <strong>{s.day}</strong> · {s.time} 
                          </span>
                          <span className="text-foreground font-medium">{s.service}</span>
                        </div>
                      ))}
                      
                      {horariosDomingo.map((h) => {
                        if (h.name === loc.name) {
                          return (
                            <div className="grid grid-rows-1 grid-cols-2 gap-2 text-base">
                              <span className="text-muted-foreground">
                                <strong>Domingo</strong> : 
 
                                  <p className="pt-2">{h.time}</p> <p className="pt-2">{h.time2}</p> 
                            
                              </span>
                              <span className="text-foreground font-medium text-end">
                                <div className="pt-5">{h.service}</div>
                                <div className="pt-2">{h.service2}</div>
                              </span>
                            </div>
                        );
                        }
                      return null;
                      })}

                    </div>
                  </div>
                  <div className="">
                  <Button className="bg-indigo-500 w-xs text-xl">
                      Más Información
                    </Button>
                  </div>
                </div>
                {/* Map */}
                <div className="h-64 md:h-auto min-h-[250px]">
                  <iframe
                    src={loc.mapEmbed}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${loc.name}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;