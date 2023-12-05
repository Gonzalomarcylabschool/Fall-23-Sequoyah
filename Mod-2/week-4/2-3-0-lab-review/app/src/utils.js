export const listFunc = (input, parent) => {
  const li = document.createElement('li');
  li.textContent = input;
  parent.append(li);
}

