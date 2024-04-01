// Imports:
const gifs = require('./gifs.json'); // our mock data
const express = require('express');   // used to configure the express server

// The `app` object configures the server
const app = express();

// Controllers:
const serveIndex = (req, res, next) => res.sendFile(__dirname + '/index.html');
const serveAbout = (req, res, next) => res.send('<h1>About</h1>');
const serveData = (req, res, next) => {
  // if no filter is provided, req.query.filter will be undefined. use "" as a backup value
  const filterTerm = req.query.filter || "";
  // filter the gifs.data array using the title (see the gifs.json file) 
  const filteredData = gifs.data.filter((gif) => gif.title.toLowerCase().includes(filterTerm));
  // send back the filteredData
  res.send(filteredData);
}
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
}

// Routes:
app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// Once you've configured everything, start listening!
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now running on http://localhost:${port}`);
});