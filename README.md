# Sharda Dinings, Gorakhpur — Official Hospitality Website

A complete, premium, production-ready website developed for **Sharda Dinings, Gorakhpur**. Designed as an art-directed hospitality brand identity uniting four distinct experiences under one coherent system:

1. **Restaurant & Fine Dining** — Multi-cuisine family dining, live charcoal tandoor, and private dining lounge.
2. **Olive Cafe** — Contemporary casual hangout, artisan cold brews, decadent shakes, thin-crust pizzas, and al dente pastas.
3. **Banquets & Celebrations** — Indoor air-conditioned banquet hall (100 seated / 150 floating), customized multi-course catering, approved decorator panel, in-house DJ sound support, and non-alcoholic celebration environment.
4. **Hotel & Rooms** — 11 air-conditioned boutique rooms (Deluxe King & Executive Twin), en-suite modern bathrooms, 24/7 hot showers, 100% power backup, and elevator access.

---

## 🏛️ Website Architecture (7 Independent Pages)

- **Home (`/`)**: High-impact editorial hero, establishment history since 2010, the four hospitality pathways (asymmetrical layouts), culinary highlights, verified customer reviews, and location preview.
- **Restaurant (`/restaurant`)**: Main dining hall ambience, private dining room (15–30 guests), culinary craftsmanship (clay oven tandoor, Awadhi dum biryani, North Indian curries), family and toddler hospitality (high chairs, mild food curations), and in-page table reservation builder.
- **Menu (`/menu`)**: Digital menu featuring 40+ verified dishes across 13 categories, live search, veg/non-veg filter badges, chef specials filter, spice levels, real dish photography, and allergen transparency notice.
- **Olive Cafe (`/olive-cafe`)**: Distinct visual identity (espresso, sage green, and light cream palette), specialty cold coffees, Nutella/Oreo/KitKat thick shakes, stone-baked pizzas, creamy pastas, grilled club sandwiches, and casual group table reservations.
- **Banquets & Events (`/banquets`)**: Event-focused editorial design, capacity specifications (100 seated / 150 floating), wedding, engagement, and corporate packages, verified venue policies (no outside alcohol, approved decorator panel), and interactive banquet enquiry builder.
- **Hotel & Rooms (`/hotel`)**: 11 AC rooms inventory showcase, Deluxe King and Executive Twin categories, verified amenities (power backup, elevator, Wi-Fi, en-suite showers), check-in (12:00 PM) / check-out (11:00 AM) guidelines, and direct booking tariff enquiry form.
- **Contact (`/contact`)**: Verified address (East Rajendra Nagar, Gorakhnath Road / NH 29, Gorakhpur 273015), direct phone lines, one-click WhatsApp chat launch, interactive Google Maps directions, transit proximity guide, and general enquiry submission form.

---

## 📸 Image Collection & Optimization Inventory

Organized into structured directories under `public/images/`:
- `public/images/home/` (7 WebP assets)
- `public/images/restaurant/` (6 WebP assets)
- `public/images/food/` (11 WebP assets)
- `public/images/cafe/` (7 WebP assets)
- `public/images/banquet/` (5 WebP assets)
- `public/images/hotel/` (5 WebP assets)

Total: **41 curated, high-resolution WebP photographs**, optimized with responsive dimensions, contrast preservation, and lightweight payloads.

Full image metadata, categories, sources, and placement logs are maintained in `src/data/imageInventory.json`.

---

## 📋 Business Verification Register

In strict compliance with project guidelines, no business metrics, capacities, or policies have been arbitrarily fabricated. All details requiring formal corporate confirmation are tracked in `src/data/verificationRegister.js` and accessible live to website visitors via the interactive **Data Audit Register** modal.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
The site runs on `http://localhost:5173` (dev) or `http://localhost:4173` (preview).
