
// not like strings
const endLetters = ['x', 'y', 'z'];
endLetters[1] = 'foo';
console.log(endLetters); // ['x', 'foo', 'z']
endLetters.length = 0;
console.log(endLetters); // []

const people = ['tom', 'sara', 'jay'];
const [tom, sara, jay] = people;
console.log(tom); // tom
console.log(sara); // sara
console.log(jay); // jay
