import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Hero = () => (
  <section className="py-32 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
    <Container>
      <h1 className="mx-auto max-w-4xl text-5xl tracking-tighter sm:text-7xl">
        Transforming Digital Ambition into Reality.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
        We partner with you to build, automate, and grow your business with
        cutting-edge AI tools, bespoke websites, and powerful automation solutions.
      </p>
      <div className="mt-10 flex justify-center space-x-4">
        <Button size="xl" as="a" href="/contact">
          Get a Free Consultation
        </Button>
        <Button size="xl" variant="secondary" as="a" href="/products">
          Explore Services
        </Button>
      </div>
    </Container>
  </section>
);

export default Hero;