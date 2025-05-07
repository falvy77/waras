
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a small delay for animation to work properly
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden noise pt-20 flex items-center">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-waras-purple opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-waras-orange opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-waras-blue opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 
            className="text-5xl md:text-7xl font-bebas mb-4 glitch" 
            data-text="Kami bikin branding sambil breakdown."
          >
            Kami bikin branding sambil breakdown.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Ide kami suka datang di antara revisi dan ketiduran di meja.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <button 
              onClick={scrollToPortfolio}
              className="waras-button waras-button-primary text-lg"
            >
              Lihat Aksi Kami
            </button>
            
            <button 
              onClick={scrollToContact}
              className="waras-button waras-button-secondary text-lg"
            >
              Ngobrol Dulu, Serius Belakangan
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
