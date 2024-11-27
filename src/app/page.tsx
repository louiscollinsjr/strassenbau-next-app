import CollegeProjects from "./components/CollegeProjects";
// import Image from 'next/image';
import Welcome from "./components/Welcome";
// import Hero from "./components/Hero";
import HeroPlus from "./components/HeroPlus";
import JoinUs from "./components/JoinUs";
import ThermalRehabProjects from "./components/ThermalRehabProjects";

export default function Home() {
  return (
    <main className="pt-32">
      <HeroPlus />
      {/* <Hero /> */}
      <Welcome />
      
      <ThermalRehabProjects />
      <div
        className="mx-auto border-b-4 border-gray-200"
        style={{ maxWidth: "980px" }}
      ></div>
      <CollegeProjects />
      <JoinUs />
    </main>
  );
}
