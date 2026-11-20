import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VerificationModal from './components/VerificationModal';
import EnquiryModal from './components/EnquiryModal';

import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';
import OliveCafePage from './pages/OliveCafePage';
import BanquetsPage from './pages/BanquetsPage';
import HotelPage from './pages/HotelPage';
import ContactPage from './pages/ContactPage';

function NotFoundPage() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto max-w-md">
        <span className="eyebrow">Sharda Dinings</span>
        <h1 className="section-title">This page isn’t on the menu.</h1>
        <p className="section-copy mx-auto mb-6">
          The requested page may have moved or been updated. Please return to Sharda Dinings home.
        </p>
        <Link to="/" className="button">Return home</Link>
      </div>
    </div>
  );
}

export default function App() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialType, setEnquiryInitialType] = useState('restaurant');

  const handleOpenEnquiry = (type = 'restaurant') => {
    setEnquiryInitialType(type);
    setIsEnquiryOpen(true);
  };

  const handleOpenVerification = () => {
    setIsVerificationOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFF9F0] text-[#2A2520]">
        <Navbar
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVerification={handleOpenVerification}
        />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/restaurant"
              element={
                <RestaurantPage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <MenuPage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/olive-cafe"
              element={
                <OliveCafePage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/banquets"
              element={
                <BanquetsPage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/hotel"
              element={
                <HotelPage
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenVerification={handleOpenVerification}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer
          onOpenVerification={handleOpenVerification}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <VerificationModal
          isOpen={isVerificationOpen}
          onClose={() => setIsVerificationOpen(false)}
        />
        <EnquiryModal
          isOpen={isEnquiryOpen}
          initialType={enquiryInitialType}
          onClose={() => setIsEnquiryOpen(false)}
        />
      </div>
    </Router>
  );
}
