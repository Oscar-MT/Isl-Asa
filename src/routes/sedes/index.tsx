import LocationsSection from "./sections/locations";
import MinistriesSection from "./sections/ministries";

const Sedes = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <LocationsSection />
        <MinistriesSection />
      </div>
    </div>
  );
};

export default Sedes;
