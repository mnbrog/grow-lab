import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const base =
  'inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: `${base} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`,
  secondary: `${base} bg-white text-blue-600 hover:bg-blue-50 border-blue-600 focus:ring-blue-500`,
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => (
  <button className={variants[variant]} {...props}>
    {children}
  </button>
);

export default Button;
