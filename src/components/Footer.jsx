import { memo } from 'react';
import Logo from './Logo';

const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950/30 to-black text-white border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo isLight={false} className="scale-90" />
            </div>
            <p className="text-gray-300 mb-6">
              From Zero to Expert in a Year.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#schedule" className="hover:text-red-400 transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="hover:text-red-400 transition-colors">Speakers</a></li>
              <li><a href="#format" className="hover:text-red-400 transition-colors">Program Format</a></li>
              <li><a href="#partners" className="hover:text-red-400 transition-colors">Partners</a></li>
              <li><a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/company/deepbioltd/" className="flex items-center text-gray-300 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                DeepBio Limited
              </a>
              <a href="https://www.linkedin.com/company/chiral-bangladesh/" className="flex items-center text-gray-300 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                CHIRAL Bangladesh
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2026 DeepBio Limited | All rights reserved.
            </p>
            <a href="/privacy-policy" className="text-gray-400 hover:text-red-400 text-sm transition-colors mt-4 md:mt-0">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;