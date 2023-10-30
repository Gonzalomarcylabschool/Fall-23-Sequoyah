let age = 18; // let declares a reassignable variable
const PI = 3.14; // const declares a non-reassignable variable

age = 19; // Allowed
PI = 3.14159; // TypeError: cannot reassign const variables


// Strings are text wrapped in 'single quotes', "double quotes",or `backticks`
const phrase = "Hello World!";
const name = 'ben';
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
}
const sum1 = add(5,3); // function invocation
const sum2 = add(1,2);

greet(); // this weirdly works
function greet(name) {
  console.log(`Hello ${name}, how are you?`);
}