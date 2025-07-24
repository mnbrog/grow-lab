import React, { ReactNode } from 'react';

interface StyledSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const StyledSection: React.FC<StyledSectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`relative w-full overflow-hidden bg-gray-900 text-white ${className}`}>
    {children}
  </section>
);

export default StyledSection;
