import React from 'react';
import { Link } from 'gatsby';
import Container from '../shared/Container';
import Logo from '../shared/Logo';

const exploreLinks = [
  { to: '/services', label: 'Services' },
  { to: '/website-plans', label: 'Plans' },
  { to: '/#work', label: 'Work' },
  { to: '/blog', label: 'Insights' },
];

const startLinks = [
  { to: '/contact', label: 'Book a Strategy Call' },
  { to: '/website-plans', label: 'Compare Plans' },
];

const Footer = () => (
  <footer className="border-t border-white/5 bg-ink-900 py-16 text-gray-500">
    <Container>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-2">
          <Logo className="h-16 lg:h-20" />
          <p className="mt-4 max-w-xs text-sm text-gray-500">
            Design, hosting, and automation for ambitious small businesses:
            one monthly plan, built to grow with you.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-4 text-gray-400">Explore</h3>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-4 text-gray-400">Get Started</h3>
          <ul className="space-y-3 text-sm">
            {startLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs sm:flex-row">
        <p>&copy; {new Date().getFullYear()} GrowLab. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
