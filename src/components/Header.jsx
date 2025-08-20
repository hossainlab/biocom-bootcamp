import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gray-900 border-b border-gray-700 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <a href="#home" className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src="/biocom-logo.svg" alt="BioCom BootCamp Logo" className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white leading-none">BioCom BootCamp</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              Home
            </a>
            <a href="#schedule" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              Schedule
            </a>
            <a href="#speakers" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              Speakers
            </a>
            <a href="#format" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              Event Format
            </a>
            <a href="#partners" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              Partners
            </a>
            <a href="#faq" className="text-gray-300 hover:text-blue-400 font-medium text-sm transition-colors">
              FAQ
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 inline-flex items-center justify-center p-2 rounded-lg transition-colors"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gray-900 border-t border-gray-700">
              <a href="#home" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Home
              </a>
              <a href="#schedule" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Schedule
              </a>
              <a href="#speakers" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Speakers
              </a>
              <a href="#format" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Event Format
              </a>
              <a href="#partners" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                Partners
              </a>
              <a href="#faq" className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;