import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    month: '',
    role: '',
    background: '',
    institution: '',
    department: '',
    referral: '',
    goal: ''
  });

  // Calculate the last day of the current month
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const formattedDate = lastDay.toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // LIVE GOOGLE APPS SCRIPT URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPHEEFz046OxCEENsjktXPr0-rEaoW_Zjb6LuNBEWiUpUn-FNCN6b4A2kDOBrVI4BT/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Critical for Google Scripts
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-20 px-6">
          <div className="max-w-md w-full p-12 rounded-3xl bg-gray-900/50 border border-green-500/30 backdrop-blur-xl text-center shadow-2xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for securing your spot. You will receive the Zoom link and session materials via email 2 days before your scheduled session.
            </p>
            <a 
              href="/"
              className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:scale-105 transition-transform"
            >
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-6 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Secure Your <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Spot</span>
            </h1>
            <p className="text-gray-400">Next Session: <span className="text-amber-400 font-bold">{formattedDate}</span></p>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              {/* Month */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Session Month</label>
                <select 
                  required
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>Select month</option>
                  {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Joining As</label>
                <select 
                  required
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="participant">Participant</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="partner">Community Partner</option>
                </select>
              </div>

              {/* Background */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Academic/Professional Background</label>
                <select 
                  required
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>Select your background</option>
                  <option value="undergrad">Undergraduate Student</option>
                  <option value="grad">Graduate Student (MS)</option>
                  <option value="phd">PhD Scholar</option>
                  <option value="professional">Early-Career Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Institution */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Institution / Organization</label>
                <input 
                  required
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                  placeholder="University or Company Name"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Department</label>
                <input 
                  required
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none"
                  placeholder="e.g. Genetic Engineering"
                />
              </div>

              {/* Referral */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Where did you hear about us?</label>
                <select 
                  required
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all outline-none appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="facebook">Facebook</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="github">GitHub</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="friend">Friend / Colleague</option>
                  <option value="academy">DeepBio Academy</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">What is your primary goal for this session?</label>
                <textarea 
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
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
                  ) : 'Complete Registration'}
                </span>
              </button>
              
              <p className="text-[10px] text-gray-500 text-center">
                By registering, you agree to receive session-related communications.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
