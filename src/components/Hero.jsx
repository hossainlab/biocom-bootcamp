const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 py-20 relative">
      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold text-lg mb-6 tracking-wide">
            DeepBio Limited & CHIRAL Bangladesh Presents
          </p>
          
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4 leading-none bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BioCom
            </h1>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full">
              <p className="text-white font-semibold text-lg">
                🚀 Bioinformatics and Computational Biology Bootcamp
              </p>
            </div>
          </div>

          {/* Info Cards - Three Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Format Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-700 hover:shadow-2xl hover:scale-105 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Format</h3>
                <p className="text-gray-300">Hybrid Learning Environment</p>
              </div>
            </div>

            {/* Intensity Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-700 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Intensity</h3>
                <p className="text-gray-300">Fast-Track Career Prep</p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-700 hover:shadow-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Mission</h3>
                <p className="text-gray-300">Launch Your BioTech Career</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <a 
              href="https://forms.gle/6eYCgng3MbXxF7TY7" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              🎯 Join the Bootcamp
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

          {/* Benefits Text */}
          <div className="max-w-4xl mx-auto">
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">💡 Expert-Led Sessions</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">🤝 Industry Networking</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">🚀 Career Acceleration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;