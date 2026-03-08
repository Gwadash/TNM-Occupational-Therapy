import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PaediatricTherapy from './pages/PaediatricTherapy';
import HandTherapy from './pages/HandTherapy';
import MedicoLegal from './pages/MedicoLegal';
import AboutOT from './pages/AboutOT';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/paediatric-therapy" element={<PaediatricTherapy />} />
            <Route path="/services/hand-therapy" element={<HandTherapy />} />
            <Route path="/services/medico-legal" element={<MedicoLegal />} />
            <Route path="/services/neuro-rehabilitation" element={<Services />} />
            <Route path="/about-ot" element={<AboutOT />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
