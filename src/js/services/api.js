/**
 * API Service wrapper that handles Base URL configuration and secure
 * injection of authorization tokens into headers.
 */

const BASE_URL = 'https://api.rbg.com/v1'; // Example production URL

/**
 * Retrieves the stored auth token securely.
 * Note: In production, consider HTTP-only cookies, but for this boilerplate
 * we assume a token stored in memory or secure storage mechanisms.
 * @returns {string|null} The auth token.
 */
const getAuthToken = () => {
  return localStorage.getItem('rbg_auth_token');
};

/**
 * Core API request wrapper.
 * @param {string} endpoint - The API endpoint path.
 * @param {Object} options - Fetch options.
 * @returns {Promise<any>} The JSON response.
 */
const apiClient = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = new Headers(options.headers || {});
  
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'API request failed');
    }
    return await response.json();
  } catch (error) {
    console.error(`[API Error] ${endpoint}:`, error);
    throw error;
  }
};

export const api = {
  get: (endpoint) => apiClient(endpoint, { method: 'GET' }),
  post: (endpoint, body) => apiClient(endpoint, { method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body) => apiClient(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (endpoint) => apiClient(endpoint, { method: 'DELETE' }),
};
