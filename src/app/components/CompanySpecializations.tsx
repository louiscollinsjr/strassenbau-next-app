

const specializations = [
    "Highway Construction",
    "Urban Road Networks",
    "Asphalt Paving",
    "Road Rehabilitation",
    "Traffic Management Systems",
    "Bridge Design & Construction",
    "Structural Rehabilitation",
    "Seismic Retrofitting",
    "Bridge Inspections",
    "Maintenance Programs",
    "Underground Utilities",
    "Drainage Systems",
    "Environmental Protection",
    "Quality Control",
    "Project Management"
];

export default function CompanySpecializations() {
    return (
        <div className="max-w-5xl mx-auto px-[22px]">
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-20 pb-8">
                    Our Specializations
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4">
                    {specializations.map((specialization, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-800 dark:text-white">
                            <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2" />
                            {specialization}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
