import React from 'react';

const Specials: React.FC = () => {
  const specials = [
    {
      id: 1,
      name: "Kunda Biryani",
      desc: "Authentic pot biryani slow-cooked with aromatic spices and premium meat.",
      img: "/images/kunda-biryani.png",
      badge: "Must Try",
    },
    {
      id: 2,
      name: "Mix Biryani",
      desc: "A rich blend of chicken, mutton, and prawns in our signature biryani.",
      img: "/images/mix-biryani.png",
    },
    {
      id: 3,
      name: "Bucket Biryani",
      desc: "A massive, festive bucket of our signature biryani, perfect for sharing.",
      img: "/images/bucket-biryani.png",
    },
    {
      id: 4,
      name: "Veg & Non-Veg Meals",
      desc: "A grand Thali featuring our finest selection of veg and non-veg delicacies.",
      img: "/images/mixed-meals.png",
    }
  ];

  return (
    <section id="specials" className="bg-primary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Our Specials</h2>
        <p className="section-subtitle reveal text-gray-400">Discover our chef's highly recommended signature dishes.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specials.map((dish) => (
            <div key={dish.id} className="card group relative reveal">
              {/* Image */}
              <div className="h-56 lg:h-48 overflow-hidden relative">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-90"></div>
                
                {dish.badge && (
                  <div className="absolute top-4 right-4 bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                    {dish.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10 -mt-16 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                  {dish.name}
                </h3>
                <p className="text-sm text-gray-400 font-light line-clamp-3">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
