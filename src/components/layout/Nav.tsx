import React from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/products', label: 'Products' },
  { to: '/website-plans', label: 'Website Plans' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
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
