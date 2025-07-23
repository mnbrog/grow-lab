import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PricingTable from '../components/sections/PricingTable';

const WebsitePlansPage = () => (
  <>
    <Header />
    <main>
      <PricingTable />
    </main>
    <Footer />
  </>
);

export default WebsitePlansPage;
