import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-900 text-center">
      {/* ... (no changes to background effects) ... */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="absolute inset-0 z-0 opacity-40">
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        ></div>
        <div
          className="absolute inset-x-0 h-[400px] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e70,transparent)]"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <Container className="py-16 sm:py-32">
          {/* ... (no changes to h1 and p tags) ... */}
          <h1
            className="mx-auto max-w-4xl animate-fade-in-up bg-gradient-to-br from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-6xl"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Transforming Digital Ambition into Reality.
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-base text-gray-300 sm:text-lg"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}
          >
            We partner with you to build, automate, and grow your business with
            cutting-edge AI tools, bespoke websites, and powerful automation solutions.
          </p>

          {/* ... (no changes to feature highlights) ... */}
          <div
            className="mx-auto mt-16 grid max-w-5xl animate-fade-in-up grid-cols-1 gap-8 text-white sm:grid-cols-3"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <CpuChipIcon className="h-7 w-7 text-blue-400" />
              <span className="text-gray-300">AI-Powered Solutions</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <GlobeAltIcon className="h-7 w-7 text-blue-400" />
              <span className="text-gray-300">Bespoke Web Development</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ShieldCheckIcon className="h-7 w-7 text-blue-400" />
              <span className="text-gray-300">Process Automation</span>
            </div>
          </div>
            
          {/* === BUTTONS SECTION UPDATED === */}
          <div
            className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards', opacity: 0 }}
          >
            <Button
              variant="primary"
              size="xl"
              as="a"
              href="/contact"
            >
              Get a Free Consultation
            </Button>
            <Button
              variant="primary"
              size="xl"
              as="a"
              href="/products"
            >
              Explore Services
            </Button>
          </div>

        </Container>
      </div>
    </section>
  );
};

export default Hero;