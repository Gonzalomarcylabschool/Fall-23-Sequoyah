//  First function we want to export
const add = (a, b) => {
  return a + b;
};
//  The second Function we want to export
const subtract = (a, b) => {
  return a - b;
};
//  Here is a value we wanty to export
const LAZY_PI = 3.14;
// Using the module.exports object we can assign it an object with the values we wanted exported.
module.exports = {
  add,
  subtract,
  LAZY_PI,
};