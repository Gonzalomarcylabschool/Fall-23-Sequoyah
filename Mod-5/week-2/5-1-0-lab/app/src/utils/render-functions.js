import Library from "../models/Library.js";
import Book from "../models/Book.js";

export const renderMain = () => {
  document.querySelector('#app').innerHTML = `
  <h1> Brooklyn Libraries </h1>
  `
  const libraries = document.createElement('div');
  libraries.id = 'libraries';
  document.querySelector('#app').append(libraries);
};

export const renderLibraries = () => {
  const libraries = Library.list();
  console.log(libraries);
  const ul = document.createElement('ul');

  libraries.forEach((library) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <li> ${library.name}</li>
    `
    ul.append(li);
  })
  document.querySelector('#libraries').append(ul);
}