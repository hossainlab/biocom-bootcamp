const Curriculum = () => {
  const modules = [
    {
      title: "Foundations",
      duration: "Months 1-2",
      topics: ["Programming (Python/R)", "Statistics & Probability", "Molecular Biology Basics", "Linux/Command Line"],
      description: "Build essential programming and statistical foundations"
    },
    {
      title: "Genomics & Sequencing",
      duration: "Months 3-4", 
      topics: ["Next-Gen Sequencing", "Genome Assembly", "Variant Calling", "GWAS Analysis"],
      description: "Master genomic data analysis and interpretation"
    },
    {
      title: "Computational Biology",
      duration: "Months 5-6",
      topics: ["Phylogenetics", "Protein Structure", "Molecular Dynamics", "Systems Biology"],
      description: "Explore computational approaches to biological systems"
    },
    {
      title: "Data Science & ML",
      duration: "Months 7-8",
      topics: ["Machine Learning", "Deep Learning", "Big Data Tools", "Cloud Computing"],
      description: "Apply advanced analytics to biological data"
    },
    {
      title: "Specialized Applications",
      duration: "Months 9-10",
      topics: ["Cancer Genomics", "Microbiome Analysis", "Drug Discovery", "Precision Medicine"],
      description: "Focus on specific application domains"
    },
    {
      title: "Capstone Project",
      duration: "Months 11-12",
      topics: ["Independent Research", "Industry Partnership", "Thesis Defense", "Career Preparation"],
      description: "Complete a real-world project with industry mentorship"
    }
  ];

  const tools = [
    "Python", "R", "MATLAB", "Jupyter", "Git", "Docker", "AWS", "Galaxy",
    "BLAST", "BWA", "GATK", "Samtools", "Bioconductor", "Scikit-learn", "TensorFlow", "PyTorch"
  ];

  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 12-month intensive program covers everything from fundamental concepts 
            to cutting-edge applications in bioinformatics and computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                <span className="text-sm text-primary-600 font-medium">{module.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <ul className="space-y-2">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <svg className="w-3 h-3 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tools & Technologies</h3>
          <p className="text-gray-600 text-center mb-8">
            Master industry-standard tools used by leading biotech companies and research institutions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;