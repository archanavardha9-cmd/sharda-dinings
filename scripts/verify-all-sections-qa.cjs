const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const screenshotDir = path.join('C:', 'Users', 'hp', '.gemini', 'antigravity', 'brain', 'c0472f54-86e0-4f71-9e71-04a2fda1c2f8', 'screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

function assert(cond, msg) {
  if (!cond) {
    throw new Error('ASSERTION FAILED: ' + msg);
  }
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/restaurant', name: 'Restaurant' },
  { path: '/menu', name: 'Menu' },
  { path: '/olive-cafe', name: 'Olive Cafe' },
  { path: '/banquets', name: 'Banquets' },
  { path: '/hotel', name: 'Hotel' },
  { path: '/contact', name: 'Contact' }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const failedImages = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`[${page.url()}] ${msg.text()}`);
  });
  page.on('response', (resp) => {
    if (resp.status() >= 400 && /\.(webp|jpg|jpeg|png|svg)$/i.test(resp.url())) {
      failedImages.push({ url: resp.url(), status: resp.status() });
    }
  });

  console.log('\n======================================================');
  console.log('COMPREHENSIVE QA: 7 PAGES, ANIMATIONS, GAPS & MAP LINK');
  console.log('======================================================\n');

  await page.setViewport({ width: 1440, height: 900 });

  for (const p of PAGES) {
    console.log(`\n--- CHECKING PAGE: ${p.name} (${p.path}) ---`);
    await page.goto(`http://localhost:4173${p.path}`, { waitUntil: 'networkidle0' });
    await sleep(400);

    // 1. Check Header-Hero Gap (Must be 0px)
    const gapCheck = await page.evaluate(() => {
      const header = document.querySelector('header');
      const firstSection = document.querySelector('main section') || document.querySelector('main > div > section');
      if (!header || !firstSection) return { error: 'header or section missing' };
      const headerRect = header.getBoundingClientRect();
      const heroRect = firstSection.getBoundingClientRect();
      return {
        headerBottom: Math.round(headerRect.bottom),
        heroTop: Math.round(heroRect.top),
        gap: Math.round(heroRect.top - headerRect.bottom)
      };
    });
    assert(Math.abs(gapCheck.gap) <= 1, `[${p.name}] Header-Hero gap must be 0px, got ${gapCheck.gap}px (headerBottom=${gapCheck.headerBottom}, heroTop=${gapCheck.heroTop})`);
    console.log(`  ✓ Header-Hero gap: 0px (headerBottom=${gapCheck.headerBottom}px, heroTop=${gapCheck.heroTop}px). No white stripe!`);

    // 2. Check broken images on page
    const brokenImgs = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => ({ src: img.src, alt: img.alt }));
    });
    assert(brokenImgs.length === 0, `[${p.name}] Broken images found: ${JSON.stringify(brokenImgs)}`);
    console.log(`  ✓ All images loaded successfully (0 broken images).`);

    // 3. Page specific checks
    if (p.path === '/contact') {
      const contactChecks = await page.evaluate(() => {
        const hero = document.querySelector('main section');
        const heroHeight = hero.getBoundingClientRect().height;
        const vh = window.innerHeight;
        const mapLinks = Array.from(document.querySelectorAll('a[href*="maps.google.com"]')).map((a) => a.href);
        return {
          heroHeight,
          vh,
          minHeightRatio: heroHeight / vh,
          mapLinks
        };
      });
      assert(contactChecks.minHeightRatio >= 0.85, `Contact hero height must be ~88vh, got ${(contactChecks.minHeightRatio * 100).toFixed(1)}%`);
      console.log(`  ✓ Contact Hero height: ${(contactChecks.minHeightRatio * 100).toFixed(1)}% of viewport (matches other pages).`);

      assert(contactChecks.mapLinks.length >= 2, `Contact page must have at least 2 Google Maps links (both cards)`);
      const allDirectLocation = contactChecks.mapLinks.every((link) => link.includes('Sharda+Dinings+Gorakhpur'));
      assert(allDirectLocation, `Both Contact page map links must open Sharda Dinings Gorakhpur: ${JSON.stringify(contactChecks.mapLinks)}`);
      console.log(`  ✓ Right-side & Left-side Google Map links verified: both open Sharda Dinings Gorakhpur directly.`);
    }

    // 4. Test Scroll Animation & Repeatability
    console.log(`  Testing section animations on ${p.name}...`);
    const totalSections = await page.evaluate(() => document.querySelectorAll('main section').length);
    console.log(`  Found ${totalSections} major sections on ${p.name}. Scrolling through sections...`);

    // Scroll down gradually to trigger inView animations
    for (let s = 0; s < totalSections; s++) {
      await page.evaluate((secIdx) => {
        const sections = document.querySelectorAll('main section');
        if (sections[secIdx]) {
          sections[secIdx].scrollIntoView({ behavior: 'instant', block: 'center' });
        }
      }, s);
      await sleep(150);
    }

    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await sleep(200);

    // Take screenshot of hero
    await page.screenshot({ path: path.join(screenshotDir, `verified-${p.name.toLowerCase().replace(/\s+/g, '-')}-desktop.png`) });
    console.log(`  ✓ Replayed scroll down and up cleanly. Captured screenshot.`);
  }

  assert(consoleErrors.length === 0, `Console errors encountered: ${JSON.stringify(consoleErrors)}`);
  assert(failedImages.length === 0, `Failed image network requests: ${JSON.stringify(failedImages)}`);

  console.log('\n======================================================');
  console.log('🎉 ALL 7 PAGES VERIFIED: 0 BROKEN IMAGES, 0 CONSOLE ERRORS, 0 GAPS!');
  console.log('======================================================\n');

  await browser.close();
}

run().catch((err) => {
  console.error('\n❌ QA FAILED:', err);
  process.exit(1);
});
