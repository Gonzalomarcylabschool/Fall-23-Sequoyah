# Putting it all together!

## A better fetchData helper

The `fetchData` helper does a good job at DRYing our code but we can add a few extra features to make it more useful.

- If the response was unsuccessful, we don't need to parse the body. We should instead throw an error.
- If we want to send a request with a different method type (POST, PATCH, or DELETE), our helper can't do that (it only does GET requests using `fetch`)
- We won't always get a response in JSON. 
- We can return our data in a "Tuple" format — an array with 2 values where the first value is _always_ the data (if present) and the second value is _always_ the error (if present). Only one of the two values will ever be present

```js
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

const postUser = (user) => {
  const newUser = { name: "morpheus", job: "leader" };

  const options = {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    }
  }

  const postResponseData = await fetch('https://reqres.in/api/users', options)
}

```

## API

Reading and understanding an API’s documentation can seem daunting at first, but by following these steps, you can break it down into manageable pieces:

1. **Identify the purpose and scope of the API**: The first step is to understand what the API does and what its intended use is. This information can usually be found in the introduction or overview section of the documentation.

2. **Familiarize yourself with the API’s structure**: Most APIs have a specific structure, with endpoints, methods, parameters, and responses. Familiarize yourself with these terms and how they apply to the specific API you are working with.

3. **Understand the authentication process**: Most APIs require some form of authentication to use them. Make sure you understand the authentication process and what credentials are needed.

4. **Read the API reference**: The API reference is usually the most detailed part of the documentation. It provides information on the specific endpoints, methods, parameters, and responses that are available. Take the time to read through this section carefully.

5. **Try out some sample requests**: To get a better understanding of how the API works, try out some sample requests. Most APIs provide sample code or a sandbox environment that you can use to experiment with the API.

6. **Look for examples and use cases**: Many APIs provide examples and use cases that can help you understand how the API can be used in real-world scenarios.

7. **Ask for help**: If you are having trouble understanding the documentation or using the API, don’t hesitate to ask for help. Many APIs have support forums or documentation that can provide additional guidance.

By following these steps, you can gain a better understanding of an API’s documentation and start using it effectively in your projects.


## Larger APIs
These APIs give you an incredible amount of data to play with. You may not care about the subject, but when it comes to building something with several routes, these are great options

### Star Wars API
A huge API with a ton of info about Star Wars you can work with
- https://pokeapi.co/

### Pokemon API
A massive set of data about pokemon
- https://swapi.dev/

### Open Library
This API is a *little* opaque from the docs, but messing around eventually reveals answers. 
- https://openlibrary.org/developers/api

Here are some hints to get started, try:
- get a list of books by a search string:
  - https://openlibrary.org/search.json?q=fantasy
- Take one of the books "key" property and query it individually with `.json`

```js
const getBook = async () => {
  const response = await fetch('https://openlibrary.org/works/OL45804W.json')
  const { title, covers } = await response.json()

  const titleEl = document.createElement('h1');
  titleEl.textContent = title;
  const coverEl = document.createElement('img');
  coverEl.src = `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`;

  document.body.append(titleEl, coverEl);
}

getBook();
```

Play around there's a lot of info!

## Simpler APIs
These offer a more limited range of data, but still a lot to go through! Especially the Chicago Art Museum! Remember, you can combine APIs. Maybe you have a "cheer up" app that loads up a random joke for a user, and lets them see random pictures of dogs by breed, and then a stretch goal could be it lets them favorite those photos to a gallery (saved urls in localStorage). 

Get creative and have fun!

|api site | API example Link | description |
|-------- | ------------| --------- |
| http://api.artic.edu/docs/#quick-start | https://api.artic.edu/api/v1/artworks | Chicago Museum of Art |
| https://datausa.io/about/api/ | https://datausa.io/api/data?drilldowns=State&measures=Population&year=2016 | Cool and simple population data |
| https://github.com/15Dkatz/official_joke_api | https://official-joke-api.appspot.com/random_joke | Random Jokes |
| https://randomuser.me/ | https://randomuser.me/api/ | New Fake random user |
| https://github.com/wh-iterabb-it/meowfacts | https://meowfacts.herokuapp.com/ | Cat facts, not sure if true |
| https://www.zippopotam.us/ | https://api.zippopotam.us/us/33162 | Zip code to lat/long
| https://funtranslations.com/api/ | POST request | A fun translator with options from pirates to Yoda |
| https://www.themealdb.com/api.php | https://www.themealdb.com/api/json/v1/1/categories.php | A recipe API |
| https://dog.ceo/dog-api/documentation/ | https://dog.ceo/api/breeds/image/random | Random dog pics |
| https://randomfox.ca/floof/ | https://randomfox.ca/floof/ | Random pictures of foxes |
| https://xkcd.com/json.html | https://xkcd.com/614/info.0.json | Load up XKCD comics
| https://www.ipify.org | https://api.ipify.org?format=json | Get the user's IP |
| https://ipinfo.io/developers | https://ipinfo.io/161.185.160.93/geo | Get geographic data from an IP |
| https://sunrise-sunset.org/api | https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400 | Sunset/sunrise time for geographic location |


## More APIs
There are of course more APIs out there than what we listed above. However, really try to aim for APIs that:
- Do not have API keys
- Require Servers
- Are needlessly complicated