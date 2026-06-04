const ProgramFormat = () => {
  return (
    <section id="format" className="py-20 bg-gradient-to-br from-gray-900 via-red-950/30 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Session Format</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our intensive 2-hour orientation designed to accelerate your career in bioinformatics and computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Track 1: Career Paths */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-900/50 hover:bg-red-900/20 hover:shadow-2xl hover:scale-105 hover:border-red-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">Industry Guide</h3>
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Global Insights
              </div>
              <p className="text-gray-300 mb-6">
                Fast-track your understanding of diverse career paths in industry, academia, and government
              </p>
            </div>
          </div>

          {/* Track 2: Education & Research */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-900/50 hover:bg-amber-900/20 hover:shadow-2xl hover:scale-105 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">Advanced Training</h3>
              <div className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Deep Dive Sessions
              </div>
              <p className="text-gray-300 mb-6">
                Explore specialized domains from genomic data science to structural bioinformatics
              </p>
            </div>
          </div>

          {/* Track 3: Skills & Tools */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-900/50 hover:bg-red-900/20 hover:shadow-2xl hover:scale-105 hover:border-red-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">Practical Orientation</h3>
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Career Toolkit
              </div>
              <p className="text-gray-300 mb-6">
                Rapidly develop expertise with cutting-edge bioinformatics tools and technologies
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Take Away */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Program Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-xl border border-red-900/30 p-8 rounded-2xl text-center hover:shadow-2xl hover:scale-105 hover:border-red-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">Orientation Completion</h3>
              <p className="text-gray-300 mb-4">
                Receive an official certificate recognizing your participation in this professional career development session.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-amber-900/30 p-8 rounded-2xl text-center hover:shadow-2xl hover:scale-105 hover:border-amber-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">Networking</h3>
              <p className="text-gray-300 mb-4">
                Connect with industry professionals and research scholars from around the globe
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-red-900/30 p-8 rounded-2xl text-center hover:shadow-2xl hover:scale-105 hover:border-red-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">Expert Insights</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive arsenal of professional tools, templates, and advanced learning resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFormat;
