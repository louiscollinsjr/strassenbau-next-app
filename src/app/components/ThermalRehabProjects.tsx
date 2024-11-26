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
        detailsTitle: "Apartment buildings Horia A6, A7,building no. 25, and Republicii Street, no. 27",
        details: "These initiatives are part of a broader municipal program aimed at modernizing housing infrastructure and increasing energy efficiency throughout the region.",
        image: "/images/thermal-rehab-1.png"
    },
];

export default function ThermalRehabProjects() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 1;
        }
    }, []);

    return (
        <section className="max-w-5xl mx-auto px-8 py-16">
            <div className="mb-24">
                <p className="text-sm font-semibold tracking-wider text-white/70 uppercase mb-3">Residential Infrastructure</p>
                <h2 className="text-3xl font-bold text-white mb-4">Thermal Rehabilitation Projects</h2>
                <p className="text-sm text-white/70 max-w-3xl">Strategic initiative for improving energy efficiency in residential buildings across Reșița, focusing on modernizing apartment blocks to enhance comfort and reduce energy consumption for residents.</p>
            </div>

            {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-[1fr_1.2fr] gap-8 mb-16">
                    <div className="grid gap-8">
                        {/* Image Row */}
                        <div className="rounded-sm overflow-hidden bg-white/5">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project image`}
                                    width={800}
                                    height={533}
                                    className="w-full h-auto object-cover"
                                />
                            ) : (
                                <div 
                                    className="w-full pb-[66.67%] bg-white/5"
                                    aria-label={`${project.title} project image`}
                                />
                            )}
                        </div>

                        {/* Title and Description Row */}
                        <div>
                            <h3 className="text-3xl font-semibold text-white mb-4 leading-tight pt-4">
                                {project.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed mb-2">
                                {project.description}
                            </p>
                            <p className="text-white/70 leading-relaxed mb-2">The thermal rehabilitation project aims to address these issues by enhancing the thermal properties of such buildings, thereby reducing energy consumption and improving indoor comfort for residents.</p>
                            <p className="text-sm text-white/50">
                                {project.location}
                            </p>
                        </div>
                    </div>

                    {/* Details Column (spans both rows) */}
                    <div className="row-span-2 p-8 bg-white/5 rounded-lg text-white/70 leading-relaxed text-sm">
                       <h1 className='font-bold pr-24 text-3xl text-white pb-10'>{project.detailsTitle}</h1> 
                        {project.details}
                        
                        <div className="mt-8 mb-8">
                            <h4 className="font-semibold text-lg text-white mb-4">Overview of the Rehabilitation Program</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-medium text-white mb-2">Objectives:</h5>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Improve energy efficiency of residential buildings.</li>
                                        <li>Reduce energy consumption by approximately 50%.</li>
                                        <li>Upgrade buildings from energy efficiency class G to classes B or A.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-white mb-2">Scope of Work:</h5>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Insulation of walls and roofs.</li>
                                        <li>Installation of double-glazed windows.</li>
                                        <li>Renovation of public facilities, including schools and hospitals.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 mb-8">
                            <video 
                                ref={videoRef}
                                className="w-full h-auto rounded-sm mb-2 pt-2"
                                controls
                                preload="metadata"
                                controlsList="nodownload"
                            >
                                <source src="/videos/thermal-rehab-1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <p className='text-white/70'>This program has significantly impacted residents by improving living conditions and reducing energy costs.</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
