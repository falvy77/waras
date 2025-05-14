
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PortfolioCard from './PortfolioCard';
import PortfolioDetailModal from './PortfolioDetailModal';
import { portfolioItems } from './portfolioData';
import { PortfolioItem } from './types';

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

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
            <PortfolioCard 
              key={item.id}
              item={item}
              onViewDetails={openModal}
              inView={inView}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <PortfolioDetailModal 
        selectedItem={selectedItem} 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </section>
  );
};

export default Portfolio;
