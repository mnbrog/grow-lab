import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/shared/Container';
import Button from '../../components/ui/Button';

const EmailMarketingPage = () => (
  <>
    <Header />
    <section className="bg-gradient-to-b from-[#0A2640] to-[#071B30] py-24 text-white">
      <Container className="text-center">
        <h1 className="text-4xl font-bold mb-4">Email Marketing</h1>
        <p className="text-lg text-gray-300 mb-8">Build your list and send newsletters or drip campaigns automatically.</p>
        <Button>Get Started</Button>
        {/* Add custom sections here */}
      </Container>
    </section>
    <Footer />
  </>
);

export default EmailMarketingPage;
