const puppeteer = require('puppeteer');
const fs = require('fs');

async function inspectOriginal() {
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
            
            // Let's find connected components or vertical profile
            const w = c.width;
            const h = c.height;
            const d = ctx.getImageData(0,0,w,h).data;
            
            // Vertical profile of non-dark pixels along X = center +/- 300
            const vProfile = [];
            for (let y = 0; y < h; y += 20) {
              let count = 0;
              for (let x = Math.round(w/2 - 400); x < Math.round(w/2 + 400); x += 10) {
                const idx = (y * w + x) * 4;
                if ((d[idx] + d[idx+1] + d[idx+2])/3 > 80) count++;
              }
              vProfile.push({ y, count });
            }
            window.profile = vProfile;
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.profile);
  const profile = await page.evaluate(() => window.profile);
  console.log('Vertical profile:', profile.filter(p => p.count > 5));
  await browser.close();
}

inspectOriginal().catch(console.error);
