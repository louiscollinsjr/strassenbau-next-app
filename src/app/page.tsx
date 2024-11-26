import KindergartenProjects from './components/KindergartenProjects';
import ThermalRehabProjects from './components/ThermalRehabProjects';

export default function Home() {
  return (
    <main>
      {/* <div className="mx-auto px-4 py-12 md:py-20 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.8))] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
        <h1 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Welcome to Strassen und Brückenbau</h1>
        <p className="text-gray-600">Building the infrastructure of tomorrow.</p>
      </div> */}
      <div className="mx-auto pt-24" style={{ maxWidth: '980px' }}></div>
      <ThermalRehabProjects />
      <div className="mx-auto border-b-4 border-gray-200" style={{ maxWidth: '980px' }}></div>
      <KindergartenProjects />
    </main>
  );
}