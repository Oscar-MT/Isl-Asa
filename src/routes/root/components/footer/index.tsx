import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import eventImage from "@/assets/668890685_957409156680038_4949318235099683147_n.jpg";


const Style = {
  red_social: "flex items-center gap-2 text-sm hover:text-primary-foreground transition-colors",
  informacion: "text-sm hover:text-primary-foreground transition-colors",
  h4: "text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-1"
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ==================== GRID PRINCIPAL (Desktop como al principio) ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Columna 1: Logo */}
          <div className="flex items-center justify-center gap-2 pt-4 md:pt-10">
            <img className="h-7 w-7 rounded-lg"
              src={eventImage}
              alt={"Asamblea de Dios en el Perú"}
            />
            <span className="font-heading font-bold text-primary-foreground text-lg">Asamblea de Díos</span>
          </div>

          {/* Columna 2: Copyright - Solo visible en Desktop y centrado */}
          <div className="hidden md:flex flex-col items-center gap-1 pt-10">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} Asamblea de Dios en el Perú.
            </p>
          </div>

          {/* Columna 3: Información + Redes Sociales */}
          <div className="grid grid-cols-2 gap-8  md:pt-10">
            {/* Información */}
            <div>
              <h4 className={Style.h4}>Información</h4>
              <div className="flex flex-col gap-2 mt-2">
                <a href="#nosotros" className={Style.informacion}>Nosotros</a>
                <a href="#horarios" className={Style.informacion}>Horarios</a>
                <a href="#contacto" className={Style.informacion}>Contáctanos</a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className={Style.h4}>Redes Sociales</h4>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="https://www.instagram.com/ad_moquegua_ilo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={Style.red_social}
                >
                  <FaInstagram size={16} />
                  <span>ad_moquegua_ilo</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1CufN2Sag4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={Style.red_social}
                >
                  <FaFacebook size={16} />
                  <span>Adp Moquegua Ilo</span>
                </a>
                <a
                  href="https://www.tiktok.com/@adp.ilo.moquegua"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className={Style.red_social}
                >
                  <FaTiktok size={16} />
                  <span>Adp Ilo Moquegua</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== Copyright para MÓVIL (solo se ve en móvil) ==================== */}
        <div className="md:hidden mt-12 pt-6 border-t border-primary-foreground/10 text-center text-sm">
          © {new Date().getFullYear()} Asamblea de Dios en el Perú.
        </div>

      </div>
    </footer>
  );
};

export default Footer;