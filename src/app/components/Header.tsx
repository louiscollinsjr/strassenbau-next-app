'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
    return (
        <header className="fixed w-full bg-white/90 dark:bg-[rgb(29,30,32)]/90 backdrop-blur-sm z-50 border-b border-gray-200/10 dark:border-white/10">
            <div className="max-w-5xl mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white">
                        Strassen und Bruekenbau
                    </Link>
                    <div className="flex items-center gap-4">
                        <nav className="flex gap-6">
                            <Link href="/company" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Company
                            </Link>
                            <Link href="/services" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Services
                            </Link>
                            <Link href="/experience" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Experience
                            </Link>
                            <Link href="/portfolio" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/sustainability" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Sustainability
                            </Link>
                            <Link href="/contact" className="text-gray-900 dark:text-white/80 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
