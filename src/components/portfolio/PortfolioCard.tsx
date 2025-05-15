
import React from 'react';
import { ChevronRight, ImageIcon, StarHalf } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PortfolioItem } from './types';

interface PortfolioCardProps {
  item: PortfolioItem;
  onViewDetails: (item: PortfolioItem) => void;
  inView: boolean;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  item, 
  onViewDetails, 
  inView,
  index 
}) => {
  return (
    <div 
      className={`transition-all duration-1000 ${
        inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`h-full bg-waras-asphalt/50 backdrop-blur-sm border ${item.isCTA ? 'border-waras-lime/30 hover:border-waras-lime/70' : 'border-white/10'} rounded-lg overflow-hidden hover:shadow-lg hover:shadow-${item.colorClass.split('-')[1]}/20 transition-all duration-300`}>
        {/* Mockup Image Area */}
        <div className={`h-56 relative overflow-hidden flex items-center justify-center ${item.isCTA ? 'bg-gradient-to-br from-waras-lime/20 to-transparent' : ''}`}>
          <div className={`absolute inset-0 ${item.colorClass} opacity-20`}></div>
          {/* Display actual image for portfolio items with coverImage */}
          {item.coverImage ? (
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <AspectRatio ratio={16/9} className="w-full h-full">
                <img 
                  src={item.coverImage} 
                  alt={item.imageText} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="font-bold italic text-xl text-white">
                  [ {item.imageText} ]
                </p>
              </div>
            </div>
          ) : (
            <div className="relative z-10 text-center px-8">
              {item.isCTA ? (
                <>
                  <StarHalf className="mx-auto mb-2 opacity-70" size={40} />
                  <p className="font-bold italic text-xl text-waras-lime">
                    [ {item.imageText} ]
                  </p>
                </>
              ) : (
                <>
                  <ImageIcon className="mx-auto mb-2 opacity-50" size={32} />
                  <p className="font-bold italic">
                    [ {item.imageText} ]
                  </p>
                </>
              )}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6 flex flex-col gap-2">
            <div className="flex items-center">
              <span className="text-gray-400 w-24">Klien:</span>
              <span className={`font-bold ${item.isCTA ? 'text-waras-lime' : ''}`}>{item.client}</span>
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
            {item.isCTA ? (
              <button 
                onClick={() => onViewDetails(item)} 
                className="flex items-center gap-1 text-sm bg-waras-lime text-waras-asphalt px-4 py-2 rounded-md font-medium hover:bg-waras-lime/90 transition-colors"
              >
                Order sekarang <ChevronRight size={16} />
              </button>
            ) : (
              <button 
                onClick={() => onViewDetails(item)} 
                className="flex items-center gap-1 text-sm bg-waras-asphalt/80 border border-white/10 px-3 py-1.5 rounded-md text-white/70 hover:text-white transition-colors hover:bg-waras-asphalt/90"
              >
                Lihat detail <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
