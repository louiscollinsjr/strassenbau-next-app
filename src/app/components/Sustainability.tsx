'use client';



const sustainabilityPillars = [
    {
        title: "Environmental Impact",
        description: "Implementing eco-friendly construction practices and materials to minimize our environmental footprint.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        )
    },
    {
        title: "Energy Efficiency",
        description: "Designing and retrofitting buildings to optimize energy consumption and promote renewable energy solutions.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    },
    {
        title: "Resource Management",
        description: "Utilizing sustainable materials and implementing efficient waste management practices throughout our projects.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        )
    }
];

export default function Sustainability() {
    return (
        <section className="max-w-5xl mx-auto px-8 py-16">

            {/* Header */}
            <div className="mb-24 text-gray-900 dark:text-white">
                <p className="text-sm font-semibold tracking-wider  text-gray-900 dark:text-white  uppercase mb-3">Our Commitment</p>
                <h2 className="text-3xl font-bold mb-4">Sustainability</h2>
                <div className="max-w-3xl">
                    <p className="text-gray-900 dark:text-white mb-6 leading-relaxed">
                        Sustainability is a cornerstone of our business philosophy at Strassen und Bruekenbau. As the construction industry faces increasing environmental challenges, we recognize our responsibility to lead the way in sustainable development practices and minimize our ecological footprint.
                    </p>
                    <p className= "text-gray-900 dark:text-white leading-relaxed">
                        Through innovative design principles, sustainable construction methods, and environmentally conscious operational processes, we not only reduce our environmental impact but also create lasting value for our clients and communities. In today&apos;s evolving market, sustainability isn&apos;t just an option—it&apos;s an essential driver of long-term success and responsible business practice.
                    </p>
                </div>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {sustainabilityPillars.map((pillar, index) => (
                    <div key={index} className="bg-gray-200/30 dark:bg-white/5 p-6 rounded-sm">
                        {/* <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                            {pillar.icon}
                        </div> */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
                        <p className=" text-gray-900 dark:text-white text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                ))}
            </div>

            {/* Commitment Statement */}
            <div className="bg-gray-50/5 rounded-lg p-8 mb-24">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Sustainable Approach</h3>
                <div className="space-y-4 text-gray-900 dark:text-white leading-relaxed text-base" >
                    <p>
                        We integrate sustainable practices throughout our project lifecycle, from initial planning to final construction and ongoing operations. Our approach encompasses:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Energy-efficient building design and materials</li>
                        <li>Waste reduction and recycling programs</li>
                        <li>Water conservation measures</li>
                        <li>Use of renewable energy sources where possible</li>
                        <li>Support for local biodiversity</li>
                        <li>Regular environmental impact assessments</li>
                    </ul>
                </div>
            </div>

            {/* Future Vision */}
            <div className="text-center max-w-3xl mx-auto bg-green-50 rounded-sm p-400 max-w-5xl mx-auto px-8 py-16">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Looking to the Future</h3>
                <p className="text-lg text-gray-900 dark:text-white mb-8">
                    We&apos;re not just building structures; we&apos;re building a sustainable future. Our commitment doesn&apos;t stop at construction excellence.
                </p>
                {/* <p className= "text-gray-900 dark:text-white leading-relaxed">
                    As we continue to grow and evolve, our commitment to sustainability remains unwavering. We&apos;re constantly exploring new technologies and methodologies to enhance our sustainable practices and contribute to a more environmentally conscious construction industry.
                </p>
                <p className= "text-gray-900 dark:text-white mb-6">
                    We&apos;re proud to lead by example.
                </p> */}
            </div>
        </section>
    );
}
