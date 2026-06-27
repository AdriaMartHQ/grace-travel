import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import type { Language, BaseTranslations } from './translations';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import About from './pages/About';
import StyleGuide from './pages/StyleGuide';
import AirportTransfer from './pages/AirportTransfer';
import ItineraryS1 from './pages/ItineraryS1';
import ItineraryS2 from './pages/ItineraryS2';
import ItineraryS4 from './pages/ItineraryS4';
import ItineraryS5 from './pages/ItineraryS5';
import ItineraryZ5 from './pages/ItineraryZ5';
import ItineraryZ1 from './pages/ItineraryZ1';
import ItineraryZ2 from './pages/ItineraryZ2';
import ItineraryZ6 from './pages/ItineraryZ6';
import ItineraryI1 from './pages/ItineraryI1';
import ItineraryB1 from './pages/ItineraryB1';
import ItineraryB2 from './pages/ItineraryB2';

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
        <Route path="/airport-transfer" element={<AirportTransfer />} />
        <Route path="/china-inbound/*" element={<Navigate to="/tours" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/itineraries/s1-turkey-6-days" element={<ItineraryS1 />} />
        <Route path="/itineraries/s2-turkey-8-days" element={<ItineraryS2 />} />
        <Route path="/itineraries/s4-turkey-10-days" element={<ItineraryS4 />} />
        <Route path="/itineraries/s5-turkey-8-days" element={<ItineraryS5 />} />
        <Route path="/itineraries/z5-paul-footsteps-9-days" element={<ItineraryZ5 />} />
        <Route path="/itineraries/z1-turkey-11-days" element={<ItineraryZ1 />} />
        <Route path="/itineraries/z2-revelation-4-days" element={<ItineraryZ2 />} />
        <Route path="/itineraries/z6-overland-seven-churches-7-days" element={<ItineraryZ6 />} />
        <Route path="/itineraries/i1-israel-holyland-8-days" element={<ItineraryI1 />} />
        <Route path="/itineraries/b1-balkan-3-countries-12-days" element={<ItineraryB1 />} />
        <Route path="/itineraries/b2-balkan-3-countries-10-days" element={<ItineraryB2 />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/style-guide" element={<StyleGuide />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC<{ initialLang: Language; initialT: BaseTranslations }> = ({ initialLang, initialT }) => {
  return (
    <LanguageProvider initialLang={initialLang} initialT={initialT}>
      <ScrollToTop />
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
