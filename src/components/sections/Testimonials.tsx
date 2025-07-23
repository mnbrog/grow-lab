import React from 'react';
import Container from '../shared/Container';
import Card from '../ui/Card';
import testimonials from '../../data/testimonials.json';

const Testimonials = () => (
  <section className="py-16 bg-white">
    <Container>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.author} title={t.author}>
            <p className="text-gray-600">{t.quote}</p>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
