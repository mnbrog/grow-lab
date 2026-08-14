import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';
import KineticText from '../ui/KineticText';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const HeroSection: React.FC = () => {
  const lineOne = 'Websites built';
  const lineOneWords = lineOne.split(' ').length;

  return (
    <section
      className="relative flex min-h-[92vh] flex-col justify-center bg-transparent pt-28 pb-16 text-white sm:pt-32"
      aria-labelledby="hero-heading"
    >
      <Container>
        <p className="eyebrow mb-6 kinetic-word" style={{ ['--i' as any]: 0 }}>
          Web Design &middot; Hosting &middot; Automation
        </p>

        <h1
          id="hero-heading"
          className="max-w-5xl font-heading text-display-lg font-black text-white"
        >
          <KineticText text={lineOne} startIndex={1} />
          <br />
          <KineticText
            text="to grow with you."
            startIndex={1 + lineOneWords}
            wordClassName="text-accent-400"
          />
        </h1>

        <p
          className="kinetic-word mt-8 max-w-xl text-lg text-gray-300 sm:text-xl"
          style={{ ['--i' as any]: 9 }}
        >
          GrowLab is the design, hosting, and automation team behind ambitious
          local businesses: one monthly plan, zero tech headaches.
        </p>

        <div
          className="kinetic-word mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          style={{ ['--i' as any]: 10 }}
        >
          <Button as="a" href="/contact" variant="primary" size="xl">
            Book a Free Strategy Call
          </Button>
          <Button as="a" href="#work" variant="ghost" size="large">
            See our work
          </Button>
        </div>

        <p
          className="kinetic-word mt-4 text-sm text-gray-500"
          style={{ ['--i' as any]: 11 }}
        >
          No tech skills needed. Cancel anytime.
        </p>
      </Container>

      <a
        href="#trust"
        aria-label="Scroll to see our clients"
        className="scroll-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-accent-300 sm:flex"
      >
        Scroll
        <ArrowDownIcon className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};

export default HeroSection;
