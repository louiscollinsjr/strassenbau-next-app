
import Link from 'next/link';

interface Partner {
    name: string;
    website: string;
   
}

const partners: Partner[] = [
   
    {
        name: "Strassen und Brückengbau Serbia (Sala & Raulac doo)",
        website: "https://strassenbau.rs",
    },
    {
        name: "Caransebeș Municipality City Hall",
        website: "https://www.primaria-caransebes.ro/",
    },
    {
        name: "Acticas Luna, SRL",
        website: "https://www.actiasluna.eu/",
    },
       
    {
        name: "ATEM, SRL",
        website: "https://wwwatem.gdn",
    }
];

export default function CompanyPartners() {
    return (
        <section className="mx-auto px-6 pt-24" style={{ maxWidth: '980px' }}>
            <h2 className="text-2xl font-semibold text-white mb-0">Our Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
                                <h3 className="text-white text-sm font-medium mb-2">{partner.name}</h3>
                                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
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
