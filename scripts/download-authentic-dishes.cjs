const https = require('https');
const fs = require('fs');
const path = require('path');

const titlesToDownload = [
  { file: 'cream-of-mushroom-soup.jpg', title: 'File:Bowl of Cream of Mushroom Soup.JPG' },
  { file: 'chicken-hot-and-sour-soup.jpg', title: 'File:Hot-and-Sour-Soup-Bowl.jpg' },
  { file: 'veg-manchow-soup.jpg', title: 'File:Manchow soup - Indo-Chinese cuisine.jpg' },
  { file: 'corn-cheese-kabab.jpg', title: 'File:CORN SEEKH KABAB.jpg' },
  { file: 'dahi-kandhari-kabab.jpg', title: 'File:Reshmi Dahi Ke Kabab - Home - Chandigarh - India - 0009.jpg' },
  { file: 'afghani-murgh-tikka.jpg', title: 'File:Afghani Malai Chicken Tikka.jpg' },
  { file: 'murgh-malai-tikka.jpg', title: 'File:Malai chicken tikka.JPG' },
  { file: 'honey-chilli-potato.jpg', title: 'File:Honey chilli potato 2.jpg' },
  { file: 'veg-manchurian-dry.jpg', title: 'File:Veg manchurian Balls.jpg' },
  { file: 'crispy-baby-corn-chilli.jpg', title: 'File:Baby Corn Manchury Dry.jpg' },
  { file: 'chicken-lollipop.jpg', title: 'File:Chicken lollipop in Goa.jpg' },
  { file: 'chicken-65.jpg', title: 'File:Chicken 65.jpg' },
  { file: 'mutton-seekh-kabab.jpg', title: 'File:Pakistani Food Beef Kabobs.jpg' },
  { file: 'paneer-lababdar.jpg', title: 'File:Paneer Tikka Masala (2026) 01.jpg' },
  { file: 'malai-kofta-royal.jpg', title: 'File:Malai Kofta.jpg' },
  { file: 'chicken-lababdar.jpg', title: 'File:Chicken Tikka Masala KellySue.JPG' },
  { file: 'egg-biryani.jpg', title: 'File:Egg Biryani in a restaurant.jpg' },
  { file: 'butter-garlic-naan.jpg', title: 'File:Annapurna Naan.jpg' },
  { file: 'lachha-paratha.jpg', title: 'File:Paratha Sabji MA01.jpg' },
  { file: 'veg-chilli-garlic-fried-rice.jpg', title: 'File:Fried rice in home.jpg' },
  { file: 'veg-hakka-noodles.jpg', title: 'File:Tasty hakka noodles image.jpg' },
  { file: 'chicken-schezwan-fried-rice.jpg', title: 'File:Pineapple fried rice at Banana Leaf in Milpitas, California.jpg' },
  { file: 'club-sandwich.jpg', title: 'File:Club sandwich.jpg' },
  { file: 'cold-coffee.jpg', title: 'File:Cold Coffee 3.jpg' }
];

async function getImageUrl(title) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(title) + '&prop=imageinfo&iiprop=url&format=json';
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'ShardaDiningsDownloader/2.0 (contact@shardadinings.in)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const p = Object.values(json.query.pages)[0];
          const directUrl = p.imageinfo ? p.imageinfo[0].url : null;
          resolve(directUrl);
        } catch(e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function downloadFile(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'ShardaDiningsDownloader/2.0 (contact@shardadinings.in)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'ShardaDiningsDownloader/2.0' } }, (redirRes) => {
          const fileStream = fs.createWriteStream(dest);
          redirRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolve(fs.statSync(dest).size > 1000);
          });
        });
      } else if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(fs.statSync(dest).size > 1000);
        });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  console.log('Downloading accurate, authentic dish images from Wikimedia Commons...');
  for (const item of titlesToDownload) {
    const directUrl = await getImageUrl(item.title);
    if (!directUrl) {
      console.error('Failed to resolve URL for', item.title);
      continue;
    }
    const dest = path.join('public', 'images', 'food', item.file);
    const success = await downloadFile(directUrl, dest);
    console.log(item.file, success ? 'SUCCESS (' + fs.statSync(dest).size + ' bytes)' : 'FAILED');
    // slight polite delay between downloads
    await new Promise(r => setTimeout(r, 300));
  }
  console.log('Download complete!');
}

run();
