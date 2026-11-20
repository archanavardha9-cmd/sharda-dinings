import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, Phone, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function EnquiryModal({ isOpen, onClose, initialType = 'restaurant' }) {
  const [enquiryType, setEnquiryType] = useState(initialType);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '19:30',
    guests: '2',
    specifics: '',
    cateringPreference: 'Mix (Veg & Non-Veg)',
    roomType: 'Deluxe AC Room'
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialType) {
      setEnquiryType(initialType);
    }
  }, [initialType]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*New Enquiry - Sharda Dinings*\n` +
      `*Type:* ${enquiryType.toUpperCase()}\n` +
      `*Name:* ${formData.name || 'Guest'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Date:* ${formData.date || 'Flexible'}\n` +
      `*Guests:* ${formData.guests}\n` +
      (enquiryType === 'banquet' ? `*Catering:* ${formData.cateringPreference}\n` : '') +
      (enquiryType === 'hotel' ? `*Room Type:* ${formData.roomType}\n` : '') +
      `*Notes:* ${formData.specifics || 'None'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#FFF9F0] border border-[#E8B9A4] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header - Terracotta */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#B94E35] text-white">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#D7A84B] font-bold">Direct Booking & Enquiries</span>
            <h3 className="text-xl font-serif font-bold text-white">Sharda Dinings Experience Desk</h3>
          </div>
          <button
            onClick={() => { setSubmitted(false); onClose(); }}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#B94E35]/10 border border-[#B94E35] flex items-center justify-center text-[#B94E35]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif text-[#241C1A]">Enquiry Received with Gratitude</h4>
              <p className="text-sm text-[#79533D] max-w-md mx-auto">
                Thank you, <strong className="text-[#241C1A]">{formData.name || 'Valued Guest'}</strong>. Our hospitality coordinator will review your request and connect with you at <strong className="text-[#241C1A]">{formData.phone}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Instantly</span>
                </button>
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F3E8D7] hover:bg-[#E8B9A4] text-[#241C1A] font-semibold text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Switcher */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#F3E8D7] rounded-xl text-xs">
                {[
                  { id: 'restaurant', label: 'Dining' },
                  { id: 'cafe', label: 'Olive Cafe' },
                  { id: 'banquet', label: 'Banquet' },
                  { id: 'hotel', label: 'Hotel Room' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setEnquiryType(tab.id)}
                    className={`py-2 px-1 rounded-lg font-bold transition-all text-center ${
                      enquiryType === tab.id
                        ? 'bg-[#B94E35] text-white shadow-sm'
                        : 'text-[#79533D] hover:text-[#241C1A]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#B94E35] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#B94E35] transition-colors"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">
                    {enquiryType === 'hotel' ? 'Duration / Nights' : 'Preferred Time'}
                  </label>
                  <input
                    type={enquiryType === 'hotel' ? 'text' : 'time'}
                    defaultValue={enquiryType === 'hotel' ? '1 Night' : formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35] transition-colors"
                  />
                </div>
              </div>

              {/* Guests & Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">
                    {enquiryType === 'banquet' ? 'Expected Guests (Up to 150)' : 'Number of Guests'}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                  >
                    {enquiryType === 'banquet' ? (
                      <>
                        <option value="30-50 Guests">30 – 50 Guests (Intimate Celebration)</option>
                        <option value="50-100 Guests">50 – 100 Guests (Standard Banquet)</option>
                        <option value="100-150 Guests">100 – 150 Guests (Grand Hall Gala)</option>
                      </>
                    ) : enquiryType === 'hotel' ? (
                      <>
                        <option value="1 Guest">1 Guest (Single Occupancy)</option>
                        <option value="2 Guests">2 Guests (Double Occupancy)</option>
                        <option value="3+ Guests / Family">3+ Guests / Family with Children</option>
                      </>
                    ) : (
                      <>
                        <option value="1-2 Guests">1 – 2 Guests</option>
                        <option value="3-5 Guests">3 – 5 Guests (Family)</option>
                        <option value="6-12 Guests">6 – 12 Guests (Large Table)</option>
                        <option value="15-30 Guests (Private Dining)">15 – 30 Guests (Private Dining Lounge)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">
                    {enquiryType === 'banquet' ? 'Catering' : enquiryType === 'hotel' ? 'Room Category' : 'Seating Preference'}
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] text-sm focus:outline-none focus:border-[#B94E35]"
                  >
                    {enquiryType === 'banquet' ? (
                      <>
                        <option>Pure Vegetarian Deluxe Buffet</option>
                        <option>Mix (Veg & Non-Veg Deluxe Buffet)</option>
                        <option>Pure Veg & Jain-Friendly Specialized Menu</option>
                      </>
                    ) : enquiryType === 'hotel' ? (
                      <>
                        <option>Deluxe AC King Bed Room</option>
                        <option>Executive AC Twin Bed Room</option>
                        <option>Multiple Rooms / Group Stay</option>
                      </>
                    ) : (
                      <>
                        <option>Main Dining Hall</option>
                        <option>Private Dining Lounge (15–30 Pax)</option>
                        <option>Olive Cafe Corner</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#79533D] font-bold mb-1">Special Occasion or Notes</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday anniversary, require baby chair, mild food..."
                  value={formData.specifics}
                  onChange={e => setFormData({ ...formData, specifics: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8B9A4] text-[#241C1A] placeholder-stone-400 text-sm focus:outline-none focus:border-[#B94E35]"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-xl bg-[#B94E35] hover:bg-[#963822] text-white font-bold text-sm transition-all shadow-md shadow-[#B94E35]/20"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
