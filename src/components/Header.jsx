import { useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-gray-900 via-red-950/50 to-gray-900 border-b border-red-900/50 z-50 shadow-lg backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <a href="#home" className="hover:opacity-80 transition-opacity cursor-pointer">
            <Logo isLight={false} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              Home
            </a>
            <a href="#schedule" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              Schedule
            </a>
            <a href="#speakers" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              Speakers
            </a>
            <a href="#format" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              Event Format
            </a>
            <a href="#partners" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              Partners
            </a>
            <a href="#faq" className="text-gray-300 hover:text-red-400 font-medium text-sm transition-colors">
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-red-400 inline-flex items-center justify-center p-2 rounded-lg transition-colors"
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
            <div className="px-2 pt-2 pb-4 space-y-2 bg-gradient-to-br from-gray-900 to-red-950/30 border-t border-red-900/50">
              <a href="#home" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
                Home
              </a>
              <a href="#schedule" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
                Schedule
              </a>
              <a href="#speakers" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
                Speakers
              </a>
              <a href="#format" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
                Event Format
              </a>
              <a href="#partners" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
                Partners
              </a>
              <a href="#faq" className="text-gray-300 hover:text-red-400 block px-4 py-3 rounded-lg text-base font-medium hover:bg-red-900/20 transition-colors">
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