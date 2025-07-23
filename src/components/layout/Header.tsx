import React from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Header = () => (
  <header className="bg-white shadow-sm">
    <Container className="flex items-center justify-between py-6">
      <Logo />
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="ml-4 hidden md:block">
        <Button as="a" href="/contact">
          Get Started
        </Button>
      </div>
    </Container>
  </header>
);

export default Header;
