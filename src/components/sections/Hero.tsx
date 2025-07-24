import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 text-white">
      {/* 🔵 Dynamic background glow (fixed to stretch full height) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* 🔵 Grid and radial lighting pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 h-[600px] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e70,transparent)]" />
      </div>

      {/* 🔵 Content wrapper — MAKE SURE THIS HAS SPACE */}
      <div className="relative z-20 pb-32">
        <HeroSection variant="uvpLed" />
      </div>
    </section>
  );
};

export default Hero;
