import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import eventImage from "@/assets/668890685_957409156680038_4949318235099683147_n.jpg";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Sedes", to: "/sedes" },
  { label: "Declaraciones", to: "/declaraciones-de-fe" },
  { label: "En Vivo", to: "/en-vivo" },
];

export default function AuthNav() {
  const [open, setOpen] = useState(false);

  return ( 
    <nav className="w-full h-14 fixed z-50 border-border/30 px-4 md:px-10 bg-black/80 backdrop-blur">
      
      <div className="flex h-16 items-center justify-between w-full">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-white/80">
          <img
            className="h-7 w-7 rounded-lg"
            src={eventImage}
            alt="logo"
          />
          Asamblea de Dios
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2 text-white">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient px-3 py-1 rounded-full"
                  : "text-sm font-medium bg-black/30 px-3 py-1 rounded-full hover:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 bg-black/80 backdrop-blur-md rounded-xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg text-white"
                  : "text-white/80 px-4 py-2 rounded-lg hover:bg-white/10"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}