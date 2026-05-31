import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, Radio, X } from "lucide-react";
import eventImage from "@/assets/668890685_957409156680038_4949318235099683147_n.jpg";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Sedes", to: "/sedes" },
  { label: "Declaraciones", to: "/declaraciones-de-fe" },
];

export default function AuthNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 px-4 shadow-lg shadow-black/10 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3 text-white"
          aria-label="Ir al inicio"
        >
          <img
            className="h-10 w-10 shrink-0 rounded-lg border border-white/15 object-cover"
            src={eventImage}
            alt="Logo Asamblea de Dios"
          />
          <span className="min-w-0">
            <span className="block truncate font-heading text-base font-bold leading-tight sm:text-lg">
              Asamblea de Dios
            </span>
            <span className="hidden text-xs font-medium text-white/55 sm:block">
              Moquegua - Ilo
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-white md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm"
                  : "rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/en-vivo"
            className={({ isActive }) =>
              `inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-amber-300 text-slate-950"
                  : "bg-primary text-primary-foreground hover:bg-blue-hover"
              }`
            }
          >
            <Radio className="h-4 w-4" />
            En Vivo
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl pb-4 md:hidden">
          <div className="rounded-lg border border-white/10 bg-slate-950/95 p-2 shadow-2xl">
            {[...links, { label: "En Vivo", to: "/en-vivo" }].map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {l.label}
                {l.to === "/en-vivo" && <Radio className="h-4 w-4" />}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
