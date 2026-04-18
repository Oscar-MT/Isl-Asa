import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const URL = "100051659992420%2Fvideos%2Fpcb.1514035653661753%2F2380653982444017&width=560&height=315&show_text=false&appId="

const DiscursoSection = () => {
  return (
    <section id="predicaciones" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Predicaciones
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Revive nuestras predicaciones y deja que la Palabra transforme tu vida.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50">
            <div className="aspect-video bg-foreground/5 flex items-center justify-center relative">
              <iframe
              src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${URL}`}
              width="100%"
              height="100%"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="absolute inset-0"
            ></iframe>
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors shadow-lg">
        
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                "La fe que mueve montañas"
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pastor Glaudson · Domingo 30 de marzo, 2026
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-full bg-primary hover:bg-indigo-300 text-primary-foreground">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  <a href="https://www.facebook.com/100051659992420/videos/pcb.1514035653661753/2380653982444017" target="_blank" rel="noopener noreferrer">
                    Ver en Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscursoSection;
