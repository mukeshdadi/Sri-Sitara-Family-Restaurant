import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-primary py-24">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Visit Us</h2>
        <p className="section-subtitle reveal">Come and experience the authentic taste.</p>

        <div className="grid lg:grid-cols-2 gap-12 bg-secondary rounded-3xl overflow-hidden border border-gray-800 shadow-2xl reveal">
          
          {/* Contact Details */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-heading text-white mb-8">Sri Sitara Family Restaurant</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent shrink-0 border border-gray-800">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Location</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Yanam Road, Annaipeta<br/>
                    Draksharama, Ramachandrapuram<br/>
                    Konaseema, Andhra Pradesh<br/>
                    533262
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-highlight shrink-0 border border-gray-800">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">Phone Number</h4>
                  <p className="text-gray-400 font-light">9505634433</p>
                </div>
              </div>
            </div>

            <a
  href="https://www.google.com/maps?q=16.7894451,82.0667358"
  target="_blank"
  rel="noreferrer"
  className="
    mt-12
    inline-flex
    items-center
    justify-center
    gap-3
    whitespace-nowrap
    rounded-full
    border-2
    border-accent
    px-8
    py-4
    text-accent
    font-semibold
    transition-all
    duration-300
    hover:bg-accent
    hover:text-primary
    w-full
    sm:w-auto
  "
>
  <Navigation size={20} className="shrink-0" />
  <span>Get Directions</span>
</a>
          </div>

          {/* Map (Placeholder for iframe) */}
          <div className="h-96 lg:h-auto min-h-[400px] relative grayscale hover:grayscale-0 transition duration-1000">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3819.743255980202!2d82.06675!3d16.7894444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ3JzIyLjAiTiA4MsKwMDQnMDAuMyJF!5e0!3m2!1sen!2sin!4v1783745771420!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="Sri Sitara Family Restaurant"
    className="absolute inset-0"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
