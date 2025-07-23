import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => (
  <div className={`rounded-lg bg-gray-800/50 border border-gray-700 p-6 flex flex-col ${className}`}>
    <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
    <div className="flex-grow">{children}</div>
  </div>
);

export default Card;