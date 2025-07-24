import React from 'react';
import Container from '../shared/Container';
import Card from '../ui/Card';
import Reveal from '../ui/Reveal';
import testimonials from '../../data/testimonials.json';
import StyledSection from './StyledSection';

const Testimonials = () => (
  <StyledSection id="testimonials" className="py-20">
    <Container>
      <h2 className="text-3xl text-center mb-12">Trusted by builders at companies everywhere</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Reveal key={t.author}>
            <Card title={t.author}>
              <p className="text-gray-300">"{t.quote}"</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  </StyledSection>
);

export default Testimonials;