'use client';

export default function Navigation() {
  return (
    <nav className="mx-auto px-4 py-4" style={{ maxWidth: '980px' }}>
      <div className="flex justify-between items-center">
        <div className="font-medium text-lg md:text-2xl ">Strassen und Brückenbau</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/projects" className="hover:text-gray-600">Projects</a>
          <a href="/team" className="hover:text-gray-600">Our Team</a>
          <a href="/sustainability" className="hover:text-gray-600">Sustainability</a>
          <a href="/news" className="hover:text-gray-600">News</a>
        </div>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu?.classList.toggle('hidden');
          }}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
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

      {/* Mobile Navigation Menu */}
      <div id="mobile-menu" className="hidden md:hidden pt-4 pb-2">
        <div className="flex flex-col space-y-3">
          <a href="/projects" className="hover:text-gray-600">Projects</a>
          <a href="/team" className="hover:text-gray-600">Our Team</a>
          <a href="/sustainability" className="hover:text-gray-600">Sustainability</a>
          <a href="/news" className="hover:text-gray-600">News</a>
        </div>
      </div>
    </nav>
  );
}
