// // Just like strings!
// const arr = ['a', 'b', 'c', 'd'];

// console.log(arr.length); // 4
// console.log(arr[0]); // a
// console.log(arr[arr.length - 1]); // d

// // logs each letter
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// not like strings
// const endLetters = ['x', 'y', 'z'];
// endLetters[1] = 'foo';

// endLetters.length = 0;

// destructuring variables out of arrays
// const people = ['tom', 'sara', 'jay'];

// nested array access (matrix access)
// const coordinates = [
//   [10, 20],
//   [30, 40],
//   [50, 60]
// ];

// const example = ['zo', 'carmen'];
// example[1] = 'Alexa';
// let [kizenTA, sequoyaTA, sinchiTA] = example;
/*
const kizen2 = example[0];
const sequoya2 = example[1];
const sinchi2 = example[2];
*/
// kizenTA = 'Kellyn';
// console.log(kizenTA);
// console.log(sequoyaTA);

// console.log(sinchiTA);
// console.log(example);
const arr = ['a', 'b', 'c', 'd'];

const arr2 = arr.slice();
const arr3 = [...arr];
console.log(arr);
console.log(arr2);
console.log(arr3);
