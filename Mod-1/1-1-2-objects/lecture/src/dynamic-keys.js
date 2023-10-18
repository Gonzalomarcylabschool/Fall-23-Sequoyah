const prompt = require('prompt-sync')({ sigint: true });

const dynamicKey = 'price';
const car = {
  name: 'Corolla',
  maker: 'Toyota',
  // [dynamicKey]: 27000, // dynamic key in literal view (a bit rarer)
};
car[dynamicKey] = 27000;

console.log(car.price); // 27000

// example where dynamic keys are useful
const nameCarProperty = (carObj) => {
  const property = prompt('Name the property!');
  console.log(carObj[property]);
};

nameCarProperty(car);
