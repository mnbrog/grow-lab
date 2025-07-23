import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Container from '../shared/Container';
import Icon from '../ui/Icon';

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
  <section className="bg-primary/10 py-20">
    <Container>
       <h2 className="text-3xl text-center mb-12">Flexible plans for any project</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} title={plan.name} className="text-center">
            <p className="mt-2 text-4xl">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-300">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center justify-center space-x-2">
                  <Icon name="check" className="text-accent h-4 w-4" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full">Choose Plan</Button>
          </Card>
        ))}
      </div>
    </Container>
  </section>
);

export default PricingTable;