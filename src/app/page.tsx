
import Welcome from "./components/Welcome";

import HeroPlus from "./components/HeroPlus";
import ThermalRehabProjects from "./components/ThermalRehabProjects";
import PartnersDetails from "./components/PartnersDetails";
import Line from "./components/Line";
import ButtonLink from "./components/ButtonLink";
import JoinUs from "./components/JoinUs";


export default function Home() {
  return (
    <main className="pt-0 md:pt-32">
      <HeroPlus />
      <Welcome />
      <Line />
      <ThermalRehabProjects />
      <div className="mx-auto max-w-5xl px-[22px]">
          <ButtonLink href="/portfolio" className="bg-black hover:bg-gray-800/60">
              See More of Our Projects
          </ButtonLink>
      </div>

      <Line />
      <PartnersDetails />
      <JoinUs />
    </main>
  );
}
