const happyBirthday = (age) => {
  if (age === 25) {
    console.log('Happy birthday, you can rent a car!');
  } else if (age < 25) {
    console.log('No rental cars on your b-day yet.');
  } else if (age < 90) {
    console.log('Enjoy car rentals on your b-day!');
  } else {
    console.log('You should probably not be driving.');
  }
};

happyBirthday(25);
happyBirthday(20);
happyBirthday(30);
happyBirthday(90);

// Fill in the logical operators
const election = (age, isElectionDay, isUndecided) => {
  // if (age < 18 || isElectionDay === false ) {
    if(!isElectionDay){
    console.log("Can't vote today!")
  } else if () {
    console.log("Here's some voter info young one")
  } else if () {
    console.log('Ok Boomer, you seem sure, but please think of future generations')
  } else {
    console.log('Thank you for your vote.')
  }
}

// refactor with guard clause
// const doAdminThings = (role) => {
//   if (role === 'admin') {
//     console.log('You can do admin things')
//     console.log('You can do more admin things')
//     console.log('You can do even more admin things')
//   } else {
//     console.log('Nothing to do')
//   }
// }

// If time, do advanced refactor with guard clause
// const getMedicalCost = (hasInsurance, surgeryLevel) => {
//   if (hasInsurance) {
//     if (surgeryLevel === 'major') {
//       return 5000
//     } else if (surgeryLevel === 'minor') {
//       return 3000
//     } else {
//       return 1000
//     }
//   } else {
//     return 100000
//   }
// }

// Refactor with ternary
// const getCoolness = (likesPets) => {
//   if (likesPets) {
//     return 'cool';
//   } else {
//     return 'not cool';
//   }
// }

// fix with scope
// const getBioBroken = (age, first, last) => {
//   if (age < 18) {
//     const dynamicBio = `${first} ${last} is only ${age} years old. Still a child!`
//     console.log(dynamicBio);
//   } else if (age < 50) {
//     const dynamicBio = `${first} ${last} is ${age} years old. Still young at heart!`
//     console.log(dynamicBio);
//   } else {
//     const dynamicBio = `Wow, ${first} ${last} is already ${age} years old. Getting up there!`
//     console.log(dynamicBio);
//   }
//   // const finalBio = `Here's their bio: ${dynamicBio}. Click the profile for more info.`
//   // return finalBio
// }

// // Use typeof to tell what type a variable is
// console.log(typeof 'hi'); // string
// console.log(typeof 4); // number
// console.log(typeof true); // boolean
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof {ok: true}); // object
// console.log(typeof [1,2,3]); // object
// console.log(typeof NaN); // number
// console.log(typeof (() => {})); // function
