
import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicesList = [
  {
    id: 1,
    title: "Logo Yang Bisa Ngomong",
    description: `Logo itu tentang melawan kekosongan eksistensial, bukan cuma membuat sesuatu yang keren untuk dipajang di web. Kami bikin logo yang bisa bikin orang mikir, "Oke, ini bukan sekadar gambar, ini cerita."`,
    color: "bg-waras-purple",
    borderColor: "border-waras-purple",
    delay: 0
  },
  {
    id: 2,
    title: "Branding Biar Gak Disangka Jualan Gorengan",
    description: "Branding versi kami bukan sekadar logo + warna. Kami gali nilai, kepribadian, sampai trauma masa kecil brand kamu — lalu kami bungkus jadi strategi visual yang bisa bikin klienmu ngerasa 'ngerti lo banget'.",
    color: "bg-waras-orange",
    borderColor: "border-waras-orange",
    delay: 100
  },
  {
    id: 3,
    title: "Ngelola medsosmu kayak ngelola hidup",
    description: "Strateginya? Campuran antara algoritma, insting, dan firasat setelah bangun tidur jam 1 siang.",
    color: "bg-waras-lime",
    borderColor: "border-waras-lime",
    delay: 200,
  },
  {
    id: 4,
    title: "Fotografi lighntning pake cahaya ilahi",
    description: "Kami nggak cuma motret. Kami nangkep aura. Bahkan kalau produknya diem aja kayak kerupuk di etalase warteg, kami bikin dia kelihatan siap masuk galeri seni.",
    color: "bg-waras-pink",
    borderColor: "border-waras-pink",
    delay: 300
  }
];

const detailedServices = [
  {
    id: 1,
    title: "Branding Kit",
    description: "Paket lengkap untuk brand yang butuh identitas visual yang konsisten dari A-Z",
    icon: "✓",
    delay: 0
  },
  {
    id: 2,
    title: "Feeds Instagram",
    description: "Konten visual untuk media sosial yang bikin followers nggak bisa geser cepat-cepat",
    icon: "✓",
    delay: 100
  },
  {
    id: 3,
    title: "Desain Poster",
    description: "Poster yang bikin orang berhenti scrolling dan mulai nyimak",
    icon: "✓",
    delay: 200
  },
  {
    id: 4,
    title: "Layout",
    description: "Tata letak yang rapi, enak dilihat, dan nggak bikin mata lelah",
    icon: "✓",
    delay: 300
  },
  {
    id: 5,
    title: "Desain Logo",
    description: "Logo yang memorable, bukan cuma aesthetic",
    icon: "✓",
    delay: 400
  },
  {
    id: 6,
    title: "Merchandise",
    description: "Merchandise yang orang bangga pakai, bukan langsung masuk lemari",
    icon: "✓",
    delay: 500
  },
  {
    id: 7,
    title: "Fotografi",
    description: "Hasil foto yang bikin produk atau jasamu jadi lebih menarik dan profesional",
    icon: "✓",
    delay: 600
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
          Yang Bisa Kami Lakuin
          <span className="text-waras-orange"> (Selain Overthinking)</span>
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
            "Kalau kamu pengen desain yang cakep tapi gak ada isi — ya maaf, bukan di sini tempatnya."
          </p>
        </div>

        {/* New Our Services Section */}
        <div className="mt-32 mb-16">
          <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center">
            Our Services
            <span className="text-waras-lime"> (Secara Detail)</span>
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
                MENYEDIAKAN ANEKA JASA KREATIF
              </p>
              <p className="text-center text-sm text-gray-300">
                Dan aneka jasa lain yang belum terdaftar di menu... Hubungi kami untuk kebutuhan khusus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
