import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ArchEmblem, SpiceStar } from '../components/DecorativeGraphics';

export default function ContactPage({ onOpenVerification }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#241C1A]">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: CONTACT INFORMATION — Typography-Led & Colourful
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7] border-b border-[#E8B9A4]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B94E35] text-xs text-[#B94E35] font-bold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-brand font-black tracking-tight text-[#241C1A]">
            CONTACT & <span className="text-[#B94E35] font-display italic font-normal">Location</span>
          </h1>

          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#79533D] font-light leading-relaxed">
            Conveniently situated on the Gorakhnath Road corridor in East Rajendra Nagar, Gorakhpur. Our concierge is ready to assist you.
          </p>
        </div>
      </section>

      {/* 4 Colorful Action Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E8B9A4] space-y-3 shadow-sm hover:border-[#B94E35] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#B94E35]/10 flex items-center justify-center text-[#B94E35]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#241C1A]">Address</h3>
            <p className="text-xs text-[#79533D] leading-relaxed">
              {BUSINESS_INFO.address.line1}<br />
              {BUSINESS_INFO.address.line2}<br />
              {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
            </p>
            <div className="text-[11px] text-[#B94E35] font-bold pt-1">
              Near Gorakhnath Mandir
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E8B9A4] space-y-3 shadow-sm hover:border-[#B94E35] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#B94E35]/10 flex items-center justify-center text-[#B94E35]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#241C1A]">Phone Lines</h3>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="block text-stone-500 text-[10px] uppercase font-bold">Primary Desk</span>
                <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-bold text-[#241C1A] hover:text-[#B94E35]">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
              <div>
                <span className="block text-stone-500 text-[10px] uppercase font-bold">Banquet Helpdesk</span>
                <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="font-bold text-[#241C1A] hover:text-[#B94E35]">
                  {BUSINESS_INFO.phones[1].display}
                </a>
              </div>
            </div>
          </div>

          {/* Email & WhatsApp */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E8B9A4] space-y-3 shadow-sm hover:border-[#B94E35] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#D7A84B]/20 flex items-center justify-center text-[#B88528]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#241C1A]">Digital & WhatsApp</h3>
            <div className="space-y-2 text-xs">
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#241C1A] hover:text-[#B94E35] block truncate font-medium">
                {BUSINESS_INFO.email}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(BUSINESS_INFO.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="p-6 rounded-3xl bg-white border-2 border-[#E8B9A4] space-y-3 shadow-sm hover:border-[#B94E35] transition-colors">
            <div className="w-10 h-10 rounded-2xl bg-[#65765A]/15 flex items-center justify-center text-[#65765A]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#241C1A]">Hours</h3>
            <div className="space-y-1 text-xs text-[#79533D]">
              <div className="flex justify-between">
                <span>Dine-In:</span>
                <strong className="text-[#241C1A]">11 AM – 11 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Olive Cafe:</span>
                <strong className="text-[#241C1A]">11 AM – 11 PM</strong>
              </div>
              <div className="flex justify-between">
                <span>Delivery:</span>
                <strong className="text-[#241C1A]">12 PM – 9:30 PM</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: LOCATION & MAP — Interactive Google Maps Embed
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-[#E8B9A4] p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#241C1A]">Google Map & Navigation</h3>
                <p className="text-xs text-[#79533D]">East Rajendra Nagar, Gorakhnath Road</p>
              </div>
              <a
                href="https://maps.google.com/?q=Sharda+Dinings+Gorakhpur+Rajendra+Nagar"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#B94E35] text-white font-bold text-xs flex items-center space-x-1.5 shadow"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open App</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E8B9A4] h-80 relative shadow-inner">
              <iframe
                title="Sharda Dinings Location Map"
                src="https://maps.google.com/maps?q=Sharda%20Dinings%20Gorakhpur%20Uttar%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="text-xs text-[#79533D] space-y-1">
              <p>• Gorakhnath Mandir: ~1.5 km (5-7 mins drive)</p>
              <p>• Gorakhpur Railway Station: ~4.5 km</p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              SECTION 3: ENQUIRY FORM — Distinctive Warm Terracotta Block
          ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#B94E35] text-white shadow-2xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D7A84B] font-bold">Send Message</span>
                <h3 className="text-3xl font-serif font-bold text-white mt-1">Direct to Management</h3>
                <p className="text-xs text-[#FFF9F0]/80 mt-1">For corporate packages, wedding queries, or general guest assistance.</p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white text-[#B94E35] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold">Message Sent Successfully</h4>
                  <p className="text-xs text-[#FFF9F0]/80">Thank you, <strong className="text-white">{contactForm.name}</strong>. Our management team will get back to you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="px-5 py-2 rounded-full bg-white text-[#B94E35] text-xs font-bold uppercase">
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7A84B] font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Tiwari"
                      value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-[#241C1A] text-sm focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7A84B] font-bold mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={contactForm.phone}
                        onChange={e => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white text-[#241C1A] text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D7A84B] font-bold mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="e.g. ananya@example.com"
                        value={contactForm.email}
                        onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white text-[#241C1A] text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7A84B] font-bold mb-1">Subject</label>
                    <select
                      value={contactForm.subject}
                      onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white text-[#241C1A] text-sm focus:outline-none"
                    >
                      <option>General Enquiry</option>
                      <option>Table Reservation</option>
                      <option>Banquet & Wedding Event</option>
                      <option>Hotel Accommodation</option>
                      <option>Olive Cafe Pre-Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7A84B] font-bold mb-1">Your Message *</label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Write your note here..."
                      value={contactForm.message}
                      onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-white text-[#241C1A] text-sm focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#D7A84B] hover:bg-[#C29538] text-[#241C1A] font-bold text-xs uppercase tracking-widest transition-all shadow-md"
                  >
                    Send Direct Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Bar */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#F3E8D7] border-t border-[#E8B9A4]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#79533D]">
          <div className="flex items-center space-x-3">
            <span className="font-bold">Official Channels:</span>
            <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-[#B94E35]">
              <FacebookIcon className="w-4 h-4 text-[#B94E35]" />
              <span>Facebook</span>
            </a>
            <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center space-x-1 hover:text-[#B94E35]">
              <InstagramIcon className="w-4 h-4 text-[#B94E35]" />
              <span>Instagram</span>
            </a>
          </div>
          <button onClick={onOpenVerification} className="text-[#B94E35] font-bold underline">
            Open Business Verification Register
          </button>
        </div>
      </section>
    </div>
  );
}
