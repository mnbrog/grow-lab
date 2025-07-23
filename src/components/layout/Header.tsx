import React, { useState } from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Icon from '../ui/Icon';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
        <Logo />
        <div className="hidden md:flex flex-1 justify-center">
          <Nav />
        </div>
        <div className="ml-4 hidden md:block">
          <Button variant="primary" size="large" as="a" href="/contact">
            Start a Project
          </Button>
        </div>
        <button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-gray-800">
          <Container className="py-4">
            <Nav vertical onNavigate={() => setOpen(false)} />
            <div className="mt-4 flex justify-center">
              <Button
                variant="primary"
                size="normal"
                as="a"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Start a Project
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
