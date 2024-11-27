

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
    "Project Management",
];

const specializationsProjectDesign = [
    "Roads",
    "Bridges and communication route structures",
    "Water management (water supply, sewerage, rainwater)",
    "Environmental facilities",
    "Electrical infrastructure",
    "Includes site supervision and technical assistance",
];

const specializationsTechicalStudies = [
    "Prefeasibility and feasibility studies",
    "Topographic and cadastral studies",
    "Geotechnical, hydrotechnical, and hydrological studies",
    "Studies for obtaining authorizations (civil protection/ISU)",
    "Environmental protection studies"
];


const specializationsConstructionManagement = [
    "Pre-qualiication documentation",
    "Preparation of tender, bidding, and speciication documents",
    "Pre-construction documentation",
    "Cost management",
    "Contract management",
    "Final reception",
    "Cost-beneit and risk analysis reports",
];

export default function CompanySpecializations() {
    return (
        <div className="max-w-5xl mx-auto px-[22px]">
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-20 pb-8">
                Engineering, Architecture, and Construction
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

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-20 pb-2">
                Product Design and Management
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {specializationsProjectDesign.map((specialization, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-800 dark:text-white">
                            <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2" />
                            {specialization}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-20 pb-2">
                Technical Studies
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {specializationsTechicalStudies.map((specialization, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-800 dark:text-white">
                            <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mr-2" />
                            {specialization}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white pt-20 pb-2">
                Construction Management
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {specializationsConstructionManagement.map((specialization, index) => (
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
