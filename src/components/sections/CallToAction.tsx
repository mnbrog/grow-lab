import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const CallToAction = () => (
  <section className="py-24 text-center">
    <Container>
      <h2 className="text-4xl">Ready to grow your business?</h2>
      <p className="mt-4 mb-6 text-gray-300 max-w-2xl mx-auto">
        Let's build something great together. Get in touch to discuss your project.
      </p>
      <Button as="a" href="/contact" size="large">
        Get a Free Consultation
      </Button>
    </Container>
  </section>
);

export default CallToAction;
