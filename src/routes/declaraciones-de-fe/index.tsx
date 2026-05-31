import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ChevronRight,
  Church,
  Flame,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faithStatements = [
  {
    title: "La Biblia",
    icon: BookOpen,
    summary:
      "Creemos que la Palabra de Dios es nuestra guia de fe, vida y servicio.",
    detail:
      "La Escritura nos revela el caracter de Dios, nos ensena a vivir con sabiduria y orienta cada decision de la iglesia.",
  },
  {
    title: "Dios eterno",
    icon: Sparkles,
    summary:
      "Creemos en un Dios vivo, santo, amoroso y presente en la historia humana.",
    detail:
      "Reconocemos a Dios como creador, sustentador y redentor, digno de adoracion, obediencia y confianza.",
  },
  {
    title: "Jesucristo",
    icon: ShieldCheck,
    summary:
      "Creemos que Jesucristo es Salvador, Senor y esperanza para toda persona.",
    detail:
      "Su vida, muerte y resurreccion anuncian perdon, restauracion y una nueva vida para quienes ponen su fe en El.",
  },
  {
    title: "Espiritu Santo",
    icon: Flame,
    summary:
      "Creemos que el Espiritu Santo fortalece, consuela y capacita a la iglesia.",
    detail:
      "Su obra forma nuestro caracter, aviva nuestra fe y nos impulsa a servir con amor y poder espiritual.",
  },
  {
    title: "La iglesia",
    icon: Church,
    summary:
      "Creemos que la iglesia es una familia llamada a adorar, discipular y servir.",
    detail:
      "Como comunidad de fe, caminamos juntos, cuidamos unos de otros y compartimos el evangelio con nuestro entorno.",
  },
  {
    title: "La mision",
    icon: HeartHandshake,
    summary:
      "Creemos que nuestra fe se expresa en amor practico y servicio a las personas.",
    detail:
      "Anhelamos que cada vida conozca a Cristo, crezca en la Palabra y descubra su proposito en Dios.",
  },
];

export default function DeclaracionesDeFePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStatement = faithStatements[activeIndex];

  return (
    <main className="min-h-screen bg-background pt-24">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-200 backdrop-blur">
              <BookOpen className="h-4 w-4" />
              Nuestra base doctrinal
            </p>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Declaraciones de fe
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Estas convicciones sostienen nuestra adoracion, nuestra comunidad
              y la manera en que servimos a Dios y a las personas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-white px-7 text-slate-950 hover:bg-amber-200"
              >
                <a href="#declaraciones">Leer declaraciones</a>
              </Button>
              <Button
                asChild
                className="rounded-full border border-white/25 bg-white/10 px-7 text-white hover:bg-white/20"
              >
                <Link to="/sedes">Visitar una sede</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="declaraciones" className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Lo que creemos
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Fe clara para una vida con proposito
              </h2>
            </div>
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              Explora cada declaracion para ver como se conecta con nuestra
              vida diaria como iglesia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {faithStatements.map((statement, index) => (
                <button
                  key={statement.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-4 rounded-lg border p-4 text-left transition-all ${
                    activeIndex === index
                      ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "border-border/70 bg-card hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                      activeIndex === index
                        ? "bg-white/15 text-white"
                        : "bg-secondary text-primary"
                    }`}
                  >
                    <statement.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-heading text-lg font-semibold">
                      {statement.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm leading-6 ${
                        activeIndex === index
                          ? "text-white/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {statement.summary}
                    </span>
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 ${
                      activeIndex === index ? "text-white" : "text-primary"
                    }`}
                  />
                </button>
              ))}
            </div>

            <article className="rounded-lg border border-border/70 bg-card p-6 shadow-sm md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-primary">
                <activeStatement.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-bold text-foreground">
                {activeStatement.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                {activeStatement.summary}
              </p>
              <div className="mt-6 rounded-lg bg-secondary/70 p-5">
                <p className="text-base leading-8 text-foreground">
                  {activeStatement.detail}
                </p>
              </div>
              <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {["Adoracion", "Comunidad", "Servicio"].map((item) => (
                  <div key={item} className="rounded-lg bg-background p-4">
                    <p className="text-sm font-semibold text-primary">{item}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Una fe que se vive cada semana.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl rounded-lg bg-slate-950 p-8 text-center text-white md:p-10">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Ven y conoce nuestra comunidad
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            La fe tambien se entiende mejor caminando con otros. Te esperamos
            en nuestras reuniones y actividades.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full bg-white text-slate-950 hover:bg-amber-200">
              <Link to="/sedes">Ver sedes</Link>
            </Button>
            <Button
              asChild
              className="rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20"
            >
              <Link to="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
