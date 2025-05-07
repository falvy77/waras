
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState<null | 'submitting' | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after some time
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative noise">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-waras-orange opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-waras-purple opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bebas mb-6 text-center">
            <span className="text-waras-lime">Ngobrol Dulu</span>, 
            <span className="text-white"> Nego Belakangan</span>
          </h2>
          
          <p className="text-xl text-center mb-12 text-gray-300">
            Kalau kamu baca ini sampai sini, itu tanda semesta. Kontak kami.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Isi Form Buat Curhat</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nama (boleh nama panggilan)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="Siapa namamu?"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email (beneran ya)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="email@kamu.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mau cerita apa ke kami?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="Boleh cerita tentang brand kamu atau tantangan yang sedang dihadapi..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="waras-button waras-button-primary w-full flex justify-center items-center"
                >
                  {submitStatus === 'submitting' ? (
                    <span>Mengirim...</span>
                  ) : submitStatus === 'success' ? (
                    <span>Terkirim! Kami akan hubungi kamu.</span>
                  ) : (
                    <span>Kirim Pesan</span>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="mt-3 text-waras-orange text-sm">
                    Ada kesalahan saat mengirim. Coba lagi yuk!
                  </p>
                )}
              </form>
            </div>
            
            {/* Contact Details */}
            <div>
              <div className="mb-8 bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Kontak Langsung</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/6282281702040" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-waras-asphalt hover:bg-waras-asphalt/70 rounded-md transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <span className="text-white">WA</span>
                    </div>
                    <span>Chat di WhatsApp</span>
                  </a>
                  
                  <a 
                    href="https://instagram.com/studiowaras" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-waras-asphalt hover:bg-waras-asphalt/70 rounded-md transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center flex-shrink-0">
                      <span className="text-white">IG</span>
                    </div>
                    <span>Lempar DM ke IG</span>
                  </a>
                  
                  <a 
                    href="mailto:hello@waras.studio" 
                    className="flex items-center gap-3 p-3 bg-waras-asphalt hover:bg-waras-asphalt/70 rounded-md transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-waras-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-white">@</span>
                    </div>
                    <span>Email ke hello@waras.studio</span>
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-waras-purple/30 backdrop-blur-sm border border-waras-purple/30 rounded-lg">
                <p className="italic text-gray-300 text-center">
                  "Kita bisa diskusikan ide gila kamu. Tapi jangan terlalu gila sampe lupa bayar invoice ya."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
