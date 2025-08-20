const Partners = () => {
  const sponsors = [
    {
      name: "Stanford University",
      description: "Leading research university with world-class bioinformatics programs and cutting-edge computational biology research.",
      logo: "S",
      url: "#"
    },
    {
      name: "MIT",
      description: "Pioneer in computational biology and systems biology approaches with strong industry connections.",
      logo: "MIT", 
      url: "#"
    },
    {
      name: "Johns Hopkins",
      description: "Excellence in biomedical research and translational bioinformatics with top medical school partnership.",
      logo: "JH",
      url: "#"
    },
    {
      name: "UC San Diego", 
      description: "Innovative programs in marine genomics and microbiome research with Scripps Institution collaboration.",
      logo: "UCSD",
      url: "#"
    },
    {
      name: "Harvard University",
      description: "Cutting-edge research in evolutionary genomics and cancer biology with Dana-Farber partnership.",
      logo: "H",
      url: "#"
    },
    {
      name: "University of Washington",
      description: "Strong focus on protein structure prediction and drug discovery with Institute for Protein Design.",
      logo: "UW",
      url: "#"
    },
    {
      name: "Broad Institute",
      description: "Leading genomics research institute advancing understanding of human disease through computational approaches.",
      logo: "BI",
      url: "#"
    },
    {
      name: "Illumina",
      description: "Global leader in DNA sequencing and array-based technologies enabling breakthrough discoveries.",
      logo: "I",
      url: "#"
    },
    {
      name: "23andMe",
      description: "Pioneer in direct-to-consumer genetic testing and population genetics research applications.",
      logo: "23",
      url: "#"
    }
  ];

  const hosts = [
    {
      name: "BioCom Institute",
      description: "BioCom Institute is a leading organization promoting life science education and career development. We connect students with industry opportunities.",
      logo: "BCI",
      url: "#"
    },
    {
      name: "Bioinformatics Foundation",
      description: "Bioinformatics Foundation is making world-class computational biology education accessible globally. Founded to bridge the gap between academia and industry.",
      logo: "BF",
      url: "#"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partners and Sponsors</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're grateful to work with amazing institutions and companies that are driving innovation in bioinformatics and computational biology.
          </p>
        </div>

        {/* University Partners */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">University Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.slice(0, 6).map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{sponsor.logo}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{sponsor.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Industry Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Industry Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.slice(6).map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{sponsor.logo}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{sponsor.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Program Hosts */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">Program Hosts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hosts.map((host, index) => (
              <a
                key={index}
                href={host.url}
                className="group bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{host.logo}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {host.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{host.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Want to Become a Partner?</h3>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of forward-thinking institutions and companies helping shape the future of bioinformatics education.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;