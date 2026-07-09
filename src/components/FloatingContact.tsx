import React from 'react';

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4" style={{ position: 'fixed' }}>
      {/* Phone */}
      <a 
        href="tel:9505634433" 
        className="w-14 h-14 bg-highlight text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(230,126,34,0.6)] transition-all duration-300"
        title="Call Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/919505634433" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] transition-all duration-300"
        title="WhatsApp Us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 0C5.385 0 .003 5.378.003 12.015c0 2.12.55 4.195 1.597 6.02L.035 24l6.115-1.603c1.745.962 3.716 1.472 5.751 1.472 6.643 0 12.03-5.378 12.03-12.015C23.931 5.381 18.577 0 12.031 0zM12.031 21.84c-1.803 0-3.56-.484-5.111-1.4l-.367-.218-3.799.997 1.013-3.7-.24-.383A9.972 9.972 0 012.037 12.01c0-5.508 4.493-10 10.003-10 5.509 0 9.993 4.489 9.993 10-.001 5.51-4.488 9.83-9.999 9.83zm5.494-7.514c-.301-.151-1.785-.881-2.062-.981-.277-.101-.479-.151-.679.15-.202.302-.781.981-.958 1.182-.176.202-.353.227-.654.076-1.503-.758-2.656-1.71-3.619-3.048-.205-.286.195-.26.784-1.442.076-.151.038-.283-.038-.434-.076-.151-.679-1.637-.932-2.242-.245-.589-.493-.509-.679-.518-.176-.009-.379-.009-.58-.009s-.531.076-.807.378c-.277.302-1.059 1.033-1.059 2.518s1.084 2.921 1.236 3.123c.151.202 2.128 3.25 5.158 4.557 1.834.792 2.656.883 3.639.74 1.134-.165 3.493-1.428 3.984-2.809.492-1.38.492-2.563.341-2.81-.151-.247-.554-.398-.855-.549z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingContact;
