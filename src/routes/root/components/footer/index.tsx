import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from "react-icons/fa";
import eventImage from "@/assets/668890685_957409156680038_4949318235099683147_n.jpg";


const Footer = () => {
  return (
    <footer className="bg-gray-900 pb-5 text-gray-50 mt-4 w-full min-h-32 items-center">
            <div className="p-4 md:p-5 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-6 md:gap-4 w-full">
                {/* titulo de footer */}
                <div className="flex flex-col !items-center md:items-start justify-center">
                    <img src={eventImage} alt="AlquiHome" className="h-10 w-10 rounded-xl"/> Asamblea de Dios
                </div>
                {/* customers */}
                <div className="flex flex-col items-center md:items-start justify-center">
                    <div className="w-full">
                        <h4 className="text-xs font-semibold text-center md:text-start">
                            Clientes
                        </h4>
                        <div className="flex flex-col gap-2 mt-2 items-center md:items-start">
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Buyer</span>
                            </a>
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Proveedor</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start justify-center">
                    <div className="w-full">
                        <h4 className="text-xs font-semibold text-center md:text-start">
                            Compañía
                        </h4>
                        <div className="flex flex-col gap-2 mt-2 items-center md:items-start">
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Inicia Sesión</span>
                            </a>
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Contáctanos</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Más información y redes sociales */}
                <div className="flex flex-col items-center md:items-start justify-center gap-6">
                    <div className="w-full">
                        <h4 className="text-xs font-semibold text-center md:text-start">
                            Más información
                        </h4>
                        <div className="flex flex-col gap-2 mt-2 items-center md:items-start">
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Términos"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Términos & Condiciones</span>
                            </a>
                            <a
                                href="https://www.instagram.com/ad_moquegua_ilo"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Privacidad"
                                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                <span>Política de Privacidad</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                        <h4 className="text-xs font-semibold text-center md:text-start">
                            Follow us
                        </h4>
                        <div className="flex gap-4 mt-2 justify-center md:justify-start">
                            <a href="" className="hover:text-blue-400 transition-colors"><FaFacebook size={19}></FaFacebook></a>
                            <a href="" className="hover:text-blue-400 transition-colors"><FaTwitter size={19}></FaTwitter></a>
                            <a href="" className="hover:text-pink-400 transition-colors"><FaInstagram size={19}></FaInstagram></a>
                            <a href="" className="hover:text-purple-400 transition-colors"><FaTiktok size={19}></FaTiktok></a>
                        </div>
                </div>
            </div>
            <div className="ml-[20%] mr-[20%]">
            <div className="place-items-center border-t border-teal-50/40 items pt-2">
            <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Asamblea de Dios en el Perú. Todos los derechos reservados.
            </p>
            </div>
            </div>
        </footer>
  );
};

export default Footer;