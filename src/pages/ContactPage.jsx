import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, CheckCircle2, Navigation, Building2, Sparkles, Utensils } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { GildedDivider, NumberedPill } from '../components/DecorativeGraphics';

export default function ContactPage({ onOpenEnquiry, onOpenVerification }) {
  const [department, setDepartment] = useState('Restaurant Table');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `Hello Sharda Dinings (${department} Desk), I have an enquiry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'None'}\nDepartment: ${department}\nMessage: ${formData.message || 'Please connect regarding services.'}`;
    const targetPhone = department.includes('Banquet') ? BUSINESS_INFO.phones[1].number : BUSINESS_INFO.whatsapp.number;
    const whatsappUrl = `https://wa.me/${targetPhone.replace('+', '')}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1617] overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO & CONCIERGE MATRIX (Mikuni Influence)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-[#1C1617] text-[#FAF7F2] border-b border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NumberedPill current="07" total="07" label="CONCIERGE & ACCESS" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#FAF7F2] leading-tight">
            Concierge <span className="text-[#D4AF37] italic font-normal">& Access</span>
          </h1>
          <p className="font-serif italic text-sm sm:text-base text-[#FAF7F2]/70 font-light">
            Direct department channels · Mandir proximity · Verified location
          </p>

          <GildedDivider className="my-3" />

          {/* 3 Department Desks Strip (Streamlined) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-left">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold block">
                Desk 01 · All-Day Dining
              </span>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mt-0.5">
                Dining, Cafe & Takeaway
              </h3>
              <p className="text-[11px] text-[#FAF7F2]/65 mt-1 leading-relaxed">
                Table bookings, booth requests, takeaway boxes, and Olive Cafe brews.
              </p>
              <div className="pt-3 mt-3 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-mono text-xs font-bold text-[#D4AF37] hover:underline block">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold block">
                Desk 02 · Events
              </span>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mt-0.5">
                Banquets & Celebrations
              </h3>
              <p className="text-[11px] text-[#FAF7F2]/65 mt-1 leading-relaxed">
                Wedding receptions, sagai, sangeet rituals, and custom banquet thalis.
              </p>
              <div className="pt-3 mt-3 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="font-mono text-xs font-bold text-[#D4AF37] hover:underline block">
                  {BUSINESS_INFO.phones[1].display}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] font-bold block">
                Desk 03 · Accommodation
              </span>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mt-0.5">
                Hotel Front Desk
              </h3>
              <p className="text-[11px] text-[#FAF7F2]/65 mt-1 leading-relaxed">
                11 AC rooms, direct check-in tariffs, and family wedding room blocks.
              </p>
              <div className="pt-3 mt-3 border-t border-white/10">
                <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="font-mono text-xs font-bold text-[#D4AF37] hover:underline block">
                  {BUSINESS_INFO.phones[0].display}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: LANDMARK & DIRECTIONS CANVAS (Side-by-Side)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#EFE8DC]">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-[#B94E35] font-mono font-bold block">
              Physical Location
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1C1617]">
              Finding Sharda Dinings in Gorakhpur
            </h2>
            <p className="text-xs text-[#1C1617]/70 leading-relaxed font-light">
              Centrally situated along NH 29 Sonauli Road, just 5–10 minutes walk from Gorakhnath Mandir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 6 cols: Facade Photo & Wayfinding Specs */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 border border-[#EFE8DC] shadow-sm flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow border border-[#D4AF37]/30 h-60 image-zoom-container">
                  <img
                    src="/images/home/sharda-dinings-exterior-night.webp"
                    alt="Sharda Dinings front facade at night"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#1C1617]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono text-[#FAF7F2]">
                    Opposite Kust Seva Ashram
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#B94E35] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1C1617]">Physical Address</h3>
                    <p className="text-xs text-[#1C1617]/75 leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city} — {BUSINESS_INFO.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Transit Markers */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-[#EFE8DC] text-center">
                  <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#B94E35] font-bold block">Mandir</span>
                    <span className="font-serif font-bold text-sm text-[#1C1617]">~1 km</span>
                    <span className="text-[10px] text-[#1C1617]/50 block">5–10 min walk</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#B94E35] font-bold block">Railway</span>
                    <span className="font-serif font-bold text-sm text-[#1C1617]">~3.5 km</span>
                    <span className="text-[10px] text-[#1C1617]/50 block">10–15 min</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#EFE8DC]">
                    <span className="text-[10px] font-mono text-[#B94E35] font-bold block">Airport</span>
                    <span className="font-serif font-bold text-sm text-[#1C1617]">~12 km</span>
                    <span className="text-[10px] text-[#1C1617]/50 block">25–30 min</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href="https://maps.google.com/?q=Sharda+Dinings+Gorakhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#B94E35] hover:bg-[#9E3F28] text-white text-xs font-mono uppercase tracking-wider font-bold rounded-full transition-all shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <span className="text-[11px] text-[#1C1617]/50">Parking on-site</span>
              </div>
            </div>

            {/* Right 6 cols: Google Map Embed Frame */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-4 border border-[#EFE8DC] shadow-sm flex flex-col">
              <div className="w-full flex-1 min-h-[300px] rounded-xl overflow-hidden border border-[#D4AF37]/30">
                <iframe
                  title="Sharda Dinings Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.401869814324!2d83.3598715!3d26.7953265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991448b11c9bbab%3A0xc3676449e7a9618b!2sSharda%20Dinings!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full min-h-[300px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: MANAGEMENT MESSAGE SUITE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#B94E35] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#FAF7F2]/80 font-bold block">
              Direct Inquiries
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal">
              Send a Note to Management
            </h2>
            <p className="text-xs text-[#FAF7F2]/80 max-w-md mx-auto">
              Whether you are organizing a family feast, inquiring about banquets, or reserving rooms, our team will reply swiftly.
            </p>
          </div>

          <div className="bg-[#1C1617] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-xl font-bold">Message Dispatched</h3>
                <p className="text-xs text-[#FAF7F2]/70 max-w-sm mx-auto">
                  Your message has opened on WhatsApp with the {department} desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#FAF7F2] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#2A2022] border border-white/20 text-[#FAF7F2] text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Restaurant Table">Restaurant Dining & Booths</option>
                      <option value="Olive Cafe">Olive Cafe & Brews</option>
                      <option value="Banquet Celebration">Banquets & Celebrations</option>
                      <option value="Hotel Reservation">Hotel Sharda Dinings Room Stays</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 87268 27777"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. guest@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your requirements, dates, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/20 text-[#FAF7F2] placeholder-white/30 text-xs focus:outline-none focus:border-[#D4AF37]"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-[#FAF7F2]/60 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D4AF37] hover:underline">{BUSINESS_INFO.email}</a></span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-2.5 bg-[#D4AF37] hover:bg-[#c29e2f] text-[#1C1617] text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Dispatch via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
