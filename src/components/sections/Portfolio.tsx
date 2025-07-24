import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
import projectsData from '../shared/portfolio.json';

// Project type remains the same
interface Project {
  name: string;
  description: string;
  logo: string;
  url: string;
}

const projects: Project[] = projectsData;

// Reusable Arrow Button Component
const ArrowButton = ({ enabled, onClick, children }) => (
  <button
    className="h-12 w-12 rounded-full bg-gray-800/60 p-2 text-white transition hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={!enabled}
  >
    {children}
  </button>
);

const Portfolio: React.FC = () => {
  // 1. Set up the Embla Carousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Set to true to allow infinite scrolling
    align: 'start',
  });

  // 2. State for the navigation buttons
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // 3. Functions to scroll and update button states
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  // 4. Effect to update button states on select and init
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Reveal as="section" className="py-20 bg-primary/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
          {/*
            CHANGE 1:
            Removed 'md:text-left' to make the header text centered on all screen sizes.
          */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">See Our Work</h2>
            <p className="text-lg text-gray-400 max-w-lg">
              We partner with businesses to create digital experiences that look great and deliver results.
            </p>
          </div>
          {/* Arrow navigation for larger screens */}
          <div className="hidden shrink-0 gap-4 md:flex">
            <ArrowButton onClick={scrollPrev} enabled={!prevBtnDisabled}>
              <ChevronLeftIcon />
            </ArrowButton>
            <ArrowButton onClick={scrollNext} enabled={!nextBtnDisabled}>
              <ChevronRightIcon />
            </ArrowButton>
          </div>
        </div>

        {/* 5. The Embla Carousel viewport */}
        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          {/* The container for the slides */}
          <div className="flex">
            {projects.map((project) => (
              // Each slide
              <div
                key={project.name}
                className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full p-4 md:basis-1/2 lg:basis-1/3"
              >
                {/*
                  CHANGE 2:
                  Added 'text-center' to this container to center the text below.
                */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center group block h-full rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 border border-gray-700 hover:border-accent"
                >
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="mb-6 h-48 w-full rounded-md object-contain p-4"
                  />
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Reveal>
  );
};

export default Portfolio;