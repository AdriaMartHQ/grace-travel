import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import StyleGuide from './pages/StyleGuide';
import ItineraryS1 from './pages/ItineraryS1';
import ItineraryS2 from './pages/ItineraryS2';
import ItineraryS4 from './pages/ItineraryS4';
import ItineraryS5 from './pages/ItineraryS5';
import ItineraryZ1 from './pages/ItineraryZ1';
import ItineraryZ2 from './pages/ItineraryZ2';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/itineraries/s1-turkey-6-days" element={<ItineraryS1 />} />
        <Route path="/itineraries/s2-turkey-8-days" element={<ItineraryS2 />} />
        <Route path="/itineraries/s4-turkey-10-days" element={<ItineraryS4 />} />
        <Route path="/itineraries/s5-turkey-8-days" element={<ItineraryS5 />} />
        <Route path="/itineraries/z1-turkey-11-days" element={<ItineraryZ1 />} />
        <Route path="/itineraries/z2-revelation-4-days" element={<ItineraryZ2 />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
};

export default App;
