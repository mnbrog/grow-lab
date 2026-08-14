import React from 'react';
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
      'Your online presence: built, hosted, and launched for you.',
    popular: false,
    features: [
      '1–3 page branded website (mobile ready)',
      'Hosted on Netlify: fast, secure, always live',
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
    popular: true,
    features: [
      'Website up to 8 pages + landing page',
      'Fully branded style kit',
      'Hosted on Netlify: optimized for mobile, SEO & speed',
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
    popular: false,
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
  <StyledSection id="pricing" className="py-28 text-white sm:py-32">
    <Container>
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="eyebrow mb-4">Plans</p>
        <h2 className="text-display-sm font-heading font-black text-white">
          GrowLab Business Launch Plans
        </h2>
        <p className="mx-auto mt-6 text-gray-300">
          We build, host, and grow your business online &mdash; no tech skills
          needed. Every site is hosted on <strong className="text-white">Netlify</strong>,
          a fast, secure, always-on platform used by companies like Nike and
          Peloton.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
        {plans.map((plan) => (
          <Reveal key={plan.name}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-accent-400/70 bg-ink-700 lg:-translate-y-4 lg:shadow-2xl lg:shadow-accent-400/10'
                  : 'border-white/10 bg-ink-800 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-3 font-heading text-4xl font-black text-white">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-gray-400">{plan.tagline}</p>

              <ul className="mt-8 flex-grow space-y-3 border-t border-white/10 pt-8 text-sm text-gray-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="mt-8 w-full"
                as="a"
                variant={plan.popular ? 'primary' : 'secondary'}
                href={`/contact?plan=${encodeURIComponent(plan.name)}`}
              >
                Choose {plan.name}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl">
        <h3 className="mb-6 text-center text-base font-semibold text-white">
          Hosting &amp; Tech, Explained
        </h3>
        <ul className="grid gap-4 text-sm text-gray-300 sm:grid-cols-2">
          <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
            <span>Every website is <strong className="text-white">hosted by GrowLab on Netlify</strong></span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
            <span>Fast, always online, and safe from hackers &mdash; by default</span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
            <span>You don&rsquo;t manage servers or pay extra for hosting</span>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
            <span>Basic or full of automation, your site just works &mdash; we handle it</span>
          </li>
        </ul>
      </div>
    </Container>
  </StyledSection>
);

export default PricingTable;
