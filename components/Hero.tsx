import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from './icons';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          transform: `translateY(${offsetY * 0.4}px)` // Parallax effect
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70"></div>
      <div className="relative z-10 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
            Digi<span className="text-teal-400">Raksha</span>
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
          <p className="mt-4 text-2xl md:text-3xl text-slate-200 drop-shadow-md max-w-3xl mx-auto font-light">
            The future of tourist safety. Arrived.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-fade-in-up" style={{ animationDelay: '1000ms', opacity: 0 }}>
        <a href="#problem" aria-label="Scroll to next section">
          <ChevronDownIcon className="w-8 h-8 text-white animate-bounce-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;