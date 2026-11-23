const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');

async function extractFrames() {
  const videoPath = 'C:/Users/hp/.gemini/antigravity/brain/c0472f54-86e0-4f71-9e71-04a2fda1c2f8/.user_uploaded/media_1795408114150_a517adfc.mp4';
  if (!fs.existsSync(videoPath)) {
    console.error('Video file not found:', videoPath);
    return;
  }
  const videoStat = fs.statSync(videoPath);
  console.log('Video size:', videoStat.size, 'bytes');

  // Create temporary local HTTP server to stream the video
  const server = http.createServer((req, res) => {
    if (req.url === '/video.mp4') {
      const range = req.headers.range;
      const total = videoStat.size;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const partialstart = parts[0];
        const partialend = parts[1];
        const start = parseInt(partialstart, 10);
        const end = partialend ? parseInt(partialend, 10) : total - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start: start, end: end });
        res.writeHead(206, {
          'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4'
        });
        file.pipe(res);
      } else {
        res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
        fs.createReadStream(videoPath).pipe(res);
      }
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
          <body style="margin:0; background:#000;">
            <video id="v" src="/video.mp4" muted playsinline></video>
            <canvas id="c"></canvas>
          </body>
        </html>
      `);
    }
  });

  await new Promise((resolve) => server.listen(8999, resolve));
  console.log('Video server running at http://localhost:8999');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:8999', { waitUntil: 'domcontentloaded' });

  const info = await page.evaluate(() => {
    return new Promise((resolve) => {
      const v = document.getElementById('v');
      v.onloadedmetadata = () => {
        resolve({ duration: v.duration, width: v.videoWidth, height: v.videoHeight });
      };
      v.onerror = (e) => resolve({ error: 'Video load error: ' + (v.error ? v.error.message : '') });
      v.load();
    });
  });

  console.log('Video info:', info);

  if (info && !info.error) {
    const framesDir = path.join(__dirname, 'video_frames');
    if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir);

    const count = 10;
    const step = info.duration / count;
    for (let i = 0; i <= count; i++) {
      const t = Math.min(info.duration - 0.1, i * step);
      await page.evaluate((time) => {
        return new Promise((res) => {
          const v = document.getElementById('v');
          v.currentTime = time;
          v.onseeked = () => {
            const c = document.getElementById('c');
            c.width = v.videoWidth;
            c.height = v.videoHeight;
            const ctx = c.getContext('2d');
            ctx.drawImage(v, 0, 0);
            res();
          };
        });
      }, t);

      const frameData = await page.evaluate(() => {
        return document.getElementById('c').toDataURL('image/jpeg', 0.85).split(',')[1];
      });
      const frameFile = path.join(framesDir, `frame_${i}_${t.toFixed(1)}s.jpg`);
      fs.writeFileSync(frameFile, frameData, 'base64');
      console.log(`Saved frame ${i} (${t.toFixed(1)}s)`);
    }
  }

  await browser.close();
  server.close();
  console.log('Finished extracting frames!');
}

extractFrames().catch(console.error);
