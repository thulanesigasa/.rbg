/**
 * Utility module for safely sanitizing strings before inserting them into the DOM
 * This helps prevent Cross-Site Scripting (XSS) attacks.
 */

/**
 * Escapes HTML special characters in a given string.
 * @param {string} str - The string to sanitize.
 * @returns {string} The sanitized string.
 */
export const sanitizeHTML = (str) => {
  if (typeof str !== 'string') return str;
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

/**
 * Validates and sanitizes URLs to ensure they use allowed protocols (http/https)
 * @param {string} url - The URL to sanitize.
 * @returns {string} The sanitized URL or a safe fallback.
 */
export const sanitizeUrl = (url) => {
  try {
    const parsedUrl = new URL(url, window.location.origin);
    if (['http:', 'https:'].includes(parsedUrl.protocol)) {
      return parsedUrl.href;
    }
  } catch (e) {
    // Invalid URL format
  }
  return '#invalid-url';
};
