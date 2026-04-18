import LocationsSection from "./location-Section/index";
import MinistriesSection from "./Ministries-Section/index";

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