const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('src');
const missing = [];
const found = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match string paths like '/images/...' or '/image/...' or '../assets/...'
  const regex = /['"`](\/(?:images|image)\/[^'"`]+)['"`]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const imgPath = match[1];
    const diskPath = path.join('public', imgPath.startsWith('/') ? imgPath.slice(1) : imgPath);
    if (!fs.existsSync(diskPath)) {
      missing.push({ file: path.relative('.', file), path: imgPath });
    } else {
      found.push({ file: path.relative('.', file), path: imgPath });
    }
  }
});

console.log('=== AUDIT REPORT ===');
console.log('Found valid image references:', found.length);
console.log('MISSING IMAGE REFERENCES (' + missing.length + '):');
missing.forEach(m => console.log(`  File: ${m.file} -> ${m.path}`));
