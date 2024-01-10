const body = document.body;

// fetch('https://reqres.in/api/users')
// // .then(res => console.log(res))
//   .then(response => response.json()) // this get the response from the fetch request and changes it to JSON
//   .then(data => console.log(data))// console.log the .json 
//   .catch((error) => console.error(error.message));

// fetch('https://reqres.in/api/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

// fetch('https://reqres.in/api/users', {
//   method: 'POST',
//   headers: {
//   'Content-Type': 'application/json'
//   }, 
//   body: JSON.stringify({
//     name: 'User 1'
//   })
// }).then(res => {
//     return res.json ( )
//   })
//   .then (data => console. log (data))