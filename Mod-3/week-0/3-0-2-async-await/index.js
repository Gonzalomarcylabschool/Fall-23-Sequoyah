const body = document.body;
// const arr = [1, 2, 3, 4]
// arr.forEach((each) => console.log(each))


// fetch('https://reqres.in/api/users')
// // .then(res => console.log(res))
//   .then(response => {
//     return response.json();
//   }) // this get the response from the fetch request and changes it to JSON
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

const option = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
      name: 'User 1'
    })
  }
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // If the response status is not ok (e.g., 404 or 500), throw an error
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle errors here
    console.error('Error fetching data:', error.message);
    throw error; // Re-throw the error to propagate it further if needed
  }
};


const dataJson = await fetchData('https://reqres.in/api/users')

console.log(dataJson.data[1]);

body.innerHTML =`
<h2>User id: ${dataJson.data[1].id}</h2>
<p>Name: ${dataJson.data[1].first_name}</p>
<p>Email:${dataJson.data[1].email}</p>

` 