import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PricingTable from '../components/sections/PricingTable';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const WebsitePlansPage = () => (
  <>
    <Helmet>
      <title>Website Plans | GrowLab</title>
      <meta
        name="description"
        content="Three monthly plans covering website design, hosting, and automation: Starter, Growth, and Pro Launch."
      />
    </Helmet>
    <Header />
    <main id="main-content" className="relative pt-12 text-white">
      <BackgroundGlow />
      <PricingTable />
    </main>
    <Footer />
  </>
);

export default WebsitePlansPage;
