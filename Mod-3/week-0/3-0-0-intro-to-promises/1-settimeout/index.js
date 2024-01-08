console.log('starting!');
setTimeout(() => { // wait 3 seconds then...
  console.log(1)
}, 3000)

setTimeout(() => { // wait 1 seconds then...
  console.log(2)
}, 1000)

setTimeout(() => { // wait 2 seconds then...
  console.log(3)
}, 2000)
console.log('done!');