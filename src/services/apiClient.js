const DEFAULT_API_BASE = 'http://localhost:5000/api/v1';

export function getApiBaseUrl() {
  const configured = import.meta.env.VITE_API_BASE_URL;
  if (typeof configured === 'string' && configured.trim()) {
    return configured.trim().replace(/\/+$/, '');
  }
  return DEFAULT_API_BASE;
}

async function requestJson(path, options = {}) {
  const url = `${getApiBaseUrl()}${path}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok || !payload?.ok) {
    const message = payload?.error?.message || `Request failed (${response.status})`;
    const error = new Error(message);
    error.status = response.status;
    error.code = payload?.error?.code || 'API_ERROR';
    throw error;
  }

  return payload.data;
}

export const apiClient = {
  getMenuCategories() {
    return requestJson('/menu/categories');
  },

  getMenuItems(params = {}) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') searchParams.set(k, String(v));
    });
    const qs = searchParams.toString();
    return requestJson(`/menu/items${qs ? `?${qs}` : ''}`);
  },

  submitReservation(payload) {
    return requestJson('/reservations', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  submitBanquetEnquiry(payload) {
    return requestJson('/enquiries/banquets', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  submitHotelEnquiry(payload) {
    return requestJson('/enquiries/hotel', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  submitContactEnquiry(payload) {
    return requestJson('/enquiries/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
