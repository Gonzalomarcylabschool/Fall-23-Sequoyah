// Just like strings!
// const arr = ['a', 'b', 'c', 'd'];

// console.log(arr.length); // 4
// console.log(arr[0]); // a
// console.log(arr[arr.length - 1]); // d

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// logs each letter

// not like strings
// const endLetters = ['x', 'y', 'z'];
// endLetters[1] = 'foo';
// console.log(endLetters); // ['x', 'foo', 'z']
// endLetters.length = 0;
// console.log(endLetters); // []

// // destructuring variables out of arrays
// const people = ['tom', 'sara', 'jay'];
// const [tom, sara, jay] = people;
// console.log(tom); // tom
// console.log(sara); // sara
// console.log(jay); // jay

// const coordinates = [
//   [10, 20],
//   [30, 40],
//   [50, 60]
// ];

// const firstCoordinate = coordinates[0];
// const firstX = coordinates[0][0];
// const firstY = coordinates[0][1];

// console.log(firstCoordinate); // [10, 20]
// console.log(firstX); // 10
// console.log(firstY); // 20

// // for in is a more concise iteration syntax
// const people = ['carms', 'zo', 'itzel'];

// for (let i = 0; i < people.length; i++) {
//   const person = people[i];
//   console.log(person);
// }

// // same readability, but less code
// for (const person of people) {
//   console.log(person);
// }

// const arr1 = ['a', 'b', 'c', 'd'];
// const arr2 = arr1.slice();
// const arr3 = [...arr1];
// console.log('arr1:', arr1);
// console.log('arr2:', arr2);
// console.log('arr3:', arr3);


// const arr = ['a', 'b', 'c'];
// // add tail
// arr.push('foo');
// console.log('arr:', arr);
// // a, b, c, ro

// // remove and save value
// const foo = arr.pop();
// console.log('arr:', arr);
// // a, b, c

// console.log('foo:', foo);
// foo


// const arr = ['a', 'b', 'c'];

// arr.unshift('bar');
// console.log('arr:', arr);
// // bar, a, b, c

// // remove and save value
// const bar = arr.shift();
// console.log('arr:', arr);
// // a, b, c

// console.log('bar:', bar);


// const arr = ['a', 'b', 'c', 'd', 'e'];
// // at index 2, delete 1 item
// arr.splice(2, 1);
// console.log('arr:', arr);
// // a, b, d, e

// // at index 2, delete 0 items, and insert 'foo'
// arr.splice(2, 0, 'foo');
// console.log('arr:', arr);
// // a, b, foo, d, e

// // at index 2, delete 1 item, and insert 'bar'
// arr.splice(2, 1, 'bar');
// console.log('arr:', arr);
// // a, b, bar, d, e

// when to copy vs mutate
// const toDos = [
//   'go to store',
//   'walk dog',
//   'learn about arrays'
// ];

// // we DO want to mutate
// const addToDo = (toDo, toDoList) => {
//   toDoList.push(toDo);
// }

// // we DON'T want to mutate
// const showLastToDo = (toDoList) => {
//   return toDoList.pop();
// }
// console.log('toDos before:', toDos);
// console.log(showLastToDo(toDos));
// console.log('toDos after:', toDos);

// // this is the pure version of showLastToDo
// const showLastToDoFixed = (toDoList) => {
//   return toDoList[toDoList.length - 1];
// }

// console.log('toDos before:', toDos);
// console.log(showLastToDoFixed(toDos));
// console.log('toDos after:', toDos);
