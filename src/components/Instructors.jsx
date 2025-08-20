const Instructors = () => {
  const instructors = [
    {
      name: "Md. Jubayer Hossain",
      title: "Founder & CEO, DeepBio Limited / CHIRAL Bangladesh",
      bio: "Mr. Hossain is a founder of DeepBio Limited and CHIRAL Bangladesh, leading initiatives in AI-driven healthcare solutions and bioinformatics education.",
      image: "/images/speakers/jubayer.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/hossainmj/"
      }
    },
    {
      name: "Tasmim Rahman Adib",
      title: "AI Scientist, DeepBio Limited",
      bio: "Mr. Adib is an AI Scientist at DeepBio Limited, working on integrating artificial intelligence with bioinformatics to enhance healthcare solutions.",
      image: "/images/speakers/adib.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/tasmim-rahman-adib-403074221/"
      }
    },
    {
      name: "Md. Wahidul Islam",
      title: "Group Leader, Wet Lab, CHIRAL",
      bio: "Mr. Islam is a microbiologist at DeepBio Limited, specializing in microbial genomics and its applications in healthcare.",
      image: "/images/speakers/wahidul.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/islammw/"
      }
    },
    {
      name: "Muhibullah Shahjan",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Shahjan is a Research Assistant at Big Bioinformatics Lab, focusing on bioinformatics research and data analysis to support healthcare innovations.",
      image: "/images/speakers/muhib.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/muhibullah-shahjahan/"
      }
    },
    {
      name: "Md. Mohtasim Billah",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Billah is a Research Assistant at Big Bioinformatics Lab, contributing to bioinformatics research and the development of computational tools for healthcare.",
      image: "/images/speakers/rifat.png",
      social: {
        linkedin: "https://www.linkedin.com/in/muhibullah-shahjahan/"
      }
    },
    {
      name: "Muntasim Fuad",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Fuad is a Research Assistant at Big Bioinformatics Lab, contributing to bioinformatics research and the development of pipeline applications in healthcare.",
      image: "/images/speakers/fuad.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/muntasim-fuad/"
      }
    },
    {
      name: "Sajjad Hossain",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Hossain is a Research Assistant at Big Bioinformatics Lab, focusing on bioinformatics research and the development of innovative solutions in healthcare.",
      image: "/images/speakers/sajjad.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/sajjad-hossen-50a34b2b6/"
      }
    },
    {
      name: "Shekhar Saha",
      title: "Research Assistant, Big Bioinformatics Lab, CHIRAL",
      bio: "Mr. Saha is a Research Assistant at Big Bioinformatics Lab, specializing in bioinformatics research and the development of computational tools for healthcare.",
      image: "/images/speakers/shekhar.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/shekhar-saha-59b0052b3/"
      }
    },
    {
      name: "Musab Shahriar",
      title: "Team Lead, Insilico Medicine, CHIRAL",
      bio: "Mr. Shahriar is a Team Lead at Insilico Medicine, focusing on the application of artificial intelligence in drug discovery and bioinformatics.",
      image: "/images/speakers/musab.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mshahariar/"
      }
    },
    {
      name: "Pritom Kundu",
      title: "Team Lead, Insilico Medicine, CHIRAL",
      bio: "Mr. Kundu is a Team Lead at Insilico Medicine, specializing in the integration of AI and bioinformatics for innovative healthcare solutions.",
      image: "/images/speakers/pritom.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mshahariar/"
      }
    },

  ];

  return (
    <section id="speakers" className="py-20 bg-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bootcamp Instructors & Volunteers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn directly from industry leaders, researchers, and educators who will accelerate your understanding of career paths, research opportunities, and the future of bioinformatics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-600 hover:bg-gray-800 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-600 group-hover:border-blue-400 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{instructor.name}</h3>
                <p className="text-blue-400 font-semibold text-sm mb-4 group-hover:text-purple-400 transition-colors duration-300">{instructor.title}</p>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{instructor.bio}</p>
              
              <div className="flex justify-center space-x-4">
                {instructor.social.twitter && (
                  <a href={instructor.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                )}
                {instructor.social.linkedin && (
                  <a href={instructor.social.linkedin} className="text-gray-500 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {instructor.social.website && (
                  <a href={instructor.social.website} className="text-gray-500 hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;