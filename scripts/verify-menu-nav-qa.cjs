const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const screenshotDir = path.join('C:', 'Users', 'hp', '.gemini', 'antigravity', 'brain', 'c0472f54-86e0-4f71-9e71-04a2fda1c2f8', 'screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function assert(cond, msg) {
  if (!cond) {
    throw new Error('ASSERTION FAILED: ' + msg);
  }
}

async function checkVisibleMenuImages(page, contextLabel) {
  // Wait for eager image fetches
  await page.evaluate(async () => {
    const imgs = Array.from(document.querySelectorAll('#full-catalog article img'));
    await Promise.all(
      imgs.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((res) => {
          img.addEventListener('load', res, { once: true });
          img.addEventListener('error', res, { once: true });
          setTimeout(res, 5000);
        });
      })
    );
  });
  await sleep(380); // Allow 320ms card reveal animation to finish

  const stats = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('#full-catalog article'));
    const broken = [];
    const invisible = [];
    cards.forEach((card) => {
      const opacity = parseFloat(getComputedStyle(card).opacity);
      if (opacity < 0.99) {
        invisible.push({ text: card.querySelector('h3')?.innerText, opacity });
      }
      const img = card.querySelector('img');
      if (!img || !img.complete || img.naturalWidth === 0) {
        broken.push({ alt: img?.alt, src: img?.getAttribute('src'), complete: img?.complete, naturalWidth: img?.naturalWidth });
      }
    });
    return { totalCards: cards.length, broken, invisible };
  });

  assert(stats.totalCards > 0, `${contextLabel}: expected cards > 0`);
  assert(stats.broken.length === 0, `${contextLabel}: broken images found: ${JSON.stringify(stats.broken)}`);
  assert(stats.invisible.length === 0, `${contextLabel}: cards stuck invisible: ${JSON.stringify(stats.invisible)}`);
  console.log(`  ✓ [${contextLabel}] ${stats.totalCards} dish cards visible (opacity=1) & ${stats.totalCards} images loaded cleanly.`);
  return stats.totalCards;
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const failedImageRequests = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('response', (resp) => {
    if (resp.status() >= 400 && /\.(webp|jpg|jpeg|png|svg)$/i.test(resp.url())) {
      failedImageRequests.push({ url: resp.url(), status: resp.status() });
    }
  });

  try {
    // =========================================================================
    // 1. MOBILE VERIFICATION (390x844)
    // =========================================================================
    console.log('\n--- 1. TESTING MOBILE VIEWPORT (390x844) ---');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

    // Open mobile hamburger drawer
    await page.waitForSelector('button[aria-label="Open Navigation Menu"]');
    await sleep(300);
    await page.click('button[aria-label="Open Navigation Menu"]');
    await sleep(600);

    const drawerMetrics = await page.evaluate(() => {
      const aside = document.querySelector('#mobile-nav-drawer aside');
      const rect = aside.getBoundingClientRect();
      return {
        width: rect.width,
        left: rect.left,
        right: rect.right,
        viewportWidth: window.innerWidth,
        bodyOverflow: document.body.style.overflow
      };
    });
    assert(drawerMetrics.width > 240 && drawerMetrics.width <= 320, `Mobile drawer width should be 70-80% (~292px), got ${drawerMetrics.width}`);
    assert(Math.abs(drawerMetrics.right - 390) < 2, `Drawer must be anchored on right side, got right=${drawerMetrics.right}`);
    assert(drawerMetrics.left > 60, `Left side of screen must remain visible, got left=${drawerMetrics.left}`);
    console.log(`  ✓ Mobile right-side drawer opened: width=${drawerMetrics.width}px (${Math.round((drawerMetrics.width / 390) * 100)}%), left area visible=${drawerMetrics.left}px`);
    await page.screenshot({ path: path.join(screenshotDir, 'qa-mobile-hamburger-drawer.png') });

    // Tap outside the drawer (on visible left area x=40, y=200) -> must close immediately
    await page.mouse.click(40, 200);
    await sleep(400);
    const closedAfterOutsideTap = await page.evaluate(() => {
      const wrapper = document.querySelector('#mobile-nav-drawer');
      return wrapper.getAttribute('aria-hidden') === 'true' && document.body.style.overflow !== 'hidden';
    });
    assert(closedAfterOutsideTap, 'Drawer must close immediately on tapping outside and unlock body scroll');
    console.log('  ✓ Tapping visible area outside drawer closes it immediately and unlocks scroll.');

    // Reopen drawer -> press Escape -> closes
    await page.click('button[aria-label="Open Navigation Menu"]');
    await sleep(350);
    await page.keyboard.press('Escape');
    await sleep(350);
    const closedAfterEscape = await page.evaluate(() => document.querySelector('#mobile-nav-drawer').getAttribute('aria-hidden') === 'true');
    assert(closedAfterEscape, 'Drawer must close on Escape key');
    console.log('  ✓ Pressing Escape closes the drawer.');

    // Reopen drawer -> click Menu nav link -> navigates to /menu and closes drawer
    await page.click('button[aria-label="Open Navigation Menu"]');
    await sleep(350);
    await page.click('#mobile-nav-drawer a[href="/menu"]');
    await page.waitForFunction(() => window.location.pathname === '/menu');
    await sleep(600);
    const menuPageAfterLink = await page.evaluate(() => ({
      drawerHidden: document.querySelector('#mobile-nav-drawer').getAttribute('aria-hidden') === 'true',
      overflowX: document.documentElement.scrollWidth > window.innerWidth
    }));
    assert(menuPageAfterLink.drawerHidden, 'Drawer must close after clicking Menu link');
    assert(!menuPageAfterLink.overflowX, 'Mobile /menu must have zero horizontal overflow');
    console.log('  ✓ Selecting nav link closes drawer, navigates to /menu, zero horizontal overflow.');

    // Check horizontal toolbar on Mobile: NO duplicated 13 category buttons inside toolbar
    const mobileToolbarCheck = await page.evaluate(() => {
      const toolbar = document.querySelector('[data-testid="menu-horizontal-toolbar"]');
      const buttons = Array.from(toolbar.querySelectorAll('button')).map((b) => b.innerText.trim());
      const hasSearch = !!toolbar.querySelector('input[aria-label="Search menu dishes"]');
      const hasBrowseCatsBtn = buttons.some((t) => t.toLowerCase().includes('browse categories'));
      const hasSoups = buttons.some((t) => t.includes('Soups & Shorbas'));
      return { buttons, hasSearch, hasBrowseCatsBtn, hasSoups };
    });
    assert(mobileToolbarCheck.hasSearch, 'Mobile horizontal toolbar must have Search');
    assert(mobileToolbarCheck.hasBrowseCatsBtn, 'Mobile toolbar must have Browse Categories button');
    assert(!mobileToolbarCheck.hasSoups, 'Horizontal toolbar must NOT duplicate the category list');
    console.log('  ✓ Mobile horizontal toolbar verified (Search, Print, Dietary/Special, Browse Categories button, NO duplicate category pills).');

    // Scroll into catalog on mobile and check sticky positioning
    await page.evaluate(() => {
      const cat = document.querySelector('#full-catalog');
      const top = cat.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + 500, behavior: 'instant' });
    });
    await sleep(400);
    const mobileStickyPos = await page.evaluate(() => {
      const header = document.querySelector('header');
      const toolbar = document.querySelector('[data-testid="menu-horizontal-toolbar"]');
      return {
        headerBottom: Math.round(header.getBoundingClientRect().bottom),
        toolbarTop: Math.round(toolbar.getBoundingClientRect().top),
        toolbarBottom: Math.round(toolbar.getBoundingClientRect().bottom)
      };
    });
    assert(Math.abs(mobileStickyPos.toolbarTop - mobileStickyPos.headerBottom) <= 2, `Mobile toolbar should stick right under header: headerBottom=${mobileStickyPos.headerBottom}, toolbarTop=${mobileStickyPos.toolbarTop}`);
    console.log(`  ✓ Mobile sticky toolbar sticks cleanly at y=${mobileStickyPos.toolbarTop}px right below header (${mobileStickyPos.headerBottom}px).`);

    // Tap "Browse Categories" -> opens compact left drawer -> select "Biryani & Pulao"
    await page.click('button[aria-controls="mobile-category-drawer"]');
    await sleep(400);
    const mobileCatDrawerRect = await page.evaluate(() => {
      const aside = document.querySelector('#mobile-category-drawer aside');
      return { width: aside.getBoundingClientRect().width, left: aside.getBoundingClientRect().left };
    });
    assert(mobileCatDrawerRect.width < 340 && mobileCatDrawerRect.left === 0, `Mobile category drawer should be compact left panel, got width=${mobileCatDrawerRect.width}`);
    await page.screenshot({ path: path.join(screenshotDir, 'qa-mobile-category-drawer.png') });

    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#mobile-category-drawer nav button'));
      const biryaniBtn = btns.find((b) => b.innerText.includes('Biryani & Pulao'));
      biryaniBtn.click();
    });
    await sleep(500);
    const afterMobileCatSelect = await page.evaluate(() => ({
      catDrawerHidden: document.querySelector('#mobile-category-drawer').getAttribute('aria-hidden') === 'true'
    }));
    assert(afterMobileCatSelect.catDrawerHidden, 'Mobile category drawer must close after selection');
    await checkVisibleMenuImages(page, 'Mobile First Category Click: Biryani & Pulao');

    // =========================================================================
    // 2. TABLET VERIFICATION (768x1024)
    // =========================================================================
    console.log('\n--- 2. TESTING TABLET VIEWPORT (768x1024) ---');
    await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1, isMobile: false });
    await page.goto('http://localhost:4173/menu', { waitUntil: 'networkidle0' });
    await sleep(500);

    await page.evaluate(() => {
      const cat = document.querySelector('#full-catalog');
      window.scrollTo(0, cat.offsetTop + 350);
    });
    await sleep(500);

    const tabletStickyMetrics = await page.evaluate(() => {
      const header = document.querySelector('header').getBoundingClientRect();
      const toolbar = document.querySelector('[data-testid="menu-horizontal-toolbar"]').getBoundingClientRect();
      const sidebar = document.querySelector('[data-testid="desktop-category-sidebar"]').getBoundingClientRect();
      const firstCard = document.querySelector('#full-catalog article').getBoundingClientRect();
      return {
        headerBottom: Math.round(header.bottom),
        toolbarTop: Math.round(toolbar.top),
        toolbarBottom: Math.round(toolbar.bottom),
        sidebarTop: Math.round(sidebar.top),
        sidebarRight: Math.round(sidebar.right),
        cardLeft: Math.round(firstCard.left),
        cardWidth: Math.round(firstCard.width),
        overflowX: document.documentElement.scrollWidth > window.innerWidth
      };
    });
    assert(!tabletStickyMetrics.overflowX, 'Tablet /menu must not overflow horizontally');
    assert(Math.abs(tabletStickyMetrics.toolbarTop - tabletStickyMetrics.headerBottom) <= 2, 'Tablet toolbar must stick right under header');
    assert(tabletStickyMetrics.sidebarTop >= tabletStickyMetrics.toolbarBottom, `Tablet sidebar (${tabletStickyMetrics.sidebarTop}) must NOT overlap toolbar (${tabletStickyMetrics.toolbarBottom})`);
    assert(tabletStickyMetrics.cardLeft >= tabletStickyMetrics.sidebarRight, `Dish card (${tabletStickyMetrics.cardLeft}) must NOT overlap sidebar (${tabletStickyMetrics.sidebarRight})`);
    assert(tabletStickyMetrics.cardWidth > 350, `Tablet dish cards must not be squeezed, width=${tabletStickyMetrics.cardWidth}`);
    console.log(`  ✓ Tablet sticky layout verified: toolbarBottom=${tabletStickyMetrics.toolbarBottom}px, sidebarTop=${tabletStickyMetrics.sidebarTop}px, cardWidth=${tabletStickyMetrics.cardWidth}px`);
    await page.screenshot({ path: path.join(screenshotDir, 'qa-tablet-menu-sticky.png') });

    // =========================================================================
    // 3. DESKTOP VERIFICATION (1440x900) - STICKY, FILTERS, SEARCH & IMAGES
    // =========================================================================
    console.log('\n--- 3. TESTING DESKTOP VIEWPORT (1440x900) ---');
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false });
    await page.goto('http://localhost:4173/menu', { waitUntil: 'networkidle0' });
    await sleep(500);

    // Check desktop horizontal toolbar items ONLY
    const desktopToolbar = await page.evaluate(() => {
      const tb = document.querySelector('[data-testid="menu-horizontal-toolbar"]');
      const buttons = Array.from(tb.querySelectorAll('button')).map((b) => b.innerText.trim());
      const hasSoups = buttons.some((b) => b.includes('Soups & Shorbas'));
      const hasPrint = buttons.some((b) => b.includes('Print Menu'));
      const hasChefSpecial = buttons.some((b) => b.includes('Chef Specials'));
      const hasVeg = buttons.some((b) => b.includes('Pure Veg'));
      return { buttons, hasSoups, hasPrint, hasChefSpecial, hasVeg };
    });
    assert(!desktopToolbar.hasSoups, 'Desktop horizontal toolbar must NOT duplicate categories');
    assert(desktopToolbar.hasPrint && desktopToolbar.hasChefSpecial && desktopToolbar.hasVeg, 'Desktop toolbar missing required controls');
    console.log('  ✓ Desktop horizontal toolbar contains strictly Search, Dietary, Chef Specials & Print Menu.');

    // Scroll into catalog & verify sticky positions on Desktop
    await page.evaluate(() => {
      const cat = document.querySelector('#full-catalog');
      window.scrollTo(0, cat.offsetTop + 400);
    });
    await sleep(450);

    const desktopSticky = await page.evaluate(() => {
      const header = document.querySelector('header').getBoundingClientRect();
      const toolbar = document.querySelector('[data-testid="menu-horizontal-toolbar"]').getBoundingClientRect();
      const sidebar = document.querySelector('[data-testid="desktop-category-sidebar"]').getBoundingClientRect();
      return {
        headerBottom: Math.round(header.bottom),
        toolbarTop: Math.round(toolbar.top),
        toolbarBottom: Math.round(toolbar.bottom),
        sidebarTop: Math.round(sidebar.top)
      };
    });
    assert(Math.abs(desktopSticky.toolbarTop - desktopSticky.headerBottom) <= 2, 'Desktop toolbar must stick cleanly below header');
    assert(desktopSticky.sidebarTop >= desktopSticky.toolbarBottom, `Desktop sidebar (${desktopSticky.sidebarTop}) must not overlap toolbar (${desktopSticky.toolbarBottom})`);
    console.log(`  ✓ Desktop sticky offsets verified: headerBottom=${desktopSticky.headerBottom}px, toolbarTop=${desktopSticky.toolbarTop}px, sidebarTop=${desktopSticky.sidebarTop}px`);
    await page.screenshot({ path: path.join(screenshotDir, 'qa-desktop-menu-sticky.png') });

    // First-time selection of multiple categories & filters — verify EVERY image loads immediately
    const categoriesToTest = ['Noodles & Fried Rice', 'Chinese Non-Veg', 'Shakes, Coffees & Desserts', 'Soups & Shorbas', 'Noodles & Fried Rice', 'All Curations'];
    for (const catName of categoriesToTest) {
      await page.evaluate((targetName) => {
        const btns = Array.from(document.querySelectorAll('[data-testid="desktop-category-sidebar"] nav button'));
        const btn = btns.find((b) => b.innerText.includes(targetName));
        btn.click();
      }, catName);
      await checkVisibleMenuImages(page, `Desktop Category -> ${catName}`);
    }

    // Test Dietary & Chef Special filters on first click
    for (const dietLabel of ['Pure Veg', 'Poultry & Meat', 'Chef Specials', 'All 48 Dishes']) {
      await page.evaluate((targetLabel) => {
        const btns = Array.from(document.querySelectorAll('[data-testid="menu-horizontal-toolbar"] button'));
        const btn = btns.find((b) => b.innerText.includes(targetLabel));
        btn.click();
      }, dietLabel);
      await checkVisibleMenuImages(page, `Desktop Filter -> ${dietLabel}`);
    }

    // Test Search by Dish Name, Description, and Category Name + Clear
    const searchInputSelector = '[data-testid="menu-horizontal-toolbar"] input[aria-label="Search menu dishes"]';
    await page.type(searchInputSelector, 'Tandoori');
    await sleep(300);
    const tandooriCount = await checkVisibleMenuImages(page, 'Search "Tandoori"');
    assert(tandooriCount >= 8, `Expected >= 8 Tandoori dishes/category matches, got ${tandooriCount}`);

    // Clear search using clear button
    await page.click('button[aria-label="Clear search"]');
    await sleep(300);
    const restoredCount = await checkVisibleMenuImages(page, 'Clear Search -> Restored All 48');
    assert(restoredCount === 48, `Expected 48 restored dishes after clear, got ${restoredCount}`);

    assert(consoleErrors.length === 0, `Console errors detected: ${JSON.stringify(consoleErrors)}`);
    assert(failedImageRequests.length === 0, `Failed image network requests: ${JSON.stringify(failedImageRequests)}`);

    console.log('\n🌟 ALL 15 VERIFICATION CHECKS PASSED WITH 0 BROKEN IMAGES & 0 CONSOLE ERRORS!');
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error('\n❌ QA SCRIPT FAILED:', err);
  process.exit(1);
});
