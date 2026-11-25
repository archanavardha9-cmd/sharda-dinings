import React from 'react';
import { X, ShieldCheck, ExternalLink } from 'lucide-react';
import { VERIFICATION_REGISTER } from '../data/verificationRegister';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function VerificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="verification-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C1D18]/75 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFDF8] border border-[#E6D9CB] rounded-sm shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#2E1E19] to-[#4D2431] text-[#FFFDF8]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#EAB963]" aria-hidden="true" />
            <div>
              <h3 id="verification-modal-title" className="font-serif text-2xl font-medium">
                Business Verification &amp; Research Register
              </h3>
              <p className="text-xs text-[#E0D2C4]">
                Verified cross-platform findings and items awaiting owner confirmation
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close verification register"
            className="w-10 h-10 inline-flex items-center justify-center text-[#E0D2C4] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#2C1D18]">
          <p className="p-4 bg-[#FAF3E8] border border-[#E6D9CB] text-xs leading-relaxed text-[#57453A]">
            <strong className="text-[#6E2434]">Research &amp; Transparency Policy:</strong> All menu items, delivery hours, room categories, and policies were verified across Zomato, Swiggy, MakeMyTrip, Goibibo, Justdial, and Trip.com. Records requiring formal management sign-off appear below.
          </p>

          <div className="divide-y divide-[#E6D9CB] border border-[#E6D9CB] bg-white">
            {VERIFICATION_REGISTER.map((item) => (
              <div key={item.id} className="p-4 sm:p-5 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#61524A]">
                  <span className="font-mono font-semibold text-[#6E2434] tabular-nums">
                    {item.id} · {item.category}
                  </span>
                  <span className="font-semibold text-[#2C1D18]">
                    {item.priority} Priority
                  </span>
                </div>
                <h4 className="font-serif text-xl text-[#2C1D18] font-medium">{item.item}</h4>
                <p className="text-xs text-[#61524A]">
                  <strong className="text-[#2C1D18]">Source:</strong> {item.currentSource}
                </p>
                <p className="text-xs text-[#61524A]">
                  <strong className="text-[#2C1D18]">Status:</strong> {item.status}
                </p>
                <p className="text-xs text-[#6E2434] font-semibold pt-1">
                  Confirmation needed: {item.actionRequired}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-[#61524A] mb-3">
              Verified Public Platforms &amp; Booking Portals
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              {[
                ['Zomato Dine-Out & Menu', BUSINESS_INFO.ordering.zomato],
                ['Swiggy Restaurant Menu & Ordering', BUSINESS_INFO.ordering.swiggy],
                ['Magicpin Dining Page', BUSINESS_INFO.ordering.magicpin],
                ['MakeMyTrip Hotel Booking', BUSINESS_INFO.bookingPlatforms.makemytrip],
                ['Goibibo Hotel Search', BUSINESS_INFO.bookingPlatforms.goibibo],
                ['Justdial Verified Profile', BUSINESS_INFO.bookingPlatforms.justdial],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#FAF3E8] hover:bg-[#F2E6D3] text-[#2C1D18] font-medium transition-colors"
                >
                  <span>{label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6E2434]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#E6D9CB] bg-[#FAF3E8] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-[#6E2434] hover:bg-[#511825] text-white rounded-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
