/* Making regexs */

/* constructor */
const person = 'Carmen';
const pattern = new RegExp(`\\w`, 'g');
// const greet = new RegExp(`Hi ${person}`, 'g');
// console.log('greet.toString:', greet.toString()); // to see the completed regex
const sentence = `Hey Zo, how are you today?`;

console.log(pattern.test(`Hey Zo, how are you today?`));

/* literal */
const literal = /[^a-z]/g;
const wrong = /`${name}`/;
// console.log('wrong.toString():', wrong.toString());


/* .test() method */
// console.log(/[a-z]/.test('Hello!')); // true
// console.log(/\d/.test('Hello!')); // false


/* Build a better version of this function */
// const isOnlyAphaNumericOld = (str) => {
//   if (!str.length) return false;
//   const alphaNumericOptions = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
//   for (let i = 0; i < str.length; i++) {
//     if (!alphaNumericOptions.includes(str[i])) {
//       return false;
//     }
//   }
//   return true;
// };

const isOnlyAphaNumeric = () => {}
