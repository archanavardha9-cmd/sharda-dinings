import React, { useState } from 'react';

export function EditorialImage({
  src,
  alt,
  className = '',
  frameClassName = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  aspect = '',
  caption,
  dark = false,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`m-0 ${className}`}>
      <div className={`media-frame ${aspect} ${frameClassName}`}>
        {failed ? (
          <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-[#FAF3E8] to-[#FCEBE0] flex items-center justify-center p-6 text-center">
            <span className="font-serif text-base text-[#61524A]">{alt}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            decoding={loading === 'eager' ? 'sync' : 'async'}
            fetchPriority={fetchPriority || (loading === 'eager' ? 'high' : undefined)}
            referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
            className={`w-full h-full object-cover ${imgClassName}`}
          />
        )}
      </div>
      {caption && (
        <figcaption
          className={`mt-2.5 text-xs italic font-serif leading-relaxed ${
            dark ? 'text-[#E7D8CB]' : 'text-[#61524A]'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = 'left',
  dark = false,
  accentClass = '',
  className = '',
}) {
  const centered = align === 'center';
  const defaultEyebrowColor = dark ? 'text-[#EAB963]' : 'text-[#6E2434]';

  return (
    <header className={`${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 ${
            accentClass || defaultEyebrowColor
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.7rem] font-medium tracking-tight leading-[1.1] ${
          dark ? 'text-[#FFFDF8]' : 'text-[#2C1D18]'
        }`}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            centered ? 'mx-auto max-w-xl' : ''
          } ${dark ? 'text-[#EFE4D8]' : 'text-[#61524A]'}`}
        >
          {copy}
        </p>
      )}
    </header>
  );
}
