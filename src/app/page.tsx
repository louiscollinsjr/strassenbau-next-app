import KindergartenProjects from "./components/KindergartenProjects";
import ThermalRehabProjects from "./components/ThermalRehabProjects";
import CollegeProjects from "./components/CollegeProjects";
// import Image from 'next/image';
import Welcome from "./components/Welcome";
// import Hero from "./components/Hero";
import HeroPlus from "./components/HeroPlus";

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
      <div
        className="mx-auto border-b-4 border-gray-200"
        style={{ maxWidth: "980px" }}
      ></div>
      <KindergartenProjects />
    </main>
  );
}
