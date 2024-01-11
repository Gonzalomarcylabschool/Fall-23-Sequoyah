console.log('working')


const myFetchPromise = fetch('https://reqres.in/api/users');
console.log(myFetchPromise);

myFetchPromise
  .then(({ok, url, status}) => console.log(ok, status, url));
  // .then((data) => console.log(data));