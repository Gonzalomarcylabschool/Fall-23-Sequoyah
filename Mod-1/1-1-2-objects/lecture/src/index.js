// Create object use literal notation
const car = {
  name: 'Camry',
  maker: 'Toyota',
};

car.color = 'blue'; // dot notation
car['model-year'] = 2018; // bracket notation
console.log(car.color); // blue
console.log(car['model-year']); // 2018

car.color = 'red';
console.log(car.color); // red

delete car.color;
delete car['model-year'];
console.log(car.color); // undefined
console.log(car['model-year']); // undefined

// destructuring
const greetPerson = (person) => {
  const { name, age } = person;
  console.log(`Hello, ${name}! You are ${age} years old.`);
};

// destructure arg directly
const greetPersonShort = ({ name, age }) => {
  console.log(`Hello, ${name}! You are ${age} years old.`);
};

// object shorthand
const makeCar = (name, maker, color) => {
  const isNew = true;
  return {
    name: name,
    maker: maker,
    color: color,
    isNew: isNew,
  };
};

const makeCarShort = (name, maker, color) => {
  const isNew = true;
  return { name, maker, color, isNew };
};

// when implicit returning object, wrap in parens
const wrapPropsInObj = (name, age, bio) => ({ name, age, bio });
