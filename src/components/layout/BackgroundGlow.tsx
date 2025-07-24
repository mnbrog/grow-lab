import React, { useState, useEffect } from 'react';

/**
 * BackgroundGlow renders the radial mouse-following glow that
 * was originally used in the Hero section. It is positioned
 * fixed and stretched across the viewport so it can act as a
 * site-wide background effect.
 */
const BackgroundGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 h-[600px] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e70,transparent)]" />
      </div>
    </div>
  );
};

export default BackgroundGlow;
