
import React from 'react';
import { PackageOpen, ImageIcon } from 'lucide-react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PortfolioItem } from './types';

interface PortfolioDetailModalProps {
  selectedItem: PortfolioItem | null;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ 
  selectedItem, 
  isModalOpen, 
  setIsModalOpen 
}) => {
  if (!selectedItem) return null;

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="bg-waras-asphalt border-white/10 text-white max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bebas">
            {selectedItem.client} 
            <span className={`inline-block ml-3 px-3 py-0.5 rounded text-sm ${selectedItem.colorClass === 'bg-waras-orange' ? 'bg-waras-orange/20 text-waras-orange' : selectedItem.colorClass === 'bg-waras-blue' ? 'bg-waras-blue/20 text-waras-blue' : 'bg-waras-lime/20 text-waras-lime'}`}>
              {selectedItem.isCTA ? 'Your Next Project' : 'Case Study'}
            </span>
          </DialogTitle>
          <DialogDescription className="text-white/70">
            {selectedItem.isCTA ? (
              'Mari bekerja sama membuat brand kamu menjadi luar biasa!'
            ) : (
              <>Permasalahan: <span className="text-waras-orange">{selectedItem.problem}</span></>
            )}
          </DialogDescription>
        </DialogHeader>
        
        {/* Content */}
        <div className="mt-4 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-bold mb-2">{selectedItem.isCTA ? 'Kami Siap Membantu' : 'Deskripsi Masalah & Solusi'}</h3>
            <p className="text-white/80">{selectedItem.detailedDescription}</p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-2">{selectedItem.isCTA ? 'Layanan yang Bisa Kami Berikan' : 'Layanan yang Diberikan'}</h3>
            <div className="flex flex-wrap gap-2">
              {selectedItem.services.map((service, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedItem.colorClass === 'bg-waras-orange' 
                    ? 'bg-waras-orange/20 text-waras-orange border border-waras-orange/30' 
                    : selectedItem.colorClass === 'bg-waras-blue'
                    ? 'bg-waras-blue/20 text-waras-blue border border-waras-blue/30'
                    : 'bg-waras-lime/20 text-waras-lime border border-waras-lime/30'
                  }`}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Image Carousel */}
          <div>
            <h3 className="text-lg font-bold mb-4">{selectedItem.isCTA ? 'Preview Hasil Potensial' : 'Hasil Karya'}</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {selectedItem.images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="p-1">
                      <div className="bg-waras-asphalt/70 border border-white/5 rounded-lg overflow-hidden">
                        {/* Show actual images if src is available */}
                        {image.src ? (
                          <div className="h-56 overflow-hidden">
                            <AspectRatio ratio={16/9} className="w-full h-full">
                              <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover" 
                              />
                            </AspectRatio>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
                              <div className="p-4 text-center">
                                <p className="font-bold text-xl">{image.alt}</p>
                                <p className="text-white/80 mt-1">{image.caption}</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="h-56 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/5">
                            <div className="text-center p-8">
                              <ImageIcon size={48} className="mx-auto mb-2 opacity-40" />
                              <p className="font-bold text-xl">{image.alt}</p>
                              <p className="text-white/60 mt-2">{image.caption}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4">
                <CarouselPrevious className="relative left-0 right-auto border-white/20 hover:bg-waras-asphalt/80 hover:border-white/40" />
                <CarouselNext className="relative left-0 right-auto border-white/20 hover:bg-waras-asphalt/80 hover:border-white/40" />
              </div>
            </Carousel>
          </div>
          
          {/* Call to Action Button - Only for CTA item */}
          {selectedItem.isCTA && (
            <div className="pt-4 flex justify-center">
              <button 
                className="bg-waras-lime text-waras-asphalt font-medium px-6 py-3 rounded-md flex items-center gap-2 hover:bg-waras-lime/90 transition-all"
                onClick={() => {
                  setIsModalOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <PackageOpen size={18} /> Mulai Proyek Kamu Sekarang
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetailModal;
