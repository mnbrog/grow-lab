import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const icons: Record<string, JSX.Element> = {
  check: (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const Icon = ({ name, className = '' }: IconProps) => (
  <span className={className}>{icons[name] || null}</span>
);

export default Icon;
