'use client';

interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    details: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Rehabilitation and Modernization of “Floarea Soarelui” Kindergarten",
        location: "Reșița, Romania",
        description: "Complete modernization of facilities including new learning spaces and playground equipment.",
        details: "Project scope included renovation of 500m² indoor space, installation of energy-efficient lighting, and creation of an interactive learning environment. Completion time: 6 months.",
    },
    {
        id: 2,
        title: "Regenbogen Preschool Extension",
        location: "Berlin, Germany",
        description: "Extension of existing facility to accommodate growing community needs with sustainable design principles.",
        details: "Added 300m² of new space including two classrooms, a multipurpose room, and an outdoor garden area. Focus on natural lighting and eco-friendly materials.",
    },
    {
        id: 3,
        title: "Kleine Sterne Facility Update",
        location: "Hamburg, Germany",
        description: "Safety and accessibility improvements with modern educational facilities integration.",
        details: "Comprehensive safety upgrades, installation of smart learning technology, and creation of inclusive spaces for children of all abilities. Project duration: 4 months.",
    }
];

export default function KindergartenProjects() {
    return (
        <section className="max-w-5xl mx-auto px-8 py-16">
            <div className="mb-16">
                <p className="text-sm font-semibold tracking-wider text-blue-600 uppercase mb-3">Educational Infrastructure</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Kindergarten Rehabilitation Projects</h2>
                <p className="text-lg text-gray-600 max-w-3xl">Transforming early education spaces into modern, safe, and inspiring environments for the next generation of learners across Europe.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
                {/* Left Column */}
                <div className="grid gap-16">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="px-8 bg-white rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                        >
                            <div className="text-5xl font-bold text-gray-800 mb-4">
                                No.{project.id}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <p className="text-sm text-gray-500">
                                {project.location}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="grid gap-16">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="opacity-30 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                        >
                            <div className="mb-6 rounded-xl overflow-hidden bg-gray-100">
                                <div 
                                    className="w-full pb-[66.67%] bg-gray-200 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
                                    aria-label={`${project.title} project image`}
                                />
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg text-gray-700 leading-relaxed text-[0.95rem]">
                                {project.details}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
