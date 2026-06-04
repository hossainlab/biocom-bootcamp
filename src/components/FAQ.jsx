import { useState, memo } from 'react';

const FAQ = memo(() => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Who should attend this career guide?",
      answer: "This event is ideal for undergraduates, recent graduates, career changers, and anyone interested in exploring bioinformatics and computational biology career opportunities. No prior experience is required."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, this career awareness orientation is completely free to attend. We believe in making career exploration accessible to everyone interested in bioinformatics."
    },
    {
      question: "Will the session be held in-person or virtually?",
      answer: "We offer both in-person and virtual attendance options. Virtual participants will have full access to all sessions, presentations, and interactive workshops through our online platform."
    },
    {
      question: "What should I bring or prepare?",
      answer: "Just your curiosity and any career-related questions you have! If you're attending virtually, ensure you have a stable internet connection."
    },
    {
      question: "Will I get a certificate of participation?",
      answer: "Yes, all registered participants who attend the full session will receive a digital certificate of participation from DeepBio Limited."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-red-950/30 to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Everything you need to know about the intensive BioCom Career Guide</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-red-900/50 overflow-hidden hover:bg-red-900/20 hover:shadow-2xl hover:scale-[1.02] hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <div className="px-8 py-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                  {faq.question}
                </h3>
                <span className={`text-red-500 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed border-t border-red-900/20 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default FAQ;
