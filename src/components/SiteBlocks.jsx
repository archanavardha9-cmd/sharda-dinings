import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export function PageHero({ image, alt, eyebrow, title, copy, actions, note, className = '' }) {
  return (
    <section className={`page-hero ${className}`}>
      <img className="page-hero__image" src={image} alt={alt} fetchPriority="high" />
      <div className="page-hero__shade" />
      <div className="page-hero__content fade-up">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="page-hero__copy">{copy}</p>
        {actions && <div className="page-hero__actions">{actions}</div>}
      </div>
      {note && <span className="hero-note">{note}</span>}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy, center = false, className = '' }) {
  return (
    <header className={`section-head${center ? ' section-head--center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  );
}

export function PhotoFrame({ src, alt, className = '', loading = 'lazy', position }) {
  return (
    <div className={`photo ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

export function ArrowLink({ to, children, className = '' }) {
  return (
    <a className={`text-link ${className}`} href={to}>
      {children}
      <ArrowRight size={14} aria-hidden="true" />
    </a>
  );
}

export function WhatsAppEnquiryForm({ kind, title, copy, buttonLabel = 'Send enquiry' }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const message = [
      `Hello Sharda Dinings, I would like to enquire about ${kind}.`,
      `Name: ${values.get('name')}`,
      `Phone: ${values.get('phone')}`,
      values.get('date') ? `Preferred date: ${values.get('date')}` : '',
      values.get('guests') ? `Guests: ${values.get('guests')}` : '',
      values.get('notes') ? `Notes: ${values.get('notes')}` : '',
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(message)}`;
    const popup = window.open(url, '_blank');
    if (!popup) window.location.assign(url);
    setSubmitted(true);
  };

  return (
    <div className="form-panel">
      {submitted ? (
        <div role="status" className="form-confirmation">
          <span className="eyebrow">One last step</span>
          <h3 className="serif">{title}</h3>
          <p className="section-copy">
            Your enquiry has been prepared in WhatsApp. Send the message there and our team can confirm availability.
          </p>
          <a
            className="button"
            href={`https://wa.me/${BUSINESS_INFO.whatsapp.number.replace('+', '')}`}
            target="_blank"
            rel="noreferrer"
          >
            Continue to WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      ) : (
        <>
          <div className="enquiry-heading">
            <span className="eyebrow">{kind} enquiry</span>
            <h3 className="serif">{title}</h3>
            {copy && <p className="section-copy">{copy}</p>}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor={`${kind}-name`}>Your name</label>
                <input id={`${kind}-name`} name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor={`${kind}-phone`}>Phone / WhatsApp</label>
                <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor={`${kind}-date`}>Preferred date</label>
                <input id={`${kind}-date`} name="date" type="date" />
              </div>
              <div className="field">
                <label htmlFor={`${kind}-guests`}>Guests</label>
                <input id={`${kind}-guests`} name="guests" type="number" min="1" max="150" inputMode="numeric" />
              </div>
              <div className="field field--wide">
                <label htmlFor={`${kind}-notes`}>Anything we should know?</label>
                <textarea id={`${kind}-notes`} name="notes" rows="3" />
              </div>
            </div>
            <button className="button form-submit" type="submit">{buttonLabel}</button>
            <p className="form-footnote">We’ll open a WhatsApp draft so you can send your request directly.</p>
          </form>
        </>
      )}
    </div>
  );
}
