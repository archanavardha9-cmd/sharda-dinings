import React from 'react';
import { X, ShieldCheck, AlertCircle, ExternalLink } from 'lucide-react';
import { VERIFICATION_REGISTER } from '../data/verificationRegister';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function VerificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFF9F0] border border-[#E8B9A4] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#F3E8D7] bg-[#B94E35] text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-brand font-bold">Business Verification & Audit Register</h3>
              <p className="text-xs text-[#FFF9F0]/80">Adherence to verified public data sources & research boundaries</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#241C1A]">
          <div className="p-4 rounded-xl bg-[#F3E8D7] border border-[#E8B9A4] flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-[#B94E35] shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-[#79533D]">
              <strong className="text-[#241C1A]">Authentic Information Standard:</strong> In accordance with our brand guidelines, no prices, capacities, amenities, or operating hours are fabricated. All records requiring formal corporate confirmation are catalogued below.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#B94E35]">Live Verification Register</h4>
            <div className="space-y-3">
              {VERIFICATION_REGISTER.map((item) => (
                <div key={item.id} className="p-4 rounded-xl bg-white border border-[#E8B9A4] shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F3E8D7] text-[#79533D] font-bold">{item.id}</span>
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold ${
                      item.priority === 'Critical' ? 'bg-red-100 text-red-800 border border-red-300' :
                      item.priority === 'High' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                      'bg-stone-100 text-stone-700'
                    }`}>
                      {item.priority} Priority
                    </span>
                  </div>
                  <h5 className="font-bold text-[#241C1A] mb-1">{item.item}</h5>
                  <p className="text-xs text-[#79533D] mb-1"><strong className="text-[#241C1A]">Current Reference:</strong> {item.currentSource}</p>
                  <p className="text-xs text-[#79533D] mb-2"><strong className="text-[#241C1A]">Handling:</strong> {item.status}</p>
                  <div className="pt-2 border-t border-[#F3E8D7] text-[11px] text-[#B94E35] font-semibold">
                    <strong>Required Action:</strong> {item.actionRequired}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Source Links */}
          <div className="pt-4 border-t border-[#F3E8D7]">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#B94E35] mb-3">Public Listing References</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a href={BUSINESS_INFO.socials.zomato} target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-[#F3E8D7] hover:bg-[#E8B9A4] text-[#241C1A] transition-colors">
                <span className="font-semibold">Zomato Restaurant Listing</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B94E35]" />
              </a>
              <a href={BUSINESS_INFO.socials.justdial} target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-[#F3E8D7] hover:bg-[#E8B9A4] text-[#241C1A] transition-colors">
                <span className="font-semibold">Justdial Directory Record</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B94E35]" />
              </a>
              <a href={BUSINESS_INFO.socials.makemytrip} target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-[#F3E8D7] hover:bg-[#E8B9A4] text-[#241C1A] transition-colors">
                <span className="font-semibold">MakeMyTrip Property Listing</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B94E35]" />
              </a>
              <a href={BUSINESS_INFO.socials.wedmegood} target="_blank" rel="noreferrer" className="flex items-center justify-between p-2.5 rounded-lg bg-[#F3E8D7] hover:bg-[#E8B9A4] text-[#241C1A] transition-colors">
                <span className="font-semibold">WedMeGood Venue Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B94E35]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#F3E8D7] bg-[#F3E8D7] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-bold bg-[#B94E35] text-white rounded-lg hover:bg-[#963822] transition-colors shadow-sm"
          >
            Close Register
          </button>
        </div>
      </div>
    </div>
  );
}
