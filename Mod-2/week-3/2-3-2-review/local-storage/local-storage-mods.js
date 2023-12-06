const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

export const getNames = () => getLocalStorageKey('names');
export const setNames = (names) => setLocalStorageKey('names', names);

// export const initializeNames = () => setNames(['ben', 'gonzalo', 'motun']);

export const addName = (name) => {
  const names = getNames();
  setNames([...names, name]);
}

export const removeAllMatchingName = (nameToRemove) => {
  const names = getNames();
  const keep = names.filter((name) => name !== nameToRemove)
  setNames([...keep]);
}

export const removeName = (nameToRemove) => {
  const current = getNames()
  const idx = current.indexOf(nameToRemove);
  const names = current.filter((_, i) => i !== idx);
  if(idx > -1){
    setNames([...names]);
  } else{
    console.log('Not Found')
  }
}

