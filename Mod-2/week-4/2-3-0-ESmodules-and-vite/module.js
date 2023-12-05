//named export
export const TEST = 'hello from module.js';

export const add = (a, b) => {
  return a + b;
}
export const PI = 3.14;
//default export
const clickTest = (e) => {
  console.log('click test successful');
}

export default clickTest;

//old way

// module.exports = {
//   add,
//   clickTest,
// }