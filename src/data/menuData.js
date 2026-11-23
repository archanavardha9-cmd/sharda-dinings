export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Curations', icon: '🍽️', tag: 'Complete Catalog' },
  { id: 'soups', name: 'Soups & Shorbas', icon: '🍲', tag: 'Awadhi & Asian Broths' },
  { id: 'veg-starters', name: 'Vegetarian Tandoori', icon: '🍢', tag: 'Charcoal Roasted Kebabs' },
  { id: 'nonveg-starters', name: 'Non-Veg Tandoori', icon: '🍗', tag: 'Mughlai Clay-Oven Grills' },
  { id: 'oriental-veg', name: 'Chinese & Sichuan Veg', icon: '🥢', tag: 'Wok-Tossed Starters' },
  { id: 'oriental-nonveg', name: 'Chinese Non-Veg', icon: '🥟', tag: 'High-Flame Crispy Specialities' },
  { id: 'veg-mains', name: 'Vegetarian Gravies', icon: '🥘', tag: 'Handi & Shahi Curries' },
  { id: 'nonveg-mains', name: 'Poultry & Meat Gravies', icon: '🍖', tag: 'Slow-Simmered Rogans' },
  { id: 'biryani-rice', name: 'Biryani & Pulao', icon: '🍚', tag: 'Sealed Awadhi Dum' },
  { id: 'breads', name: 'Tandoori Breads', icon: '🫓', tag: 'Live Tandoor Flatbreads' },
  { id: 'noodles-rice', name: 'Noodles & Fried Rice', icon: '🍜', tag: 'Hakka & Schezwan Classics' },
  { id: 'cafe-continental', name: 'Olive Cafe Pizzas & Pastas', icon: '🍕', tag: 'Wood-Fired & Italian Alfredo' },
  { id: 'beverages-desserts', name: 'Shakes, Coffees & Desserts', icon: '🍨', tag: 'Artisanal Sips & Sweet Feasts' }
];

export const MENU_ITEMS = [
  // Soups & Shorbas
  {
    id: 'm1',
    name: 'Tomato Dhaniya Shorba',
    category: 'soups',
    isVeg: true,
    image: '/images/food/tomato-dhaniya-shorba.jpg',
    description: 'Aromatic roasted tomato broth infused with fresh coriander root, ginger, roasted cumin, and crisp fried croutons.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Garlic Toast or Naan'
  },
  {
    id: 'm2',
    name: 'Cream of Mushroom Soup',
    category: 'soups',
    isVeg: true,
    image: '/images/food/cream-of-mushroom-soup.jpg',
    description: 'Silky button mushroom velouté finished with farm dairy cream, thyme reduction, and toasted herbs.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Fresh Herb Croutons'
  },
  {
    id: 'm3',
    name: 'Chicken Hot & Sour Soup',
    category: 'soups',
    isVeg: false,
    image: '/images/food/chicken-hot-and-sour-soup.jpg',
    description: 'Sichuan hot and sour broth brimming with shredded chicken, bamboo shoots, wood-ear mushrooms, and cracked pepper.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Crispy Rice Crackers'
  },
  {
    id: 'm4',
    name: 'Veg Manchow Soup',
    category: 'soups',
    isVeg: true,
    image: '/images/food/sharda-dinings-wonton-soup.webp',
    description: 'Spiced garlic and ginger soya broth loaded with fine-diced vegetables, cilantro, and topped with crisp golden fried noodles.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Fried Noodles'
  },

  // Vegetarian Tandoori Starters
  {
    id: 'm5',
    name: 'Paneer Tikka Sharda Classic',
    category: 'veg-starters',
    isVeg: true,
    image: '/images/food/tandoori-veg-platter.webp',
    description: 'Malai paneer cubes marinated in cold-pressed mustard oil, hung curd, and Kashmiri deghi mirch, charred over charcoal embers.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Mint Laccha Salad'
  },
  {
    id: 'm6',
    name: 'Paneer Peshawari & Ludhiyani Tikka',
    category: 'veg-starters',
    isVeg: true,
    image: '/images/food/paneer-peshawari-tikka.jpg',
    description: 'Tender cottage cheese tikka tossed with coarse black pepper, fresh garden mint, roasted coriander seeds, and melted butter.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Pudina Chutney'
  },
  {
    id: 'm7',
    name: 'Corn Cheese Kabab',
    category: 'veg-starters',
    isVeg: true,
    image: '/images/food/corn-cheese-kabab.jpg',
    description: 'Crisp golden patties crafted from tender sweet corn kernels, molten mozzarella, and fresh garden herbs.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Sweet Tangy Slaw'
  },
  {
    id: 'm8',
    name: 'Dahi Kandhari Kabab',
    category: 'veg-starters',
    isVeg: true,
    image: '/images/food/sharda-dinings-beetroot-croquettes.webp',
    description: 'Guest-favorite hung yoghurt cutlets folded with green chillies, fresh coriander, pomegranate pearls, and roasted spices.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Anardana Dip'
  },
  {
    id: 'm9',
    name: 'Mushroom Corn Seekh Kabab',
    category: 'veg-starters',
    isVeg: true,
    image: '/images/food/open-stuffed-mushroom.webp',
    description: 'Minced button mushrooms and sweetcorn skewered with gram flour, cardamom, and broiled over live charcoal embers.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Salli Onion Rings'
  },

  // Non-Veg Tandoori Starters
  {
    id: 'm10',
    name: 'Tandoori Chicken (Half / Full)',
    category: 'nonveg-starters',
    isVeg: false,
    image: '/images/food/sharda-dinings-food-spread-clean.webp',
    description: 'Whole spring chicken marinated overnight in hung curd, Kashmiri spices, crushed garlic, and slow-roasted in the clay tandoor.',
    chefSpecial: true,
    spice: 'Hot',
    pairing: 'Lemon Onion Rings'
  },
  {
    id: 'm11',
    name: 'Afghani Murgh Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    image: '/images/food/afghani-murgh-tikka.jpg',
    description: 'Boneless tender chicken medallions immersed in cashew cream, green cardamom, roasted mace, and butter-grilled.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Cream Garlic Dip'
  },
  {
    id: 'm12',
    name: 'Murgh Malai Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    image: '/images/food/murgh-malai-tikka.jpg',
    description: 'Melt-in-mouth chicken chunks steeped in fresh clotted cream, white pepper, royal cumin, and melted butter glaze.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Herb Chutney'
  },
  {
    id: 'm13',
    name: 'Garlic Lemon Herb Roast Chicken',
    category: 'nonveg-starters',
    isVeg: false,
    image: '/images/food/garlic-lemon-herb-chicken.webp',
    description: 'Herb-marinated boneless chicken skewers roasted with crushed garlic, garden rosemary, and charred citrus peel.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Citrus Glaze'
  },
  {
    id: 'm14',
    name: 'Mutton Seekh Kabab',
    category: 'nonveg-starters',
    isVeg: false,
    image: '/images/food/mutton-seekh-kabab.jpg',
    description: 'Hand-pounded tender lamb mince with shallots, mint, and Awadhi potli spices grilled on long iron skewers.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Rumali Roti & Lemon'
  },

  // Chinese & Sichuan Veg
  {
    id: 'm15',
    name: 'Crispy Chilli Paneer',
    category: 'oriental-veg',
    isVeg: true,
    image: '/images/food/shanghai-chilli-paneer.webp',
    description: 'Wok-tossed cottage cheese with crunchy tri-colour bell peppers, spring onions, dark soya, and toasted sesame.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Chilli Garlic Dip'
  },
  {
    id: 'm16',
    name: 'Honey Chilli Crispy Potato',
    category: 'oriental-veg',
    isVeg: true,
    image: '/images/food/honey-chilli-potato.jpg',
    description: 'Crisp hand-cut potato fingers glazed in pure wildflower honey, crushed chilli flakes, scallions, and roasted sesame.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Sesame Glaze'
  },
  {
    id: 'm17',
    name: 'Veg Manchurian Dry',
    category: 'oriental-veg',
    isVeg: true,
    image: '/images/food/veg-manchurian-dry.jpg',
    description: 'Golden vegetable dumplings tossed in burnt garlic, ginger, chopped spring onions, and soya coriander reduction.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Spring Onion Slaw'
  },
  {
    id: 'm18',
    name: 'Crispy Baby Corn Chilli',
    category: 'oriental-veg',
    isVeg: true,
    image: '/images/food/sharda-dinings-spring-rolls.webp',
    description: 'Batter-fried young sweetcorn tossed with cracked pepper, scallions, dry red chillies, and Sichuan seasoning.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Sweet Plum Dip'
  },

  // Chinese Non-Veg
  {
    id: 'm19',
    name: 'Chicken Chilli Hakka Style',
    category: 'oriental-nonveg',
    isVeg: false,
    image: '/images/food/thai-stir-fry-chicken.webp',
    description: 'Crisp boneless chicken cubes wok-seared on high flame with green chillies, garlic cloves, and dark soy reduction.',
    chefSpecial: true,
    spice: 'Hot',
    pairing: 'Hakka Noodles'
  },
  {
    id: 'm20',
    name: 'Chicken Lollipop (6 Pcs)',
    category: 'oriental-nonveg',
    isVeg: false,
    image: '/images/food/chicken-lollipop.jpg',
    description: 'Frenched chicken winglets coated in spicy ginger-garlic batter, crisp-fried and served with hot Schezwan dip.',
    chefSpecial: false,
    spice: 'Hot',
    pairing: 'Schezwan Dip'
  },
  {
    id: 'm21',
    name: 'Chicken 65 South-Oriental',
    category: 'oriental-nonveg',
    isVeg: false,
    image: '/images/food/chicken-65.jpg',
    description: 'Crispy chicken bites tempered with aromatic curry leaves, crushed peppercorns, dried red chillies, and yogurt glaze.',
    chefSpecial: false,
    spice: 'Hot',
    pairing: 'Fried Green Chillies'
  },

  // Vegetarian Gravies
  {
    id: 'm22',
    name: 'Dal Makhani Sharda Signature',
    category: 'veg-mains',
    isVeg: true,
    image: '/images/food/dal-makhani-naan.jpg',
    description: 'Black urad lentils and kidney beans slow-simmered overnight over charcoal, finished with white butter and farm dairy cream.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Butter Garlic Naan'
  },
  {
    id: 'm23',
    name: 'Paneer Punjabi Tadka / Butter Masala',
    category: 'veg-mains',
    isVeg: true,
    image: '/images/food/paneer-butter-masala.jpg',
    description: 'Soft cottage cheese simmered in a velvety tomato-cashew butter gravy perfumed with roasted kasuri methi.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Tandoori Kulcha'
  },
  {
    id: 'm24',
    name: 'Paneer Lababdar / Handi Paneer',
    category: 'veg-mains',
    isVeg: true,
    image: '/images/food/paneer-lababdar.jpg',
    description: 'Earthen-pot cottage cheese cooked with crunchy bell peppers, grated paneer, whole spices, and onion-tomato relish.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Laccha Paratha'
  },
  {
    id: 'm25',
    name: 'Malai Kofta Royal',
    category: 'veg-mains',
    isVeg: true,
    image: '/images/food/malai-kofta-royal.jpg',
    description: 'Tender paneer and dry-fruit dumplings bathed in an opulent cardamom-infused golden cashew cream gravy.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Missi Roti'
  },
  {
    id: 'm26',
    name: 'Pindi Chana Masala',
    category: 'veg-mains',
    isVeg: true,
    image: '/images/food/sharda-dinings-naan-and-chole.webp',
    description: 'Slow-stewed kabuli chickpeas tossed with dried pomegranate seed powder, dry mango amchur, and carom seeds.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Amritsari Kulcha'
  },

  // Poultry & Meat Gravies
  {
    id: 'm27',
    name: 'Classic Butter Chicken',
    category: 'nonveg-mains',
    isVeg: false,
    image: '/images/food/butter-chicken-kulcha.jpg',
    description: 'Boneless tandoori chicken simmered in rich velvety tomato-makhani gravy perfumed with fenugreek and butter.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Butter Naan'
  },
  {
    id: 'm28',
    name: 'Chicken Lababdar',
    category: 'nonveg-mains',
    isVeg: false,
    image: '/images/food/chicken-lababdar.jpg',
    description: 'Succulent chicken pieces simmered in coarse tomato-cashew gravy finished with grated paneer and ginger juliennes.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Garlic Naan'
  },
  {
    id: 'm29',
    name: 'Kadhai Chicken',
    category: 'nonveg-mains',
    isVeg: false,
    image: '/images/food/kadhai-chicken.jpg',
    description: 'Wok-tossed chicken with freshly ground roasted coriander seeds, black peppercorns, and crisp green bell peppers.',
    chefSpecial: false,
    spice: 'Hot',
    pairing: 'Roomali Roti'
  },
  {
    id: 'm30',
    name: 'Mutton Kali Mirch',
    category: 'nonveg-mains',
    isVeg: false,
    image: '/images/food/mutton-kali-mirch.jpg',
    description: 'Slow-braised tender goat meat cooked in a rich clotted cream and freshly cracked Tellicherry black peppercorn sauce.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Khamiri Roti'
  },
  {
    id: 'm31',
    name: 'Desi Chicken Curry',
    category: 'nonveg-mains',
    isVeg: false,
    image: '/images/food/desi-chicken-curry.jpg',
    description: 'Homestyle countryside poultry curry prepared with bay leaf, cloves, cold-pressed mustard oil, and browned onions.',
    chefSpecial: false,
    spice: 'Hot',
    pairing: 'Steamed Rice'
  },

  // Biryani & Pulao
  {
    id: 'm32',
    name: 'Chicken Dum Biryani',
    category: 'biryani-rice',
    isVeg: false,
    image: '/images/food/sharda-dining-biryani.webp',
    description: 'Aged long-grain basmati layered with marinated chicken, saffron milk, brown onions, and mint, sealed on dum in handi.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Burani Raita & Salan'
  },
  {
    id: 'm33',
    name: 'Veg Dum Biryani Awadhi',
    category: 'biryani-rice',
    isVeg: true,
    image: '/images/food/sharda-dinings-hyderabadi-biryani.webp',
    description: 'Farm-fresh vegetables, saffron basmati rice, caramelised shallots, and whole spices steamed gently on dum.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Cucumber Mint Raita'
  },
  {
    id: 'm34',
    name: 'Chicken Tikka Biryani (4 Pcs)',
    category: 'biryani-rice',
    isVeg: false,
    image: '/images/food/chicken-tikka-biryani.jpg',
    description: 'Smoky tandoor-charred chicken tikka cubes folded into fragrant spiced basmati rice with kewra water and saffron.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Boondi Raita'
  },
  {
    id: 'm34b',
    name: 'Egg Biryani (4 Pcs)',
    category: 'biryani-rice',
    isVeg: false,
    image: '/images/food/egg-biryani.jpg',
    description: 'Pan-roasted spiced boiled eggs layered with mint sprigs, crisp golden onions, and aromatic saffron basmati rice.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Tadka Raita'
  },

  // Live Tandoori Breads
  {
    id: 'm35',
    name: 'Butter Naan / Garlic Naan',
    category: 'breads',
    isVeg: true,
    image: '/images/food/butter-garlic-naan.jpg',
    description: 'Live clay-oven baked refined flour bread generously brushed with churned dairy butter or studded with roasted garlic.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Gravy Accompaniment'
  },
  {
    id: 'm36',
    name: 'Lachha Paratha / Missi Roti',
    category: 'breads',
    isVeg: true,
    image: '/images/food/lachha-paratha.jpg',
    description: 'Crisp multi-layered wholewheat paratha or roasted gram-flour missi roti flavoured with carom seeds and fenugreek.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Dal Makhani'
  },

  // Noodles & Fried Rice
  {
    id: 'm37',
    name: 'Veg Chilli Garlic Fried Rice',
    category: 'noodles-rice',
    isVeg: true,
    image: '/images/food/veg-chilli-garlic-fried-rice.jpg',
    description: 'High-flame wok tossed long-grain rice loaded with golden roasted garlic, crushed chilli flakes, and crisp diced vegetables.',
    chefSpecial: true,
    spice: 'Medium',
    pairing: 'Veg Manchurian Gravy'
  },
  {
    id: 'm37b',
    name: 'Veg Hakka Noodles',
    category: 'noodles-rice',
    isVeg: true,
    image: '/images/food/veg-hakka-noodles.jpg',
    description: 'Classic wok-tossed noodles with shredded cabbage, carrots, bell peppers, light soya, and toasted sesame oil.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'Chilli Paneer'
  },
  {
    id: 'm38',
    name: 'Chicken Schezwan Fried Rice',
    category: 'noodles-rice',
    isVeg: false,
    image: '/images/food/chicken-schezwan-fried-rice.jpg',
    description: 'Long-grain basmati tossed with shredded chicken, scrambled eggs, scallions, and in-house fiery Schezwan chilli paste.',
    chefSpecial: false,
    spice: 'Hot',
    pairing: 'Chicken Chilli Gravy'
  },

  // Olive Cafe Pizzas & Pastas
  {
    id: 'c1',
    name: 'Margherita / Corn Cheese Pizza',
    category: 'cafe-continental',
    isVeg: true,
    image: '/images/olive-cafe/corn-margherita-pizza.jpg',
    description: 'Thin-crust hand-stretched pizza topped with San Marzano tomato basil sauce, golden sweet corn, and melted mozzarella.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Olive Oil & Chilli Flakes'
  },
  {
    id: 'c2',
    name: 'Creamy White Sauce Alfredo Penne',
    category: 'cafe-continental',
    isVeg: true,
    image: '/images/olive-cafe/creamy-alfredo-pasta.webp',
    description: 'Al dente penne folded into velvety garlic-parmesan cream sauce with sliced black olives and crisp garlic sourdough toast.',
    chefSpecial: true,
    spice: 'Mild',
    pairing: 'Herbed Garlic Bread'
  },
  {
    id: 'c2b',
    name: 'Arrabbiata Red Sauce Penne',
    category: 'cafe-continental',
    isVeg: true,
    image: '/images/olive-cafe/arrabita-pasta.webp',
    description: 'Slow-simmered plum tomato, fresh garden basil, and crushed chilli flake sauce tossed with penne and parmesan shavings.',
    chefSpecial: false,
    spice: 'Medium',
    pairing: 'Crispy Focaccia'
  },
  {
    id: 'c3',
    name: 'Signature Grilled Club Sandwich',
    category: 'cafe-continental',
    isVeg: true,
    image: '/images/food/sharda-dinings-table-spread.webp',
    description: 'Triple-decker butter-toasted sandwich layered with sharp cheddar cheese, crisp cucumber, garden vegetables, and mint slaw.',
    chefSpecial: false,
    spice: 'Mild',
    pairing: 'French Fries & Dip'
  },

  // Shakes, Coffees & Desserts
  {
    id: 'd1',
    name: 'Classic & Caramel Cold Coffee',
    category: 'beverages-desserts',
    isVeg: true,
    image: '/images/olive-cafe/olive-cafe-coffee.webp',
    description: 'Chilled brewed Arabica espresso shaken with creamy dairy milk, golden caramel drizzle, and velvety vanilla bean ice cream.',
    chefSpecial: true,
    spice: 'Sweet',
    pairing: 'Dark Choco Cookie'
  },
  {
    id: 'd2',
    name: 'KitKat / Nutella Oreo Thick Shake',
    category: 'beverages-desserts',
    isVeg: true,
    image: '/images/olive-cafe/nutella-oreo-shakes.jpg',
    description: 'Indulgent thick dessert shake blended with roasted hazelnut Nutella, crushed Oreo cookies, and topped with crunchy KitKat bars.',
    chefSpecial: true,
    spice: 'Sweet',
    pairing: 'Whipped Cream Peak'
  },
  {
    id: 'd3',
    name: 'Brown Choco Fudge Sundae',
    category: 'beverages-desserts',
    isVeg: true,
    image: '/images/olive-cafe/sharda-dinings-ice-cream-sundae.webp',
    description: 'Warm walnut fudge brownie crowned with double vanilla scoops, molten Belgian dark chocolate ganache, and toasted cashew nuts.',
    chefSpecial: true,
    spice: 'Sweet',
    pairing: 'Toasted Cashews'
  },
  {
    id: 'd4',
    name: 'Royal Shahi Gulab Jamun (2 Pcs)',
    category: 'beverages-desserts',
    isVeg: true,
    image: '/images/food/shahi-gulab-jamun.jpg',
    description: 'Warm saffron and green cardamom infused khoya dumplings bathed in fragrant rose-sugar syrup, garnished with slivered pistachios.',
    chefSpecial: false,
    spice: 'Sweet',
    pairing: 'Rabri or Vanilla Scoop'
  }
];
