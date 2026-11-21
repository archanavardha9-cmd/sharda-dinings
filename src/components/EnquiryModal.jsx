import React, { useState } from 'react';
import { X, MessageSquare, CheckCircle2, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function EnquiryModal({ isOpen, onClose, initialType = 'restaurant' }) {
  if (!isOpen) return null;
  return <EnquiryModalContent key={initialType} onClose={onClose} initialType={initialType} />;
}

function EnquiryModalContent({ onClose, initialType }) {
  const [enquiryType, setEnquiryType] = useState(initialType || 'restaurant');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    preference: 'Main Dining Hall',
    specifics: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = () => {
    const lines = [
      `Hello Sharda Dinings, I would like to submit an enquiry for ${enquiryType.toUpperCase()}.`,
      `Name: ${formData.name || 'Guest'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      `Date: ${formData.date || 'Flexible'}`,
      enquiryType !== 'hotel' ? `Time: ${formData.time}` : '',
      `Guests: ${formData.guests}`,
      `Preference: ${formData.preference}`,
      formData.specifics ? `Notes: ${formData.specifics}` : '',
    ].filter(Boolean);

    return `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedPhone = formData.phone.replace(/[^\d+]/g, '');
    if (formData.name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Please enter a valid 10-digit phone or WhatsApp number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C1D18]/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-xl bg-[#FFFDF8] border border-[#E6D9CB] rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#2E1E19] to-[#4D2431] text-[#FFFDF8]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#EAB963] font-semibold">
              Direct Concierge Desk
            </p>
            <h3 id="enquiry-modal-title" className="font-serif text-2xl font-medium text-white mt-0.5">
              Sharda Dinings Reservations
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close reservation modal"
            className="w-10 h-10 inline-flex items-center justify-center text-[#E0D2C4] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FCEBE0] text-[#6E2434] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-[#2C1D18]">
                Enquiry Ready to Send
              </h4>
              <p className="text-sm text-[#61524A] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#2C1D18]">{formData.name}</strong>. Because this website runs without a live server database, tap below to dispatch your request via WhatsApp or call reception.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gloss-btn w-full sm:w-auto min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#6E2434] to-[#873143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm inline-flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].number}`}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-3 border border-[#E6D9CB] hover:bg-[#FAF3E8] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-sm inline-flex items-center justify-center gap-2 transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#6E2434]" />
                  <span>{BUSINESS_INFO.phones[0].display}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-4 gap-1 p-1 bg-[#FAF3E8] rounded-sm text-xs">
                {[
                  { id: 'restaurant', label: 'Dining' },
                  { id: 'cafe', label: 'Olive Cafe' },
                  { id: 'banquet', label: 'Banquet' },
                  { id: 'hotel', label: 'Hotel' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setEnquiryType(tab.id)}
                    className={`min-h-[38px] px-2 rounded-sm font-semibold transition-colors whitespace-nowrap ${
                      enquiryType === tab.id
                        ? 'bg-[#6E2434] text-white shadow-sm'
                        : 'text-[#61524A] hover:text-[#2C1D18]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {error && (
                <div role="alert" className="p-3 bg-[#FFF8EB] border border-[#D8A852] text-xs text-[#6B4A12]">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-[11px] uppercase tracking-wider text-[#61524A] font-semibold mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-white border border-[#E6D9CB] text-[#2C1D18] text-sm rounded-sm focus:border-[#6E2434] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-[11px] uppercase tracking-wider text-[#61524A] font-semibold mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-white border border-[#E6D9CB] text-[#2C1D18] text-sm rounded-sm focus:border-[#6E2434] focus:outline-none tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-date" className="block text-[11px] uppercase tracking-wider text-[#61524A] font-semibold mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-white border border-[#E6D9CB] text-[#2C1D18] text-sm rounded-sm focus:border-[#6E2434] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="modal-guests" className="block text-[11px] uppercase tracking-wider text-[#61524A] font-semibold mb-1.5">
                    {enquiryType === 'banquet' ? 'Expected Guests (Max 150)' : 'Guests'}
                  </label>
                  <select
                    id="modal-guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full min-h-[42px] px-3.5 py-2 bg-white border border-[#E6D9CB] text-[#2C1D18] text-sm rounded-sm focus:border-[#6E2434] focus:outline-none"
                  >
                    {enquiryType === 'banquet' ? (
                      <>
                        <option value="30-60 Guests">30 – 60 Guests</option>
                        <option value="60-100 Guests">60 – 100 Seated</option>
                        <option value="100-150 Guests">100 – 150 Floating</option>
                      </>
                    ) : enquiryType === 'hotel' ? (
                      <>
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="Family / Group">Family / Group</option>
                      </>
                    ) : (
                      <>
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="15-30">15 – 30 Guests (Private Lounge)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-[11px] uppercase tracking-wider text-[#61524A] font-semibold mb-1.5">
                  Notes or Dietary Preference
                </label>
                <textarea
                  id="modal-notes"
                  rows="2"
                  placeholder="Jain / pure veg preference, baby high chair, Deluxe / Super Deluxe room..."
                  value={formData.specifics}
                  onChange={(e) => setFormData({ ...formData, specifics: e.target.value })}
                  className="w-full px-3.5 py-2 bg-white border border-[#E6D9CB] text-[#2C1D18] text-sm rounded-sm focus:border-[#6E2434] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="gloss-btn flex-1 min-h-[44px] px-5 py-3 bg-gradient-to-r from-[#6E2434] to-[#873143] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
                >
                  Prepare Request
                </button>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-5 py-3 bg-[#1E3A5F] hover:bg-[#152944] text-white text-xs font-semibold uppercase tracking-wider rounded-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
