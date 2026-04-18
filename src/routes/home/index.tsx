// import ContactSection from "./contact-Section/ContactSection";
import AboutSection from "./about-Section/AboutSection";
import EventsSection from "./events-section/EventsSection";
import HeroSection from "./hero-Sections/HeroSection";
import DiscursoSection from "./discurso-Section/DiscursoSection";

export default function Home() {
 
  return (
    <>
        <HeroSection />
        <AboutSection />
        <DiscursoSection />
        <EventsSection />
        {/* <ContactSection /> */}
    </>
  );
}