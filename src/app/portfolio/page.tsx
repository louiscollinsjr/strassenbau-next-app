
import ThermalRehabProjects from '../components/ThermalRehabProjects';
import KindergartenProjects from '../components/KindergartenProjects';
import CollegeProjects from '../components/CollegeProjects';


export default function PortfolioPage() {
    const ongoingProjects = [
        {
            title: "Thermal Rehabilitation for Resita Municipality",
            description: "The thermal rehabilitation project aims to address these issues by enhancing the thermal properties of older buildings, thereby reducing energy consumption and improving indoor comfort for residents.",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Ongoing",
            country:"Romania",
            location:"Horia, Reșița",
            client:"Resita Municipality",
            year:"2024-2026"
        },
        {
            title: "Thermal Rehabilitation for Oravita City",
            description: "The thermal rehabilitation project aims to address these issues by enhancing the thermal properties of older buildings, thereby reducing energy consumption and improving indoor comfort for residents.",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Ongoing",
            country:"Romania",
            location:"Oravita City, Reșila",
            client:"Resita Municipality",
            year:"2024-2026"
        },
        {
            title: "Thermal Rehabilitation for Petrosani Municipality",
            description: "The thermal rehabilitation project aims to address these issues by enhancing the thermal properties of older buildings, thereby reducing energy consumption and improving indoor comfort for residents.",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Ongoing",
            country:"Romania",
            location:"Petrosani",
            client:"Petrosani Municipality",
            year:"2024-2026"
        },
        {
            title: "Design and Execution – Bridge for Obrenovac Municipality",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Ongoing",
            country:"Serbia",
            location:"Obrenovac",
            client:"Obrenovac Municipality",
            year:"2024-2025"
        }, {
            title: "Design – Culverts and Bridges for Putevi Srbije",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Ongoing",
            country:"Serbia",
            location:"Putevi Srbije",
            client:"Obrenovac Municipality",
            year:"2024-2025"
        }
    ];


    const futureProjects = [
        {
            title: "Germany",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Future",
            country:"Germany",
            location:"Karlsruhe | Hamburg |Stuttgart | Mannheim",
            client:"Resita Municipality",
            year:"2025-2026"
        },
        {
            title: "Switzerland",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Future",
            country:"Switzerland",
            location:"Geneva | St. Gallen",
            client:"Resita Municipality",
            year:"2025-2026"
        },
        {
            title: "Italy",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Future",
            country:"Italy",
            location:"Milan | Bari",
            client:"Resita Municipality",
            year:"2025-2026"
        },
        {
            title: "M. Viteazul Military School",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Completed",
            country:"Romania",
            location:"",
            client:"Resita Municipality",
            year:""
        },
        {
            title: "Schools and Kindergartens in Resita",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Completed",
            country:"Romania",
            location:"",
            client:"Resita Municipality",
            year:""
        },
        {
            title: "M. Viteazul Military School",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Completed",
            country:"Romania",
            location:"",
            client:"Resita Municipality",
            year:""
        },
        {
            title: "Bridges and Culverts in Serbia",
            description: "",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Completed",
            country:"Serbia",
            location:"",
            client:"Resita Municipality",
            year:""
        },
        {
            title: "Medium Voltage Lines and Networks (ENEL)",
            description: "Medium Voltage Lines and Networks 1-35kV for e-Distributie (ENEL)",
            image: "/images/bragadiru1.jpg",
            category: "Residential Project",
            status:"Completed",
            country:"Serbia",
            location:"",
            client:"Resita Municipality",
            year:""
        },
       
    ];

    return (
        <main className="pt-32">

            {/* Portfolio Overview Section */}
            <div className="mx-auto px-4 py-8 md:py-20 min-h-[30vh] flex flex-col justify-center" style={{ maxWidth: '980px' }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">Our Portfolio</h1>
                <div className="space-y-6 text-gray-900 dark:text-white ">
                    <p className="text-lg leading-relaxed">
                    <span className='text-white text-xl font-medium'>Strassen und Bruekenbau Romaina and Strassen und Bruekenbau Serbia (Sala & Raulac doo)</span>  have a complex portfolio of works, including individual and collective housing, tourist hostels, 
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

             {/* Projects Grid  List */}
             <div className="mx-auto px-4 py-16">
                <div className="mx-auto max-w-[980px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {ongoingProjects.map((project, index) => (
                            <div key={index} className="bg-white/5 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="relative h-32">
                                </div>
                                <div className="p-6">
                                   <div className="inline-block px-2 py-1 text-xs uppercase bg-gray-200/30dark:bg-white/10  text-gray-900 dark:text-white  rounded-md mb-3">{project.status}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-0">{project.title} </h3>
                                    <p className="text-gray-900 dark:text-white/70 text-xs mb-2">{project.year}  {project.location}  {project.country}</p>
                                    <p className="text-gray-900 dark:text-white/70 text-xs">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

             {/* Projects Grid  List */}
             <div className="mx-auto px-4 py-16">
                <div className="mx-auto max-w-[980px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {futureProjects.map((project, index) => (
                            <div key={index} className="bg-white/0 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                                <div className="relative">
                                </div>
                                <div className="p-2">
                                   <div className="inline-block px-2 py-1 text-xs uppercase bg-gray-200/30dark:bg-white/10  text-gray-900 dark:text-white  rounded-md mb-3">{project.status}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-0">{project.title} </h3>
                                    <p className="text-gray-900 dark:text-white/70 text-xs mb-2">{project.year}  {project.location}  {project.country}</p>
                                    <p className="text-gray-900 dark:text-white/70 text-xs">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
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
