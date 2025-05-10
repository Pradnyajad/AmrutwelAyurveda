import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutAmrutwel from './components/AboutAmrutwel';
import Services from './components/Services';
import Products from './components/Products';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import OurPackages from './components/OurPackages';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import OnlineAyurvedaConsultation from './components/Online-Ayurveda-Consultation-For-OP';




function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        {/* Default route renders all components */}
        <Route 
          path="/AyurvedaWebsite" 
          element={
            <>
              <AboutAmrutwel />
              <Services />
              <Products />
              <PricingPlans />
              <OurPackages />
              {/* <Facilities></Facilities> */}
              <Contact />
              
               
            </>
          }
        />
        
        {/* Other individual routes */}
        <Route path="/about" element={<AboutAmrutwel />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-packages" element={<OurPackages />} />
        <Route path="/facilities" element={<Facilities />}/>
        <Route path="/online-ayurveda-consultation" element={<OnlineAyurvedaConsultation />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
