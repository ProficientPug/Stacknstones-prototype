// The function now accepts a 'folder' and a 'name'
export const getImageUrl = (folder, name) => {
  // We use the 'folder' variable to build the dynamic path
  return new URL(`../assets/${folder}/${name}`, import.meta.url).href;
};