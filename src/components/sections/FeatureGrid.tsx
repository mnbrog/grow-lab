import React from 'react';
import { Link } from 'gatsby';
import {
  GlobeAltIcon,
  ArrowPathIcon,
  PaintBrushIcon,
  ChartBarIcon,
  LifebuoyIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Container from '../shared/Container';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';

const pillars = [
  {
    index: '01',
    title: 'Web Design & Build',
    description:
      'Custom-designed, mobile-first websites built to convert. Live in as little as two weeks.',
    href: '/services#design',
    icon: GlobeAltIcon,
  },
  {
    index: '02',
    title: 'Hosting & Care',
    description:
      'Fast, secure Netlify hosting with monthly updates and backups. We own uptime end to end.',
    href: '/services#hosting',
    icon: LifebuoyIcon,
  },
  {
    index: '03',
    title: 'Automation',
    description:
      'Booking flows, lead intake, and follow-ups that run themselves, so nothing falls through the cracks.',
    href: '/services#automation',
    icon: ArrowPathIcon,
  },
  {
    index: '04',
    title: 'Branding & Content',
    description:
      'A logo, style kit, and on-brand content that make a small business look like an established one.',
    href: '/services#branding',
    icon: PaintBrushIcon,
  },
  {
    index: '05',
    title: 'SEO & Local Growth',
    description:
      'Google Business optimization and search-ready content that brings the right traffic in.',
    href: '/services#growth',
    icon: ChartBarIcon,
  },
  {
    index: '06',
    title: 'Strategy & Support',
    description:
      'A real team on call, with priority support and strategy check-ins as your plan scales with you.',
    href: '/services#support',
    icon: ChatBubbleLeftRightIcon,
  },
];

const FeatureGrid = () => (
  <StyledSection id="features" className="py-28 sm:py-32">
    <Container>
      <div className="mb-16 max-w-2xl">
        <p className="eyebrow mb-4">What We Do</p>
        <h2 className="text-display-sm font-heading font-black text-white">
          One team. Every piece of your online presence.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ index, title, description, href, icon: IconComponent }) => (
          <Reveal key={title} as="div">
            <Link
              to={href}
              className="group flex h-full flex-col bg-ink-800 p-8 transition-colors duration-300 hover:bg-ink-700"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-sm font-semibold text-gray-600">
                  {index}
                </span>
                <IconComponent className="h-6 w-6 text-accent-400" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="flex-grow text-sm leading-relaxed text-gray-400">
                {description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Learn more &rarr;
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Container>
  </StyledSection>
);

export default FeatureGrid;
