# Sharda Dinings, Gorakhpur — Full-Stack MERN Website

A complete hospitality website and MERN backend for **Sharda Dinings, Gorakhpur**, uniting four experiences under one platform:

1. **Restaurant & Fine Dining** — Multi-cuisine family dining, live charcoal tandoor, private dining, and table reservations.
2. **Olive Cafe** — Cold brews, thick shakes, stone-baked pizzas, pastas, and cafe seating.
3. **Banquets & Celebrations** — Indoor AC banquet hall (100 seated / 150 floating) and event proposal enquiries.
4. **Hotel & Rooms** — 11 AC boutique rooms with direct tariff and room availability enquiries.

---

## Prerequisites

- **Node.js** v18+ (tested on v22)
- **npm**
- **MongoDB** (optional — only needed when switching from local `mock` mode to `mongo` mode)

---

## Local Setup & Running (Mock Mode Default)

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Copy environment template if you want to customize ports/URLs
cp .env.example .env

# 3. Start the backend API (runs in mock mode by default on http://localhost:5000/api/v1)
npm run dev:server

# 4. In a second terminal, start the Vite frontend (http://localhost:3000)
npm run dev
```

Production scripts:
- `npm run build` — builds the Vite frontend into `dist/`
- `npm run start:server` — starts the Express API server

### Known Limitations of Mock Mode (`DATA_DRIVER=mock`)
- All writes (`POST /reservations`, `POST /enquiries/*`, admin updates) are stored **in memory only** and reset whenever the server restarts.
- External notifications (WhatsApp Cloud API, SMTP email, SMS) and payments are **not connected**; notification adapters return a safe placeholder response without sending external messages.
- If the backend server is not running, the frontend menu falls back to `src/data/menuData.js` and forms fall back to direct WhatsApp handoff.

---

## Switching to MongoDB Later

1. Set `DATA_DRIVER=mongo` and provide `MONGODB_URI` in `.env`.
2. Restart the server (`npm run dev:server` or `npm run start:server`).
3. If `DATA_DRIVER=mongo` is set without `MONGODB_URI`, the server fails fast at startup with a clear configuration message.

---

## Environment Variables to Configure Later

See [.env.example](file:///c:/Users/Lenovo/OneDrive/Documents/Company%20Projects/EmployeeProject/sharda-dinings/.env.example):

| Variable | Purpose |
| :--- | :--- |
| `DATA_DRIVER` | `mock` (default) or `mongo` |
| `MONGODB_URI` | MongoDB connection string (required when `DATA_DRIVER=mongo`) |
| `PORT` | Backend API port (default `5000`) |
| `FRONTEND_URL` | Comma-separated allowed frontend origins for CORS (e.g. `https://shardadinings.com`) |
| `VITE_API_BASE_URL` | Frontend API base URL (default `http://localhost:5000/api/v1`) |
| `JWT_SECRET` | Strong random secret (16+ chars) for signing admin JWTs |
| `JWT_EXPIRES_IN` | Token expiration (default `8h`) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD_HASH` | Admin email and bcrypt password hash (for mock-mode or initial admin setup; never store plaintext passwords) |
| `WHATSAPP_API_URL`, `WHATSAPP_API_TOKEN` | Optional future WhatsApp Cloud API integration |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Optional future email notifications |
| `SMS_PROVIDER_KEY` | Optional future SMS notifications |
| `PAYMENT_GATEWAY_KEY`, `PAYMENT_WEBHOOK_SECRET` | Optional future payment adapter |

---

## API Route Summary (`/api/v1`)

| Method | Endpoint | Auth | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Public | Service health, active `dataDriver`, and DB status |
| `GET` | `/api/v1/menu/categories` | Public | List all menu categories |
| `GET` | `/api/v1/menu/items` | Public | Filter/search/paginate menu items (`category`, `dietary`, `search`, `page`, `limit`) |
| `GET` | `/api/v1/menu/items/:id` | Public | Fetch single menu item by ID |
| `POST` | `/api/v1/reservations` | Public (rate-limited) | Submit restaurant or Olive Cafe table reservation |
| `POST` | `/api/v1/enquiries/banquets` | Public (rate-limited) | Submit banquet/event proposal enquiry |
| `POST` | `/api/v1/enquiries/hotel` | Public (rate-limited) | Submit hotel room availability/tariff enquiry |
| `POST` | `/api/v1/enquiries/contact` | Public (rate-limited) | Submit general management contact enquiry |
| `POST` | `/api/v1/admin/login` | Public (rate-limited) | Authenticate admin and receive signed JWT |
| `GET` | `/api/v1/admin/me` | Admin JWT | Verify current admin session |
| `GET` | `/api/v1/admin/reservations` | Admin JWT | List reservations (supports `status`, `page`, `limit`) |
| `PATCH` | `/api/v1/admin/reservations/:id` | Admin JWT | Update reservation status (`pending`, `confirmed`, `completed`, `cancelled`) |
| `GET` | `/api/v1/admin/enquiries` | Admin JWT | List enquiries (supports `type`, `status`, `page`, `limit`) |
| `PATCH` | `/api/v1/admin/enquiries/:id` | Admin JWT | Update enquiry status (`pending`, `contacted`, `confirmed`, `closed`) |
| `POST` | `/api/v1/admin/menu/items` | Admin JWT | Create menu item |
| `PATCH` | `/api/v1/admin/menu/items/:id` | Admin JWT | Update menu item |
| `DELETE` | `/api/v1/admin/menu/items/:id` | Admin JWT | Delete menu item |

### Example Request & Response (`POST /api/v1/reservations`)
```json
// Request
{
  "enquiryType": "restaurant",
  "name": "Rajesh Sharma",
  "phone": "+91 98765 43210",
  "date": "2026-12-10",
  "time": "19:30",
  "guests": "4 Guests",
  "seating": "Main Dining Hall"
}

// Response (201 Created)
{
  "ok": true,
  "message": "Table reservation request received.",
  "data": {
    "reservation": {
      "id": "res-...",
      "referenceCode": "SD-TBL-482910",
      "status": "pending"
    },
    "persistenceMode": "mock",
    "temporaryInMockMode": true,
    "notification": {
      "channel": "whatsapp",
      "dispatched": false,
      "mode": "placeholder-unconnected"
    }
  }
}
```
