import React from "react";

const Menu: React.FC = () => {
  const menuCategories = [
    {
      title: "Chicken Starters",
      color: "text-highlight",
      dot: "text-red-500",
      items: [
        { name: "Chicken Lollipop", price: "₹220" },
        { name: "Chilli Chicken", price: "₹200" },
        { name: "Dragon Chicken", price: "₹240" },
        { name: "Chicken Drumsticks", price: "₹220" },
        { name: "Chicken Kababs (3 pcs)", price: "₹210" },
      ],
    },
    {
      title: "Seafood & Mutton Starters",
      color: "text-accent",
      dot: "text-orange-400",
      items: [
        { name: "Apollo Fish", price: "₹240" },
        { name: "Loose Prawn", price: "₹280" },
        { name: "Mutton 65", price: "₹320" },
        { name: "Chilli Prawns", price: "₹250" },
        { name: "RR Mutton", price: "₹320" },
        { name: "Mutton Fry", price: "₹300" },
        { name: "Prawn 65", price: "₹260" },
      ],
    },
    {
      title: "Biryanis",
      color: "text-highlight",
      dot: "text-yellow-400",
      items: [
        { name: "Chicken Dum Biryani", price: "₹280" },
        { name: "Chicken Fry Piece Biryani", price: "₹260" },
        { name: "Chicken Lollipop Biryani", price: "₹350" },
        { name: "Sitara SP Biryani", price: "₹400" },
        { name: "Mutton SP Biryani", price: "₹400" },
        { name: "Prawns SP Biryani", price: "₹400" },
        { name: "Kamju Pitta Biryani", price: "₹300" },
        { name: "Kunda Biryani Live", price: "₹350" },
        { name: "Kunda Biryani Mutton", price: "₹450" },
        { name: "Bucket Biryani (Family Pack)", price: "₹600" },
        { name: "Chitti Mutyala Kodi Pulao", price: "₹300" },
        { name: "Mixed Pulao", price: "₹300" },
        { name: "Mughalai Pulao", price: "₹250" },
      ],
    },
    {
      title: "Fried Rice",
      color: "text-accent",
      dot: "text-green-500",
      items: [
        { name: "Chicken Fried Rice", price: "₹240" },
        { name: "Mughalai Fried Rice", price: "₹300" },
        { name: "Mixed Fried Rice", price: "₹350" },
      ],
    },
  ];

  const combos = [
    {
      name: "Mini Combo",
      price: "₹799",
      persons: "2 Persons",
      items: [
        "Chicken Fry Biryani",
        "2 Kababs",
        "Mutton",
        "Prawns",
        "2 Soft Drinks",
        "2 Milkshake",
        "2 Ice Creams",
      ],
    },
    {
      name: "Family Combo",
      price: "₹1599",
      persons: "4 Persons",
      items: [
        "Mutton (Fry or Curry)",
        "Prawn (Fry or Curry)",
        "Chicken (Fry or Curry)",
        "Fish (Fry or Curry)",
        "Unlimited Biryani",
        "Starter",
        "4 Soft Drinks",
        "4 Milkshake",
        "4 Ice Creams",
      ],
    },
    {
      name: "Party Combo",
      price: "₹1999",
      persons: "6 Persons",
      items: [
        "Mutton (Fry or Curry) ×2",
        "Prawn (Fry or Curry) ×2",
        "Chicken (Fry or Curry) ×2",
        "Fish (Fry or Curry) ×2",
        "Unlimited Biryani",
        "2 Starters",
        "6 Soft Drinks",
        "6 Milkshakes",
        "6 Ice Creams",
      ],
    },
  ];

  return (
    <section id="menu" className="bg-secondary relative py-24">
      {/* Decorative Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto relative z-10 px-6">
        <h2 className="section-title reveal">Our Elegant Menu</h2>
        <p className="section-subtitle reveal">
          Discover our premium selection of delicious dishes.
        </p>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-primary/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl reveal"
            >
              <h3
                className={`text-3xl font-heading ${category.color} mb-8 text-center border-b border-gray-800 pb-4`}
              >
                <span className={`${category.dot} mr-3 text-2xl`}>●</span>
                {category.title}
              </h3>

              <ul className="space-y-5">
                {category.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center group"
                  >
                    <span
                      className={`text-lg text-gray-200 font-medium group-hover:${category.color} transition font-body tracking-wide`}
                    >
                      {item.name}
                    </span>

                    <div className="flex-1 border-b border-dashed border-gray-700 mx-4 opacity-30"></div>

                    <span className={`${category.color} font-semibold`}>
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Combos */}
        <div className="mt-20 max-w-7xl mx-auto">
          <h2 className="section-title reveal">Special Combos</h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            {combos.map((combo, index) => (
              <div
                key={index}
                className="bg-primary/50 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 shadow-2xl reveal"
              >
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-heading text-accent">
                    {combo.name}
                  </h3>
                  <p className="text-4xl font-bold text-highlight mt-3">
                    {combo.price}
                  </p>
                  <p className="text-gray-400 mt-2">{combo.persons}</p>
                </div>

                <ul className="space-y-3">
                  {combo.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-200 flex items-start gap-3"
                    >
                      <span className="text-accent mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;