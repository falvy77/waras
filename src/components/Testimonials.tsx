
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    text: "Gue pikir agensi ini nipu. Ternyata beneran bisa.",
    author: "Klien Beneran",
    color: "bg-waras-purple",
    rotation: "-rotate-2"
  },
  {
    id: 2,
    text: "Warna birunya bikin saya nangis, tapi hasil akhirnya cakep.",
    author: "Klien Sensitive",
    color: "bg-waras-orange",
    rotation: "rotate-2"
  },
  {
    id: 3,
    text: "Sempat khawatir karena desainernya suka ngomong sendiri, tapi deliverynya on point!",
    author: "Klien Yang Sabar",
    color: "bg-waras-lime",
    rotation: "-rotate-1",
    textColor: "text-waras-asphalt"
  },
  {
    id: 4,
    text: "Di revision ke-9 saya udah putus asa, tapi ternyata revision ke-10 langsung approve.",
    author: "Klien Perfeksionis",
    color: "bg-waras-pink",
    rotation: "rotate-1"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative noise overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-waras-purple opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-waras-blue opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bebas mb-16 text-center text-waras-pink">
          Testimoni Klien
        </h2>
        
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Mobile Testimonials (Carousel) */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div 
                      className={`${testimonial.color} ${testimonial.rotation} p-6 rounded-lg shadow-lg ${testimonial.textColor || 'text-white'}`}
                    >
                      <p className="text-lg mb-4">"{testimonial.text}"</p>
                      <p className="font-bold">— {testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-4">
              <button 
                onClick={prevTestimonial}
                className="bg-waras-asphalt/50 hover:bg-waras-asphalt border border-white/10 p-2 rounded-full"
              >
                &larr;
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`h-3 w-3 rounded-full ${
                      index === activeIndex ? 'bg-waras-lime' : 'bg-gray-500'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="bg-waras-asphalt/50 hover:bg-waras-asphalt border border-white/10 p-2 rounded-full"
              >
                &rarr;
              </button>
            </div>
          </div>
          
          {/* Desktop Testimonials (Grid) */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="transition-all duration-500"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`${testimonial.color} ${testimonial.rotation} p-6 rounded-lg shadow-lg hover:-translate-y-1 transition-transform ${testimonial.textColor || 'text-white'}`}
                >
                  <p className="text-xl mb-4">"{testimonial.text}"</p>
                  <p className="font-bold">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
