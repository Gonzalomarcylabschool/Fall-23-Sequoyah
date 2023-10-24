/* Sort an array of myNums */
const myNums = [9, 3, 4, 13, 10]
console.log('Numbers:', myNums);

myNums.sort((a,b) => a - b);
console.log('Numbers Ascending:', myNums);

myNums.sort((a,b) => b - a);
console.log('Numbers Descending:', myNums);

/* Sort an array of strings */
const myNames = ['Sara', 'Alex', 'zo', 'jane']
console.log('Names:', myNames);

myNames.sort();

console.log('Names sorted:', myNames);

/* Sort an array of objects by a property */
const people = [
  { name: 'Jay', age: 24 },
  { name: 'Jack', age: 81},
  { name: 'Sara', age: 21},
  { name: 'Zo', age: 34},
]

console.log('Sorted people by age:', people.sort((a,b) => a.age - b.age))

console.log('Sorted people by name:', people.sort((a,b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA === nameB) return 0;
  return nameB > nameB ? 1 : -1;
}));
// OR .localCompare does this by default (nameA.localeCompare(nameB)) but I think that we should sort of show the logic 
