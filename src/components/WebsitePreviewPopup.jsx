import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AlertTriangle, Check, MessageSquare, X } from 'lucide-react';
import {
  PROJECT_PREVIEW_CONFIG,
  buildPreviewWhatsAppUrl,
  getPreviewDeadlineLabel,
} from '../config/previewPopupConfig';

const VALID_PREVIEW_ROUTES = new Set([
  '/',
  '/restaurant',
  '/menu',
  '/olive-cafe',
  '/banquets',
  '/hotel',
  '/contact',
]);

const TRACKER_STAGES = [
  {
    id: 'frontend',
    title: 'Frontend Website Preview',
    status: 'Ready',
    completed: true,
  },
  {
    id: 'enquiry-dev',
    title: 'Enquiry System & Remaining Development',
    status: 'Not Started',
    completed: false,
  },
  {
    id: 'launch',
    title: 'Business Website Launch',
    status: 'Pending',
    completed: false,
  },
];

function getViewportHeight() {
  if (typeof window === 'undefined') return 0;
  return window.visualViewport ? window.visualViewport.height : window.innerHeight;
}

function findScrollContainer() {
  if (typeof document === 'undefined') return null;
  if (document.documentElement.scrollHeight > getViewportHeight() + 2) {
    return null; // window scrolling
  }
  const candidates = document.querySelectorAll('main, [data-scroll-container]');
  for (const el of candidates) {
    const style = window.getComputedStyle(el);
    if (
      (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
      el.scrollHeight > el.clientHeight + 2
    ) {
      return el;
    }
  }
  return null;
}

function getScrollTop(container) {
  if (container) return container.scrollTop;
  return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
}

function isFooterInTriggerZone(footerEl, container) {
  if (!footerEl) return false;
  const rect = footerEl.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;

  if (container) {
    const cRect = container.getBoundingClientRect();
    return rect.top <= cRect.bottom - 12 && rect.bottom > cRect.top;
  }

  const vh = getViewportHeight();
  return rect.top <= vh - 12 && rect.bottom > 0;
}

function isFooterBelowTriggerZone(footerEl, container) {
  if (!footerEl) return false;
  const rect = footerEl.getBoundingClientRect();
  if (container) {
    const cRect = container.getBoundingClientRect();
    return rect.top > cRect.bottom + 8;
  }
  return rect.top > getViewportHeight() + 8;
}

function ScaledIframeScreen({ src, title, viewportWidth, viewportHeight }) {
  const screenRef = useRef(null);
  const [scale, setScale] = useState(0.2);

  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;

    const updateScale = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w > 0 && h > 0) {
        setScale(Math.min(w / viewportWidth, h / viewportHeight));
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(el);
    return () => observer.disconnect();
  }, [viewportWidth, viewportHeight]);

  const scaledW = Math.round(viewportWidth * scale);
  const scaledH = Math.round(viewportHeight * scale);

  return (
    <div
      ref={screenRef}
      style={{ aspectRatio: `${viewportWidth} / ${viewportHeight}` }}
      className="w-full h-full relative overflow-hidden bg-[#FAF7F2] flex items-center justify-center"
    >
      <div
        style={{ width: `${scaledW}px`, height: `${scaledH}px` }}
        className="relative overflow-hidden shrink-0"
      >
        <iframe
          src={src}
          title={title}
          tabIndex={-1}
          aria-hidden="true"
          loading="eager"
          style={{
            width: `${viewportWidth}px`,
            height: `${viewportHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
          className="border-0 pointer-events-none select-none bg-[#FAF7F2] block"
        />
      </div>
    </div>
  );
}

export default function WebsitePreviewPopup({ footerRef }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isOpenRef = useRef(false);
  const isArmedRef = useRef(true);
  const hasScrolledDownRef = useRef(false);
  const lastScrollTopRef = useRef(0);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Reset trigger state on route change and observe the current route's footer
  useEffect(() => {
    let rafId = null;
    let observer = null;
    let scrollContainer = null;
    let scrollTarget = window;

    const setup = () => {
      scrollContainer = findScrollContainer();
      scrollTarget = scrollContainer || window;

      hasScrolledDownRef.current = false;
      isArmedRef.current = true;
      lastScrollTopRef.current = getScrollTop(scrollContainer);

      const getFooter = () =>
        (footerRef && footerRef.current) || document.querySelector('footer');

      const evaluateTrigger = (direction) => {
        const footerEl = getFooter();
        if (!footerEl) return;

        if (isFooterBelowTriggerZone(footerEl, scrollContainer)) {
          isArmedRef.current = true;
        }

        if (
          !isOpenRef.current &&
          isArmedRef.current &&
          hasScrolledDownRef.current &&
          direction === 'down' &&
          isFooterInTriggerZone(footerEl, scrollContainer)
        ) {
          isArmedRef.current = false;
          setIsOpen(true);
        }
      };

      const handleScroll = () => {
        if (rafId !== null) return;
        rafId = window.requestAnimationFrame(() => {
          rafId = null;
          const currentTop = getScrollTop(scrollContainer);
          const delta = currentTop - lastScrollTopRef.current;
          lastScrollTopRef.current = currentTop;

          let direction = 'none';
          if (delta > 1) {
            direction = 'down';
            hasScrolledDownRef.current = true;
          } else if (delta < -1) {
            direction = 'up';
          }

          evaluateTrigger(direction);
        });
      };

      const handleResize = () => {
        const footerEl = getFooter();
        if (footerEl && isFooterBelowTriggerZone(footerEl, scrollContainer)) {
          isArmedRef.current = true;
        }
      };

      const footerEl = getFooter();
      if (footerEl && typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (!entry) return;
            if (!entry.isIntersecting && isFooterBelowTriggerZone(footerEl, scrollContainer)) {
              isArmedRef.current = true;
              return;
            }
            if (
              entry.isIntersecting &&
              !isOpenRef.current &&
              isArmedRef.current &&
              hasScrolledDownRef.current
            ) {
              isArmedRef.current = false;
              setIsOpen(true);
            }
          },
          {
            root: scrollContainer,
            threshold: 0,
            rootMargin: '0px 0px -12px 0px',
          }
        );
        observer.observe(footerEl);
      }

      scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', handleResize, { passive: true });
      }

      return () => {
        if (rafId !== null) window.cancelAnimationFrame(rafId);
        if (observer) observer.disconnect();
        scrollTarget.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener('resize', handleResize);
        }
      };
    };

    const cleanup = setup();
    return cleanup;
  }, [location.pathname, footerRef]);

  // Lock background scroll, manage focus, and handle Escape while open
  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const focusTimer = window.requestAnimationFrame(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      } else if (dialogRef.current) {
        dialogRef.current.focus();
      }
    });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  const previewUrl = useMemo(() => {
    const targetRoute = VALID_PREVIEW_ROUTES.has(location.pathname) ? location.pathname : '/';
    return `${targetRoute}?preview=1`;
  }, [location.pathname]);

  const deadlineLabel = useMemo(() => getPreviewDeadlineLabel(), []);
  const activateHref = useMemo(
    () => buildPreviewWhatsAppUrl(PROJECT_PREVIEW_CONFIG.activationMessage),
    []
  );
  const changesHref = useMemo(
    () => buildPreviewWhatsAppUrl(PROJECT_PREVIEW_CONFIG.changesMessage),
    []
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-popup-title"
      ref={dialogRef}
      tabIndex={-1}
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-[#1C1617]/80 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[calc(100dvh-16px)] sm:max-h-[92dvh] bg-[#FFFDF8] border border-[#D4AF37]/40 rounded-sm shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Top Compact Header (Mobile-first order 1; Desktop placed in right column top) */}
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 flex items-center justify-between gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3.5 bg-[#1C1617] text-[#FAF7F2] border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={PROJECT_PREVIEW_CONFIG.logoSrc}
              alt={PROJECT_PREVIEW_CONFIG.projectName}
              className="h-6 sm:h-8 w-auto object-contain shrink-0"
            />
            <div className="min-w-0">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#D4AF37] font-semibold truncate">
                Client Website Preview
              </p>
              <p className="text-[11px] sm:text-xs text-[#FAF7F2]/80 truncate">
                {PROJECT_PREVIEW_CONFIG.projectName} · Gorakhpur
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close website preview popup"
            className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-[#D4AF37] hover:text-[#1C1617] text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Device Previews Panel (Mobile: directly below header; Desktop: left column spanning full height) */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 bg-gradient-to-br from-[#1C1617] via-[#24181A] to-[#3D1B24] px-3 py-2.5 sm:p-5 lg:p-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#D4AF37]/25">
          <div className="flex items-end justify-center gap-2.5 sm:gap-4 w-full">
            {/* Landscape Laptop Mockup */}
            <div className="flex-1 max-w-[204px] sm:max-w-[300px] lg:max-w-[310px] min-w-0 flex flex-col items-center">
              <div className="w-full rounded-t-[8px] sm:rounded-t-[10px] bg-[#141011] border border-[#D4AF37]/35 p-[4px] sm:p-[6px] shadow-xl">
                <div className="flex justify-center mb-[3px] sm:mb-[4px]">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50 block" aria-hidden="true" />
                </div>
                <div className="w-full rounded-[2px] overflow-hidden border border-white/10">
                  <ScaledIframeScreen
                    src={previewUrl}
                    title={`${PROJECT_PREVIEW_CONFIG.projectName} Desktop Preview`}
                    viewportWidth={1280}
                    viewportHeight={800}
                  />
                </div>
              </div>
              <div className="w-[106%] h-[5px] sm:h-[7px] bg-gradient-to-b from-[#3A3032] to-[#1C1617] rounded-b-md border-t border-white/10 shadow-md" />
              <span className="hidden lg:block mt-2 text-[10px] uppercase tracking-[0.16em] text-[#FAF7F2]/65 font-medium">
                Desktop View
              </span>
            </div>

            {/* Portrait Generic Notch-Free Phone Mockup */}
            <div className="w-[68px] sm:w-[96px] lg:w-[116px] shrink-0 flex flex-col items-center">
              <div className="w-full rounded-[10px] sm:rounded-[14px] bg-[#141011] border border-[#D4AF37]/40 p-[4px] sm:p-[5px] shadow-xl">
                <div className="w-full rounded-[6px] sm:rounded-[9px] overflow-hidden border border-white/10">
                  <ScaledIframeScreen
                    src={previewUrl}
                    title={`${PROJECT_PREVIEW_CONFIG.projectName} Mobile Preview`}
                    viewportWidth={375}
                    viewportHeight={667}
                  />
                </div>
              </div>
              <span className="hidden lg:block mt-2 text-[10px] uppercase tracking-[0.16em] text-[#FAF7F2]/65 font-medium">
                Mobile View
              </span>
            </div>
          </div>
        </div>

        {/* Content, Tracker, Deadline & WhatsApp Actions */}
        <div className="lg:col-span-6 lg:col-start-7 lg:row-start-2 px-3.5 py-2.5 sm:px-5 sm:py-4 lg:p-6 flex flex-col justify-between gap-2 sm:gap-3.5 bg-[#FFFDF8]">
          {/* Headline & Supporting Copy */}
          <div>
            <h2
              id="preview-popup-title"
              className="font-serif text-[17px] sm:text-xl lg:text-2xl font-medium text-[#2C1D18] leading-snug"
            >
              Your {PROJECT_PREVIEW_CONFIG.projectName} Website Preview Is Ready
            </h2>
            <p className="text-[11px] sm:text-xs text-[#61524A] mt-0.5 sm:mt-1 leading-snug">
              Review the desktop and mobile experience, then confirm kickoff to complete remaining development and launch.
            </p>
          </div>

          {/* 3-Stage Project Progress Tracker */}
          <div
            aria-label="Project progress tracker"
            className="bg-[#FAF7F2] border border-[#E6D9CB] rounded-sm px-3 py-2 sm:px-3.5 sm:py-2.5"
          >
            <ol className="space-y-1.5 sm:space-y-2">
              {TRACKER_STAGES.map((stage, index) => {
                const isLast = index === TRACKER_STAGES.length - 1;
                return (
                  <li key={stage.id} className="relative flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="relative flex items-center justify-center shrink-0">
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className={`absolute top-[15px] left-1/2 -translate-x-1/2 w-[1.5px] h-[14px] sm:h-[16px] ${
                              stage.completed ? 'bg-emerald-600' : 'bg-[#D6C7B8]'
                            }`}
                          />
                        )}
                        {stage.completed ? (
                          <span className="w-4 h-4 rounded-full bg-emerald-600 text-white inline-flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full bg-red-50 border border-red-500 inline-flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] sm:text-xs font-medium text-[#2C1D18] truncate">
                        {stage.title}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] sm:text-[11px] font-semibold shrink-0 ${
                        stage.completed ? 'text-emerald-700' : 'text-red-700'
                      }`}
                    >
                      {stage.status}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Separate Fixed Deadline Notice */}
          <div
            role="note"
            className="bg-red-50 border border-red-300 rounded-sm px-3 py-2 sm:px-3.5 sm:py-2.5 text-red-950"
          >
            <div className="flex items-start gap-2">
              <AlertTriangle
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-700 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="text-[10.5px] sm:text-xs leading-snug">
                <p className="font-bold uppercase tracking-wider text-red-800">
                  PREVIEW DEADLINE: {deadlineLabel}
                </p>
                <p className="text-red-900/90 mt-0.5">
                  If the 50% kickoff payment is not received by this date, this website preview and its associated project files will be removed from project hosting by the project owner. Continuing after removal may require a new project setup and fee.
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp Actions */}
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <a
              href={activateHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[40px] sm:min-h-[44px] px-4 py-2 bg-[#6E2434] hover:bg-[#511825] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-sm inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
              <span>ACTIVATE MY BUSINESS WEBSITE</span>
            </a>

            <a
              href={changesHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[34px] sm:min-h-[38px] px-4 py-1.5 border border-[#E6D9CB] hover:border-[#6E2434]/40 hover:bg-[#FAF3E8] text-[#2C1D18] text-[11px] sm:text-xs font-medium rounded-sm inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>I’d Like to Request Changes</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

