import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeatureGrid from '../components/sections/FeatureGrid';
import PricingTable from '../components/sections/PricingTable';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';

const IndexPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <FeatureGrid />
      <PricingTable />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default IndexPage;
