import React, { useState } from 'react';
import { X } from 'lucide-react';
import receptionImg from '../assets/reception.png';
import table1Img from '../assets/table1.png';
import table2Img from '../assets/table2.png';
import customersImg from '../assets/items.png';

const Gallery: React.FC = () => {
  const images = [
    { src: receptionImg, alt: 'Restaurant reception area' },
    { src: table1Img, alt: 'Restaurant dining table view' },
    { src: table2Img, alt: 'Table setup and seating' },
    { src: customersImg, alt: 'Guests enjoying the restaurant atmosphere' },
  ];

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Our Gallery</h2>
        <p className="section-subtitle reveal">A look inside Sri Sitara — reception, dining tables, and customer seating.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3] reveal"
              onClick={() => setLightboxImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white bg-accent/80 p-3 rounded-full transform scale-0 group-hover:scale-100 transition duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-accent transition">
            <X size={40} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Fullscreen preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
