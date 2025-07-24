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
    <>
      {/* 🔵 Solid background and subtle top highlight */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#0A2640]">
        <div className="absolute inset-x-0 h-[600px] bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e70,transparent)]" />
      </div>

      {/* 🔵 Mouse-following glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
    </>
  );
};

export default BackgroundGlow;
