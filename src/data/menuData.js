import dalMakhaniImg from '../assets/images/dal_makhani_naan_1795201046179.jpg';
import butterChickenImg from '../assets/images/butter_chicken_kulcha_1795201049476.jpg';
import cornPizzaImg from '../assets/images/corn_margherita_pizza_1795201048660.jpg';
import oreoShakeImg from '../assets/images/nutella_oreo_shakes_1795201048991.jpg';

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Curations' },
  { id: 'soups', name: 'Soups & Shorbas' },
  { id: 'veg-starters', name: 'Vegetarian Tandoori' },
  { id: 'nonveg-starters', name: 'Non-Veg Tandoori' },
  { id: 'oriental-veg', name: 'Chinese & Sichuan Veg' },
  { id: 'oriental-nonveg', name: 'Chinese Non-Veg' },
  { id: 'veg-mains', name: 'Vegetarian Gravies' },
  { id: 'nonveg-mains', name: 'Poultry & Meat Gravies' },
  { id: 'biryani-rice', name: 'Biryani & Pulao' },
  { id: 'breads', name: 'Tandoori Breads' },
  { id: 'noodles-rice', name: 'Noodles & Fried Rice' },
  { id: 'cafe-continental', name: 'Olive Cafe Pizzas & Pastas' },
  { id: 'beverages-desserts', name: 'Shakes, Coffees & Desserts' }
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
    description: 'Silky button mushroom velouté finished with farm cream and toasted croutons.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm3',
    name: 'Chicken Hot & Sour Soup',
    category: 'soups',
    isVeg: false,
    price: 240,
    description: 'Sichuan hot and sour broth brimming with shredded chicken, bamboo shoots, and mushrooms.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm4',
    name: 'Veg Manchow Soup',
    category: 'soups',
    isVeg: true,
    price: 190,
    description: 'Spiced garlic and ginger soya broth topped with crunchy fried noodles.',
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
    image: '/images/food/tandoori-veg-platter.webp',
    description: 'Malai paneer cubes marinated in mustard oil, hung curd, and Kashmiri deghi mirch, clay oven charred.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm6',
    name: 'Paneer Peshawari & Ludhiyani Tikka',
    category: 'veg-starters',
    isVeg: true,
    price: 360,
    description: 'Cottage cheese tikka tossed with coarse black pepper, fresh mint, and roasted coriander.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm7',
    name: 'Corn Cheese Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 320,
    description: 'Crisp golden patties crafted from sweet corn, melted mozzarella, and fresh herbs.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm8',
    name: 'Dahi Kandhari Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 340,
    description: 'Guest-favorite hung yoghurt cutlets folded with green chillies, coriander, and roasted spices.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm9',
    name: 'Mushroom Corn Seekh Kabab',
    category: 'veg-starters',
    isVeg: true,
    price: 330,
    description: 'Minced button mushrooms and sweetcorn skewered and broiled over charcoal embers.',
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
    image: '/images/food/sharda-dinings-food-spread-clean.webp',
    description: 'Whole spring chicken marinated overnight in hung curd, Kashmiri spices, garlic, and slow-roasted in the tandoor.',
    chefSpecial: true,
    spice: 'Hot'
  },
  {
    id: 'm11',
    name: 'Afghani Murgh Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    price: 420,
    description: 'Boneless tender chicken medallions immersed in cashew cream, green cardamom, and butter-grilled.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm12',
    name: 'Murgh Malai Tikka',
    category: 'nonveg-starters',
    isVeg: false,
    price: 430,
    description: 'Melt-in-mouth chicken chunks steeped in fresh clotted cream, white pepper, and royal cumin.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm13',
    name: 'Garlic Lemon Herb Roast Chicken',
    category: 'nonveg-starters',
    isVeg: false,
    price: 410,
    image: '/images/food/garlic-lemon-herb-chicken.webp',
    description: 'Herb-marinated boneless chicken skewers roasted with crushed garlic and citrus peel.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm14',
    name: 'Mutton Seekh Kabab',
    category: 'nonveg-starters',
    isVeg: false,
    price: 490,
    description: 'Hand-pounded lamb mince with shallots, mint, and whole spices grilled on iron skewers.',
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
    image: '/images/food/shanghai-chilli-paneer.webp',
    description: 'Wok-tossed cottage cheese with crunchy bell peppers, onions, dark soya, and sesame.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm16',
    name: 'Honey Chilli Crispy Potato',
    category: 'oriental-veg',
    isVeg: true,
    price: 260,
    description: 'Crisp hand-cut potato fingers glazed in honey, crushed chilli flakes, and roasted sesame.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm17',
    name: 'Veg Manchurian Dry',
    category: 'oriental-veg',
    isVeg: true,
    price: 280,
    description: 'Golden vegetable dumplings tossed in garlic, ginger, spring onion, and soya reduction.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm18',
    name: 'Crispy Baby Corn Chilli',
    category: 'oriental-veg',
    isVeg: true,
    price: 290,
    description: 'Batter-fried young corn tossed with cracked pepper, scallions, and Sichuan seasoning.',
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
    image: '/images/food/thai-stir-fry-chicken.webp',
    description: 'Crisp chicken cubes wok-seared with green chillies, garlic, and soy reduction.',
    chefSpecial: true,
    spice: 'Hot'
  },
  {
    id: 'm20',
    name: 'Chicken Lollipop (6 Pcs)',
    category: 'oriental-nonveg',
    isVeg: false,
    price: 390,
    description: 'Frenched chicken winglets coated in ginger-garlic batter, crisp-fried with hot Schezwan dip.',
    chefSpecial: false,
    spice: 'Hot'
  },
  {
    id: 'm21',
    name: 'Chicken 65 South-Oriental',
    category: 'oriental-nonveg',
    isVeg: false,
    price: 380,
    description: 'Crispy chicken bites tempered with curry leaves, crushed peppercorns, and dried chillies.',
    chefSpecial: false,
    spice: 'Hot'
  },

  // Vegetarian Main Course
  {
    id: 'm22',
    name: 'Dal Makhani Sharda Signature',
    category: 'veg-mains',
    isVeg: true,
    price: 340,
    image: dalMakhaniImg,
    isIllustrative: true,
    description: 'Black lentils simmered overnight over slow heat, finished with churned butter and cream.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm23',
    name: 'Paneer Punjabi Tadka / Butter Masala',
    category: 'veg-mains',
    isVeg: true,
    price: 345,
    description: 'Soft cottage cheese simmered in a rich tomato-cashew butter gravy tempered with kasuri methi.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm24',
    name: 'Paneer Lababdar / Handi Paneer',
    category: 'veg-mains',
    isVeg: true,
    price: 370,
    description: 'Earthen-pot cottage cheese cooked with bell peppers, whole spices, and onion-tomato relish.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm25',
    name: 'Malai Kofta Royal',
    category: 'veg-mains',
    isVeg: true,
    price: 380,
    description: 'Paneer and dry-fruit dumplings bathed in an opulent cardamom-infused cashew cream gravy.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm26',
    name: 'Pindi Chana Masala',
    category: 'veg-mains',
    isVeg: true,
    price: 290,
    image: '/images/food/sharda-dinings-naan-and-chole.webp',
    description: 'Slow-stewed chickpeas tossed with pomegranate seed powder, dry mango, and carom seeds.',
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
    image: butterChickenImg,
    isIllustrative: true,
    description: 'Boneless tandoori chicken simmered in velvety tomato-makhani gravy perfumed with fenugreek.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'm28',
    name: 'Chicken Lababdar',
    category: 'nonveg-mains',
    isVeg: false,
    price: 470,
    description: 'Succulent chicken pieces in tomato-cashew gravy finished with ginger juliennes.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm29',
    name: 'Kadhai Chicken',
    category: 'nonveg-mains',
    isVeg: false,
    price: 440,
    description: 'Wok-tossed chicken with roasted coriander seeds, crushed pepper, and crisp bell peppers.',
    chefSpecial: false,
    spice: 'Hot'
  },
  {
    id: 'm30',
    name: 'Mutton Kali Mirch',
    category: 'nonveg-mains',
    isVeg: false,
    price: 540,
    description: 'Slow-braised goat meat cooked in a cream and crushed black peppercorn sauce.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm31',
    name: 'Desi Chicken Curry',
    category: 'nonveg-mains',
    isVeg: false,
    price: 450,
    description: 'Homestyle poultry curry prepared with bay leaf, cloves, mustard oil, and caramelised onions.',
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
    image: '/images/food/sharda-dining-biryani.webp',
    description: 'Aged basmati layered with marinated chicken, saffron milk, and mint, slow-sealed on dum.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm33',
    name: 'Veg Dum Biryani Awadhi',
    category: 'biryani-rice',
    isVeg: true,
    price: 380,
    image: '/images/food/sharda-dinings-hyderabadi-biryani.webp',
    description: 'Fresh vegetables, saffron rice, browned shallots, and whole spices steamed gently.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'm34',
    name: 'Chicken Tikka Biryani (4 Pcs)',
    category: 'biryani-rice',
    isVeg: false,
    price: 440,
    description: 'Smoky tandoor-charred chicken tikka folded into fragrant spiced basmati rice.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm34b',
    name: 'Egg Biryani (4 Pcs)',
    category: 'biryani-rice',
    isVeg: false,
    price: 380,
    description: 'Spiced boiled eggs layered with mint, fried onions, and aromatic saffron rice.',
    chefSpecial: false,
    spice: 'Medium'
  },

  // Tandoori Breads
  {
    id: 'm35',
    name: 'Butter Naan / Garlic Naan',
    category: 'breads',
    isVeg: true,
    price: 80,
    image: '/images/food/sharda-dinings-naan-and-chole.webp',
    description: 'Clay-oven baked bread brushed with salted butter or studded with roasted garlic.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm36',
    name: 'Lachha Paratha / Missi Roti',
    category: 'breads',
    isVeg: true,
    price: 75,
    description: 'Multi-layered wholewheat paratha or gram-flour roti with carom seeds and kasuri methi.',
    chefSpecial: false,
    spice: 'Mild'
  },

  // Fried Rice & Noodles
  {
    id: 'm37',
    name: 'Veg Chilli Garlic Fried Rice',
    category: 'noodles-rice',
    isVeg: true,
    price: 250,
    description: 'High-flame wok fried rice loaded with roasted garlic, crushed chilli, and crisp vegetables.',
    chefSpecial: true,
    spice: 'Medium'
  },
  {
    id: 'm37b',
    name: 'Veg Hakka Noodles',
    category: 'noodles-rice',
    isVeg: true,
    price: 240,
    description: 'Classic wok-tossed noodles with cabbage, carrots, bell peppers, and sesame oil.',
    chefSpecial: false,
    spice: 'Mild'
  },
  {
    id: 'm38',
    name: 'Chicken Schezwan Fried Rice',
    category: 'noodles-rice',
    isVeg: false,
    price: 290,
    description: 'Basmati rice tossed with shredded chicken, eggs, and in-house Schezwan chilli paste.',
    chefSpecial: false,
    spice: 'Hot'
  },

  // Olive Cafe Pizzas & Pastas
  {
    id: 'c1',
    name: 'Margherita / Corn Cheese Pizza',
    category: 'cafe-continental',
    isVeg: true,
    price: 340,
    image: cornPizzaImg,
    isIllustrative: true,
    description: 'Thin-crust hand-stretched pizza topped with tomato basil sauce, sweet corn, and melted mozzarella.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'c2',
    name: 'Creamy White Sauce Alfredo Penne',
    category: 'cafe-continental',
    isVeg: true,
    price: 320,
    image: '/images/olive-cafe/creamy-alfredo-pasta.webp',
    description: 'Al dente pasta folded into velvety garlic-parmesan cream sauce with olives and garlic toast.',
    chefSpecial: true,
    spice: 'Mild'
  },
  {
    id: 'c2b',
    name: 'Arrabbiata Red Sauce Penne',
    category: 'cafe-continental',
    isVeg: true,
    price: 320,
    image: '/images/olive-cafe/arrabita-pasta.webp',
    description: 'Slow-simmered plum tomato, basil, and chilli flake sauce tossed with penne and toasted bread.',
    chefSpecial: false,
    spice: 'Medium'
  },
  {
    id: 'c3',
    name: 'Signature Grilled Club Sandwich',
    category: 'cafe-continental',
    isVeg: true,
    price: 250,
    image: '/images/food/sharda-dinings-table-spread.webp',
    description: 'Triple-decker toasted sandwich layered with cheddar, crisp cucumber, veggies, and mint slaw.',
    chefSpecial: false,
    spice: 'Mild'
  },

  // Beverages & Desserts
  {
    id: 'd1',
    name: 'Classic & Caramel Cold Coffee',
    category: 'beverages-desserts',
    isVeg: true,
    price: 180,
    image: '/images/olive-cafe/olive-cafe-coffee.webp',
    description: 'Chilled brewed espresso shaken with creamy milk, caramel swirl, and vanilla ice cream.',
    chefSpecial: true,
    spice: 'Sweet'
  },
  {
    id: 'd2',
    name: 'KitKat / Nutella Oreo Thick Shake',
    category: 'beverages-desserts',
    isVeg: true,
    price: 230,
    image: oreoShakeImg,
    isIllustrative: true,
    description: 'Whipped dessert shake blended with roasted hazelnut Nutella, crushed Oreo, or crunchy KitKat.',
    chefSpecial: true,
    spice: 'Sweet'
  },
  {
    id: 'd3',
    name: 'Brown Choco Fudge Sundae',
    category: 'beverages-desserts',
    isVeg: true,
    price: 220,
    image: '/images/olive-cafe/sharda-dinings-ice-cream-sundae.webp',
    description: 'Warm chocolate brownie topped with vanilla scoops, molten dark chocolate sauce, and nuts.',
    chefSpecial: true,
    spice: 'Sweet'
  },
  {
    id: 'd4',
    name: 'Royal Shahi Gulab Jamun (2 Pcs)',
    category: 'beverages-desserts',
    isVeg: true,
    price: 150,
    description: 'Warm saffron-cardamom khoya dumplings garnished with slivered pistachios.',
    chefSpecial: false,
    spice: 'Sweet'
  }
];
