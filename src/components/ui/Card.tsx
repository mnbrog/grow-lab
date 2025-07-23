import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => (
  <div className={`rounded-lg bg-white shadow-md p-6 ${className}`}>
    <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
    {children}
  </div>
);

export default Card;
