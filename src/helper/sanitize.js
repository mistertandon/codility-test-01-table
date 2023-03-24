export const sanitizeInput = input => {
  // Remove any HTML tags and escape special characters
  return input
    .replace(/<[^>]+>/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};
