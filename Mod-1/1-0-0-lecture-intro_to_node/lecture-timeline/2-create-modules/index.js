const { add, subtract, LAZY_PI } = require('./named-exports');
const bigDeal = require('./default-export');

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(LAZY_PI);

console.log(bigDeal);
