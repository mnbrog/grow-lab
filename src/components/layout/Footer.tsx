import React from 'react';
import Container from '../shared/Container';
import Logo from '../shared/Logo';

const Footer = () => (
  <footer className="bg-transparent py-8 text-sm text-gray-500 border-t border-transparent">
    <Container>
      {/* Flex container to align and space the logo and text */}
      <div className="flex flex-col items-center gap-0">
        <Logo />
        {/* Removed the top margin (mt-4) as the 'gap' now controls the spacing */}
        <p>&copy; {new Date().getFullYear()} GrowLab. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;