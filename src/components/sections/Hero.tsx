import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Hero = () => (
  <section className="py-20 text-center bg-gradient-to-b from-white to-gray-50">
    <Container>
      <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Build and automate with confidence
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
        Lightweight AI tools, beautiful websites, and automation templates to grow your business.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <Button as="a" href="/products">Explore Products</Button>
        <Button variant="secondary" as="a" href="/contact">Start a Project</Button>
      </div>
    </Container>
  </section>
);

export default Hero;
