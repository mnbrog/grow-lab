import React from 'react';
import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
// 👇 Import the JSON file directly
import projectsData from '../shared/portfolio.json';
// Define a type for a single project object for type safety
interface Project {
  name: string;
  description: string;
  logo: string;
  url: string;
}

// Assign the imported data to a typed variable
const projects: Project[] = projectsData;

const Portfolio: React.FC = () => (
  <Reveal as="section" className="py-20 bg-primary/10">
    <Container>
      <h2 className="text-4xl font-bold text-center mb-16">See Our Work</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.name} className="block">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-gray-800/50 border border-gray-700 p-6 transform hover:-translate-y-2 transition-transform duration-300 block"
            >
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Container>
  </Reveal>
);

export default Portfolio;