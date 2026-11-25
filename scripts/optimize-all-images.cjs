const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const foodDir = path.join(__dirname, '../public/images/food');
  const files = fs.readdirSync(foodDir);

  console.log(`Processing ${files.length} images in ${foodDir}...`);

  for (const file of files) {
    if (file.startsWith('test-')) continue;
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const inputPath = path.join(foodDir, file);
    const targetWebpPath = path.join(foodDir, `${baseName}.webp`);

    try {
      const stats = fs.statSync(inputPath);
      // If it's a huge JPG/PNG, optimize and convert to WebP
      const metadata = await sharp(inputPath).metadata();
      
      const width = Math.min(metadata.width || 1000, 1000);
      
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(targetWebpPath + '.tmp');

      fs.renameSync(targetWebpPath + '.tmp', targetWebpPath);
      const newStats = fs.statSync(targetWebpPath);
      console.log(`✓ Optimized ${file} (${Math.round(stats.size/1024)}KB) -> ${baseName}.webp (${Math.round(newStats.size/1024)}KB)`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  // Also optimize any in olive-cafe if huge
  const cafeDir = path.join(__dirname, '../public/images/olive-cafe');
  if (fs.existsSync(cafeDir)) {
    const cafeFiles = fs.readdirSync(cafeDir);
    for (const file of cafeFiles) {
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
      const baseName = path.basename(file, ext);
      const inputPath = path.join(cafeDir, file);
      const targetWebpPath = path.join(cafeDir, `${baseName}.webp`);
      try {
        const metadata = await sharp(inputPath).metadata();
        const width = Math.min(metadata.width || 1000, 1000);
        await sharp(inputPath)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: 82, effort: 4 })
          .toFile(targetWebpPath + '.tmp');
        fs.renameSync(targetWebpPath + '.tmp', targetWebpPath);
        console.log(`✓ Optimized cafe ${file} -> ${baseName}.webp`);
      } catch (err) {
        console.error(`Error processing cafe ${file}:`, err.message);
      }
    }
  }
}

optimizeImages();
