import { useState, memo } from 'react';

const RegistrationForm = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 bg-black relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-gray-900/50 border border-green-500/30 backdrop-blur-xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for securing your spot. We've sent a confirmation email with the session details and pre-orientation materials.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-red-400 font-semibold hover:underline"
            >
              Register another person
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-black relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your <br />
                <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Spot Today</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Join our next monthly session. Spaces are limited to ensure personalized career consultations for every participant.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Monthly Career Guidance",
                  "Industry & Academic Guide",
                  "Expert Mentorship Session",
                  "Networking Opportunity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form Card */}
            <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Academic/Professional Background</label>
                  <select 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled selected>Select your background</option>
                    <option value="undergrad">Undergraduate Student</option>
                    <option value="grad">Graduate Student (MS)</option>
                    <option value="phd">PhD Scholar</option>
                    <option value="professional">Early-Career Professional</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Institution / Organization</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                      placeholder="University or Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Department</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                      placeholder="e.g. Genetic Engineering"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">What is your primary goal for this session?</label>
                  <textarea 
                    rows="3"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                    placeholder="E.g., Finding PhD opportunities, Industry skill requirements..."
                  ></textarea>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full group relative py-4 bg-red-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Register for the Next Session'}
                  </span>
                </button>
                
                <p className="text-[10px] text-gray-500 text-center">
                  By registering, you agree to receive session-related communications.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default RegistrationForm;
