import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import LogoStrip from '../components/sections/LogoStrip';
import FeatureGrid from '../components/sections/FeatureGrid';
import PricingTable from '../components/sections/PricingTable';
import CallToAction from '../components/sections/CallToAction';
import Portfolio from '../components/sections/Portfolio';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const IndexPage = () => (
  <>
    <Helmet>
      <title>GrowLab | Web Design, Hosting & Automation for Growing Businesses</title>
      <meta
        name="description"
        content="GrowLab designs, hosts, and automates websites for ambitious small businesses: one monthly plan covering design, hosting, and growth."
      />
      <meta property="og:title" content="GrowLab" />
      <meta
        property="og:description"
        content="Websites built to grow with you. Design, hosting, and automation in one monthly plan."
      />
    </Helmet>
    <Header />
    <main id="main-content" className="relative text-white">
      <BackgroundGlow />
      <Hero />
      <LogoStrip />
      <FeatureGrid />
      <Portfolio />
      <PricingTable />
      <CallToAction />
    </main>
    <Footer />
  </>
);

export default IndexPage;
