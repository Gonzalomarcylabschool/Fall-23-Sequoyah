// const greet = (person, msg, volumeLevel) => {
//   let result = '';
//   if (volumeLevel === 'loud') {
//     result = `${person} said, "${msg.toUpperCase()}!"`
//   } else if (volumeLevel === 'quiet') {
//     result = `${person} said, "...${msg.toLowerCase()}..."`
//   }
//   // console.log(result)
//   return result;
// }

// greet('Gonzalo', 'sup', 'loud');
// console.log(greet('Maya', 'Hello', 'loud'));

// These are callbacks
const yell = (msg) => `${msg.toUpperCase()}!!`;
const whisper = (msg) => `...${msg.toLowerCase()}...`;

// This is a "Higher-Order" function
const greetBetter = (person, msg, voiceCallback) => {
  const result = `${person} said, "${voiceCallback(msg)}"`
  console.log(result);
}

// greetBetter('Maya', 'Hello', yell); // Maya said, HELLO!!
// greetBetter('Zo', 'Bye', whisper);  // Zo said, ...bye...

// /* we can use "inline arrow functions" */
// greetBetter('Ben', 'Hello World', (msg) => `${msg}?`) // Ben said, Hello World?

// const yelling = (name, msg, callback) => {
//   return `${name} said ${callback(msg)}`
// }

const arr = [1, 2, 3, 4];
const strArr = ['gonzalo', 'max', 'jason', 'mike'];
//if repeated
const func = (el) => {
  el = el * 2;
}
// // arr.forEach(func());

// // if not repeated
// arr.forEach((el) => el = el * 2);
// // arr = [2, 4, 6, 8]
// strArr.forEach((el) => {
//   console.log(`Gonzalo's best friend is: ${el}`);
// })

// reduce: turn many values in to one value

const result = arr.reduce((acc, cur) => {
  return cur + acc
}, 3);

const result2 = arr.reduce((acc, cur) => {
  return cur * acc;
}, 1);
console.log(result);