const puppeteer = require('puppeteer');
const fs = require('fs');

async function analyzeLogoFeatures() {
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
            
            // Let's sample along horizontal and vertical lines through center
            const cx = Math.round(c.width / 2);
            const cy = Math.round(c.height / 2);
            
            const hLine = [];
            for (let x = 0; x < c.width; x += 10) {
              const p = ctx.getImageData(x, cy, 1, 1).data;
              hLine.push({ x, r: p[0], g: p[1], b: p[2], a: p[3] });
            }
            
            window.info = { w: c.width, h: c.height, cx, cy };
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.info);
  const info = await page.evaluate(() => window.info);
  console.log('Logo info:', info);
  
  // Now let's crop the center region and inspect it
  await page.evaluate(() => {
    // Let's create an extraction canvas
    const c = document.getElementById('c');
    const ctx = c.getContext('2d');
    const imgData = ctx.getImageData(0, 0, c.width, c.height);
    const d = imgData.data;
    
    // We want to isolate the gold artwork (letters "Sharda Dinings", top flourish, bottom flourish)
    // without the outer circle!
  });
  
  await browser.close();
}

analyzeLogoFeatures().catch(console.error);
