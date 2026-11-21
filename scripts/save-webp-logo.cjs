const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  const b64 = fs.readFileSync('public/images/home/sharda-dinings-logo-clean.png').toString('base64');
  await page.setContent(`<img id="i" src="data:image/png;base64,${b64}" />`);
  const webpB64 = await page.evaluate(() => {
    const img = document.getElementById('i');
    const c = document.createElement('canvas');
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    return c.toDataURL('image/webp', 0.95).split(',')[1];
  });
  fs.writeFileSync('public/images/home/sharda-dinings-logo-clean.webp', webpB64, 'base64');
  fs.writeFileSync('public/image/sharda-dinings-logo-clean.webp', webpB64, 'base64');
  await browser.close();
  console.log('Saved clean logo as WebP successfully!');
})();
