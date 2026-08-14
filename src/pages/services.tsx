import React from 'react';
import { Helmet } from 'react-helmet';
import {
  GlobeAltIcon,
  ArrowPathIcon,
  PaintBrushIcon,
  ChartBarIcon,
  LifebuoyIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const services = [
  {
    id: 'design',
    icon: GlobeAltIcon,
    title: 'Web Design & Build',
    description:
      'A custom, mobile-first site built around your business, never a drag-and-drop template.',
    points: [
      'Custom design, not a reused template',
      '1–3 pages on Starter, up to unlimited on Pro Launch',
      'Fast, modern build hosted on Netlify',
      'Launched in as little as two weeks',
    ],
  },
  {
    id: 'hosting',
    icon: LifebuoyIcon,
    title: 'Hosting & Care',
    description:
      'The same class of hosting infrastructure used by companies like Nike and Peloton, included on every plan.',
    points: [
      'Netlify hosting on every plan, no extra cost',
      'Automatic backups and uptime monitoring',
      'Monthly website & Google Business snapshot',
      'We handle updates so you never touch a server',
    ],
  },
  {
    id: 'automation',
    icon: ArrowPathIcon,
    title: 'Automation',
    description:
      'Booking flows, lead intake, and follow-ups that run in the background so nothing gets missed.',
    points: [
      'Booking and calendar embeds',
      'Lead intake flows that sync automatically',
      'Email marketing flows on Pro Launch',
      'From quarterly automations to a full content calendar, by plan',
    ],
  },
  {
    id: 'branding',
    icon: PaintBrushIcon,
    title: 'Branding & Content',
    description:
      'A cohesive visual identity and a steady stream of content, so the brand looks as sharp as the work you do.',
    points: [
      'AI-assisted logo and color palette',
      'Fully branded style kit on Growth and Pro Launch',
      'Monthly blog posts, social content, and short-form video',
      'Everything designed to feel like one brand',
    ],
  },
  {
    id: 'growth',
    icon: ChartBarIcon,
    title: 'SEO & Local Growth',
    description:
      'Built to be found, not just built to look good.',
    points: [
      'Google Business Profile setup and management',
      'SEO-optimized blog content',
      'Lead magnet funnels on Pro Launch',
      'Full Maps listing management on Pro Launch',
    ],
  },
  {
    id: 'support',
    icon: ChatBubbleLeftRightIcon,
    title: 'Strategy & Support',
    description: 'A real team on the other end, not a ticket queue.',
    points: [
      'Email support on every plan',
      'Priority email support on Growth',
      'Slack or direct-message support on Pro Launch',
      'Monthly 30-minute strategy calls on Pro Launch',
    ],
  },
];

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Services | GrowLab</title>
      <meta
        name="description"
        content="Web design, hosting, automation, branding, SEO, and ongoing support: everything your business needs online, in one monthly plan."
      />
    </Helmet>
    <Header />
    <main id="main-content" className="relative text-white">
      <BackgroundGlow />
      <section className="pt-32 pb-20 sm:pt-40">
        <Container>
          <p className="eyebrow mb-6">Services</p>
          <h1 className="max-w-3xl font-heading text-display-md font-black text-white">
            Everything your online presence needs. In one plan.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-300">
            No à la carte pricing, no chasing down five different vendors.
            GrowLab bundles design, hosting, automation, and growth into a
            single monthly plan.
          </p>
        </Container>
      </section>

      <section className="pb-28 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map(({ id, icon: IconComponent, title, description, points }) => (
              <Reveal key={id} as="div">
                <div
                  id={id}
                  className="scroll-mt-24 rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-10"
                >
                  <IconComponent className="h-8 w-8 text-accent-400" aria-hidden="true" />
                  <h2 className="mt-6 text-2xl font-semibold text-white">{title}</h2>
                  <p className="mt-3 text-gray-400">{description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-300">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent-400"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 text-gray-400">
              See exactly what's included on each plan.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href="/website-plans" variant="primary" size="large">
                Compare Plans
              </Button>
              <Button as="a" href="/contact" variant="ghost" size="large">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
    <Footer />
  </>
);

export default ServicesPage;
