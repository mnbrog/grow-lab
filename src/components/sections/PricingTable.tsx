import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Container from '../shared/Container';

const plans = [
  {
    name: 'Starter',
    price: '$49/mo',
    features: ['Up to 5 pages', 'Basic SEO', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$99/mo',
    features: ['Up to 15 pages', 'SEO optimization', 'Priority support'],
  },
  {
    name: 'Scale',
    price: '$199/mo',
    features: ['Unlimited pages', 'Custom integrations', 'Dedicated support'],
  },
];

const PricingTable = () => (
  <section className="bg-gray-50 py-16">
    <Container>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} title={plan.name} className="text-center">
            <p className="mt-2 text-3xl font-extrabold text-gray-900">{plan.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center justify-center space-x-2">
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default PricingTable;
