/**
 * 
 * Question 3: shoutEveryLetterForLoop
Using a `for` loop, write a function `shoutEveryLetterForLoop()` that takes a string `str`. 
It should log each letter capitalized and with a '!' added. Do not use a higher-order method.

H!
E!
Y!

H E Y
0 1 2
 */

const userName = 'Allan';

const shoutEveryLetterForLoop = (str) => {
  for (let i = 0; i < str.length; i++) { // i = 1 + i / i += 1
    // console.log(`${str[i].toUpperCase()}!`);
    // const result = str[i].toUpperCase() + '!' // string interpolation.
    const result = `${str[i].toUpperCase()}!`
    console.log(result);
  }
}

shoutEveryLetterForLoop(userName);

// console.log(userName[0]);

/**
 * Question 10: carMaker
Write a function `carMaker()` that takes 4 arguments: a string `name`, a string `maker`, a number `year`, and an object `owner`. 
The function should return an object with 5 properties: 
`name`, `year`, `maker`, `needsOilChange`, and `owners`. `name`, `year`, and `maker` 
should match exactly the arguments given. `needsOilChange` should be `false`. 
And lastly, `owners` should be an array with only one object in it: the *actual* owner that was passed in, not a copy.
 */

// const carMaker = (name, maker, year, owner) => { 
//   return {
//     name,
//     maker,
//     year,
//     owners: [owner],
//     needsOilChange: false,
//   }
// }
const carMaker = (model, maker, year, owner) => {
  const needsOilChange = false;
  const owners = [owner];
  return { model, maker, year, needsOilChange, owners };
};


/**
 * Write a function `obliterate` that takes in an object and removes all of its properties. 
 * It should add `wasObliterated` as `true` to the object. It should return nothing.
 */

const obliterate = (obj) => {
  if (Object.keys(obj)) return;
  for (const key in obj) {
    delete obj[key];
  }
  obj.wasObliterated = true;
}
