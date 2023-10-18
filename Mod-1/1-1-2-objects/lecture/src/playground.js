// const remote = [['color', 'black'], ['buttons', true]];
const makeCar = (name, maker, color) => {
  const isNew = true;
  return {
    name,
    maker,
    color,
    isNew,
  };
};
const car = makeCar('Focus', 'Ford', 'Blue');
const car2 = makeCar('camry', 'toyota', 'Blue');
const car3 = makeCar('Focus2', 'Ford2', 'Blue');
console.log(car);
console.log(car2);
console.log(car3);
// const makeCarShort = (name, maker, color) => {
//   const isNew = true;
//   return { name, maker, color, isNew };
// };

// console.log(makeCar('focus', 'Ford', 'blue'));
// console.log(makeCarShort('focus', 'Ford', 'blue'));

// const sportsTeam = {
//   name: 'The Wolf Puck',
//   sport: 'hockey',
//   wins: 12,
//   location: {
//     city: 'Hartford',
//     state: 'CT',
//   },
//   players: [
//     { name: 'Bob', age: 25 },
//     { name: 'Joe', age: 23 },
//     { name: 'Zo', age: 26 },
//   ],
// };

// const hartfordName = sportsTeam.location.city;
// const bobName = sportsTeam.players[0].name;
// const joeAge = sportsTeam.players[1].age;

// // destructuring nested objects
// const {
//   location: { city },
//   players: [bob, joe],
// } = sportsTeam;

// console.log(sportsTeam);

// const car = {
//   name: 'Camry',
//   maker: 'Toyota',
// };
// console.log(car);

// const person1 = {
//   name: 'gonzalo',
//   age: 35,
//   hobby: 'skateboarding',
// };

// const greetPerson = (person) => {
//   const { age, name } = person;
//   console.log(`Hello, ${name}! You are ${age} years old.`);
// };

// console.log(greetPerson(person1));
