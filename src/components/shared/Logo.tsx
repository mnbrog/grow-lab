import React from 'react';
import { Link } from 'gatsby';
import logo from './images/growlabLogoTrans.png';

const Logo = () => (
  <Link to="/" className="inline-block">
    <img
      src={logo}
      alt="GrowLabs Logo"
      className="h-20 w-auto sm:h-28 lg:h-32"
    />
  </Link>
);

export default Logo;
