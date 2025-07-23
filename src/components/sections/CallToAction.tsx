import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const CallToAction = () => (
  <section className="py-20 bg-blue-600 text-center text-white">
    <Container>
      <h2 className="text-3xl font-bold">Ready to level up your digital presence?</h2>
      <p className="mt-4 text-blue-100">Contact our team to get started today.</p>
      <Button as="a" href="/contact" className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
        Get in Touch
      </Button>
    </Container>
  </section>
);

export default CallToAction;
