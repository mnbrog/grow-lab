import React, { useEffect, useRef, useState } from 'react';

const BackgroundGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const frame = useRef<number>();

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition duration-300"
      style={{
        background: `
          radial-gradient(circle 500px at 50% 200px, rgba(116, 179, 191, 0.12), transparent 80%),
          radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(116, 179, 191, 0.08), transparent 80%),
          #060E17
        `,
        backgroundBlendMode: 'screen',
      }}
    />
  );
};

export default BackgroundGlow;
