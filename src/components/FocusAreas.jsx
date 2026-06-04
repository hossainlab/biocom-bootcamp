import { memo } from 'react';

const FocusAreas = memo(() => {
  return (
    <section id="focus-areas" className="py-20 bg-black relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Dual-Track Guidance</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our guide covers the two most critical paths for bioinformaticians, providing a 360-degree view of your future opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Industry Card */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-red-500/50 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Industry Insights</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Explore the rapidly evolving landscape of bioinformatics in both National and International markets. Learn about role expectations, salary trends, and the core competencies required to thrive in biotech and pharma companies.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-semibold border border-red-500/20">Global Markets</span>
                <span className="px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-semibold border border-red-500/20">Biotech/Pharma</span>
                <span className="px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-xs font-semibold border border-red-500/20">Skill Gaps</span>
              </div>
            </div>
          </div>

          {/* Academia Card */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-amber-500/50 transition-all duration-500 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Academic Excellence</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Master the application process for MS and PhD programs globally. We discuss finding the right mentor, drafting compelling research proposals, and securing fully funded scholarships in top-tier research institutions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 text-xs font-semibold border border-amber-500/20">MS/PhD Guide</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 text-xs font-semibold border border-amber-500/20">Funded Research</span>
                <span className="px-3 py-1 rounded-full bg-amber-900/30 text-amber-400 text-xs font-semibold border border-amber-500/20">Proposal Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FocusAreas;
