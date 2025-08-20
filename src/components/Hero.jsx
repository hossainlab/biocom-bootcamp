const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-6 tracking-wide">
            Leading Universities and Industry Partners present:
          </p>
          
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-4 leading-none">
              BioCom
            </h1>
            <p className="text-2xl md:text-4xl text-gray-700 font-light mb-8">
              Career Awareness Bootcamp
            </p>
          </div>

          {/* Info Cards - Three Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Location Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">Virtual & On-site</p>
              </div>
            </div>

            {/* Duration Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">One Day Event</p>
              </div>
            </div>

            {/* Focus Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Focus</h3>
                <p className="text-gray-600">Career Awareness</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <a 
              href="#register" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Register Now
            </a>
          </div>

          {/* Benefits Text */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Join us for a transformative day exploring <strong className="text-gray-900">career opportunities</strong> in bioinformatics and computational biology. 
              Discover research paths, higher education options, and industry insights from leading experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;