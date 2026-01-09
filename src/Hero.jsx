import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const images = [
    'images/white-truck-crossing-bridge-sunset-urban-logistics-motion.jpg',
    'images/truck-with-white-trailer-drives-down-road-with-mountains-background.jpg'
  ];

  const text = [
    `Experience precision, reliability, and peace of mind on every journey`,
    'Pioneering GPS Solutions: Seamlessly connecting you to your vehicles with advanced tracking technology'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
  id="home"
  className="relative min-h-[100svh] font-sans text-slate-800 flex items-center justify-start overflow-hidden"
>

      {/* Background images with fade transition */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            idx === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Caption only — no headings */}
      <section className="relative w-full z-10">
        <div className="w-full px-6 sm:px-8 lg:px-12 relative text-left font-bold">
          <div className="relative h-28 md:h-32 lg:h-36 mt-6 w-full max-w-3xl">

            {text.map((t, idx) => (
              <p
                key={idx}
                className={`absolute inset-y-0 left-0 flex items-center px-0 text-left max-w-3xl text-xl md:text-2xl lg:text-3xl text-slate-100 transition-opacity duration-700 ${
                  idx === bgIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={idx === bgIndex ? 'false' : 'true'}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-400 hover:bg-orange-500/6- text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Scroll to top"
          type="button"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Hero;