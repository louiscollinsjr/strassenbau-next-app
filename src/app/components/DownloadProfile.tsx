export default function DownloadProfile() {
    return (
        <div className="mx-auto px-4 py-8" style={{ maxWidth: "980px" }}>
            <a
                href="/Company Profile STRASSEN UND BRÜCKENBAU SRL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-200/30 dark:bg-white/10 hover:bg-gray-200/60 text-gray-900 dark:text-white rounded-lg transition-all duration-300"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                Download Company Profile
            </a>
        </div>
    );
}
