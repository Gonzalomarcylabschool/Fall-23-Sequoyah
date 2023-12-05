export const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}