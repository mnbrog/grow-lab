import React from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
];

const Nav = () => (
  <nav className="space-x-8 text-sm font-medium text-gray-600">
    {links.map((link) => (
      <Link key={link.to} to={link.to} className="hover:text-gray-900">
        {link.label}
      </Link>
    ))}
  </nav>
);

export default Nav;
