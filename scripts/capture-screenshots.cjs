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

async function run() {
  console.log('Launching Chrome for screenshot capture...');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const item of pages) {
    const url = `http://localhost:4173${item.path}`;
    console.log(`\nNavigating to ${url}...`);

    // 1. Desktop Screenshot
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 600));

    for (const dir of targetDirs) {
      const desktopFile = path.join(dir, `desktop-${item.name}.png`);
      await page.screenshot({ path: desktopFile, fullPage: false });
      console.log(`✓ Saved Desktop: ${desktopFile}`);
    }

    // 2. Mobile Screenshot
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 600));

    for (const dir of targetDirs) {
      const mobileFile = path.join(dir, `mobile-${item.name}.png`);
      await page.screenshot({ path: mobileFile, fullPage: false });
      console.log(`✓ Saved Mobile: ${mobileFile}`);
    }
  }

  await browser.close();
  console.log('\nAll 14 screenshots (7 desktop, 7 mobile) successfully captured!');
}

run().catch(err => {
  console.error('Screenshot capture error:', err);
  process.exit(1);
});
