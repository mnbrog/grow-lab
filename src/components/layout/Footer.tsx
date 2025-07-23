import React from 'react';
import Container from '../shared/Container';
import Logo from '../shared/Logo';

const Footer = () => (
  <footer className="bg-gray-50 py-12 text-sm text-gray-500">
    <Container className="flex flex-col items-center space-y-4">
      <Logo />
      <p>&copy; {new Date().getFullYear()} GrowLab. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
