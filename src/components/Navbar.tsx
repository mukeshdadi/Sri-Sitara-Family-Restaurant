import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/SS logo.png";
import OrderModal from './OrderModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: '🏠' },
    { name: 'Menu', href: '#menu', icon: '🍽' },
    { name: 'Gallery', href: '#gallery', icon: '📸' },
    { name: 'Reviews', href: '#reviews', icon: '⭐' },
    { name: 'Contact', href: '#contact', icon: '📍' }
  ];

  const handleOrderNow = () => {
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-5 flex justify-between items-center">
        {/* Logo Section */}
          <div className="flex items-center gap-4">
  <img
    src={logo}
    alt="Sri Sitara Family Restaurant"
    className="h-12 w-auto"
  />       
   <div>
            <h1 className="text-2xl font-bold text-accent" style={{ fontFamily: 'var(--font-heading)' }}>Sri Sitara</h1>
            <p className="text-xs text-text-light mt-0.5">Family Restaurant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="flex items-center gap-2 text-text-light hover:text-accent transition font-medium">
                  <span>{link.icon}</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
          onClick={handleOrderNow}
           className="btn-primary">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-text-light hover:text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-nav flex flex-col py-5 px-5 gap-4 border-t border-gray-800">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="flex items-center gap-3 text-lg text-text-light hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.icon}</span> {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
          onClick={handleOrderNow}
           className="btn-primary w-full mt-4 text-center">
            Order Now
          </button>
        </div>
      )}
    </nav>
    <OrderModal 
      isOpen={isOrderModalOpen} 
      onClose={() => setIsOrderModalOpen(false)}
      phoneNumber="919505634433"
    />
    </>
  );
};

export default Navbar;
