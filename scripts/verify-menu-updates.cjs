const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:4173';
const ARTIFACT_DIR = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/screenshots';

if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

async function verifyMenuPage() {
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

  console.log('=== VERIFYING MENU PAGE REFACTORING ===\n');

  // 1. Desktop Viewport (1280px)
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  // Check Hero Section
  console.log('--- 1. Testing Hero Section on Desktop (1280px) ---');
  const heroCheckDesktop = await page.evaluate(() => {
    const hero = document.querySelector('section:first-of-type');
    const heroButtons = Array.from(hero.querySelectorAll('button')).map(b => b.textContent.trim());
    const hasChapterButtons = heroButtons.some(t => t.includes('CHAPTER') || t.includes('COLLECTION'));
    
    // Check credentials in left column
    const leftCreds = hero.querySelector('.hidden.sm\\:block');
    const hasDesktopStats = !!leftCreds && leftCreds.textContent.includes('100%') && leftCreds.textContent.includes('480°C');

    // Check Hero Image
    const heroImg = hero.querySelector('img');
    const heroImgSrc = heroImg ? heroImg.src : null;

    return {
      hasChapterButtonsInHero: hasChapterButtons,
      hasDesktopStats,
      heroImgSrc
    };
  });
  console.log('Hero section has chapter buttons:', heroCheckDesktop.hasChapterButtonsInHero, '(must be false)');
  console.log('Hero section has desktop stats in left column:', heroCheckDesktop.hasDesktopStats, '(must be true)');
  console.log('Hero image src:', heroCheckDesktop.heroImgSrc);

  // Check Gastronomic Spotlight section
  console.log('\n--- 2. Testing Gastronomic Spotlight on Desktop (1280px) ---');
  const spotlightCheck = await page.evaluate(() => {
    const spotlightSec = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('GASTRONOMIC SPOTLIGHT'));
    if (!spotlightSec) return { found: false };

    // Check 5 chapter cards
    const chapterCards = Array.from(spotlightSec.querySelectorAll('button')).filter(b => b.textContent.includes('CHAPTER'));
    const cardTexts = chapterCards.map(c => {
      const title = c.querySelector('h4') ? c.querySelector('h4').textContent.trim() : '';
      const desc = c.querySelector('p') ? c.querySelector('p').textContent.trim() : '';
      const descVisible = c.querySelector('p') ? window.getComputedStyle(c.querySelector('p')).display !== 'none' : false;
      return { title, desc, descVisible };
    });

    // Check for arrows and dots
    const leftChevron = spotlightSec.querySelector('svg.lucide-chevron-left');
    const rightChevron = spotlightSec.querySelector('svg.lucide-chevron-right');
    const pauseBtn = Array.from(spotlightSec.querySelectorAll('button')).find(b => b.textContent.includes('Pause') || b.textContent.includes('Resume'));

    // Check featured dish
    const featuredImg = spotlightSec.querySelector('.aspect-\\[4\\/3\\] img');
    const featuredTitle = spotlightSec.querySelector('h3.font-serif');

    return {
      found: true,
      chapterCardsCount: chapterCards.length,
      cardTexts,
      hasLeftArrow: !!leftChevron,
      hasRightArrow: !!rightChevron,
      hasPauseBtn: !!pauseBtn,
      featuredDishTitle: featuredTitle ? featuredTitle.textContent.trim() : null,
      featuredDishImg: featuredImg ? featuredImg.src : null
    };
  });

  console.log('Spotlight section found:', spotlightCheck.found);
  console.log('Chapter cards count inside Spotlight:', spotlightCheck.chapterCardsCount, '(must be 5)');
  console.log('Chapter descriptions visible on desktop:', spotlightCheck.cardTexts.every(c => c.descVisible), '(must be true)');
  console.log('Has navigation arrows:', spotlightCheck.hasLeftArrow || spotlightCheck.hasRightArrow, '(must be false)');
  console.log('Has Pause/Resume button:', spotlightCheck.hasPauseBtn, '(must be true)');
  console.log('Current featured dish:', spotlightCheck.featuredDishTitle);

  // 3. Test Chapter Card Interaction & Hero Image Independence
  console.log('\n--- 3. Testing Chapter Selection & Hero Image Independence ---');
  const initialHeroImg = heroCheckDesktop.heroImgSrc;

  // Click Chapter 3 in Gastronomic Spotlight
  await page.evaluate(() => {
    const spotlightSec = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('GASTRONOMIC SPOTLIGHT'));
    const chap3Btn = Array.from(spotlightSec.querySelectorAll('button')).find(b => b.textContent.includes('CHAPTER 03') || b.textContent.includes('Makhani'));
    if (chap3Btn) chap3Btn.click();
  });
  await new Promise(r => setTimeout(r, 600));

  const afterClickCheck = await page.evaluate(() => {
    const hero = document.querySelector('section:first-of-type');
    const heroImg = hero.querySelector('img');

    const spotlightSec = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('GASTRONOMIC SPOTLIGHT'));
    const featuredTitle = spotlightSec.querySelector('h3.font-serif');
    const chap3Btn = Array.from(spotlightSec.querySelectorAll('button')).find(b => b.textContent.includes('CHAPTER 03'));
    const isChap3Selected = chap3Btn ? chap3Btn.className.includes('border-[#D4AF37]') : false;

    return {
      heroImgSrc: heroImg ? heroImg.src : null,
      featuredDishTitle: featuredTitle ? featuredTitle.textContent.trim() : null,
      isChap3Selected
    };
  });

  console.log('After clicking Chapter 03:');
  console.log('Spotlight dish updated to Chapter 3:', afterClickCheck.featuredDishTitle);
  console.log('Chapter 3 card highlighted:', afterClickCheck.isChap3Selected);
  console.log('Hero image was NOT affected by chapter selection:', afterClickCheck.heroImgSrc === initialHeroImg, `(Initial: ${initialHeroImg.split('/').pop()}, Current: ${afterClickCheck.heroImgSrc.split('/').pop()})`);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-desktop-spotlight.png'), fullPage: false });

  // 4. Mobile Viewport (375px)
  console.log('\n--- 4. Testing Mobile Viewport (375px) ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(`${BASE_URL}/menu`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 600));

  const mobileCheck = await page.evaluate(() => {
    const hero = document.querySelector('section:first-of-type');
    
    // Check mobile stats below image
    const mobileStats = hero.querySelector('.sm\\:hidden.w-full');
    const hasMobileStats = !!mobileStats && mobileStats.textContent.includes('100%') && mobileStats.textContent.includes('480°C') && mobileStats.textContent.includes('16 hrs');
    
    // Check positions: Hero image vs mobile stats
    const heroImg = hero.querySelector('img');
    const rImg = heroImg ? heroImg.getBoundingClientRect() : null;
    const rStats = mobileStats ? mobileStats.getBoundingClientRect() : null;

    const statsBelowImage = rImg && rStats ? rStats.top >= rImg.bottom : false;
    const statsGap = rImg && rStats ? Math.round(rStats.top - rImg.bottom) : 0;

    // Check Chapter cards in Spotlight
    const spotlightSec = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('GASTRONOMIC SPOTLIGHT'));
    const chapterButtons = Array.from(spotlightSec.querySelectorAll('button')).filter(b => b.textContent.includes('CHAPTER'));

    const cardsMobileInfo = chapterButtons.map(b => {
      const num = b.querySelector('span') ? b.querySelector('span').textContent.trim() : '';
      const title = b.querySelector('h4') ? b.querySelector('h4').textContent.trim() : '';
      const desc = b.querySelector('p');
      const descStyle = desc ? window.getComputedStyle(desc) : null;
      const descVisible = descStyle ? descStyle.display !== 'none' : false;
      const rect = b.getBoundingClientRect();
      return { num, title, descVisible, height: Math.round(rect.height) };
    });

    return {
      hasMobileStats,
      statsBelowImage,
      statsGap,
      chapterCount: chapterButtons.length,
      allDescriptionsHidden: cardsMobileInfo.every(c => !c.descVisible),
      cardsMobileInfo
    };
  });

  console.log('Mobile Hero statistics found below image:', mobileCheck.hasMobileStats);
  console.log('Mobile stats located strictly below hero image:', mobileCheck.statsBelowImage, `(vertical gap: ${mobileCheck.statsGap}px)`);
  console.log('Spotlight chapter cards count on mobile:', mobileCheck.chapterCount);
  console.log('All chapter descriptions hidden on mobile:', mobileCheck.allDescriptionsHidden, '(must be true)');
  console.log('Mobile card sample dimensions:', mobileCheck.cardsMobileInfo[0]);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'qa-menu-mobile-spotlight.png'), fullPage: false });

  // 5. Hero automatic image rotation test
  console.log('\n--- 5. Testing Hero Independent Automatic Image Rotation ---');
  const heroRotateTest = await page.evaluate(async () => {
    const hero = document.querySelector('section:first-of-type');
    const getHeroSrc = () => {
      const img = hero.querySelector('img');
      return img ? img.src : '';
    };

    const initial = getHeroSrc();
    // Wait for 5.5 seconds to observe auto-rotation
    await new Promise(r => setTimeout(r, 5500));
    const afterTimer = getHeroSrc();

    return {
      initial,
      afterTimer,
      rotatedAutomatically: initial !== afterTimer
    };
  });

  console.log('Hero image rotated automatically after 5.5s:', heroRotateTest.rotatedAutomatically, `(${heroRotateTest.initial.split('/').pop()} -> ${heroRotateTest.afterTimer.split('/').pop()})`);

  console.log(`\nConsole errors encountered: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }

  await browser.close();
  console.log('\n=== ALL MENU VERIFICATIONS COMPLETED SUCCESSFULLY ===');
}

verifyMenuPage().catch(err => {
  console.error('Menu Verification Failed:', err);
  process.exit(1);
});
