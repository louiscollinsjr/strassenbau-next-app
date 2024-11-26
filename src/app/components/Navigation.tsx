'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navigation() {
  return (
    <nav className="mx-auto px-4 py-4 relative z-50 fixed w-full bg-white/90 dark:bg-[rgb(29,30,32)]/90 backdrop-blur-sm border-b border-gray-200/10 dark:border-white/10" style={{ maxWidth: '980px' }}>
      <div className="flex justify-between items-center">
        <Link href="/" className="font-medium text-lg md:text-2xl text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300">
          Strassen und Bruekenbau
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/company" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</a>
          <a href="/services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</a>
          <a href="/experience" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</a>
          <a href="/portfolio" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</a>
          <a href="/sustainability" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</a>
          <a href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-4">
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
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden absolute top-full left-0 right-0 bg-white dark:bg-[rgb(29,30,32)] shadow-lg rounded-b-lg border-t border-gray-200/10 dark:border-white/10">
          <div className="flex flex-col p-4 space-y-3">
            <a href="/company" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</a>
            <a href="/services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</a>
            <a href="/experience" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</a>
            <a href="/portfolio" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</a>
            <a href="/sustainability" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</a>
            <a href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
