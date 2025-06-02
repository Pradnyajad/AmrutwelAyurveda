import React from 'react';
import AboutAmrutwel from './AboutAmrutwel';
import Services from './Services';
import Products from './Products';
import PricingPlans from './PricingPlans';
import OurPackages from './OurPackages';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      {/* Hero section or banner can go here */}
      <AboutAmrutwel />
      <Services />
      <Products />
      <PricingPlans />
      <OurPackages />
      <Contact />
    </div>
  );
};

export default Home;
