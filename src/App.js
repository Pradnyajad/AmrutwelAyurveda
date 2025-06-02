import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';  // ✅ Add this import!
import AboutAmrutwel from './components/AboutAmrutwel';
import Services from './components/Services';
import Products from './components/Products';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import OurPackages from './components/OurPackages';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import OnlineAyurvedaConsultation from './components/Online-Ayurveda-Consultation-For-OP';
import PanchakarmaSection from './components/Panchakarma-Treatment';
import YogaAndMeditation from './components/YogaAndMeditation';
import ProductAndService from './components/ProductAndService';
import AboutUsPage from './components/AboutUsPage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />  {/* ✅ Home component */}
        
        {/* Other individual routes */}
        <Route path="/about" element={<AboutAmrutwel />} />
         <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-service" element={<ProductAndService />} />
        <Route path="/pricing" element={<PricingPlans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-packages" element={<OurPackages />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/online-ayurveda-consultation" element={<OnlineAyurvedaConsultation />} />
        <Route path="/yoga-and-meditation" element={<YogaAndMeditation />} />
        <Route path="/Panchakarma-Treatment" element={<PanchakarmaSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
