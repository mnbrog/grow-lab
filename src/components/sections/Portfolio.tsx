import React from 'react';
import Container from '../shared/Container';
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
  <section className="py-20 bg-gray-50">
    <Container>
      <h2 className="text-4xl font-bold text-center mb-16">See Our Work</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="w-full h-48 object-contain p-4 border-b" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </Container>
  </section>
);

export default Portfolio;