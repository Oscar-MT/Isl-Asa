import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import eventImage from "@/assets/668890685_957409156680038_4949318235099683147_n.jpg";

const links = [
  { label: "Sedes", href: "/sedes"},
  { label: "Predicaciones", href: "/#predicaciones" },
  { label: "En Vivo", href: "/en-vivo"},
];

const events = [
  { date: "12 Abr", title: "Noche de Alabanza", description: "Una noche especial de adoración y música.", image: eventImage },
  { date: "20 Abr", title: "Retiro de Jóvenes", description: "Fin de semana de conexión, aventura y crecimiento espiritual.", image: eventImage },
  { date: "5 May", title: "Día de la Familia", description: "Actividades, comida y diversión para toda la familia.", image: eventImage },
];

export default function AuthNav() {
    const [open, setOpen] = useState(false);

  return (
     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg  border-border/30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
  <img
    className="h-7 w-7 rounded-lg"
    src={events[0].image}
    alt={events[0].title}
  />
  Asamblea de Dios
</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.label ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-blue-500 bg-blue-500/10. px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card border-b border-border/30 px-4 pb-4">
          {links.map((l) =>
            
              <a
                key={l.href}
                href={l.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            
          )}
        </div>
      )}
    </nav>
  );
};
