const puppeteer = require('puppeteer');
const fs = require('fs');

async function analyze() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  const b64 = fs.readFileSync('public/images/home/sharda-dinings-logo.webp').toString('base64');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body>
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
            
            // Sample center color and circle edge
            const data = ctx.getImageData(0, 0, c.width, c.height).data;
            let nonDarkPixels = 0;
            let minX = c.width, maxX = 0, minY = c.height, maxY = 0;
            for (let y = 0; y < c.height; y++) {
              for (let x = 0; x < c.width; x++) {
                const idx = (y * c.width + x) * 4;
                const r = data[idx], g = data[idx+1], b = data[idx+2], a = data[idx+3];
                // Check if not background
                const brightness = (r + g + b) / 3;
                if (brightness > 60 && a > 50) {
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;
                  nonDarkPixels++;
                }
              }
            }
            window.analysis = { minX, maxX, minY, maxY, nonDarkPixels, w: c.width, h: c.height };
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.analysis);
  const result = await page.evaluate(() => window.analysis);
  console.log('Analysis result:', result);
  await browser.close();
}

analyze().catch(console.error);
