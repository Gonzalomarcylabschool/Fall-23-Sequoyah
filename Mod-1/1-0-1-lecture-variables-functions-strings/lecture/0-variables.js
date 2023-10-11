// const === constant, let === can change
const myName = 'John';
// myName = 'Johnny'; // ERROR

let myAge;
// console.log(status);
// console.log(myAge);
myAge = 102; // OK
// console.log(myAge);
// No vars
var status = 'happy';
// console.log(status);
// Accidentally global, also don't do
globalStatus = 'sad';
console.log(add(1, 2));

function add (x, y) {
  return x + y;
}

const name = 'gonzalo';

console.log(name.includes('!'));
console.log(name.indexOf('a'));
