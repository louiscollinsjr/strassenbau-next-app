import KindergartenProjects from './components/KindergartenProjects';
import ThermalRehabProjects from './components/ThermalRehabProjects';
import CollegeProjects from './components/CollegeProjects';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-4 py-8 md:py-20 min-h-[50vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
        <div className="flex justify-left mb-1 pl-1">
          <Image
            src="/images/logo_bridge.svg"
            alt="Bridge Logo"
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            priority
          />
        </div>
        <h1 className="text-sm md:text-xl lg:text-2xl font-light mb-2 md:mb-4">Strassen und Brückenbau</h1>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-600">Building Connections, Strengthening Communities.</p>
      </div>
      <div className="mx-auto pt-12 md:pt-24" style={{ maxWidth: '980px' }}></div>
      <ThermalRehabProjects />
      <div className="mx-auto border-b-4 border-gray-200" style={{ maxWidth: '980px' }}></div>
      <CollegeProjects />
      <div className="mx-auto border-b-4 border-gray-200" style={{ maxWidth: '980px' }}></div>
      <KindergartenProjects />
    </main>
  );
}