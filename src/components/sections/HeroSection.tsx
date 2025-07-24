import React from 'react';
import Button from '../ui/Button';
import Container from '../shared/Container';
import { ArrowPathIcon, SparklesIcon, BoltIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

// A/B Testing Copy Options
// PAIN AGITATION
// headline: "Stop Fighting With Technology. Start Growing Your Business."
// subheadline: "You’re an ambitious builder, not a web developer. We handle the clunky website, tedious tasks, and online marketing so you can focus on what you do best."
// cta: "Reclaim Your Focus"

// ASPIRATIONAL
// headline: "Your Business is Professional. Your Website Should Be Too."
// subheadline: "Go from feeling stuck and unprofessional to confident and in control. We handle the tech. You grow your business."
// cta: "See Your 'Day After'"

// UVP-LED
// headline: "The All-in-One System to Build, Host & Grow Online."
// subheadline: "Finally, a single solution for your website, content, and automation. One expert team. No tech skills needed."
// cta: "Simplify Your Growth"

// FEAR REDUCTION
// headline: "A Professional Website Without the Headache."
// subheadline: "Get a world-class online presence with a simple monthly plan. No huge upfront cost, no jargon. Just results."
// cta: "Explore a Simpler Way"

interface HeroSectionProps {
  variant?: 'painAgitation' | 'aspirational' | 'uvpLed' | 'fearReduction';
}

const copyVariants = {
  painAgitation: {
    headline: 'Stop Fighting With Technology. Start Growing Your Business.',
    subheadline:
      'You’re an ambitious builder, not a web developer. We handle the clunky website, tedious tasks, and online marketing so you can focus on what you do best.',
    cta: 'Reclaim Your Focus',
  },
  aspirational: {
    headline: 'Your Business is Professional. Your Website Should Be Too.',
    subheadline:
      'Go from feeling stuck and unprofessional to confident and in control. We handle the tech. You grow your business.',
    cta: "See Your 'Day After'",
  },
  uvpLed: {
    headline: 'The All-in-One System to Build, Host & Grow Online.',
    subheadline:
      'Finally, a single solution for your website, content, and automation. One expert team. No tech skills needed.',
    cta: 'Simplify Your Growth',
  },
  fearReduction: {
    headline: 'A Professional Website Without the Headache.',
    subheadline:
      'Get a world-class online presence with a simple monthly plan. No huge upfront cost, no jargon. Just results.',
    cta: 'Explore a Simpler Way',
  },
};

const features = [
  {
    title: 'Automated Workflows',
    description: 'Let repetitive tasks run themselves.',
    payoff: 'More time for high-value work.',
    icon: ArrowPathIcon,
  },
  {
    title: 'All-in-One Platform',
    description: 'Website, content and automation in one place.',
    payoff: 'Clarity and control.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Professional Design',
    description: 'Look polished with custom design and branding.',
    payoff: 'Feel proud of your online presence.',
    icon: SparklesIcon,
  },
  {
    title: 'Growth Insights',
    description: 'Data-driven guidance to reach the next level.',
    payoff: 'Confidence in every decision.',
    icon: BoltIcon,
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ variant = 'painAgitation' }) => {
  const copy = copyVariants[variant];

  return (
    <section className="bg-gray-900 text-white py-20" aria-labelledby="hero-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h1 id="hero-heading" className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            {copy.headline}
          </h1>
          <p className="text-lg text-gray-300 mb-8">{copy.subheadline}</p>
          <div className="flex flex-col items-center">
            <Button as="a" href="/contact" variant="primary" size="xl" aria-label={copy.cta}>
              {copy.cta}
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              100% free. No pressure. Just a clear plan for your growth.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, payoff, icon: Icon }) => (
            <div key={title} className="bg-gray-800/50 rounded-lg p-6 flex flex-col">
              <Icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 flex-grow">{description}</p>
              <p className="mt-2 italic text-accent text-sm">{payoff}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center space-x-8 opacity-80">
            {/* TODO: Replace with actual logo images */}
            <img src="/creator-map-logo.svg" alt="Creator Map" className="h-8" />
            <img src="/kerr-chief-logo.svg" alt="Kerr Chief" className="h-8" />
            <img src="/upright-medical-logo.svg" alt="Upright Medical" className="h-8" />
          </div>

          <blockquote className="text-gray-300 italic text-center max-w-xl">
            “GrowLab helped us automate tedious tasks and focus on real growth.” — Jane Doe, Upright Medical Solutions
          </blockquote>
        </div>

        <div className="mt-16">
          {/* TODO: Insert before/after transformation visual (image, SVG, or Lottie) */}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
