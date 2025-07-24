import React, { ReactNode } from 'react';

interface StyledSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const StyledSection: React.FC<StyledSectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`relative w-full bg-transparent ${className}`}>
    <div className="relative z-10">{children}</div>
  </section>
);

export default StyledSection;
