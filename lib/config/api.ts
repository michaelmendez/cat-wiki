/**
 * API Configuration
 * Centralized configuration for all API endpoints and settings
 */

// Validate required environment variables at build time
const requiredEnvVars = {
  CAT_API_KEY: process.env.NEXT_PUBLIC_CAT_API_KEY,
  CAT_API_URL: process.env.CAT_API_URL,
} as const;

// Check for missing environment variables
const missingVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missingVars.join(', ')}`
  );
}

/**
 * API Configuration object
 * Contains all external API endpoints and settings
 */
export const API_CONFIG = {
  CAT_API: {
    BASE_URL: requiredEnvVars.CAT_API_URL as string,
    API_KEY: requiredEnvVars.CAT_API_KEY as string,
    ENDPOINTS: {
      BREEDS: '/breeds',
      IMAGES_SEARCH: '/images/search',
    },
  },
  INTERNAL_API: {
    BREEDS: '/api/breeds',
  },
} as const;

/**
 * Helper function to build external API URLs
 */
export const buildApiUrl = (endpoint: string, params?: Record<string, string>): string => {
  const url = `${API_CONFIG.CAT_API.BASE_URL}${endpoint}`;

  if (!params) return url;

  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
};

/**
 * Helper function to build internal API URLs
 */
export const buildInternalApiUrl = (endpoint: string): string => {
  return endpoint.startsWith('/api') ? endpoint : `/api${endpoint}`;
};
