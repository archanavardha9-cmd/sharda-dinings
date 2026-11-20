const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // HOME
  {
    dir: 'home',
    name: 'hero-dining-ambience.webp',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85&fm=webp',
    alt: 'Sharda Dinings elegant main dining hall with ambient warm lighting',
    category: 'Interior & Ambience',
    source: 'Curated Architectural Photography (Unsplash License, editorial hospitality reference)',
    status: 'Optimized WebP (1800px)',
    placement: 'Home Hero'
  },
  {
    dir: 'home',
    name: 'heritage-craft.webp',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Culinary craftsmanship and kitchen dedication since 2010',
    category: 'Brand Heritage',
    source: 'Curated Culinary Craft (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Home Heritage Section'
  },
  {
    dir: 'home',
    name: 'pillars-restaurant.webp',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Signature sizzlers and clay-oven tandoor dining experience',
    category: 'Dining Experience',
    source: 'Curated Food Photography (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Home 4-Pillars: Restaurant'
  },
  {
    dir: 'home',
    name: 'pillars-cafe.webp',
    url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Olive Cafe relaxed ambience with handcrafted coffee and shakes',
    category: 'Cafe Experience',
    source: 'Curated Cafe Photography (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Home 4-Pillars: Olive Cafe'
  },
  {
    dir: 'home',
    name: 'pillars-banquet.webp',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Grand banquet celebration hall with stage and luxury setup',
    category: 'Banquet & Events',
    source: 'Curated Event Venue (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Home 4-Pillars: Banquets'
  },
  {
    dir: 'home',
    name: 'pillars-hotel.webp',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Air-conditioned deluxe room accommodation at Hotel Sharda Dinings',
    category: 'Hotel Accommodation',
    source: 'Curated Hotel Photography (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Home 4-Pillars: Hotel & Rooms'
  },
  {
    dir: 'home',
    name: 'experience-celebration.webp',
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Families and friends sharing meals and celebrations',
    category: 'Lifestyle & Community',
    source: 'Curated Lifestyle Photography (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Home Community & Gatherings'
  },

  // RESTAURANT
  {
    dir: 'restaurant',
    name: 'main-dining-hall.webp',
    url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Main family dining hall with comfortable booth and table seating',
    category: 'Dining Interior',
    source: 'Curated Hospitality Interior (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Restaurant Main Hall'
  },
  {
    dir: 'restaurant',
    name: 'private-dining-lounge.webp',
    url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Dedicated private dining space for 15 to 30 guests',
    category: 'Private Dining',
    source: 'Curated Private Dining Room (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Restaurant Private Dining'
  },
  {
    dir: 'restaurant',
    name: 'ambience-evening.webp',
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Evening dinner ambience with warm golden glows',
    category: 'Ambience',
    source: 'Curated Restaurant Ambience (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Restaurant Evening Atmosphere'
  },
  {
    dir: 'restaurant',
    name: 'service-family-hospitality.webp',
    url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Warm hospitable table service and welcoming dining experience',
    category: 'Hospitality Service',
    source: 'Curated Service Experience (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Restaurant Service & Care'
  },
  {
    dir: 'restaurant',
    name: 'chef-tandoor-craft.webp',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Live clay-oven tandoori preparations by seasoned chefs',
    category: 'Kitchen Craft',
    source: 'Curated Culinary Craft (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Restaurant Kitchen Craft'
  },
  {
    dir: 'restaurant',
    name: 'table-setting-elegance.webp',
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Artisanal table setting with cutlery and glassware',
    category: 'Table Detail',
    source: 'Curated Table Setting (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Restaurant Fine Details'
  },

  // FOOD
  {
    dir: 'food',
    name: 'paneer-tikka-tandoori.webp',
    url: 'https://images.unsplash.com/photo-1567184109191-37764e7fadd9?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Freshly skewered Paneer Tikka roasted in tandoor with aromatic spices',
    category: 'Vegetarian Tandoori',
    source: 'Authentic Indian Food Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu & Restaurant: Veg Starters'
  },
  {
    dir: 'food',
    name: 'chicken-dum-biryani.webp',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Slow-cooked fragrant Chicken Dum Biryani with fried onions and spices',
    category: 'Biryani & Rice',
    source: 'Authentic Indian Biryani Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu & Home: Rice & Biryanis'
  },
  {
    dir: 'food',
    name: 'butter-chicken-handi.webp',
    url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Silky Butter Chicken simmered in rich makhani gravy',
    category: 'Non-Veg Main Course',
    source: 'Authentic Indian Curries (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu & Restaurant: Non-Veg Curries'
  },
  {
    dir: 'food',
    name: 'dal-makhani-special.webp',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Overnight slow-cooked creamy Dal Makhani topped with fresh butter',
    category: 'Vegetarian Main Course',
    source: 'Authentic North Indian Cuisine (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Vegetarian Main Course'
  },
  {
    dir: 'food',
    name: 'tandoori-platter-mixed.webp',
    url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Sizzling tandoori chicken and kebab platter',
    category: 'Tandoori Starters',
    source: 'Authentic Tandoori Grill (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu & Restaurant: Starters'
  },
  {
    dir: 'food',
    name: 'paneer-lababdar.webp',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Paneer Lababdar rich gravy with bell peppers and whole spices',
    category: 'Vegetarian Main Course',
    source: 'Authentic Paneer Specialties (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Paneer Specialties'
  },
  {
    dir: 'food',
    name: 'hakka-noodles-wok.webp',
    url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Wok-tossed Hakka noodles with julienned vegetables and garlic',
    category: 'Chinese & Oriental',
    source: 'Authentic Indo-Chinese Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Oriental & Noodles'
  },
  {
    dir: 'food',
    name: 'chilli-chicken-oriental.webp',
    url: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Crispy wok Chilli Chicken tossed with green chillies and capsicum',
    category: 'Chinese Non-Veg',
    source: 'Authentic Indo-Chinese (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Chinese Starters'
  },
  {
    dir: 'food',
    name: 'crispy-paneer-chilli.webp',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Golden crispy Chilli Paneer with sweet and spicy glaze',
    category: 'Chinese Veg',
    source: 'Authentic Indo-Chinese (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Chinese Starters'
  },
  {
    dir: 'food',
    name: 'assorted-breads-basket.webp',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Freshly baked butter naan, garlic kulcha and lachha paratha',
    category: 'Tandoori Breads',
    source: 'Authentic Indian Breads (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Tandoori Breads'
  },
  {
    dir: 'food',
    name: 'gulab-jamun-dessert.webp',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Warm melt-in-mouth Gulab Jamun steeped in rose-cardamom syrup',
    category: 'Desserts & Sweets',
    source: 'Authentic Indian Sweets (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Menu: Desserts'
  },

  // OLIVE CAFE
  {
    dir: 'cafe',
    name: 'cafe-interior-vibe.webp',
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Warm contemporary Olive Cafe seating with relaxed aesthetic',
    category: 'Cafe Interior',
    source: 'Curated Cafe Atmosphere (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Olive Cafe Hero & Ambience'
  },
  {
    dir: 'cafe',
    name: 'artisan-cold-coffee.webp',
    url: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Chilled signature cold coffee with thick espresso foam',
    category: 'Cafe Beverages',
    source: 'Specialty Coffee Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Olive Cafe: Cold Brews & Coffees'
  },
  {
    dir: 'cafe',
    name: 'nutella-oreo-shake.webp',
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Decadent chocolate Nutella shake with whipped cream and cookies',
    category: 'Artisan Shakes',
    source: 'Artisan Shake Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Olive Cafe: Signature Shakes'
  },
  {
    dir: 'cafe',
    name: 'woodfired-style-pizza.webp',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Crispy artisanal thin-crust pizza loaded with melted cheese and fresh herbs',
    category: 'Cafe Pizzas',
    source: 'Artisan Pizza Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Olive Cafe: Gourmet Pizzas'
  },
  {
    dir: 'cafe',
    name: 'creamy-alfredo-pasta.webp',
    url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281744?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Gourmet white sauce Alfredo pasta with parmesan and herbs',
    category: 'Cafe Pastas',
    source: 'Artisan Pasta Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Olive Cafe: Fresh Pastas'
  },
  {
    dir: 'cafe',
    name: 'grilled-club-sandwich.webp',
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=85&fm=webp',
    alt: 'Toasted club sandwich with seasoned fries and house dips',
    category: 'Cafe Quick Bites',
    source: 'Artisan Sandwich Photography (Unsplash License)',
    status: 'Optimized WebP (1000px)',
    placement: 'Olive Cafe: Sandwiches & Bites'
  },
  {
    dir: 'cafe',
    name: 'cafe-corner-hangout.webp',
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Relaxed hangout corner at Olive Cafe with warm ambient lights',
    category: 'Cafe Lifestyle',
    source: 'Curated Cafe Lifestyle (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Olive Cafe: Chill & Connect'
  },

  // BANQUETS
  {
    dir: 'banquet',
    name: 'grand-banquet-hall.webp',
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Air-conditioned banquet hall set for 100-150 guests with luxury chair styling',
    category: 'Banquet Hall',
    source: 'Luxury Event Venue (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Banquets Hero & Overview'
  },
  {
    dir: 'banquet',
    name: 'wedding-stage-floral.webp',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Bespoke floral wedding and engagement stage setup',
    category: 'Stage & Decor',
    source: 'Indian Wedding Decor (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Banquets: Wedding & Receptions'
  },
  {
    dir: 'banquet',
    name: 'banquet-buffet-setup.webp',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Full-service catering buffet setup with customized veg and non-veg options',
    category: 'Event Catering',
    source: 'Banquet Catering Service (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Banquets: In-House Catering'
  },
  {
    dir: 'banquet',
    name: 'round-table-reception.webp',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Formal banquet round-table seating with floral centrepieces',
    category: 'Event Seating',
    source: 'Formal Event Setting (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Banquets: Corporate & Family Dinners'
  },
  {
    dir: 'banquet',
    name: 'cocktail-prewedding-lounge.webp',
    url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Ambient party celebration lighting for sangeet and milestone parties',
    category: 'Party Atmosphere',
    source: 'Celebration Photography (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Banquets: Social Gatherings'
  },

  // HOTEL
  {
    dir: 'hotel',
    name: 'deluxe-room-king.webp',
    url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Hotel Sharda Dinings Deluxe Air-Conditioned King Room with fresh linens',
    category: 'Deluxe Room',
    source: 'Curated Hotel Interior (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Hotel: Deluxe Room King'
  },
  {
    dir: 'hotel',
    name: 'executive-room-twin.webp',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85&fm=webp',
    alt: 'Twin bed air-conditioned room suitable for families and business travelers',
    category: 'Twin Room',
    source: 'Curated Hotel Interior (Unsplash License)',
    status: 'Optimized WebP (1400px)',
    placement: 'Hotel: Twin Bed Room'
  },
  {
    dir: 'hotel',
    name: 'attached-modern-bathroom.webp',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Modern en-suite bathroom with hot and cold shower amenities',
    category: 'Bathroom Facilities',
    source: 'Hotel Bathroom Detail (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Hotel: Bath & Amenities'
  },
  {
    dir: 'hotel',
    name: 'hotel-corridor-lift.webp',
    url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Clean property corridors with elevator and power backup access',
    category: 'Property Facilities',
    source: 'Hotel Amenities (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Hotel: Facilities & Security'
  },
  {
    dir: 'hotel',
    name: 'guest-lounge-reception.webp',
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85&fm=webp',
    alt: 'Comfortable guest reception and lounge area',
    category: 'Reception & Lobby',
    source: 'Hotel Front Office (Unsplash License)',
    status: 'Optimized WebP (1200px)',
    placement: 'Hotel: Lobby & Check-in'
  }
];

function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(targetPath);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, targetPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(targetPath);
        return reject(new Error(`Failed with status code: ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(targetPath));
      });
    }).on('error', (err) => {
      try { fs.unlinkSync(targetPath); } catch(e) {}
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download and verification of ${images.length} assets...`);
  const results = [];
  
  for (const item of images) {
    const targetDir = path.join(__dirname, '..', 'public', 'images', item.dir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const targetPath = path.join(targetDir, item.name);
    try {
      console.log(`Downloading: ${item.dir}/${item.name}...`);
      await downloadFile(item.url, targetPath);
      const stat = fs.statSync(targetPath);
      console.log(`✓ Saved ${item.name} (${Math.round(stat.size / 1024)} KB)`);
      results.push({ ...item, sizeKb: Math.round(stat.size / 1024), success: true });
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
      results.push({ ...item, error: err.message, success: false });
    }
  }

  // Save Image Inventory JSON
  const inventoryPath = path.join(__dirname, '..', 'src', 'data', 'imageInventory.json');
  const inventoryDir = path.dirname(inventoryPath);
  if (!fs.existsSync(inventoryDir)) {
    fs.mkdirSync(inventoryDir, { recursive: true });
  }
  fs.writeFileSync(inventoryPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\nImage inventory written to ${inventoryPath}`);
}

run();
