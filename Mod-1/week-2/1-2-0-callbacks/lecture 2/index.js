const square = (num1) => num1 ** 2;

/* What's this log? */
console.log('4^2:', square(4));

/* What about this? */
console.log('???:', square);

/** Part 2 */

// const greet = (person, msg, volumeLevel) => {
//   let result = '';
//   if (volumeLevel === 'loud') {
//     result = `${person} said, "${msg.toUpperCase()}!"`
//   } else if (volumeLevel === 'quiet') {
//     result = `${person} said, "...${msg.toLowerCase()}..."`
//   }
//   console.log(result)
//   return result;
// }

// greet('Maya', 'Hello', 'loud')
// greet('Zo', 'Bye', 'quiet')

/* greet('Zo', 'Bye', 'scream') doesn't work */


/** Part 4: Practice  */

// const doubleArrayNumbers = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = arr[i] * 2
//     newArr.push(result)
//   }
//   return newArr;
// }

// const multiplyArrayNumberByIndex = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = arr[i] * i
//     newArr.push(result)
//   }
//   return newArr;
// }

// const doSomethingWithArr = () => {
// }


/** Part 5: Sort */

// const names = ['Sara', 'Alex', 'zo', 'jane']
// const numbers = [9, 3, 4, 13, 10]

// console.log('Names:', names);
// console.log('Numbers:', numbers);

// names.sort();
// numbers.sort();

// console.log('Names sorted:', names);
// console.log('Numbers "sorted":', numbers);

// /* How the callback works */
// numbers.sort((value1, value2) => {
//   if (value1 > value2) return 1  // any positive
//   if (value1 < value2) return -1 // any negative
//   return 0                       // 0 if equal
// });

// /* The actual version you'll use */
// numbers.sort((a,b) => a - b); // ascending
// numbers.sort((a,b) => b - a); // descending

// /* watch out for mutation vs copying, here's how to copy */
// const unsortedNumbers = [8, 2, 3, 12, 11]
// const sorted = [...unsortedNumbers].sort((a,b) => a - b)
// console.log('--------------')
// console.log('Unsorted:', unsortedNumbers);
// console.log('sorted', sorted);

/** Part 6: Sort Practice */

// const myNums = [9, 3, 4, 13, 10]
// console.log('Numbers:', myNums);

// myNums.sort((a,b) => a - b);
// console.log('Numbers Ascending:', myNums);

// myNums.sort((a,b) => b - a);
// console.log('Numbers Descending:', myNums);

// /* Sort an array of strings */
// const myNames = ['Sara', 'Alex', 'zo', 'jane']
// console.log('Names:', myNames);

// myNames.sort();

// console.log('Names sorted:', myNames);

// /* Sort an array of objects by a property */
// const people = [
//   { name: 'Jay', age: 24 },
//   { name: 'Jack', age: 81},
//   { name: 'Sara', age: 21},
//   { name: 'Zo', age: 34},
// ]

// console.log('Sorted people by age:', people.sort((a,b) => a.age - b.age))

// console.log('Sorted people by name:', people.sort((a,b) => {
//   if (a.name === b.name) return 0;
//   return a.name > b.name ? 1 : -1;
// }));
