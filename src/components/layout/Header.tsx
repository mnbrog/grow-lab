import React from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Header = () => (
  <header className="bg-white/80 backdrop-blur fixed top-0 w-full z-20 shadow-sm">
    <Container className="relative flex items-center py-4">
      <Logo />
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
        <Nav />
      </div>
      <div className="ml-auto hidden md:block">
        <Button as="a" href="/contact">Start a Project</Button>
      </div>
    </Container>
  </header>
);

export default Header;
