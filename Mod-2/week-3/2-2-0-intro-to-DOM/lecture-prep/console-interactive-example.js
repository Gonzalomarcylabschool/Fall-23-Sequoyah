// paste this into the chrome console to see that you can interact with things with the arrows to pop open objects
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'mango', color: 'orange' },
];

// show them that you can expand the object in the console
console.log('click to expand!', fruits);

// can still do the nice tricks the regular node console does
console.table(fruits);