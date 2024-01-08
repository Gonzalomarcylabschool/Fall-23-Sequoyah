// This function makes a promise and returns it.
const asyncAction = () => {
  console.log('async action started');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async action done!');
      resolve("Success!"); // resolve after 500ms
    }, 500);
  });

  return promise;
}

// "consume" the promise
const myFirstPromise = asyncAction();

// schedule a callback to execute when the promise resolves
myFirstPromise.then((successMessage) => {
  console.log(`Fulfilled! ${successMessage}`);
});

console.log("when does this happen?");