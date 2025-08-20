const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Bioinformatics Scientist at Illumina",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1494790108755-2616b056b3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The BioCom BootCamp completely transformed my career. I went from having no programming experience to landing a role at a leading genomics company. The hands-on projects and industry mentorship were invaluable."
    },
    {
      name: "Michael Rodriguez",
      role: "Computational Biologist at Genentech",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "The program's focus on real-world applications and cutting-edge tools gave me the confidence to tackle complex biological data problems. My salary increased by 150% after graduation."
    },
    {
      name: "Dr. Emily Watson",
      role: "Senior Data Scientist at 23andMe",
      university: "Johns Hopkins",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "Coming from a wet lab background, I needed to quickly gain computational skills. This program provided the perfect bridge between biology and data science. The career support was exceptional."
    }
  ];

  const stats = [
    { number: "500+", label: "Graduates Placed" },
    { number: "95%", label: "Employment Rate" },
    { number: "$85K", label: "Average Starting Salary" },
    { number: "200+", label: "Partner Companies" }
  ];

  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Join hundreds of professionals who have successfully transitioned into 
            high-paying careers in bioinformatics and computational biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-12 rounded-full mr-4" 
                  src={testimonial.image} 
                  alt={testimonial.name}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-primary-600">{testimonial.university}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Ready to Join Them?</h3>
          <a 
            href="#apply" 
            className="bg-yellow-400 text-primary-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Start Your Application
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;