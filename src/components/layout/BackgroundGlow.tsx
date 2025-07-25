import React, { useEffect, useState } from 'react';

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
    <div
      className="pointer-events-none fixed inset-0 -z-10 transition duration-300"
      style={{
        background: `
          radial-gradient(circle 500px at 50% 200px, rgba(62, 62, 112, 0.3), transparent 80%),
          radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.12), transparent 80%),
          #0A2640
        `,
        backgroundBlendMode: 'screen',
      }}
    />
  );
};

export default BackgroundGlow;
