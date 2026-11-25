const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/screenshots';

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function verifySwiggyLinks() {
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

  console.log('=== VERIFYING SWIGGY STOREFRONT LINKS ACROSS SITE ===\n');

  const EXPECTED_SWIGGY_URL = 'https://www.swiggy.com/city/gorakhpur/sharda-dinings-rajendra-nagar-rest125732';
  const EXPECTED_ZOMATO_URL = 'https://www.zomato.com/gorakhpur/sharda-dinings-rajendra-nagar';
  const EXPECTED_MMT_URL = 'https://www.makemytrip.com/hotels/hotel_sharda_dinings-details-gorakhpur.html';

  // 1. Verify Footer Links on Home Page across viewports
  for (const vp of [
    { label: 'Desktop 1280px', width: 1280, height: 900 },
    { label: 'Tablet 768px', width: 768, height: 1024 },
    { label: 'Mobile 375px', width: 375, height: 812 }
  ]) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));

    const footerLinks = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return null;
      const allA = Array.from(footer.querySelectorAll('a'));
      const swiggy = allA.find(a => a.textContent.includes('Swiggy'));
      const zomato = allA.find(a => a.textContent.includes('Zomato'));
      const mmt = allA.find(a => a.textContent.includes('MakeMyTrip'));

      return {
        swiggy: swiggy ? { href: swiggy.href, target: swiggy.target } : null,
        zomato: zomato ? { href: zomato.href, target: zomato.target } : null,
        mmt: mmt ? { href: mmt.href, target: mmt.target } : null
      };
    });

    console.log(`[${vp.label}] Footer Links:`);
    console.log(`  Swiggy direct storefront match: ${footerLinks.swiggy?.href === EXPECTED_SWIGGY_URL} (${footerLinks.swiggy?.href})`);
    console.log(`  Zomato unchanged: ${footerLinks.zomato?.href === EXPECTED_ZOMATO_URL}`);
    console.log(`  MakeMyTrip unchanged: ${footerLinks.mmt?.href === EXPECTED_MMT_URL}`);
  }

  // 2. Verify Menu Page Order Section (just before footer)
  console.log('\n--- Testing Menu Page Delivery Section ---');
  for (const vp of [
    { label: 'Desktop 1280px', width: 1280, height: 900 },
    { label: 'Mobile 375px', width: 375, height: 812 }
  ]) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 600));

    // Scroll to bottom section
    await page.evaluate(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 400));

    const menuDeliveryLinks = await page.evaluate(() => {
      const swiggyBtn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Order on Swiggy'));
      const zomatoBtn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Order on Zomato'));
      const takeawayBtn = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Takeaway Desk'));

      const rSwiggy = swiggyBtn ? swiggyBtn.getBoundingClientRect() : null;
      const rZomato = zomatoBtn ? zomatoBtn.getBoundingClientRect() : null;

      return {
        swiggy: swiggyBtn ? { href: swiggyBtn.href, target: swiggyBtn.target, visible: rSwiggy.width > 0 } : null,
        zomato: zomatoBtn ? { href: zomatoBtn.href, target: zomatoBtn.target, visible: rZomato.width > 0 } : null,
        takeaway: !!takeawayBtn
      };
    });

    console.log(`[${vp.label}] Menu Page Order Section:`);
    console.log(`  Swiggy button href match: ${menuDeliveryLinks.swiggy?.href === EXPECTED_SWIGGY_URL} (visible: ${menuDeliveryLinks.swiggy?.visible})`);
    console.log(`  Zomato button href match: ${menuDeliveryLinks.zomato?.href === EXPECTED_ZOMATO_URL} (visible: ${menuDeliveryLinks.zomato?.visible})`);
    console.log(`  Call Takeaway button present: ${menuDeliveryLinks.takeaway}`);

    if (vp.label.includes('Desktop')) {
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-delivery-desktop.png'), fullPage: false });
    } else {
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-delivery-mobile.png'), fullPage: false });
    }
  }

  // 3. Global Scan on all rendered routes for any remaining swiggy search query
  console.log('\n--- Checking all routes for generic search URLs ---');
  for (const route of ['/', '/restaurant', '/menu', '/olive-cafe', '/banquets', '/hotel', '/contact']) {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle2' });
    const genericSearchCount = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a[href*="swiggy.com/search"]')).length;
    });
    console.log(`Route [${route}] old generic Swiggy search links remaining: ${genericSearchCount} (must be 0)`);
  }

  console.log(`\nConsole errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }

  await browser.close();
  console.log('\n=== ALL SWIGGY VERIFICATIONS COMPLETED SUCCESSFULLY ===');
}

verifySwiggyLinks().catch(err => {
  console.error('Swiggy verification failed:', err);
  process.exit(1);
});
