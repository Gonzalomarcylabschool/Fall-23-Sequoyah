// basic primitive vs reference
let NY1 = '40N,74W';
let home1 = NY1;
NY1 = '40.71N,73W';
console.log(NY1); // 40.71N,73W
console.log(home1); // 40N,74W
// They don't match because primitives pass values not references

let NY2 = [40, 74];
let home2 = NY2;
NY2[0] = 40.71;
console.log(NY2); // [40.71, 74]
console.log(home2); // [40.71, 74]
// They match because arrays pass references not values


// Here's a more complex example that's vaguely realistic
const redBullTimes = ['1:32', '1:43', '1:33'];
const ferrariTimes = ['2:22', '2:53', '2:43'];
const mercedesTimes = ['1:00', '1:01', '1:13'];

const allTimes = [redBullTimes, ferrariTimes, mercedesTimes];
console.log(ferrariTimes[0] === allTimes[1][0]);

// even though we didn't touch allTimes, it's still updated
ferrariTimes[0] = '1:35';
console.log(ferrariTimes[0] === allTimes[1][0]);
// the arrays are linked through references

// this is why when we want to truly empty an array, we can't reassign
let mclarenTimes = ['3:11', '3:12', '3:13'];
allTimes.push(mclarenTimes);

console.log(mclarenTimes); // ['3:11', '3:12', '3:13']
console.log(allTimes[3]); // ['3:11', '3:12', '3:13']

// reassignment brakes the reference connection
mclarenTimes = [];
console.log(mclarenTimes); // []
console.log(allTimes[3]); // ['3:11', '3:12', '3:13']

// mutation does not
ferrariTimes.length = 0;
console.log(ferrariTimes); // []
console.log(allTimes[1]); // []