const ProgramFormat = () => {
  return (
    <section id="format" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Event Format</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understand the 3-track format designed to explore different aspects of bioinformatics careers and education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Track 1: Career Paths */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Career Exploration</h3>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Multiple Sessions
              </div>
              <p className="text-gray-700 mb-6">
                Discover diverse career paths in industry, academia, and government
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">What You'll Learn:</strong> Industry roles, salary expectations, required skills, and day-to-day responsibilities of bioinformatics professionals.
              </p>
            </div>
          </div>

          {/* Track 2: Education & Research */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Higher Education</h3>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Interactive Workshops
              </div>
              <p className="text-gray-700 mb-6">
                Learn about graduate programs, research opportunities, and funding options
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">What You'll Learn:</strong> Graduate program requirements, research opportunities, scholarship options, and application processes.
              </p>
            </div>
          </div>

          {/* Track 3: Skills & Tools */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential Skills</h3>
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Hands-on Demo
              </div>
              <p className="text-gray-700 mb-6">
                Get hands-on experience with key bioinformatics tools and technologies
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">What You'll Learn:</strong> Programming languages, databases, analysis tools, and skills roadmap for career preparation.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Take Away */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What You'll Take Away</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Roadmap</h3>
              <p className="text-gray-600 mb-4">
                Personalized career pathway with actionable next steps and resource list
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-1a3 3 0 01.879-2.121M21 8a4 4 0 11-8 0 4 4 0 018 0zm-9 8a6 6 0 00-6 6v2h12v-2a6 6 0 00-6-6zM13 8a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Network Connections</h3>
              <p className="text-gray-600 mb-4">
                Direct connections with professionals, mentors, and peers in the field
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificate of Participation</h3>
              <p className="text-gray-600 mb-4">
                Official certificate recognizing your commitment to career development
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resource Package</h3>
              <p className="text-gray-600 mb-4">
                Curated list of learning resources, tools, and further reading materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFormat;