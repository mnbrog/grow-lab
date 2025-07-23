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
  menu: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path
        fillRule="evenodd"
        d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 000 2h16a1 1 0 100-2H4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path
        fillRule="evenodd"
        d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const Icon = ({ name, className = '' }: IconProps) => (
  <span className={className}>{icons[name] || null}</span>
);

export default Icon;
