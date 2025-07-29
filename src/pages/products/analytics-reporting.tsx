import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/shared/Container';
import Button from '../../components/ui/Button';

const AnalyticsReportingPage = () => (
  <>
    <Header />
    <section className="bg-gradient-to-b from-[#0A2640] to-[#071B30] py-24 text-white">
      <Container className="text-center">
        <h1 className="text-4xl font-bold mb-4">Analytics &amp; Reporting</h1>
        <p className="text-lg text-gray-300 mb-8">Track what’s working with simple dashboards and weekly insights.</p>
        <Button>Get Started</Button>
        {/* Add custom sections here */}
      </Container>
    </section>
    <Footer />
  </>
);

export default AnalyticsReportingPage;
