import React, { useState, useEffect } from 'react';
import Logo from '../shared/Logo';
import Nav from './Nav';
import Button from '../ui/Button';
import Container from '../shared/Container';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [open, setOpen] = useState(false);
  // The 'scrolled' state is no longer needed for styling but can be kept for other logic if necessary.
  // For this component, we can simplify by removing it if it's not used elsewhere.
  // For now, it's left in, but the styles that use it are removed.

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [open]);


  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      {/*
        CHANGE 1:
        The vertical padding is now fixed to 'py-4' to prevent the header
        from changing height on scroll.
      */}
      <Container className="flex items-center justify-between transition-all duration-300 py-4">
        {/* --- Desktop Header --- */}
        <div className="hidden flex-1 items-center justify-between md:flex">
          <div className="flex-shrink-0">
            {/*
              CHANGE 2:
              Logo size is now constant. The ternary operator based on 'scrolled' state is removed.
            */}
            <Logo className="h-32" />
          </div>
          <div className="flex-1 flex justify-center">
            <Nav />
          </div>
          <div className="flex-shrink-0">
            <Button variant="primary" size="large" as="a" href="/contact">
              Book Now
            </Button>
          </div>
        </div>

        {/* --- Mobile Header --- */}
        {/*
          CHANGE 3:
          The hamburger menu is now on the right. The spacer div is on the left.
        */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Left: Spacer to balance the layout */}
          <div className="flex-1" />

          {/* Center: Logo */}
          <div className="flex flex-col items-center gap-0">
        <Logo />
          </div>

          {/* Right: Hamburger Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="rounded-md p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Toggle menu"
            >
              {open ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* --- Mobile Dropdown Menu --- */}
      <div
        className={`absolute left-0 w-full origin-top transform bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? 'scale-y-100' : 'scale-y-0'
        }`}
      >
        <Container className="flex flex-col items-center gap-y-8 py-10">
          <Nav vertical onNavigate={() => setOpen(false)} />
          <Button
            variant="primary"
            size="large"
            as="a"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Button>
        </Container>
      </div>
    </header>
  );
};

export default Header;