import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Container from '../shared/Container';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';
import caseStudiesData from '../shared/portfolio.json';

interface CaseStudy {
  name: string;
  industry: string;
  focus: string;
  services: string[];
  logo: string;
  url: string;
}

const caseStudies: CaseStudy[] = caseStudiesData;

const Portfolio: React.FC = () => (
  <StyledSection id="work" className="py-28 sm:py-32">
    <Container>
      <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="text-display-sm font-heading font-black text-white">
            Real businesses. Real launches.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-gray-400">
          A look at what we've built and the systems running behind the scenes for
          each one.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((project, i) => {
          const hasLink = Boolean(project.url);
          const Wrapper = hasLink ? 'a' : 'div';
          const linkProps = hasLink
            ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <Reveal key={project.name}>
              <Wrapper
                {...linkProps}
                className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800 p-8 transition-all duration-300 sm:p-10 ${
                  hasLink
                    ? 'hover:-translate-y-1 hover:border-accent-400/60 hover:bg-ink-700'
                    : ''
                }`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-heading text-sm font-semibold text-gray-600">
                    0{i + 1}
                  </span>
                  {hasLink ? (
                    <ArrowUpRightIcon
                      className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="text-xs text-gray-600">Site offline</span>
                  )}
                </div>

                <div className="mb-6 flex h-14 items-center">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    loading="lazy"
                    className="h-10 w-auto max-w-[10rem] rounded bg-white/90 object-contain p-1.5"
                  />
                </div>

                <p className="eyebrow mb-2 text-gray-500">{project.industry}</p>
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mb-6 flex-grow text-base leading-relaxed text-gray-300">
                  {project.focus}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="mb-6 text-gray-400">Want to be our next launch?</p>
        <Button as="a" href="/contact" variant="secondary" size="large">
          Start Your Project
        </Button>
      </div>
    </Container>
  </StyledSection>
);

export default Portfolio;
