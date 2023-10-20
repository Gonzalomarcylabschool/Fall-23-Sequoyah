let thisOrThat = false || true; // true
thisOrThat = true || false; // true
thisOrThat = false || false; // false

let thisAndThat = false && true; // false
thisAndThat = true && false; // false
thisAndThat = true && true; // true

let notThis = !true; // false
notThis = !false; // true

// Double bang operator to truthy/falsy into boolean
let thisIsTrue = !!'hi'; // true
thisIsTrue = !!0; // false

const ternaryToCheckTruthyFalsy = (condition) => {
  return condition ? 'Tis true' : 'Absolutely false';
}

const animalSounds = (animal) => {
  if (animal === 'cat') {
    console.log('Meow');
  } else if (animal === 'dog' || animal === 'puppy') {
    console.log('Woof');
  } else if (!animal) {
    console.log('No pet');
  } else {
    console.log('*shuffling noises*')
  }
}

const animalSoundsLiftScope = (animal) => {
  if (animal === 'cat') {
    const msg = 'Meow';
  } else if (animal === 'dog' || animal === 'puppy') {
    const msg = 'Woof';
  } else if (!animal) {
    const msg = 'No pet';
  } else {
    const msg = '*shuffling noises*';
  }
  console.log(msg)
}

const noGuardExample = (animal) => {
  if (animal) {
    console.log(`I love my ${animal}!`);
  } else {
    console.log('No pet');
  }
}

const shortCircuit = (registerName) => {
  const greetingName = registerName || 'User'
  console.log(`Hello ${greetingName}`);
}