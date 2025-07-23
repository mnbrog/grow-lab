import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';

const Hero = () => (
  <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover -z-10"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/hero-bg.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/60 -z-10" />
    <Container>
      <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        Transforming Digital Ambition into Reality.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
        We partner with you to build, automate, and grow your business with cutting-edge AI tools, bespoke websites, and powerful automation solutions.
      </p>
      <div className="mt-10 flex justify-center">
        <Button as="a" href="#solutions">Discover Our Solutions</Button>
      </div>
    </Container>
  </section>
);

export default Hero;
