import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import GaleriaPage from './pages/GalleryPage';
import LeistungenPage from './pages/LeistungenPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Services />
              <About />
              <Gallery />
              <Testimonials />
              <ContactCTA />
              <Footer />
            </>
          } />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;