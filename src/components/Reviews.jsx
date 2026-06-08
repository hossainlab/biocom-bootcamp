import { useState, memo } from 'react';

const Reviews = memo(() => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Samiul Islam",
      role: "Undergraduate Student",
      rating: 5,
      comment: "The career guide was eye-opening. I finally understood how to bridge the gap between biology and coding. Highly recommended for any biotech student!",
      date: "May 2026"
    },
    {
      id: 2,
      name: "Dr. Farhana Ahmed",
      role: "Researcher",
      rating: 5,
      comment: "A very well-organized session. The insights into global PhD opportunities and industry requirements were particularly helpful for my students.",
      date: "April 2026"
    },
    {
      id: 3,
      name: "Tanvir Hossain",
      role: "Career Changer",
      rating: 5,
      comment: "I was confused about moving into Bioinformatics. This session gave me a clear roadmap and the confidence to start my journey. Thank you DeepBio!",
      date: "March 2026"
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="reviews" className="py-20 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What Our <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">Participants</span> Say
            </h2>
            <p className="text-gray-400 text-lg">
              Hear from students and professionals who have accelerated their careers through our guidance sessions.
            </p>
          </div>
          <a 
            href="https://forms.gle/B6QjmhS34cPeMgjV8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all hover:border-red-500/50 group"
          >
            <span className="group-hover:text-red-400 transition-colors">Share Your Experience</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="p-8 rounded-3xl bg-gray-900/40 border border-white/5 backdrop-blur-xl hover:border-red-500/30 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-6 italic leading-relaxed">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold group-hover:text-red-400 transition-colors">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role} • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Reviews;
