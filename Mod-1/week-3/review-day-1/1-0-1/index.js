let ageOne = 18; // let declares a variable that can be reassigned
const PI_ONE = 3.14; // const declares a variable that cannot be reassigned variable

ageOne = 19; // Allowed
PI_ONE = 3.14159; // TypeError: cannot reassign const variables

// Strings are text wrapped in 'single quotes', "double quotes",or `backticks`
const phrase = 'Hello World!';
const name = 'gonzalo';
const message = `My name is ${name}. I say ${phrase}`; // backticks allow for "String Interpolation"

// Numbers can be positive, negative, or include a decimal point
const PI = 3.14159;
const age = 18;
const countdown = -3;

// Booleans are either `true` or `false`
const canDrive = true;
const canFly = false;

// Null is a non-value that is explicitly set by the programmer
let toBeDetermined = null;

// Undefined is a non-value that is automatically set for variables that are not assigned a value:
let emptyVariable;

const add = (a, b) => { // arrow function definition
  const sum = a + b;
  return sum;
};

greet(); // this weirdly works
function greet(name) {
  console.log(`Hello ${name}, how are you?`);
}

module.exports = {
  age,
  ageOne,
  PI,
  PI_ONE,
  add,
  greet,
  canFly,
  canDrive,
  countdown,
  emptyVariable,
  toBeDetermined,
  message,
};
