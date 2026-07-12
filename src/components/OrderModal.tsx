import React, { useState, useMemo, useEffect } from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart, Utensils, TrendingUp } from 'lucide-react';

interface MenuItem {
  name: string;
  price: number;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
  id: string;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, phoneNumber }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('Chicken Starters');
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuData = [
    {
      title: "Chicken Starters",
      color: "text-highlight",
      dot: "text-red-500",
      items: [
        { name: "Chicken Lollipop", price: 220 },
        { name: "Chilli Chicken", price: 200 },
        { name: "Dragon Chicken", price: 240 },
        { name: "Chicken Drumsticks", price: 220 },
        { name: "Chicken Kababs (3 pcs)", price: 210 },
      ],
    },
    {
      title: "Seafood & Mutton Starters",
      color: "text-accent",
      dot: "text-orange-400",
      items: [
        { name: "Apollo Fish", price: 240 },
        { name: "Loose Prawn", price: 280 },
        { name: "Mutton 65", price: 320 },
        { name: "Chilli Prawns", price: 250 },
        { name: "RR Mutton", price: 320 },
        { name: "Mutton Fry", price: 300 },
        { name: "Prawn 65", price: 260 },
      ],
    },
    {
      title: "Biryanis",
      color: "text-highlight",
      dot: "text-yellow-400",
      items: [
        { name: "Chicken Dum Biryani", price: 280 },
        { name: "Chicken Fry Piece Biryani", price: 260 },
        { name: "Chicken Lollipop Biryani", price: 350 },
        { name: "Sitara SP Biryani", price: 400 },
        { name: "Mutton SP Biryani", price: 400 },
        { name: "Prawns SP Biryani", price: 400 },
        { name: "Kamju Pitta Biryani", price: 300 },
        { name: "Kunda Biryani Live", price: 350 },
        { name: "Kunda Biryani Mutton", price: 450 },
        { name: "Bucket Biryani (Family Pack)", price: 600 },
        { name: "Chitti Mutyala Kodi Pulao", price: 300 },
        { name: "Mixed Pulao", price: 300 },
        { name: "Mughalai Pulao", price: 250 },
      ],
    },
    {
      title: "Fried Rice",
      color: "text-accent",
      dot: "text-green-500",
      items: [
        { name: "Chicken Fried Rice", price: 240 },
        { name: "Mughalai Fried Rice", price: 300 },
        { name: "Mixed Fried Rice", price: 350 },
      ],
    },
  ];

  const deliveryFee = 50;

  const currentCategoryItems = useMemo(() => {
    const category = menuData.find(cat => cat.title === activeCategory);
    return category?.items || [];
  }, [activeCategory]);

  const addToCart = (item: { name: string; price: number }) => {
    const id = `${item.name}-${Math.random()}`;
    const existingItem = cart.find(
      (cartItem) => cartItem.name === item.name && cartItem.category === activeCategory
    );

    // Animate the item
    setAnimatingItems(prev => new Set(prev).add(item.name));
    setTimeout(() => {
      setAnimatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.name);
        return newSet;
      });
    }, 500);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === existingItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          category: activeCategory,
          quantity: 1,
          id,
        },
      ]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const total = subtotal + deliveryFee;

  const handleOrderNow = () => {
    if (cart.length === 0) {
      alert('Please add items to your order');
      return;
    }

    let message = '🍽️ *Hey, I want to order these items from Sitara Restaurant:*\n\n';
    
    cart.forEach((item) => {
      message += `${item.name}\n`;
      message += `   Quantity: ${item.quantity} × ₹${item.price}\n`;
      message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
    });

    message += `📋 *Order Summary:*\n`;
    message += `Subtotal: ₹${subtotal}\n`;
    message += `Delivery Fee: ₹${deliveryFee}\n`;
    message += `*Total: ₹${total}*\n\n`;
    message += `✅ Please confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-all duration-300" onClick={onClose}>
      <div 
        className="w-full h-screen md:h-auto md:max-h-[90vh] md:rounded-3xl glass-nav flex flex-col overflow-hidden shadow-2xl border border-gray-700/50 transform transition-all duration-300 animate-slideInUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-accent/20 via-highlight/20 to-accent/10 px-6 py-5 flex justify-between items-center border-b border-gray-700/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-accent to-highlight blur-3xl -z-10"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="p-2 bg-gradient-to-br from-accent to-highlight rounded-full">
              <Utensils className="text-primary" size={24} />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-light">Order Now</h2>
              <p className="text-xs text-accent font-semibold">Sri Sitara Restaurant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700/50 rounded-full transition-all transform hover:scale-110"
          >
            <X size={28} className="text-text-light" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Menu Section */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Category Tabs with Scrollbar Hidden */}
            <div className="border-b border-gray-700/30 overflow-x-auto hide-scrollbar bg-gray-900/30">
              <div className="flex gap-2 p-4 min-w-max md:min-w-full">
                {menuData.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => setActiveCategory(category.title)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all font-semibold text-sm md:text-base transform hover:scale-105 ${
                      activeCategory === category.title
                        ? 'bg-gradient-to-r from-accent to-highlight text-primary shadow-lg scale-105'
                        : 'bg-gray-700/30 text-text-light hover:bg-gray-600/40'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 hide-scrollbar">
              <div className="grid grid-cols-1 gap-3">
                {currentCategoryItems.map((item) => {
                  const cartItem = cart.find((c) => c.name === item.name && c.category === activeCategory);
                  const isAnimating = animatingItems.has(item.name);
                  return (
                    <div
                      key={item.name}
                      className={`bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/40 rounded-xl p-4 flex justify-between items-center hover:bg-gray-800/80 transition-all transform hover:scale-102 ${
                        isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
                      }`}
                    >
                      <div className="flex-1">
                        <h3 className="text-text-light font-semibold text-sm md:text-base">{item.name}</h3>
                        <p className="text-accent font-bold text-lg">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {cartItem ? (
                          <div className="flex items-center gap-2 bg-gradient-to-r from-accent/30 to-highlight/20 rounded-lg p-1.5 border border-accent/40">
                            <button
                              onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
                              className="p-1 hover:bg-accent/40 rounded transition-colors transform hover:scale-110"
                            >
                              <Minus size={18} className="text-accent" />
                            </button>
                            <span className="w-6 text-center text-text-light font-bold text-lg">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
                              className="p-1 hover:bg-accent/40 rounded transition-colors transform hover:scale-110"
                            >
                              <Plus size={18} className="text-accent" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-gradient-to-r from-accent to-highlight hover:from-accent/80 hover:to-highlight/80 text-primary p-2 rounded-lg transition-all transform hover:scale-110 shadow-lg"
                          >
                            <Plus size={22} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="hidden lg:flex lg:flex-col w-96 border-l border-gray-700/40 bg-gradient-to-b from-gray-900/60 to-gray-950/40 overflow-hidden">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 border-b border-gray-700/40 hide-scrollbar">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="text-accent" size={24} />
                <h3 className="text-xl font-bold text-accent">Your Cart</h3>
                {cart.length > 0 && (
                  <span className="ml-auto bg-accent text-primary px-2 py-1 rounded-full text-sm font-bold">
                    {cart.length}
                  </span>
                )}
              </div>
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-text-light">
                  <ShoppingCart size={50} className="mb-3 opacity-30" />
                  <p className="text-sm text-center">No items added yet<br/>Start by selecting items</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-gradient-to-r from-gray-800/70 to-gray-900/50 rounded-lg p-3 border border-gray-700/50 hover:border-accent/40 transition-all cart-item">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xs font-semibold text-text-light flex-1 line-clamp-2">{item.name}</h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-red-500/30 rounded transition-colors transform hover:scale-110 ml-2"
                        >
                          <Trash2 size={14} className="text-red-400" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center text-xs text-text-light/70 mb-2">
                        <span>₹{item.price} × {item.quantity}</span>
                        <span className="font-bold text-accent">₹{item.price * item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-gray-700/50 rounded p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-accent/30 rounded flex-1 transition-colors transform hover:scale-110"
                        >
                          <Minus size={14} className="text-accent" />
                        </button>
                        <span className="text-center text-text-light font-bold flex-1 text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-accent/30 rounded flex-1 transition-colors transform hover:scale-110"
                        >
                          <Plus size={14} className="text-accent" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bill Section with Premium Styling */}
            <div className="p-5 border-b border-gray-700/40 bg-gradient-to-b from-gray-900/50 to-gray-950/70">
              <div className="space-y-3 text-sm text-text-light mb-5">
                <div className="flex justify-between py-2 border-b border-gray-700/30">
                  <span className="flex items-center gap-2">
                    <span>Subtotal</span>
                  </span>
                  <span className="font-bold text-lg">₹{subtotal}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-700/30">
                  <span className="flex items-center gap-2">
                    <span>🚗 Delivery</span>
                  </span>
                  <span className="font-bold text-lg text-accent">₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between py-3 mt-3 bg-gradient-to-r from-accent/10 to-highlight/10 px-3 rounded-lg border border-accent/20">
                  <span className="font-bold text-lg text-text-light">Total Amount:</span>
                  <span className="font-bold text-xl text-accent">₹{total}</span>
                </div>
              </div>
              <button
                onClick={handleOrderNow}
                disabled={cart.length === 0}
                className="w-full bg-gradient-to-r from-accent to-highlight hover:from-accent/90 hover:to-highlight/90 disabled:from-gray-700 disabled:to-gray-700 text-primary font-bold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <TrendingUp size={20} />
                Order on WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Cart Footer */}
        <div className="lg:hidden border-t border-gray-700/40 bg-gradient-to-t from-gray-950/80 to-gray-900/50 p-4">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 text-center border border-gray-700/30">
              <p className="text-text-light/70 text-xs">Total Items</p>
              <p className="text-xl font-bold text-accent">{cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-3 text-center border border-gray-700/30">
              <p className="text-text-light/70 text-xs">Subtotal</p>
              <p className="text-xl font-bold text-text-light">₹{subtotal}</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-highlight/20 rounded-lg p-3 text-center border border-accent/30">
              <p className="text-text-light/70 text-xs">Total</p>
              <p className="text-xl font-bold text-accent">₹{total}</p>
            </div>
          </div>
          <button
            onClick={handleOrderNow}
            disabled={cart.length === 0}
            className="w-full bg-gradient-to-r from-accent to-highlight hover:from-accent/90 hover:to-highlight/90 disabled:from-gray-700 disabled:to-gray-700 text-primary font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <TrendingUp size={20} />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
