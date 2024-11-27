'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[rgb(29,30,32)]/90 backdrop-blur-sm">
      <div className="mx-auto px-4 py-4" style={{ maxWidth: '980px' }}>
        <div className="flex justify-between items-center">
          <Link href="/" className="font-medium text-lg md:text-2xl text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300">
            Strassen und Bruekenbau
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/company" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</Link>
            <Link href="/services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</Link>
            {/* <Link href="/experience" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</Link> */}
            <Link href="/portfolio" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</Link>
            <Link href="/sustainability" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</Link>
            <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Navigation Button */}
          {/* <div className=" md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu?.classList.toggle('hidden');
              }}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6 text-gray-900 dark:text-white transition-colors" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div> */}

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden fixed inset-0 top-[60px] bg-white dark:bg-[rgb(29,30,32)] h-screen">
            <div className="flex flex-col p-8 space-y-6 text-lg">
              <Link href="/company" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</Link>
              <Link href="/services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</Link>
              {/* <Link href="/experience" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</Link> */}
              <Link href="/portfolio" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</Link>
              <Link href="/sustainability" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</Link>
              <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
