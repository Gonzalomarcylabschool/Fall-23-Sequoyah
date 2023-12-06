export const removeNamefromDOM = (name) => {
  const elementToRemove = document.querySelectorAll('p');
  
  for (const element of elementToRemove) {
    if (element.textContent === name) {
      element.remove();
      break; 
    }
  }
}

export const addNewP = (text, where) => {
  let p = document.createElement('p');
  p.textContent = text;
  where.append(p);
}