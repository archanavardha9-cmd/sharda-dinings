const fs = require('fs');

const content = fs.readFileSync('./src/data/menuData.js', 'utf8');
const sanitized = content
  .replace(/import\s+.*?;/g, '')
  .replace(/export\s+const\s+MENU_CATEGORIES/g, 'const MENU_CATEGORIES')
  .replace(/export\s+const\s+MENU_ITEMS/g, 'const MENU_ITEMS')
  .replace(/dalMakhaniImg/g, '"/images/food/dal-makhani-naan.jpg"')
  .replace(/butterChickenImg/g, '"/images/food/butter-chicken-kulcha.jpg"')
  .replace(/cornPizzaImg/g, '"/images/olive-cafe/corn-margherita-pizza.jpg"')
  .replace(/oreoShakeImg/g, '"/images/olive-cafe/nutella-oreo-shakes.jpg"');

const fn = new Function(sanitized + '\nreturn { MENU_CATEGORIES, MENU_ITEMS };');
const data = fn();

console.log(`Total Categories: ${data.MENU_CATEGORIES.length}`);
console.log(`Total Dishes: ${data.MENU_ITEMS.length}`);

console.log('\n--- ALL DISHES ---');
data.MENU_ITEMS.forEach((dish, idx) => {
  console.log(`${idx + 1}. [${dish.id}] (${dish.category}) "${dish.name}" -> ${dish.image || 'NO IMAGE'}`);
});
