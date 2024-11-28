import { ReactNode } from 'react';

interface ButtonLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    target?: '_blank' | '_self';
}

export default function ButtonLink({ 
    href, 
    children, 
    className = "", 
    icon,
    target = '_self'
}: ButtonLinkProps) {
    const baseClasses = "inline-flex items-center px-6 py-3 bg-black dark:bg-white/10 hover:bg-gray-200/60 text-white dark:text-white rounded-lg transition-all duration-300";
    
    return (
        <div className="mx-auto py-12">
            <a
                href={href}
                target={target}
                rel={target === '_blank' ? "noopener noreferrer" : undefined}
                className={`${baseClasses} ${className}`}
            >
                {icon && (
                    <span className="mr-2">
                        {icon}
                    </span>
                )}
                {children}
            </a>
        </div>
    );
}

// Example download icon for reuse
export const DownloadIcon = () => (
    <svg
        className="w-5 h-5"
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
);
