'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';

interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    details: string;
    image?: string;
    video?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Rehabilitation and Modernization of “Floarea Soarelui” Kindergarten",
        location: "Reșița, Romania",
        description: "Comprehensive modernization of facilities, including the development of accessible features for individuals with disabilities.",
        details: "The rehabilitation of the kindergarten will increase its capacity from 160 to 200 children, starting from September 15. These initiatives are essential for improving educational infrastructure and increasing accessibility for all children in the community.",
        image: "/images/K1-image01.png",
        video: "/videos/K1-video01.mp4"
    },
    {
        id: 2,
        title: "Regenbogen Preschool Extension",
        location: "Reșița, Romania",
        description: "This includes upgrading classrooms, play areas, and other essential facilities to create a more conducive learning environment for preschool children.",
        details: "The revitalization of Grădinița “Palatul Fermecat” reflects a broader commitment to enhancing early childhood education facilities within Reșița, ensuring that children have access to high-quality educational environments. As of September 2024, construction work is ongoing, with the local government actively overseeing the progress. The contract for continuing these works was signed in April 2023, indicating a commitment to completing the project efficiently",
        image: "/images/K1-image02.png"
    },
    {
        id: 3,
        title: "Rehabilitation and modernization of Kindergarten PN3",
        location: "Reșița, Romania",
        description: "The project aims to rehabilitate and modernize kindergartens and nurseries in Reșița, to enhance early childhood education conditions.",
        details: "The rehabilitation of Kindergarten No. 3 will enhance educational quality by creating a stimulating and supportive learning environment for children. This project reflects the commitment of local authorities to invest in early education and ensure optimal conditions for the development of children in Reșița.",
        image: "/images/K1-image03.png"
    }
];

export default function KindergartenProjects() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 1;
        }
    }, []);

    return (
        <section className="max-w-5xl mx-auto px-8 py-16">
            <div className="mb-24">
                <p className="text-sm font-semibold tracking-wider text-gray-900 dark:text-white  uppercase mb-3">Educational Infrastructure</p>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kindergarten Rehabilitation Projects</h2>
                <p className="text-sm text-gray-900 dark:text-white  max-w-3xl">This rehabilitation is part of a comprehensive program to modernize kindergartens and schools in Reșița, including educational units like the Dumbrava Minunată Kindergarten. These strategic investments are crucial for enhancing educational infrastructure and ensuring equitable access to quality learning environments for all children in the community.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
                {/* Left Column */}
                <div className="grid gap-16">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-transparent hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                        >
                            <div className="text-3xl font-bold text-white/90 mb-4">
                                No.{project.id}
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-gray-900 dark:text-white/70 leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <p className="text-sm text-white/50">
                                {project.location}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="grid gap-16">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className={`pb-16 ${index !== projects.length - 1 ? 'border-b border-white/10' : ''}`}
                        >
                            <div className="mb-6 rounded-sm overflow-hidden bg-white/5">
                                {project.video ? (
                                    <video 
                                        ref={videoRef}
                                        className="w-full h-auto"
                                        controls
                                        preload="metadata"
                                        controlsList="nodownload"
                                    >
                                        <source src={project.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} project image`}
                                        width={800}
                                        height={533}
                                        className="w-full h-auto object-cover"
                                    />
                                ) : (
                                    <div 
                                        className="w-full pb-[66.67%] bg-gray-200/30 dark:bg-white/10 "
                                        aria-label={`${project.title} project image`}
                                    />
                                )}
                            </div>
                            <div className="p-4 bg-gray-200/30 rounded-lg text-gray-900 dark:text-white  leading-relaxed text-sm">
                                {project.details}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
