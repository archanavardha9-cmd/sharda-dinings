const puppeteer = require('puppeteer');
const fs = require('fs');

async function inspectLogo() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  const b64 = fs.readFileSync('public/images/home/sharda-dinings-logo.webp').toString('base64');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:#000;">
        <canvas id="c"></canvas>
        <script>
          const img = new Image();
          img.src = "data:image/webp;base64,${b64}";
          img.onload = () => {
            const c = document.getElementById('c');
            c.width = img.naturalWidth;
            c.height = img.naturalHeight;
            const ctx = c.getContext('2d');
            ctx.drawImage(img, 0, 0);
            window.ready = true;
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.ready);
  
  // Take screenshot of the logo image
  await page.screenshot({ path: 'scripts/logo-original.png' });
  console.log('Saved original logo to scripts/logo-original.png');
  
  await browser.close();
}

inspectLogo().catch(console.error);
