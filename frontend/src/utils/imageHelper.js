export const getImageUrl = (name) => {
  // This special syntax tells Vite to find the asset at build time.
  // It correctly resolves the path relative to this file.
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};