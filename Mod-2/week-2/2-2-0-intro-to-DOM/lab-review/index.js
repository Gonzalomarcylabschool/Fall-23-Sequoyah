// Create varibles so you don't have to keep typing 'document.property...'
const body = document.body;
const ul = document.body.ul;

// creating an element
const h1 = document.createElement('h1')

// adding attributes
h1.id = 'main-heading';

h1.className = 'text';
h1.textContent = 'adding an h1';

// append to the body

// body.append('h1'); // Explanation for work: 'body' is the variable that holds document.body
// body.appendChild('h1');

const hobbies = ['Skateboarding', 'Coding', 'Chess', 'Sim Racing'];

for (let i in hobbies) {
  let li = document.createElement('li');
  li.textContent = hobbies[i];
  li.id = `hobby${i}`;
  // ul.append('li')
  document.querySelector('#list').append(li);
}

console.log(body.ul);
