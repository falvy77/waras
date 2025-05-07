
import React from 'react';
import { useInView } from 'react-intersection-observer';

const servicesList = [
  {
    id: 1,
    title: "Logo Yang Bisa Ngomong",
    description: "Bikin logo yang gak cuma enak diliat, tapi punya cerita dan nyambung sama brand kamu.",
    color: "bg-waras-purple",
    borderColor: "border-waras-purple",
    delay: 0
  },
  {
    id: 2,
    title: "Branding Biar Gak Disangka Jualan Gorengan",
    description: "Identitas visual yang bikin orang langsung tahu kamu jualan apa tanpa perlu baca deskripsi.",
    color: "bg-waras-orange",
    borderColor: "border-waras-orange",
    delay: 100
  },
  {
    id: 3,
    title: "Feed Sosmed Yang Nggak Garing",
    description: "Konten yang bikin user stop scrolling dan sadar kalau brand kamu ada personality-nya.",
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

const Services = () => {
  const { ref, inView } = useInView({
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
                    <h3 className={`text-2xl font-bold mb-4 ${service.textColor || 'text-white'}`}>
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
      </div>
    </section>
  );
};

export default Services;
