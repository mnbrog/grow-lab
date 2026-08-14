import React from 'react';
import Container from '../shared/Container';
import StyledSection from './StyledSection';
import projectsData from '../shared/portfolio.json';

interface Project {
  name: string;
  description: string;
  logo: string;
  url: string;
}

const projects: Project[] = projectsData;

const LogoStrip: React.FC = () => (
  <StyledSection id="trust" className="border-y border-white/5 py-14">
    <Container>
      <p className="eyebrow mb-8 text-center sm:text-left">
        Trusted by ambitious local &amp; national businesses
      </p>
      <ul className="grid grid-cols-3 gap-x-8 gap-y-10 sm:grid-cols-5">
        {projects.map((project) => (
          <li key={project.name} className="flex items-center justify-center">
            {/* Falls back to a wordmark until a logo file is supplied. */}
            {project.logo ? (
              <img
                src={project.logo}
                alt={project.name}
                loading="lazy"
                className="h-10 w-auto max-w-[9rem] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-center font-heading text-sm font-bold uppercase tracking-widest text-white/50 transition duration-300 hover:text-white">
                {project.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Container>
  </StyledSection>
);

export default LogoStrip;
