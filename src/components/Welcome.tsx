import React from 'react';

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
              Welcome to <br />
              <span className="text-accent">Sri Sitara Family Restaurant</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
              Welcome to Sri Sitara Family Restaurant, where authentic Andhra flavors meet exceptional hospitality. Whether you're dining with family or friends, every meal is prepared with fresh ingredients, traditional recipes, and unforgettable taste.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">
              We proudly serve both vegetarian and non-vegetarian delicacies in a clean, comfortable, and family-friendly atmosphere.
            </p>
            
            <a href="#menu" className="text-accent font-semibold flex items-center gap-2 hover:text-highlight transition">
              Explore Our Menu 
              <span className="text-xl">→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="reveal img-hover-zoom rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(198,138,45,0.15)] relative max-w-lg mx-auto w-full">
            <img 
              src="/images/restaurant-interior.png" 
              alt="Sri Sitara Restaurant Interior" 
              className="w-full h-64 md:h-[400px] object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-highlight/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;
