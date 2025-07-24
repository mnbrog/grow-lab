import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';

const CallToAction = () => (
  <StyledSection className="py-24 text-center">
    <Container className="text-white">
      <Reveal>
        <h2 className="text-4xl">Ready to grow your business?</h2>
      </Reveal>
      <Reveal>
        <p className="mt-4 mb-6 text-gray-300 max-w-2xl mx-auto">
          Let's build something great together. Get in touch to discuss your project.
        </p>
      </Reveal>
      <Reveal>
        <Button as="a" href="/contact" size="large">
          Get a Free Consultation
        </Button>
      </Reveal>
    </Container>
  </StyledSection>
);

export default CallToAction;
