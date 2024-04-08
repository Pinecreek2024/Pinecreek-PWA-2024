// API Endpoints
export const API_BASE_URL = 'http://api.yoursite.com';
export const USER_API_ENDPOINT = `${API_BASE_URL}/users`;
export const PRODUCT_API_ENDPOINT = `${API_BASE_URL}/products`;
export const ORDER_API_ENDPOINT = `${API_BASE_URL}/orders`;
// Add more API endpoints as needed

// Application Constants
export const APP_NAME = 'Pinecreek Restaurant & Farmstall';
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // Example: 5MB file size limit
// Add other application-wide constants

// UI Constants
export const THEME_COLOR = '#4a90e2'; // Example: Primary theme color
export const FOOTER_TEXT = '© 2024 Pinecreek Restaurant & Farmstall. All rights reserved.';
// Add more UI-related constants

// Validation Patterns
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example: Minimum eight characters, at least one letter and one number
// Add more regex patterns as needed

// Localization and Internationalization
export const DEFAULT_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'de']; // Add supported languages for your app

// Add any other constant types relevant to your application
