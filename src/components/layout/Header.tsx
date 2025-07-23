import React from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Header = () => (
  <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
    <Container className="flex items-center justify-between py-4">
      <Logo />
      <div className="hidden md:flex flex-1 justify-center">
        <Nav />
      </div>
      <div className="ml-4 hidden md:block">
        <Button as="a" href="/contact">
          Start a Project
        </Button>
      </div>
    </Container>
  </header>
);

export default Header;