const ProgramFormat = () => {
  return (
    <section id="format" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bootcamp Format</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our intensive 3-track bootcamp designed to accelerate your career in bioinformatics and computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Track 1: Career Paths */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Career Bootcamp</h3>
              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Intensive Workshops
              </div>
              <p className="text-gray-300 mb-6">
                Fast-track your understanding of diverse career paths in industry, academia, and government
              </p>
            </div>
          </div>

          {/* Track 2: Education & Research */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Advanced Training</h3>
              <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Deep Dive Sessions
              </div>
              <p className="text-gray-300 mb-6">
                Master graduate programs, research opportunities, and funding strategies through immersive training
              </p>
            </div>
          </div>

          {/* Track 3: Skills & Tools */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Skills Accelerator</h3>
              <div className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Practical Bootcamp
              </div>
              <p className="text-gray-300 mb-6">
                Rapidly develop expertise with cutting-edge bioinformatics tools and technologies
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Take Away */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Bootcamp Outcomes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Accelerated Career Plan</h3>
              <p className="text-gray-300 mb-4">
                Customized career acceleration pathway with immediate action items and curated resources
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-1a3 3 0 01.879-2.121M21 8a4 4 0 11-8 0 4 4 0 018 0zm-9 8a6 6 0 00-6 6v2h12v-2a6 6 0 00-6-6zM13 8a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">Elite Network Access</h3>
              <p className="text-gray-300 mb-4">
                Exclusive connections with industry leaders, expert mentors, and high-achieving peers
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">Bootcamp Certification</h3>
              <p className="text-gray-300 mb-4">
                Industry-recognized certificate demonstrating intensive career development training
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700 text-center hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/30 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">Premium Toolkit</h3>
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