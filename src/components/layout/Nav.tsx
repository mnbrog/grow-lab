import React from 'react';
import { Link } from 'gatsby';

const links = [
  { to: '/products', label: 'Products' },
  { to: '/website-plans', label: 'Website Plans' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

interface NavProps {
  vertical?: boolean;
  onNavigate?: () => void;
}

const Nav = ({ vertical = false, onNavigate }: NavProps) => (
  <nav
    className={`${
      vertical ? 'flex flex-col space-y-4 text-center' : 'space-x-10'
    } text-sm font-medium text-gray-400`}
  >
    {links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="transition-colors hover:text-white"
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    ))}
  </nav>
);

export default Nav;