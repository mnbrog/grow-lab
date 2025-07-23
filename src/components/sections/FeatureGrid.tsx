import React from 'react';
import Icon from '../ui/Icon';
import Container from '../shared/Container';

const features = [
  {
    title: 'AI Tools',
    description: 'Streamline everyday tasks with simple AI-powered helpers.',
  },
  {
    title: 'WaaS Plans',
    description: 'Launch a stunning website without lifting a finger.',
  },
  {
    title: 'Automation',
    description: 'Speed up workflows using ready-made Power Automate templates.',
  },
];

const FeatureGrid = () => (
  <section className="bg-white py-16">
    <Container>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start space-x-3">
            <Icon name="check" className="text-blue-600" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default FeatureGrid;
