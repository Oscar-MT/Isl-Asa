// import heroImage from "@/assets/hero-church.jpg";
import heroimagen from "@/assets/potada.jpg"
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroimagen}
        alt="Comunidad de fe reunida en la iglesia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto fade-in-up">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
          <div>Bienvenido a nuestra comunidad </div>
          <div>Asamblea de Dios en el Perú.</div>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light max-w-2xl mx-auto">
          Un lugar donde puedes crecer, compartir y encontrar propósito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-blue-hover text-primary-foreground text-base px-8 py-6 rounded-full font-medium">
            <a href="#sedes">
              <Calendar className="mr-2 h-5 w-5" />
              Ver horarios
            </a>
          </Button>
          <Button asChild size="lg" className="bg-accent text-foreground hover:bg-accent/80 text-base px-8 py-6 rounded-full font-medium">
            <Link to="/en-vivo">
              <Play className="mr-2 h-5 w-5" />
              Ver transmisiones
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;