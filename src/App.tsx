import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
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
              <ContactCTA />
              <Footer />
            </>
          } />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/leistungen" element={<LeistungenPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;