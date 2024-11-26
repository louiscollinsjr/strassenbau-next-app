interface CompanyClients {
    company: string;
    clients: string[];
}

const clientsList: CompanyClients[] = [
    {
        company: "Strassen und Brueckenbau Romania",
        clients: [
            "Resita Municipality",
            "Petrosani Municipality",
            "Oravita City",
            "RNP Romsilva",
            "E-Distributie Banat"
        ]
    },
    {
        company: "Strassen und Brueckenbau Serbia (Sala & Radulac doo)",
        clients: [
            "Arandjelovac Municipality",
            "Vrnjacka Banja Municipality",
            "Raca Municipality",
            "Boljevac Municipality",
            "Putevi Srbije",
            "Saobracajni Institut",
            "Koridori Srbije"
        ]
    }
];

export default function Clients() {
    return (
        <section className="mx-auto px-6 pt-24" style={{ maxWidth: '980px' }}>
            <h2 className="text-2xl font-semibold text-white mb-12">Our Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {clientsList.map((company, index) => (
                    <div key={index}>
                        <h3 className="text-white text-lg font-medium mb-6">{company.company}</h3>
                        <ul className="space-y-3">
                            {company.clients.map((client, clientIndex) => (
                                <li 
                                    key={clientIndex} 
                                    className="flex items-center text-sm text-white/70"
                                >
                                    <span className="text-white/40 mr-2">•</span>
                                    {client}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
