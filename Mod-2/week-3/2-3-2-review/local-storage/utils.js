export const removeNamefromDOM = (name, removeAll = false) => {
  const elementToRemove = [...document.querySelectorAll('p')];
  const all = elementToRemove.filter((el) => el.textContent === name);
  for (const element of all) {
      element.remove();
      if(removeAll){
        break
      }
  }
}

export const addNewP = (text, where) => {
  let p = document.createElement('p');
  p.textContent = text;
  where.append(p);
}

export const clearMain = (where) => {
  const parent = document.querySelector(where);
  while ( parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
  localStorage.clear();
}
