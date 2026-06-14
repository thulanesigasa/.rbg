import { sanitizeHTML } from './utils/sanitize.js';

/**
 * Main Application Entry Point
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 .rbg Application Initialized');
  
  // Example DOM manipulation demonstrating strict sanitization
  const appContainer = document.getElementById('app-dynamic-content');
  if (appContainer) {
    const unsafeDataFromUser = '<img src=x onerror=alert("XSS")>'; // Simulated XSS attack
    const safeContent = `
      <div class="card">
        <div class="card-header">Welcome to .rbg</div>
        <p>Your secure, sanitized data: <strong>${sanitizeHTML(unsafeDataFromUser)}</strong></p>
      </div>
    `;
    // We are safely injecting sanitized content. 
    // For complete safety, it's recommended to use DOM APIs (createElement, textContent) 
    // rather than innerHTML, even with basic sanitization.
    appContainer.innerHTML = safeContent; 
  }
});
