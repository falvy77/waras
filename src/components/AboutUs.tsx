
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 relative noise overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-waras-purple opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-waras-orange opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center">
          <span className="text-waras-lime">2 Kepala</span>,{" "}
          <span className="text-waras-pink">1 Visi,</span>
          <span className="text-waras-orange">Dan 4 Cangkir Kopi Perhari</span>
        </h2>
        
        <div 
          ref={ref}
          className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src="path/ke/487405758_1047572187427807_3880226450088928121_n.jpg" alt="Deskripsi gambar" width="200" height="100">
          <div className="w-full md:w-1/2 relative">
            <div className="sticky-note text-waras-asphalt -rotate-3">
              <div className="absolute top-0 right-0 w-16 h-16 bg-waras-pink opacity-20 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-waras-lime opacity-20 rounded-full"></div>
              
              <div className="border-4 border-waras-asphalt p-2 bg-white mb-4">
                <div className="h-64 bg-waras-asphalt flex items-center justify-center overflow-hidden">
                  <p className="text-xl rotate-6 text-white px-4 py-2 bg-waras-pink">
                    <img src="path/ke/487405758_1047572187427807_3880226450088928121_n.jpg" alt="Deskripsi gambar" width="200" height="100">
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">TEAM WARAS, 2025</p>
                <p className="text-xs">Burjo Teko</p>
              </div>
            </div>
          </div>
          
          {/* About text */}
          <div className="w-full md:w-1/2">
            <div className="bg-waras-asphalt/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <p className="text-xl mb-6 leading-relaxed">
                Banyak agensi sama portofolionya. Kami bangga pernah{" "}
                <span className="text-waras-lime font-bold">ribut tiga jam gara-gara tone warna</span>{" "}
                nasi goreng.
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                Kami percaya branding bagus itu kayak mantan toxic:{" "}
                <span className="text-waras-orange font-bold">susah dilupain</span>.
              </p>
              
              <div className="mt-8">
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-waras-purple/20 border border-waras-purple text-white px-3 py-1 rounded-full text-sm">
                    #Wongwaras
                  </span>
                  <span className="bg-waras-orange/20 border border-waras-orange text-white px-3 py-1 rounded-full text-sm">
                    #NasiGoreng
                  </span>
                  <span className="bg-waras-lime/20 border border-waras-lime text-white px-3 py-1 rounded-full text-sm">
                    #Hahahihi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
