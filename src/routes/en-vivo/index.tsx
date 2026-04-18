import { FaVideo, FaFacebook, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/adp.ilo.moquegua";
const FACEBOOK_VIDEOS_URL = "https://www.facebook.com/100048776793153/videos/970993592155100/";

const EnVivo = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <FaArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FaVideo className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transmisiones en Vivo
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Sigue nuestras transmisiones en vivo a través de Facebook. ¡Conéctate cada domingo!
          </p>
        </div>

        {/* Facebook Live Embed */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 mb-8">
          <div className="aspect-video">
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    FACEBOOK_VIDEOS_URL
  )}&show_text=false&width=734`}
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              title="Facebook Live - Oscar Mamani"
            />
          </div>
          <div className="p-6 text-center">
            <p className="text-muted-foreground mb-4">
              Cuando estemos en vivo, el video aparecerá aquí automáticamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="rounded-full bg-[hsl(220,46%,48%)] hover:bg-[hsl(220,46%,38%)] text-primary-foreground"
              >
                <a href={FACEBOOK_PAGE_URL} target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="mr-2 h-4 w-4" />
                  Seguir en Facebook
                </a>
              </Button>
              <Button
                asChild
                className="rounded-full bg-primary hover:bg-blue-hover text-primary-foreground"
              >
                <a href={FACEBOOK_VIDEOS_URL} target="_blank" rel="noopener noreferrer">
                  <FaVideo className="mr-2 h-4 w-4" />
                  Ver todos los videos
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-accent/50 rounded-2xl p-6 text-center">
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
            ¿Cuándo son los en vivos?
          </h3>
          <p className="text-muted-foreground text-sm">
            Transmitimos en vivo cada <strong>Domingo a las 10:00 AM</strong> y en eventos especiales.
            Activa las notificaciones en nuestra página de Facebook para no perderte ninguno.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnVivo;
