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

greet('ben', 'happy'); // Hey ben, it is great to see you!
greet('ben', 'grumpy'); // Oh, it's you ben...
greet('ben', 'country'); // Howdy ben!
greet('ben'); // Hi ben.

const getType = (value) => {
  if (Array.isArray(value)) {
    return 'array';
  }
  if (Number.isNaN(value)) {
    return 'NaN';
  }
  if (value === null) {
    return 'null';
  }
  return typeof value;
};

let varOne = 'this';// comes before
console.log(varOne); // this

const printArr = (arr) => {
  console.log(varOne); // this
  varOne = 'some new value';// change e=ffect line 31
  let varFour = varOne // store somewhere else
  varFour = 'I changed'; // this will not effect line 36
  const varThree = 'this is the last one';
  // if (!arr[0]) return [];
  // code
};
printArr();
console.log('is this', varOne); // I changed
const varTwo = 'this is another one';

// console.log(varThree); //
