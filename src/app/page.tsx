import KindergartenProjects from './components/KindergartenProjects';
import ThermalRehabProjects from './components/ThermalRehabProjects';
import CollegeProjects from './components/CollegeProjects';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="mx-auto px-4 py-12 md:py-20 min-h-[50vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
        <div className="flex justify-left mb-2 pl-1">
          <Image
            src="/images/logo_bridge.svg"
            alt="Bridge Logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1 className="text-xl md:text-xs font-ligt mb-3 md:mb-4">Strassen und Brückenbau</h1>
        <p className="text-gray-600 md:text-7xl font-bold">Building Connections, Strengthening Communities.</p>
      </div>
      <div className="mx-auto pt-24" style={{ maxWidth: '980px' }}></div>
      <ThermalRehabProjects />
      <div className="mx-auto border-b-4 border-gray-200" style={{ maxWidth: '980px' }}></div>
      <CollegeProjects />
      <div className="mx-auto border-b-4 border-gray-200" style={{ maxWidth: '980px' }}></div>
      <KindergartenProjects />
    </main>
  );
}