import Image from "next/image";
import FrontSection from "./sections/FrontSection";
import SponsorsSection from "./sections/SponsorsSection";
import AboutSection from "./sections/AboutSection";
import OutreachSection from "./sections/OutreachSection";
import TeamSection from "./sections/TeamSection";

const Index = () => {
  return (
    <main className="font-display text-yellow bg-black">
      <FrontSection />
      <AboutSection />
      <OutreachSection />
      <TeamSection />
      <SponsorsSection />
    </main>
  );
};

export default Index;
