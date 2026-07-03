import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop", // Spicy chicken fry
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", // Biryani
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop", // Chicken leg piece
    "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop", // Rich curry
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop", // Biryani pot
    "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=800&auto=format&fit=crop"  // Prawns
  ];

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Our Gallery</h2>
        <p className="section-subtitle reveal">A glimpse of our ambiance and authentic dishes.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-xl cursor-pointer group h-64 lg:h-56 reveal"
              onClick={() => setLightboxImage(img)}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
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
