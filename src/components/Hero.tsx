import React from 'react';

const Hero: React.FC = () => {
  const handleOrder = () => {
    window.open('https://wa.me/919505634433', '_blank');
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden" style={{ padding: 0 }}>
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-primary"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-5 flex flex-col items-center max-w-4xl mx-auto reveal active">
        <h3 className="text-highlight text-xl md:text-2xl font-medium tracking-wider uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          {/* Sri Sitara Family Restaurant */}
        </h3>
        
        <p className="text-gray-300 text-sm md:text-base tracking-[0.2em] uppercase mb-8">
          Veg & Non-Veg Family Restaurant
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-2xl">
          Experience the <span className="text-accent">Authentic Taste</span> of Andhra Cuisine
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
          Fresh Ingredients. Authentic Recipes. Unforgettable Taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <button 
          onClick={handleOrder} 
          className="btn-primary flex items-center gap-2 text-lg px-8 py-3 w-full sm:w-auto justify-center">
            Order on WhatsApp
          </button>
          <a href="#menu" className="btn-outline flex items-center gap-2 text-lg px-8 py-3 w-full sm:w-auto justify-center">
            View Menu
          </a>
        </div>

        {/* Happy Customers Badge */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <div className="flex text-accent text-xl">
            ★★★★★
          </div>
          <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">1000+ Happy Customers</p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#welcome" className="text-accent opacity-70 hover:opacity-100 transition">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
