/**
 * Generate a URL-friendly slug from a string
 * No hyphens - just remove spaces and special characters
 * @param {string} text - The text to slugify
 * @returns {string} - The slugified text
 */
export const slugify = (text) => {
  if (!text) return '';

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Use hyphens for spaces
    .replace(/[^\w-]+/g, '')     // Remove all non-word chars except hyphens
    .replace(/^-+/, '')          // Remove leading hyphens
    .replace(/-+$/, '')          // Remove trailing hyphens
    .substring(0, 50);           // Limit to 50 chars
};

export default slugify;

