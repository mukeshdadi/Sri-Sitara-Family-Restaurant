import React from 'react';

const Menu: React.FC = () => {
  const vegMenu = [
    { name: "Veg Meals", price: "₹180" },
    { name: "Paneer Curry", price: "₹220" },
    { name: "Mushroom Curry", price: "₹200" },
    { name: "Dal Fry", price: "₹120" },
    { name: "Jeera Rice", price: "₹140" },
    { name: "Curd Rice", price: "₹90" }
  ];

  const nonVegMenu = [
    { name: "Chicken Dum Biryani", price: "₹280" },
    { name: "Kunda Biryani", price: "₹350" },
    { name: "Mix Biryani", price: "₹380" },
    { name: "Fry Piece Biryani", price: "₹300" },
    { name: "Chicken Curry", price: "₹240" },
    { name: "Chicken Fry", price: "₹260" },
    { name: "Mutton Curry", price: "₹380" },
    { name: "Egg Biryani", price: "₹180" },
    { name: "Fish Fry", price: "₹290" },
    { name: "Prawns Fry", price: "₹320" }
  ];

  return (
    <section id="menu" className="bg-secondary relative py-24">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title reveal">Our Elegant Menu</h2>
        <p className="section-subtitle reveal">Explore our wide variety of authentic dishes.</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Veg Menu */}
          <div className="bg-primary/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl reveal">
            <h3 className="text-3xl font-heading text-accent mb-8 text-center border-b border-gray-800 pb-4">
              <span className="text-green-500 mr-3 text-2xl">●</span>
              Vegetarian
            </h3>
            <ul className="space-y-6">
              {vegMenu.map((item, index) => (
                <li key={index} className="flex justify-between items-center group">
                  <span className="text-lg text-gray-200 font-medium group-hover:text-accent transition font-body tracking-wide">
                    {item.name}
                  </span>
                  <div className="flex-1 border-b border-dashed border-gray-700 mx-4 opacity-30 group-hover:border-accent transition"></div>
                  <span className="text-accent font-semibold group-hover:scale-110 transition">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non Veg Menu */}
          <div className="bg-primary/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl reveal">
            <h3 className="text-3xl font-heading text-highlight mb-8 text-center border-b border-gray-800 pb-4">
              <span className="text-red-500 mr-3 text-2xl">●</span>
              Non-Vegetarian
            </h3>
            <ul className="space-y-6">
              {nonVegMenu.map((item, index) => (
                <li key={index} className="flex justify-between items-center group">
                  <span className="text-lg text-gray-200 font-medium group-hover:text-highlight transition font-body tracking-wide">
                    {item.name}
                  </span>
                  <div className="flex-1 border-b border-dashed border-gray-700 mx-4 opacity-30 group-hover:border-highlight transition"></div>
                  <span className="text-highlight font-semibold group-hover:scale-110 transition">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
