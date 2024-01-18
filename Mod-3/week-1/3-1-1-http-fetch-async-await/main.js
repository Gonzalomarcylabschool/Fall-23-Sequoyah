fetch('https://pokeapi.co/api/v2/pokemon/ditto')// fetch gives us a response object
  .then((response) => { // use the .then to do something with the response object
    console.log(response ); // just logging the response object but we want to turn it into json
    return response.json();// turn it into json and return the value.
  })
  .then(({name}) => {
    console.log(name);
    const div = document.createElement('div')
    div.innerHTML = `
    <p>${name}</p>
    `
    document.body.append(div);
  })
  .catch(error => {
    console.error(error.message);
  })






  const fetchData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
  
      // Throw an error if the response was not 2xx
      if (!response.ok) {
        throw new Error(`Fetch failed. ${response.status} ${response.statusText}`)
      }
  
      // Check the content type to determine how to parse the response
      const isJson = (response.headers.get('content-type') || '').includes('application/json')
      let data = isJson ? await response.json() : await response.text()
  
      // return a tuple: [data, error]
      return [data, null]; 
    }
    catch (error) {
      // if there was an error, log it and return null
      console.error(error.message);
  
      // return a tuple: [data, error]
      return [null, error]; 
    }
  }


  const getDitto = async () => {
    const [ data ] = await fetchData('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(data.name);
    const div = document.createElement('div')
    div.innerHTML = `
    <p>${data.name}</p>
      `
    document.body.append(div);
  }

  getDitto();

  
// const asyncFunc = () => {
//   new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       return resolve('it was above 0.5');
//     } else {
//      return reject(new Error('it was below 0.5'));
//     }
//   });
// }

// const somePromise = asyncFunc();

// somePromise
//   .then((res)=>{
//     console.log(res)
//   })
//   .catch()