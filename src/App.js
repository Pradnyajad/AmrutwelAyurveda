import './App.css';
import Navbar from './components/Navbar';
import AboutAmrutwel from './components/AboutAmrutwel';
import Services from './components/Services';
import Products from './components/Products';
import PricingPlans from './components/PricingPlans';
// import WhatWeOffer from './components/WhatWeOffer';
import Contact from './components/Contact';
import TestimonialCarousel from './components/TestimonialCarousel';
import OurPackages from './components/OurPackages';
import Footer from './components/Footer';








function App() {
  return (
    <>
 <Navbar></Navbar>
 <AboutAmrutwel></AboutAmrutwel>
 <Services></Services>
 <Products></Products>
 <TestimonialCarousel></TestimonialCarousel>
 <OurPackages></OurPackages>
 <PricingPlans></PricingPlans>
 {/* <WhatWeOffer></WhatWeOffer> */}
 <Contact></Contact>
 <Footer></Footer>
     </>
  );
}

export default App;
