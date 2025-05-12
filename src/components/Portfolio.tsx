
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
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
import { ChevronRight, ImageIcon } from 'lucide-react';

// Enhanced portfolio data with additional details for the modal
const portfolioItems = [
  {
    id: 1,
    client: "UMKM snack rumah ungu",
    problem: "Dikira rumahnya ga ungu beneran",
    solution: "Branding ulang + logo rumah snack",
    colorClass: "bg-waras-orange",
    imageText: "Mockup stiker kemasan",
    detailedDescription: "Klien kami menghadapi masalah identitas brand yang membingungkan. Banyak konsumen mengira nama 'Rumah Ungu' hanya sebutan biasa, bukan merek sebenarnya. Kami melakukan branding ulang dengan menciptakan logo rumah berwarna ungu yang ikonik dan menarik.",
    services: ["Desain Logo", "Branding", "Packaging Design"],
    images: [
      { id: 1, alt: "Logo Rumah Ungu", caption: "Logo baru dengan warna ungu yang khas" },
      { id: 2, alt: "Packaging Stiker", caption: "Stiker kemasan dengan tema rumah ungu" },
      { id: 3, alt: "Brand Guide", caption: "Panduan penggunaan brand untuk konsistensi" }
    ]
  },
  {
    id: 2,
    client: "Zaara Brownies",
    problem: "Owner gaptek gabisa bikin marketing",
    solution: "Identitas visual + social media campaign bonus packaging",
    colorClass: "bg-waras-blue",
    imageText: "Mockup packaging dan advertisement",
    detailedDescription: "Pemilik Zaara Brownies kesulitan memasarkan produknya di dunia digital karena keterbatasan pengetahuan teknologi. Kami membuat solusi komprehensif dengan identitas visual yang kuat dan strategi media sosial yang mudah dijalankan.",
    services: ["Identitas Visual", "Social Media Campaign", "Packaging Design", "Marketing Strategy"],
    images: [
      { id: 1, alt: "Zaara Logo", caption: "Logo baru dengan tema brownies premium" },
      { id: 2, alt: "Kemasan Brownies", caption: "Desain kemasan menarik yang memperlihatkan produk" },
      { id: 3, alt: "Media Sosial", caption: "Contoh konten media sosial yang siap pakai" }
    ]
  }
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
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
                  <div className="relative z-10 text-center px-8">
                    <ImageIcon className="mx-auto mb-2 opacity-50" size={32} />
                    <p className="font-bold italic">
                      [ {item.imageText} ]
                    </p>
                  </div>
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
                    <button 
                      onClick={() => openModal(item)} 
                      className="flex items-center gap-1 text-sm bg-waras-asphalt/80 border border-white/10 px-3 py-1.5 rounded-md text-white/70 hover:text-white transition-colors hover:bg-waras-asphalt/90"
                    >
                      Lihat detail <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedItem && (
          <DialogContent className="bg-waras-asphalt border-white/10 text-white max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bebas">
                {selectedItem.client} 
                <span className={`inline-block ml-3 px-3 py-0.5 rounded text-sm ${selectedItem.colorClass === 'bg-waras-orange' ? 'bg-waras-orange/20 text-waras-orange' : selectedItem.colorClass === 'bg-waras-blue' ? 'bg-waras-blue/20 text-waras-blue' : 'bg-waras-lime/20 text-waras-lime'}`}>
                  Case Study
                </span>
              </DialogTitle>
              <DialogDescription className="text-white/70">
                Permasalahan: <span className="text-waras-orange">{selectedItem.problem}</span>
              </DialogDescription>
            </DialogHeader>
            
            {/* Content */}
            <div className="mt-4 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold mb-2">Deskripsi Masalah & Solusi</h3>
                <p className="text-white/80">{selectedItem.detailedDescription}</p>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-2">Layanan yang Diberikan</h3>
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
                <h3 className="text-lg font-bold mb-4">Hasil Karya</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {selectedItem.images.map((image) => (
                      <CarouselItem key={image.id}>
                        <div className="p-1">
                          <div className="bg-waras-asphalt/70 border border-white/5 rounded-lg overflow-hidden">
                            <div className="h-56 flex items-center justify-center bg-gradient-to-br from-black/20 to-black/5">
                              <div className="text-center p-8">
                                <ImageIcon size={48} className="mx-auto mb-2 opacity-40" />
                                <p className="font-bold text-xl">{image.alt}</p>
                                <p className="text-white/60 mt-2">{image.caption}</p>
                              </div>
                            </div>
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
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Portfolio;
