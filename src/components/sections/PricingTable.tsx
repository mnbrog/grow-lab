import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import StyledSection from './StyledSection';

const plans = [
  {
    name: 'Starter',
    price: '$149/mo',
    tagline:
      'Your online presence — built, hosted, and launched for you.',
    features: [
      '1–3 page branded website (mobile ready)',
      'Hosted on Netlify — fast, secure, always live',
      'Google Business Profile setup',
      'AI logo + color palette',
      '3 Canva post templates',
      '1 automation per quarter',
      'Monthly website & Google snapshot',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$299/mo',
    tagline:
      'Everything your brand needs to look professional, stay active, and bring in leads.',
    features: [
      'Website up to 8 pages + landing page',
      'Fully branded style kit',
      'Hosted on Netlify — optimized for mobile, SEO & speed',
      'Monthly automation',
      '6 branded social posts/month',
      '2 short-form videos/month',
      'Blog section setup + 1 post/month',
      'Booking/calendar embed',
      'Priority email support',
    ],
  },
  {
    name: 'Pro Launch',
    price: '$499/mo',
    tagline:
      'The all-in-one system to scale your digital presence, content, and client funnels.',
    features: [
      'Unlimited pages + multi-location ready',
      'Dynamic content system on Netlify',
      'AI-powered content calendar',
      '4 reels/month',
      '2 SEO blog posts/month',
      'Lead magnet funnel + email automation',
      'Email marketing flows',
      'Full Maps listing management',
      'Monthly 30-minute strategy call',
      'Slack or direct message support',
    ],
  },
];

const PricingTable = () => (
  <StyledSection className="py-20">
    <Container>
      <h2 className="text-3xl text-center mb-4">GrowLab Business Launch Plans</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
        We build, host, and grow your business online &mdash; no tech skills needed. All
        websites are hosted on <strong>Netlify</strong>, a fast, secure, always-on platform
        used by companies like Nike and Peloton.
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Reveal key={plan.name}>
            <Card title={plan.name} className="text-center">
              <p className="mt-2 text-4xl">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center justify-center space-x-2">
                    <Icon name="check" className="text-accent h-4 w-4" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm italic text-gray-400">{plan.tagline}</p>
             <Button
              className="mt-8 w-full"
              as="a"
              variant="primary"
              href={`/contact?plan=${plan.name}`}
            >
              Choose Plan
            </Button>
            </Card>
          </Reveal>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-2xl text-sm text-gray-300">
        <h3 className="mb-2 text-center text-base font-semibold">
          Hosting &amp; Tech Explained
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <Icon name="check" className="text-accent h-4 w-4" />
            <span>Every website is <strong>hosted by GrowLab on Netlify</strong></span>
          </li>
          <li className="flex items-start space-x-2">
            <Icon name="check" className="text-accent h-4 w-4" />
            <span>This means it&rsquo;s super fast, always online, and safe from hackers</span>
          </li>
          <li className="flex items-start space-x-2">
            <Icon name="check" className="text-accent h-4 w-4" />
            <span>You don&rsquo;t need to manage servers or pay extra for hosting</span>
          </li>
          <li className="flex items-start space-x-2">
            <Icon name="check" className="text-accent h-4 w-4" />
            <span>Whether basic or full of automation, your site just works &mdash; we handle it all</span>
          </li>
        </ul>
      </div>
    </Container>
  </StyledSection>
);

export default PricingTable;