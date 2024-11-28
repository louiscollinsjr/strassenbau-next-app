'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// import { ThemeToggle } from './theme-toggle';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Add custom styles for the progress bar
    const style = document.createElement('style');
    style.textContent = `
      #nprogress .bar {
        background: #2563eb !important;
        height: 3px !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    // Start the progress bar
    NProgress.start();
    
    // First navigate
    router.push(path);
    
    // Then close menu after a delay
    setTimeout(() => {
      setIsMenuOpen(false);
      // Complete the progress bar
      NProgress.done();
    }, 550);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[rgb(29,30,32)]/90 backdrop-blur-sm">
      <div className="mx-auto px-4 py-4" style={{ maxWidth: '980px' }}>
        <div className="flex justify-between items-center">
          <button onClick={() => handleNavigation('/')} className="font-medium text-lg md:text-2xl text-gray-900 dark:text-white transition-colors hover:text-gray-600 dark:hover:text-gray-300">
            Strassen und Bruekenbau
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/company" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</Link>
            <Link href="/services" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</Link>
            <Link href="/sustainability" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</Link>
            <Link href="/careers" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Careers</Link>
            <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              className="p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? (
                  <svg 
                    className="w-6 h-6 text-gray-900 dark:text-white transition-colors" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
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
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? '' : 'hidden'} fixed inset-0 top-0 -z-10 bg-white dark:bg-[rgb(29,30,32)]/90 h-screen pt-[60px]`}>
            <div className="flex flex-col p-8 space-y-6 text-lg">
              <button onClick={() => handleNavigation('/company')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Company</button>
              <button onClick={() => handleNavigation('/services')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Services</button>
              <button onClick={() => handleNavigation('/portfolio')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Portfolio</button>
              <button onClick={() => handleNavigation('/sustainability')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Sustainability</button>
              <button onClick={() => handleNavigation('/careers')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Careers</button>
              <button onClick={() => handleNavigation('/contact')} className="text-left text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
