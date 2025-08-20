import { useState, memo } from 'react';
import PartnershipForm from './PartnershipForm';

const Partners = memo(() => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const sponsorSlots = [
    {
      type: "university",
      placeholder: "Partner University",
      description: "Leading research institution specializing in bioinformatics and computational biology",
    },
    {
      type: "university", 
      placeholder: "Partner University",
      description: "Renowned academic institution with cutting-edge genomics programs",
    },
    {
      type: "university",
      placeholder: "Partner University", 
      description: "Top-tier university advancing computational biology research",
    },
    {
      type: "industry",
      placeholder: "Industry Partner",
      description: "Leading biotechnology company driving innovation in the field",
    },
    {
      type: "industry",
      placeholder: "Industry Partner", 
      description: "Global leader in genomics and bioinformatics solutions",
    },
    {
      type: "industry",
      placeholder: "Industry Partner",
      description: "Pioneer company in computational biology technologies",
    }
  ];

  const hosts = [
    {
      name: "DeepBio Limited",
      description: "Leading bioinformatics company specializing in AI-driven healthcare solutions and computational biology research.",
      logo: "/images/partners/deepbio.jpg",
      url: "https://deepbioltd.com/"
    },
    {
      name: "CHIRAL Bangladesh",
      description: "Advancing bioinformatics education and research in Bangladesh through innovative programs and industry collaboration.",
      logo: "/images/partners/chiral.jpg",
      url: "https://chiralbd.org/"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Partners & Sponsors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are building partnerships with leading institutions and companies. Partner announcements coming soon!
          </p>
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">University Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorSlots.filter(slot => slot.type === "university").map((slot, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 border-dashed hover:bg-gray-800 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-200 will-change-transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 will-change-transform border-2 border-dashed border-blue-400/50">
                    <span className="text-blue-400/70 font-bold text-sm">LOGO</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-400 mb-4 group-hover:text-blue-400 transition-colors">
                    {slot.placeholder}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{slot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Industry Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorSlots.filter(slot => slot.type === "industry").map((slot, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 border-dashed hover:bg-gray-800 hover:shadow-2xl hover:border-green-500/50 transition-all duration-200 will-change-transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500/30 to-blue-600/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 will-change-transform border-2 border-dashed border-green-400/50">
                    <span className="text-green-400/70 font-bold text-sm">LOGO</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-400 mb-4 group-hover:text-green-400 transition-colors">
                    {slot.placeholder}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{slot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Hosts */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Program Hosts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hosts.map((host, index) => (
              <a
                key={index}
                href={host.url}
                className="group bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-600 hover:from-gray-700 hover:to-gray-800 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-200 will-change-transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 will-change-transform p-2 shadow-lg">
                    <img 
                      src={host.logo} 
                      alt={`${host.name} Logo`}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {host.name}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{host.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="text-center bg-gray-900 border border-gray-700 rounded-2xl p-12 hover:bg-gray-800 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-200 will-change-transform hover:scale-105 cursor-pointer group">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Want to Become a Sponsor?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of forward-thinking institutions and companies shaping the future of bioinformatics education.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            Apply for Partnership
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path>
            </svg>
          </button>
        </div>

        {/* Partnership Form Modal */}
        <PartnershipForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </div>
    </section>
  );
});

export default Partners;