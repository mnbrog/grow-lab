import React from 'react';
import { Link } from 'gatsby';
import logo from './images/growlabLogoTrans.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-20 sm:h-28 lg:h-32' }: LogoProps) => (
  <Link to="/" className="inline-block">
    <img
      src={logo}
      alt="GrowLabs Logo"
      className={`w-auto ${className}`}
    />
  </Link>
);

export default Logo;
