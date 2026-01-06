import { memo } from 'react';

const Partners = memo(() => {
  const hosts = [
    {
      name: "DeepBio Limited",
      description: "Leading bioinformatics company specializing in AI-driven healthcare solutions and computational biology research.",
      logo: "/images/partners/deepbio.jpg",
      url: "https://deepbioltd.com/"
    },
    {
      name: "CHIRAL Bangladesh",
      description: "Advancing bioinformatics education and research in Bangladesh through innovative programs and industry collaboration.",
      logo: "/images/partners/chiral.jpg",
      url: "https://chiralbd.org/"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-gray-900 via-red-950/30 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Program Hosts */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Program Hosts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {hosts.map((host, index) => (
              <a
                key={index}
                href={host.url}
                className="group bg-gradient-to-r from-gray-900/80 to-red-950/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-900/50 hover:from-red-900/30 hover:to-red-950/60 hover:shadow-2xl hover:shadow-red-900/20 hover:border-red-500/50 transition-all duration-200 will-change-transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 will-change-transform p-2 shadow-lg">
                    <img
                      src={host.logo}
                      alt={`${host.name} Logo`}
                      loading="lazy"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {host.name}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{host.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Partners;