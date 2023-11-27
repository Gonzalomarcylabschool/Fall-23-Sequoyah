// destructure as "named" imports
const { add, subtract, SIMPLE_PI } = require('./math-utilities');

// or import the entire object as a "default" import
const mathUtils = require('./math-utilities');

console.log(add(4, 99)); // 8
console.log(subtract(22, 3)); // 2
console.log(SIMPLE_PI); // 3.14
console.log(mathUtils.add(5, 18)); // 8
