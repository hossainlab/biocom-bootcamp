import { memo } from 'react';

const Hero = memo(() => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hpc01.jpg"
          alt="Bioinformatics Hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px] -ml-48 -mb-48 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 text-sm font-bold tracking-wider uppercase">100% FREE Career Guidance Session</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <p className="text-amber-400 font-bold text-lg md:text-xl tracking-[0.2em] uppercase">
              DeepBio Limited & CHIRAL Bangladesh Presents
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
              Bioinformatics <br />
              <span className="bg-gradient-to-r from-red-500 via-amber-500 to-red-500 bg-clip-text text-transparent">
                Career Guide
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Navigate your future in computational biology. Join our monthly orientation session held at the end of every month to gain expert insights into global career paths, higher education, and industry trends—all for free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a 
                href="#register" 
                className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Join for FREE</span>
              </a>
              
              <a 
                href="#schedule" 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all hover:border-white/30"
              >
                View Schedule
              </a>
            </div>

            {/* Quick Stats/Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10 mt-16">
              <div>
                <div className="text-3xl font-bold text-white mb-1">9PM - 11PM</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100% FREE</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">No Cost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">Expert</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">Mentorship</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-white mb-1">Global</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest">Exposure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
