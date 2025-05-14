
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
            <span className="text-waras-lime">Chat First</span>, 
            <span className="text-white"> Business Later</span>
          </h2>
          
          <p className="text-xl text-center mb-12 text-gray-300">
            If you've read this far, it's a sign from the universe. Contact us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Fill Out The Form</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name (nickname is fine)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="What's your name?"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email (a real one please)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="email@yours.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    What would you like to tell us?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-waras-asphalt/80 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-waras-lime"
                    placeholder="Tell us about your brand or challenges you're facing..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                  className="waras-button waras-button-primary w-full flex justify-center items-center"
                >
                  {submitStatus === 'submitting' ? (
                    <span>Sending...</span>
                  ) : submitStatus === 'success' ? (
                    <span>Sent! We'll get back to you soon.</span>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <p className="mt-3 text-waras-orange text-sm">
                    There was an error sending your message. Let's try again!
                  </p>
                )}
              </form>
            </div>
            
            {/* Contact Details */}
            <div>
              <div className="mb-8 bg-waras-asphalt/50 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                
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
                    <span>Chat on WhatsApp</span>
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
                    <span>Send a DM on Instagram</span>
                  </a>
                  
                  <a 
                    href="mailto:hello@waras.studio" 
                    className="flex items-center gap-3 p-3 bg-waras-asphalt hover:bg-waras-asphalt/70 rounded-md transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-waras-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-white">@</span>
                    </div>
                    <span>Email at hello@waras.studio</span>
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-waras-purple/30 backdrop-blur-sm border border-waras-purple/30 rounded-lg">
                <p className="italic text-gray-300 text-center">
                  "We can discuss your wild ideas. But don't get too wild and forget to pay the invoice."
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
