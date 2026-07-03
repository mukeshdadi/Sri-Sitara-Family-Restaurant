import React from 'react';
import { Leaf, Award, ShieldCheck, Heart, Clock, DollarSign, Truck, Utensils } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { icon: <Leaf size={32} />, title: "Fresh Ingredients", desc: "Farm fresh vegetables and premium meats" },
    { icon: <Utensils size={32} />, title: "Authentic Andhra Taste", desc: "Traditional recipes and authentic spices" },
    { icon: <ShieldCheck size={32} />, title: "Hygienic Kitchen", desc: "Strict hygiene protocols maintained" },
    { icon: <Award size={32} />, title: "FSSAI Certified", desc: "100% compliant with food safety standards" },
    { icon: <Heart size={32} />, title: "Family Friendly Dining", desc: "Comfortable ambiance for everyone" },
    { icon: <Clock size={32} />, title: "Quick Service", desc: "Fast and polite customer service" },
    { icon: <DollarSign size={32} />, title: "Affordable Prices", desc: "Premium taste at reasonable rates" },
    { icon: <Truck size={32} />, title: "Home Delivery Available", desc: "Hot food delivered to your doorstep" },
  ];

  return (
    <section id="features" className="bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title reveal">Why Choose Us</h2>
        <p className="section-subtitle reveal text-gray-400">Experience the best dining atmosphere in town.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-8 text-center flex flex-col items-center justify-center reveal group hover:bg-primary"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 font-heading group-hover:text-highlight transition">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-400 font-light">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
