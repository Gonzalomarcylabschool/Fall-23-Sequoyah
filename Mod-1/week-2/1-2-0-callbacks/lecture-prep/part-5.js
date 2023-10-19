const names = ['Sara', 'Alex', 'zo', 'jane']
const numbers = [9, 3, 4, 13, 10]

console.log('Names:', names);
console.log('Numbers:', numbers);

names.sort();
numbers.sort();

console.log('Names sorted:', names);
console.log('Numbers "sorted":', numbers);

/* How the callback works */
numbers.sort((value1, value2) => {
  if (value1 > value2) return 1  // any positive
  if (value1 < value2) return -1 // any negative
  return 0                       // 0 if equal
});

/* The actual version you'll use */
numbers.sort((a,b) => a - b); // ascending
numbers.sort((a,b) => b - a); // descending

/* watch out for mutation vs copying, here's how to copy */
const unsortedNumbers = [8, 2, 3, 12, 11]
const sorted = [...unsortedNumbers].sort((a,b) => a - b)
console.log('--------------')
console.log('Unsorted:', unsortedNumbers);
console.log('sorted', sorted);
