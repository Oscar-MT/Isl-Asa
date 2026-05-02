import heroimagen from "@/assets/portada2.png"
import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className=" min-h-[90vh] flex items-center justify-center ">
      <img
        src={heroimagen}
        alt="Comunidad de fe reunida en la iglesia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8">
                        <div className="absolute inset-0 bg-black/40 rounded-[45%] left-[45%]  top-[50%] shadow-[0px_40px_90px_90px_rgba(40,10,10,0.5)] h-[20%] w-[15%] "></div>

  {/* Título */}
  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
    <span className="block 
      text-white">
      Bienvenido a nuestra comunidad
    </span>

    <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
      bg-[length:200%_200%] bg-clip-text text-transparent 
      animate-gradient">
      Asamblea de Dios en el Perú
    </span>
  </h1>

  {/* Subtexto opcional */}
  <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl">
    Un lugar para crecer en fe, compartir en comunidad y fortalecer tu vida espiritual.
  </p>

  {/* Botones */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    
    {/* Botón principal */}
    <Button
      asChild
      size="lg"
      className="
        relative overflow-hidden
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
        text-white text-base px-8 py-6 rounded-full font-semibold
        shadow-lg shadow-blue-500/30
        transition-all duration-300
        hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40
      "
    >
      <a href="#sedes" className="flex items-center">
        <Calendar className="mr-2 h-5 w-5" />
        Ver horarios
      </a>
    </Button>

    {/* Botón secundario */}
    <Button
      asChild
      size="lg"
      className="
        bg-white/10 backdrop-blur-md border border-white/20
        text-white text-base px-8 py-6 rounded-full font-medium
        transition-all duration-300
        hover:bg-white/20 hover:scale-105
      "
    >
      <Link to="/en-vivo" className="flex items-center">
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
