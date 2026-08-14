import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';

const CallToAction = () => (
  <StyledSection id="cta" className="border-t border-white/5 py-28 text-center sm:py-32">
    <Container>
      <Reveal>
        <p className="eyebrow mb-6">Let's Talk</p>
      </Reveal>
      <Reveal>
        <h2 className="mx-auto max-w-3xl font-heading text-display-sm font-black text-white">
          Ready for a website that grows with you?
        </h2>
      </Reveal>
      <Reveal>
        <p className="mx-auto mt-6 mb-10 max-w-xl text-lg text-gray-300">
          Book a free strategy call. We'll map out the right plan for where
          your business is today and where it's headed next.
        </p>
      </Reveal>
      <Reveal>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="a" href="/contact" variant="primary" size="xl">
            Book a Free Strategy Call
          </Button>
          <Button as="a" href="/website-plans" variant="ghost" size="large">
            Compare plans
          </Button>
        </div>
      </Reveal>
    </Container>
  </StyledSection>
);

export default CallToAction;
