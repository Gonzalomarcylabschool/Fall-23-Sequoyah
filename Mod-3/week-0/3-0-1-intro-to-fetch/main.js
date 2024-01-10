console.log('connected')



const fetchPromise = fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2023-2-26');
console.log(fetchPromise);
const body = document.body;
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // body.textContent = pokemonData.weight;
  })
  .catch((error) => console.error(error.message));