// import { ContactSection } from "./sections";
import {
  AboutSection,
  DiscursoSection,
  EventsSection,
  HeroSection,
} from "./sections";

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
