import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-900 pt-20 pb-8 text-gray-400 text-sm">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Logo" className="h-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <h3 className="text-2xl font-heading text-white">Sri Sitara</h3>
            </div>
            <p className="mb-6 leading-relaxed font-light">
              Veg & Non-Veg Family Restaurant.<br />
              Where Every Meal Becomes a Celebration.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919505634433" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-accent hover:text-white transition">
                <Phone size={18} />
              </a>
              <a href="https://www.instagram.com/sri_sitara_familly_restarant?utm_source=qr&igsh=bW1mbDk3emhrc3Y4" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-accent hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-accent hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#menu" className="hover:text-accent transition">Menu</a></li>
              <li><a href="#gallery" className="hover:text-accent transition">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-accent transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact Information</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-accent mb-1 font-semibold">Phone</p>
                <p>9505634433</p>
              </div>
              <div>
                <p className="text-accent mb-1 font-semibold">Address</p>
                <p className="leading-relaxed">
                  Yanam Road, Annaipeta<br/>
                  Draksharama, Ramachandrapuram<br/>
                  Konaseema, Andhra Pradesh - 533262
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom */}
        {/* Bottom */}
<div className="border-t border-gray-900 pt-8 flex justify-center items-center">
  <p className="text-white text-sm font-medium tracking-wide text-center">
    mukeshtech.in @{new Date().getFullYear()}
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
