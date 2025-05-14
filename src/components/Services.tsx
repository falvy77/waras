
import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicesList = [
  {
    id: 1,
    title: "Logo yang Berbicara",
    description: `Logo bukan hanya tentang membuat sesuatu yang keren untuk website. Kami membuat logo yang membuat orang berpikir, "Ini bukan hanya gambar, ini adalah cerita."`,
    color: "bg-waras-purple",
    borderColor: "border-waras-purple",
    delay: 0
  },
  {
    id: 2,
    title: "Branding yang Tidak Terlihat Amatir",
    description: "Branding kami bukan hanya logo + warna. Kami menggali nilai, kepribadian, dan bahkan trauma masa kecil brand kamu - lalu membungkusnya dalam strategi visual yang membuat klien merasakan 'sangat dipahami'.",
    color: "bg-waras-orange",
    borderColor: "border-waras-orange",
    delay: 100
  },
  {
    id: 3,
    title: "Mengelola Media Sosial Seperti Kehidupan",
    description: "Strategi? Campuran algoritma, insting, dan firasat setelah bangun jam 1 siang.",
    color: "bg-waras-lime",
    borderColor: "border-waras-lime",
    delay: 200,
  },
  {
    id: 4,
    title: "Fotografi dengan Cahaya Ilahi",
    description: "Kami tidak hanya mengambil foto. Kami menangkap aura. Meskipun produk kamu hanya diam seperti kerupuk di etalase, kami membuatnya terlihat layak galeri.",
    color: "bg-waras-pink",
    borderColor: "border-waras-pink",
    delay: 300
  }
];

const detailedServices = [
  {
    id: 1,
    title: "Paket Branding",
    description: "Paket lengkap untuk brand yang membutuhkan identitas visual yang konsisten dari A sampai Z",
    icon: "✓",
    delay: 0
  },
  {
    id: 2,
    title: "Feed Instagram",
    description: "Konten visual untuk media sosial yang membuat pengikut berhenti scroll",
    icon: "✓",
    delay: 100
  },
  {
    id: 3,
    title: "Desain Poster",
    description: "Poster yang membuat orang berhenti scrolling dan mulai memperhatikan",
    icon: "✓",
    delay: 200
  },
  {
    id: 4,
    title: "Desain Logo",
    description: "Logo yang berkesan, bukan hanya indah",
    icon: "✓",
    delay: 300
  },
  {
    id: 5,
    title: "Merchandise",
    description: "Merchandise yang orang bangga gunakan, bukan hanya disimpan di laci",
    icon: "✓",
    delay: 400
  },
  {
    id: 6,
    title: "Fotografi",
    description: "Foto yang membuat produk atau layanan kamu lebih menarik dan profesional",
    icon: "✓",
    delay: 500
  }
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-20 relative noise">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-waras-blue opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-56 h-56 bg-waras-pink opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bebas mb-6 text-center">
          What We Can Do
          <span className="text-waras-orange"> (Besides Overthinking)</span>
        </h2>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className={`p-1 rounded-lg overflow-hidden transition-all duration-700 transform ${
                inView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="group relative h-full bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:-translate-y-2 transition-all duration-300">
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-1 ${service.color} flex-shrink-0`}></div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className={`w-0 h-1 ${service.color} group-hover:w-full transition-all duration-500 mt-4`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl italic text-gray-300">
            "If you want pretty designs with no substance — sorry, you're in the wrong place."
          </p>
        </div>

        {/* New Our Services Section */}
        <div className="mt-32 mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center">
            What can we do for you...
            <span className="text-waras-lime"></span>
          </h2>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <img 
                src="/lovable-uploads/6c1f8436-df9c-48cc-a5fc-f16c01be0d12.png"
                alt="Studio WARAS Banner"
                className="w-full max-w-4xl"
              />
            </div>
            
            <div ref={ref2} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {detailedServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-waras-asphalt/40 backdrop-blur-sm border border-white/10 p-6 rounded-lg transition-all duration-500 ${
                    inView2
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${service.delay}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-waras-lime">{service.icon}</span>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-waras-asphalt/60 backdrop-blur-sm border border-white/10 p-6 rounded-lg max-w-2xl">
              <p className="text-center text-lg font-bebas text-waras-orange mb-2">
                PROVIDING VARIOUS CREATIVE SERVICES
              </p>
              <p className="text-center text-sm text-gray-300">
                And other services not listed in the menu... Contact us for special needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
