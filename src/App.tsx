import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Specials from './components/Specials';
import Menu from './components/Menu';
import Favorites from './components/Favorites';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Quotes from './components/Quotes';
import HomeDelivery from './components/HomeDelivery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);

  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <Welcome />
      <Features />
      <Specials />
      <Menu />
      <Favorites />
      <Gallery />
      <Reviews />
      <Quotes />
      <HomeDelivery />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
