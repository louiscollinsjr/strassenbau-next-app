import Image from "next/image";

export default function Home() {
  const featuredProjects = [
    {
      title: "A1 Highway Extension",
      location: "Sibiu-Pitești, Romania",
      image: "/images/highway-project.jpg",
      description: "96km highway expansion through the Carpathians"
    },
    {
      title: "Danube Bridge Modernization",
      location: "Giurgiu, Romania",
      image: "/images/bridge-project.jpg",
      description: "Renovation of the historic Danube Bridge"
    },
    {
      title: "Cluj City Bypass",
      location: "Cluj-Napoca, Romania",
      image: "/images/bypass-project.jpg",
      description: "New 20km bypass road"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-construction.jpg"
            alt="Construction site panorama"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Infrastructure of the Future
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Building sustainable transportation routes and bridges that connect people and communities.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-semibold mb-2">Road Construction</h3>
              <p className="text-gray-600">Modern roads and highways built to the highest standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌉</div>
              <h3 className="text-xl font-semibold mb-2">Bridge Construction</h3>
              <p className="text-gray-600">Innovative bridge designs for all requirements</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
              <p className="text-gray-600">Complete infrastructure solutions for communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Next Project</h2>
          <p className="mb-8 text-gray-300">Contact us for a free consultation</p>
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
