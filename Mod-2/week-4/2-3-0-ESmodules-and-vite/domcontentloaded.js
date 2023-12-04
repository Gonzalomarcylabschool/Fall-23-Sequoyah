const myFunc = (e)=> {
  console.log('testing if I can be used in the main')
}


document.addEventListener('click', myFunc);

// const main = () => {
  
//   myFunc();
//   console.log('DOMcontentLoaded test');
//   console.log('hello form domcontentloaded.js');
//   document.querySelector('h1').textContent = 'Coding is the best';
// }

// main();
document.addEventListener('DOMContentLoaded', main);

