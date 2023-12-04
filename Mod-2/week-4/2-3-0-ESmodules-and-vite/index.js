import{ TEST } from './module.js';
import clickTest from './module.js';

console.log("hello from index.js");
console.log(TEST);
document.querySelector('h1').textContent = 'Coding is the best';

document.addEventListener('click', clickTest);