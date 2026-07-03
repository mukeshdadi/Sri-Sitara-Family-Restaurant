import React from 'react';
import { Truck } from 'lucide-react';

const HomeDelivery: React.FC = () => {
  // const handleOrder = () => {
  //   window.open('https://wa.me/919505634433', '_blank');
  // };

  return (
    <section className="bg-secondary relative overflow-hidden py-24">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="bg-primary border border-gray-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl reveal">
          
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-highlight rounded-full flex items-center justify-center text-white mb-8 shadow-lg shadow-accent/20">
              <Truck size={40} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading mb-6">
              Home Delivery Available
            </h2>
            
            <p className="text-xl text-gray-300 font-light mb-8 max-w-lg leading-relaxed">
              Enjoy your favorite authentic dishes at home. <br/>
              <span className="text-accent font-semibold">Fresh. Hot. Fast Delivery.</span>
            </p>
            
            <button 
            // onClick={handleOrder}
             className="btn-primary text-xl px-10 py-4 shadow-[0_0_30px_rgba(230,126,34,0.3)] hover:shadow-[0_0_40px_rgba(230,126,34,0.5)]">
              Order on WhatsApp
            </button>
            <p className="mt-4 text-gray-400 flex items-center gap-2">
              <span>📞</span> 9505634433
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <img src="/images/mix-biryani.png" alt="Delivery food" className="relative z-10 w-full h-auto rounded-full shadow-2xl border-4 border-gray-800 object-cover aspect-square hover:rotate-3 transition duration-500" />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeDelivery;
