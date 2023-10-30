const greet = (name, tone) => {
  if (tone === 'happy') {
    console.log(`Hey ${name}, it is great to see you!`);
  } else if (tone === 'grumpy') {
    console.log(`Oh, it's you ${name}...`);
  } else if (tone === 'country') {
    console.log(`Howdy ${name}!`);
  } else {
    console.log(`Hi ${name}.`);
  }
};

greet('ben', 'happy');    // Hey ben, it is great to see you!
greet('ben', 'grumpy');   // Oh, it's you ben...
greet('ben', 'country');  // Howdy ben!
greet('ben');             // Hi ben.

const getType = (value) => {
  if (Array.isArray(value)) {
    return "array";
  } 
  if (Number.isNaN(value)) {
    return "NaN";
  } 
  if (value === null) {
    return "null";
  } 
  return typeof value;
}