import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeatureGrid from '../components/sections/FeatureGrid';
import PricingTable from '../components/sections/PricingTable';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import Portfolio from '../components/sections/Portfolio';
import StyledSection from '../components/sections/StyledSection';
import BackgroundGlow from '../components/layout/BackgroundGlow'; // ✅ Updated name

const IndexPage = () => (
  <>
    <Helmet>
      <title>GrowLab - Build, Automate, Grow</title>
      <meta
        name="description"
        content="GrowLab helps you build websites, automate workflows and leverage AI tools to grow your business."
      />
      <meta property="og:title" content="GrowLab" />
      <meta
        property="og:description"
        content="Digital products and automation templates for scaling modern businesses."
      />
    </Helmet>
    <Header />
    <main className="relative text-white">
      <BackgroundGlow /> {/* ✅ This is your global glow background */}
      <Hero />
      <StyledSection id="features">
        <FeatureGrid />
      </StyledSection>
      <StyledSection id="portfolio">
        <Portfolio />
      </StyledSection>
      <StyledSection id="pricing">
        <PricingTable />
      </StyledSection>
      <StyledSection id="testimonials">
        <Testimonials />
      </StyledSection>
      <StyledSection id="cta">
        <CallToAction />
      </StyledSection>
    </main>
    <Footer />
  </>
);

export default IndexPage;
