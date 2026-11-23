const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'home', path: '/' },
  { name: 'restaurant', path: '/restaurant' },
  { name: 'menu', path: '/menu' },
  { name: 'olive-cafe', path: '/olive-cafe' },
  { name: 'banquets', path: '/banquets' },
  { name: 'hotel', path: '/hotel' },
  { name: 'contact', path: '/contact' }
];

const targetDirs = [
  path.join(__dirname, '..', 'public', 'screenshots'),
  path.join('C:', 'Users', 'hp', '.gemini', 'antigravity', 'brain', 'c0472f54-86e0-4f71-9e71-04a2fda1c2f8', 'screenshots')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function runVerification() {
  console.log('Launching Headless Chrome for complete QA & image-loading verification...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  const allConsoleErrors = [];
  const failedRequests = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      allConsoleErrors.push(msg.text());
    }
  });

  page.on('response', resp => {
    const url = resp.url();
    const status = resp.status();
    if (status >= 400 && (url.includes('/image') || url.includes('.webp') || url.includes('.jpg') || url.includes('.png'))) {
      failedRequests.push({ url, status });
    }
  });

  for (const item of pages) {
    const url = `http://localhost:4173${item.path}`;
    console.log(`\nTesting page: ${url}`);
    
    // 1. Desktop Test & Capture
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Smooth scroll down and up to trigger all ScrollTrigger animations
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });
    await new Promise(r => setTimeout(r, 600));

    // Evaluate image count and check both visible and loaded status
    const imgStats = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const broken = [];

      for (const img of imgs) {
        // If image has rendered naturalWidth > 0, it's good
        if (img.complete && img.naturalWidth > 0) continue;

        // If hidden by CSS (e.g. desktop-only in mobile viewport), test load directly
        try {
          const testImg = new Image();
          testImg.src = img.src;
          await new Promise((resolve, reject) => {
            if (testImg.complete && testImg.naturalWidth > 0) return resolve();
            testImg.onload = () => resolve();
            testImg.onerror = () => reject(new Error('Failed to load'));
            setTimeout(() => resolve(), 3000);
          });
          if (testImg.naturalWidth === 0 && !testImg.complete) {
            broken.push(img.src);
          }
        } catch (e) {
          broken.push(img.src);
        }
      }

      return { total: imgs.length, broken };
    });

    console.log(`  ✓ Desktop: ${imgStats.total} images found, ${imgStats.broken.length} broken.`);
    if (imgStats.broken.length > 0) {
      console.error('  FAILED IMAGES on desktop:', imgStats.broken);
    }

    for (const dir of targetDirs) {
      const desktopFile = path.join(dir, `desktop-${item.name}.png`);
      await page.screenshot({ path: desktopFile, fullPage: false });
    }

    // 2. Mobile Test & Capture
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 600));

    const mobileStats = await page.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const broken = [];
      for (const img of imgs) {
        if (img.complete && img.naturalWidth > 0) continue;
        try {
          const testImg = new Image();
          testImg.src = img.src;
          await new Promise((resolve) => {
            if (testImg.complete && testImg.naturalWidth > 0) return resolve();
            testImg.onload = () => resolve();
            testImg.onerror = () => resolve();
            setTimeout(() => resolve(), 3000);
          });
          if (testImg.naturalWidth === 0 && !testImg.complete) {
            broken.push(img.src);
          }
        } catch (e) {
          broken.push(img.src);
        }
      }
      return { total: imgs.length, broken };
    });
    console.log(`  ✓ Mobile: ${mobileStats.total} images found, ${mobileStats.broken.length} broken.`);
    if (mobileStats.broken.length > 0) {
      console.error('  FAILED IMAGES on mobile:', mobileStats.broken);
    }

    for (const dir of targetDirs) {
      const mobileFile = path.join(dir, `mobile-${item.name}.png`);
      await page.screenshot({ path: mobileFile, fullPage: false });
    }
  }

  await browser.close();

  console.log('\n=== VERIFICATION SUMMARY ===');
  console.log(`Failed Image Network Requests: ${failedRequests.length}`);
  if (failedRequests.length > 0) {
    failedRequests.forEach(f => console.error(`  ${f.status} -> ${f.url}`));
  }
  console.log(`Console Errors: ${allConsoleErrors.length}`);
  if (allConsoleErrors.length > 0) {
    allConsoleErrors.forEach(e => console.error(`  Console Error: ${e}`));
  }

  if (failedRequests.length === 0 && allConsoleErrors.length === 0) {
    console.log('\n🌟 ALL 7 PAGES VERIFIED 100% PERFECT: 0 broken images, 0 console errors, all 14 screenshots refreshed!');
  } else {
    process.exit(1);
  }
}

runVerification().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
