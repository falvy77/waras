
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for aesthetic purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-waras-asphalt">
        <div className="relative mb-4">
          <img 
            src="/lovable-uploads/eecba1f8-b795-4472-8a2a-8247d377debb.png" 
            alt="WARAS Logo" 
            className="h-24 md:h-32 mb-6 animate-pulse"
          />
          <h1 className="text-5xl md:text-7xl font-bebas text-white glitch mb-2" data-text="WARAS">
            WARAS
          </h1>
        </div>
        <p className="text-waras-lime animate-pulse">loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-waras-asphalt relative overflow-x-hidden noise">
      <NavBar />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img 
                src="/lovable-uploads/eecba1f8-b795-4472-8a2a-8247d377debb.png" 
                alt="WARAS Logo" 
                className="h-8 mr-2"
              />
              <div>
                <h3 className="text-2xl font-bebas text-waras-lime">WARAS</h3>
                <p className="text-sm text-gray-400">Branding Agency (Still Sane)</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} WARAS Studio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
