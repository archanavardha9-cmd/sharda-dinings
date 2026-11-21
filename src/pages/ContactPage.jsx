import React, { useState } from 'react';
import { CheckCircle2, Clock, ExternalLink, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { EditorialImage, SectionHeader } from '../components/SiteBlocks';
import { PromotionalTicker, Reveal } from '../components/MotionBlocks';
import { usePageSeo } from '../utils/seo';

export default function ContactPage({ onOpenVerification }) {
  usePageSeo({
    title: 'Contact, Directions, Ordering & Hotel Booking — Sharda Dinings Gorakhpur',
    description:
      'Visit Sharda Dinings at 763 A, Sonauli Rd / East Rajendra Nagar, Opposite Kust Seva Ashram, ~1 km from Gorakhnath Mandir.',
    image: '/images/home/sharda-dinings-exterior-night.webp',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'Restaurant Dining',
    message: '',
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = () => {
    const lines = [
      `Hello Sharda Dinings (${formData.department}), I have a contact enquiry:`,
      `Name: ${formData.name || 'Guest'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      formData.email ? `Email: ${formData.email}` : '',
      `Message: ${formData.message || 'Please call back.'}`,
    ].filter(Boolean);

    return `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = formData.phone.replace(/[^\d+]/g, '');
    if (formData.name.trim().length < 2) {
      setError('Please enter your name.');
      return;
    }
    if (digits.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError('Please enter a valid email address or leave email blank.');
      return;
    }
    if (formData.message.trim().length < 4) {
      setError('Please add a brief note about your enquiry.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFDF8] text-[#2C1D18]">
      {/* SECTION 1: SPLIT CONCIERGE HEADER + HAIRLINE DIRECTORY LEDGER — Mustard Cream */}
      <section className="py-14 lg:py-20 bg-[#FCF6E6] border-b border-[#E6D9CB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8C5E12]">
              Concierge &amp; Directions · Gorakhpur
            </p>
            <h1 className="font-serif text-[clamp(2.3rem,3.9vw,3.4rem)] font-medium leading-[1.08] tracking-tight text-[#2C1D18]">
              Reach our dining host, <em className="italic font-normal text-[#6E2434]">banquet desk,</em> or hotel reception.
            </h1>
            <p className="text-sm text-[#61524A] leading-relaxed">
              Located opposite Kust Seva Ashram along Sonauli Road / Gorakhnath Mandir Road (~5–10 minutes walk from Gorakhnath Mandir).
            </p>
            <button
              type="button"
              onClick={onOpenVerification}
              className="text-xs font-semibold text-[#6E2434] underline underline-offset-4 pt-1"
            >
              Inspect Research &amp; Audit Register
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t sm:border-t-0 sm:border-l border-[#DFD2C0] pt-6 sm:pt-0 sm:pl-8">
            <div className="space-y-1.5">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6E2434]">
                <MapPin className="w-3.5 h-3.5" /> Address
              </p>
              <p className="text-sm font-semibold text-[#2C1D18]">{BUSINESS_INFO.address.line1}</p>
              <p className="text-xs text-[#61524A] leading-relaxed">
                {BUSINESS_INFO.address.line2}, {BUSINESS_INFO.address.city}{' '}
                <span className="tabular-nums">{BUSINESS_INFO.address.pincode}</span>
              </p>
            </div>

            <div className="space-y-1.5 tabular-nums">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4C2D5C]">
                <Phone className="w-3.5 h-3.5" /> Helplines
              </p>
              {BUSINESS_INFO.phones.map((p) => (
                <div key={p.number}>
                  <a href={`tel:${p.number}`} className="block text-sm font-semibold text-[#2C1D18] hover:text-[#6E2434]">
                    {p.display}
                  </a>
                  <span className="text-[11px] text-[#61524A]">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 tabular-nums border-t border-[#E6D9CB] pt-4">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E3A5F]">
                <Clock className="w-3.5 h-3.5" /> Hours
              </p>
              <p className="text-xs text-[#2C1D18]">
                <strong>Dining &amp; Olive Cafe:</strong> {BUSINESS_INFO.timings.restaurant}
              </p>
              <p className="text-xs text-[#61524A]">
                <strong>Platform Delivery:</strong> {BUSINESS_INFO.timings.delivery}
                <br />
                <strong>Hotel Check-in / Out:</strong> {BUSINESS_INFO.timings.hotelCheckIn} / {BUSINESS_INFO.timings.hotelCheckOut}
              </p>
            </div>

            <div className="space-y-1.5 border-t border-[#E6D9CB] pt-4">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#125457]">
                <Mail className="w-3.5 h-3.5" /> Official Email
              </p>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="block text-sm font-semibold text-[#2C1D18] hover:text-[#6E2434] break-all"
              >
                {BUSINESS_INFO.email}
              </a>
              <p className="text-xs text-[#61524A]">Responds daily during hotel reception hours.</p>
            </div>
          </div>
        </div>
      </section>

      <PromotionalTicker
        items={[
          `Dining & Olive Cafe: ${BUSINESS_INFO.timings.restaurant}`,
          `Zomato & Swiggy Delivery: ${BUSINESS_INFO.timings.delivery}`,
          'Free On-Site Guest Parking',
          '~1 km from Gorakhnath Mandir (NH 29)',
          `Direct Dining Line: ${BUSINESS_INFO.phones[0].display}`,
          `Banquet Helpline: ${BUSINESS_INFO.phones[1].display}`,
        ]}
      />

      {/* SECTION 2: MAP & VERIFIED LISTINGS PORTAL — Dusty Blue */}
      <section className="py-14 lg:py-20 bg-[#EAF1F8] border-b border-[#D1DFEE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeader
              accentClass="text-[#1E3A5F]"
              eyebrow="Location &amp; Partner Portals"
              title="Look for our illuminated facade opposite Kust Seva Ashram."
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sharda+Dinings+East+Rajendra+Nagar+Gorakhpur"
              target="_blank"
              rel="noopener noreferrer"
              className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#1E3A5F] hover:bg-[#152944] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2 self-start whitespace-nowrap"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#CAD8E7] bg-[#E8DFD2] shadow-sm">
              <iframe
                title="Sharda Dinings Location in East Rajendra Nagar, Gorakhpur"
                src="https://maps.google.com/maps?q=Sharda%20Dinings%20East%20Rajendra%20Nagar%20Gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <EditorialImage
                src="/images/home/sharda-dinings-exterior-night.webp"
                alt="Evening street exterior of Sharda Dinings and Olive Cafe"
                frameClassName="rounded-xl shadow-sm"
                aspect="aspect-[16/10]"
                caption="Street entrance along Sonauli Road / NH 29."
              />

              <div className="pt-3 border-t border-[#CAD8E7] space-y-2.5 text-xs">
                <p className="font-semibold text-[#1E3A5F] uppercase tracking-[0.16em] text-[10px]">
                  Verified Food &amp; Hotel Listings
                </p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[#2C1D18] font-semibold">
                  <a href={BUSINESS_INFO.ordering.zomato} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    Zomato <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={BUSINESS_INFO.ordering.swiggy} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    Swiggy / Dineout <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={BUSINESS_INFO.ordering.magicpin} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    Magicpin <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={BUSINESS_INFO.bookingPlatforms.makemytrip} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    MakeMyTrip <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={BUSINESS_INFO.bookingPlatforms.goibibo} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    Goibibo <ExternalLink className="w-3 h-3" />
                  </a>
                  <a href={BUSINESS_INFO.bookingPlatforms.justdial} target="_blank" rel="noopener noreferrer" className="hover:text-[#6E2434] inline-flex items-center gap-1">
                    Justdial <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GENERAL ENQUIRY DESK — Soft Lavender Linen */}
      <section className="py-16 lg:py-22 bg-[#F2EEF9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="bg-white border border-[#DCD2EC] rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4C2D5C]">
                Direct Concierge Dispatch
              </p>
              <h2 className="font-serif text-3xl text-[#2C1D18]">
                Send your dining, banquet, or hotel message.
              </h2>
              <p className="text-sm text-[#4F445C]">
                Validating below formats an immediate WhatsApp or Email message directly to our desk without storing details on third-party servers.
              </p>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-4 border-t border-[#E6D9CB]">
                <CheckCircle2 className="w-8 h-8 text-[#6E2434] mx-auto" />
                <h3 className="font-serif text-2xl text-[#2C1D18]">Message Ready</h3>
                <p className="text-sm text-[#61524A]">
                  Thank you, <strong className="text-[#2C1D18]">{formData.name}</strong>. Choose WhatsApp or Email to send immediately.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gloss-btn min-h-[42px] px-5 py-2.5 bg-[#6E2434] text-white text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
                      `Enquiry: ${formData.department} - ${formData.name}`
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nPhone: ${formData.phone}\nDepartment: ${formData.department}\n\n${formData.message}`
                    )}`}
                    className="min-h-[42px] px-5 py-2.5 border border-[#DCD2EC] bg-[#FFFDF8] text-[#2C1D18] text-xs font-semibold uppercase tracking-wider rounded-lg inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#6E2434]" />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <div role="alert" className="p-3 bg-[#FFF8EB] border border-[#D8A852] text-xs text-[#6B4A12] rounded-lg">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Vikram Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#DCD2EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#DCD2EC] text-sm rounded-lg tabular-nums focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Email (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="guest@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full min-h-[42px] px-3.5 py-2 bg-[#FFFDF8] border border-[#DCD2EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-dept" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                      Department
                    </label>
                    <select
                      id="contact-dept"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full min-h-[42px] px-3 py-2 bg-[#FFFDF8] border border-[#DCD2EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                    >
                      <option value="Restaurant Dining">Restaurant Dining</option>
                      <option value="Olive Cafe">Olive Cafe</option>
                      <option value="Banquet & Events">Banquet &amp; Events</option>
                      <option value="Hotel Accommodation">Hotel Accommodation</option>
                      <option value="Feedback / General">Feedback / General</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-msg" className="block text-[11px] uppercase tracking-wider font-semibold text-[#61524A] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-msg"
                    rows="3"
                    required
                    placeholder="Share your preferred date, guest count, room query, or catering request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#FFFDF8] border border-[#DCD2EC] text-sm rounded-lg focus:border-[#4C2D5C] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="gloss-btn min-h-[44px] px-7 py-3 bg-[#6E2434] hover:bg-[#511825] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Prepare Enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
