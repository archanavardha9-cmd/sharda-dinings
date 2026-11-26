import React, { Suspense, lazy, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VerificationModal from './components/VerificationModal';
import EnquiryModal from './components/EnquiryModal';
import ErrorBoundary from './components/ErrorBoundary';
import {
  PROJECT_PREVIEW_POPUP_ENABLED,
  isPreviewEmbedMode,
} from './config/previewPopupConfig';

const WebsitePreviewPopup = lazy(() => import('./components/WebsitePreviewPopup'));

import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';
import OliveCafePage from './pages/OliveCafePage';
import BanquetsPage from './pages/BanquetsPage';
import HotelPage from './pages/HotelPage';
import ContactPage from './pages/ContactPage';

function NotFoundPage() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-6 py-24 text-center bg-[#FFFDF8]">
      <div className="mx-auto max-w-md space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6E2434]">
          Sharda Dinings
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2C1D18] leading-tight">
          This page isn’t on the menu.
        </h1>
        <p className="text-sm text-[#61524A] leading-relaxed">
          The requested page may have moved or been updated. Please return to Sharda Dinings home.
        </p>
        <Link
          to="/"
          className="gloss-btn inline-flex min-h-[44px] items-center justify-center px-6 py-3 bg-[#6E2434] hover:bg-[#511825] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialType, setEnquiryInitialType] = useState('restaurant');
  const footerRef = useRef(null);
  const shouldShowPreviewPopup = PROJECT_PREVIEW_POPUP_ENABLED && !isPreviewEmbedMode();

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
      <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#2C1D18]">
        <Navbar
          onOpenEnquiry={handleOpenEnquiry}
          onOpenVerification={handleOpenVerification}
        />

        <main className="flex-1">
          <ErrorBoundary>
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
        </ErrorBoundary>
      </main>

        <Footer
          footerRef={footerRef}
          onOpenVerification={handleOpenVerification}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {shouldShowPreviewPopup && (
          <Suspense fallback={null}>
            <WebsitePreviewPopup footerRef={footerRef} />
          </Suspense>
        )}

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
