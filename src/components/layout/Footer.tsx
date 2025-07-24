import React from 'react';
import Container from '../shared/Container';
import Logo from '../shared/Logo';

const Footer = () => (
  <footer className="bg-transparent py-8 text-sm text-gray-500 border-t border-gray-800">
    <Container className="text-center">
      <Logo />
      <p className="mt-4">&copy; {new Date().getFullYear()} GrowLab. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;