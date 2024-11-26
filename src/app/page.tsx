import KindergartenProjects from "./components/KindergartenProjects";
import ThermalRehabProjects from "./components/ThermalRehabProjects";
import CollegeProjects from "./components/CollegeProjects";
// import Image from 'next/image';
import Welcome from "./components/Welcome";
import DownloadProfile from "./components/DownloadProfile";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
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
