const ApplicationProcess = () => {
  const steps = [
    {
      step: "1",
      title: "Submit Application",
      description: "Complete our online application with your academic background and career goals.",
      timeline: "15 minutes"
    },
    {
      step: "2", 
      title: "Technical Assessment",
      description: "Take our adaptive assessment to evaluate your current technical skills and learning potential.",
      timeline: "1 hour"
    },
    {
      step: "3",
      title: "Interview",
      description: "Discuss your motivation and goals with our admissions team and program faculty.",
      timeline: "30 minutes"
    },
    {
      step: "4",
      title: "University Matching",
      description: "We'll help match you with the best university program based on your interests and location preferences.",
      timeline: "1 week"
    },
    {
      step: "5",
      title: "Enrollment",
      description: "Complete enrollment paperwork and begin your pre-program preparation materials.",
      timeline: "2 weeks"
    }
  ];

  const requirements = [
    "Bachelor's degree in life sciences, computer science, mathematics, or related field",
    "Basic understanding of biology and/or programming (either is sufficient)",
    "Strong analytical and problem-solving skills",
    "Commitment to full-time study for 12 months",
    "English proficiency (TOEFL/IELTS for international students)"
  ];

  const financialAid = [
    "Merit-based scholarships up to $10,000",
    "Income share agreements (pay after employment)",
    "Payment plans with 0% interest",
    "Veterans benefits accepted",
    "Corporate sponsorship opportunities"
  ];

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our next cohort starting in January 2025. Our streamlined application 
            process is designed to identify motivated learners ready for career transformation.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Apply</h3>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{step.title}</h4>
                    <span className="text-sm text-primary-600 font-medium">{step.timeline}</span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Aid</h3>
            <ul className="space-y-3">
              {financialAid.map((aid, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{aid}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Applications for our January 2025 cohort are now open. Limited spots available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="#" 
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
            >
              Schedule Info Session
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Application deadline: November 15, 2024 | Program starts: January 8, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;