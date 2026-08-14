import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Button from '../components/ui/Button';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const PLAN_NAMES = ['Starter', 'Growth', 'Pro Launch'];

interface ContactPageProps {
  location?: { search?: string };
}

const ContactPage: React.FC<ContactPageProps> = ({ location }) => {
  const selectedPlan = useMemo(() => {
    if (typeof window === 'undefined' || !location?.search) return '';
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan') || '';
    return PLAN_NAMES.includes(plan) ? plan : '';
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Contact | GrowLab</title>
        <meta
          name="description"
          content="Book a free strategy call with GrowLab to talk through your website, hosting, and automation plan."
        />
      </Helmet>
      <Header />
      <main id="main-content" className="relative text-white">
        <BackgroundGlow />
        <section className="py-28 sm:py-36">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="eyebrow mb-6">Contact</p>
                <h1 className="font-heading text-display-sm font-black text-white">
                  Let's build your next launch.
                </h1>
                <p className="mt-6 max-w-md text-lg text-gray-300">
                  Tell us a bit about your business. We'll reply within one
                  business day with next steps. No obligation, no pressure.
                </p>

                <dl className="mt-12 space-y-8 border-t border-white/10 pt-8">
                  <div>
                    <dt className="eyebrow mb-2 text-gray-500">What happens next</dt>
                    <dd className="text-gray-300">
                      A 15-minute call to understand your goals, followed by a
                      clear recommendation on the right plan: Starter,
                      Growth, or Pro Launch.
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2 text-gray-500">Response time</dt>
                    <dd className="text-gray-300">Within 1 business day.</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-white/10 bg-ink-800 p-8 sm:p-10">
                {selectedPlan && (
                  <p className="mb-6 inline-flex items-center rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1.5 text-sm font-medium text-accent-300">
                    Selected plan: {selectedPlan}
                  </p>
                )}
                <form className="space-y-5" name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent-400"
                      placeholder="Jamie Rivera"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent-400"
                      placeholder="jamie@yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="plan" className="mb-1.5 block text-sm font-medium text-gray-300">
                      Plan you're interested in
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      defaultValue={selectedPlan}
                      className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition focus:border-accent-400"
                    >
                      <option value="">Not sure yet</option>
                      {PLAN_NAMES.map((plan) => (
                        <option key={plan} value={plan}>
                          {plan}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-300">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-accent-400"
                      placeholder="Tell us about your business and what you're looking for."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full" size="large">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
