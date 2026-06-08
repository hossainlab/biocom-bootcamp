import { memo } from 'react';

const Ambassadors = memo(() => {
  const ambassadors = [
    {
      id: "DBA-2026-0001",
      name: "MD. HABIB UN NOBI",
      university: "Jahangirnagar University",
      image: "/images/ambassador_photo/Md. Habib Un Nobi_JU - Md. Habib Un Nobi.jpg",
      facebook: "https://www.facebook.com/share/1ChWDwb5UK/",
      linkedin: "https://www.linkedin.com/in/md-habib-un-nobi-9b694437a"
    },
    {
      id: "DBA-2026-0002",
      name: "Md Sane Hossain",
      university: "Bangladesh University of Health Sciences",
      image: "/images/ambassador_photo/Md Sane Hossain -BUHS - Md. Sane Hossain.jpg",
      facebook: "https://www.facebook.com/share/18K73unKn6/",
      linkedin: "https://www.linkedin.com/in/md-sane-hossain-7753371ab"
    },
    {
      id: "DBA-2026-0003",
      name: "Nafisa Nawal",
      university: "National University (Chittagong College)",
      image: "/images/ambassador_photo/picture nafisa  - Nafisa Nawal.jpeg",
      facebook: "https://www.facebook.com/nafisa.nawal.167",
      linkedin: "https://www.linkedin.com/in/nnawal/"
    },
    {
      id: "DBA-2026-0004",
      name: "MD Towfiqul Islam",
      university: "North South University",
      image: "/images/ambassador_photo/TowfiqulIslam_NSU - 8433 Towfiqul Islam.jpg",
      facebook: "https://www.facebook.com/turzo.tawfik",
      linkedin: "https://www.linkedin.com/in/towfiqul-islam-88075789"
    },
    {
      id: "DBA-2026-0005",
      name: "Md. Tariqul Islam",
      university: "Jashore University of Science and Technology",
      image: "/images/ambassador_photo/Tariqulislam_JUST - Md.Tariqul Islam.png",
      facebook: "https://www.facebook.com/share/1ApkyR3928/",
      linkedin: "https://www.linkedin.com/in/md-tariqul-islam-398790259"
    },
    {
      id: "DBA-2026-0006",
      name: "Salman Masud",
      university: "BRAC University",
      image: "/images/ambassador_photo/Salman Masud_BRACU - Salman Masud.jpg",
      facebook: "https://www.facebook.com/share/1E9zBV5s4z/",
      linkedin: "https://www.linkedin.com/in/salman-masud-017072344"
    },
    {
      id: "DBA-2026-0007",
      name: "Md. Ashikur Rahman",
      university: "Bangladesh Agricultural University",
      image: "/images/ambassador_photo/MdAshikurRahman_BAU - Md. Ashikur Rahman.jpg",
      facebook: "https://www.facebook.com/share/18RkNK7Ebq/",
      linkedin: "https://www.linkedin.com/in/md-ashikur-rahman-52b034332"
    },
    {
      id: "DBA-2026-0008",
      name: "Sweety Akter",
      university: "Brac University",
      image: "/images/ambassador_photo/SweetyAkter_BRACU - Sweety Akter.jpg",
      facebook: "https://www.facebook.com/alex.tanhaa.5/",
      linkedin: "https://www.linkedin.com/in/sweety-akter-6b11b0286"
    },
    {
      id: "DBA-2026-0009",
      name: "Jannatul Mawa Etee",
      university: "Islamic University, Kushtia",
      image: "/images/ambassador_photo/IMG_20260301_210347 - Jannatul Mawa ll-21.png",
      facebook: "https://www.facebook.com/share/1DdzyHFgdc/",
      linkedin: "https://www.linkedin.com/in/jannatul-mawa-etee-3476a11b5"
    },
    {
      id: "DBA-2026-0010",
      name: "Sharmin Sultana Lincoln",
      university: "Military Institute of Science & Technology",
      image: "/images/ambassador_photo/Sharmin_Sultana_Lincoln_MIST - Sharmin Sultana Lincoln.jpeg",
      facebook: "https://www.facebook.com/share/17CvDpjv68/",
      linkedin: "https://www.linkedin.com/in/sharmin-sultana-lincoln-966462370"
    },
    {
      id: "DBA-2026-0011",
      name: "Habibur Rahman Naim",
      university: "Jagannath University",
      image: "/images/ambassador_photo/Habibur Rahman Naim.JnU - Habibur Rahman Naim.png",
      facebook: "https://www.facebook.com/share/184avGhg6Y/",
      linkedin: "https://www.linkedin.com/in/habibur-rahman-naim-762168361"
    },
    {
      id: "DBA-2026-0012",
      name: "Shirsho Saha",
      university: "Daffodil International University",
      image: "/images/ambassador_photo/Shirsho Saha_DIU - Shirsho Saha 251-59-005.jpg",
      facebook: "https://www.facebook.com/share/18hn5AJe7x/",
      linkedin: "https://www.linkedin.com/in/shirsho-saha-0b51933b6"
    },
    {
      id: "DBA-2026-0013",
      name: "Ankit Saha",
      university: "BRAC University",
      image: "/images/ambassador_photo/Ankit Saha_BracU - Ankit Saha.jpg",
      facebook: "https://www.facebook.com/ankit.saha.455211/",
      linkedin: null
    },
    {
      id: "DBA-2026-0014",
      name: "Md. Anamul Hasan Wasi",
      university: "Shahjalal University of Science and Technology",
      image: "/images/ambassador_photo/MdAnamulHasanWasi_SUST - Anamul Hasan Wasi.jpg",
      facebook: "https://www.facebook.com/share/1HMB57JhXB/",
      linkedin: null
    },
    {
      id: "DBA-2026-0015",
      name: "Moriom Islam Mim",
      university: "Bangladesh University of Health Sciences",
      image: "/images/ambassador_photo/Moriom Islam _ Bangladesh University of Health Sciences - Moriom Islam.jpg",
      facebook: "https://www.facebook.com/moriom.islam.9619934",
      linkedin: "https://www.linkedin.com/in/moriom-islam-mim"
    },
    {
      id: "DBA-2026-0016",
      name: "Saju Mandal",
      university: "Jahangirnagar University",
      image: "/images/ambassador_photo/ChatGPT Image Apr 13, 2026, 02_24_21 PM - Saju Mandal.png",
      facebook: "https://www.facebook.com/profile.php?id=100031018788823",
      linkedin: "https://www.linkedin.com/in/saju-biotech"
    },
    {
      id: "DBA-2026-0017",
      name: "Md. Nazmul Hasan",
      university: "Shamoly Engineering College",
      image: "/images/ambassador_photo/Md.NazmulHasan_ShEC - nazmul. hasan.jpg",
      facebook: "https://www.facebook.com/mdnazmulhasan.ontor.7",
      linkedin: "https://www.linkedin.com/in/mnh24"
    },
    {
      id: "DBA-2026-0018",
      name: "Faiza Wamea Haque",
      university: "Brac University",
      image: "/images/ambassador_photo/Faiza Wamea Haque _Brac University  - Faiza Wamea Haque.jpg",
      facebook: "https://www.facebook.com/share/1DoJsWyx4m/",
      linkedin: "https://www.linkedin.com/in/faiza-wamea-haque-68b108244"
    },
    {
      id: "DBA-2026-0019",
      name: "MD. Sal Sabil Anwar",
      university: "BRAC University",
      image: "/images/ambassador_photo/Md.SalSabilAnwar_BRACU - MD. SAL SABIL ANWAR.jpg",
      facebook: "https://www.facebook.com/share/1MwbnnU2Tn/",
      linkedin: "https://www.linkedin.com/in/salsabil-anwar-t4a007"
    },
    {
      id: "DBA-2026-0020",
      name: "MD. SHAKAWAT HOSSAIN",
      university: "Shahjalal University of Science And Technology",
      image: "/images/ambassador_photo/ShakawatHossain_SUST.jpg - shakawat hossain.jpeg",
      facebook: "https://www.facebook.com/shihaab7838/",
      linkedin: "https://www.linkedin.com/in/md-shakawat-hossain-372143378/"
    },
    {
      id: "DBA-2026-0021",
      name: "Ellina Tasneem Bushra",
      university: "University of Rajshahi",
      image: "/images/ambassador_photo/EllinaTasneemBushra_RU - Sakib Al Hasan.jpg",
      facebook: "https://www.facebook.com/share/1DAcK1Yqxn/",
      linkedin: "https://www.linkedin.com/in/ellina-tasneem-bushra-453ab6386"
    },
    {
      id: "DBA-2026-0022",
      name: "Sadia Sultana Mim",
      university: "University of Rajshahi",
      image: "/images/ambassador_photo/inbound4528769483021909120 - Sadia Mim.jpg",
      facebook: "https://www.facebook.com/sadia.sultana.mim.783113",
      linkedin: "https://www.linkedin.com/in/sadia-mim-240931279"
    },
    {
      id: "DBA-2026-0023",
      name: "Sanjida Mazumder",
      university: "Cumilla Medical College",
      image: "/images/ambassador_photo/IMG_1479~2 (1).JPG - Sanjida Mazumder.png",
      facebook: "https://www.facebook.com/sanjida.mazumder.17",
      linkedin: null
    },
    {
      id: "DBA-2026-0024",
      name: "Nazifa Rounak Ushna",
      university: "University of Rajshahi",
      image: "/images/ambassador_photo/IMG_20251125_134427 - Feorella Firoza.jpg",
      facebook: "https://www.facebook.com/share/18p8doyW2z/",
      linkedin: "https://www.linkedin.com/in/nazifa-rounak-ushna-768485404"
    }
  ];

  return (
    <section id="ambassadors" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">DeepBio Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Campus Ambassadors</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Meet our dedicated network of 24 ambassadors representing DeepBio across premier universities. They bridge the gap between bioinformatics expertise and student communities nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {ambassadors.map((ambassador, index) => (
            <div 
              key={index}
              className="group bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-amber-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-md"></div>
                <img 
                  src={ambassador.image} 
                  alt={ambassador.name}
                  loading="lazy"
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-red-900/30 group-hover:border-red-500/50 transition-all duration-300 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(ambassador.name) + "&background=111&color=ef4444";
                  }}
                />
              </div>

              <div className="text-center">
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-red-400 transition-colors leading-tight min-h-[3rem] flex items-center justify-center">
                  {ambassador.name}
                </h3>
                <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-4 h-12 flex items-center justify-center">
                  {ambassador.university}
                </p>

                <div className="flex justify-center gap-3 pt-4 border-t border-white/5">
                  <a 
                    href={ambassador.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1877F2] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {ambassador.linkedin && ambassador.linkedin !== "N/A" && (
                    <a 
                      href={ambassador.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Ambassadors;
