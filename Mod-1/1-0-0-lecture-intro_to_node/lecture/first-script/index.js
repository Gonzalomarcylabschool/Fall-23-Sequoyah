const { add, subtract, LAZY_PI } = require('./named-export');
const bigDeal = require('./default-export');

console.log('Hello World');

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log('Lazy Pi Constant:', LAZY_PI);

bigDeal();