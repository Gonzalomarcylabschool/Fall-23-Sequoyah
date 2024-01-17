const getSunriseSunsetData = (latitude, longitude) => {
  const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.querySelector('#sunrise').textContent = data.results.sunrise
      document.querySelector('#sunset').textContent = data.results.sunset
      document.querySelector('#raw-output').textContent = JSON.stringify(data)
    })
    .catch(error => console.error('Error:', error));
}

const handleSubmit = (e) => {
  // stop the reload/redirect
  e.preventDefault();

  const formData = new FormData(e.target);
  const formObj = Object.fromEntries(formData);

  console.log('here is your data:', formObj);

  const { latitude, longitude } = formObj;
  getSunriseSunsetData(latitude, longitude);

  // e.target.reset(); // reset the form
}

const main = () => {
  document.querySelector('form').addEventListener('submit', handleSubmit);
}

main();