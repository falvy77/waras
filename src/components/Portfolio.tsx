
import React from 'react';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    id: 1,
    client: "UMKM snack rumah ungu",
    problem: "Dikira rumahnya ga ungu beneran",
    solution: "Branding ulang + logo rumah snack",
    colorClass: "bg-waras-orange",
    imageText: "Mockup stiker kemasan"
  },
  {
    id: 2,
    client: "Zaara Brownies",
    problem: "Owner gaptek gabisa bikin marketing",
    solution: "Identitas visual + social media campaign bonus packaging",
    colorClass: "bg-waras-blue",
    imageText: "Mockup packaging dan advertisement"
  },
  {
    id: 3,
    client: "Snack rumah ungu",
    problem: "Customer sering nyasar",
    solution: "Identitas Visual, sosmed, sama banner biar ga nyasar",
    colorClass: "bg-waras-lime",
    imageText: "applied banner"
  }
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="portfolio" className="py-20 relative noise">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-52 h-52 bg-waras-purple opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-waras-orange opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bebas mb-6 text-center">
          Hasil Kerjaan Kami 
          <span className="text-waras-lime"> (yang gak malu ditunjukkin)</span>
        </h2>
        
        <div 
          ref={ref}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-1000 ${
                inView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`h-full bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-${item.colorClass.split('-')[1]}/20 transition-all duration-300`}>
                {/* Mockup Image Area */}
                <div className="h-56 relative overflow-hidden flex items-center justify-center">
                  <div className={`absolute inset-0 ${item.colorClass} opacity-20`}></div>
                  <p className="relative z-10 text-center px-8 font-bold italic">
                    [ {item.imageText} ]
                  </p>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-6 flex flex-col gap-2">
                    <div className="flex items-center">
                      <span className="text-gray-400 w-24">Klien:</span>
                      <span className="font-bold">{item.client}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-gray-400 w-24">Masalah:</span>
                      <span className="text-waras-orange">{item.problem}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-gray-400 w-24">Solusi:</span>
                      <span className="text-waras-lime">{item.solution}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="text-sm text-white/70 hover:text-white transition-colors">
                      Mau lihat detail? →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
