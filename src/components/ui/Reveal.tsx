import React, { ReactNode, ElementType } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ as: Component = 'div', children, className = '' }) => {
  const ref = useScrollReveal();
  return (
    <Component ref={ref} className={`opacity-0 translate-y-6 ${className}`}>
      {children}
    </Component>
  );
};

export default Reveal;
