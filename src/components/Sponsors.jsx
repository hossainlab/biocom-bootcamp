import { memo } from 'react';

const Sponsors = memo(() => {
  const communityPartners = [
    {
      id: 1,
      name: "Partner Organization 1",
      logo: "https://placehold.co/400x200/111/ef4444?text=Partner+1",
    },
    {
      id: 2,
      name: "Partner Organization 2",
      logo: "https://placehold.co/400x200/111/ef4444?text=Partner+2",
    },
    {
      id: 3,
      name: "Partner Organization 3",
      logo: "https://placehold.co/400x200/111/ef4444?text=Partner+3",
    },
    {
      id: 4,
      name: "Partner Organization 4",
      logo: "https://placehold.co/400x200/111/ef4444?text=Partner+4",
    }
  ];

  return (
    <section id="sponsors" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/5 border border-red-500/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-red-400 text-xs font-bold uppercase tracking-[0.2em]">Our Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Community <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Collaborating with leading organizations to foster innovation and accessibility in bioinformatics education nationwide.
          </p>
        </div>
        
        {/* Partners Grid - Glass-morphism Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24">
          {communityPartners.map((partner) => (
            <div 
              key={partner.id} 
              className="group relative aspect-[3/2] bg-gray-900/20 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex items-center justify-center transition-all duration-500 hover:border-red-500/40 hover:-translate-y-2 overflow-hidden shadow-2xl"
            >
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="relative z-10 w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100"
              />
              
              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* High-Impact CTA Section */}
        <div className="relative group">
          {/* Decorative Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-gray-900/40 backdrop-blur-2xl rounded-[2rem] p-10 md:p-16 border border-white/10 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[80px]"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
                Scale Your Impact with <br />
                <span className="text-red-500">DeepBio</span> Industry Network
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                Join our mission to democratize bioinformatics education. Become a <span className="text-white border-b-2 border-red-500/50">Community Partner</span> to empower the next generation of computational biologists.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://forms.gle/5Yy9MAxet2x6hEhT8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto px-10 py-5 bg-red-600 text-white font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 tracking-wider uppercase text-sm">
                    Join as Community Partner
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
});

export default Sponsors;
