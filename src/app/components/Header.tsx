'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-8 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-lg font-semibold text-gray-900">
                        Strassen und Brückenbau
                    </Link>
                    <nav className="flex gap-6">
                        <Link href="/" className="text-gray-600 hover:text-gray-900">
                            Projects
                        </Link>
                        <Link href="/sustainability" className="text-gray-600 hover:text-gray-900">
                            Sustainability
                        </Link>
                        <span className="text-gray-300 cursor-not-allowed" title="Coming Soon">
                            Careers
                        </span>
                    </nav>
                </div>
            </div>
        </header>
    );
}
