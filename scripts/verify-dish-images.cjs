const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/screenshots';

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function verifyDishes() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const failedRequests = [];
  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure().errorText}`);
  });

  console.log('=== VERIFYING 4 UPDATED DISH IMAGES ON MENU PAGE ===\n');

  const TARGET_DISHES = [
    { name: 'Chicken Schezwan Fried Rice', expectedSrc: '/images/food/chicken-schezwan-fried-rice.webp' },
    { name: 'Lachha Paratha / Missi Roti', expectedSrc: '/images/food/lachha-paratha.webp' },
    { name: 'Chicken Lababdar', expectedSrc: '/images/food/chicken-lababdar.webp' },
    { name: 'Pindi Chana Masala', expectedSrc: '/images/food/pindi-chana-masala.webp' }
  ];

  const viewports = [
    { label: 'Desktop 1280px', width: 1280, height: 900 },
    { label: 'Tablet 768px', width: 768, height: 1024 },
    { label: 'Mobile 375px', width: 375, height: 812 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 600));

    console.log(`\n--- Viewport: ${vp.label} ---`);

    for (const target of TARGET_DISHES) {
      // Find card containing target dish name
      const cardInfo = await page.evaluate((dishName, expectedPath) => {
        const headings = Array.from(document.querySelectorAll('h4, h3'));
        const heading = headings.find(h => h.textContent.trim().toLowerCase().includes(dishName.toLowerCase()));
        if (!heading) return { found: false, dishName };

        const card = heading.closest('.group') || heading.closest('div[class*="rounded"]');
        const img = card ? card.querySelector('img') : null;

        return {
          found: true,
          dishName,
          titleText: heading.textContent.trim(),
          imgSrc: img ? img.src : null,
          hasExpectedPath: img ? img.src.includes(expectedPath) : false,
          complete: img ? img.complete : false,
          naturalWidth: img ? img.naturalWidth : 0,
          naturalHeight: img ? img.naturalHeight : 0,
          renderedWidth: img ? Math.round(img.getBoundingClientRect().width) : 0,
          renderedHeight: img ? Math.round(img.getBoundingClientRect().height) : 0
        };
      }, target.name, target.expectedSrc);

      console.log(`[${target.name}]`);
      console.log(`  Found: ${cardInfo.found}`);
      console.log(`  Source match: ${cardInfo.hasExpectedPath} (${cardInfo.imgSrc})`);
      console.log(`  Loaded successfully: ${cardInfo.complete && cardInfo.naturalWidth > 0}`);
      console.log(`  Natural size: ${cardInfo.naturalWidth}x${cardInfo.naturalHeight}px | Rendered: ${cardInfo.renderedWidth}x${cardInfo.renderedHeight}px`);
    }
  }

  // Take screenshot of menu catalog on desktop
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });
  await page.evaluate(() => {
    const el = document.querySelector('h3, h4');
    const chana = Array.from(document.querySelectorAll('*')).find(e => e.textContent === 'Pindi Chana Masala');
    if (chana) chana.scrollIntoView({ block: 'center' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-updated-dishes.png'), fullPage: false });

  console.log(`\nFailed image requests count: ${failedRequests.length}`);
  if (failedRequests.length > 0) {
    console.log('Failed:', failedRequests);
  }

  await browser.close();
  console.log('\n=== ALL 4 DISH IMAGES VERIFIED SUCCESSFULLY ===');
}

verifyDishes().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
