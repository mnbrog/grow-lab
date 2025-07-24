import React from 'react';
import { Link } from 'gatsby';
import {
  CpuChipIcon,
  GlobeAltIcon,
  ArrowPathIcon,
  ChartBarIcon,
  PaintBrushIcon,
  AtSymbolIcon,
  PuzzlePieceIcon,
  LifebuoyIcon,
  DocumentTextIcon,
  EnvelopeOpenIcon,
  ChartPieIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import Card from '../ui/Card'; // Assuming Card component exists
import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';

// No changes needed to the features array
const features = [
  {
    title: 'AI Tools',
    description: 'Streamline everyday tasks with simple AI-powered helpers.',
    href: '/products/ai-tools',
    icon: CpuChipIcon,
  },
  {
    title: 'WaaS Plans',
    description: 'Launch a stunning, high-performance website without lifting a finger.',
    href: '/products/waas',
    icon: GlobeAltIcon,
  },
  {
    title: 'Automation',
    description: 'Speed up workflows using ready-made Power Automate templates.',
    href: '/products/automation',
    icon: ArrowPathIcon,
  },
  {
    title: 'SEO & Monetization',
    description: 'Grow traffic and generate passive income with optimized content.',
    href: '/products/seo-monetization',
    icon: ChartBarIcon,
  },
  {
    title: 'Graphic Design',
    description: 'Get custom logos and cohesive branding designed for your business.',
    href: '/products/graphic-design',
    icon: PaintBrushIcon,
  },
  {
    title: 'Social Media Management',
    description: 'Boost engagement and grow your presence with scheduled content.',
    href: '/products/social-media',
    icon: AtSymbolIcon,
  },
  {
    title: 'Custom Integrations',
    description: 'Connect tools like CRMs, email, and databases with tailored solutions.',
    href: '/products/integrations',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your digital assets running smoothly with proactive updates.',
    href: '/products/support',
    icon: LifebuoyIcon,
  },
  {
    title: 'Content Packages',
    description: 'Fill your site with blog posts, lead magnets, and visuals—all done for you.',
    href: '/products/content',
    icon: DocumentTextIcon,
  },
  {
    title: 'Email Marketing',
    description: 'Build your list and send newsletters or drip campaigns automatically.',
    href: '/products/email-marketing',
    icon: EnvelopeOpenIcon,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Track what’s working with simple dashboards and weekly insights.',
    href: '/products/analytics',
    icon: ChartPieIcon,
  },
  {
    title: 'Templates & Downloads',
    description: 'Access plug-and-play assets like checklists, flows, and branded docs.',
    href: '/products/templates',
    icon: ArrowDownTrayIcon,
  },
];

const FeatureGrid = () => (
  <StyledSection id="features" className="py-32">
    <Container>
      <h2 className="text-4xl font-bold text-center mb-4">What We Offer</h2>
      <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        From initial idea to full-scale deployment, we provide the tools and expertise to build and grow your digital presence.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map(({ title, description, href, icon: IconComponent }) => (
          <Reveal key={title}>
            {/*
              Key Changes for Visual Appeal:
              1. Link (<a> tag): Added h-full to make the entire card clickable. Enhanced hover effect with shadow.
              2. Card Component: Added flex, flex-col to enable uniform height. Adjusted padding and background.
              3. Description (<p> tag): Added flex-grow to ensure it fills available space, making all cards equal height.
            */}
            <Link to={href} className="group block h-full rounded-xl transition-all duration-300 hover:!opacity-100 hover:shadow-2xl hover:shadow-accent/20">
              <Card
                title={title}
                className="h-full flex flex-col text-center bg-gray-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-xl transition-all duration-300 group-hover:border-accent group-hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <IconComponent className="mx-auto mb-6 h-10 w-10 text-accent" />
                </div>
                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  {/* The title is part of the Card component, this makes the description grow */}
                  <p className="flex-grow text-white-400 text-sm leading-relaxed">{description}</p>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </StyledSection>
);

export default FeatureGrid;