import React from 'react';
import { Link } from 'gatsby';
import logo from './images/growlabLogoTrans.png';

const Logo = () => (
  <Link to="/" className="inline-block">
    <img
      src={logo}
      alt="GrowLabs Logo"
      className="h-32 w-auto"
    />
  </Link>
);

export default Logo;
