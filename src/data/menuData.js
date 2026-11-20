export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Curations' },
  { id: 'soups', name: 'Soups & Shorbas' },
  { id: 'veg-starters', name: 'Vegetarian Tandoori' },
  { id: 'nonveg-starters', name: 'Non-Veg Tandoori' },
  { id: 'oriental-veg', name: 'Chinese Veg' },
  { id: 'oriental-nonveg', name: 'Chinese Non-Veg' },
  { id: 'veg-mains', name: 'Vegetarian Gravies' },
  { id: 'nonveg-mains', name: 'Poultry & Meat Gravies' },
  { id: 'biryani-rice', name: 'Biryani & Pulao' },
  { id: 'breads', name: 'Tandoori Breads' },
  { id: 'noodles-rice', name: 'Noodles & Fried Rice' },
  { id: 'cafe-continental', name: 'Olive Cafe Specials' },
  { id: 'beverages-desserts', name: 'Beverages & Desserts' }
];

export const MENU_ITEMS = [
  // Soups
  {
    id: 'm1',
    name: 'Tomato Dhaniya Shorba',
    category: 'soups',
    isVeg: true,
    price: 180,
    description: 'Aromatic roasted tomato broth infused with fresh coriander root, ginger, and cracked cumin.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm2',
    name: 'Cream of Mushroom Soup',
    category: 'soups',
    isVeg: true,
    price: 210,
    description: 'Silky, earthy button mushroom velouté finished with farm cream and toasted croutons.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm3',
    name: 'Chicken Hot & Sour Soup',
    category: 'soups',
    isVeg: false,
    price: 240,
    description: 'Classic Sichuan hot and sour broth brimming with shredded chicken, bamboo shoots, and mushrooms.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm4',
    name: 'Veg Manchow Soup',
    category: 'soups',
    isVeg: true,
    price: 190,
    description: 'Spiced garlic and ginger soya broth topped with a generous crown of crunchy fried noodles.',
    chefSpecial: false,
    spice: 'Medium'
  },

  // Vegetarian Tandoori Starters
  {
    id: 'm5',
    name: 'Paneer Tikka Sharda Classic',
    category: 'veg-starters',
    isVeg: true,
    price: 340,
    image: '/images/food/paneer-tikka-tandoori.webp',
    description: 'Plump malai paneer cubes marinated in mustard oil, roasted gram flour, hung curd and Kashmiri deghi mirch, clay oven charred.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm6',
    name: 'Paneer Ludhiyani Tikka',
    category: 'veg-starters',
    isVeg: true,
    price: 360,
    description: 'Special cottage cheese tikka tossed with coarse black pepper, fresh mint, and cracked roasted coriander.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm7',
    name: 'Corn Cheese Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 320,
    description: 'Golden fried crispy patties crafted from sweet American corn, melted mozzarella, and fresh herbs.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm8',
    name: 'Dahi Kandhari Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 340,
    description: 'Delicate hung yoghurt cutlets infused with pomegranate kernels, fresh coriander, and roasted spices.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm9',
    name: 'Mushroom Corn Seekh Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 330,
    description: 'Minced button mushrooms and sweetcorn skewered and broiled over smouldering charcoal with royal garam masala.',
    chefSpecial: false,
    spice: 'Medium'
  },

  // Non-Veg Tandoori Starters
  {
    id: 'm10',
    name: 'Tandoori Chicken (Half / Full)',
    category: 'nonveg-starters',
    isVeg: false,
    price: 390,
    image: '/images/food/tandoori-platter-mixed.webp',
    description: 'Whole spring chicken marinated overnight in hung curd, Kashmiri spices, garlic, and mustard oil, slow-roasted in the tandoor.',
    chefSpecial: true,
    spice: 'Hot'
  },
  {
    id: 'm11',
    name: 'Afghani Murgh Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    price: 420,
    description: 'Boneless tender chicken medallions immersed in rich cashew cream, green cardamom, cheese, and grilled to butter-soft perfection.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm12',
    name: 'Murgh Malai Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    price: 430,
    description: 'Melt-in-mouth chicken chunks steeped in fresh clotted cream, white pepper, royal cumin, and slow-charred.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm13',
    name: 'Banjara Chicken Kabab',
    category: 'nonveg-starters',
    isVeg: false,
    price: 410,
    description: 'Rustic spiced chicken kebabs coated with pounded mint, coriander, spicy green chillies, and roasted gram.',
    chefSpecial: false,
    spice: 'Hot'
  },
  {
    id: 'm14',
    name: 'Mutton Seekh Kabab',
    category: 'nonveg-starters',
    isVeg: false,
    price: 490,
    description: 'Hand-pounded lamb mince mixed with shallots, mint, and secret whole spices, grilled on iron skewers.',
    chefSpecial: true,
    spice: 'Medium'
  },

  // Chinese Veg
  {
    id: 'm15',
    name: 'Crispy Chilli Paneer',
    category: 'oriental-veg',
    isVeg: true,
    price: 320,
    image: '/images/food/crispy-paneer-chilli.webp',
    description: 'Wok-tossed battered cottage cheese with crunchy bell peppers, onions, dark soya, and toasted sesame.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm16',
    name: 'Honey Chilli Crispy Potato',
    category: 'oriental-veg',
    isVeg: true,
    price: 260,
    description: 'Crisp hand-cut potato fingers tossed in sweet mountain honey, red chilli flakes, and roasted sesame seeds.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm17',
    name: 'Veg Manchurian Dry',
    category: 'oriental-veg',
    isVeg: true,
    price: 280,
    description: 'Golden minced vegetable dumplings tossed in garlic, ginger, spring onion, and tangy soya reduction.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm18',
    name: 'Crispy Baby Corn Chilli',
    category: 'oriental-veg',
    isVeg: true,
    price: 290,
    description: 'Batter-fried young corn tossed with cracked pepper, bell peppers, scallions, and Chinese five-spice.',
    chefSpecial: false,
    spice: 'Medium'
  },

  // Chinese Non-Veg
  {
    id: 'm19',
    name: 'Chicken Chilli Hakka Style',
    category: 'oriental-nonveg',
    isVeg: false,
    price: 380,
    image: '/images/food/chilli-chicken-oriental.webp',
    description: 'Crisp chicken cubes wok-seared with spicy green chillies, crushed garlic, and savory Asian soy reduction.',
    chefSpecial: true,
    spice: 'Hot'
  },
  {
    id: 'm20',
    name: 'Chicken Lollipop (6 Pcs)',
    category: 'oriental-nonveg',
    isVeg: false,
    price: 390,
    description: 'Frenched chicken winglets coated in spicy ginger-garlic batter, deep-fried crisp, served with hot Schezwan dip.',
    chefSpecial: false,
    spice: 'Hot'
  },
  {
    id: 'm21',
    name: 'Chicken 65 South-Oriental',
    category: 'oriental-nonveg',
    isVeg: false,
    price: 380,
    description: 'Crispy chicken bites tempered with curry leaves, crushed peppercorns, dried red chillies, and yoghurt marinade.',
    chefSpecial: false,
    spice: 'Hot'
  },

  // Vegetarian Main Course
  {
    id: 'm22',
    name: 'Dal Makhani Sharda Signature',
    category: 'veg-mains',
    isVeg: true,
    price: 310,
    image: '/images/food/dal-makhani-special.webp',
    description: 'Slow-simmered black lentils cooked overnight over charcoal embers, finished with churned butter and dairy cream.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm23',
    name: 'Paneer Lababdar',
    category: 'veg-mains',
    isVeg: true,
    price: 370,
    image: '/images/food/paneer-lababdar.webp',
    description: 'Cottage cheese simmered in a luscious gravy of ripe plum tomatoes, onion relish, cashew cream, and grated paneer.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm24',
    name: 'Handi Paneer Khas',
    category: 'veg-mains',
    isVeg: true,
    price: 360,
    description: 'Tender paneer cubes cooked in an earthenware clay pot with whole spices, capsicum, and thick onion-tomato masala.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm25',
    name: 'Malai Kofta Royal',
    category: 'veg-mains',
    isVeg: true,
    price: 380,
    description: 'Dumplings of paneer and dried fruits bathed in an opulent cardamom-infused golden cashew cream gravy.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm26',
    name: 'Pindi Chana Masala',
    category: 'veg-mains',
    isVeg: true,
    price: 290,
    description: 'Slow-stewed chickpeas tossed with pomegranate seed powder, dry mango, carom seeds, and green chillies.',
    chefSpecial: false,
    spice: 'Medium'
  },

  // Non-Veg Main Course
  {
    id: 'm27',
    name: 'Classic Butter Chicken',
    category: 'nonveg-mains',
    isVeg: false,
    price: 460,
    image: '/images/food/butter-chicken-handi.webp',
    description: 'Shredded and boneless tandoori chicken simmered in an indulgent silky tomato-makhani gravy perfumed with fenugreek leaves.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm28',
    name: 'Chicken Lababdar',
    category: 'nonveg-mains',
    isVeg: false,
    price: 470,
    description: 'Succulent chicken pieces cooked in a coarsely textured tomato and roasted cashew gravy with bell peppers and cheese.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm29',
    name: 'Kadhai Chicken',
    category: 'nonveg-mains',
    isVeg: false,
    price: 440,
    description: 'Tender chicken tossed in an iron wok with roasted coriander seeds, black peppercorns, onions, and crisp bell peppers.',
    chefSpecial: false,
    spice: 'Hot'
  },
  {
    id: 'm30',
    name: 'Mutton Kali Mirch',
    category: 'nonveg-mains',
    isVeg: false,
    price: 540,
    description: 'Braised tender goat meat cooked in a creamy black pepper and brown onion gravy until falling off the bone.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm31',
    name: 'Desi Chicken Curry',
    category: 'nonveg-mains',
    isVeg: false,
    price: 450,
    description: 'Homestyle slow-simmered poultry curry prepared with whole bay leaf, cloves, mustard oil, and caramelised onions.',
    chefSpecial: false,
    spice: 'Hot'
  },

  // Biryani & Rice
  {
    id: 'm32',
    name: 'Chicken Dum Biryani',
    category: 'biryani-rice',
    isVeg: false,
    price: 410,
    image: '/images/food/chicken-dum-biryani.webp',
    description: 'Long-grain aged basmati rice layered with marinated chicken, saffron milk, mint, and sealed in an earthen handi for dum.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm33',
    name: 'Veg Dum Biryani Awadhi',
    category: 'biryani-rice',
    isVeg: true,
    price: 330,
    description: 'Garden fresh vegetables, fragrant saffron rice, fried onions, and whole spices steamed slowly on low heat.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm34',
    name: 'Mutton Dum Biryani',
    category: 'biryani-rice',
    isVeg: false,
    price: 520,
    description: 'Rich spiced mutton pieces and aged basmati rice dum-cooked with rose water, kewra, and browned shallots.',
    chefSpecial: true,
    spice: 'Medium'
  },

  // Tandoori Breads
  {
    id: 'm35',
    name: 'Butter Naan / Garlic Naan',
    category: 'breads',
    isVeg: true,
    price: 80,
    image: '/images/food/assorted-breads-basket.webp',
    description: 'Clay-oven baked refined flour bread brushed with molten butter or studded with roasted garlic and coriander.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm36',
    name: 'Lachha Paratha / Missi Roti',
    category: 'breads',
    isVeg: true,
    price: 75,
    description: 'Crisp multi-layered wholewheat paratha or gram flour roti infused with carom seeds and dried fenugreek.',
    chefSpecial: false,
    spice: 'Mild'
  },

  // Fried Rice & Noodles
  {
    id: 'm37',
    name: 'Veg Hakka Noodles',
    category: 'noodles-rice',
    isVeg: true,
    price: 240,
    image: '/images/food/hakka-noodles-wok.webp',
    description: 'Classic wok-tossed noodles with shredded cabbage, carrots, bell peppers, celery, and toasted sesame oil.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm38',
    name: 'Chicken Schezwan Fried Rice',
    category: 'noodles-rice',
    isVeg: false,
    price: 290,
    description: 'Aromatic basmati rice tossed with shredded chicken, eggs, and piquant in-house Schezwan red pepper paste.',
    chefSpecial: false,
    spice: 'Hot'
  },

  // Olive Cafe Specials
  {
    id: 'c1',
    name: 'Gourmet Margherita Pizza',
    category: 'cafe-continental',
    isVeg: true,
    price: 340,
    image: '/images/cafe/woodfired-style-pizza.webp',
    description: 'Stone-baked thin crust pizza with San Marzano style tomato concassé, torn mozzarella, and fragrant fresh basil.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'c2',
    name: 'Creamy Alfredo Penne',
    category: 'cafe-continental',
    isVeg: true,
    price: 320,
    image: '/images/cafe/creamy-alfredo-pasta.webp',
    description: 'Al dente penne pasta smothered in rich garlic-parmesan cream sauce with sautéed mushrooms and oregano.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'c3',
    name: 'Signature Grilled Club Sandwich',
    category: 'cafe-continental',
    isVeg: true,
    price: 250,
    image: '/images/cafe/grilled-club-sandwich.webp',
    description: 'Triple-decker toasted bread filled with cheddar slice, seasoned veggies, cucumber relish, served with crispy fries.',
    chefSpecial: false,
    spice: 'Mild'
  },

  // Beverages & Desserts
  {
    id: 'd1',
    name: 'Sharda Classic Cold Coffee',
    category: 'beverages-desserts',
    isVeg: true,
    price: 180,
    image: '/images/cafe/artisan-cold-coffee.webp',
    description: 'Chilled rich espresso blended with creamy whole milk, vanilla bean ice cream, and chocolate lace.',
    chefSpecial: true,
    spice: 'Sweet'
  },
  {
    id: 'd2',
    name: 'Nutella Oreo Thick Shake',
    category: 'beverages-desserts',
    isVeg: true,
    price: 230,
    image: '/images/cafe/nutella-oreo-shake.webp',
    description: 'Decadent milkshake crafted with roasted hazelnut Nutella, crushed Oreo cookies, and whipped cream topping.',
    chefSpecial: true,
    spice: 'Sweet'
  },
  {
    id: 'd3',
    name: 'Royal Shahi Gulab Jamun (2 Pcs)',
    category: 'beverages-desserts',
    isVeg: true,
    price: 150,
    image: '/images/food/gulab-jamun-dessert.webp',
    description: 'Handcrafted golden khoya dumplings steeped in warm saffron-cardamom sugar nectar, garnished with pistachios.',
    chefSpecial: true,
    spice: 'Sweet'
  }
];
