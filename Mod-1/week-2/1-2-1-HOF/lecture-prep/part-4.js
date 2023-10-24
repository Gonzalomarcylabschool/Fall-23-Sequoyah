/** .find */ // finds the value

const myNums = [2, 4, 7, 0];
// const firstOddValue = myNums.find((num) => num % 2);
// console.log('firstOddValue', firstOddValue);
// // 7
const find5 = myNums.find((num) => num === 5);
console.log(find5);

/** Remember, the return value of the callback must return a boolean! */

/** .findIndex  */ // finds the index number
// const firstOddValueIdx = myNums.findIndex((num) => num % 2);
// console.log('firstOddValueIdx', firstOddValueIdx);
// // 2
const findIndexOf5 = myNums.findIndex((num) => num === 5);
console.log(findIndexOf5);