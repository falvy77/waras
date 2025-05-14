
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Avatar } from "@/components/ui/avatar";

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
          <span className="text-waras-pink">1 Visi,</span>{" "}
          <span className="text-waras-orange">Dan 4 Cangkir Kopi Sehari</span>
        </h2>
        
        <div 
          ref={ref}
          className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/2 relative">
            <div className="sticky-note text-waras-asphalt -rotate-3">
              <div className="absolute top-0 right-0 w-16 h-16 bg-waras-pink opacity-20 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-waras-lime opacity-20 rounded-full"></div>
              
              <div className="border-4 border-waras-asphalt p-2 bg-white mb-4">
                <div className="h-64 bg-waras-asphalt flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/b8696a67-b306-4ca0-9959-afd6b5c39462.png" 
                    alt="WARAS Team" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">TIM WARAS, 2025</p>
                <p className="text-xs">Istirahat Kopi</p>
              </div>
            </div>
          </div>
          
          {/* About text */}
          <div className="w-full md:w-1/2">
            <div className="bg-waras-asphalt/30 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <p className="text-xl mb-6 leading-relaxed">
                Brand lain lahir dari strategi. Brand kami lahir dari{" "}
                <span className="text-waras-lime font-bold">begadang, layar biru, dan tumpahan kopi.</span>{" "}
              </p>
              
              <p className="text-xl mb-6 leading-relaxed">
                Logo yang bagus itu seperti lagu sedih:{" "}
                <span className="text-waras-orange font-bold">tak perlu penjelasan, cukup dengan perasaan</span>.
              </p>
              
              <div className="mt-8">
                <div className="flex gap-4 flex-wrap">
                  <span className="bg-waras-purple/20 border border-waras-purple text-white px-3 py-1 rounded-full text-sm">
                    #MasihWaras
                  </span>
                  <span className="bg-waras-orange/20 border border-waras-orange text-white px-3 py-1 rounded-full text-sm">
                    #NasGoreng
                  </span>
                  <span className="bg-waras-lime/20 border border-waras-lime text-white px-3 py-1 rounded-full text-sm">
                    #HaHaHiHi
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
