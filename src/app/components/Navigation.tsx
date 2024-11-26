'use client';

export default function Navigation() {
  return (
    <nav className="mx-auto px-4 py-4 relative z-50" style={{ maxWidth: '980px' }}>
      <div className="flex justify-between items-center">
        <div className="font-medium text-lg md:text-2xl text-white">Strassen und Brückenbau</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
          <a href="/team" className="text-white hover:text-gray-300">Our Team</a>
          <a href="/sustainability" className="text-white hover:text-gray-300">Sustainability</a>
          <a href="/news" className="text-white hover:text-gray-300">News</a>
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
            className="w-6 h-6 text-white" 
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

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg rounded-b-lg">
          <div className="flex flex-col p-4 space-y-3">
            <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="/team" className="text-white hover:text-gray-300">Our Team</a>
            <a href="/sustainability" className="text-white hover:text-gray-300">Sustainability</a>
            <a href="/news" className="text-white hover:text-gray-300">News</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
