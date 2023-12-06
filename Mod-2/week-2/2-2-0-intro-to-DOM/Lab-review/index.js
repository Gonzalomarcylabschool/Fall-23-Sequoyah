const body = document.body;
// const ul = document.querySelector('#list');
//creating an element
const h1 = document.createElement('h1');

//adding attributes

h1.id = 'main-heading';

h1.className = 'text';
h1.textContent = 'adding an h1';

h1.setAttribute('aria-labelledby', 'label');

//append to the body
// body.append(h1);

// body.appendChild(h1)

document.body.append(h1)

const hobbies = ['Skateboarding', 'Coding', 'Chess', 'Sim Racing'];

hobbies.forEach((el, i) => {
  let li = document.createElement('li');
  li.textContent = el;
  li.id = `hobby${i}`;
  document.querySelector('#list').append(li);
}) 

console.log(body.ul);