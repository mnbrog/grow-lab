import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Hero = () => (
  <section className="py-32 text-center">
    <Container>
      <h1 className="mx-auto max-w-4xl text-5xl tracking-tighter sm:text-7xl">
        Transforming Digital Ambition into Reality.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
        We partner with you to build, automate, and grow your business with
        cutting-edge AI tools, bespoke websites, and powerful automation solutions.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <Button size="large" as="a" href="/products">
          Discover Solutions
        </Button>
        <Button size="large" variant="secondary" as="a" href="/contact">
          Start a Project
        </Button>
      </div>
    </Container>
  </section>
);

export default Hero;