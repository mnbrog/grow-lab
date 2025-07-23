import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const base =
  'inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: `${base} bg-[#1a1a1a] text-white border-transparent hover:bg-[#333] focus:ring-gray-900`,
  secondary: `${base} bg-transparent text-gray-900 border-gray-900 hover:bg-[#1a1a1a] hover:text-white`,
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => (
  <button className={variants[variant]} {...props}>
    {children}
  </button>
);

export default Button;
