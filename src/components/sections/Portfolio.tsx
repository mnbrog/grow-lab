import React from 'react';
import Container from '../shared/Container';

const projects = [
  {
    title: 'Sheffield Collision',
    img: 'https://via.placeholder.com/300x200?text=Sheffield+Collision',
  },
  {
    title: 'Upright Medical',
    img: 'https://via.placeholder.com/300x200?text=Upright+Medical',
  },
  {
    title: 'Example Startup',
    img: 'https://via.placeholder.com/300x200?text=Startup+Site',
  },
];

const Portfolio = () => (
  <section className="py-20">
    <Container>
      <h2 className="text-3xl text-center mb-12">See Our Work</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title}>
            <img src={p.img} alt={p.title} className="rounded-lg shadow-lg" />
            <p className="mt-2 text-center text-sm text-gray-400">{p.title}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Portfolio;
