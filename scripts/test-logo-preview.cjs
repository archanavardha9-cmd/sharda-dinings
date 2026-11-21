const puppeteer = require('puppeteer');
const fs = require('fs');

async function testLogoPreview() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new'
  });
  const page = await browser.newPage();
  const b64 = fs.readFileSync('public/images/home/sharda-dinings-logo-transparent.png').toString('base64');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body style="margin:0; font-family:sans-serif; background:#333; padding:20px;">
        <div style="background:#1C1617; padding:30px; margin-bottom:20px; text-align:center; border:1px solid #444;">
          <h3 style="color:#FAF7F2; margin-top:0;">Header Dark Preview</h3>
          <img src="data:image/png;base64,${b64}" style="height:60px; object-fit:contain;" />
        </div>
        <div style="background:#2E1E19; padding:30px; margin-bottom:20px; text-align:center; border:1px solid #444;">
          <h3 style="color:#FAF7F2; margin-top:0;">Footer Preview</h3>
          <img src="data:image/png;base64,${b64}" style="height:60px; object-fit:contain;" />
        </div>
        <div style="background:#FAF7F2; padding:30px; text-align:center; border:1px solid #ddd;">
          <h3 style="color:#1C1617; margin-top:0;">Light Background Preview</h3>
          <img src="data:image/png;base64,${b64}" style="height:60px; object-fit:contain;" />
        </div>
      </body>
    </html>
  `);
  
  await page.screenshot({ path: 'scripts/logo-test-preview.png' });
  console.log('Saved logo test preview to scripts/logo-test-preview.png');
  await browser.close();
}

testLogoPreview().catch(console.error);
