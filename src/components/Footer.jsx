import { memo, useState, useEffect } from 'react';
import Logo from './Logo';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function GlobeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

const Footer = memo(() => {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950/30 to-black text-white border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div>
            <div className="mb-4">
              <Logo isLight={false} className="scale-90 origin-left" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Navigate your future with the DeepBio Bioinformatics Career Guide. Join our monthly orientation held at the end of every month.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/chiral-bangladesh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors" title="LinkedIn">
                <LinkedInIcon size={20} />
              </a>
              <a href="https://www.facebook.com/chiralbd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors" title="Facebook">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: DeepBio Academy */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">DeepBio Academy</h4>
            <div className="flex flex-col gap-4">
              <a href="https://deepbioacademy.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-3 text-sm">
                <GlobeIcon size={16} /> Official Website
              </a>
              <a href="https://www.linkedin.com/company/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-3 text-sm">
                <LinkedInIcon size={16} /> LinkedIn Professional
              </a>
              <a href="https://github.com/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-3 text-sm">
                <GithubIcon size={16} /> GitHub Research
              </a>
              <a href="https://www.facebook.com/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-3 text-sm">
                <FacebookIcon size={16} /> Facebook Community
              </a>
            </div>
          </div>

          {/* Column 3: DeepBio Limited */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">DeepBio Limited</h4>
            <div className="flex flex-col gap-4">
              <a href="https://deepbioltd.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-3 text-sm font-medium">
                <GlobeIcon size={16} /> Corporate Website
              </a>
              <a href="https://www.linkedin.com/company/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-3 text-sm">
                <LinkedInIcon size={16} /> LinkedIn Corporate
              </a>
              <a href="https://github.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-3 text-sm">
                <GithubIcon size={16} /> GitHub Organization
              </a>
              <a href="https://www.facebook.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-3 text-sm">
                <FacebookIcon size={16} /> Facebook Official
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-500 text-sm font-medium">
            © {year} DeepBio Limited · All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-500">
            <a href="#" className="hover:text-red-400 transition-colors text-sm">Home</a>
            <a href="#focus-areas" className="hover:text-red-400 transition-colors text-sm">Focus Areas</a>
            <a href="#ambassadors" className="hover:text-red-400 transition-colors text-sm">Ambassadors</a>
            <a href="#schedule" className="hover:text-red-400 transition-colors text-sm">Schedule</a>
            <a href="#" className="hover:text-red-400 transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
