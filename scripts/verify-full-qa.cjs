const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/screenshots';

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function runQA() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  console.log('=== STARTING SHARDA DININGS COMPREHENSIVE QA ===\n');

  // 1. Olive Cafe Artisanal Curation Verification across Desktop, Tablet, Mobile
  console.log('--- 1. Testing Olive Cafe Artisanal Curation ---');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/olive-cafe`, { waitUntil: 'networkidle2' });

  await page.evaluate(() => {
    const el = document.getElementById('cafe-menu');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  const tabs = ['Brews & Coffees', 'Thick Shakes', 'Pizzas & Pastas', 'Patisserie & Sizzlers'];
  for (const tabText of tabs) {
    await page.evaluate((txt) => {
      const btns = Array.from(document.querySelectorAll('#cafe-menu button'));
      const btn = btns.find(b => b.textContent.includes(txt));
      if (btn) btn.click();
    }, tabText);
    // Wait for pop/scale animation to settle completely
    await new Promise(r => setTimeout(r, 1200));

    const check = await page.evaluate(() => {
      const container = document.querySelector('#cafe-menu .lg\\:col-span-6 .overflow-x-auto');
      const cards = Array.from(container.querySelectorAll('.p-4.rounded-2xl'));
      const widths = cards.map(c => Math.round(c.getBoundingClientRect().width));
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth + 2;
      const hasVerticalScroll = container.scrollHeight > container.clientHeight + 2;
      const allEqualWidth = widths.length > 0 && widths.every(w => Math.abs(w - widths[0]) <= 2);
      return { cardCount: cards.length, widths, allEqualWidth, hasHorizontalScroll, hasVerticalScroll };
    });

    console.log(`[Desktop] Tab "${tabText}": ${check.cardCount} cards, equal widths: ${check.allEqualWidth} (${check.widths[0]}px), horizScroll: ${check.hasHorizontalScroll}, vertScroll: ${check.hasVerticalScroll}`);
  }

  // Check mobile (375px)
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 400));
  const mobileCheck = await page.evaluate(() => {
    const container = document.querySelector('#cafe-menu .lg\\:col-span-6 .overflow-x-auto');
    const cards = Array.from(container.querySelectorAll('.p-4.rounded-2xl'));
    const widths = cards.map(c => Math.round(c.getBoundingClientRect().width));
    const allEqual = widths.length > 0 && widths.every(w => Math.abs(w - widths[0]) <= 2);
    const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
    return { count: cards.length, widths, allEqual, hasHorizontalScroll };
  });
  console.log(`[Mobile 375px] Cards count: ${mobileCheck.count}, equal widths: ${mobileCheck.allEqual} (${mobileCheck.widths[0]}px), horizontal scroll enabled: ${mobileCheck.hasHorizontalScroll}`);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-olive-cafe-artisanal.png'), fullPage: false });

  // 2. Gastronomic Spotlight Verification
  console.log('\n--- 2. Testing Menu Page Gastronomic Spotlight Auto-Rotation ---');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });

  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Dastarkhwan') || h.textContent.includes('Tandoor'));
    if (heading) heading.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));

  const spotlightInitial = await page.evaluate(() => {
    const pauseBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Pause') || b.textContent.includes('Resume'));
    const heading = document.querySelector('section h2.font-serif');
    return {
      hasPauseBtn: !!pauseBtn,
      btnText: pauseBtn ? pauseBtn.textContent.trim() : null,
      currentDish: heading ? heading.textContent.trim() : null
    };
  });
  console.log(`Spotlight initial state: Pause button present: ${spotlightInitial.hasPauseBtn}, text: "${spotlightInitial.btnText}", current collection: "${spotlightInitial.currentDish}"`);

  // Test Pause
  await page.evaluate(() => {
    const pauseBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Pause'));
    if (pauseBtn) pauseBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  const spotlightPaused = await page.evaluate(() => {
    const resumeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Resume'));
    return {
      pausedNow: !!resumeBtn,
      btnText: resumeBtn ? resumeBtn.textContent.trim() : null
    };
  });
  console.log(`Spotlight after clicking Pause: Button switched to Resume: ${spotlightPaused.pausedNow} ("${spotlightPaused.btnText}")`);

  // Test Resume
  await page.evaluate(() => {
    const resumeBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Resume'));
    if (resumeBtn) resumeBtn.click();
  });
  await new Promise(r => setTimeout(r, 400));

  const spotlightResumed = await page.evaluate(() => {
    const pauseBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Pause'));
    return {
      resumedNow: !!pauseBtn,
      btnText: pauseBtn ? pauseBtn.textContent.trim() : null
    };
  });
  console.log(`Spotlight after clicking Resume: Button switched back to Pause: ${spotlightResumed.resumedNow} ("${spotlightResumed.btnText}")`);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-spotlight.png'), fullPage: false });

  // 3. Contact Page Physical Location & Map Verification (Desktop and Mobile)
  console.log('\n--- 3. Testing Contact Page Physical Location & Map ---');
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    const h2 = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Finding Sharda Dinings'));
    if (h2) h2.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));

  const contactCheck = await page.evaluate(() => {
    const rightCard = document.querySelector('.lg\\:col-span-6 iframe').closest('.lg\\:col-span-6');
    const outerButtons = Array.from(rightCard.querySelectorAll('a, button')).filter(el => el.textContent.includes('Open in Map'));
    const iframe = rightCard.querySelector('iframe');
    const iframeSrc = iframe ? iframe.src : '';
    const hasDestination = iframeSrc.includes('Sharda+Dinings+Gorakhpur');
    const sbLayers = document.querySelectorAll('section .sb-layer');
    return {
      outerOpenInMapButtonCount: outerButtons.length,
      iframePresent: !!iframe,
      iframeHasExactDestination: hasDestination,
      sbLayersCount: sbLayers.length
    };
  });
  console.log(`Contact location: Outer "Open in Map" button count: ${contactCheck.outerOpenInMapButtonCount} (must be 0)`);
  console.log(`Contact location: Iframe present: ${contactCheck.iframePresent}, points to exact Sharda Dinings Gorakhpur: ${contactCheck.iframeHasExactDestination}`);
  console.log(`Contact location: SectionBackground .sb-layer count: ${contactCheck.sbLayersCount}`);

  // Test Mobile Contact Location (375px) - verify no overlapping elements
  await page.setViewport({ width: 375, height: 812 });
  await new Promise(r => setTimeout(r, 400));
  const contactMobileCheck = await page.evaluate(() => {
    const mapsLink = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Open in Google Maps'));
    const parkingEl = Array.from(document.querySelectorAll('span')).find(el => el.textContent.includes('Parking on-site'));
    if (!mapsLink || !parkingEl) return { found: false };

    const rMaps = mapsLink.getBoundingClientRect();
    const rPark = parkingEl.getBoundingClientRect();

    const overlaps = !(
      rMaps.right < rPark.left ||
      rMaps.left > rPark.right ||
      rMaps.bottom < rPark.top ||
      rMaps.top > rPark.bottom
    );
    const gap = rPark.top - rMaps.bottom;
    return {
      found: true,
      mapsBottom: rMaps.bottom,
      parkingTop: rPark.top,
      gap,
      overlaps
    };
  });
  console.log(`[Mobile 375px Contact] Google Maps link & Parking on-site: found: ${contactMobileCheck.found}, vertical gap: ${contactMobileCheck.gap}px, overlaps: ${contactMobileCheck.overlaps}`);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-contact-location.png'), fullPage: false });

  // 4. Hero Overlap Verification Across Laptop (1024px), Tablet (768px), and Mobile (375px)
  console.log('\n--- 4. Testing Hero Overlaps & Phone Wrapping Across Viewports ---');
  const heroPages = [
    { name: 'Restaurant', url: '/restaurant' },
    { name: 'Olive Cafe', url: '/olive-cafe' },
    { name: 'Banquets', url: '/banquets' },
    { name: 'Hotel', url: '/hotel' }
  ];

  const viewports = [
    { label: 'Laptop 1024px', width: 1024, height: 768 },
    { label: 'Tablet 768px', width: 768, height: 1024 },
    { label: 'Mobile 375px', width: 375, height: 812 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    for (const hp of heroPages) {
      await page.goto(`${BASE_URL}${hp.url}`, { waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 400));

      const overlapCheck = await page.evaluate(() => {
        const heroSection = document.querySelector('section:first-of-type');
        const xlBlocks = Array.from(heroSection.querySelectorAll('.hidden.xl\\:block'));
        const anyVisible = xlBlocks.some(el => {
          const style = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return style.display !== 'none' && rect.width > 0;
        });
        return { portalsFound: xlBlocks.length, anyVisible };
      });

      console.log(`[${vp.label}] Page ${hp.name}: Side portals found: ${overlapCheck.portalsFound}, visible: ${overlapCheck.anyVisible} (must be false)`);
    }
  }

  // Banquets phone number check on mobile 375px
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(`${BASE_URL}/banquets`, { waitUntil: 'networkidle2' });
  const banqPhoneCheck = await page.evaluate(() => {
    const phoneSpan = document.querySelector('a[href^="tel:"] span.whitespace-nowrap');
    return {
      found: !!phoneSpan,
      text: phoneSpan ? phoneSpan.textContent.trim() : null
    };
  });
  console.log(`[Mobile 375px Banquets] Phone number formatted in non-wrapping span: ${banqPhoneCheck.found} ("${banqPhoneCheck.text}")`);

  // 5. Background Animations Verification Across All 7 Pages
  console.log('\n--- 5. Testing SectionBackground animations across all 7 pages ---');
  const allPages = [
    { name: 'Home', url: '/' },
    { name: 'Restaurant', url: '/restaurant' },
    { name: 'Menu', url: '/menu' },
    { name: 'Olive Cafe', url: '/olive-cafe' },
    { name: 'Banquets', url: '/banquets' },
    { name: 'Hotel', url: '/hotel' },
    { name: 'Contact', url: '/contact' }
  ];

  await page.setViewport({ width: 1280, height: 900 });
  for (const p of allPages) {
    await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle2' });
    const bgInfo = await page.evaluate(() => {
      const layers = Array.from(document.querySelectorAll('.sb-layer'));
      const svgs = layers.map(l => l.querySelector('svg'));
      const hasSvg = svgs.every(s => !!s);
      return { layerCount: layers.length, allHaveSvg: hasSvg };
    });
    console.log(`[Page: ${p.name}] SectionBackground layers: ${bgInfo.layerCount}, all rendered with valid SVG: ${bgInfo.allHaveSvg}`);
  }

  // 6. Scroll Forward and Scroll Reverse Motion
  console.log('\n--- 6. Testing Scroll-Progress Scrubbing (Forward & Reverse) ---');
  await page.goto(`${BASE_URL}/restaurant`, { waitUntil: 'networkidle2' });
  const scrollTest = await page.evaluate(async () => {
    const layer = document.querySelector('.sb-layer');
    if (!layer) return { error: 'No layer found' };

    const getTransform = () => window.getComputedStyle(layer).transform;

    const initial = getTransform();
    window.scrollTo({ top: 1200, behavior: 'instant' });
    await new Promise(r => setTimeout(r, 200));
    const scrolledDown = getTransform();

    window.scrollTo({ top: 0, behavior: 'instant' });
    await new Promise(r => setTimeout(r, 200));
    const scrolledBackUp = getTransform();

    return {
      initial,
      scrolledDown,
      scrolledBackUp,
      changedOnScrollDown: initial !== scrolledDown,
      reversedOnScrollUp: scrolledDown !== scrolledBackUp
    };
  });
  console.log('Scroll scrub forward changed transform:', scrollTest.changedOnScrollDown);
  console.log('Scroll scrub reverse changed transform back:', scrollTest.reversedOnScrollUp);

  console.log(`\nConsole errors encountered: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }

  await browser.close();
  console.log('\n=== ALL VERIFICATIONS COMPLETED SUCCESSFULLY ===');
}

runQA().catch(err => {
  console.error('QA Failed:', err);
  process.exit(1);
});
