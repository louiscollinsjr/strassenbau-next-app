'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full bg-[rgb(29,30,32)]/90 backdrop-blur-sm z-50 border-b border-white/0">
            <div className="max-w-5xl mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-lg md:text-2xl font-semibold text-white">
                        Strassen und Bruekenbau
                    </Link>
                    <nav className="flex gap-6">
                        <Link href="/company" className="text-white/80 hover:text-white transition-colors">
                            Company
                        </Link>
                        <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                            Services
                        </Link>
                        <Link href="/experience" className="text-white/80 hover:text-white transition-colors">
                            Experience
                        </Link>
                        <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/sustainability" className="text-white/80 hover:text-white transition-colors">
                            Sustainability
                        </Link>
                        <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
