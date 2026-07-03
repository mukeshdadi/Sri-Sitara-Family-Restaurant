import React from 'react';
import { Flame, Star, Heart, ChefHat } from 'lucide-react';

const Favorites: React.FC = () => {
  const favorites = [
    { id: 1, title: "Best Seller", name: "Kunda Biryani", icon: <Flame className="text-highlight" size={24} /> },
    { id: 2, title: "Most Ordered", name: "Mix Biryani", icon: <Star className="text-accent" size={24} /> },
    { id: 3, title: "Family Favorite", name: "Fry Piece Biryani", icon: <Heart className="text-red-500" size={24} /> },
    { id: 4, title: "Chef's Special", name: "Chicken Dum Biryani", icon: <ChefHat className="text-gray-300" size={24} /> }
  ];

  return (
    <section className="bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Customer Favorites</h2>
        <p className="section-subtitle reveal">The dishes our customers keep coming back for.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map((fav) => (
            <div 
              key={fav.id} 
              className="bg-secondary rounded-xl p-6 border border-gray-800 flex flex-col items-center justify-center text-center reveal hover:border-accent transition duration-300 group shadow-lg"
            >
              <div className="bg-primary p-4 rounded-full mb-4 group-hover:scale-110 transition duration-300 shadow-inner">
                {fav.icon}
              </div>
              <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">{fav.title}</h4>
              <h3 className="text-xl font-heading text-white group-hover:text-accent transition">{fav.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
