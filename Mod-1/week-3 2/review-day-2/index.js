// console.log(Math.pow(2, 3))

// const string = "hello";
// for (let i = 0; i < string.length; i += -2) {
//  
//  console.log(string[i], i); // your code
// }
// h 0
// e 1
// l 2
// l 3
// o 4

const family = ['Wendy', 'Jon', 'Daniel'];
const scores = [95, 87, 79, 88];
const marcyStaff = [
  { name: 'ben', isInstructor: true },
  { name: 'gonzalo', isInstructor: true },
  { name: 'travis', isInstructor: false },
];
const matrix = [[1, 2], [3, 4], [5, 6]] 
// console.log(family[1]);
// console.log(matrix[2][1])
console.log('last index',family.length-1)
family[0] = 'gonzalo';
// console.log(family) 

// const arrayCopy = [...family];
// console.log(family)
// console.log(arrayCopy)
// arrayCopy[0] = 'Mike';
// console.log(family)
// console.log(arrayCopy)

const add = (a, b) => a + b;


// This object has two properties with the keys "name" and "maker"
const car = {
  name: "Camry",
  maker: "Toyota",
};
const dynamicKey = '';

car['122'] = 23000;

const keys = Object.keys(car);
const values = Object.values(car);
console.log(keys)
console.log(values)