interface LineProps {
    className?: string;
}

export default function Line({ className = "" }: LineProps) {
    return (
        <div
            className={`mx-auto border-b-4 border-gray-200 dark:border-gray-700 mb-12 md:mb-4 ${className}`}
            style={{ maxWidth: "980px" }}
        />
    );
}
