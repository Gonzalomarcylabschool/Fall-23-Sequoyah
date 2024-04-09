const express = require('express');
const path = require('path');

const { 
  servePlayLists,
  createPlayList,
  editPlayListName,
  servePlayList
} = require('./controllers/playListController');

const app = express();

const PORT = process.env.PORT || 8080;

const pathToDist = path.join(__dirname, '..', 'client', 'dist');

const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
}
const serveStatic = express.static(pathToDist);
const parseJSON = express.json();

app.use(logRoutes);
app.use(serveStatic);
app.use(parseJSON);

// endpoint and method dictate the controller function to be called
app.get('/api/playlists', servePlayLists);
app.get('/api/playlists/:id', servePlayList);
app.post('/api/playlists', createPlayList);
app.patch('/api/playlists/:id', editPlayListName);



app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});