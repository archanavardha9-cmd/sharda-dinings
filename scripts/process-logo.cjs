const puppeteer = require('puppeteer');
const fs = require('fs');

async function processLogo() {
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
            const imgData = ctx.getImageData(0, 0, w, h);
            const d = imgData.data;
            
            // Find center of circle
            // Let's sample colors to find the circle ring
            // The image is 1744 x 1440.
            const cx = w / 2;
            const cy = h / 2;
            
            // In Sharda Dinings logo:
            // There is an outer circular border / ring.
            // Inside the circle, there is:
            // 1. Top decorative crown/flourish
            // 2. The text "Sharda Dinings" (or SHARDA DININGS)
            // 3. Bottom decorative underline/flourish
            // 4. Sometimes "Multi Cuisine Restaurant"
            
            // Let's inspect pixel brightness distribution
            // Background is dark/black bokeh
            // The gold artwork has high yellow/gold (R > 120, G > 90, B < 150)
            
            // Let's create an output canvas
            const outC = document.createElement('canvas');
            outC.id = 'out';
            outC.width = w;
            outC.height = h;
            const outCtx = outC.getContext('2d');
            const outData = outCtx.createImageData(w, h);
            
            // Let's find the radius of the outer circle
            // Any gold pixel that lies on the circle ring can be removed.
            // Let's measure distance from center for all gold pixels:
            let minR = 9999, maxR = 0;
            const radiiCounts = new Array(Math.ceil(Math.max(w, h))).fill(0);
            
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = (y * w + x) * 4;
                const r = d[idx], g = d[idx+1], b = d[idx+2];
                // Gold / light detection:
                // Background is dark (r < 50, g < 40, b < 40)
                const isGold = (r > 80 && g > 60 && (r + g) > 2.2 * b);
                const isBright = (r > 130 && g > 110);
                
                if (isGold || isBright) {
                  const dist = Math.hypot(x - cx, y - cy);
                  radiiCounts[Math.round(dist)]++;
                }
              }
            }
            
            // Find the peak radius which corresponds to the outer circle ring!
            let circleR = 0;
            let peakCount = 0;
            for (let rad = 300; rad < radiiCounts.length; rad++) {
              if (radiiCounts[rad] > peakCount) {
                peakCount = radiiCounts[rad];
                circleR = rad;
              }
            }
            
            console.log('Detected circle radius:', circleR);
            
            // Now, we want to extract the inner artwork:
            // Exclude everything at or near circleR (e.g. dist > circleR - 40)
            // Also exclude the background (make transparent)
            let bMinX = w, bMaxX = 0, bMinY = h, bMaxY = 0;
            
            for (let y = 0; y < h; y++) {
              for (let x = 0; x < w; x++) {
                const idx = (y * w + x) * 4;
                const r = d[idx], g = d[idx+1], b = d[idx+2];
                const dist = Math.hypot(x - cx, y - cy);
                
                // If on or outside the circle ring, ignore!
                // Give a good margin inside the circle ring:
                if (dist < circleR - 25) {
                  // Check if it's the gold text or flourish
                  // Background inside is very dark
                  const isArtwork = (r > 70 && g > 55 && (r + g) > 1.8 * b) || (r > 120 && g > 100);
                  if (isArtwork) {
                    outData.data[idx] = r;
                    outData.data[idx+1] = g;
                    outData.data[idx+2] = b;
                    outData.data[idx+3] = 255;
                    
                    if (x < bMinX) bMinX = x;
                    if (x > bMaxX) bMaxX = x;
                    if (y < bMinY) bMinY = y;
                    if (y > bMaxY) bMaxY = y;
                  } else {
                    outData.data[idx+3] = 0;
                  }
                } else {
                  outData.data[idx+3] = 0;
                }
              }
            }
            
            outCtx.putImageData(outData, 0, 0);
            
            // Now crop tightly to [bMinX, bMinY, bMaxX - bMinX, bMaxY - bMinY]
            const pad = 20;
            const cropX = Math.max(0, bMinX - pad);
            const cropY = Math.max(0, bMinY - pad);
            const cropW = Math.min(w - cropX, (bMaxX - bMinX) + pad * 2);
            const cropH = Math.min(h - cropY, (bMaxY - bMinY) + pad * 2);
            
            const finalC = document.createElement('canvas');
            finalC.id = 'final';
            finalC.width = cropW;
            finalC.height = cropH;
            const finalCtx = finalC.getContext('2d');
            finalCtx.drawImage(outC, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
            
            document.body.appendChild(finalC);
            window.result = {
              circleR,
              crop: { cropX, cropY, cropW, cropH },
              dataUrl: finalC.toDataURL('image/png')
            };
          };
        </script>
      </body>
    </html>
  `);
  
  await page.waitForFunction(() => window.result);
  const result = await page.evaluate(() => window.result);
  console.log('Result:', result.circleR, result.crop);
  
  // Save as public/images/home/sharda-dinings-logo-transparent.png
  // and in public/images/home/sharda-dinings-logo-clean.png
  const base64Data = result.dataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync('public/images/home/sharda-dinings-logo-transparent.png', base64Data, 'base64');
  fs.writeFileSync('public/images/home/sharda-dinings-logo-clean.png', base64Data, 'base64');
  if (fs.existsSync('public/image')) {
    fs.writeFileSync('public/image/sharda-dinings-logo-transparent.png', base64Data, 'base64');
    fs.writeFileSync('public/image/sharda-dinings-logo-clean.png', base64Data, 'base64');
  }
  
  console.log('Successfully saved transparent cropped logo without circle!');
  await browser.close();
}

processLogo().catch(console.error);
