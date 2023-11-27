// to import one:
// const name = require('./path');
const print = require('./utility-function');
// to import many:
// const { destructure } = require('./path');
const { THIS_VARIABLE, regex } = require('./other-utilities');

const str = 'check this string out';

print('this is a test');
console.log(THIS_VARIABLE);
console.log(regex('other', str));
