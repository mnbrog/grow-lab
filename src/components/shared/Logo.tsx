import React from 'react';
import { Link } from 'gatsby';
import logo from './images/growlabLogoTrans.png';

interface LogoProps {
  className?: string;
}

// Default logo sizes have been increased.
// Mobile: h-28 (112px)
// Large screens (lg): h-36 (144px)
const Logo = ({ className = 'h-28 lg:h-36' }: LogoProps) => (
  <Link to="/" className="inline-block" aria-label="Go to homepage">
    <img
      src={logo}
      alt="GrowLabs Logo"
      className={`w-auto ${className}`}
    />
  </Link>
);

export default Logo;