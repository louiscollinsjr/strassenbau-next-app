import KindergartenProjects from "./components/KindergartenProjects";
import ThermalRehabProjects from "./components/ThermalRehabProjects";
import CollegeProjects from "./components/CollegeProjects";
// import Image from 'next/image';
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <main>
      <div
        className="mx-auto px-4 py-8 md:py-20 min-h-[50vh] flex flex-col justify-center"
        style={{ maxWidth: "980px" }}
      >
        <div className="flex justify-left mb-1 pl-1">
          {/* <Image
            src="/images/logo_bridge.svg"
            alt="Bridge Logo"
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            priority
          /> */}
        </div>
        <h1 className="text-sm md:text-xl lg:text-2xl font-light mb-2 md:mb-4">
          Strassen und Brückenbau
        </h1>
        <p className="text-3xl md:text-5xl lg:text-8xl font-bold text-white">
          Building Connections, Strengthening Communities.
        </p>
      </div>

      <div
        className="mx-auto pt-12 md:pt-10"
        style={{ maxWidth: "980px" }}
      ></div>
      <Welcome />
      
<div className="mx-auto px-4 py-8" style={{ maxWidth: "980px" }}>
  <a
    href="/Company Profile STRASSEN UND BRÜCKENBAU SRL.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    Download Company Profile
  </a>
</div>

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
