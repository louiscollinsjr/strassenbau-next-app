import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto px-4 py-20 min-h-[calc(100vh-theme(spacing.16)-theme(spacing.8))] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
      <h1 className="text-2xl font-medium mb-4">Welcome to Strassen und Brückenbau</h1>
      <p className="text-gray-600">Building the infrastructure of tomorrow.</p>
    </div>
  );
}