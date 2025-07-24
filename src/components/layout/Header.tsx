import React, { useState, useEffect } from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Icon from '../ui/Icon';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <Container
        className={`flex items-center justify-between transition-all ${scrolled ? 'py-2' : 'py-4'}`}
      >
        <Logo
          className={`transition-all ${scrolled ? 'h-12 sm:h-16 lg:h-20' : 'h-20 sm:h-28 lg:h-32'}`}
        />
        <div className="hidden md:flex flex-1 justify-center">
          <Nav />
        </div>
        <div className="ml-4 hidden md:block">
          <Button variant="primary" size="large" as="a" href="/contact">
            Get a Free Consultation
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
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-sm">
          <Container className="py-8">
            <Nav vertical onNavigate={() => setOpen(false)} />
            <div className="mt-8 flex justify-center">
              <Button
                variant="primary"
                size="normal"
                as="a"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Get a Free Consultation
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
