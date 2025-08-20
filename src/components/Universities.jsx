const Universities = () => {
  const universities = [
    {
      name: "Stanford University",
      location: "Stanford, CA",
      description: "Leading research in computational genomics and personalized medicine",
      highlights: ["NIH-funded research labs", "Silicon Valley connections", "Advanced computing resources"]
    },
    {
      name: "MIT",
      location: "Cambridge, MA",
      description: "Pioneer in computational biology and systems biology approaches",
      highlights: ["Broad Institute partnership", "AI/ML focus", "Entrepreneurship programs"]
    },
    {
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      description: "Excellence in biomedical research and translational bioinformatics",
      highlights: ["Top medical school", "NIH proximity", "Clinical data access"]
    },
    {
      name: "UC San Diego",
      location: "San Diego, CA",
      description: "Innovative programs in marine genomics and microbiome research",
      highlights: ["Scripps Institution", "Biotech hub location", "Diverse research areas"]
    },
    {
      name: "University of Washington",
      location: "Seattle, WA",
      description: "Strong focus on protein structure prediction and drug discovery",
      highlights: ["Institute for Protein Design", "Amazon collaboration", "Tech industry ties"]
    },
    {
      name: "Harvard University",
      location: "Cambridge, MA",
      description: "Cutting-edge research in evolutionary genomics and cancer biology",
      highlights: ["Dana-Farber partnership", "Wyss Institute", "Global alumni network"]
    }
  ];

  return (
    <section id="universities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            University Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our network of prestigious universities, each offering unique strengths 
            and research opportunities in bioinformatics and computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{university.location}</p>
              <p className="text-gray-600 mb-4">{university.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Program Highlights:</h4>
                <ul className="space-y-1">
                  {university.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            All programs follow the same core curriculum with university-specific specializations and research opportunities.
          </p>
          <a 
            href="#apply" 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Compare Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Universities;