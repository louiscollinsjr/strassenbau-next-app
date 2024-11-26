import Image from 'next/image';

export default function PortfolioPage() {
    const projects = [
        {
            title: "BRAGADIRU DWELLING",
            description: "Single-family house, surface area 220 sq m, concrete infrastructure execution, load-bearing masonry superstructure and finishes",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project"
        },
        {
            title: "BRAGADIRU DWELLING",
            description: "Single-family house, surface area 220 sq m, concrete infrastructure execution, load-bearing masonry superstructure and finishes",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project"
        },
        {
            title: "BRAGADIRU DWELLING",
            description: "Single-family house, surface area 220 sq m, concrete infrastructure execution, load-bearing masonry superstructure and finishes",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project"
        },
        {
            title: "BRAGADIRU DWELLING",
            description: "Single-family house, surface area 220 sq m, concrete infrastructure execution, load-bearing masonry superstructure and finishes",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project"
        }
    ];

    return (
        <main className="pt-32">
            {/* Portfolio Overview Section */}
            <div className="mx-auto px-4 py-8 md:py-20 min-h-[30vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Our Portfolio</h1>
                <div className="space-y-6 text-white/70">
                    <p className="text-lg leading-relaxed">
                    <span className='text-white'>Strassen und Brückengbau</span>  has a complex portfolio of works, including individual and collective housing, tourist hostels, 
                        industrial halls, offices, clinics and hospitals, sports facilities and interior design in different locations 
                        in the country.
                    </p>
                    <p className="text-lg leading-relaxed">
                        The managerial staff is permanently connected with architects, engineers, designers, manufacturers and suppliers 
                        of construction materials in order to continuously improve themselves and offer the most professional and 
                        contemporary response to their clients requests.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="mx-auto px-4 py-16">
                <div className="mx-auto max-w-[980px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white/5 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="relative h-64">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-white/50 mb-2">{project.category}</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-white/70">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
