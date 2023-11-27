const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log('first', arr[0]);
console.log('first', arr[arr.length - 1]);

console.log('arr[2] before:', arr[2]);
arr[2] = 'Z'
console.log('arr[2] after:', arr[2]);

const [a, b, z, d, e, f] = arr;
console.log('a, b, z, d, e, f:', a, b, z, d, e, f);

const arrCopy = arr.slice()
console.log('arrCopy:', arrCopy);
const middle = arr.slice(1,4)
console.log('middle:', middle);
const lastTwo = arr.slice(-2);

const oldLast = arr.pop();
console.log('oldLast:', oldLast);
const newLast = arr.push('Last');
console.log('arr mutated:', arr);

const oldFirst = arr.shift()
console.log('oldFirst:', oldFirst);
const newFirst = arr.unshift('First');
console.log('arr mutated again:', arr);

const addToSecondSlotOfArr = (mutableArr, value) => {
  mutableArr.splice(1, 0, value);
}

addToSecondSlotOfArr(arr, '2nd');
console.log('arr mutated after impure func:', arr);

for (let i = 0; i < arr.length; i++) {
  console.log('i, value:', i, arr[i]);
}

for (let value of arr) {
  console.log('value:', value);
}