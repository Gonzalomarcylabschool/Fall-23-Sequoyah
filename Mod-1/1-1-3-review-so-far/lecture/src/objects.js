const car = {
  model: 'Camry',
  maker: 'Some Company',
  year: 2021
}
console.log('car:', car);

// car.mileage = 1000;
// car.maker = 'Toyota';
// delete car.year;
// console.log('car mutated:', car);

// const { model, maker, mileage } = car;
// console.log('model, maker, mileage:', model, maker, mileage);

// car['VIN-NUM'] = '12dq917aj9'
// console.log('car:', car);
// const vin = 'VIN-NUM'
// console.log('dynamic:', car[vin]);

// for (const key of Object.keys(car)) {
//   console.log('key, value:', key, car[key]);
// }

// for (const value of Object.values(car)) {
//   console.log('value:', value);
// }

// for (const [key, value] of Object.entries(car)) {
//   console.log('key, value:', key, value);
// }

// const kid = {
//   name: 'Jan',
//   age: 12,
//   isCool: true,
//   hobbies: ['finger painting']
// }

// const perfectKidCopy = {
//   ...kid,
//   hobbies: [...kid.hobbies],
// }
// console.log('perfectKidCopy:', perfectKidCopy);

// const person = {
//   name: 'tom',
//   age: 43,
//   isCool: true,
//   hobbies: ['running', 'walking', 'sitting'],
//   children: [
//     kid,
//   ]
// }

// console.log('person:', person);
// console.log('JSON.stringify(person, null, 2):', JSON.stringify(person, null, 2)); // the null and 2 just make pretty printing
// const copy = JSON.parse(JSON.stringify(person));
// console.log('copy:', copy);