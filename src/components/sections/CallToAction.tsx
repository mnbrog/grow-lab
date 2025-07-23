import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const CallToAction = () => (
  <section className="py-24 text-center">
    <Container>
      <h2 className="text-4xl">Ready to grow your business?</h2>
      <p className="mt-4 mb-6 text-black-300 max-w-2xl mx-auto">
        Let's build something great together. Get in touch to discuss your project.
      </p>
      <a
        href="/contact"
        className="inline-flex items-center justify-center font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform duration-200 ease-in-out transform hover:scale-105 px-6 py-3 bg-transparent text-black border border-gray-600 hover:text-white hover:bg-gray-800"
      >
        Get a Free Consultation
      </a>
    </Container>
  </section>
);

export default CallToAction;
