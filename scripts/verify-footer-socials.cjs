const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/screenshots';

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function verifyFooter() {
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

  console.log('=== VERIFYING FOOTER FACEBOOK & INSTAGRAM ICONS ===\n');

  const EXPECTED_FB = 'https://www.facebook.com/people/shardadinings/100064233330799/';
  const EXPECTED_IG = 'https://www.instagram.com/shardadinings/';

  const viewports = [
    { label: 'Desktop 1280px', width: 1280, height: 900 },
    { label: 'Tablet 768px', width: 768, height: 1024 },
    { label: 'Mobile 375px', width: 375, height: 812 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 400));

    // Scroll down to footer
    await page.evaluate(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 400));

    const footerData = await page.evaluate((fbUrl, igUrl) => {
      const footer = document.querySelector('footer');
      if (!footer) return { found: false };

      const fbLink = footer.querySelector(`a[href="${fbUrl}"]`);
      const igLink = footer.querySelector(`a[href="${igUrl}"]`);

      const fbSvg = fbLink ? fbLink.querySelector('svg') : null;
      const igSvg = igLink ? igLink.querySelector('svg') : null;

      const fbRect = fbLink ? fbLink.getBoundingClientRect() : null;
      const igRect = igLink ? igLink.getBoundingClientRect() : null;

      return {
        found: true,
        fb: {
          present: !!fbLink,
          targetBlank: fbLink ? fbLink.target === '_blank' : false,
          rel: fbLink ? fbLink.rel : '',
          hasSvg: !!fbSvg,
          visible: fbRect ? fbRect.width > 0 && fbRect.height > 0 : false,
          dimensions: fbRect ? { width: Math.round(fbRect.width), height: Math.round(fbRect.height) } : null
        },
        ig: {
          present: !!igLink,
          targetBlank: igLink ? igLink.target === '_blank' : false,
          rel: igLink ? igLink.rel : '',
          hasSvg: !!igSvg,
          visible: igRect ? igRect.width > 0 && igRect.height > 0 : false,
          dimensions: igRect ? { width: Math.round(igRect.width), height: Math.round(igRect.height) } : null
        }
      };
    }, EXPECTED_FB, EXPECTED_IG);

    console.log(`[${vp.label}]`);
    console.log(`  Facebook Icon present: ${footerData.fb.present}, target="_blank": ${footerData.fb.targetBlank}, visible: ${footerData.fb.visible} (${footerData.fb.dimensions ? footerData.fb.dimensions.width + 'x' + footerData.fb.dimensions.height + 'px' : 'none'})`);
    console.log(`  Instagram Icon present: ${footerData.ig.present}, target="_blank": ${footerData.ig.targetBlank}, visible: ${footerData.ig.visible} (${footerData.ig.dimensions ? footerData.ig.dimensions.width + 'x' + footerData.ig.dimensions.height + 'px' : 'none'})`);

    if (vp.label.includes('Desktop')) {
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-footer-desktop.png'), fullPage: false });
    } else if (vp.label.includes('Mobile')) {
      await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-footer-mobile.png'), fullPage: false });
    }
  }

  // Also verify on /menu and /contact pages to ensure footer is universally present across routes
  for (const route of ['/menu', '/contact']) {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle2' });
    const checkRoute = await page.evaluate((fbUrl, igUrl) => {
      const fb = document.querySelector(`footer a[href="${fbUrl}"]`);
      const ig = document.querySelector(`footer a[href="${igUrl}"]`);
      return { fb: !!fb, ig: !!ig };
    }, EXPECTED_FB, EXPECTED_IG);
    console.log(`[Route: ${route}] Footer Facebook: ${checkRoute.fb}, Instagram: ${checkRoute.ig}`);
  }

  console.log(`\nConsole errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }

  await browser.close();
  console.log('\n=== ALL FOOTER VERIFICATIONS COMPLETED SUCCESSFULLY ===');
}

verifyFooter().catch(err => {
  console.error('Footer verification failed:', err);
  process.exit(1);
});
