import React from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/products', label: 'Products' },
  { to: '/website-plans', label: 'Website Plans' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

const Nav = () => (
  <nav className="space-x-10 text-sm font-medium text-gray-400">
    {links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="transition-colors hover:text-white"
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

export default Nav;