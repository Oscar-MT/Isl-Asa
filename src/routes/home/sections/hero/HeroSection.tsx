import heroimagen from "@/assets/portada2.png"
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 pt-24">
      <img
        src={heroimagen}
        alt="Equipo de la iglesia Asamblea de Dios en el Perú reunido en el templo"
        className="absolute inset-0 h-full w-full object-cover object-[52%_center]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center sm:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-2xl shadow-black/20 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Una familia de fe en Moquegua - Ilo
          </div>

          <h1 className="font-heading text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bienvenido a
            <span className="mt-2 block text-amber-300">
              Asamblea de Dios en el Perú
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg md:text-xl">
            Un lugar para crecer en fe, compartir en comunidad y fortalecer tu
            vida espiritual junto a personas que caminan contigo.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-white px-7 text-base font-semibold text-slate-950 shadow-xl shadow-black/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-200"
            >
              <Link to="/sedes">
                <Calendar className="h-5 w-5" />
                Ver horarios
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-12 rounded-full border border-white/25 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Link to="/en-vivo">
                <Play className="h-5 w-5" />
                Ver transmisiones
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 text-left text-white/90 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-slate-950/35 px-4 py-3 backdrop-blur-md">
              <MapPin className="h-5 w-5 shrink-0 text-amber-300" />
              <span className="text-sm font-medium">Sedes en Moquegua e Ilo</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-slate-950/35 px-4 py-3 backdrop-blur-md">
              <Calendar className="h-5 w-5 shrink-0 text-amber-300" />
              <span className="text-sm font-medium">Cultos y reuniones semanales</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
