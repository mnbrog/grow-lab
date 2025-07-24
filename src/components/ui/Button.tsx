import React, { ElementType } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large' | 'xl';
  as?: ElementType;
  children: React.ReactNode;
  [x: string]: any;
}

const base =
  'inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform duration-200 ease-in-out transform hover:scale-105';

const variants = {
  primary: 'bg-accent text-primary hover:brightness-110 focus:ring-accent',
  secondary: 'bg-transparent text-black border border-gray-600 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
};

const sizes = {
  normal: 'px-6 py-3 text-sm',
  large: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg sm:text-xl',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'normal',
  as: Component = 'button',
  children,
  ...props
}) => (
  <Component className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
    {children}
  </Component>
);

export default Button;