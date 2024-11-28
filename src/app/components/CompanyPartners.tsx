import Link from 'next/link';

interface Partner {
    name: string;
    website: string;
    category: string;
   
}

const partners: Partner[] = [
   
    {
        name: "Strassen und Bruekenbau Serbia",
        website: "https://strassenbau.rs",
        category: "Construction Company",
    },
    {
        name: "Caransebeș Municipality City Hall",
        website: "https://www.primaria-caransebes.ro/",
        category: "City Hall",
    },
    {
        name: "Acticas Luna, SRL",
        website: "https://www.actiasluna.eu/",
        category: "Construction Company",
    },
       
    {
        name: "Reșița City Hall",
        website: "https://wwwatem.gdn",
        category: "City Hall",
    },
    {
        name: "Petroșani City Hall",
        website: "https://wwwatem.gdn",
        category: "City Hall",
    },
    {
        name: "PPC Energie S.A.",
        website: "https://www.ppcenergy.ro/",
        category: "Construction Company",
    },
    {
        name: "Rosilva -  Regia Nationala a Padurilor",
        website: "https://www.rosilva.ro/",
        category: "Construction Company",
    },
    {
        name: "PE Roads of Serbia",
        website: "https://www.putevi-srbije.rs/",
        category: "Construction Company",
    },
    {
        name: "Saobraćajni Institut CIP",
        website: "https://sicip.rs/",
        category: "Construction Company",
    },
    {
        name: "Koridori Srbije - Corridors of Serbia",
        website: "https://koridorisrbije.rs/en/home-page",
        category: "Construction Company",
    },
    {
        name: "Global Worker Recruitment Agency",
        website: "https://globalworker.ro",
        category: "Construction Company",
    },
    {
        name: "Oravița City Hall",
        website: "https://www.primariaoravita.ro/",
        category: "City Hall",
    },
];

export default function CompanyPartners() {
    return (
        <section className="mx-auto pt-24" style={{ maxWidth: '980px' }}>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-0">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {partners.map((partner, index) => (
                    <Link 
                        href={partner.website}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <div className="rounded-lg p-0 transition-all duration-300">
                            <div className="relative h-10 mb-4">
                               
                            </div>
                            <div className="text-left">
                                <h3 className="text-gray-900 dark:text-white text-base font-medium mb-2 md:w-[80%] flex items-center gap-1">
                                    {partner.name}
                                </h3>
                                <p className="text-gray-900 dark:text-white/50 text-sm group-hover:text-gray-900/70 transition-colors duration-300">
                                    Visit Website →
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
