'use client';

import Link from 'next/link';

interface Partner {
    name: string;
    description: string;
    website: string;
}

interface PartnerGroup {
    title: string;
    description: string;
    partners: Partner[];
}

const partnerGroups: PartnerGroup[] = [
    {
        title: "Infrastructure and Development Partners",
        description: "Our infrastructure partners are at the forefront of delivering transformative projects that enhance connectivity and improve public services. Through strategic collaborations, we aim to address the pressing infrastructure needs of communities while promoting sustainable growth.",
        partners: [
            {
                name: "Putevi Srbije",
                description: "A vital player in developing Serbia's road network, ensuring efficient transport solutions.",
                website: "https://www.putevi-srbije.rs/"
            },
            {
                name: "Saobraćajni Institut CIP",
                description: "Specializing in infrastructure projects that bolster regional development.",
                website: "https://sicip.rs/"
            },
            {
                name: "Koridori Srbije",
                description: "Focused on improving transportation corridors to facilitate economic growth.",
                website: "https://koridorisrbije.rs/en/home-page"
            },
            {
                name: "ACTIAS LUNA",
                description: "Offers strategic advisory services to enhance development initiatives through expert guidance, capacity building, and global business expansion.",
                website: "https://actiasluna.eu/"
            },
            {
                name: "Global Worker",
                description: "Provides access to a diverse talent pool and streamlines EU recruitment, ensuring compliance.",
                website: "https://globalworker.ro/"
            },

        ]
    },
    {
        title: "Energy and Forestry Partners",
        description: "Our partnerships in the energy and forestry sectors are crucial for advancing sustainable practices and promoting renewable energy sources. Together, we work towards a greener future by leveraging innovative technologies and responsible resource management.",
        partners: [
            {
                name: "PPC Energy",
                description: "Committed to delivering clean energy solutions that power communities sustainably.",
                website: "https://www.ppcenergy.ro/"
            },
            {
                name: "Rosilva",
                description: "Dedicated to sustainable forestry practices that protect our natural resources while supporting local economies.",
                website: "https://www.rosilva.ro/"
            }
        ]
    },
    {
        title: "Local Government Partners",
        description: "We collaborate closely with local governments to ensure that our projects align with community needs and regulatory frameworks. These partnerships enhance our ability to deliver impactful solutions tailored to specific regional challenges.",
        partners: [
            {
                name: "Reșița City Hall",
                description: "Engaging with the local government to support community-driven initiatives.",
                website: "https://www.primariaresita.ro/"
            },
            {
                name: "Petroșani City Hall",
                description: "Partnering on projects that enhance urban development and public services.",
                website: "https://www.primariapetrosani.ro/"
            },
            {
                name: "Oravița City Hall",
                description: "Collaborating on initiatives aimed at improving local infrastructure and community welfare.",
                website: "https://www.primariaoravita.ro/"
            },
            {
                name: "Caransebeș City Hall",
                description: "Partners with us to support local development initiatives and enhance community services that meet residents’ needs and promote sustainable growth.",
                website: "https://www.primariaoravita.ro/"
            }
        ]
    }
];

export default function PartnersDetails() {
    return (
        <section className="mx-auto max-w-5xl px-4  md:py-8">
            <div className=' bg-gray-200/30 dark:bg-white/5 rounded-lg px-4 sm:px-10 py-16'>
            <div className="text-left mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Partners
                </h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl">
                    We are proud to collaborate with a diverse range of organizations that share our commitment to fostering sustainable development across various sectors. Explore our key partnerships below:
                </p>
            </div>

            <div className="space-y-16">
                {partnerGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="border-b border-gray-200 dark:border-gray-700 pb-16 last:border-0 ">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            {group.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-10 text-sm md:text-base">
                            {group.description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 pr-4">
                            {group.partners.map((partner, partnerIndex) => (
                                <Link 
                                    href={partner.website}
                                    key={partnerIndex}
                                    target="_blank"
                                    className="group"
                                >
                                    <div className="">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {partner.name}
                                            </h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-400 group-hover:text-blue-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            {partner.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            </div>
            
        </section>
    );
}
