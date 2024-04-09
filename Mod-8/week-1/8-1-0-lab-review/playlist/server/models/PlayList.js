const getId = require('../utils/getId');

class PlayList {
  static #all = [{ id: 0, playListName: 'My PlayList'}];
//create a new playlist
  constructor(playListName) {
    this.id = getId();
    this.playListName = playListName;

    PlayList.#all.push(this);
  }
// read all playlists
  static list() {
    return PlayList.#all;
  }
// read a single playlist
  static find(id) {
    return PlayList.#all.find((playList) => playList.id === id);
  }
// update a playlist
  static editPlayListName(id, newName) {
    const playList = PlayList.find(id);
    if (!playList) return null;
    playList.name = newName;
    return playList;
  }
// delete a playlist
  static delete(id) {
    const playListIndex = PlayList.#all.findIndex((PlayList) => PlayList.id === id);
    if (playListIndex < 0) return null;

    PlayList.#all.splice(playListIndex, 1);
    return true;
  }
// delete all playlists
  static deleteAll() {
    if (!PlayList.#all.length) return null;

    PlayList.#all.length = 0;
    return PlayList.#all;
  }
}

module.exports = PlayList;