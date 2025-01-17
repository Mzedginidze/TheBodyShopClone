export const getItemWithExpiration = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }

  let item;
  try {
    item = JSON.parse(itemStr);
  } catch (e) {
    console.error("Invalid JSON format in localStorage for key:", key);
    return null;
  }
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    window.location.reload();
    return null;
  }

  return item.value;
};
