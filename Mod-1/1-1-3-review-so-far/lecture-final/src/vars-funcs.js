// Let vs const
let age = 12;
age = 13;
console.log(age);

const name = 'John';
// name = 'Jane' // Error

// do either affect mutations?
const arr = [1, 2, 3];
arr.push(4);
let arr2 = ['a', 'b', 'c'];
arr2.push('d');

// Primitives: string, number, boolean, null, undefined
// Reference: arrays, objects

// Functions
function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function(a, b) {
  return a + b;
}

const addArrow = (a, b) => {
  return a + b;
}

const addArrowImplicit = (a, b) => a + b;

const defaultArg = (a, b = 1) => a * b;