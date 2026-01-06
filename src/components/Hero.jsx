import { memo } from 'react';

const Hero = memo(() => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-red-950 to-black py-20 relative overflow-hidden">
      {/* Revolutionary background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-950/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Memorial Section with Photo */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/30 to-black/50 backdrop-blur-sm border-2 border-red-600/40 rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-amber-600 rounded-2xl blur-xl opacity-50"></div>
                    <img
                      src="/images/osman-hadi.jpg"
                      alt="Shahid Sharif Osman Hadi"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-4 border-red-600/60 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Memorial Text */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-16 bg-gradient-to-b from-red-600 to-amber-600"></div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Shahid Sharif Osman Hadi
                      </h2>
                      <p className="text-red-400 font-semibold text-lg">
                        Revolutionary Leader & Martyr
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In loving memory of a brave soul who gave his life for justice and freedom.
                    This bootcamp honors his revolutionary spirit and dedication to progress.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-600/40 px-4 py-2 rounded-lg">
                    <span className="text-2xl">🕊️</span>
                    <span className="text-amber-400 font-medium">Forever in Our Hearts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Bootcamp Info Section */}
          <div className="max-w-5xl mx-auto">
            {/* Organizers */}
            <div className="mb-8">
              <p className="text-red-400 font-semibold text-base md:text-lg tracking-wide">
                DeepBio Limited & CHIRAL Bangladesh Presents
              </p>
            </div>

            {/* Main Title */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight px-4">
                <span className="bg-gradient-to-r from-red-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
                  Bioinformatics BootCamp
                </span>
              </h1>
            </div>

            {/* Memorial Dedication */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-900/30 to-amber-900/30 backdrop-blur-sm border border-red-600/30 px-6 py-3 rounded-full">
                <span className="text-2xl">🕊️</span>
                <span className="text-amber-300 font-semibold text-sm md:text-base">
                  In Memory of Shahid Sharif Osman Hadi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;