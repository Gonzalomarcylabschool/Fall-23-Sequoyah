// standard
// for (let i = 0; i < 5; i++) {
//   console.log(`i: `, i);
// }

// Change the start
// for (let i = 3; i < 5; i++) {
//   console.log(`i: `, i);
// }

//Change the end
// for (let i = 0; i < 11; i++) {
//   console.log(`i: `, i);
// }

//Change increment 
// for (let i = 0; i < 5; i += 3) {
//   console.log(`i: `, i);
// }

// Go down not up

// for (let i = 10; i >= 0; i--) {
//     console.log(`i: `, i);
//   }

//string and loops
// const string = 'hello world';
// for (let i = 0; i < string.length; i++){
//   console.log(string[i], i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue; // we want to skip this condition. 
//   console.log(`i: `, i);
// }

// for (let i = 1; i < 11; i++) {
//   if (!(i === 4) && !(i === 7)) {
//     console.log("Sure glad this isn't 4 or 7");
//     console.log(i);
//   }
// }

// for (let i = 1; i < 11; i++) {
//   if ((i === 4) || (i === 7)) continue;// this is what we want to skip.
//   console.log("Sure glad this isn't 4 or 7");
//   console.log(i);
// }

// let newNum = 1;
// newNum = 10;
// for (let i = 0; i < 11; i++) {
//   if (i > newNum) break;// leave the loop 
//   console.log(i);
// }

// const testBreak = () => {
//   for (let i = 0; i < 11; i++) {
//     if (i > 5) break;// we want to leave.
//     console.log(i);
//   }
//   console.log('I log!:');// still see this. 
// };

// const testReturn = () => {
//   for (let i = 0; i < 11; i++) {
//     if (i > 5) return; // leave the function not only the loop.
//     console.log(i);
//   }
//   console.log('I do not log:'); // this will not log
// };

// testReturn();

// testBreak();
// for vs while
// for (let i = 0; i < 11; i++) { // initialize, condition , increment
//   console.log(`i: `, i);
// }

let i = 0; // initialize 
while (i < 5) {// condition lives here
  // if(i > newNum) break;
 
  console.log(`i: `, i);// +1 vs 0
  i++; //increment  1
}