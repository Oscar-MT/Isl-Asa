import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const Style = {
    ButtonStyle: "rounded-full text-primary-foreground px-6 py-6 text-base",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Tienes preguntas? Nos encantaría saber de ti.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl bg-card border-border/50 py-6 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-xl bg-card border-border/50 py-6 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Textarea
              placeholder="Tu mensaje"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl bg-card border-border/50 min-h-[140px] text-foreground placeholder:text-muted-foreground"
              required
            />
            <div className="flex place-content-center gap-6 ">
            <Button type="submit" size="lg" className={`${Style.ButtonStyle} bg-primary hover:bg-blue-hover`}>
              Enviar mensaje
            </Button>
            <Button type="submit" size="lg" className={`${Style.ButtonStyle} bg-green-500 hover:bg-green-600`}>
              Ir a WhatsApp
            </Button>
            </div>
          </form>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Dirección</h4>
                <p className="text-muted-foreground text-sm">Miramar, Tupac Amaru, Ilo 18601</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Teléfono</h4>
                <p className="text-muted-foreground text-sm">(+51) 999 999 999</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">Correo</h4>
                <p className="text-muted-foreground text-sm">contacto@iglesia.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h4>
                <p className="text-muted-foreground text-sm">(+51) 999 999 999</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-border/50 h-56">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.569791720899!2d-71.33647078947718!3d-17.63288287083691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91445b00434916a3%3A0x4c5b82ee2a4e90ed!2sMiramar!5e1!3m2!1ses-419!2spe!4v1775694360574!5m2!1ses-419!2spe" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la iglesia" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;