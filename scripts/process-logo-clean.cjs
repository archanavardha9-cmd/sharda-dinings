const puppeteer = require('puppeteer');
const fs = require('fs');

async function processLogoClean() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  const b64 = fs.readFileSync('public/images/home/sharda-dinings-logo.webp').toString('base64');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; background:transparent;">
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
            
            const w = c.width;
            const h = c.height;
            const d = ctx.getImageData(0, 0, w, h).data;
            
            // Artwork is strictly between y: 350 and 1100, x: 300 and 1440
            // Inside this box, there is NO circle, only:
            // 1. Top decorative emblem/flourish
            // 2. "SHARDA DININGS"
            // 3. Subtext
            // 4. Bottom decorative flourish
            
            let minX = w, maxX = 0, minY = h, maxY = 0;
            
            // First find tight bounding box of the gold artwork inside the safe region
            for (let y = 360; y < 1080; y++) {
              for (let x = 320; x < 1420; x++) {
                const idx = (y * w + x) * 4;
                const r = d[idx], g = d[idx+1], b = d[idx+2];
                // Gold / bright lettering:
                const isGold = (r > 75 && g > 55 && (r + g) > 1.8 * b);
                const isBright = (r > 110 && g > 95);
                if (isGold || isBright) {
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;
                }
              }
            }
            
            console.log('Tight artwork bounds:', { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY });
            
            const pad = 12;
            const cropX = Math.max(0, minX - pad);
            const cropY = Math.max(0, minY - pad);
            const cropW = (maxX - minX) + pad * 2;
            const cropH = (maxY - minY) + pad * 2;
            
            const outC = document.createElement('canvas');
            outC.width = cropW;
            outC.height = cropH;
            const outCtx = outC.getContext('2d');
            const outImgData = outCtx.createImageData(cropW, cropH);
            
            for (let y = 0; y < cropH; y++) {
              for (let x = 0; x < cropW; x++) {
                const srcX = cropX + x;
                const srcY = cropY + y;
                const srcIdx = (srcY * w + srcX) * 4;
                const outIdx = (y * cropW + x) * 4;
                
                const r = d[srcIdx], g = d[srcIdx+1], b = d[srcIdx+2];
                
                // Color threshold with soft alpha for clean antialiasing
                const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
                const isGold = (r > 70 && g > 50 && (r + g) > 1.7 * b);
                const isBright = (r > 100 && g > 85);
                
                if (isGold || isBright) {
                  // Normalize gold color to look rich and brilliant on both dark and light backgrounds
                  outImgData.data[outIdx] = r;
                  outImgData.data[outIdx+1] = g;
                  outImgData.data[outIdx+2] = b;
                  
                  // Smooth alpha feathering
                  let alpha = Math.min(255, Math.max(0, (brightness - 45) * 3.5));
                  outImgData.data[outIdx+3] = Math.round(alpha);
                } else {
                  outImgData.data[outIdx+3] = 0;
                }
              }
            }
            
            outCtx.putImageData(outImgData, 0, 0);
            
            window.cleanResult = {
              crop: { cropX, cropY, cropW, cropH },
              dataUrl: outC.toDataURL('image/png')
            };
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.cleanResult);
  const res = await page.evaluate(() => window.cleanResult);
  console.log('Clean logo extracted:', res.crop);
  
  const b64Data = res.dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('public/images/home/sharda-dinings-logo-transparent.png', b64Data, 'base64');
  fs.writeFileSync('public/images/home/sharda-dinings-logo-clean.png', b64Data, 'base64');
  if (fs.existsSync('public/image')) {
    fs.writeFileSync('public/image/sharda-dinings-logo-transparent.png', b64Data, 'base64');
    fs.writeFileSync('public/image/sharda-dinings-logo-clean.png', b64Data, 'base64');
  }
  
  await browser.close();
  console.log('Done cleanly extracting logo artwork without circle!');
}

processLogoClean().catch(console.error);
