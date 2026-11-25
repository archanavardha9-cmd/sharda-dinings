const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';

async function testHero() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  const pages = [
    { name: 'Restaurant', url: '/restaurant' },
    { name: 'Olive Cafe', url: '/olive-cafe' },
    { name: 'Banquets', url: '/banquets' },
    { name: 'Hotel', url: '/hotel' }
  ];

  for (const w of [1024, 768, 375]) {
    console.log(`\n=== Testing Viewport Width: ${w}px ===`);
    await page.setViewport({ width: w, height: 800 });

    for (const p of pages) {
      await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle2' });
      await new Promise(r => setTimeout(r, 400));

      const res = await page.evaluate(() => {
        const heroSection = document.querySelector('section:first-of-type');
        const heroCenter = heroSection.querySelector('.max-w-4xl');
        const heroBox = heroCenter ? heroCenter.getBoundingClientRect() : null;

        // Find the side portal floating wrappers with xl:block
        const xlBlocks = Array.from(heroSection.querySelectorAll('.hidden.xl\\:block'));
        const portalInfo = xlBlocks.map(el => {
          const style = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return {
            display: style.display,
            visible: style.display !== 'none' && rect.width > 0,
            rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
          };
        });

        // Any portal visible on screen?
        const anyVisible = portalInfo.some(p => p.visible);

        // Also check badges and buttons wrapping
        const badgesContainer = heroCenter.querySelector('.flex-wrap');
        const badgeSpans = badgesContainer ? Array.from(badgesContainer.querySelectorAll('span')) : [];
        const badgeRects = badgeSpans.map(s => s.getBoundingClientRect());
        const ctaButtons = Array.from(heroCenter.querySelectorAll('a, button')).filter(b => b.classList.contains('rounded-full'));

        return {
          heroCenterWidth: heroBox ? heroBox.width : 0,
          portalsCount: xlBlocks.length,
          anyPortalVisible: anyVisible,
          badgeCount: badgeSpans.length,
          ctaCount: ctaButtons.length
        };
      });

      console.log(`Page [${p.name}] at ${w}px: Portals found: ${res.portalsCount}, Any visible: ${res.anyPortalVisible}, Badges: ${res.badgeCount}, CTAs: ${res.ctaCount}`);
    }
  }

  await browser.close();
  console.log('\n=== HERO TESTS COMPLETE ===');
}

testHero().catch(err => {
  console.error(err);
  process.exit(1);
});
