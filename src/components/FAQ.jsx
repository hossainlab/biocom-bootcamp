import { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Who should attend this bootcamp?",
      answer: "This event is ideal for undergraduates, recent graduates, career changers, and anyone interested in exploring bioinformatics and computational biology career opportunities. No prior experience is required."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, this career awareness bootcamp is completely free to attend. We believe in making career exploration accessible to everyone interested in bioinformatics."
    },
    {
      question: "Will this be held in-person or virtually?",
      answer: "We offer both in-person and virtual attendance options. Virtual participants will have full access to all sessions, presentations, and interactive workshops through our online platform."
    },
    {
      question: "What should I bring or prepare?",
      answer: "Just bring your curiosity and questions! We'll provide all materials, resources, and information you need. A notebook for taking notes might be helpful, but everything will be shared digitally as well."
    },
    {
      question: "Will there be opportunities to network?",
      answer: "Absolutely! The event includes dedicated networking sessions, lunch, and coffee breaks where you can connect with professionals, faculty, and other attendees. We'll also facilitate virtual networking for online participants."
    },
    {
      question: "What career paths will be covered?",
      answer: "We'll explore diverse career options including industry roles (biotech, pharma, tech companies), academic research positions, government agencies, consulting, entrepreneurship, and healthcare informatics."
    },
    {
      question: "Will I learn about graduate school opportunities?",
      answer: "Yes! We have dedicated sessions on graduate programs, research opportunities, funding options, application processes, and tips for choosing the right program for your career goals."
    },
    {
      question: "Can I get personalized career advice?",
      answer: "Yes, we'll have one-on-one consultation opportunities during networking sessions and dedicated Q&A periods where you can get personalized advice from industry professionals and academics."
    },
    {
      question: "Will there be hands-on demonstrations?",
      answer: "Yes! We include interactive demonstrations of key bioinformatics tools and technologies so you can get a feel for what day-to-day work in the field actually involves."
    },
    {
      question: "How do I register?",
      answer: "Registration is simple and free! Click the 'Register Now' button on this page or contact us directly. We recommend registering early as spaces may be limited for in-person attendance."
    },
    {
      question: "What if I can't attend the full day?",
      answer: "While we encourage full participation for the complete experience, you can join individual sessions that interest you most. All sessions will be recorded and shared with registered participants."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-700">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Everything you need to know about the intensive BioCom BootCamp</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl shadow-xl border border-gray-600 overflow-hidden hover:bg-gray-800 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group-hover:bg-gray-700 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-gray-400 group-hover:text-blue-400 transform transition-all duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16 bg-gray-900 border border-gray-600 rounded-2xl p-12 shadow-xl hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Still Have Questions?</h3>
          <p className="text-gray-300 text-lg mb-8">
            Can't find what you're looking for? Our bootcamp team is here to help!
          </p>
          <a
            href="mailto:admissions@biocombootcamp.org"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;