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
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import Card from '../ui/Card';
import Container from '../shared/Container';

const features = [
  {
    title: 'AI Tools',
    description: 'Streamline everyday tasks with simple AI-powered helpers.',
    href: '/products/ai-tools',
    icon: CpuChipIcon,
  },
  {
    title: 'WaaS Plans',
    description: 'Launch a stunning website without lifting a finger.',
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
    description: 'Grow traffic and generate passive income with optimized content and affiliate tools.',
    href: '/products/seo-monetization',
    icon: ChartBarIcon,
  },
  {
    title: 'Graphic Design',
    description: 'Get custom logos, marketing assets, and cohesive branding designed for your business.',
    href: '/products/graphic-design',
    icon: PaintBrushIcon,
  },
  {
    title: 'Social Media Management',
    description: 'Boost engagement and grow your presence with scheduled content and analytics.',
    href: '/products/social-media',
    icon: AtSymbolIcon,
  },
  {
    title: 'Custom Integrations',
    description: 'Connect tools like CRMs, email marketing, and databases with tailored solutions.',
    href: '/products/integrations',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep everything running smoothly with proactive updates and technical support.',
    href: '/products/support',
    icon: LifebuoyIcon,
  },
  {
    title: 'Content Packages',
    description: 'Fill your site and socials with blog posts, lead magnets, and visuals—all done for you.',
    href: '/products/content',
    icon: DocumentTextIcon,
  },
  {
    title: 'Email Marketing',
    description: 'Build your list and send newsletters or drip campaigns without lifting a finger.',
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
    description: 'Access plug-and-play assets like business checklists, flows, and branded docs.',
    href: '/products/templates',
    icon: ArrowDownTrayIcon,
  }
];


const FeatureGrid = () => (
  <section id="features" className="py-32 bg-primary/10">
    <Container>
      <h2 className="text-3xl text-center mb-12">What We Offer</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {features.map(({ title, description, href, icon: IconComponent }) => (
          <Link key={title} to={href} className="group block transform transition-transform hover:-translate-y-1">
            <Card title={title} className="h-full text-center">
              <IconComponent className="mx-auto mb-4 h-8 w-8 text-accent" />
              <p className="text-gray-300">{description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  </section>
);

export default FeatureGrid;