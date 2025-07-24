import React from 'react';
import Container from '../shared/Container';
import Card from '../ui/Card';
import testimonials from '../../data/testimonials.json';

const Testimonials = () => (
  <section id="testimonials" className="py-20">
    <Container>
      <h2 className="text-3xl text-center mb-12">Trusted by builders at companies everywhere</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.author} title={t.author}>
            <p className="text-gray-300">"{t.quote}"</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;