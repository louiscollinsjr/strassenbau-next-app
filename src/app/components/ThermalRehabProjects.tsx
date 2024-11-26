'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    detailsTitle: string;
    details: string;
    image?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Thermal rehabilitation of apartment buildings",
        location: "Horia, Reșița",
        description: "Many buildings in Reșița, like those in other Romanian cities, were built before 1989 and suffer from inadequate insulation and energy inefficiency.",
        detailsTitle:"Apartment buildings Horia A6, A7,building no. 25, and Republicii Street, no. 27",
        details: "These initiatives are part of a broader municipal program aimed at modernizing housing infrastructure and increasing energy efficiency throughout the region.",
        image: "/images/thermal-rehab-1.png"
    },
];

export default function ThermalRehabProjects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
        };

        container.addEventListener('wheel', handleWheel);
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="py-12 bg-gray-900">
            <div className="mx-auto px-4" style={{ maxWidth: '980px' }}>
                <h2 className="text-3xl font-bold mb-8 text-white">Thermal Rehabilitation Projects</h2>
                <div 
                    ref={containerRef}
                    className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="flex-none w-[300px] bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            {project.image && (
                                <div className="relative h-48">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.location}</p>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-300">{project.detailsTitle}</h4>
                                    <p className="text-gray-400">{project.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
