import React, { useState, useEffect } from 'react';

const Quotes: React.FC = () => {
  const quotes = [
    "Good Food is Good Mood.",
    "Every Meal is Made with Love.",
    "Taste Brings Families Together.",
    "Fresh Food. Happy Moments.",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>

      <div className="relative z-10 text-center px-4 w-full max-w-none reveal">
        <span className="text-accent text-6xl font-serif block mb-4 opacity-50">"</span>
        <div className="h-24 flex items-center justify-center relative w-full">
          {quotes.map((quote, idx) => (
            <h3
              key={idx}
              className={`absolute w-full left-1/2 -translate-x-1/2 text-center whitespace-nowrap text-2xl md:text-4xl lg:text-5xl font-heading text-white transition-all duration-1000 ${idx === currentIndex
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
            >
              {quote}
            </h3>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes;
