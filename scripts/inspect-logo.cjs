const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function check() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  
  // Read logo as base64
  const logoBuf = fs.readFileSync('public/images/home/sharda-dinings-logo.webp');
  const b64 = logoBuf.toString('base64');
  
  await page.setContent(`
    <html>
      <body style="background: #222; display: flex; align-items: center; justify-content: center; height: 100vh;">
        <img id="logo" src="data:image/webp;base64,${b64}" style="max-width: 800px;" />
      </body>
    </html>
  `);
  
  const dims = await page.evaluate(() => {
    const img = document.getElementById('logo');
    return { naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight };
  });
  console.log('Logo dimensions:', dims);
  
  await browser.close();
}

check().catch(console.error);
