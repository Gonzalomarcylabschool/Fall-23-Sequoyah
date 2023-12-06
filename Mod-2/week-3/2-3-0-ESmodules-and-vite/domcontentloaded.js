const myFunc = (e) => {
  console.log('testing if I can be used in the main')
}

const main = () => {
  document.addEventListener('click', myFunc);
  myFunc();
  console.log('DOMcontentLoaded test');
  console.log('hello form documentloaded.js')
  document.querySelector('h1').textContent = 'Coding is the best'
}

main();
document.addEventListener('DOMContentLoaded', main);
