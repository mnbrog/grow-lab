import React, { ElementType } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'normal' | 'large' | 'xl';
  as?: ElementType;
  children: React.ReactNode;
  [x: string]: any;
}

const base =
  'inline-flex items-center justify-center font-semibold font-accent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 transition-transform duration-200 ease-in-out transform hover:scale-105';

const variants = {
  primary: 'bg-accent-400 text-ink-900 hover:brightness-110 focus-visible:ring-accent-400',
  secondary: 'bg-transparent text-white border border-gray-600 hover:text-ink-900 hover:bg-white focus-visible:ring-gray-400',
  ghost: 'bg-transparent text-white border border-white/20 hover:border-accent-400 hover:text-accent-300 focus-visible:ring-accent-400',
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