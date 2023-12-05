import{ TEST, add as addingFunc, PI as pie} from './module.js';
import clickTest from './module.js';

console.log("hello from index.js");
console.log(TEST);
console.log(addingFunc(1, 2));
console.log(pie)
document.querySelector('h1').textContent = 'Coding is the best';

document.addEventListener('click', clickTest);