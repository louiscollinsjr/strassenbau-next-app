'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    location: string;
    description: string;
    detailsTitle: string;
    details: string;
    image?: string;
}

const galleryImages = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
    '/images/gallery-5.jpg',
];

const projects: Project[] = [
    {
        id: 1,
        title: "Tudor Vladimirescu National Military College",
        location: "Craiova, Olt",
        description: "A state-of-the-art educational facility designed to provide specialized military training alongside comprehensive academic education for future officers.",
        detailsTitle: "Tudor Vladimirescu Military College Development Project",
        details: "This ambitious project represents a significant investment in military education infrastructure, creating a modern learning environment that meets both academic and military training requirements.",
        image: "/images/tvmc-image-1.jpg"
    },
];

export default function CollegeProjects() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev === galleryImages.length - 1 ? prev : prev + 1));
    };

    const previousImage = () => {
        setCurrentImage((prev) => (prev === 0 ? prev : prev - 1));
    };

    return (
        <section className="max-w-5xl mx-auto px-8 py-16">
            <div className="mb-24">
                <p className="text-sm font-semibold tracking-wider text-gray-900 dark:text-white uppercase mb-3">Educational Infrastructure</p>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Military College Development</h2>
                <p className="text-sm text-gray-900 dark:text-white  max-w-3xl">Strategic development of military educational facilities to support the next generation of military officers with modern infrastructure and training facilities.</p>
            </div>

            {projects.map((project) => (
                <div key={project.id} className="grid grid-cols-[1fr_1.2fr] gap-8 mb-16">
                    <div className="grid gap-8">
                        {/* Image Row */}
                        <div className="rounded-sm overflow-hidden bg-gray-200 dark:bg-white/5">
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
                                    className="w-full pb-[66.67%] bg-gray-200/30 dark:bg-white/10 "
                                    aria-label={`${project.title} project image`}
                                />
                            )}
                        </div>

                        {/* Title and Description Row */}
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight pt-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-900 dark:text-white/70 leading-relaxed mb-2">
                                {project.description}
                            </p>
                            <p className="text-gray-900 dark:text-white/70 leading-relaxed mb-2">
                            The project includes 22 investment spaces among which: Accommodation Pavilion, Sports Hall, Infirmary, Food Block, Multifunctional Pavilion for Education.
                            </p>
                            <p className="text-sm text-white/50">
                                {project.location}
                            </p>
                        </div>
                    </div>

                    {/* Details Column (spans both rows) */}
                    <div className="row-span-2 p-8 bg-gray-200/30 dark:bg-white/5 rounded-lg text-gray-900 dark:text-white  leading-relaxed text-sm">
                       <h1 className='font-bold pr-24 text-3xl text-gray-900 dark:text-white pb-10'>{project.detailsTitle}</h1> 
                        {project.details}
                        
                        <div className="mt-8 mb-8">
                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Project Overview</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h5>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>AREA:1,148.65 Sqm Built / 5,100.65 Sqm</li>
                                        <li>Project type: Feasibility Study & Design & Build</li>
                                        <li>Student accommodation and recreational facilities</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-900 dark:text-white mb-2">Development Scope:</h5>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Construction of main educational building</li>
                                        <li>Development of training grounds and facilities</li>
                                        <li>Integration of modern educational technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 mb-8">
                            <div className="relative">
                                <div className="relative w-full h-auto aspect-video bg-white/5 rounded-sm overflow-hidden">
                                    <Image
                                        src={galleryImages[currentImage]}
                                        alt={`Gallery image ${currentImage + 1}`}
                                        width={1920}
                                        height={1080}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Navigation Arrows */}
                                    <div className="absolute inset-0 flex items-center">
                                        {currentImage > 0 ? (
                                            <button
                                                onClick={previousImage}
                                                className="ml-4 bg-black/20 hover:bg-black/40 p-2 rounded-full shadow-lg transition-colors text-gray-900 dark:text-white"
                                                aria-label="Previous image"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                </svg>
                                            </button>
                                        ) : <div className="ml-4" />}
                                        {currentImage < galleryImages.length - 1 ? (
                                            <button
                                                onClick={nextImage}
                                                className="ml-auto mr-4 bg-black/20 hover:bg-black/40 p-2 rounded-full shadow-lg transition-colors text-gray-900 dark:text-white"
                                                aria-label="Next image"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </button>
                                        ) : <div className="mr-4" />}
                                    </div>
                                </div>

                                {/* Image Indicators */}
                                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                                    {galleryImages.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                index === currentImage ? 'bg-gray-900 dark:bg-white' : 'bg-gray-200/90 dark:bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
